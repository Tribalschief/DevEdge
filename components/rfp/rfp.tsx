// "use client"

// import type React from "react"
// import { useState, useRef, useEffect } from "react"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm, Controller, FieldPath } from "react-hook-form"
// import { z, ZodIssue } from "zod";
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Label } from "@/components/ui/label"
// import Link from "next/link"
// import HCaptcha from "@hcaptcha/react-hcaptcha"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
// import { useToast } from "@/hooks/use-toast"
// import { sendRfp } from "@/action/sendRFP" // Assuming this action exists and works as expected
// import Cookies from "js-cookie"
// import { CookieConsentDialog } from "@/components/cookies-dialog/consnet-dialog"
// import { PageProgressIndicator } from "@/app/(main)/about/_components/page-progress-indicator"

// const RFP_FORM_COOKIE = "rfp_form_data"
// const COOKIE_EXPIRY = 30 // days

// // Form schema based on CVSubmissionForm's validation rules
// const rfpFormSchema = z.object({
//   title: z.string().min(1, { message: "Title is required" }),
//   firstName: z
//     .string()
//     .min(2, { message: "First name is required" })
//     .max(50, { message: "First name cannot exceed 50 characters" }) // Adjusted from 10 for practicality
//     .regex(/^[a-zA-Z\s'-]+$/, {
//       message: "First name should only contain letters, spaces, hyphens, or apostrophes",
//     }),
//   lastName: z
//     .string()
//     .min(2, { message: "Last name is required" })
//     .max(50, { message: "Last name cannot exceed 50 characters" }) // Adjusted from 10
//     .regex(/^[a-zA-Z\s'-]+$/, {
//       message: "Last name should only contain letters, spaces, hyphens, or apostrophes",
//     }),
//   position: z.string().max(100, { message: "Position cannot exceed 100 characters" }).optional().or(z.literal("")),
//   email: z
//     .string()
//     .min(1, { message: "Email is required" })
//     .email({ message: "Please enter a valid email address" })
//     .refine(
//       (email) => {
//         const validDomains = [
//           "gmail.com", "outlook.com", "hotmail.com", "yahoo.com",
//           "icloud.com", "aol.com", "protonmail.com", "mail.com",
//         ]
//         const tempDomains = [
//           "tempmail.com", "temp-mail.org", "guerrillamail.com",
//           "mailinator.com", "yopmail.com", "10minutemail.com",
//         ]
//         const domain = email.split("@")[1]?.toLowerCase()
//         if (!domain || !email.includes("@")) return false
//         if (tempDomains.includes(domain)) return false
//         return validDomains.includes(domain) || (!tempDomains.includes(domain) && domain.includes("."))
//       },
//       { message: "Please use a valid email provider (Gmail, Outlook, or business email)" },
//     ),
//   phone: z
//     .string()
//     .regex(/^\d*$/, { message: "Phone number should only contain digits" }) // Allow empty string
//     .min(7, { message: "Phone number must be at least 7 digits if provided" })
//     .max(15, { message: "Phone number cannot exceed 15 digits" })
//     .optional()
//     .or(z.literal("")),
//   country: z.string().min(1, { message: "Country is required" }),
//   company: z.string().max(100, { message: "Company name cannot exceed 100 characters" }).optional().or(z.literal("")),
//   industry: z.string().min(1, { message: "Industry is required" }),
//   revenue: z.string().optional().or(z.literal("")),
//   comments: z
//     .string()
//     .min(10, { message: "Comments must be at least 10 characters" })
//     .max(2000, { message: "Comments cannot exceed 2000 characters" }),
//   termsAccepted: z.boolean().refine((val) => val === true, {
//     message: "You must accept the terms and conditions",
//   }),
// })

// type RfpFormValues = z.infer<typeof rfpFormSchema>

// const defaultFormValues: RfpFormValues = {
//   title: "",
//   firstName: "",
//   lastName: "",
//   position: "",
//   email: "",
//   phone: "",
//   country: "",
//   company: "",
//   industry: "",
//   revenue: "",
//   comments: "",
//   termsAccepted: false,
// }

// // File validation constants
// const MAX_TOTAL_FILE_SIZE = 10 * 1024 * 1024 // 10 MB
// const ALLOWED_FILE_EXTENSIONS = [".doc", ".docx", ".pdf", ".ppt", ".pptx", ".txt", ".xlsx", ".zip"]

