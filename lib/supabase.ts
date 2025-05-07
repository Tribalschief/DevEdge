import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!


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

type CVSubmissionData = {
  firstName: string
  lastName: string
  email: string
  mobileNumber: string
  jobType: string
  marketingConsent?: boolean
  fileUrl?: string
}

function getSupabaseClient() {
  if (!supabaseUrl) {
    throw new Error("SUPABASE_URL is not defined. Please check your environment variables.")
  }

  if (!supabaseAnonKey) {
    throw new Error("SUPABASE_ANON_KEY is not defined. Please check your environment variables.")
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}

/**
 * Save CV submission to Supabase and check for recent submissions
 * @param data CV submission data
 * @param countryCode Country code for the phone number
 * @returns Object with hasRecentSubmission flag and any error
 */
export async function saveCVSubmission(data: CVSubmissionData, countryCode: string) {
  try {
    // Get Supabase client
    const supabase = getSupabaseClient()

    // Check if user has submitted in the last 24 hours
    const twentyFourHoursAgo = new Date()
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24)

    const { data: existingSubmissions, error: fetchError } = await supabase
      .from("cv_submissions")
      .select("*")
      .eq("email", data.email.toLowerCase())
      .gte("created_at", twentyFourHoursAgo.toISOString())
      .limit(1)

    if (fetchError) {
      console.error("Error checking for existing submissions:", fetchError)
      return { hasRecentSubmission: false, error: fetchError }
    }

    // If there's a recent submission, return without saving
    if (existingSubmissions && existingSubmissions.length > 0) {
      return { hasRecentSubmission: true, error: null }
    }

    // Save the new submission
    const { error: insertError } = await supabase.from("cv_submissions").insert([
      {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email.toLowerCase(),
        phone_number: `${countryCode}${data.mobileNumber}`,
        job_type: data.jobType,
        marketing_consent: data.marketingConsent || false,
        cv_url: data.fileUrl || null,
      },
    ])

    if (insertError) {
      console.error("Error inserting submission:", insertError)
      return { hasRecentSubmission: false, error: insertError }
    }

    return { hasRecentSubmission: false, error: null }
  } catch (error) {
    console.error("Error in saveCVSubmission:", error)
    return { hasRecentSubmission: false, error }
  }
}


export async function saveRFPSubmission(formData: any) {
  
  const { data, error } = await supabase
    .from("rfp_submissions")
    .insert([{
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
    }])
    .select()

 

  return { data, error }
}