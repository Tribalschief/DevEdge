"use server"

import { Resend } from "resend"
import { ContactFormSchema } from "@/lib/validation-schema"
import { prisma } from "@/lib/prisma"
import type { z } from "zod"

const resend = new Resend(process.env.RESEND_API!)

interface SubmitContactResult {
  success: boolean
  error?: string
  errors?: z.ZodIssue[]
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

  // Convert FormData to plain object
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

  // Validate the data
  const validatedFields = ContactFormSchema.safeParse(rawFormData)
  if (!validatedFields.success) {
    console.error("Validation Errors:", validatedFields.error.flatten().fieldErrors)
    return {
      success: false,
      error: "Invalid form data. Please check your inputs.",
      errors: validatedFields.error.issues,
    }
  }

  const data = validatedFields.data

  try {
    // Save to database using Prisma
    await prisma.contactFormSubmission.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        company: data.company,
        country: data.country,
        industry: data.industry,
        message: data.message,
        optIn: data.optIn || false,
      },
    })

    // Send email with Resend
    const { error: emailError } = await resend.emails.send({
      from: "noreply@devedgeconsulting.com",
      to: [data.email],
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
      console.error("Email Error:", emailError)
      return {
        success: false,
        error: "Your submission was saved, but we couldn't send a confirmation email.",
      }
    }

    return { success: true }
  } catch (error) {
    console.error("Database error:", error)
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    }
  }
}
