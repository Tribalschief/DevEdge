"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ChevronLeft, Upload, ChevronDown, X, Mail, Check } from "lucide-react"
import Cookies from "js-cookie"
import { useToast } from "@/hooks/use-toast"

import { SubmitHandler } from 'react-hook-form';
// First, import the submitCV function
import { submitCV } from "@/action/submitCV"
import type { FieldValues } from 'react-hook-form';
import { CookieConsentDialog } from "@/components/cookies-dialog/consnet-dialog"

// Country codes data
const countryCodes = [
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+351", country: "Portugal", flag: "🇵🇹" },
  { code: "+970", country: "Palestine", flag: "🇵🇸" },
  { code: "+1", country: "Puerto Rico", flag: "🇵🇷" },
  { code: "+508", country: "France", flag: "🇫🇷" },
  { code: "+48", country: "Poland", flag: "🇵🇱" },
  { code: "+92", country: "Pakistan", flag: "🇵🇰" },
  { code: "+63", country: "Philippines", flag: "🇵🇭" },
  { code: "+675", country: "Papua New Guinea", flag: "🇵🇬" },
  { code: "+689", country: "French Polynesia", flag: "🇵🇫" },
  { code: "+51", country: "Peru", flag: "🇵🇪" },
  { code: "+507", country: "Panama", flag: "🇵🇦" },
  { code: "+968", country: "Oman", flag: "🇴🇲" },
  { code: "+64", country: "New Zealand", flag: "🇳🇿" },
  { code: "+683", country: "Niue", flag: "🇳🇺" },
  { code: "+674", country: "Nauru", flag: "🇳🇷" },
  { code: "+977", country: "Nepal", flag: "🇳🇵" },
  { code: "+47", country: "Norway", flag: "🇳🇴" },
  { code: "+31", country: "Netherlands", flag: "🇳🇱" },
  { code: "+505", country: "Nicaragua", flag: "🇳🇮" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+672", country: "Norfolk Island", flag: "🇳🇫" },
  { code: "+227", country: "Niger", flag: "🇳🇪" },
  { code: "+687", country: "New Caledonia", flag: "🇳🇨" },
]

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name is required",
  }),
  lastName: z.string().min(2, {
    message: "Last name is required",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  mobileNumber: z.string().min(9, {
    message: "Mobile number is required",
  }),
  jobType: z.string({
    required_error: "Job type is required",
  }),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
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
            <X className="h-5 w-5" />
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

export default function CVSubmissionForm() {
  const [file, setFile] = useState<File | null>(null)
  const [showJobTypeError, setShowJobTypeError] = useState(false)
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isResendDialogOpen, setIsResendDialogOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState("")

  // Get saved country code from cookies
  const { formData: savedFormData, countryCode: savedCountryCode } = getFormFromCookies()
  const [selectedCountryCode, setSelectedCountryCode] = useState(() => {
    return countryCodes.find((c) => c.code === savedCountryCode) || countryCodes[0]
  })

  const dropdownRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast() // Use the toast hook

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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Save form data to cookies when values change
  useEffect(() => {
    const subscription = form.watch((value) => {
      saveFormToCookies(value as Partial<FormValues>, selectedCountryCode.code)
    })
    return () => subscription.unsubscribe()
  }, [form, selectedCountryCode])

  // Then update the handleSubmit function
  const handleSubmit = async (values: FormValues) => {
    if (!file) {
      toast({
        title: "Error",
        description: "Please upload your CV",
        variant: "destructive",
      })
      return
    }

    // Save form data to cookies
    saveFormToCookies(values, selectedCountryCode.code)

    try {
      // Show loading toast
      toast({
        title: "Submitting Form",
        description: "Please wait while we process your submission...",
      })

      // In a real app, you would upload the file to a storage service
      // and get a URL back. For now, we'll simulate this.
      const fileUrl = file ? URL.createObjectURL(file) : undefined

      // Call the server action with the form data
      const result = await submitCV({
        ...values,
        countryCode: selectedCountryCode.code,
        fileUrl,
      })

      if (result.success) {
        setSubmittedEmail(values.email)
        setFormSubmitted(true)

        toast({
          title: "Success",
          description: "Form submitted successfully! A confirmation has been sent to your email.",
          variant: "default",
        })

        // Clear the form cookie after successful submission
        Cookies.remove(COOKIE_NAME)
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
    }
  }

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      toast({
        title: "File uploaded",
        description: `${e.target.files[0].name} has been uploaded successfully.`,
      })
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
    <div>
      <CookieConsentDialog />

      <button className="flex items-center text-[#0D8A6A] mb-8 font-medium">
        <ChevronLeft className="h-5 w-5" />
        Back
      </button>

      <div className="h-0.5 w-64 bg-[#0D8A6A] mb-10"></div>

      <h1 className="text-3xl font-medium mb-6">Submit Your CV</h1>

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
            form.handleSubmit(handleSubmit as SubmitHandler<FieldValues>)()
          }
        }}
        className="space-y-12"
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-medium mb-6">Personal details</h2>

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
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1 relative" ref={dropdownRef}>
                <div
                  className="flex items-center border-b border-gray-300 h-10 mt-8 cursor-pointer"
                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{selectedCountryCode.flag}</span>
                      <span className="text-sm">{selectedCountryCode.code}</span>
                    </div>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                </div>

                {isCountryDropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full max-h-60 overflow-auto bg-white border border-gray-200 rounded-sm shadow-lg">
                    {countryCodes.map((country) => (
                      <div
                        key={country.code}
                        className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedCountryCode(country)
                          setIsCountryDropdownOpen(false)
                          saveFormToCookies(form.getValues(), country.code)
                        }}
                      >
                        <span className="text-xl">{country.flag}</span>
                        <span>{country.code}</span>
                      </div>
                    ))}
                  </div>
                )}
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
            <label className="block mb-2 text-red-500 text-sm font-normal">
              Job type <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                {...form.register("jobType")}
                className="w-full border-0 border-b border-red-500 bg-transparent px-0 py-2 focus:outline-none focus:border-gray-500 appearance-none"
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
            {showJobTypeError && <p className="text-red-500 text-sm mt-1">Job type is required</p>}
          </div>

          <div className="mt-8">
            <label className="block mb-2">
              Attachment <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-600 mb-2">Maximum size: 5 MB (DOC, DOCX, PDF)</p>

            <div className="border border-dashed border-gray-300 rounded-sm p-8 text-center">
              <input
                type="file"
                id="cv-upload"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
              <label htmlFor="cv-upload" className="cursor-pointer flex flex-col items-center">
                <Upload className="h-6 w-6 text-[#0D8A6A] mb-2" />
                <p className="text-[#0D8A6A] font-medium mb-2">Upload a file</p>
                <p className="text-sm text-gray-600">
                  Drag and drop or <span className="text-[#0D8A6A] font-medium">Browse file</span>
                </p>
              </label>
            </div>
            {file && <p className="text-sm text-green-600 mt-2">File selected: {file.name}</p>}
          </div>

          <div className="space-y-4 mt-8">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                {...form.register("termsAccepted", { required: true })}
                className="mt-1 mr-2"
              />
              <label htmlFor="terms" className="text-sm">
                I acknowledge that I have read and understand the{" "}
                <a href="#" className="text-[#0D8A6A] underline">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#0D8A6A] underline">
                  Privacy Notice
                </a>
                . <span className="text-red-500">*</span>
              </label>
            </div>

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
              className="bg-[#7FBFB0] text-white px-6 py-3 rounded hover:bg-[#6AAFA0] transition-colors"
            >
              Submit Request
            </button>

            <p className="text-sm text-gray-500 mt-4">
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="#" className="text-[#0D8A6A]">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#0D8A6A]">
                Terms of Service
              </a>{" "}
              apply.
            </p>
          </div>
        </div>
      </form>

      {/* Confirmation Dialog */}
      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onConfirm={() => form.handleSubmit(handleSubmit as SubmitHandler<FieldValues>)()}
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
