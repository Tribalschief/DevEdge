// // 'use client'
"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import type { StaticImageData } from "next/image"
// Import images directly


const Hello = () => {
    return<div>test</div>
}
export default Hello


// interface Feature {
//   icon: string
//   title: string
//   description: string
// }

// interface Slide {
//   id: string
//   title: string
//   subtitle: string | null
//   tagline: string | null
//   description: string | null
//   paragraph: string | null
//   features: Feature[]
//   image: StaticImageData // Use StaticImageData type
//   darkTheme?: boolean
// }

// const slides: Slide[] = [
//   {
//     id: "car-selling",
//     title: "CAR SELLING PLATFORM",
//     subtitle: null,
//     tagline: null,
//     description: null,
//     paragraph: null,
//     features: [
//       {
//         icon: "document",
//         title: "VEHICLE LISTINGS WITH RICH MEDIA & SPECS",
//         description:
//           "Display HD, with Multi Resolution, Images, graphical engine-derived and key features to entice. Merits",
//       },
//       {
//         icon: "search",
//         title: "SMART SEARCH & FILTERS",
//         description: "Predict: Effortlessly Bunch Matches with Filters Based on Value, Wanted Top Price",
//       },
//       {
//         icon: "calendar",
//         title: "DEALER & SELLER PORTALS",
//         description:
//           "Provide Social guarantees for Realtors and Provide Seller to Nitero's InSight Tool Institutes and Monitor Performance",
//       },
//       {
//         icon: "check",
//         title: "SECURE PAYMENTS & ESCROW SERVICES",
//         description: "Integrates/broker Financial Resources to Melt in Messaging System",
//       },
//       {
//         icon: "message",
//         title: "IN-APP MESSAGING & NEGOTIATION",
//         description:
//           "Selena and Elup intercommunication Engage Direct through Digital a Ret Through a Rush in Messaging",
//       },
//       {
//         icon: "chart",
//         title: "MARKET INSIGHTS & ANALYTICS",
//         description: "Generates Bittersweet Resums on Various Dosage Finding & Wear Preference % ew shapeout Decisions",
//       },
//     ],
//     image: carSelling, // Use imported variable
//     darkTheme: true,
//   },
//   {
//     id: "cybersecurity",
//     title: "CYBERSECURITY RISK",
//     subtitle: "MANAGEMENT PLATFORM",
//     tagline: null,
//     description: null,
//     paragraph: null,
//     features: [
//       {
//         icon: "shield-lock",
//         title: "CYBER RISK REGISTER & LIFECYCLE MANAGEMENT",
//         description:
//           "Central Module To Track Cyber Risks Across Domains With Risk Categorization, Ownership, Business Linkage, And Audit-Ready History.",
//       },
//       {
//         icon: "clipboard-check",
//         title: "RISK SCORING & IMPACT ANALYSIS ENGINE",
//         description:
//           "Automates Risk Scoring Using Internal/External Data, With Customizable Models Aligned To Frameworks Like NIST And ISO. Offers Visual Trends And Heatmaps For Informed Decisions.",
//       },
//       {
//         icon: "shield-alert",
//         title: "VULNERABILITY & THREAT MANAGEMENT",
//         description:
//           "Integrates With Scanners And Threat Feeds To Track Exposures, Map Them To Risks, And Support Remediation With Tickets, Evidence, And Audit-Ready Validation.",
//       },
//       {
//         icon: "file-search",
//         title: "COMPLIANCE & ISMS SUPPORT (ISO/ IEC 27001 & 31000 READY)",
//         description:
//           "Maps Controls To Standards, Tracks Gaps And Remediation, And Supports Audits With Real-Time Alerts And Evidence Management.",
//       },
//       {
//         icon: "git-merge",
//         title: "EXCEPTION MANAGEMENT & RISK ACCEPTANCE WORKFLOW",
//         description:
//           "Automates Exception Workflows With Approvals, Tracks Accepted Risks, And Enforces Risk Thresholds And Escalation Rules.",
//       },
//       {
//         icon: "bar-chart-3",
//         title: "REAL-TIME DASHBOARDS & ANALYTICS REPORTING",
//         description:
//           "Provides Dashboards With Risk Trends And Metrics, Supports Detailed, Exportable Reports, Scheduled Reporting, And Drill-Down Insights.",
//       },
//     ],
//     image: cyber, // Use imported variable
//   },
//   {
//     id: "hr-management",
//     title: "HUMAN RESOURCE MANAGEMENT",
//     subtitle: null,
//     tagline: null,
//     description: null,
//     paragraph: null,
//     features: [
//       {
//         icon: "handshake",
//         title: "STREAMLINED EMPLOYEE ONBOARDING AND DOCUMENTATION",
//         description:
//           "Simplify The Onboarding Experience By Automating Paperwork, Document Collection, And Employee Orientation.",
//       },
//       {
//         icon: "clock",
//         title: "EFFICIENT TIME TRACKING, ATTENDANCE, AND LEAVE MANAGEMENT",
//         description:
//           "Track Employee Hours, Manage Attendance, And Handle Leave Requests In A Single Interface. Real-Time Monitoring And Automated Approvals Improve Transparency And Reduce Manual Errors.",
//       },
//       {
//         icon: "file-check",
//         title: "AUTOMATED PAYROLL AND TAX COMPLIANCE",
//         description:
//           "Eliminate Manual Payroll Calculations With Automated Systems That Ensure Timely Salary Disbursements And Accurate Tax Deductions. Stay Compliant With The Latest Tax Regulations Effortlessly.",
//       },
//       {
//         icon: "chart-bar",
//         title: "PERFORMANCE REVIEWS AND CAREER DEVELOPMENT",
//         description:
//           "Monitor Employee Performance Through Structured Reviews And Set Clear Career Development Goals. Regular Feedback And Growth Planning Help Boost Engagement And Retention.",
//       },
//       {
//         icon: "file-user",
//         title: "INTEGRATED RECRUITMENT AND INTERNAL JOB POSTING",
//         description:
//           "Facilitate Internal Mobility And Recruitment Through Streamlined Job Posting And Application Workflows. Enhance Collaboration Between Hiring Teams And Ensure A Transparent Selection Process.",
//       },
//       {
//         icon: "bar-chart-4",
//         title: "HR ANALYTICS AND COMPLIANCE REPORTING",
//         description:
//           "Generate Detailed Reports On Workforce Metrics, Compliance Status, And HR Operations. Leverage Data-Driven Insights To Make Informed Strategic Decisions And Maintain Regulatory Standards.",
//       },
//     ],
//     image: hr, // Use imported variable
//   },
//   {
//     id: "vehicle-shipping",
//     title: "VEHICLE SHIPPING SERVICES",
//     subtitle: "IMPORT / EXPORT",
//     tagline: null,
//     description: null,
//     paragraph: null,
//     features: [
//       {
//         icon: "users",
//         title: "CUSTOMERS",
//         description:
//           "This Feature Enables You To Create A Structured And Categorized Customer Database For Efficient Management And Communication.",
//       },
//       {
//         icon: "user-check",
//         title: "AUCTION BUYER ID",
//         description:
//           "This Module Streamlines The Auction Buyer ID Allocation And Tracking, Fulfilling The Business Needs For Efficient Auction Management.",
//       },
//       {
//         icon: "car",
//         title: "VEHICLES",
//         description:
//           "This Feature Enables Full Control Over The Vehicle Lifecycle – From Manufacture To International Payment Processing And Delivery.",
//       },
//       {
//         icon: "truck",
//         title: "SHIPPING & CONTAINER MANAGEMENT",
//         description:
//           "This Feature Enhances Shipping Container Management Efficiency By Optimizing Vehicle Loading And Tracking.",
//       },
//       {
//         icon: "file-certificate",
//         title: "VEHICLE CLEARANCE CERTIFICATE (VCC)",
//         description:
//           "This Module Fulfills The Compliance And Import Certification Needs Of Vehicle Importers Through A Systematic Approach.",
//       },
//       {
//         icon: "users-round",
//         title: "CLIENTS",
//         description:
//           "This Feature Supports Accurate Client Data Filing, Management, And Tracking To Enhance Customer Relationships And Service Delivery.",
//       },
//     ],
//     image: vehicle, // Use imported variable
//   },
// ]