// export default function RfpForm() {
//   const [files, setFiles] = useState<{ [key: number]: File | null }>({
//     0: null,
//     1: null,
//     2: null,
//   })
//   const [captchaToken, setCaptchaToken] = useState<string | null>(null)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")

//   const captchaRef = useRef<HCaptcha>(null)
//   const { toast } = useToast()

//   const form = useForm<RfpFormValues>({
//     resolver: zodResolver(rfpFormSchema),
//     defaultValues: defaultFormValues,
//   })

//   // Load form data from cookies on initial render
//   useEffect(() => {
//     const savedData = Cookies.get(RFP_FORM_COOKIE)
//     if (savedData) {
//       try {
//         const parsedData = JSON.parse(savedData)
//         // Validate parsedData against a partial schema or ensure keys match
//         const validKeys = Object.keys(defaultFormValues) as (keyof RfpFormValues)[]
//         const sanitizedData: Partial<RfpFormValues> = {}
//         validKeys.forEach(key => {
//             if (parsedData[key] !== undefined) {
//                 sanitizedData[key] = parsedData[key]
//             }
//         })
//         form.reset({ ...defaultFormValues, ...sanitizedData })
//       } catch (e) {
//         console.error("Error parsing cookie data:", e)
//         form.reset(defaultFormValues)
//       }
//     }
//   }, [form.reset]) // form.reset is stable

//   // Save form data to cookies when it changes
//   useEffect(() => {
//     const subscription = form.watch((value) => {
//       if (value.firstName || value.email) { // Keep original condition for saving
//         Cookies.set(RFP_FORM_COOKIE, JSON.stringify(value), { expires: COOKIE_EXPIRY })
//       }
//     })
//     return () => subscription.unsubscribe()
//   }, [form.watch]) // form.watch is stable

//   const handleFileChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       const file = e.target.files[0]
//       const extension = `.${file.name.split(".").pop()?.toLowerCase()}`

//       if (!ALLOWED_FILE_EXTENSIONS.includes(extension)) {
//         toast({
//           title: "Invalid File Type",
//           description: `File ${file.name} has an unsupported type. Allowed types: ${ALLOWED_FILE_EXTENSIONS.join(", ")}.`,
//           variant: "destructive",
//         })
//         e.target.value = "" // Clear the input
//         return
//       }
      
//       // Individual file size check (optional, as total is checked later)
//       // if (file.size > SOME_INDIVIDUAL_MAX_SIZE) { ... }

//       setFiles((prevFiles) => ({ ...prevFiles, [index]: file }))
//       toast({
//         title: "File Selected",
//         description: `${file.name} has been selected.`,
//       })
//     } else {
//       setFiles((prevFiles) => ({ ...prevFiles, [index]: null }))
//     }
//   }

//   const handleCaptchaVerify = (token: string) => {
//     setCaptchaToken(token)
//     toast({
//       title: "Captcha Verified",
//       description: "Thank you for verifying you're human!",
//     })
//   }

//   const handleCaptchaExpire = () => {
//     setCaptchaToken(null)
//     toast({
//       title: "Captcha Expired",
//       description: "Please verify the captcha again.",
//       variant: "destructive",
//     })
//   }

//   const processSubmit = async (values: RfpFormValues) => {
//     if (!captchaToken) {
//       toast({
//         title: "Captcha Required",
//         description: "Please complete the captcha verification.",
//         variant: "destructive",
//       })
//       return
//     }

//     // File validation (total size and individual types again for safety)
//     let totalSize = 0
//     const uploadedFiles = Object.values(files).filter((f) => f !== null) as File[]

//     for (const file of uploadedFiles) {
//       totalSize += file.size
//       const extension = `.${file.name.split(".").pop()?.toLowerCase()}`
//       if (!ALLOWED_FILE_EXTENSIONS.includes(extension)) {
//         toast({
//           title: "Invalid File Type",
//           description: `File ${file.name} has an unsupported type. Allowed: ${ALLOWED_FILE_EXTENSIONS.join(", ")}`,
//           variant: "destructive",
//         })
//         return // Stop submission
//       }
//     }

//     if (totalSize > MAX_TOTAL_FILE_SIZE) {
//       toast({
//         title: "File Size Exceeded",
//         description: `Total file size (${(totalSize / (1024*1024)).toFixed(2)} MB) exceeds the ${MAX_TOTAL_FILE_SIZE / (1024*1024)} MB limit.`,
//         variant: "destructive",
//       })
//       return // Stop submission
//     }

