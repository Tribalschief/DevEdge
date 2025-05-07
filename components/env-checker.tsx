"use client"

import { useEffect, useState } from "react"
import { AlertCircle } from "lucide-react"

export function EnvChecker() {
  const [missingEnvVars, setMissingEnvVars] = useState<string[]>([])
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    // Check for required environment variables
    const requiredEnvVars = [
      { name: "SUPABASE_URL", value: process.env.SUPABASE_URL! },
      { name: "SUPABASE_ANON_KEY", value: process.env.SUPABASE_ANON_KEY! },
      { name: "RESEND_API", value: process.env.RESEND_API! },
    ]

    const missing = requiredEnvVars.filter((env) => !env.value).map((env) => env.name)
    setMissingEnvVars(missing)
    setShowWarning(missing.length > 0)
    
  }, [])
  

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6">
      <div className="flex items-start">
        <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 mr-3" />
        <div>
          <h3 className="font-medium text-amber-800">Missing Environment Variables</h3>
          <p className="text-amber-700 mt-1">The following environment variables are missing:</p>
          <ul className="list-disc list-inside mt-2 text-amber-700">
            {missingEnvVars.map((envVar) => (
              <li key={envVar}>{envVar}</li>
            ))}
          </ul>
          <p className="text-amber-700 mt-2">
            Please add these to your .env.local file to ensure the application works correctly.
          </p>
        </div>
      </div>
    </div>
  )
}
