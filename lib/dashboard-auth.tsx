// "use server"

// import { cookies, headers } from "next/headers"
// import { redirect } from "next/navigation"

// // Store this in your environment variables
// const DASHBOARD_PASSWORD = process.env.DASHBOARD_PASSWORD || "AdminSecure2024!"

// // Simple rate limiting (in production, use Redis or a proper rate limiter)
// const attemptTracker = new Map<string, { count: number; lastAttempt: number }>()

// async function getClientIP(): Promise<string> {
//   const headersList = await headers()
//   const forwarded = headersList.get("x-forwarded-for")
//   const realIP = headersList.get("x-real-ip")

//   if (forwarded) {
//     return forwarded.split(",")[0].trim()
//   }

//   if (realIP) {
//     return realIP
//   }

//   return "unknown"
// }

// function isRateLimited(ip: string): boolean {
//   const now = Date.now()
//   const attempts = attemptTracker.get(ip)

//   if (!attempts) {
//     return false
//   }

//   // Reset counter if last attempt was more than 15 minutes ago
//   if (now - attempts.lastAttempt > 15 * 60 * 1000) {
//     attemptTracker.delete(ip)
//     return false
//   }

//   // Allow max 5 attempts per 15 minutes
//   return attempts.count >= 5
// }

// function recordAttempt(ip: string, success: boolean) {
//   const now = Date.now()
//   const attempts = attemptTracker.get(ip) || { count: 0, lastAttempt: 0 }

//   if (success) {
//     // Clear attempts on successful login
//     attemptTracker.delete(ip)
//   } else {
//     // Increment failed attempts
//     attemptTracker.set(ip, {
//       count: attempts.count + 1,
//       lastAttempt: now,
//     })
//   }
// }

// export async function authenticateDashboard(formData: FormData) {
//   const password = formData.get("password") as string
//   const clientIP = await getClientIP()

//   // Check rate limiting
//   if (isRateLimited(clientIP)) {
//     console.warn(`Rate limited login attempt from IP: ${clientIP}`)
//     return {
//       success: false,
//       message: "Too many attempts. Please try again in 15 minutes.",
//     }
//   }

//   // Verify password
//   const isValid = password === DASHBOARD_PASSWORD

//   // Record the attempt
//   recordAttempt(clientIP, isValid)

//   if (!isValid) {
//     console.warn(`Failed login attempt from IP: ${clientIP}`)
//     return {
//       success: false,
//       message: "Invalid password",
//     }
//   }

//   // Create authentication token
//   const tokenData = {
//     authenticated: true,
//     timestamp: Date.now(),
//     ip: clientIP,
//   }

//   const token = Buffer.from(JSON.stringify(tokenData)).toString("base64")

//   // Set secure cookie
//   const cookieStore = await cookies()
//   cookieStore.set("dashboard_auth", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "strict",
//     maxAge: 60 * 60, // 1 hour
//     path: "/dashboard-secret-2024",
//   })

//   console.log(`Successful login from IP: ${clientIP}`)

//   return {
//     success: true,
//     message: "Authentication successful",
//   }
// }

// export async function logoutDashboard() {
//   const cookieStore = await cookies()

//   // Clear the authentication cookie
//   cookieStore.set("dashboard_auth", "", {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     sameSite: "strict",
//     maxAge: 0, // Expire immediately
//     path: "/dashboard-secret-2024",
//   })

//   // Redirect to the same page to trigger re-authentication
//   redirect("/dashboard-secret-2024")
// }