//     setIsSubmitting(true)
//     setFormStatus("idle") // Reset error status from previous attempts

//     try {
//       toast({
//         title: "Submitting Form",
//         description: "Please wait while we process your submission...",
//       })

//       const formDataObj = new FormData()
//       Object.entries(values).forEach(([key, value]) => {
//         formDataObj.append(key, String(value))
//       })
//       formDataObj.append("captchaToken", captchaToken)

//       Object.entries(files).forEach(([index, file]) => {
//         if (file) {
//           formDataObj.append(`file${index}`, file, file.name) // Changed key to file${index} for clarity
//         }
//       })

//       const result = await sendRfp(formDataObj) // Assuming sendRfp is your server action

//       if (result.success) {
//         setFormStatus("success")
//         form.reset(defaultFormValues)
//         setFiles({ 0: null, 1: null, 2: null })
//         Cookies.remove(RFP_FORM_COOKIE)
//         captchaRef.current?.resetCaptcha()
//         setCaptchaToken(null)
//         toast({
//           title: "Form Submitted Successfully",
//           description: "Thank you for your submission. We will contact you shortly.",
//         })
//         window.scrollTo({ top: 0, behavior: "smooth" })
//       } else {
//         setFormStatus("error");
//         // Assuming result.errors from your server is an array of ZodIssue or a compatible structure
//         if (result.errors && Array.isArray(result.errors)) {
//            // Cast result.errors to ZodIssue[] to inform TypeScript of its structure
//            (result.errors as ZodIssue[]).forEach((issue: ZodIssue) => { // <-- CORRECTED TYPING HERE
//             if (issue.path && issue.path.length > 0) {
//               const firstPathSegment = issue.path[0];

//               // Form field names are typically strings.
//               // issue.path[0] could be a number if it's an error within an array element.
//               if (typeof firstPathSegment === 'string') {
//                 const fieldName = firstPathSegment as FieldPath<RfpFormValues>;

//                 // Check if this fieldName is actually a key in our form schema's shape
//                 if (fieldName in rfpFormSchema.shape) {
//                    form.setError(fieldName, { type: "server", message: issue.message });
//                 } else {
//                   // This handles cases where the server might report an error on a path
//                   // not directly mappable to a top-level form field (e.g., nested objects).
//                   console.warn(`Server validation error for unhandled path: ${issue.path.join('.')}. Message: ${issue.message}`);
//                 }
//               } else {
//                 // Handles cases where the first path segment is a number (e.g., error in an array at root).
//                 console.warn(`Server validation error for path with initial number segment: ${issue.path.join('.')}. Message: ${issue.message}`);
//               }
//             } else {
//               // Error without a path, perhaps a general validation error from the server
//               console.warn(`Server validation error without a path: ${issue.message}`);
//             }
//           });
//         }

//         toast({
//           title: "Submission Failed",
//           description: result.error || "There was an error submitting your form. Please check highlighted fields or try again.",
//           variant: "destructive",
//         });
//       }
//     } catch (error) {
//       console.error("Form submission error:", error)
//       setFormStatus("error")
//       toast({
//         title: "Submission Failed",
//         description: "An unexpected error occurred. Please try again.",
//         variant: "destructive",
//       })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   if (formStatus === "success") {
//     return (
//       <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <CookieConsentDialog />
        
