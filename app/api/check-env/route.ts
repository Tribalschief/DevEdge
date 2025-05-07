import { NextResponse } from "next/server"

export async function GET() {
  // List of required environment variables
  const requiredVars = ["SUPABASE_URL", "SUPABASE_ANON_KEY", "RESEND_API"]

  // Check which ones are missing
  const missingVars = requiredVars.filter((varName) => !process.env[varName])

  // Return the list of missing variables
  return NextResponse.json({ missingVars })
}