// // --- COMPONENT IMPLEMENTATION (Keep hooks and logic) ---
// export default function Test() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [autoplay, setAutoplay] = useState(true)
//   const [direction, setDirection] = useState<"left" | "right" | null>(null)

//   useEffect(() => {
//     if (!autoplay) return

//     const interval = setInterval(() => {
//       setDirection("right")
//       // Ensure slides array is not empty before accessing length
//       if (slides.length > 0) {
//         setCurrentSlide((prev) => (prev + 1) % slides.length)
//       }
//     }, 5000) // Slide duration 5 seconds

//     return () => clearInterval(interval)
//   }, [autoplay, slides.length]) // Add slides.length dependency

//   const nextSlide = () => {
//     setAutoplay(false)
//     setDirection("right")
//     if (slides.length > 0) {
//       setCurrentSlide((prev) => (prev + 1) % slides.length)
//     }
//   }

//   const prevSlide = () => {
//     setAutoplay(false)
//     setDirection("left")
//     if (slides.length > 0) {
//       setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
//     }
//   }

//   const goToSlide = (index: number) => {
//     setAutoplay(false)
//     setDirection(index > currentSlide ? "right" : "left")
//     setCurrentSlide(index)
//   }

//   // Check if slides data is available before rendering
//   if (!slides || slides.length === 0) {
//     return <div>Loading slides...</div> // Or some placeholder
//   }

