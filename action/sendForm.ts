"use server"

import { Resend } from "resend"
import { saveContactFormSubmission } from "@/lib/supabase"

const resend = new Resend(process.env.RESEND_API!)


export async function sendContactForm(formData: any) {
  const { captchaToken, ...userData } = formData

  // 🛡️ 1. Verify captcha with hCaptcha
  const res = await fetch("https://api.hcaptcha.com/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.HCAPTCHA_SECRET!,
      response: captchaToken,
    }),
  })

  const captchaResult = await res.json()

  if (!captchaResult.success) {
    return { success: false, error: "Captcha failed" }
  }

  try {
    // Store the submission in Supabase
    await saveContactFormSubmission(userData)

    // ✅ 2. Send the email if captcha passed
    await resend.emails.send({
      from: "noreply@devedge.com", // Must be a verified domain in Resend
      to: userData.email,
      subject: "New Contact Form Submission",
      html: `
        <strong>Name:</strong> ${userData.firstName} ${userData.lastName}<br/>
        <strong>Email:</strong> ${userData.email}<br/>
        <strong>Phone:</strong> ${userData.phone}<br/>
        <strong>Company:</strong> ${userData.company}<br/>
        <strong>Country:</strong> ${userData.country}<br/>
        <strong>Industry:</strong> ${userData.industry}<br/>
        <strong>Message:</strong><br/>${userData.message.replace(/\n/g, "<br/>")}
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Error processing form:", error)
    return { success: false, error: "Email or database operation failed" }
  }
}
