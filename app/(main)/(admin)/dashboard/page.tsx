// import { prisma } from "@/lib/prisma"
// import { SecretDashboard } from "@/components/secret-dashboard"
// import { PasswordProtection } from "@/components/password-protection"
// import { headers, cookies } from "next/headers"
// import { redirect } from "next/navigation"

// async function getSubmissions() {
//   const [contactSubmissions, cvSubmissions, rfpSubmissions] = await Promise.all([
//     prisma.contactFormSubmission.findMany({
//       orderBy: { createdAt: "desc" },
//       take: 100,
//     }),
//     prisma.cvSubmission.findMany({
//       orderBy: { createdAt: "desc" },
//       take: 100,
//     }),
//     prisma.rfpSubmission.findMany({
//       orderBy: { createdAt: "desc" },
//       take: 100,
//     }),
//   ])

//   return {
//     contactSubmissions,
//     cvSubmissions,
//     rfpSubmissions,
//   }
// }

// // Simple security check - only allow access from your domain
// async function checkAccess() {
//   const headersList = await headers()
//   const host =  headersList.get("host")

//   // Allow localhost for development
//   if (host?.includes("localhost") || host?.includes("127.0.0.1")) {
//     return true
//   }

//   // Add your domain here for production
//   const allowedDomains = [ "localhost:3000", "devedgeconsulting.com", "www.devedgeconsulting.com"]

//   if (host && allowedDomains.some((domain) => host.includes(domain))) {
//     return true
//   }

//   return false
// }

// // Check if user is authenticated
// async function checkAuth() {
//   const cookieStore = await cookies()
//   const authToken = cookieStore.get("dashboard_auth")

//   if (!authToken) {
//     return false
//   }

//   // Verify the token (simple time-based check)
//   try {
//     const tokenData = JSON.parse(Buffer.from(authToken.value, "base64").toString())
//     const now = Date.now()
//     const tokenTime = tokenData.timestamp
//     const oneHour = 60 * 60 * 1000 // 1 hour in milliseconds

//     // Token expires after 1 hour
//     if (now - tokenTime > oneHour) {
//       return false
//     }

//     return tokenData.authenticated === true
//   } catch {
//     return false
//   }
// }

// export default async function SecretDashboardPage() {
//   const hasAccess = await checkAccess()

//   if (!hasAccess) {
//     redirect("/")
//   }

//   const isAuthenticated = await checkAuth()

//   if (!isAuthenticated) {
//     return <PasswordProtection />
//   }

//   const submissions = await getSubmissions()

//   return (
//     <div className="container mx-auto py-8">
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-900">Form Submissions Dashboard</h1>
//         <p className="text-gray-600 mt-2">Manage and view all form submissions</p>
//       </div>
//       <SecretDashboard submissions={submissions} />
//     </div>
//   )
// }
export default function SecretDashboardPage() {
  return <div>SecretDashboardPage</div>
}