//         <Alert className="bg-green-50 border-green-200">
//           <CheckCircle2 className="h-5 w-5 text-green-600" />
//           <AlertTitle className="text-green-800 text-lg font-semibold">Submission Successful</AlertTitle>
//           <AlertDescription className="text-green-700">
//             <p className="mb-4">
//               Thank you for submitting your Request for Proposal. Your submission has been received.
//             </p>
//             <p className="mb-4">Our team will review your request and contact you shortly.</p>
//             <Button onClick={() => setFormStatus("idle")} className="mt-2 bg-green-600 hover:bg-green-700">
//               Submit Another Request
//             </Button>
//           </AlertDescription>
//         </Alert>
//       </div>
//     )
//   }
//   const sections = [
//     { id: "details", title: "Details" },
//     { id: "company", title: "Company" },
//     { id: "additional", title: "Additional" },
//   ]
//   return (
//     <div className="mx-auto">
//       <CookieConsentDialog />
//       <PageProgressIndicator sections={sections} />
//       {formStatus === "error" && !form.formState.isDirty && Object.keys(form.formState.errors).length === 0 && (
//         <Alert className="mb-6 bg-red-50 border-red-200">
//           <AlertCircle className="h-5 w-5 text-red-600" />
//           <AlertTitle className="text-red-800">Submission Failed</AlertTitle>
//           <AlertDescription className="text-red-700">
//             There was an error submitting your form. Please try again or contact support if the issue persists.
//           </AlertDescription>
//         </Alert>
//       )}
//       <div className="relative">
//         <div className="bg-white rounded-lg max-w-full sm:max-w-2xl lg:max-w-5xl shadow-md p-6 sm:p-8 mb-8 mx-auto relative z-10">
//           <div className="mb-6">
//             <h1 className="text-xl font-bold">Submit RFP</h1>
//             <h2 className="text-2xl font-bold mt-2">Request for proposal for services</h2>
//             <p className="text-gray-600">How can we help your business?</p>
//           </div>

//           <div className="my-4 text-sm" >
//             <p>
//               Thank you for your interest in our member firm services. Please take a few moments to complete this form.
//               Documents can be uploaded if needed to clarify your request. This mailbox only accepts qualified proposal
//               requests for our services. All other inquiries should be directed to our{" "}
//               <Link href="/contact" className="text-blue-600 hover:underline">
//                 Contact Us
//               </Link>{" "}
//               page.
//             </p>
//           </div>

//           <form onSubmit={form.handleSubmit(processSubmit)} className="space-y-6">
//             <div className="border-t border-b py-4 my-6" id='details'>
//               <h3 className="text-center text-lg font-medium mb-4">Your details</h3>
//               <p className="text-sm mb-4">Fields marked with an asterisk (*) are required.</p>

//               <div className="space-y-4">
//                 <div>
//                   <Label htmlFor="title" className="text-sm">
//                     *Title
//                   </Label>
//                   <Controller
//                     name="title"
//                     control={form.control}
//                     render={({ field }) => (
//                       <Select onValueChange={field.onChange} value={field.value}>
//                         <SelectTrigger id="title" className={`w-full ${form.formState.errors.title ? "border-red-500" : ""}`}>
//                           <SelectValue placeholder="Select title" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="mr">Mr.</SelectItem>
//                           <SelectItem value="mrs">Mrs.</SelectItem>
//                           <SelectItem value="ms">Ms.</SelectItem>
//                           <SelectItem value="dr">Dr.</SelectItem>
//                           <SelectItem value="prof">Prof.</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     )}
//                   />
//                   {form.formState.errors.title && <p className="text-red-500 text-xs mt-1">{form.formState.errors.title.message}</p>}
//                 </div>

//                 <div>
//                   <Label htmlFor="firstName" className="text-sm">
//                     *First name
//                   </Label>
//                   <Input
//                     id="firstName"
//                     {...form.register("firstName")}
//                     className={form.formState.errors.firstName ? "border-red-500" : ""}
//                   />
//                   {form.formState.errors.firstName && <p className="text-red-500 text-xs mt-1">{form.formState.errors.firstName.message}</p>}
//                 </div>

//                 <div>
//                   <Label htmlFor="lastName" className="text-sm">
//                     *Last name
//                   </Label>
//                   <Input
//                     id="lastName"
//                     {...form.register("lastName")}
//                     className={form.formState.errors.lastName ? "border-red-500" : ""}
//                   />
//                   {form.formState.errors.lastName && <p className="text-red-500 text-xs mt-1">{form.formState.errors.lastName.message}</p>}
//                 </div>

//                 <div>
//                   <Label htmlFor="position" className="text-sm">
//                     Position/Job title
//                   </Label>
//                   <Input id="position" {...form.register("position")} />
//                    {form.formState.errors.position && <p className="text-red-500 text-xs mt-1">{form.formState.errors.position.message}</p>}
//                 </div>

//                 <div>
//                   <Label htmlFor="email" className="text-sm">
//                     *Email address
//                   </Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     {...form.register("email")}
//                     className={form.formState.errors.email ? "border-red-500" : ""}
//                   />
//                   {form.formState.errors.email && <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>}
//                 </div>

