import { z } from "zod"

// Common validation patterns
const namePattern = /^[a-zA-Z\s'-]+$/
const phoneNumberPattern = /^\d+$/
const countryCodePattern = /^\+\d{1,4}$/

// More comprehensive list of valid email domains
const allowedEmailDomains = [
  // Major email providers
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
  // Business domains will be validated by having a dot and not being in blocked list
]

// Comprehensive list of temporary/disposable email domains
const blockedEmailDomains = [
  // Temporary email services
  "10minutemail.com",
  "10minutemail.net",
  "tempmail.com",
  "temp-mail.org",
  "temp-mail.io",
  "guerrillamail.com",
  "guerrillamail.net",
  "mailinator.com",
  "mailinator.net",
  "yopmail.com",
  "yopmail.fr",
  "disposablemail.com",
  "disposable.com",
  "sharklasers.com",
  "guerrillamailblock.com",
  "trashmail.com",
  "trashmail.net",
  "maildrop.cc",
  "throwaway.email",
  "getnada.com",
  "tempail.com",
  "mohmal.com",
  "emailondeck.com",
  "fakeinbox.com",
  "spamgourmet.com",
  "mailcatch.com",
  "mytrashmail.com",
  "mailexpire.com",
  "dispostable.com",
  "tempinbox.com",
  "emailfake.com",
  "fake-mail.ml",
  "throwawaymail.com",
  "tempmailo.com",
  "burnermail.io",
  "temp-mail.ru",
  "temporary-mail.net",
  // Test/dummy domains
  "example.com",
  "example.org",
  "example.net",
  "test.com",
  "testing.com",
  "dummy.com",
  "fake.com",
  "sample.com",
  "demo.com",
  "localhost.com",
]

// Enhanced email validation function
const emailValidation = z
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
        "localhost.com",
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
  )

// CV Submission Schema
export const CVSubmissionSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name is required" })
    .max(50, { message: "First name cannot exceed 50 characters" })
    .regex(namePattern, {
      message: "First name should only contain letters, spaces, hyphens, or apostrophes",
    }),
  lastName: z
    .string()
    .min(2, { message: "Last name is required" })
    .max(50, { message: "Last name cannot exceed 50 characters" })
    .regex(namePattern, {
      message: "Last name should only contain letters, spaces, hyphens, or apostrophes",
    }),
  email: emailValidation,
  mobileNumber: z
    .string()
    .min(7, { message: "Mobile number seems too short" })
    .max(15, { message: "Mobile number cannot exceed 15 digits" })
    .regex(phoneNumberPattern, { message: "Mobile number should only contain digits" }),
  countryCode: z.string().regex(countryCodePattern, {
    message: "Country code must start with + followed by 1-4 digits",
  }),
  jobType: z.string().min(1, { message: "Job type is required" }),
  termsAccepted: z
    .preprocess((val) => String(val).toLowerCase() === "true" || val === true, z.boolean())
    .refine((val) => val === true, {
      message: "You must accept the terms and conditions",
    }),
  marketingConsent: z.boolean().optional(),
  fileUrl: z.string().optional(),
})

// Contact Form Schema
export const ContactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name is required" })
    .max(50, { message: "First name cannot exceed 50 characters" })
    .regex(namePattern, {
      message: "First name should only contain letters, spaces, hyphens, or apostrophes",
    }),
  lastName: z
    .string()
    .min(2, { message: "Last name is required" })
    .max(50, { message: "Last name cannot exceed 50 characters" })
    .regex(namePattern, {
      message: "Last name should only contain letters, spaces, hyphens, or apostrophes",
    }),
  email: emailValidation,
  phone: z
    .string()
    .min(7, { message: "Phone number seems too short" })
    .max(15, { message: "Phone number cannot exceed 15 digits" })
    .regex(phoneNumberPattern, { message: "Phone number should only contain digits" }),
  company: z.string().min(1, { message: "Company name is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  industry: z.string().min(1, { message: "Industry is required" }),
  message: z.string().min(10, { message: "Please provide a detailed message" }),
  optIn: z.boolean().optional(),
})

// RFP Submission Schema
export const RFPSubmissionSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  firstName: z
    .string()
    .min(2, { message: "First name is required" })
    .max(50, { message: "First name cannot exceed 50 characters" })
    .regex(namePattern, {
      message: "First name should only contain letters, spaces, hyphens, or apostrophes",
    }),
  lastName: z
    .string()
    .min(2, { message: "Last name is required" })
    .max(50, { message: "Last name cannot exceed 50 characters" })
    .regex(namePattern, {
      message: "Last name should only contain letters, spaces, hyphens, or apostrophes",
    }),
  position: z.string().optional(),
  email: emailValidation,
  phone: z
    .string()
    .optional()
    .refine((phone) => !phone || (phone.length >= 7 && phone.length <= 15 && phoneNumberPattern.test(phone)), {
      message: "Phone number should be 7-15 digits if provided",
    }),
  country: z.string().min(1, { message: "Country is required" }),
  company: z.string().optional(),
  industry: z.string().min(1, { message: "Industry is required" }),
  revenue: z.string().optional(),
  comments: z.string().min(10, { message: "Comments must be at least 10 characters" }),
})