//   // --- RETURN JSX (Structure mostly kept, ensure FeatureIcon is implemented) ---
//   return (
//     // Added min-h-[calc(100vh-80px)] assuming you might have a header/navbar
//     // Adjust if needed or revert to min-h-screen if it's full page
//     <div className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden bg-white">
//       {/* Changed h-full to min-h-full to allow content growth */}
//       <div className="relative w-full min-h-full overflow-hidden">
//         {slides.map((slide, index) => {
//           // Determine which animation to apply based on direction and current slide
//           let animationClass = ""
//           const prevIndex = (currentSlide - 1 + slides.length) % slides.length
//           const nextIndex = (currentSlide + 1) % slides.length

//           if (index === currentSlide) {
//             // Current slide coming IN
//             animationClass =
//               direction === "right"
//                 ? "animate-slide-in-from-right" // Renamed for clarity
//                 : direction === "left"
//                   ? "animate-slide-in-from-left" // Renamed for clarity
//                   : "opacity-100" // Initial state or no direction
//           } else if (direction === "right" && index === prevIndex) {
//             // Previous slide going OUT to the left
//             animationClass = "animate-slide-out-to-left" // Renamed for clarity
//           } else if (direction === "left" && index === nextIndex) {
//             // Next slide going OUT to the right
//             animationClass = "animate-slide-out-to-right" // Renamed for clarity
//           } else {
//             // All other slides are hidden
//             animationClass = "opacity-0 pointer-events-none"
//           }

//           return (
//             <div
//               key={slide.id}
//               className={cn(
//                 "absolute inset-0 w-full transition-opacity duration-500 ease-in-out", // Added base transition
//                 index === currentSlide ? "z-10" : "z-0", // Keep z-index logic
//                 animationClass, // Apply calculated animation class
//                 slide.darkTheme ? "bg-[#050314] text-white" : "bg-white text-black",
//               )}
//               style={{
//                 // Ensure non-active slides don't interfere if opacity isn't enough
//                 visibility: index === currentSlide ? "visible" : "hidden",
//               }}
//             >
//               {/* Use min-h-full here too to ensure it takes space */}
//               <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 min-h-full relative">
//                 {" "}
//                 {/* Removed bg-gray-100, handled by parent */}
//                 {/* Decorations - kept */}
//                 {!slide.darkTheme && (
//                   <>
//                     <div className="absolute left-0 top-1/4 bottom-0 w-32 md:w-48 opacity-70 z-0">
//                       <div className="absolute inset-0 bg-purple-300 opacity-20 rounded-full blur-3xl transform -translate-x-1/2"></div>
//                     </div>
//                     <div className="absolute right-0 top-1/4 bottom-0 w-32 md:w-48 opacity-70 z-0">
//                       <div className="absolute inset-0 bg-purple-300 opacity-20 rounded-full blur-3xl transform translate-x-1/2"></div>
//                     </div>
//                   </>
//                 )}
//                 {/* Main content */}
//                 <div className="relative z-10">
//                   {/* Special dark theme rendering */}
//                   {slide.darkTheme ? (
//                     <div className="w-full lg:w-3/4 xl:w-2/3 relative mx-auto py-10">
//                       {" "}
//                       {/* Adjusted width and padding */}
//                       {/* Image Background */}
//                       <div className="absolute inset-0 opacity-10 z-0">
//                         {" "}
//                         {/* Reduced opacity, kept behind text */}
//                         <div className="w-full h-full relative">
//                           <Image
//                             src={slide.image || "/placeholder.svg"} // Use imported image
//                             alt="Car silhouette background"
//                             fill
//                             className="object-contain" // Contain might be better here
//                             priority={index === 0} // Prioritize first image
//                           />
//                         </div>
//                       </div>
//                       {/* Content foreground */}
//                       <div className="relative z-10">
//                         {/* Logo and Title */}
//                         <div className="flex items-center gap-3 mb-8">
//                           <div className="w-10 h-10">
//                             {" "}
//                             {/* Logo SVG */}
//                             <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                               <path
//                                 d="M12 2L2 7L12 12L22 7L12 2Z"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               />
//                               <path
//                                 d="M2 17L12 22L22 17"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               />
//                               <path
//                                 d="M2 12L12 17L22 12"
//                                 stroke="currentColor"
//                                 strokeWidth="2"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                               />
//                             </svg>
//                           </div>
//                           {/* Using slide.title instead of hardcoding */}
//                           <h2 className="text-xl sm:text-2xl font-bold text-gray-200">{slide.title}</h2>
//                         </div>

