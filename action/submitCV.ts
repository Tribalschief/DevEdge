"use server"

import { Resend } from "resend"
import { CVSubmissionSchema } from "@/lib/validation-schema"
import { prisma } from "@/lib/prisma"
import type { z } from "zod"

const resend = new Resend(process.env.RESEND_API!)

interface SubmitCVResult {
  success: boolean
  error?: string
  limitExceeded?: boolean
  errors?: z.ZodIssue[]
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

  // Convert FormData to plain object
  const rawFormData = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    mobileNumber: formData.get("mobileNumber"),
    countryCode: formData.get("countryCode"),
    jobType: formData.get("jobType"),
    termsAccepted: formData.get("termsAccepted"),
    marketingConsent: formData.get("marketingConsent")?.toString() === "true",
    fileUrl: formData.get("fileUrl"),
  }

  // Validate the data
  const validatedFields = CVSubmissionSchema.safeParse(rawFormData)
  if (!validatedFields.success) {
    console.log("Validation Errors:", validatedFields.error.flatten().fieldErrors)
    return {
      success: false,
      error: "Invalid form data. Please check your inputs.",
      errors: validatedFields.error.issues,
    }
  }

  const data = validatedFields.data

  try {
    // Check if user has submitted in the last 24 hours
    const twentyFourHoursAgo = new Date()
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24)

    const existingSubmission = await prisma.cvSubmission.findFirst({
      where: {
        email: data.email.toLowerCase(),
        createdAt: {
          gte: twentyFourHoursAgo,
        },
      },
    })

    if (existingSubmission) {
      return {
        success: false,
        error: "You have already submitted a CV in the last 24 hours. Please try again later.",
        limitExceeded: true,
      }
    }

    // After validation, before saving to database, add:
    let cvUrl: string | null = null
    const cvFile = formData.get("cvFile") as File
    if (cvFile && cvFile.size > 0) {
      const { saveFile } = await import("@/lib/file-upload")
      cvUrl = await saveFile(cvFile)
    }

    // Save the new submission
    await prisma.cvSubmission.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email.toLowerCase(),
        phoneNumber: `${data.countryCode}${data.mobileNumber}`,
        jobType: data.jobType,
        marketingConsent: data.marketingConsent || false,
        cvUrl: cvUrl,
      },
    })

    // Send email with Resend
    const { error: emailError } = await resend.emails.send({
      from: "noreply@devedgeconsulting.com",
      to: [data.email],
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
