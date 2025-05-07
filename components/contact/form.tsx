"use client"

import { useState, useRef } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { submitContact } from "@/action/sendForm"
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
  phone: z
    .string()
    .min(7, { message: "Phone number is required" })
    .max(15, { message: "Phone number cannot exceed 15 digits" })
    .regex(/^\d+$/, { message: "Phone number should only contain digits" }),
  company: z.string().min(1, { message: "Company name is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  industry: z.string().min(1, { message: "Industry is required" }),
  message: z.string().min(10, { message: "Please provide a detailed message" }),
  optIn: z.boolean().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const captchaRef = useRef<HCaptcha>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      country: "",
      industry: "",
      message: "",
      optIn: false,
    },
  })

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

    setIsSubmitting(true)

    try {
      // Show loading toast
      toast({
        title: "Submitting Form",
        description: "Please wait while we process your submission...",
      })

      // Create a FormData object to pass to the server action
      const formData = new FormData()
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, String(value))
      })
      formData.append("captchaToken", captchaToken)

      // Call the server action with the form data
      const result = await submitContact(formData)

      if (result.success) {
        setFormSubmitted(true)
        form.reset()

        toast({
          title: "Success",
          description: "Your message has been sent successfully! We'll get back to you soon.",
          variant: "default",
        })

        // Reset captcha
        captchaRef.current?.resetCaptcha()
        setCaptchaToken(null)
      } else {
        toast({
          title: "Submission Failed",
          description: result.error || "There was an error submitting your form. Please try again.",
          variant: "destructive",
        })
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

  return (
    <div className="max-w-4xl mx-auto px-8 lg:px-auto">
      <h1 className="text-3xl font-medium mb-6 text-[#6208ca]">Contact Us</h1>

      <p className="text-gray-700 mb-12 leading-relaxed">
        Have a question or want to learn more about our services? Fill out the form below and our team will get back to
        you as soon as possible.
      </p>

      {formSubmitted && (
        <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-md">
          <div className="flex items-center mb-2">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <h3 className="font-medium">Message Sent Successfully</h3>
          </div>
          <p className="text-sm text-gray-600">
            Thank you for contacting us. We'll respond to your inquiry as soon as possible.
          </p>
        </div>
      )}

      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-8 bg-white rounded-xl p-8 shadow-sm border border-gray-100"
      >
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6 text-[#6208ca] flex items-center">
            <div className="h-8 w-1 bg-[#6208ca] mr-3 rounded-full"></div>
            Your Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div>
              <label className="block mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                {...form.register("phone")}
                className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-2 focus:outline-none focus:border-gray-500"
              />
              {form.formState.errors.phone && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-2">
                Company <span className="text-red-500">*</span>
              </label>
              <input
                {...form.register("company")}
                className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-2 focus:outline-none focus:border-gray-500"
              />
              {form.formState.errors.company && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.company.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-2">
                Country <span className="text-red-500">*</span>
              </label>
              <input
                {...form.register("country")}
                className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-2 focus:outline-none focus:border-gray-500"
              />
              {form.formState.errors.country && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.country.message}</p>
              )}
            </div>

            <div>
              <label className="block mb-2">
                Industry <span className="text-red-500">*</span>
              </label>
              <select
                {...form.register("industry")}
                className="w-full border-0 border-b border-gray-300 bg-transparent px-0 py-2 focus:outline-none focus:border-gray-500 appearance-none"
              >
                <option value="">Select industry</option>
                <option value="technology">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="education">Education</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="retail">Retail</option>
                <option value="other">Other</option>
              </select>
              {form.formState.errors.industry && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.industry.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              {...form.register("message")}
              rows={5}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-[#6208ca]"
            ></textarea>
            {form.formState.errors.message && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
            )}
          </div>

          <div className="flex items-start">
            <input type="checkbox" id="optIn" {...form.register("optIn")} className="mt-1 mr-2" />
            <label htmlFor="optIn" className="text-sm">
              I would like to receive updates and marketing communications about products and services.
            </label>
          </div>

          <div className="mt-6">
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
        </div>

        <div>
          <button
            type="submit"
            className="bg-[#6208CA] text-white px-6 py-3 rounded hover:bg-[#3c0f6e] transition-colors"
            disabled={isSubmitting || !captchaToken}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  )
}
