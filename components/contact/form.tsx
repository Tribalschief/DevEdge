"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { sendContactForm } from "@/action/sendForm"
import HCaptcha from "@hcaptcha/react-hcaptcha"
import { useToast } from "@/hooks/use-toast"
import Cookies from "js-cookie"
import { CookieConsentDialog } from "../cookies-dialog/consnet-dialog"
import Link from "next/link"


const CONTACT_FORM_COOKIE = "contact_form_data"
const COOKIE_EXPIRY = 30 // days

type FormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  country: string
  industry: string
  message: string
  optIn: boolean
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    country: "",
    industry: "",
    message: "",
    optIn: false,
  })

  const captchaRef = useRef<any>(null)
  const { toast } = useToast()

  // Load form data from cookies on initial render
  useEffect(() => {
    const savedData = Cookies.get(CONTACT_FORM_COOKIE)
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
      Cookies.set(CONTACT_FORM_COOKIE, JSON.stringify(formData), { expires: COOKIE_EXPIRY })
    }
  }, [formData])

  const handleVerify = () => {
    
    toast({
      title: "Captcha Verified",
      description: "Thank you for verifying you're human!",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, optIn: checked }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const token = await captchaRef.current.execute({ async: true })

      // Show loading toast
      toast({
        title: "Submitting form",
        description: "Please wait while we process your submission...",
      })

      const result = await sendContactForm({ ...formData, captchaToken: token })

      if (result.success) {
        toast({
          title: "Success!",
          description: "Thank you! Your message has been sent.",
          variant: "default",
        })

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          country: "",
          industry: "",
          message: "",
          optIn: false,
        })

        // Clear the form cookie after successful submission
        Cookies.remove(CONTACT_FORM_COOKIE)

        captchaRef.current.resetCaptcha()
      } else {
        toast({
          title: "Submission Failed",
          description: result.error || "Oops! Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: "Error",
        description: "Captcha failed or form error. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md mt-20 p-6 mb-8">
      <CookieConsentDialog />

      <h2 className="text-xl font-semibold mb-6">Are you looking for a solution?</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">
            First Name
          </label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border-blue-300 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">
            Last Name
          </label>
          <Input id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="border-blue-300 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone
          </label>
          <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium mb-1">
            Company
          </label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="border-blue-300 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium mb-1">
            Country
          </label>
          <Select value={formData.country} onValueChange={(value) => handleSelectChange("country", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pakistan">Pakistan</SelectItem>
              <SelectItem value="usa">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="canada">Canada</SelectItem>
              <SelectItem value="australia">Australia</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-medium mb-1">
            Industry
          </label>
          <Select value={formData.industry} onValueChange={(value) => handleSelectChange("industry", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="retail">Retail</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Your message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here"
            className="min-h-[120px] border-blue-300 focus:border-blue-500"
            required
          />
        </div>

        <div className="md:col-span-2">
          <p className="text-sm text-gray-600 mb-4">
            DevEdge Consulting is dedicated to safeguarding your privacy and ensuring your personal information is used
            solely to manage your account and deliver the products and services you've requested. Occasionally, we may
            reach out to share updates on our offerings and other content that may interest you.
          </p>

          <div className="flex items-center space-x-2 mb-6">
            <HCaptcha sitekey="41b8bd2e-8c50-4e32-98d8-c5189bb4934c" onVerify={handleVerify} ref={captchaRef} />
          </div>

          <div className="flex items-center space-x-2 mb-6">
            <Checkbox id="optIn" checked={formData.optIn} onCheckedChange={handleCheckboxChange} />
            <label htmlFor="optIn" className="text-sm text-gray-700">
              I agree to receive other communications from DevEdge.
            </label>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            You may unsubscribe from these communications at any time. For more information on how to unsubscribe please
            review our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
          </p>

          <Button type="submit" className="bg-gray-900 hover:bg-gray-800">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}