//                 <div>
//                   <Label htmlFor="phone" className="text-sm">
//                     Phone number
//                   </Label>
//                   <Input
//                     id="phone"
//                     type="tel"
//                     {...form.register("phone")}
//                     className={form.formState.errors.phone ? "border-red-500" : ""}
//                   />
//                   {form.formState.errors.phone && <p className="text-red-500 text-xs mt-1">{form.formState.errors.phone.message}</p>}
//                 </div>

//                 <div>
//                   <Label htmlFor="country" className="text-sm">
//                     *Country/location
//                   </Label>
//                   <Controller
//                     name="country"
//                     control={form.control}
//                     render={({ field }) => (
//                       <Select onValueChange={field.onChange} value={field.value}>
//                         <SelectTrigger id="country" className={`w-full ${form.formState.errors.country ? "border-red-500" : ""}`}>
//                           <SelectValue placeholder="Select your location" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="us">United States</SelectItem>
//                           <SelectItem value="ca">Canada</SelectItem>
//                           <SelectItem value="uk">United Kingdom</SelectItem>
//                           <SelectItem value="au">Australia</SelectItem>
//                           {/* Add more countries as needed */}
//                            <SelectItem value="sa">Saudi Arabia</SelectItem>
//                           <SelectItem value="ae">United Arab Emirates</SelectItem>
//                           <SelectItem value="other">Other</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     )}
//                   />
//                   {form.formState.errors.country && <p className="text-red-500 text-xs mt-1">{form.formState.errors.country.message}</p>}
//                 </div>
//               </div>
//             </div>

//             <div className="border-b py-4 mb-6" id='company'>
//               <h3 className="text-center text-lg font-medium mb-4">Company details</h3>
//               <div className="space-y-4">
//                 <div>
//                   <Label htmlFor="company" className="text-sm">
//                     Company/Organization name
//                   </Label>
//                   <Input id="company" {...form.register("company")} />
//                   {form.formState.errors.company && <p className="text-red-500 text-xs mt-1">{form.formState.errors.company.message}</p>}
//                 </div>

//                 <div>
//                   <Label htmlFor="industry" className="text-sm">
//                     *Industry
//                   </Label>
//                   <Controller
//                     name="industry"
//                     control={form.control}
//                     render={({ field }) => (
//                       <Select onValueChange={field.onChange} value={field.value}>
//                         <SelectTrigger id="industry" className={`w-full ${form.formState.errors.industry ? "border-red-500" : ""}`}>
//                           <SelectValue placeholder="Select industry" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="tech">Technology</SelectItem>
//                           <SelectItem value="finance">Finance</SelectItem>
//                           <SelectItem value="healthcare">Healthcare</SelectItem>
//                           <SelectItem value="education">Education</SelectItem>
//                           <SelectItem value="manufacturing">Manufacturing</SelectItem>
//                           <SelectItem value="retail">Retail</SelectItem>
//                           <SelectItem value="energy">Energy</SelectItem>
//                            <SelectItem value="consulting">Consulting</SelectItem>
//                           <SelectItem value="government">Government</SelectItem>
//                           <SelectItem value="other">Other</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     )}
//                   />
//                   {form.formState.errors.industry && <p className="text-red-500 text-xs mt-1">{form.formState.errors.industry.message}</p>}
//                 </div>

//                 <div>
//                   <Label htmlFor="revenue" className="text-sm">
//                     Yearly revenue
//                   </Label>
//                    <Controller
//                     name="revenue"
//                     control={form.control}
//                     render={({ field }) => (
//                       <Select onValueChange={field.onChange} value={field.value ?? ""}>
//                         <SelectTrigger id="revenue" className="w-full">
//                           <SelectValue placeholder="Select yearly revenue" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="less1m">Less than $1 million</SelectItem>
//                           <SelectItem value="1m-10m">$1 million - $10 million</SelectItem>
//                           <SelectItem value="10m-50m">$10 million - $50 million</SelectItem>
//                           <SelectItem value="50m-100m">$50 million - $100 million</SelectItem>
//                           <SelectItem value="more100m">More than $100 million</SelectItem>
//                           <SelectItem value="not_disclosed">Prefer not to disclose</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     )}
//                   />
//                   {form.formState.errors.revenue && <p className="text-red-500 text-xs mt-1">{form.formState.errors.revenue.message}</p>}
//                 </div>
//               </div>
//             </div>

