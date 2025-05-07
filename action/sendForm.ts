"use server"

import { Resend } from "resend"
import { ContactFormSchema } from "@/lib/validation-schema"
import { saveContactFormSubmission } from "@/lib/supabase"
import type { z } from "zod"

const resend = new Resend(process.env.RESEND_API!)

// Define the return type for your action
interface SubmitContactResult {
  success: boolean
  error?: string
  errors?: z.ZodIssue[] // To pass back validation errors
}

export async function submitContact(formData: FormData): Promise<SubmitContactResult> {
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

  // 1. Convert FormData to a plain object
  const rawFormData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    country: formData.get("country"),
    industry: formData.get("industry"),
    message: formData.get("message"),
    optIn: formData.get("optIn")?.toString() === "true",
  }

  // 2. Validate the plain object
  const validatedFields = await ContactFormSchema.safeParseAsync(rawFormData)

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
    // Save to database
    const { error: dbError } = await saveContactFormSubmission(data)

    if (dbError) {
      console.error("Database error:", dbError)
      return { success: false, error: "Failed to save submission to the database." }
    }

    // Send email with Resend
    const { data: emailResponseData, error: emailError } = await resend.emails.send({
      from: "noreply@devedgeconsulting.com", // CHANGE THIS: Must be a verified domain in Resend
      to: [data.email], // `to` expects an array of strings
      subject: "Contact Form Submission Received",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Thank You for Contacting Us!</h2>
          <p>Dear ${data.firstName} ${data.lastName},</p>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Here's a summary of the information you provided:</p>
          <ul>
            <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
            <li><strong>Email:</strong> ${data.email}</li>
            <li><strong>Phone:</strong> ${data.phone}</li>
            <li><strong>Company:</strong> ${data.company}</li>
            <li><strong>Country:</strong> ${data.country}</li>
            <li><strong>Industry:</strong> ${data.industry}</li>
          </ul>
          <p><strong>Your Message:</strong><br>${data.message}</p>
          <p>Best regards,<br/>Customer Support Team</p>
        </div>
      `,
    })

    if (emailError) {
      console.error("Resend Email Error:", emailError)
      return {
        success: false,
        error:
          "Your submission was saved, but we couldn't send a confirmation email. Please contact support if needed.",
      }
    }

    console.log("Email sent successfully:", emailResponseData)
    return { success: true }
  } catch (error) {
    console.error("Unhandled exception in submitContact:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
