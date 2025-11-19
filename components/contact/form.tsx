"use client"

import { useState, useRef } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { Check } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { submitContact } from "@/action/sendForm"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

// Form schema
const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name is required" })
    .max(50, { message: "First name cannot exceed 50 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message: "First name should only contain letters, spaces, hyphens, or apostrophes",
    }),
  lastName: z
    .string()
    .min(2, { message: "Last name is required" })
    .max(50, { message: "Last name cannot exceed 50 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, {
      message: "Last name should only contain letters, spaces, hyphens, or apostrophes",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .refine(
      (email) => {
        const allowedEmailDomains = [
          "gmail.com",
          "googlemail.com",
          "outlook.com",
          "hotmail.com",
          "live.com",
          "msn.com",
          "yahoo.com",
          "yahoo.co.uk",
          "yahoo.ca",
          "yahoo.com.au",
          "icloud.com",
          "me.com",
          "mac.com",
          "aol.com",
          "protonmail.com",
          "proton.me",
          "mail.com",
          "zoho.com",
          "zohomail.com",
          "fastmail.com",
          "tutanota.com",
          "gmx.com",
          "gmx.net",
          "yandex.com",
          "yandex.ru",
        ]

        const blockedEmailDomains = [
          "10minutemail.com",
          "tempmail.com",
          "temp-mail.org",
          "guerrillamail.com",
          "mailinator.com",
          "yopmail.com",
          "disposablemail.com",
          "sharklasers.com",
          "trashmail.com",
          "example.com",
          "example.org",
          "test.com",
          "dummy.com",
          "fake.com",
          "sample.com",
          "demo.com",
        ]

        const domain = email.split("@")[1]?.toLowerCase()
        if (!domain || !email.includes("@")) return false
        if (blockedEmailDomains.includes(domain)) return false
        if (domain.includes("fake") || domain.includes("test") || domain.includes("dummy")) return false

        return (
          allowedEmailDomains.includes(domain) ||
          (domain.includes(".") &&
            !blockedEmailDomains.includes(domain) &&
            domain.split(".").length >= 2 &&
            domain.split(".").every((part) => part.length > 0))
        )
      },
      {
        message:
          "Please use a valid email provider (Gmail, Outlook, business email, etc.). Temporary emails are not allowed.",
      },
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

const countries = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "it", label: "Italy" },
  { value: "es", label: "Spain" },
  { value: "nl", label: "Netherlands" },
  { value: "be", label: "Belgium" },
  { value: "ch", label: "Switzerland" },
  { value: "at", label: "Austria" },
  { value: "se", label: "Sweden" },
  { value: "no", label: "Norway" },
  { value: "dk", label: "Denmark" },
  { value: "fi", label: "Finland" },
  { value: "ie", label: "Ireland" },
  { value: "pt", label: "Portugal" },
  { value: "gr", label: "Greece" },
  { value: "pl", label: "Poland" },
  { value: "cz", label: "Czech Republic" },
  { value: "hu", label: "Hungary" },
  { value: "ro", label: "Romania" },
  { value: "bg", label: "Bulgaria" },
  { value: "hr", label: "Croatia" },
  { value: "si", label: "Slovenia" },
  { value: "sk", label: "Slovakia" },
  { value: "lt", label: "Lithuania" },
  { value: "lv", label: "Latvia" },
  { value: "ee", label: "Estonia" },
  { value: "jp", label: "Japan" },
  { value: "kr", label: "South Korea" },
  { value: "cn", label: "China" },
  { value: "in", label: "India" },
  { value: "sg", label: "Singapore" },
  { value: "hk", label: "Hong Kong" },
  { value: "tw", label: "Taiwan" },
  { value: "my", label: "Malaysia" },
  { value: "th", label: "Thailand" },
  { value: "ph", label: "Philippines" },
  { value: "id", label: "Indonesia" },
  { value: "vn", label: "Vietnam" },
  { value: "sa", label: "Saudi Arabia" },
  { value: "ae", label: "United Arab Emirates" },
  { value: "qa", label: "Qatar" },
  { value: "kw", label: "Kuwait" },
  { value: "bh", label: "Bahrain" },
  { value: "om", label: "Oman" },
  { value: "jo", label: "Jordan" },
  { value: "lb", label: "Lebanon" },
  { value: "eg", label: "Egypt" },
  { value: "ma", label: "Morocco" },
  { value: "za", label: "South Africa" },
  { value: "ng", label: "Nigeria" },
  { value: "ke", label: "Kenya" },
  { value: "br", label: "Brazil" },
  { value: "mx", label: "Mexico" },
  { value: "ar", label: "Argentina" },
  { value: "cl", label: "Chile" },
  { value: "co", label: "Colombia" },
  { value: "pe", label: "Peru" },
  { value: "other", label: "Other" },
]

const industries = [
  { value: "technology", label: "Technology" },
  { value: "finance", label: "Finance & Banking" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "manufacturing", label: "Manufacturing" },
  { value: "retail", label: "Retail & E-commerce" },
  { value: "consulting", label: "Consulting" },
  { value: "real_estate", label: "Real Estate" },
  { value: "automotive", label: "Automotive" },
  { value: "energy", label: "Energy & Utilities" },
  { value: "telecommunications", label: "Telecommunications" },
  { value: "media", label: "Media & Entertainment" },
  { value: "transportation", label: "Transportation & Logistics" },
  { value: "hospitality", label: "Hospitality & Tourism" },
  { value: "construction", label: "Construction" },
  { value: "agriculture", label: "Agriculture" },
  { value: "government", label: "Government" },
  { value: "non_profit", label: "Non-Profit" },
  { value: "other", label: "Other" },
]

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
      toast({
        title: "Submitting Form",
        description: "Please wait while we process your submission...",
      })

      const formData = new FormData()
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, String(value))
      })
      formData.append("captchaToken", captchaToken)

      const result = await submitContact(formData)

      if (result.success) {
        setFormSubmitted(true)
        form.reset()
        toast({
          title: "Success",
          description: "Your message has been sent successfully! We'll get back to you soon.",
          variant: "default",
        })
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
              <Label htmlFor="firstName">
                First name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="firstName"
                {...form.register("firstName")}
                className={form.formState.errors.firstName ? "border-red-500" : ""}
              />
              {form.formState.errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.firstName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="lastName">
                Last name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="lastName"
                {...form.register("lastName")}
                className={form.formState.errors.lastName ? "border-red-500" : ""}
              />
              {form.formState.errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.lastName.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                className={form.formState.errors.email ? "border-red-500" : ""}
              />
              {form.formState.errors.email && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">
                Phone <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                {...form.register("phone")}
                className={form.formState.errors.phone ? "border-red-500" : ""}
              />
              {form.formState.errors.phone && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="company">
                Company <span className="text-red-500">*</span>
              </Label>
              <Input
                id="company"
                {...form.register("company")}
                className={form.formState.errors.company ? "border-red-500" : ""}
              />
              {form.formState.errors.company && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.company.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="country">
                Country <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="country"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className={form.formState.errors.country ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {form.formState.errors.country && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.country.message}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <Label htmlFor="industry">
                Industry <span className="text-red-500">*</span>
              </Label>
              <Controller
                name="industry"
                control={form.control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className={form.formState.errors.industry ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry.value} value={industry.value}>
                          {industry.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {form.formState.errors.industry && (
                <p className="text-red-500 text-sm mt-1">{form.formState.errors.industry.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="message">
              Message <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              {...form.register("message")}
              rows={5}
              className={`min-h-[120px] ${form.formState.errors.message ? "border-red-500" : ""}`}
            />
            {form.formState.errors.message && (
              <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
            )}
          </div>

          <div className="flex items-start space-x-2">
            <Controller
              name="optIn"
              control={form.control}
              render={({ field }) => <Checkbox id="optIn" checked={field.value} onCheckedChange={field.onChange} />}
            />
            <Label htmlFor="optIn" className="text-sm font-normal">
              I would like to receive updates and marketing communications about products and services.
            </Label>
          </div>

          <div className="mt-6">
            <Label className="block mb-2">
              Verify you are human <span className="text-red-500">*</span>
            </Label>
            <HCaptcha
              sitekey="41b8bd2e-8c50-4e32-98d8-c5189bb4934c"
              onVerify={handleCaptchaVerify}
              onExpire={handleCaptchaExpire}
              ref={captchaRef}
            />
            {!captchaToken && <p className="text-amber-600 text-sm mt-1">Please complete the captcha verification</p>}
          </div>
        </div>

        <div>
          <Button
            type="submit"
            className="bg-[#6208CA] text-white px-6 py-3 rounded hover:bg-[#3c0f6e] transition-colors"
            disabled={isSubmitting || !captchaToken}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  )
}
