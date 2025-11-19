// "use client"

// import { useState, useTransition } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import {
//   Download,
//   Eye,
//   Mail,
//   Phone,
//   Building,
//   Calendar,
//   Search,
//   Filter,
//   ExternalLink,
//   FileText,
//   LogOut,
//   Loader2,
// } from "lucide-react"
// import { logoutDashboard } from "@/lib/dashboard-auth"

// interface ContactSubmission {
//   id: string
//   firstName: string
//   lastName: string
//   email: string
//   phone: string
//   company: string
//   country: string
//   industry: string
//   message: string
//   optIn: boolean
//   createdAt: Date
// }

// interface CvSubmission {
//   id: string
//   firstName: string
//   lastName: string
//   email: string
//   phoneNumber: string
//   jobType: string
//   marketingConsent: boolean
//   cvUrl: string | null
//   createdAt: Date
// }

// interface RfpSubmission {
//   id: string
//   title: string
//   firstName: string
//   lastName: string
//   position: string | null
//   email: string
//   phone: string | null
//   country: string
//   company: string | null
//   industry: string
//   revenue: string | null
//   comments: string | null
//   fileUrls: string[]
//   createdAt: Date
// }

// interface SecretDashboardProps {
//   submissions: {
//     contactSubmissions: ContactSubmission[]
//     cvSubmissions: CvSubmission[]
//     rfpSubmissions: RfpSubmission[]
//   }
// }

// export function SecretDashboard({ submissions }: SecretDashboardProps) {
//   const [selectedTab, setSelectedTab] = useState("contact")
//   const [searchTerm, setSearchTerm] = useState("")
//   const [dateFilter, setDateFilter] = useState("")
//   const [isPending, startTransition] = useTransition()

//   const formatDate = (date: Date) => {
//     return new Intl.DateTimeFormat("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     }).format(new Date(date))
//   }

//   const downloadFile = (url: string, filename: string) => {
//     const link = document.createElement("a")
//     link.href = url
//     link.download = filename
//     link.target = "_blank"
//     link.click()
//   }

//   const exportToCSV = (data: any[], filename: string) => {
//     if (data.length === 0) return

//     const headers = Object.keys(data[0]).filter((key) => key !== "id")
//     const csvContent = [
//       headers.join(","),
//       ...data.map((row) =>
//         headers
//           .map((header) => {
//             const value = row[header]
//             if (Array.isArray(value)) {
//               return `"${value.join("; ")}"`
//             }
//             if (typeof value === "string" && value.includes(",")) {
//               return `"${value}"`
//             }
//             return value || ""
//           })
//           .join(","),
//       ),
//     ].join("\n")

//     const blob = new Blob([csvContent], { type: "text/csv" })
//     const url = window.URL.createObjectURL(blob)
//     const link = document.createElement("a")
//     link.href = url
//     link.download = `${filename}-${new Date().toISOString().split("T")[0]}.csv`
//     link.click()
//     window.URL.revokeObjectURL(url)
//   }

//   // Filter functions
//   const filterBySearch = (items: any[], searchFields: string[]) => {
//     if (!searchTerm) return items
//     return items.filter((item) =>
//       searchFields.some((field) => item[field]?.toString().toLowerCase().includes(searchTerm.toLowerCase())),
//     )
//   }

//   const filterByDate = (items: any[]) => {
//     if (!dateFilter) return items
//     const filterDate = new Date(dateFilter)
//     return items.filter((item) => {
//       const itemDate = new Date(item.createdAt)
//       return itemDate.toDateString() === filterDate.toDateString()
//     })
//   }

//   // Apply filters
//   const filteredContactSubmissions = filterByDate(
//     filterBySearch(submissions.contactSubmissions, ["firstName", "lastName", "email", "company"]),
//   )
//   const filteredCvSubmissions = filterByDate(
//     filterBySearch(submissions.cvSubmissions, ["firstName", "lastName", "email", "jobType"]),
//   )
//   const filteredRfpSubmissions = filterByDate(
//     filterBySearch(submissions.rfpSubmissions, ["firstName", "lastName", "email", "company", "title"]),
//   )

//   const handleLogout = () => {
//     startTransition(async () => {
//       await logoutDashboard()
//     })
//   }

//   return (
//     <div className="space-y-6">
//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Contact Forms</CardTitle>
//             <Mail className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{submissions.contactSubmissions.length}</div>
//             <p className="text-xs text-muted-foreground">
//               +
//               {
//                 submissions.contactSubmissions.filter(
//                   (s) => new Date(s.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
//                 ).length
//               }{" "}
//               this week
//             </p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">CV Submissions</CardTitle>
//             <FileText className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{submissions.cvSubmissions.length}</div>
//             <p className="text-xs text-muted-foreground">
//               +
//               {
//                 submissions.cvSubmissions.filter(
//                   (s) => new Date(s.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
//                 ).length
//               }{" "}
//               this week
//             </p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">RFP Submissions</CardTitle>
//             <Building className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">{submissions.rfpSubmissions.length}</div>
//             <p className="text-xs text-muted-foreground">
//               +
//               {
//                 submissions.rfpSubmissions.filter(
//                   (s) => new Date(s.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
//                 ).length
//               }{" "}
//               this week
//             </p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//             <CardTitle className="text-sm font-medium">Total Files</CardTitle>
//             <Download className="h-4 w-4 text-muted-foreground" />
//           </CardHeader>
//           <CardContent>
//             <div className="text-2xl font-bold">
//               {submissions.cvSubmissions.filter((s) => s.cvUrl).length +
//                 submissions.rfpSubmissions.reduce((acc, s) => acc + s.fileUrls.length, 0)}
//             </div>
//             <p className="text-xs text-muted-foreground">Uploaded files</p>
//           </CardContent>
//         </Card>
//       </div>

