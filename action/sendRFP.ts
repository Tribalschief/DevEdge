"use server"

import { Resend } from "resend"
import { RFPSubmissionSchema } from "@/lib/validation-schema"
import { prisma } from "@/lib/prisma"
import type { z } from "zod"

const resend = new Resend(process.env.RESEND_API!)

interface SubmitRFPResult {
  success: boolean
  error?: string
  errors?: z.ZodIssue[]
  fileErrors?: string[]
}

// File upload helper function
async function uploadFileToStorage(file: File): Promise<string> {
  const { saveFile } = await import("../lib/file-upload")
  return await saveFile(file)
}

export async function sendRfp(formData: FormData): Promise<SubmitRFPResult> {
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
    title: formData.get("title"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    position: formData.get("position"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    country: formData.get("country"),
    company: formData.get("company"),
    industry: formData.get("industry"),
    revenue: formData.get("revenue"),
    comments: formData.get("comments"),
  }

  // Handle file uploads
  const fileUrls: string[] = []
  const fileErrors: string[] = []

  for (let i = 0; i < 3; i++) {
    const file = formData.get(`file${i}`) as File
    if (file && file.size > 0) {
      try {
        // Check file size (max 5MB per file)
        if (file.size > 5 * 1024 * 1024) {
          fileErrors.push(`File ${file.name} exceeds 5MB limit`)
          continue
        }

        // Check file type
        const allowedTypes = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/vnd.ms-powerpoint",
          "application/vnd.openxmlformats-officedocument.presentationml.presentation",
          "text/plain",
          "application/vnd.ms-excel",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "application/zip",
        ]

        if (!allowedTypes.includes(file.type)) {
          fileErrors.push(`File ${file.name} has unsupported type`)
          continue
        }

        // Upload file (implement your storage solution)
        const fileUrl = await uploadFileToStorage(file)
        fileUrls.push(fileUrl)
      } catch (error) {
        console.error(`Error uploading file ${file.name}:`, error)
        fileErrors.push(`Failed to upload ${file.name}`)
      }
    }
  }

  if (fileErrors.length > 0) {
    return {
      success: false,
      error: "File upload errors occurred",
      fileErrors,
    }
  }

  // Validate the data
  const validatedFields = RFPSubmissionSchema.safeParse(rawFormData)
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
    // Save to database using Prisma
    await prisma.rfpSubmission.create({
      data: {
        title: data.title,
        firstName: data.firstName,
        lastName: data.lastName,
        position: data.position || null,
        email: data.email,
        phone: data.phone || null,
        country: data.country,
        company: data.company || null,
        industry: data.industry,
        revenue: data.revenue || null,
        comments: data.comments || null,
        fileUrls: fileUrls,
      },
    })

    // Generate file links HTML for email
    const fileLinksHtml =
      fileUrls.length > 0
        ? `
        <h3 style="margin-top: 20px; color: #333;">Attached Files:</h3>
        <ul style="padding-left: 20px;">
          ${fileUrls.map((url, index) => `<li><a href="${url}" style="color: #3c5bc0;">Attachment ${index + 1}</a></li>`).join("")}
        </ul>
      `
        : '<p style="margin-top: 20px; color: #666;">No files were attached.</p>'

    // Send email with Resend
    const { error: emailError } = await resend.emails.send({
      from: "noreply@devedgeconsulting.com",
      to: [data.email],
      subject: "RFP Submission Received",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h2 style="color: #3c5bc0; margin-bottom: 5px;">Thank You for Your RFP Submission!</h2>
            <p style="color: #666; font-size: 16px;">We have received your Request for Proposal</p>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">RFP Details</h3>
            <p style="margin-bottom: 5px;"><strong>Title:</strong> ${data.title}</p>
            <p style="margin-bottom: 5px;"><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
            <p style="margin-bottom: 5px;"><strong>Position:</strong> ${data.position || "Not specified"}</p>
            <p style="margin-bottom: 5px;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin-bottom: 5px;"><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
            <p style="margin-bottom: 5px;"><strong>Company:</strong> ${data.company || "Not specified"}</p>
            <p style="margin-bottom: 5px;"><strong>Country:</strong> ${data.country}</p>
            <p style="margin-bottom: 5px;"><strong>Industry:</strong> ${data.industry}</p>
            <p style="margin-bottom: 5px;"><strong>Revenue:</strong> ${data.revenue || "Not specified"}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #333; margin-top: 0;">Your Comments:</h3>
            <p style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; color: #555;">${data.comments || "No comments provided"}</p>
          </div>
          
          ${fileLinksHtml}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; color: #666; font-size: 14px;">
            <p>Our team will review your RFP and get back to you as soon as possible.</p>
            <p>If you have any questions, please don't hesitate to contact us.</p>
            <p style="margin-top: 20px;">Best regards,<br/>The Sales Team</p>
          </div>
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