//                         {/* Features Grid */}
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//                           {slide.features.map((feature, featureIndex) => (
//                             <div
//                               key={featureIndex}
//                               className="bg-[#0e0628]/70 p-4 rounded-lg border border-gray-700/50 backdrop-blur-sm"
//                             >
//                               <div className="flex items-start gap-3 mb-2">
//                                 <div className="bg-[#1a0d4a]/60 p-2 rounded-md flex-shrink-0">
//                                   {" "}
//                                   {/* Adjusted background and padding */}
//                                   {/* Using FeatureIcon component for consistency */}
//                                   <FeatureIcon type={feature.icon} className="w-5 h-5 text-purple-300" />
//                                 </div>
//                                 <h3 className="text-sm font-semibold mt-1">{feature.title}</h3>
//                               </div>
//                               <p className="text-xs text-gray-400 pl-10">{feature.description}</p>
//                             </div>
//                           ))}
//                         </div>

//                         {/* Many More Button */}
//                         <div className="flex justify-end mt-6">
//                           <button className="text-gray-300 hover:text-white flex items-center gap-1 text-sm font-medium">
//                             Many More
//                             <ChevronRight className="h-4 w-4" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     // Standard rendering for other slides
//                     <>
//                       {/* Header */}
//                       <div className="text-center mb-8 md:mb-12">
//                         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
//                           {slide.title}
//                         </h1>
//                         {slide.subtitle && (
//                           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-700 mt-1">
//                             {slide.subtitle}
//                           </h2>
//                         )}
//                       </div>

//                       {/* Removed tagline section for simplicity - add back if needed */}

//                       {/* Features grid */}
//                       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
//                         {slide.features.map((feature, featureIndex) => (
//                           <div key={featureIndex} className="flex flex-col items-center text-center">
//                             <div className="w-16 h-16 mb-4 flex items-center justify-center bg-purple-100 rounded-full">
//                               {/* Use FeatureIcon for light theme too */}
//                               <FeatureIcon type={feature.icon} className="w-8 h-8 text-purple-700" />
//                             </div>
//                             <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
//                             <p className="text-sm text-gray-600">{feature.description}</p>
//                           </div>
//                         ))}
//                       </div>

//                       {/* Bottom image section */}
//                       <div className="relative h-48 sm:h-64 md:h-80 mt-8 md:mt-12">
//                         <Image
//                           src={slide.image || "/placeholder.svg"} // Use imported image
//                           alt={slide.title}
//                           fill
//                           className="object-contain" // Use contain to show whole image
//                           priority={index === 0} // Prioritize first image
//                         />

//                         {/* Many More button stylized */}
//                         <div className="absolute bottom-4 right-4">
//                           <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md flex items-center gap-2 shadow-md text-sm">
//                             Many More <Plus className="w-4 h-4" />
//                           </button>
//                         </div>
//                       </div>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )
//         })}
//       </div>

//       {/* Navigation buttons */}
//       {slides.length > 1 && (
//         <>
//           <button
//             onClick={prevSlide}
//             className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-lg z-20 backdrop-blur-sm transition"
//             aria-label="Previous slide"
//           >
//             <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
//           </button>

//           <button
//             onClick={nextSlide}
//             className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-lg z-20 backdrop-blur-sm transition"
//             aria-label="Next slide"
//           >
//             <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
//           </button>

//           {/* Dots navigation */}
//           <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
//             {slides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={cn(
//                   "w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out", // Smoother transition
//                   currentSlide === index ? "bg-purple-700 scale-125" : "bg-gray-300 hover:bg-gray-400", // Highlight current
//                 )}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   )
// }

// // --- FeatureIcon Component (Replace with actual icons from lucide-react) ---
// // Using lucide-react icons is highly recommended for consistency and quality.
// // Install: npm install lucide-react OR yarn add lucide-react
// import {
//   FileText,
//   Search,
//   CalendarDays,
//   CheckSquare,
//   MessageSquare,
//   TrendingUp,
//   ShieldCheck,
//   ClipboardList,
//   ShieldAlert,
//   FileSearch2,
//   GitMerge,
//   BarChart3,
//   Handshake,
//   Clock,
//   FileCheck,
//   BarChartHorizontal,
//   FileIcon as FileUser,
//   BarChartBig,
//   Users,
//   UserCheck,
//   Car,
//   Truck,
//   FileBadge,
//   UsersRound,
//   type LucideIcon,
//   HelpCircle,
// } from "lucide-react"

