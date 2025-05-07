"use client"

import { useState, useEffect, useRef } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ChevronLeft, Mail, Check, AlertCircle, Loader2 } from "lucide-react"
import Cookies from "js-cookie"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import { submitCV } from "@/action/submitCV"
import { CookieConsentDialog } from "@/components/cookies-dialog/consnet-dialog"
// import { EnvChecker } from "@/components/env-checker"
import { FileUpload } from "@/components/file-upload"
import { CountryCodeSelector } from "@/components/country-code-selector"
import HCaptcha from "@hcaptcha/react-hcaptcha"

// Form schema
const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name is required" })
    .max(10, { message: "First name cannot exceed 10 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message: "First name should only contain letters, spaces, hyphens, or apostrophes",
    }),
  lastName: z
    .string()
    .min(2, { message: "Last name is required" })
    .max(10, { message: "Last name cannot exceed 10 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message: "Last name should only contain letters, spaces, hyphens, or apostrophes",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .refine(
      (email) => {
        // Check for common legitimate email domains
        const validDomains = [
          "gmail.com",
          "outlook.com",
          "hotmail.com",
          "yahoo.com",
          "icloud.com",
          "aol.com",
          "protonmail.com",
          "mail.com",
        ]
        // Check for temporary email domains
        const tempDomains = [
          "tempmail.com",
          "temp-mail.org",
          "guerrillamail.com",
          "mailinator.com",
          "yopmail.com",
          "10minutemail.com",
        ]

        const domain = email.split("@")[1]?.toLowerCase()

        if (!domain || !email.includes("@")) {
          return false
        }

        if (tempDomains.includes(domain)) {
          return false
        }

        // Either it's in our valid domains list or we'll accept it if it's not in the temp domains list
        // and looks like a business domain
        return validDomains.includes(domain) || (!tempDomains.includes(domain) && domain.includes("."))
      },
      { message: "Please use a valid email provider (Gmail, Outlook, or business email)" },
    ),
  mobileNumber: z
    .string()
    .min(7, { message: "Mobile number is required" })
    .max(15, { message: "Mobile number cannot exceed 15 digits" })
    .regex(/^\d+$/, { message: "Mobile number should only contain digits" }),
  jobType: z.string({
    required_error: "Job type is required",
  }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
  marketingConsent: z.boolean().optional(),
})

type FormValues = z.infer<typeof formSchema>

// Cookie management
const COOKIE_NAME = "cv_submission_form_data"
const COOKIE_EXPIRY = 7 // days

const saveFormToCookies = (data: Partial<FormValues>, countryCode: string) => {
  const cookieData = { ...data, countryCode }
  Cookies.set(COOKIE_NAME, JSON.stringify(cookieData), { expires: COOKIE_EXPIRY })
}

const getFormFromCookies = (): { formData: Partial<FormValues>; countryCode: string } => {
  const cookieData = Cookies.get(COOKIE_NAME)
  if (cookieData) {
    try {
      const parsedData = JSON.parse(cookieData)
      const { countryCode, ...formData } = parsedData
      return { formData, countryCode: countryCode || "+966" }
    } catch (e) {
      console.error("Error parsing cookie data:", e)
    }
  }
  return { formData: {}, countryCode: "+966" }
}

// Dialog component
interface DialogProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  title: string
  message: string
}

function Dialog({ isOpen, onClose, onConfirm, title, message }: DialogProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-md p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <AlertCircle className="h-5 w-5" />
          </button>
        </div>
        <p className="mb-6 text-gray-600">{message}</p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            No
          </button>
          <button
            onClick={() => {
              onConfirm()
              onClose()
            }}
            className="px-4 py-2 bg-[#0D8A6A] text-white rounded-md hover:bg-[#0A6E55]"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}

// Email submission interface and functions
interface EmailSubmission {
  email: string
  timestamp: number
  jobType: string
}

function checkEmailRestriction(email: string): { restricted: boolean; daysLeft: number; jobType?: string } {
  try {
    const storedSubmissions = localStorage.getItem("email_submissions")
    if (!storedSubmissions) return { restricted: false, daysLeft: 0 }

    const submissions: EmailSubmission[] = JSON.parse(storedSubmissions)
    const emailSubmission = submissions.find((sub) => sub.email.toLowerCase() === email.toLowerCase())

    if (!emailSubmission) return { restricted: false, daysLeft: 0 }

    const now = Date.now()
    const submissionTime = emailSubmission.timestamp
    const oneDayInMs = 24 * 60 * 60 * 1000
    const timeDiff = now - submissionTime

    if (timeDiff < oneDayInMs) {
      const hoursLeft = Math.ceil((oneDayInMs - timeDiff) / (60 * 60 * 1000))
      const daysLeft = hoursLeft > 24 ? Math.ceil(hoursLeft / 24) : 1
      return { restricted: true, daysLeft, jobType: emailSubmission.jobType }
    }

    return { restricted: false, daysLeft: 0 }
  } catch (error) {
    console.error("Error checking email restriction:", error)
    return { restricted: false, daysLeft: 0 }
  }
}