//             <div className="py-4 mb-6" id='additional'>
//               <h3 className="text-center text-lg font-medium mb-4">Additional information</h3>
//               <div className="mb-4 text-sm">
//                 <p>Please note that the total size of your attachment(s) must not exceed {MAX_TOTAL_FILE_SIZE / (1024 * 1024)} MB.</p>
//                 <p>Appropriate attachment types are: {ALLOWED_FILE_EXTENSIONS.join(", ")}.</p>
//               </div>

//               <div className="space-y-4">
//                 {[0, 1, 2].map((index) => (
//                   <div key={index}>
//                     <Label htmlFor={`attachment-${index}`} className="text-sm">
//                       Attachment {index + 1}
//                     </Label>
//                     <div className="flex items-center mt-1 flex-wrap">
//                       <Button
//                         type="button"
//                         variant="outline"
//                         className="mr-2 h-9 text-xs mb-1 sm:mb-0"
//                         onClick={() => document.getElementById(`attachment-${index}`)?.click()}
//                       >
//                         Choose File
//                       </Button>
//                       <span className="text-sm text-gray-500 break-all">
//                         {files[index] ? files[index]?.name : "No file chosen"}
//                       </span>
//                       <Input
//                         id={`attachment-${index}`}
//                         type="file"
//                         className="hidden"
//                         onChange={(e) => handleFileChange(index, e)}
//                         accept={ALLOWED_FILE_EXTENSIONS.join(",")}
//                       />
//                     </div>
//                   </div>
//                 ))}

//                 <div>
//                   <Label htmlFor="comments" className="text-sm">
//                     *Comments and/or instructions
//                   </Label>
//                   <Textarea
//                     id="comments"
//                     {...form.register("comments")}
//                     className={`min-h-[120px] ${form.formState.errors.comments ? "border-red-500" : ""}`}
//                   />
//                   {form.formState.errors.comments && <p className="text-red-500 text-xs mt-1">{form.formState.errors.comments.message}</p>}
//                 </div>

//                 <div className="mt-4">
//                   <p className="text-sm mb-2">*Mandatory Field</p>
//                   <div className="flex items-start space-x-2">
//                     <Controller
//                         name="termsAccepted"
//                         control={form.control}
//                         render={({ field }) => (
//                            <Checkbox
//                             id="terms"
//                             checked={field.value}
//                             onCheckedChange={field.onChange}
//                             className={form.formState.errors.termsAccepted ? "border-red-500" : ""}
//                             />
//                         )}
//                     />
//                     <Label htmlFor="terms" className="text-sm font-normal">
//                       I have read and agree to the{" "}
//                       <Link href="/privacy" className="text-blue-600 hover:underline">
//                         Privacy Notice
//                       </Link>{" "}
//                       and{" "}
//                       <Link href="/terms" className="text-blue-600 hover:underline">
//                         Terms of Use
//                       </Link>
//                     </Label>
//                   </div>
//                   {form.formState.errors.termsAccepted && <p className="text-red-500 text-xs mt-1 ml-6">{form.formState.errors.termsAccepted.message}</p>}
//                 </div>

//                 <div className="mt-6">
//                   <Label className="text-sm block mb-2">*Verify you are human</Label>
//                   <HCaptcha
//                     sitekey='41b8bd2e-8c50-4e32-98d8-c5189bb4934c' // Use environment variable or fallback to test key
//                     onVerify={handleCaptchaVerify}
//                     onExpire={handleCaptchaExpire}
//                     ref={captchaRef}
//                   />
//                   {!captchaToken && form.formState.isSubmitted && ( // Show only after first submit attempt if not verified
//                     <p className="text-amber-600 text-xs mt-1">Please complete the captcha verification</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             <Button type="submit" className="bg-blue-700 hover:bg-blue-800 w-full sm:w-auto" disabled={isSubmitting}>
//               {isSubmitting ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Submitting...
//                 </>
//               ) : (
//                 "Submit"
//               )}
//             </Button>
//              <p className="text-xs text-gray-500 mt-2">
//               This site is protected by hCaptcha and its{" "}
//               <Link href="https://hcaptcha.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//                 Privacy Policy
//               </Link>{" "}
//               and{" "}
//               <Link href="https://hcaptcha.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
//                 Terms of Service
//               </Link>{" "}
//               apply.
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

import React from 'react'

const Cv = () => {
  return (
    <div>Cv</div>
  )
}

export default Cv