// // Map string identifiers to actual Lucide icon components
// const iconMap: { [key: string]: typeof LucideIcon } = {
//   document: FileText,
//   search: Search,
//   calendar: CalendarDays,
//   check: CheckSquare,
//   message: MessageSquare,
//   chart: TrendingUp,
//   "shield-lock": ShieldCheck, // More appropriate icon
//   "clipboard-check": ClipboardList,
//   "shield-alert": ShieldAlert,
//   "file-search": FileSearch2,
//   "git-merge": GitMerge,
//   "bar-chart-3": BarChart3,
//   handshake: Handshake,
//   clock: Clock,
//   "file-check": FileCheck,
//   "chart-bar": BarChartHorizontal, // Or BarChartBig
//   "file-user": FileUser,
//   "bar-chart-4": BarChartBig,
//   users: Users,
//   "user-check": UserCheck,
//   car: Car,
//   truck: Truck,
//   "file-certificate": FileBadge,
//   "users-round": UsersRound,
//   // Add any other icons used
// }

// type IconNode = [SVGElement, Record<string, string>]

// function FeatureIcon({ type, className }: { type: string; className?: string }) {
//   const IconComponent = iconMap[type] || HelpCircle // Use mapped icon or fallback

//   return <IconComponent className={cn("w-6 h-6", className)} strokeWidth={1.5} />
// }




// import { getServiceForHome } from "@/sanity/lib/getoverview"


// // import { motion } from 'framer-motion'
// // import Image from 'next/image'
// // import { useState } from 'react'
// // import { useInView } from 'react-intersection-observer'
// // import core01 from "@/public/core/core01.png"
// // import core02 from "@/public/core/core02.png"
// // import core03 from "@/public/core/core03.png"
// // import core04 from "@/public/core/core04.png"
// // import core05 from "@/public/core/core05.png"
// // import core06 from "@/public/core/core06.png"
// // const fadeInUp = {
// //   hidden: { opacity: 0, y: 40 },
// //   visible: (i: number) => ({
// //     opacity: 1,
// //     y: 0,
// //     transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
// //   }),
// // }

// // export default function Try(){
// //   return (
// //     <main className="min-h-screen p-4 md:p-8">


// //     <section>
// //       Test
// //     </section>
// //   </main>
// //   )
// // }

// // 'use client'

// // import { useState } from 'react'
// // import { motion, AnimatePresence } from 'framer-motion'
// import { Overview } from '../../../components/details/overview';

// const faqs = [
//   {
//     question: 'How can DevEdge help protect my business from cyber threats?',
//     answer:
//       `We offer end-to-end cybersecurity solutions from risk assessments and penetration testing to cloud security, incident response, and digital forensics. Whether you're concerned about ransomware, phishing, or insider threats, our team helps you build a secure and resilient digital environment.`,
//   },
//   {
//     question: 'What makes your cybersecurity approach unique?',
//     answer:
//       `We combine technical depth (OSCP, CISSP-certified professionals) with business-aligned strategies, ensuring protection that fits your industry, risk profile, and compliance needs not just generic IT fixes.`,
//   },
//   {
//     question: 'Does DevEdge provide secondment or outsourced professional resources?',
//     answer:
//       `Yes, DevEdge offers secondment services by providing skilled professionals who can work on-site or remotely as an extension of your internal team. Whether you need support in internal audit, cybersecurity, IT, finance, HR, or compliance, our certified experts can fill temporary gaps, support special projects, or help scale your team during critical periods all while maintaining full alignment with your business goals and standards`,
//   },
//   {
//     question: 'Can DevEdge set up or improve my internal audit function?',
//     answer:
//       `Absolutely. We help businesses set up, transform, or co-source internal audit departments, design risk-based audit plans, and implement digital audit tools aligning with IIA standards and local regulations.`,
//   },
//   {
//     question: 'What makes your cybersecurity approach unique?',
//     answer:
//       `We combine technical depth (OSCP, CISSP-certified professionals) with business-aligned strategies, ensuring protection that fits your industry, risk profile, and compliance needs not just generic IT fixes.`,
//   },{
//     question: 'Do you provide support with regulatory compliance and risk controls?',
//     answer:
//       `Yes. Our GRC experts help you design frameworks, assess third-party risks, implement IT controls, and meet compliance requirements for standards like ISO, NCA, and local data protection laws (PDPL, DIFC, etc.).`,
//   },{
//     question: 'What is your approach to multi-cloud solutions?',
//     answer:
//       `We design, implement, and manage multi-cloud environments using AWS, Azure, Google Cloud, or hybrid models. Our focus is on cost optimization, security, and business continuity, ensuring your cloud infrastructure aligns with your goals.`,
//   },{
//     question: 'Can you help migrate my legacy systems to the cloud?',
//     answer:
//       `Yes. From assessment to execution, we provide seamless migration services, hybrid cloud integration, and performance optimization with minimal downtime and full compliance assurance.`,
//   },{
//     question: 'What support does DevEdge offer in HR and people strategy?',
//     answer:
//       `DevEdge provides comprehensive support in workforce planning, organizational design, talent risk assessments, and leadership development helping you align your human capital strategy with your business goals.
// We also offer a customized HR management solution that includes modules for onboarding, payroll, performance management, employee engagement, and compliance tailored to fit your organization’s specific needs and structure.
// `,
//   },
// ]