//       <div className="flex justify-between items-center">
//         <h2 className="text-xl font-semibold">Dashboard Controls</h2>
//         <Button
//           variant="outline"
//           onClick={handleLogout}
//           className="flex items-center gap-2 bg-transparent"
//           disabled={isPending}
//         >
//           {isPending ? (
//             <>
//               <Loader2 className="h-4 w-4 animate-spin" />
//               Logging out...
//             </>
//           ) : (
//             <>
//               <LogOut className="h-4 w-4" />
//               Logout
//             </>
//           )}
//         </Button>
//       </div>

//       {/* Search and Filter Controls */}
//       <Card>
//         <CardContent className="pt-6">
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="flex-1">
//               <div className="relative">
//                 <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   placeholder="Search by name, email, or company..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-8"
//                 />
//               </div>
//             </div>
//             <div className="flex gap-2">
//               <div className="relative">
//                 <Filter className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   type="date"
//                   value={dateFilter}
//                   onChange={(e) => setDateFilter(e.target.value)}
//                   className="pl-8"
//                 />
//               </div>
//               <Button
//                 variant="outline"
//                 onClick={() => {
//                   setSearchTerm("")
//                   setDateFilter("")
//                 }}
//               >
//                 Clear
//               </Button>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Submissions Tabs */}
//       <Tabs value={selectedTab} onValueChange={setSelectedTab}>
//         <div className="flex justify-between items-center">
//           <TabsList className="grid w-full max-w-md grid-cols-3">
//             <TabsTrigger value="contact">Contact ({filteredContactSubmissions.length})</TabsTrigger>
//             <TabsTrigger value="cv">CV ({filteredCvSubmissions.length})</TabsTrigger>
//             <TabsTrigger value="rfp">RFP ({filteredRfpSubmissions.length})</TabsTrigger>
//           </TabsList>

//           {/* Export Buttons */}
//           <div className="flex gap-2">
//             {selectedTab === "contact" && (
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => exportToCSV(filteredContactSubmissions, "contact-submissions")}
//               >
//                 <Download className="h-4 w-4 mr-2" />
//                 Export CSV
//               </Button>
//             )}
//             {selectedTab === "cv" && (
//               <Button variant="outline" size="sm" onClick={() => exportToCSV(filteredCvSubmissions, "cv-submissions")}>
//                 <Download className="h-4 w-4 mr-2" />
//                 Export CSV
//               </Button>
//             )}
//             {selectedTab === "rfp" && (
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => exportToCSV(filteredRfpSubmissions, "rfp-submissions")}
//               >
//                 <Download className="h-4 w-4 mr-2" />
//                 Export CSV
//               </Button>
//             )}
//           </div>
//         </div>

//         {/* Contact Forms Tab */}
//         <TabsContent value="contact" className="space-y-4">
//           {filteredContactSubmissions.length === 0 ? (
//             <Card>
//               <CardContent className="pt-6">
//                 <p className="text-center text-muted-foreground">No contact submissions found.</p>
//               </CardContent>
//             </Card>
//           ) : (
//             filteredContactSubmissions.map((submission) => (
//               <Card key={submission.id}>
//                 <CardHeader>
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <CardTitle className="text-lg">
//                         {submission.firstName} {submission.lastName}
//                       </CardTitle>
//                       <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
//                         <span className="flex items-center gap-1">
//                           <Mail className="h-3 w-3" />
//                           {submission.email}
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <Phone className="h-3 w-3" />
//                           {submission.phone}
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <Calendar className="h-3 w-3" />
//                           {formatDate(submission.createdAt)}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex gap-2">
//                       {submission.optIn && <Badge variant="secondary">Marketing Opt-in</Badge>}
//                       <Badge variant="outline">{submission.country}</Badge>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                     <div>
//                       <span className="font-medium">Company:</span> {submission.company}
//                     </div>
//                     <div>
//                       <span className="font-medium">Industry:</span> {submission.industry}
//                     </div>
//                   </div>
//                   <div>
//                     <span className="font-medium">Message:</span>
//                     <p className="mt-1 text-sm text-muted-foreground bg-gray-50 p-3 rounded">{submission.message}</p>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))
//           )}
//         </TabsContent>

