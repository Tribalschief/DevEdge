"use server"

import { Resend } from "resend"
import { z } from "zod"
import { saveCVSubmission } from "@/lib/supabase"

const resend = new Resend(process.env.RESEND_API!)

const CVSubmissionSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  mobileNumber: z.string().min(9, { message: "Mobile number is required" }),
  countryCode: z.string(),
  jobType: z.string({ required_error: "Job type is required" }),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
  marketingConsent: z.boolean().optional(),
  fileUrl: z.string().optional(), // URL of the uploaded CV file
})

export async function submitCV(formData: unknown) {
  const parsed = CVSubmissionSchema.safeParse(formData)

  if (!parsed.success) {
    return { success: false, error: "Invalid form submission" }
  }

  const data = parsed.data

  try {
    // Check if user has submitted in the last 24 hours using Supabase
    const { hasRecentSubmission, error } = await saveCVSubmission(data, data.countryCode)

    if (hasRecentSubmission) {
      return {
        success: false,
        error: "You have already submitted a CV in the last 24 hours. Please try again later.",
        limitExceeded: true,
      }
    }

    if (error) {
      console.error("Database error:", error)
      return { success: false, error: "Failed to save submission" }
    }

    const { data: response, error: emailError } = await resend.emails.send({
      from: "noreply@devedge.com", // Must be a verified domain in Resend
      to: data.email,
      subject: "New CV Submission",
      html: `
        <h2>New CV Submission</h2>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.countryCode}${data.mobileNumber}</p>
        <p><strong>Job Type:</strong> ${data.jobType}</p>
        <p><strong>Marketing Consent:</strong> ${data.marketingConsent ? "Yes" : "No"}</p>
        ${data.fileUrl ? `<p><strong>CV:</strong> <a href="${data.fileUrl}">Download CV</a></p>` : ""}
      `,
    })

    if (emailError) throw emailError

    return { success: true }
  } catch (error) {
    console.error("Failed to send email", error)
    return { success: false, error: "Failed to send email" }
  }
}