// export default function ABC() {
//   // const [openIndex, setOpenIndex] = useState<number | null>(0)

//   // const toggle = (index: number) =>
//   //   setOpenIndex(openIndex === index ? null : index)

//   return (
//     // <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//     //   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
//     //     <span className="text-black">Frequently Ask </span>
//     //     <span className="text-purple-600 block">Questions</span>
//     //   </h2>

//     //   <div className="space-y-5">
//     //     {faqs.map((faq, i) => {
//     //       const isOpen = openIndex === i
//     //       return (
//     //         <motion.div
//     //           key={i}
//     //           layout
//     //           initial={{ borderRadius: 12 }}
//     //           className="bg-white shadow-sm rounded-md border overflow-hidden"
//     //         >
//     //           <div className="flex justify-between items-start sm:items-center">
//     //             <div className="p-4 pr-2 w-full">
//     //               <p className="font-semibold text-base sm:text-lg">
//     //                 {String(i + 1).padStart(2, '0')} {faq.question}
//     //               </p>

//     //               <AnimatePresence>
//     //                 {isOpen && (
//     //                   <motion.div
//     //                     initial={{ opacity: 0, height: 0 }}
//     //                     animate={{ opacity: 1, height: 'auto' }}
//     //                     exit={{ opacity: 0, height: 0 }}
//     //                     transition={{ duration: 0.3 }}
//     //                     className="overflow-hidden mt-2 text-gray-600 text-sm sm:text-base"
//     //                   >
//     //                     {faq.answer}
//     //                   </motion.div>
//     //                 )}
//     //               </AnimatePresence>
//     //             </div>

//     //             {/* Toggle Button */}
//     //             <motion.button
//     //               onClick={() => toggle(i)}
//     //               animate={{
//     //                 rotate: isOpen ? 180 : 0,
//     //               }}
//     //               transition={{ type: 'spring', stiffness: 300 }}
//     //               className={`w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl transition-colors duration-300 ${
//     //                 isOpen
//     //                   ? 'bg-purple-700 text-white'
//     //                   : 'bg-gray-300 text-black'
//     //               }`}
//     //             >
//     //               {isOpen ? '−' : '+'}
//     //             </motion.button>
//     //           </div>
//     //         </motion.div>
//     //       )
//     //     })}
//     //   </div>
//     // </div>
//     <div>
//       Heloo
//     </div>
//   )
// }

//  const Test = async () => {
//   const data = await getServiceForHome()
//   function truncateText(text: string, maxLength: number) {
//     if (text.length <= maxLength) return text;
//     return text.slice(0, maxLength) + '...';
//   }
  
  
//   return (
//     <div className="min-h-screen p-4 md:p-8 mt-10 " >
//       {data.map((item, index) => (
//         <div key={index} className="flex flex-col items-center justify-center text-red-100" >
//           <h1>{item.title}</h1>
//           <p>{truncateText(item.overview, 50)}</p>
//           <p>{item.slug}</p>
//           <img src={item.icon.asset.url} />
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Test






 // Update path if needed