//         {/* CV Submissions Tab */}
//         <TabsContent value="cv" className="space-y-4">
//           {filteredCvSubmissions.length === 0 ? (
//             <Card>
//               <CardContent className="pt-6">
//                 <p className="text-center text-muted-foreground">No CV submissions found.</p>
//               </CardContent>
//             </Card>
//           ) : (
//             filteredCvSubmissions.map((submission) => (
//               <Card key={submission.id}>
//                 <CardHeader>
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <CardTitle className="text-lg">
//                         {submission.firstName} {submission.lastName}
//                       </CardTitle>
//                       <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
//                         <span className="flex items-center gap-1">
//                           <Mail className="h-3 w-3" />
//                           {submission.email}
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <Phone className="h-3 w-3" />
//                           {submission.phoneNumber}
//                         </span>
//                         <span className="flex items-center gap-1">
//                           <Calendar className="h-3 w-3" />
//                           {formatDate(submission.createdAt)}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex gap-2">
//                       {submission.marketingConsent && <Badge variant="secondary">Marketing Consent</Badge>}
//                       <Badge>{submission.jobType}</Badge>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   {submission.cvUrl && (
//                     <div className="flex items-center gap-2">
//                       <Button variant="outline" size="sm" onClick={() => window.open(submission.cvUrl!, "_blank")}>
//                         <Eye className="h-4 w-4 mr-2" />
//                         View CV
//                       </Button>
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() =>
//                           downloadFile(submission.cvUrl!, `CV-${submission.firstName}-${submission.lastName}`)
//                         }
//                       >
//                         <Download className="h-4 w-4 mr-2" />
//                         Download CV
//                       </Button>
//                       <Button
//                         variant="ghost"
//                         size="sm"
//                         onClick={() => navigator.clipboard.writeText(window.location.origin + submission.cvUrl!)}
//                       >
//                         <ExternalLink className="h-4 w-4 mr-2" />
//                         Copy Link
//                       </Button>
//                     </div>
//                   )}
//                   {!submission.cvUrl && <p className="text-sm text-muted-foreground">No CV file uploaded</p>}
//                 </CardContent>
//               </Card>
//             ))
//           )}
//         </TabsContent>

//         {/* RFP Submissions Tab */}
//         <TabsContent value="rfp" className="space-y-4">
//           {filteredRfpSubmissions.length === 0 ? (
//             <Card>
//               <CardContent className="pt-6">
//                 <p className="text-center text-muted-foreground">No RFP submissions found.</p>
//               </CardContent>
//             </Card>
//           ) : (
//             filteredRfpSubmissions.map((submission) => (
//               <Card key={submission.id}>
//                 <CardHeader>
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <CardTitle className="text-lg">{submission.title}</CardTitle>
//                       <div className="text-sm text-muted-foreground">
//                         {submission.firstName} {submission.lastName}
//                         {submission.position && ` - ${submission.position}`}
//                       </div>
//                       <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
//                         <span className="flex items-center gap-1">
//                           <Mail className="h-3 w-3" />
//                           {submission.email}
//                         </span>
//                         {submission.phone && (
//                           <span className="flex items-center gap-1">
//                             <Phone className="h-3 w-3" />
//                             {submission.phone}
//                           </span>
//                         )}
//                         <span className="flex items-center gap-1">
//                           <Calendar className="h-3 w-3" />
//                           {formatDate(submission.createdAt)}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex gap-2">
//                       <Badge variant="outline">{submission.country}</Badge>
//                       <Badge>{submission.industry}</Badge>
//                     </div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                     {submission.company && (
//                       <div>
//                         <span className="font-medium">Company:</span> {submission.company}
//                       </div>
//                     )}
//                     {submission.revenue && (
//                       <div>
//                         <span className="font-medium">Revenue:</span> {submission.revenue}
//                       </div>
//                     )}
//                   </div>

//                   {submission.comments && (
//                     <div className="mb-4">
//                       <span className="font-medium">Comments:</span>
//                       <p className="mt-1 text-sm text-muted-foreground bg-gray-50 p-3 rounded">{submission.comments}</p>
//                     </div>
//                   )}

//                   {submission.fileUrls.length > 0 && (
//                     <div>
//                       <span className="font-medium">Attachments ({submission.fileUrls.length}):</span>
//                       <div className="flex flex-wrap gap-2 mt-2">
//                         {submission.fileUrls.map((url: string , index: number) => (
//                           <div key={index} className="flex gap-2">
//                             <Button variant="outline" size="sm" onClick={() => window.open(url, "_blank")}>
//                               <Eye className="h-4 w-4 mr-2" />
//                               View File {index + 1}
//                             </Button>
//                             <Button
//                               variant="outline"
//                               size="sm"
//                               onClick={() => downloadFile(url, `attachment-${index + 1}`)}
//                             >
//                               <Download className="h-4 w-4 mr-2" />
//                               Download
//                             </Button>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   )}
//                 </CardContent>
//               </Card>
//             ))
//           )}
//         </TabsContent>
//       </Tabs>
//     </div>
//   )
// }
