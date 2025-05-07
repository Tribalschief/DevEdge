"use server"

import { Resend } from "resend"
import { CVSubmissionSchema } from "@/lib/validation-schema"
import { saveCVSubmission } from "@/lib/supabase"
import type { z } from "zod"

const resend = new Resend(process.env.RESEND_API!)

// Define the return type for your action
interface SubmitCVResult {
  success: boolean
  error?: string
  limitExceeded?: boolean
  errors?: z.ZodIssue[] // To pass back validation errors
}

export async function submitCV(formData: FormData): Promise<SubmitCVResult> {
  // Verify hCaptcha token
  const captchaToken = formData.get("captchaToken") as string

  if (!captchaToken) {
    return {
      success: false,
      error: "Captcha verification failed. Please try again.",
    }
  }

  // Verify the captcha token with hCaptcha
  try {
    const captchaResponse = await fetch("https://api.hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: process.env.HCAPTCHA_SECRET!,
        response: captchaToken,
      }),
    })

    const captchaResult = await captchaResponse.json()

    if (!captchaResult.success) {
      return {
        success: false,
        error: "Captcha verification failed. Please try again.",
      }
    }
  } catch (error) {
    console.error("Captcha verification error:", error)
    return {
      success: false,
      error: "Captcha verification failed. Please try again.",
    }
  }

  // 1. Convert FormData to a plain object (excluding captchaToken)
  const rawFormData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    mobileNumber: formData.get("mobileNumber"),
    countryCode: formData.get("countryCode"),
    jobType: formData.get("jobType"),
    termsAccepted: formData.get("termsAccepted"), // This will be a string 'true' or 'false' or null
    fileUrl: formData.get("fileUrl"), // Make sure this is passed from client
  }

  // 2. Validate the plain object
  const validatedFields = await CVSubmissionSchema.safeParseAsync(rawFormData)

  if (!validatedFields.success) {
    console.log("Zod Validation Errors:", validatedFields.error.flatten().fieldErrors)
    return {
      success: false,
      error: "Invalid form data. Please check your inputs.",
      errors: validatedFields.error.issues, // Send back detailed Zod errors
    }
  }

  // Now validatedFields.data contains the correctly typed and validated data
  const data = validatedFields.data

  try {
    const { hasRecentSubmission, error: dbError } = await saveCVSubmission(
      {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        mobileNumber: data.mobileNumber,
        jobType: data.jobType,
        marketingConsent: data.marketingConsent,
        fileUrl: data.fileUrl,
      },
      data.countryCode,
    )

    if (hasRecentSubmission) {
      return {
        success: false,
        error: "You have already submitted a CV in the last 24 hours. Please try again later.",
        limitExceeded: true,
      }
    }

    if (dbError) {
      console.error("Database error:", dbError)
      // Be careful about exposing raw DB errors to the client
      return { success: false, error: "Failed to save submission to the database." }
    }

    // Send email with Resend
    const { data: emailResponseData, error: emailError } = await resend.emails.send({
      from: "noreply@devedgeconsulting.com", // CHANGE THIS: Must be a verified domain in Resend
      to: [data.email], // `to` expects an array of strings
      subject: "CV Submission Received - Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Thank You for Your CV Submission!</h2>
          <p>Dear ${data.firstName} ${data.lastName},</p>
          <p>We have successfully received your CV for the <strong>${data.jobType}</strong> position.</p>
          <p>Here's a summary of the information we received:</p>
          <ul>
            <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Phone:</strong> ${data.countryCode}${data.mobileNumber}</li>
            <li><strong>Job Type:</strong> ${data.jobType}</li>
          </ul>
          ${data.fileUrl ? `<p><strong>Your CV:</strong> We have received your CV file.</p>` : "<p><strong>CV:</strong> Not provided.</p>"}
          <p>Our recruitment team will review your application and get in touch if your profile matches our requirements.</p>
          <p>Best regards,<br/>The Recruitment Team</p>
        </div>
      `,
    })

    if (emailError) {
      console.error("Resend Email Error:", emailError)
      // You might want to proceed with success even if email fails,
      // or handle it as a partial success, depending on your requirements.
      return {
        success: false, // Or true, if DB save is the primary goal
        error:
          "Your submission was saved, but we couldn't send a confirmation email. Please contact support if needed.",
      }
    }

    console.log("Email sent successfully:", emailResponseData)
    return { success: true }
  } catch (error) {
    console.error("Unhandled exception in submitCV:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
