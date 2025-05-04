"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { sendRfp } from "@/action/sendRFP"
import Cookies from "js-cookie"
import { CookieConsentDialog } from "../cookies-dialog/consnet-dialog"


const RFP_FORM_COOKIE = "rfp_form_data"
const COOKIE_EXPIRY = 30 // days

type FormData = {
  title: string
  firstName: string
  lastName: string
  position: string
  email: string
  phone: string
  country: string
  company: string
  industry: string
  revenue: string
  comments: string
  termsAccepted: boolean
}

export default function RfpForm() {
  const [files, setFiles] = useState<{ [key: number]: File | null }>({
    0: null,
    1: null,
    2: null,
  })
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState<FormData>({
    title: "",
    firstName: "",
    lastName: "",
    position: "",
    email: "",
    phone: "",
    country: "",
    company: "",
    industry: "",
    revenue: "",
    comments: "",
    termsAccepted: false,
  })
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const captchaRef = useRef<HCaptcha>(null)
  const { toast } = useToast()

  // Load form data from cookies on initial render
  useEffect(() => {
    const savedData = Cookies.get(RFP_FORM_COOKIE)
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        setFormData(parsedData)
      } catch (e) {
        console.error("Error parsing cookie data:", e)
      }
    }
  }, [])

  // Save form data to cookies when it changes
  useEffect(() => {
    if (formData.firstName || formData.email) {
      Cookies.set(RFP_FORM_COOKIE, JSON.stringify(formData), { expires: COOKIE_EXPIRY })
    }
  }, [formData])

  const handleFileChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFiles({ ...files, [index]: e.target.files[0] })
      toast({
        title: "File Uploaded",
        description: `${e.target.files[0].name} has been uploaded successfully.`,
      })
    }
  }

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

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData({
      ...formData,
      [field]: value,
    })

    // Clear error when field is updated
    if (errors[field]) {
      setErrors({
        ...errors,
        [field]: undefined,
      })
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    // Required fields validation
    if (!formData.title) newErrors.title = "Title is required"
    if (!formData.firstName) newErrors.firstName = "First name is required"
    if (!formData.lastName) newErrors.lastName = "Last name is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.country) newErrors.country = "Country is required"
    if (!formData.industry) newErrors.industry = "Industry is required"
    if (!formData.comments) newErrors.comments = "Comments are required"
    if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms"

    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast({
        title: "Form Validation Error",
        description: "Please check the form for errors and try again.",
        variant: "destructive",
      })
      return
    }

    if (!captchaToken) {
      toast({
        title: "Captcha Required",
        description: "Please complete the captcha verification.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Show loading toast
      toast({
        title: "Submitting Form",
        description: "Please wait while we process your submission...",
      })

      // Prepare file URLs if any
      const fileUrls = Object.values(files)
        .filter((file) => file !== null)
        .map((file) => URL.createObjectURL(file as File))

      // Call the server action with the form data
      const result = await sendRfp({
        ...formData,
        files: fileUrls,
      })

      if (result.success) {
        // Reset form after successful submission
        setFormStatus("success")
        setFormData({
          title: "",
          firstName: "",
          lastName: "",
          position: "",
          email: "",
          phone: "",
          country: "",
          company: "",
          industry: "",
          revenue: "",
          comments: "",
          termsAccepted: false,
        })
        setFiles({ 0: null, 1: null, 2: null })

        // Clear the form cookie after successful submission
        Cookies.remove(RFP_FORM_COOKIE)

        // Reset captcha
        captchaRef.current?.resetCaptcha()
        setCaptchaToken(null)

        // Show success toast
        toast({
          title: "Form Submitted Successfully",
          description: "Thank you for your submission. We will contact you shortly.",
        })

        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        setFormStatus("error")
        toast({
          title: "Submission Failed",
          description: result.error || "There was an error submitting your form. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus("error")

      toast({
        title: "Submission Failed",
        description: "There was an error submitting your form. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (formStatus === "success") {
    return (
      <div className="max-w-7xl mx-auto py-12">
        <CookieConsentDialog />
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          <AlertTitle className="text-green-800 text-lg font-semibold">Submission Successful</AlertTitle>
          <AlertDescription className="text-green-700">
            <p className="mb-4">
              Thank you for submitting your Request for Proposal. Your submission has been received.
            </p>
            <p className="mb-4">Our team will review your request and contact you shortly.</p>
            <Button onClick={() => setFormStatus("idle")} className="mt-2 bg-green-600 hover:bg-green-700">
              Submit Another Request
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className=" mx-auto ">
      <CookieConsentDialog />

      {formStatus === "error" && (
        <Alert className="mb-6 bg-red-50 border-red-200">
          <AlertCircle className="h-5 w-5 text-red-600" />
          <AlertTitle className="text-red-800">Submission Failed</AlertTitle>
          <AlertDescription className="text-red-700">
            There was an error submitting your form. Please try again or contact support if the issue persists.
          </AlertDescription>
        </Alert>
      )}
      <div className="relative ">
      <div className="bg-white rounded-lg max-w-full sm:max-w-2xl lg:max-w-5xl shadow-md p-6 mb-8 mx-auto relative z-10">

          <div className="mb-6">
            <h1 className="text-xl font-bold">Submit RFP</h1>
            <h2 className="text-2xl font-bold mt-2">Request for proposal for services</h2>
            <p className="text-gray-600">How can we help your business?</p>
          </div>

          <div className="my-4 text-sm">
            <p>
              Thank you for your interest in our member firm services. Please take a few moments to complete this form.
              Documents can be uploaded if needed to clarify your request. This mailbox only accepts qualified proposal
              requests for our services. All other inquiries should be directed to our{" "}
              <Link href="/contact" className="text-blue-600 hover:underline">
                Contact Us
              </Link>{" "}
              page.
            </p>

          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="border-t border-b py-4 my-6">
              <h3 className="text-center text-lg font-medium mb-4">Your details</h3>

              <p className="text-sm mb-4">Fields marked with an asterisk (*) are required.</p>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-sm">
                    *Title
                  </Label>
                  <Select value={formData.title} onValueChange={(value) => handleInputChange("title", value)}>
                    <SelectTrigger id="title" className={`w-full ${errors.title ? "border-red-500" : ""}`}>
                      <SelectValue placeholder="Select title" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mr">Mr.</SelectItem>
                      <SelectItem value="mrs">Mrs.</SelectItem>
                      <SelectItem value="ms">Ms.</SelectItem>
                      <SelectItem value="dr">Dr.</SelectItem>
                      <SelectItem value="prof">Prof.</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}
                </div>

                <div>
                  <Label htmlFor="firstName" className="text-sm">
                    *First name
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <Label htmlFor="lastName" className="text-sm">
                    *Last name
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>

                <div>
                  <Label htmlFor="position" className="text-sm">
                    Position/Job title
                  </Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => handleInputChange("position", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm">
                    *Email address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm">
                    Phone number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="country" className="text-sm">
                    *Country/location
                  </Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                    <SelectTrigger id="country" className={`w-full ${errors.country ? "border-red-500" : ""}`}>
                      <SelectValue placeholder="Select your location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                </div>
              </div>
            </div>

            <div className="border-b py-4 mb-6">
              <h3 className="text-center text-lg font-medium mb-4">Company details</h3>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="company" className="text-sm">
                    Company/Organization name
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="industry" className="text-sm">
                    *Industry
                  </Label>
                  <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
                    <SelectTrigger id="industry" className={`w-full ${errors.industry ? "border-red-500" : ""}`}>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="energy">Energy</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.industry && <p className="text-red-500 text-xs mt-1">{errors.industry}</p>}
                </div>

                <div>
                  <Label htmlFor="revenue" className="text-sm">
                    Yearly revenue
                  </Label>
                  <Select value={formData.revenue} onValueChange={(value) => handleInputChange("revenue", value)}>
                    <SelectTrigger id="revenue" className="w-full">
                      <SelectValue placeholder="Select yearly revenue" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less1m">Less than $1 million</SelectItem>
                      <SelectItem value="1m-10m">$1 million - $10 million</SelectItem>
                      <SelectItem value="10m-50m">$10 million - $50 million</SelectItem>
                      <SelectItem value="50m-100m">$50 million - $100 million</SelectItem>
                      <SelectItem value="more100m">More than $100 million</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="py-4 mb-6">
              <h3 className="text-center text-lg font-medium mb-4">Additional information</h3>

              <div className="mb-4 text-sm">
                <p>Please note that the total size of your attachment(s) must not exceed 10 MB.</p>
                <p>Appropriate attachment types are ".doc", ".pdf", ".ppt", ".txt", ".xlsx", and ".zip".</p>
              </div>

              <div className="space-y-4">
                {[0, 1, 2].map((index) => (
                  <div key={index}>
                    <Label htmlFor={`attachment-${index}`} className="text-sm">
                      Attachment
                    </Label>
                    <div className="flex items-center mt-1 flex-wrap">
                      <Button
                        type="button"
                        variant="outline"
                        className="mr-2 h-9 text-xs mb-1 sm:mb-0"
                        onClick={() => document.getElementById(`attachment-${index}`)?.click()}
                      >
                        Choose File
                      </Button>
                      <span className="text-sm text-gray-500 break-all">
                        {files[index] ? files[index]?.name : "No file chosen"}
                      </span>
                      <Input
                        id={`attachment-${index}`}
                        type="file"
                        className="hidden"
                        onChange={(e) => handleFileChange(index, e)}
                        accept=".doc,.docx,.pdf,.ppt,.pptx,.txt,.xlsx,.zip"
                      />
                    </div>
                  </div>
                ))}

                <div>
                  <Label htmlFor="comments" className="text-sm">
                    *Comments and/or instructions
                  </Label>
                  <Textarea
                    id="comments"
                    className={`min-h-[120px] ${errors.comments ? "border-red-500" : ""}`}
                    value={formData.comments}
                    onChange={(e) => handleInputChange("comments", e.target.value)}
                  />
                  {errors.comments && <p className="text-red-500 text-xs mt-1">{errors.comments}</p>}
                </div>

                <div className="mt-4">
                  <p className="text-sm mb-2">*Mandatory Field</p>
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.termsAccepted}
                      onCheckedChange={(checked) => handleInputChange("termsAccepted", checked === true)}
                      className={errors.termsAccepted ? "border-red-500" : ""}
                    />
                    <Label htmlFor="terms" className="text-sm font-normal">
                      I have read and agree to the{" "}
                      <Link href="/privacy" className="text-blue-600 hover:underline">
                        Privacy Notice
                      </Link>{" "}
                      and{" "}
                      <Link href="/terms" className="text-blue-600 hover:underline">
                        Terms of Use
                      </Link>
                    </Label>
                  </div>
                  {errors.termsAccepted && <p className="text-red-500 text-xs mt-1 ml-6">{errors.termsAccepted}</p>}
                </div>

                <div className="mt-6">
                  <Label className="text-sm block mb-2">*Verify you are human</Label>
                  <HCaptcha
                    sitekey="41b8bd2e-8c50-4e32-98d8-c5189bb4934c" // Replace with your actual hCaptcha site key
                    onVerify={handleCaptchaVerify}
                    onExpire={handleCaptchaExpire}
                    ref={captchaRef}
                  />
                  {!captchaToken && (
                    <p className="text-amber-600 text-xs mt-1">Please complete the captcha verification</p>
                  )}
                </div>
              </div>
            </div>

            <Button type="submit" className="bg-blue-700 hover:bg-blue-800" disabled={isSubmitting || !captchaToken}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