// Replace with your background path
 

 
// export default function ConsultingBenefits() {
//   return (
//     <main className="mt-20 sm:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-20">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left Section */}
//         <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col justify-center w-full">
//           <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
//             <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full flex-shrink-0">
//               {/* Icon */}
//               <svg
//                 className="w-7 h-7 text-white"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v4H3V4z" />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M21 10H3v10a1 1 0 001 1h16a1 1 0 001-1V10z"
//                 />
//               </svg>
//             </div>
//             <div className="w-full">
//               <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug">
//                 A Culture of Curiosity, Integrity & Impact
//               </h2>
//               <hr className="border-t-2 border-gray-200 my-4 w-full" />
//               <p className="text-gray-600 text-base leading-relaxed">
//                 At DevEdge Consulting, we don’t just hire talent — we invest in it. 
//                 Join a team where innovation meets impact, where you're empowered 
//                 to lead, learn, and leave a mark.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex flex-col gap-8 w-full">
//           {/* Box 1 */}
//           <div className="bg-white rounded-2xl p-8 shadow-md w-full">
//             <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
//               <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full flex-shrink-0">
//                 {/* Icon */}
//                 <svg
//                   className="w-7 h-7 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v4H3V4z" />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M21 10H3v10a1 1 0 001 1h16a1 1 0 001-1V10z"
//                   />
//                 </svg>
//               </div>
//               <div className="w-full">
//                 <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug">
//                   Diverse Industry Exposure
//                 </h3>
//                 <hr className="border-t-2 border-gray-200 my-4 w-full" />
//                 <p className="text-gray-600 text-base leading-relaxed">
//                   Consultants work with clients across various industries, gaining broad 
//                   knowledge, experience, and problem-solving skills that accelerate career growth.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Box 2 */}
//           <div className="bg-white rounded-2xl p-8 shadow-md w-full">
//             <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
//               <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full flex-shrink-0">
//                 {/* Icon */}
//                 <svg
//                   className="w-7 h-7 text-white"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v4H3V4z" />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M21 10H3v10a1 1 0 001 1h16a1 1 0 001-1V10z"
//                   />
//                 </svg>
//               </div>
//               <div className="w-full">
//                 <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug">
//                   High Earning Potential
//                 </h3>
//                 <hr className="border-t-2 border-gray-200 my-4 w-full" />
//                 <p className="text-gray-600 text-base leading-relaxed">
//                   Consulting roles often offer competitive salaries, performance-based 
//                   bonuses, and opportunities for rapid financial growth.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// components/ServicesList.tsx

// components/ServicesList.tsx
// import {
//   Building2,
//   LandmarkIcon,
//   Store,
//   Wallet,
//   Heart,
//   Ship,
//   Zap,
//   ShoppingCart,
//   Factory,
//   GraduationCap,
//   Cpu,
//   Radio,
//   Hammer,
//   UtensilsCrossed,
// } from "lucide-react"

// const services = [
//   "Internal Audit",
//   "Cybersecurity Services",
//   "Multi-Cloud Services",
//   "Intelligent Enterprise Systems & Application Development Services",
//   "Analytics And Artificial Intelligence Services",
//   "Digital Transformation & Business Automation",
//   "Business Continuity Management (BCM) Services",
//   "Technology Consulting And GRC (Governance, Risk & Compliance)",
//   "Precision Data Management & Privacy Services",
//   "Integrated Accounting & Financial Advisory Services",
//   "Risk Management & Human Capital Advisory",
//   "Industrial Control Systems (ICS) & OT Security Services",
//   "Fixed Asset Management",
// ];

// interface IndustryCardProps {
//   title: string
//   icon: React.ReactNode
//   color: string
//   description: string
//   colorTop?: string
//   colorBottom?: string
//   number: number
// }

// const industries = [
//     { description:"Lorem ipsum", title: "Banking", icon: <Building2 size={18} />, color: "#FF3366" },
//     { description:"Lorem ipsum", title: "Government & Public Services", icon: <LandmarkIcon size={18} />, color: "#FF9933" },
//     { description:"Lorem ipsum", title: "Retail and Real Estate", icon: <Store size={18} />, color: "#FFCC33" },
//     { description:"Lorem ipsum", title: "Financial Services", icon: <Wallet size={18} />, color: "#66CC66" },
//     { description:"Lorem ipsum", title: "Health Care", icon: <Heart size={18} />, color: "#9933CC" },
//     { description:"Lorem ipsum", title: "Shipping and Logistics", icon: <Ship size={18} />, color: "#666699" },
//     { description:"Lorem ipsum", title: "Energy", icon: <Zap size={18} />, color: "#3399FF" },
//     { description:"Lorem ipsum", title: "Consumer", icon: <ShoppingCart size={18} />, color: "#33CCCC" },
//     { description:"Lorem ipsum", title: "Power and Industrial Control System", icon: <Factory size={18} />, color: "#CC3333" },
//     { description:"Lorem ipsum",title: "Education", icon: <GraduationCap size={18} />, color: "#999999" },
//     { description:"Lorem ipsum",title: "Technology", icon: <Cpu size={18} />, color: "#6666CC" },
//     { description:"Lorem ipsum", title: "Media & Telecommunications", icon: <Radio size={18} />, color: "#CC66CC" },
//     { description:"Lorem ipsum",title: "Manufacturing", icon: <Hammer size={18} />, color: "#99CC33" },
//     { description:"Lorem ipsum",title: "Hospitality", icon: <UtensilsCrossed size={18} />, color: "#CCCCCC" },
//   ]

