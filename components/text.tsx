"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ChevronLeft, Upload, ChevronDown, X, Mail, Check, LinkIcon, AlertCircle, Calendar } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

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
  termsAccepted: z.boolean({
    required_error: "Terms accepted is required",
  }),
  marketingConsent: z.boolean().optional(),
})

type FormValues = z.infer<typeof formSchema>

// Interface for storing email submission data
interface EmailSubmission {
  email: string
  timestamp: number
  jobType: string
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
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-xl">
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
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            No
          </button>
          <button
            onClick={() => {
              onConfirm()
              onClose()
            }}
            className="px-4 py-2 bg-[#6208ca] text-white rounded-md hover:bg-[#5007a3] transition-colors"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}

// Mock cookie consent dialog
function CookieConsentDialog() {
  return null // Just a placeholder for UI demo
}

// Function to check if email has been submitted in the last month
function checkEmailRestriction(email: string): { restricted: boolean; daysLeft: number; jobType?: string } {
  try {
    const storedSubmissions = localStorage.getItem("email_submissions")
    if (!storedSubmissions) return { restricted: false, daysLeft: 0 }

    const submissions: EmailSubmission[] = JSON.parse(storedSubmissions)
    const emailSubmission = submissions.find((sub) => sub.email.toLowerCase() === email.toLowerCase())

    if (!emailSubmission) return { restricted: false, daysLeft: 0 }

    const now = Date.now()
    const submissionTime = emailSubmission.timestamp
    const oneMonthInMs = 30 * 24 * 60 * 60 * 1000
    const timeDiff = now - submissionTime

    if (timeDiff < oneMonthInMs) {
      const daysLeft = Math.ceil((oneMonthInMs - timeDiff) / (24 * 60 * 60 * 1000))
      return { restricted: true, daysLeft, jobType: emailSubmission.jobType }
    }

    return { restricted: false, daysLeft: 0 }
  } catch (error) {
    console.error("Error checking email restriction:", error)
    return { restricted: false, daysLeft: 0 }
  }
}

// Function to save email submission
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

// Format date to display when user can apply again
function formatNextApplicationDate(daysLeft: number): string {
  const date = new Date()
  date.setDate(date.getDate() + daysLeft)
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
}

