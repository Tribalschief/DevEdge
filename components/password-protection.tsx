// "use client"

// import { useState, useTransition } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Alert, AlertDescription } from "@/components/ui/alert"
// import { Lock, Eye, EyeOff, Shield, Loader2 } from "lucide-react"
// import { authenticateDashboard } from "@/lib/dashboard-auth"
// import { useRouter } from "next/navigation"

// export function PasswordProtection() {
//   const [password, setPassword] = useState("")
//   const [showPassword, setShowPassword] = useState(false)
//   const [error, setError] = useState("")
//   const [isPending, startTransition] = useTransition()
//   const router = useRouter()

//   const handleSubmit = async (formData: FormData) => {
//     setError("")

//     startTransition(async () => {
//       try {
//         const result = await authenticateDashboard(formData)

//         if (result.success) {
//           // Refresh the page to show the dashboard
//           router.refresh()
//         } else {
//           setError(result.message || "Invalid password")
//         }
//       } catch (error) {
//         setError("An error occurred. Please try again.")
//       }
//     })
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <Shield className="mx-auto h-12 w-12 text-blue-600" />
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Dashboard Access</h2>
//           <p className="mt-2 text-sm text-gray-600">Enter the password to access the admin dashboard</p>
//         </div>

//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <Lock className="h-5 w-5" />
//               Authentication Required
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <form action={handleSubmit} className="space-y-4">
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <Input
//                     id="password"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter dashboard password"
//                     className="pr-10"
//                     required
//                     disabled={isPending}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                     disabled={isPending}
//                   >
//                     {showPassword ? (
//                       <EyeOff className="h-4 w-4 text-gray-400" />
//                     ) : (
//                       <Eye className="h-4 w-4 text-gray-400" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {error && (
//                 <Alert variant="destructive">
//                   <AlertDescription>{error}</AlertDescription>
//                 </Alert>
//               )}

//               <Button type="submit" className="w-full" disabled={isPending}>
//                 {isPending ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     Verifying...
//                   </>
//                 ) : (
//                   "Access Dashboard"
//                 )}
//               </Button>
//             </form>

//             <div className="mt-6 text-xs text-gray-500 space-y-2">
//               <p className="flex items-center gap-1">
//                 <Shield className="h-3 w-3" />
//                 Session expires after 1 hour of inactivity
//               </p>
//               <p>• Password attempts are logged for security</p>
//               <p>• Access is restricted to authorized personnel only</p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }
