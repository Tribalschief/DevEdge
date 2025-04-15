import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Form submission functions for database storage
export async function saveContactFormSubmission(formData: any) {
  const { data, error } = await supabase
    .from("contact_form_submissions")
    .insert([
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        country: formData.country,
        industry: formData.industry,
        message: formData.message,
        opt_in: formData.optIn,
        submitted_at: new Date().toISOString(),
      },
    ])
    .select()

  return { data, error }
}

export async function saveCVSubmission(formData: any, countryCode: string) {
  // Check if user has submitted in the last 24 hours
  const twentyFourHoursAgo = new Date()
  twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24)

  const { data: recentSubmissions, error: queryError } = await supabase
    .from("cv_submissions")
    .select("*")
    .eq("email", formData.email)
    .gt("submitted_at", twentyFourHoursAgo.toISOString())

  if (recentSubmissions && recentSubmissions.length > 0) {
    return {
      data: null,
      error: null,
      hasRecentSubmission: true,
    }
  }

  const { data, error } = await supabase
    .from("cv_submissions")
    .insert([
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        mobile_number: formData.mobileNumber,
        country_code: countryCode,
        job_type: formData.jobType,
        marketing_consent: formData.marketingConsent,
        submitted_at: new Date().toISOString(),
      },
    ])
    .select()

  return {
    data,
    error,
    hasRecentSubmission: false,
  }
}

export async function saveRFPSubmission(formData: any) {
  const { data, error } = await supabase
    .from("rfp_submissions")
    .insert([
      {
        title: formData.title,
        first_name: formData.firstName,
        last_name: formData.lastName,
        position: formData.position,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        company: formData.company,
        industry: formData.industry,
        revenue: formData.revenue,
        comments: formData.comments,
        submitted_at: new Date().toISOString(),
      },
    ])
    .select()

  return { data, error }
}
