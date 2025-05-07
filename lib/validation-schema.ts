import { z } from "zod"

// Common validation patterns
const namePattern = /^[a-zA-Z\s'-]+$/
const phoneNumberPattern = /^\d+$/
const countryCodePattern = /^\+\d{1,4}$/

// List of allowed and blocked email domains
const allowedEmailDomains = [
  "gmail.com",
  "outlook.com",
  "hotmail.com",
  "yahoo.com",
  "icloud.com",
  "aol.com",
  "protonmail.com",
  "mail.com",
]

const blockedEmailDomains = [
  "tempmail.com",
  "temp-mail.org",
  "guerrillamail.com",
  "mailinator.com",
  "yopmail.com",
  "10minutemail.com",
  "disposablemail.com",
  "sharklasers.com",
  "trashmail.com",
]

// Email validation function
const validateEmail = (email: string) => {
  if (!email.includes("@")) return false

  const domain = email.split("@")[1]?.toLowerCase()
  if (!domain) return false

  // Check if domain is in blocked list
  if (blockedEmailDomains.includes(domain)) return false

  // Allow if domain is in allowed list or contains a dot (likely a business domain)
  return allowedEmailDomains.includes(domain) || (!blockedEmailDomains.includes(domain) && domain.includes("."))
}

// CV Submission Schema
export const CVSubmissionSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name is required" })
    .max(10, { message: "First name cannot exceed 10 characters" })
    .regex(namePattern, {
      message: "First name should only contain letters, spaces, hyphens, or apostrophes",
    }),
  lastName: z
    .string()
    .min(2, { message: "Last name is required" })
    .max(10, { message: "Last name cannot exceed 10 characters" })
    .regex(namePattern, {
      message: "Last name should only contain letters, spaces, hyphens, or apostrophes",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .refine(async (email) => validateEmail(email), {
      message:
        "Please use a valid email provider (Gmail, Outlook, or business email). Temporary emails are not allowed.",
    }),
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
    .refine(async (val) => val === true, {
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
    .max(10, { message: "First name cannot exceed 10 characters" })
    .regex(namePattern, {
      message: "First name should only contain letters, spaces, hyphens, or apostrophes",
    }),
  lastName: z
    .string()
    .min(2, { message: "Last name is required" })
    .max(10, { message: "Last name cannot exceed 10 characters" })
    .regex(namePattern, {
      message: "Last name should only contain letters, spaces, hyphens, or apostrophes",
    }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .refine(async (email) => validateEmail(email), {
      message:
        "Please use a valid email provider (Gmail, Outlook, or business email). Temporary emails are not allowed.",
    }),
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
    .max(10, { message: "First name cannot exceed 10 characters" })
    .regex(namePattern, {
      message: "First name should only contain letters, spaces, hyphens, or apostrophes",
    }),
  lastName: z
    .string()
    .min(2, { message: "Last name is required" })
    .max(10, { message: "Last name cannot exceed 10 characters" })
    .regex(namePattern, {
      message: "Last name should only contain letters, spaces, hyphens, or apostrophes",
    }),
  position: z.string().min(1, { message: "Position is required" }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address" })
    .refine(async (email) => validateEmail(email), {
      message:
        "Please use a valid email provider (Gmail, Outlook, or business email). Temporary emails are not allowed.",
    }),
  phone: z
    .string()
    .min(7, { message: "Phone number seems too short" })
    .max(15, { message: "Phone number cannot exceed 15 digits" })
    .regex(phoneNumberPattern, { message: "Phone number should only contain digits" }),
  country: z.string().min(1, { message: "Country is required" }),
  company: z.string().min(1, { message: "Company name is required" }),
  industry: z.string().min(1, { message: "Industry is required" }),
  revenue: z.string().min(1, { message: "Revenue information is required" }),
  comments: z.string().optional(),
})