export default function CVSubmissionForm() {
  const [file, setFile] = useState<File | null>(null)
  const [showJobTypeError, setShowJobTypeError] = useState(false)
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isResendDialogOpen, setIsResendDialogOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [emailRestriction, setEmailRestriction] = useState<{ restricted: boolean; daysLeft: number; jobType?: string }>(
    {
      restricted: false,
      daysLeft: 0,
    },
  )

  // Default country code
  const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0])

  const dropdownRef = useRef<HTMLDivElement>(null)
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      jobType: "",
      termsAccepted: false,
      marketingConsent: false,
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

  // UI-only form submission handler
  const handleSubmit = async (values: FormValues) => {
    // Check if email is restricted
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

    setIsSubmitting(true)

    // Show loading toast
    toast({
      title: "Submitting Form",
      description: "Please wait while we process your submission...",
    })

    // Simulate API call with timeout
    setTimeout(() => {
      setSubmittedEmail(values.email)
      setFormSubmitted(true)
      setIsSubmitting(false)

      // Save email submission to localStorage
      saveEmailSubmission(values.email, values.jobType)

      toast({
        title: "Success",
        description: "Form submitted successfully! A confirmation has been sent to your email.",
        variant: "default",
      })
    }, 1500)
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
    <div className="max-w-4xl mt-24 mx-auto px-8 lg:px-auto">
      <CookieConsentDialog />
      <a href="#" className="inline-block">
        <button className="flex items-center text-[#6208ca] mb-8 font-medium hover:text-[#5007a3] transition-colors">
          <ChevronLeft className="h-5 w-5" />
          Back
        </button>
      </a>

      <div className="h-1 w-64 bg-[#6208ca] mb-10 rounded-full"></div>

      <h1 className="text-3xl font-bold mb-6 text-[#6208ca]">Submit Your CV</h1>

      <p className="text-gray-700 mb-12 leading-relaxed max-w-3xl">
        Welcome to our career opportunities page! We're excited to learn more about you and how you can contribute to
        our team. To get started, please submit your CV using the form below. This is your chance to showcase your
        skills, experience, and achievements that make you the perfect fit for our organization.
      </p>

      {formSubmitted && (
        <div className="mb-8 p-6 bg-purple-50 border border-purple-200 rounded-lg shadow-sm">
          <div className="flex items-center mb-3">
            <div className="bg-[#6208ca] rounded-full p-1 mr-3">
              <Check className="h-5 w-5 text-white" />
            </div>
            <h3 className="font-medium text-lg">Form Submitted Successfully</h3>
          </div>
          <p className="text-gray-600 mb-4 pl-9">
            Thank you for your submission. A confirmation email has been sent to{" "}
            <span className="font-medium">{submittedEmail}</span>.
          </p>
          <div className="pl-9 mb-4 bg-yellow-50 p-3 rounded-md border border-yellow-200">
            <p className="text-amber-800 flex items-start">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Please note:</strong> You can submit another application after 30 days from today.
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsResendDialogOpen(true)}
            className="flex items-center text-[#6208ca] text-sm font-medium ml-9 hover:text-[#5007a3] transition-colors"
          >
            <Mail className="h-4 w-4 mr-2" />
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
            form.handleSubmit(handleSubmit)()
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
              <label className="block mb-2 font-medium">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                {...form.register("firstName")}
                className="w-full border border-gray-300 rounded-lg bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6208ca] focus:border-transparent transition-all"
              />
              {form.formState.errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                {...form.register("lastName")}
                className="w-full border border-gray-300 rounded-lg bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6208ca] focus:border-transparent transition-all"
              />
              {form.formState.errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.lastName.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                {...form.register("email")}
                type="email"
                className={`w-full border ${
                  emailRestriction.restricted ? "border-red-300 bg-red-50" : "border-gray-300"
                } rounded-lg bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6208ca] focus:border-transparent transition-all`}
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
              )}

              {emailRestriction.restricted && (
                <div className="mt-2 p-3 bg-red-50 border border-red-200 rounded-md">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-red-700 text-sm font-medium">
                        This email has already been used for a recent application
                      </p>
                      <p className="text-red-600 text-sm mt-1">
                        You applied for a <span className="font-medium">{emailRestriction.jobType}</span> position.
                        Please wait {emailRestriction.daysLeft} {emailRestriction.daysLeft === 1 ? "day" : "days"}{" "}
                        before submitting another application.
                      </p>
                      <p className="text-red-600 text-sm mt-1 flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        You can apply again after {formatNextApplicationDate(emailRestriction.daysLeft)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-1 relative" ref={dropdownRef}>
                <label className="block mb-2 font-medium">
                  Code <span className="text-red-500">*</span>
                </label>
                <div
                  className="flex items-center border border-gray-300 rounded-lg h-10 px-3 cursor-pointer hover:border-[#6208ca] transition-colors"
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
                  <div className="absolute z-10 mt-1 w-full max-h-60 overflow-auto bg-white border border-gray-200 rounded-lg shadow-lg">
                    {countryCodes.map((country) => (
                      <div
                        key={country.code}
                        className="flex items-center gap-3 px-3 py-2 hover:bg-purple-50 cursor-pointer"
                        onClick={() => {
                          setSelectedCountryCode(country)
                          setIsCountryDropdownOpen(false)
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
                <label className="block mb-2 font-medium">
                  Mobile number <span className="text-red-500">*</span>
                </label>
                <input
                  {...form.register("mobileNumber")}
                  className="w-full border border-gray-300 rounded-lg bg-transparent px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#6208ca] focus:border-transparent transition-all"
                />
                {form.formState.errors.mobileNumber && (
                  <p className="text-red-500 text-sm mt-1">{form.formState.errors.mobileNumber.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6 text-[#6208ca] flex items-center">
            <div className="h-8 w-1 bg-[#6208ca] mr-3 rounded-full"></div>
            Please provide your details
          </h2>

          <div>
            <label className="block mb-2 font-medium">
              Job type <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                {...form.register("jobType")}
                className={`w-full border border-gray-300 rounded-lg bg-transparent px-4 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-[#6208ca] focus:border-transparent transition-all ${
                  showJobTypeError ? "border-red-500" : ""
                }`}
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
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </div>
            </div>
            {showJobTypeError && <p className="text-red-500 text-sm mt-1">Job type is required</p>}
          </div>

          <div className="mt-8">
            <label className="block mb-2 font-medium">
              Attachment <span className="text-red-500">*</span>
            </label>
            <p className="text-sm text-gray-600 mb-3">Maximum size: 5 MB (DOC, DOCX, PDF)</p>

            <div
              className={`border-2 border-dashed ${file ? "border-[#6208ca] bg-purple-50" : "border-gray-300"} rounded-lg p-8 text-center transition-colors`}
            >
              <input
                type="file"
                id="cv-upload"
                className="hidden"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
              <label htmlFor="cv-upload" className="cursor-pointer flex flex-col items-center">
                {file ? (
                  <>
                    <div className="bg-[#6208ca] rounded-full p-3 mb-3">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-[#6208ca] font-medium mb-2">File uploaded successfully</p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <span className="mr-2">{file.name}</span>
                      <button
                        type="button"
                        className="text-red-500 hover:text-red-700"
                        onClick={(e) => {
                          e.preventDefault()
                          setFile(null)
                        }}
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </p>
                  </>
                ) : (
                  <>
                    <div className="bg-purple-100 rounded-full p-3 mb-3">
                      <Upload className="h-6 w-6 text-[#6208ca]" />
                    </div>
                    <p className="text-[#6208ca] font-medium mb-2">Upload a file</p>
                    <p className="text-sm text-gray-600">
                      Drag and drop or <span className="text-[#6208ca] font-medium">Browse file</span>
                    </p>
                  </>
                )}
              </label>
            </div>
          </div>

          <div className="space-y-4 mt-8 bg-gray-50 p-6 rounded-lg">
            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  type="checkbox"
                  id="terms"
                  {...form.register("termsAccepted", { required: true })}
                  className="h-4 w-4 rounded border-gray-300 text-[#6208ca] focus:ring-[#6208ca]"
                />
              </div>
              <label htmlFor="terms" className="ml-3 text-sm">
                I acknowledge that I have read and understand the{" "}
                <a href="#" className="text-[#6208ca] underline hover:text-[#5007a3] transition-colors">
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#6208ca] underline hover:text-[#5007a3] transition-colors">
                  Privacy Notice
                </a>
                . <span className="text-red-500">*</span>
              </label>
            </div>

            <div className="flex items-start">
              <div className="flex h-5 items-center">
                <input
                  type="checkbox"
                  id="marketing"
                  {...form.register("marketingConsent")}
                  className="h-4 w-4 rounded border-gray-300 text-[#6208ca] focus:ring-[#6208ca]"
                />
              </div>
              <label htmlFor="marketing" className="ml-3 text-sm">
                By selecting this box you consent to receive updates and marketing communications.
              </label>
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting || emailRestriction.restricted}
              className={`bg-[#6208ca] text-white px-6 py-3 rounded-lg hover:bg-[#5007a3] transition-colors flex items-center justify-center min-w-[180px] ${
                isSubmitting || emailRestriction.restricted ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>

            <p className="text-sm text-gray-500 mt-4 flex items-center">
              <LinkIcon className="h-4 w-4 mr-2 text-gray-400" />
              This site is protected by reCAPTCHA and the Google{" "}
              <a href="#" className="text-[#6208ca] mx-1 hover:text-[#5007a3] transition-colors">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-[#6208ca] mx-1 hover:text-[#5007a3] transition-colors">
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