function saveEmailSubmission(email: string, jobType: string) {
  try {
    const storedSubmissions = localStorage.getItem("email_submissions")
    let submissions: EmailSubmission[] = storedSubmissions ? JSON.parse(storedSubmissions) : []

    // Remove any existing entry for this email
    submissions = submissions.filter((sub) => sub.email.toLowerCase() !== email.toLowerCase())

    // Add new submission
    submissions.push({
      email,
      timestamp: Date.now(),
      jobType,
    })

    localStorage.setItem("email_submissions", JSON.stringify(submissions))
  } catch (error) {
    console.error("Error saving email submission:", error)
  }
}

export default function CVSubmissionForm() {
  const [file, setFile] = useState<File | null>(null)
  const [showJobTypeError, setShowJobTypeError] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isResendDialogOpen, setIsResendDialogOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState("")
  const [emailRestriction, setEmailRestriction] = useState<{ restricted: boolean; daysLeft: number; jobType?: string }>(
    {
      restricted: false,
      daysLeft: 0,
    },
  )
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Get saved country code from cookies
  const { formData: savedFormData, countryCode: savedCountryCode } = getFormFromCookies()
  const [selectedCountryCode, setSelectedCountryCode] = useState(savedCountryCode || "+966")
  const { toast } = useToast()
  const captchaRef = useRef<HCaptcha>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: savedFormData.firstName || "",
      lastName: savedFormData.lastName || "",
      email: savedFormData.email || "",
      mobileNumber: savedFormData.mobileNumber || "",
      jobType: savedFormData.jobType || "",
      termsAccepted: savedFormData.termsAccepted || false,
      marketingConsent: savedFormData.marketingConsent || false,
    },
  })

  // Check email restriction when email changes
  const watchEmail = form.watch("email")
  useEffect(() => {
    if (watchEmail && watchEmail.includes("@")) {
      const result = checkEmailRestriction(watchEmail)
      setEmailRestriction(result)
    } else {
      setEmailRestriction({ restricted: false, daysLeft: 0 })
    }
  }, [watchEmail])

  // Save form data to cookies when values change
  useEffect(() => {
    const subscription = form.watch((value) => {
      saveFormToCookies(value as Partial<FormValues>, selectedCountryCode)
    })
    return () => subscription.unsubscribe()
  }, [form, selectedCountryCode])

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token)
    toast({
      title: "Captcha Verified",
      description: "Thank you for verifying you're human!",
    })
  }

  const handleCaptchaExpire = () => {
    setCaptchaToken(null)
    toast({
      title: "Captcha Expired",
      description: "Please verify the captcha again.",
      variant: "destructive",
    })
  }

  const handleSubmit = async (values: FormValues) => {
    if (!captchaToken) {
      toast({
        title: "Captcha Required",
        description: "Please complete the captcha verification.",
        variant: "destructive",
      })
      return
    }

    const restriction = checkEmailRestriction(values.email)
    if (restriction.restricted) {
      toast({
        title: "Application Restricted",
        description: `You've already applied for a ${restriction.jobType} position. Please wait ${restriction.daysLeft} days before applying again.`,
        variant: "destructive",
      })
      return
    }

    if (!file) {
      toast({
        title: "Error",
        description: "Please upload your CV",
        variant: "destructive",
      })
      return
    }

    // Save form data to cookies
    saveFormToCookies(values, selectedCountryCode)
    setIsSubmitting(true)

    try {
      // Show loading toast
      toast({
        title: "Submitting Form",
        description: "Please wait while we process your submission...",
      })

      // In a real app, you would upload the file to a storage service
      // and get a URL back. For now, we'll simulate this.
      const fileUrl = file ? URL.createObjectURL(file) : undefined

      // Create a FormData object to pass to the server action
      const formData = new FormData()
      formData.append("firstName", values.firstName)
      formData.append("lastName", values.lastName)
      formData.append("email", values.email)
      formData.append("mobileNumber", values.mobileNumber)
      formData.append("countryCode", selectedCountryCode)
      formData.append("jobType", values.jobType)
      formData.append("termsAccepted", String(values.termsAccepted))
      formData.append("marketingConsent", String(values.marketingConsent || false))
      formData.append("captchaToken", captchaToken)
      if (fileUrl) formData.append("fileUrl", fileUrl)

      // Call the server action with the form data
      const result = await submitCV(formData)

      if (result.success) {
        // Save to local storage as a fallback
        saveEmailSubmission(values.email, values.jobType)

        setSubmittedEmail(values.email)
        setFormSubmitted(true)

        toast({
          title: "Success",
          description: "Form submitted successfully! A confirmation has been sent to your email.",
          variant: "default",
        })

        // Clear the form cookie after successful submission
        Cookies.remove(COOKIE_NAME)

        // Reset captcha
        captchaRef.current?.resetCaptcha()
        setCaptchaToken(null)
      } else {
        if (result.limitExceeded) {
          toast({
            title: "Submission Limit Exceeded",
            description: result.error,
            variant: "destructive",
          })
        } else {
          toast({
            title: "Submission Failed",
            description: result.error || "There was an error submitting your form. Please try again.",
            variant: "destructive",
          })
        }
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle resend email
  const handleResendEmail = () => {
    // Simulate email resend
    toast({
      title: "Email Sent",
      description: `Confirmation email has been resent to ${submittedEmail}`,
    })
  }

  return (
    <div className="max-w-4xl mt-32 md:24 mx-auto px-8 lg:px-auto">
      <CookieConsentDialog />
      {/* <EnvChecker /> */}
      <Link href="/">
        <button className="flex items-center text-[#6208ca] mb-8 font-medium hover:text-[#5007a3] transition-colors">
          <ChevronLeft className="h-5 w-5" />
          Back
        </button>
      </Link>

      <div className="h-0.5 w-64 bg-[#6208CA] mb-10"></div>

      <h1 className="text-3xl font-medium mb-6 text-[#6208ca]">Submit Your CV</h1>

      <p className="text-gray-700 mb-12 leading-relaxed">
        Welcome to our career opportunities page! We're excited to learn more about you and how you can contribute to
        our team. To get started, please submit your CV using the form below. This is your chance to showcase your
        skills, experience, and achievements that make you the perfect fit for our organization.
      </p>

      {formSubmitted && (
        <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-md">
          <div className="flex items-center mb-2">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <h3 className="font-medium">Form Submitted Successfully</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Thank you for your submission. A confirmation email has been sent to {submittedEmail}.
          </p>
          <div className="pl-9 mb-4 bg-yellow-50 p-3 rounded-md border border-yellow-200">
            <p className="text-amber-800 flex items-start">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Please note:</strong> You can submit another application after 24 hours from now.
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsResendDialogOpen(true)}
            className="flex items-center text-[#0D8A6A] text-sm font-medium"
          >
            <Mail className="h-4 w-4 mr-1" />
            Resend confirmation email
          </button>
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault()
          if (formSubmitted) {
            setIsDialogOpen(true)
          } else {
            form.handleSubmit((values) => handleSubmit(values))()
          }
        }}
        className="space-y-12 bg-white rounded-xl p-8 shadow-sm border border-gray-100"
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6 text-[#6208ca] flex items-center">
            <div className="h-8 w-1 bg-[#6208ca] mr-3 rounded-full"></div>
            Personal details
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block mb-2">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                {...form.register("firstName")}
                className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-2 focus:outline-none focus:border-gray-500"
              />
              {form.formState.errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-2">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                {...form.register("lastName")}
                className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-2 focus:outline-none focus:border-gray-500"
              />
              {form.formState.errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.lastName.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                {...form.register("email")}
                type="email"
                className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-2 focus:outline-none focus:border-gray-500"
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
              )}
              {emailRestriction.restricted && (
                <p className="text-amber-600 text-sm mt-1">
                  You've already applied for a {emailRestriction.jobType} position. Please wait{" "}
                  {emailRestriction.daysLeft} days before applying again.
                </p>
              )}
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1">
                <label className="block mb-2">
                  Country code <span className="text-red-500">*</span>
                </label>
                <CountryCodeSelector value={selectedCountryCode} onChange={(code) => setSelectedCountryCode(code)} />
              </div>

              <div className="col-span-3">
                <label className="block mb-2">
                  Mobile number <span className="text-red-500">*</span>
                </label>
                <input
                  {...form.register("mobileNumber")}
                  className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-2 focus:outline-none focus:border-gray-500"
                />
                {form.formState.errors.mobileNumber && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.mobileNumber.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-medium mb-6">Please provide your details</h2>

          <div>
            <label className="block mb-2">
              Job type <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                {...form.register("jobType")}
                className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-2 focus:outline-none focus:border-gray-500 appearance-none"
                onChange={(e) => {
                  form.setValue("jobType", e.target.value)
                  setShowJobTypeError(e.target.value === "")
                }}
                onBlur={() => setShowJobTypeError(form.getValues("jobType") === "")}
                defaultValue=""
              >
                <option value="" disabled>
                  Select job type
                </option>
                <option value="audit">Audit</option>
                <option value="creative_arts_and_design">Creative Arts and Design</option>
                <option value="customer_service">Customer Service</option>
                <option value="finance_and_accounting">Finance and Accounting</option>
                <option value="human_resources">Human Resources (HR)</option>
                <option value="information_technology">Information Technology (IT)</option>
                <option value="legal">Legal</option>
                <option value="procurement">Procurement</option>
                <option value="sales_and_marketing">Sales and Marketing</option>
                <option value="cybersecurity_vapt">Cybersecurity Technical Assessment (VAPT)</option>
                <option value="supply_chain">Supply Chain</option>
                <option value="transportation_logistics">Transportation and Logistics</option>
                <option value="full_stack_developer">Full Stack Developer</option>
                <option value="front_end_developer">Front End Developer</option>
                <option value="backend_developer">Backend Developer</option>
                <option value="cloud_solution_architect">Cloud Solution Architect</option>
                <option value="operational_technology">Operational Technology (OT)</option>
              </select>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
            {form.formState.errors.jobType && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.jobType.message}</p>
            )}
            {showJobTypeError && !form.formState.errors.jobType && (
              <p className="text-red-500 text-sm mt-1">Job type is required</p>
            )}
          </div>

          <div className="mt-8">
            <FileUpload onFileChange={setFile} accept=".pdf" maxSize={5} label="Upload your CV" required={true} />
          </div>

          <div className="mt-8">
            <label className="block mb-2">
              Verify you are human <span className="text-red-500">*</span>
            </label>
            <HCaptcha
              sitekey="41b8bd2e-8c50-4e32-98d8-c5189bb4934c" // Replace with your actual hCaptcha site key
              onVerify={handleCaptchaVerify}
              onExpire={handleCaptchaExpire}
              ref={captchaRef}
            />
            {!captchaToken && <p className="text-amber-600 text-sm mt-1">Please complete the captcha verification</p>}
          </div>

          <div className="space-y-4 mt-8">
            <div className="flex items-start">
              <input type="checkbox" id="terms" {...form.register("termsAccepted")} className="mt-1 mr-2" />
              <label htmlFor="terms" className="text-sm">
                I acknowledge that I have read and understand the{" "}
                <Link href="/terms" className="text-[#3c5bc0] underline">
                  Terms and Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-[#3c5bc0] underline">
                  Privacy Notice
                </Link>
                . <span className="text-red-500">*</span>
              </label>
            </div>
            {form.formState.errors.termsAccepted && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.termsAccepted.message}</p>
            )}

            <div className="flex items-start">
              <input type="checkbox" id="marketing" {...form.register("marketingConsent")} className="mt-1 mr-2" />
              <label htmlFor="marketing" className="text-sm">
                By selecting this box you consent to receive updates and marketing communications.
              </label>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="bg-[#6208CA] text-white px-6 py-3 rounded hover:bg-[#3c0f6e] transition-colors flex items-center"
              disabled={isSubmitting || !captchaToken}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Request"
              )}
            </button>

            <p className="text-sm text-gray-500 mt-4">
              This site is protected by hCAPTCHA and the Google{" "}
              <Link href="/https://policies.google.com/privacy?hl=en" className="text-[#3c5bc0]">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link href="/https://policies.google.com/terms?hl=en" className="text-[#3c5bc0]">
                Terms of Service
              </Link>{" "}
              apply.
            </p>
          </div>
        </div>
      </form>

      {/* Confirmation Dialog */}
      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={() => form.handleSubmit(handleSubmit)()}
        title="Confirm Resubmission"
        message="You have already submitted this form. Do you want to submit it again?"
      />

      {/* Resend Email Dialog */}
      <Dialog
        isOpen={isResendDialogOpen}
        onClose={() => setIsResendDialogOpen(false)}
        onConfirm={handleResendEmail}
        title="Resend Confirmation Email"
        message={`Do you want to resend the confirmation email to ${submittedEmail}?`}
      />
    </div>
  )
}
