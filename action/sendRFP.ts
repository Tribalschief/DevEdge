"use server"

import { Resend } from "resend"
import { z } from "zod"
import { saveRFPSubmission } from "@/lib/supabase"

const resend = new Resend(process.env.RESEND_API!)

const RfpSchema = z.object({
  title: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  position: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  country: z.string(),
  company: z.string().optional(),
  industry: z.string().optional(),
  revenue: z.string().optional(),
  comments: z.string(),
  files: z.array(z.string().url()).optional(), // array of uploaded file URLs
})

export async function sendRfp(formData: unknown) {
  const parsed = RfpSchema.safeParse(formData)

  if (!parsed.success) {
    return { error: "Invalid form submission" }
  }

  const data = parsed.data

  const fileLinks = data.files?.length
    ? data.files.map((url, i) => `<li><a href="${url}">File ${i + 1}</a></li>`).join("")
    : "<li>No files uploaded.</li>"

  try {
    // Store the submission in Supabase
    await saveRFPSubmission(data)

    const { data: response, error } = await resend.emails.send({
      from: "noreply@yourdomain.com", // Must be a verified domain in Resend
      to: "mahmedyk789@gmail.com",
      subject: "New RFP Submission",
      html: `
        <h2>New Request for Proposal</h2>
        <p><strong>Title:</strong> ${data.title}</p>
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Position:</strong> ${data.position || "N/A"}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
        <p><strong>Country:</strong> ${data.country}</p>
        <p><strong>Company:</strong> ${data.company || "N/A"}</p>
        <p><strong>Industry:</strong> ${data.industry || "N/A"}</p>
        <p><strong>Revenue:</strong> ${data.revenue || "N/A"}</p>
        <p><strong>Comments:</strong> ${data.comments}</p>

        <h3>Uploaded Files:</h3>
        <ul>${fileLinks}</ul>
      `,
    })

    if (error) throw error

    return { success: true }
  } catch (error) {
    console.error("Failed to send email or save to database", error)
    return { error: "Failed to process submission" }
  }
}