//   const IndustryCard = ({ title, icon, number, description }: IndustryCardProps) => {
//     return (
//       <div className="relative p-[2px] rounded-lg bg-[linear-gradient(180deg,#6A0DAD,#00E0FF)] w-full max-w-xs ">
//   {/* Floating Icon - moved outside the inner card but still centered */}
//   <div className="absolute z-10 -top-8 left-1/2 transform -translate-x-1/2">
//     <div className="bg-white p-4 rounded-full border-2 shadow-md" style={{ borderColor: "linear-gradient(90deg,#6A0DAD,#00E0FF)" }}>
//       {icon}
//     </div>
//   </div>
  
//   {/* Inner white card */}
//   <div className="bg-white rounded-lg pt-10 pb-6 px-6 text-center relative overflow-hidden">
//     {/* Number at top-right */}
//     <span className="absolute top-1 left-2 text-2xl font-bold text-gray-700">
//       {number}
//     </span>

//     {/* Title */}
//     <h3 className="text-sm font-bold text-purple-700 uppercase mb-2 leading-tight">
//       {title}
//     </h3>

//     {/* Description */}
//     <p className="text-gray-600 text-xs leading-relaxed">
//       {description}
//     </p>
//   </div>
// </div>
//     );
//   };
  
  
// const AnyGrid = () =>{
//   return (<div className="px-4 md:py-12 max-w-7xl mx-4 sm:mx-6 md:mx-10 lg:mx-48">
//     <div className="flex  flex-wrap justify-center gap-6">
//   {industries.map((industry, index) => (
//     <div 
//       key={index} 
//       className="w-full sm:w-[calc(50%-12px)] mt-4 lg:w-[calc(25%-18px)]"
//     >
//       <IndustryCard
//         title={industry.title}
//         icon={industry.icon}
//         color={industry.color}
//         number={index + 1}
//         description={industry.description}
//       />
//     </div>
//   ))}
// </div>
// </div>)
// }
  
//  function NewServicesList() {
//   return (

//     <div className="relative flex flex-col items-center mt-16 sm:mt-24 md:mt-32 px-4 sm:px-6 lg:px-8 justify-center">
//       {/* Heading */}
//       <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center tracking-widest text-purple-700">
//         OUR SERVICES
//       </h2>

//       {/* Content Box */}
//       <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-black rounded-lg p-4 sm:p-6 md:p-8 border-4 border-b-[10px] border-black shadow-2xl">
//         {/* Gradient Strip */}
//         <div className="absolute left-0 top-0 h-full w-3 sm:w-4 md:w-6 bg-gradient-to-b from-purple-500 to-blue-500" />
        
//         <div className="space-y-2 sm:space-y-3 md:space-y-4 ml-4 sm:ml-6">
//           {services.map((service, index) => (
//             <div key={index} className="flex items-start space-x-2 sm:space-x-3">
//               <span className="font-bold min-w-[20px]">{index + 1}.</span>
//               <p className="text-xs sm:text-sm md:text-base">{service}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>

//   );
// }

// function Overview({ overview = "No overview available." }: { overview?: string }) {
//   return (
//     <div
      
//       className="w-auto h-full mt-[50px] mx-4 sm:mx-6 md:mx-10 lg:mx-48 rounded-lg"
//     >
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center lg:text-left">Overview</h2>
//       <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground text-center lg:text-left">
//         {overview}
//       </p>
//     </div>
//   )
// }

// export default function AllGrid(){
//   return (
//     <div className="relative w-full mx-auto   py-12 md:py-24">
//       {/* Main content container */}
//       <div className="flex flex-col lg:flex-row l gap-8">
//         {/* Left column with Overview and AnyGrid */}
//         <div className="flex flex-col lg:w-2/3">
//           <Overview overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat." />
          
//           <div className="mx-auto mt-8">
//             <AnyGrid />
//           </div>
//         </div>
        
//         {/* Right column with ServicesList */}
//         <div className="lg:w-1/3">
//           <NewServicesList />
//         </div>
//       </div>
//     </div>
//   )
// }
 




