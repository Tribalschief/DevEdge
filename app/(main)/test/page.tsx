// // // // 'use client'
// "use client"
// // import { useEffect, useState } from "react"
// // import Image from "next/image"
// // import InternalAudit from "@/public/IA.png"
// // import { ArrowRight, ChevronLeft, ChevronRight, Plus } from "lucide-react"
// // import Logo from "@/public/logoremovebg.png"
// // import { cn } from "@/lib/utils"
// // import type { StaticImageData } from "next/image"

// import Image from "next/image";
// import {motion, useScroll, useTransform} from "framer-motion";
// import { useRef } from "react";
// // // Import images directly

// // // const Features = () => {
// // //     const features = [
// // //       {
// // //         title: "Internal Audit",
// // //         backgroundImage: InternalAudit,
// // //         points : [
// // //             { id: "01", text: "Over 30 years of global consulting and internal audit expertise with deep Middle East market understanding." },
// // //             { id: "02", text: "Trusted advisors to leading corporates, government entities, and family businesses across the region." },
// // //             { id: "03", text: "Internal audit professionals certified in CIA (Certified Internal Auditor), CFE (Certified Fraud Examiner), CRMA (Certification in Risk Management Assurance), and other globally recognized credentials." },
// // //             { id: "04", text: "Expertise in setting up, transforming, and digitally enabling internal audit functions from the ground up." },
// // //             { id: "05", text: "Industry-specific knowledge including financial services, real estate, energy, healthcare, and public sector." },
// // //             { id: "06", text: "Practical, risk-based audit planning aligned with your business objectives and regulatory requirements." },
// // //             { id: "07", text: "Strong experience in regulatory compliance audits and working closely with local audit bureaus." },
// // //             { id: "08", text: "Proven capability in forensic audits, fraud risk assessments, and special investigations." },
// // //             { id: "09", text: "Advanced use of data analytics and continuous auditing tools for deeper, faster insights." },
// // //             { id: "10", text: "Clear, executive-friendly reporting that transforms findings into actionable decisions." },
// // //             { id: "11", text: "Direct board, CEO, and audit committee advisory support to strengthen governance at the top level." },
// // //             { id: "12", text: "Ongoing post-audit support, remediation tracking, and follow-up assessments to ensure improvements are embedded." },
// // //             { id: "13", text: "A results-driven approach focused on strengthening controls, improving efficiency, and enabling sustainable growth." },
// // //           ]
// // //         }
// // //     ];

// // //     return (
// // //       <main className="min-h-screen mt-16 sm:mt-24 relative overflow-x-hidden container h-full mx-auto p-4 md:p-6">
// // //         {features.map((feature, index) => (
// // //           <div key={index} className="relative  flex flex-col items-center  justify-center mb-12 sm:mb-16">
// // //             {/* Pink curved shape */}
// // //            {/* Visible on screens smaller than lg */}
// // // <div className="w-[900px] h-[450px] lg:hidden absolute z-30 flex -top-[248px] 2xs:-top-[248px] xs:-top-[274px] sm:-top-[238px] md:-top-[262px] rounded-b-full res:xl:rounded-br-full bg-[#6208ac] opacity-10" />

// // // {/* Visible only on lg and up */}
// // // <div className="w-[900px] h-[450px] hidden lg:flex absolute z-30 -top-[260px] lg:-left-[340px] rounded-br-full res:xl:rounded-br-full bg-[#6208ac] opacity-10" />
// // // {/* Title */}
// // //             <h1 className="text-center text-xl sm:text-2xl mt-2 sm:mt-6 lg:mt-10 font-bold z-30 mb-2 sm:mb-6 md:mb-8 px-2">
// // //                WHY CHOOSE DEVEDGE CONSULTING FOR {feature.title.toUpperCase()} 
// // //             </h1>
            
// // //             {/* Logo */}
// // //             <div className="absolute top-[calc(8%-50px)] sm:top-[calc(5%-20px)] md:top-[calc(6%-80px)] left-[calc(50%-50px)] z-40 
// // //                             scale-[0.5] sm:scale-75 md:scale-90 lg:scale-100 
// // //                             origin-top-left 
// // //                             lg:top-0 lg:left-0">
// // //               <Image src={Logo} alt="DevEdge Logo" width={160} height={160} />
// // //             </div>

// // //             {/* Layout container for Image section and Points section */}
// // //             {/* Stacks vertically on mobile, row on lg+. Columns will stretch to equal height on lg. */}
// // //             <div className="w-full flex flex-col lg:flex-row lg:gap-8">

// // //               {/* --- Left Column (Image as background and "WHY CHOOSE US" text) --- */}
// // //               <div className="w-full lg:w-[50%]  xl:w-[45%] relative mb-10 lg:mb-0 z-20 
// // //                               min-h-[380px] xs:min-h-[420px] sm:min-h-[500px] md:min-h-[520px] lg:min-h-0">
                
// // //                 {/* Background Image - Fills this entire left column div */}
// // //                 <div className="absolute inset-0 z-0 opacity-70 lg:top-[50px] top-[100px] lg:-left-10">
// // //   {/*
// // //     This div is the main "viewport" for the image.
// // //     - It gets shifted down (`top-[50px]`).
// // //     - It defines the actual visible height (`h-full`).
// // //     - It has `overflow-hidden` to perform the crop.
// // //     - It has the rounded corners because it's the edge that's visible.
// // //   */}
// // //   <div
// // //     className="relative w-full h-full top-[50px]
// // //                overflow-hidden
// // //                rounded-tr-[50px] sm:rounded-t-[100px]"
// // //   >
// // //     {/*
// // //       This inner div is what the Next.js Image with layout="fill" will refer to.
// // //       - It's positioned absolutely within the parent viewport.
// // //       - `bottom-[-50px]` crops 50px from the bottom
// // //     */}
// // //     {/* 👇 Visible on md and smaller (mobile/tablet) */}
// // // <div className="absolute inset-0 bottom-[-50px] block lg:hidden">
// // //   <Image
// // //     src={feature.backgroundImage || "/placeholder-image.jpg"}
// // //     alt={feature.title}
// // //     layout="fill"
    
// // //     className="w-full h-full"
// // //   />
// // // </div>

// // // {/* 👇 Visible on lg and up (desktop) */}
// // // <div className="absolute inset-0 bottom-[-50px] hidden lg:block">
// // //   <Image
// // //     src={feature.backgroundImage || "/placeholder-image.jpg"}
// // //     alt={feature.title}
// // //     layout="fill"
   
// // //     className="w-full h-full"
// // //   />
// // // </div>

// // //   </div>

// // //   {/* Darker overlay - WIDENED MORE */}
// // //   <div
// // //     className="absolute -left-[15%] -right-[15%] z-10
// // //                top-0 md:top-0 lg:top-[36px]
// // //                bottom-[-50px]
// // //                lg:rounded-tr-[650px] bg-[#310455] opacity-60"
// // //   >
    
// // //   </div>
  
  
// // // </div>

// // //                 {/* "WHY CHOOSE US" Text Block - Overlaying the image */}
// // //                 {/* Uses flex to push content to the bottom (justify-end) */}
// // //                 <div className="relative z-10 flex flex-col justify-start  h-full 
// // //                                 p-4 xs:p-5 sm:p-6 md:p-8
// // //                                 text-white lg:mt-10"> {/* Text color to white for contrast */}
                  
// // //                   <div className="relative "> {/* Container for text and its arrow */}
// // //                     <ArrowRight className="absolute 
// // //              top-[calc(60%-50px)] lg:top-28
// // //              left-1/2 lg:left-8 
// // //              -translate-x-1/2 lg:translate-x-0 
// // //              -translate-y-1/2 
// // //              text-black 
// // //              w-8  h-8 xs:w-8 xs:h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />

// // // <div className="mt-48 mx-auto text-center pl-0 xs:pl-0 sm:pl-0 md:pl-0 lg:pl-[32px] lg:text-left">
// // //   <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider">
// // //     <span className="font-extrabold text-[52px] xs:text-[60px] sm:text-[72px] md:text-[96px] lg:text-[100px] text-[#6208ac]">
// // //       WHY
// // //     </span>
// // //     <br />
// // //     <span className="block mt-0 sm:mt-1 text-[20px] xs:text-[24px] sm:text-[28px] text-black md:text-[38px] lg:text-[50px]">
// // //       CHOOSE US
// // //     </span>
// // //   </h1>

// // //   <h2 className="mt-2 sm:mt-3 text-[10px] xs:text-[11px] sm:text-xs md:text-sm lg:text-base text-black tracking-wider leading-snug">
// // //     Take Your Business To The Next Level With Our Digital Transformation Solutions And 
// // //     Start Your Transformation Journey With Solutions Made For Real-World Results
// // //   </h2>
// // // </div>

// // //                   </div>
// // //                 </div>
// // //               </div>
              
// // //               {/* --- Right Column (Points List) --- */}
// // //               <div className="w-full lg:w-[55%] xl:w-[60%] relative right-0 lg:right-[100px]  z-40 px-1 sm:px-2">
// // //                 {feature.points.map((point) => (
// // //                   <div key={point.id} className=" flex gap-2 sm:gap-3 mt-10 lg:mt-0 items-start p-2 sm:p-3 mb-2 sm:mb-3  ">
// // //                     <div className="text-sm sm:text-base md:text-lg font-bold  min-w-[35px] sm:min-w-[30px] md:min-w-[35px] pt-0.5 text-center">{point.id}</div>
// // //                     <div className=" font-bold text-[11px] xs:text-xs sm:text-sm md:text-base text-gray-800">{point.text}</div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </main>
// // //     )
// // //   }

// // // export default Features;

// // // interface Feature {
// // //   icon: string
// // //   title: string
// // //   description: string
// // // }

// // // interface Slide {
// // //   id: string
// // //   title: string
// // //   subtitle: string | null
// // //   tagline: string | null
// // //   description: string | null
// // //   paragraph: string | null
// // //   features: Feature[]
// // //   image: StaticImageData // Use StaticImageData type
// // //   darkTheme?: boolean
// // // }

// // // const slides: Slide[] = [
// // //   {
// // //     id: "car-selling",
// // //     title: "CAR SELLING PLATFORM",
// // //     subtitle: null,
// // //     tagline: null,
// // //     description: null,
// // //     paragraph: null,
// // //     features: [
// // //       {
// // //         icon: "document",
// // //         title: "VEHICLE LISTINGS WITH RICH MEDIA & SPECS",
// // //         description:
// // //           "Display HD, with Multi Resolution, Images, graphical engine-derived and key features to entice. Merits",
// // //       },
// // //       {
// // //         icon: "search",
// // //         title: "SMART SEARCH & FILTERS",
// // //         description: "Predict: Effortlessly Bunch Matches with Filters Based on Value, Wanted Top Price",
// // //       },
// // //       {
// // //         icon: "calendar",
// // //         title: "DEALER & SELLER PORTALS",
// // //         description:
// // //           "Provide Social guarantees for Realtors and Provide Seller to Nitero's InSight Tool Institutes and Monitor Performance",
// // //       },
// // //       {
// // //         icon: "check",
// // //         title: "SECURE PAYMENTS & ESCROW SERVICES",
// // //         description: "Integrates/broker Financial Resources to Melt in Messaging System",
// // //       },
// // //       {
// // //         icon: "message",
// // //         title: "IN-APP MESSAGING & NEGOTIATION",
// // //         description:
// // //           "Selena and Elup intercommunication Engage Direct through Digital a Ret Through a Rush in Messaging",
// // //       },
// // //       {
// // //         icon: "chart",
// // //         title: "MARKET INSIGHTS & ANALYTICS",
// // //         description: "Generates Bittersweet Resums on Various Dosage Finding & Wear Preference % ew shapeout Decisions",
// // //       },
// // //     ],
// // //     image: carSelling, // Use imported variable
// // //     darkTheme: true,
// // //   },
// // //   {
// // //     id: "cybersecurity",
// // //     title: "CYBERSECURITY RISK",
// // //     subtitle: "MANAGEMENT PLATFORM",
// // //     tagline: null,
// // //     description: null,
// // //     paragraph: null,
// // //     features: [
// // //       {
// // //         icon: "shield-lock",
// // //         title: "CYBER RISK REGISTER & LIFECYCLE MANAGEMENT",
// // //         description:
// // //           "Central Module To Track Cyber Risks Across Domains With Risk Categorization, Ownership, Business Linkage, And Audit-Ready History.",
// // //       },
// // //       {
// // //         icon: "clipboard-check",
// // //         title: "RISK SCORING & IMPACT ANALYSIS ENGINE",
// // //         description:
// // //           "Automates Risk Scoring Using Internal/External Data, With Customizable Models Aligned To Frameworks Like NIST And ISO. Offers Visual Trends And Heatmaps For Informed Decisions.",
// // //       },
// // //       {
// // //         icon: "shield-alert",
// // //         title: "VULNERABILITY & THREAT MANAGEMENT",
// // //         description:
// // //           "Integrates With Scanners And Threat Feeds To Track Exposures, Map Them To Risks, And Support Remediation With Tickets, Evidence, And Audit-Ready Validation.",
// // //       },
// // //       {
// // //         icon: "file-search",
// // //         title: "COMPLIANCE & ISMS SUPPORT (ISO/ IEC 27001 & 31000 READY)",
// // //         description:
// // //           "Maps Controls To Standards, Tracks Gaps And Remediation, And Supports Audits With Real-Time Alerts And Evidence Management.",
// // //       },
// // //       {
// // //         icon: "git-merge",
// // //         title: "EXCEPTION MANAGEMENT & RISK ACCEPTANCE WORKFLOW",
// // //         description:
// // //           "Automates Exception Workflows With Approvals, Tracks Accepted Risks, And Enforces Risk Thresholds And Escalation Rules.",
// // //       },
// // //       {
// // //         icon: "bar-chart-3",
// // //         title: "REAL-TIME DASHBOARDS & ANALYTICS REPORTING",
// // //         description:
// // //           "Provides Dashboards With Risk Trends And Metrics, Supports Detailed, Exportable Reports, Scheduled Reporting, And Drill-Down Insights.",
// // //       },
// // //     ],
// // //     image: cyber, // Use imported variable
// // //   },
// // //   {
// // //     id: "hr-management",
// // //     title: "HUMAN RESOURCE MANAGEMENT",
// // //     subtitle: null,
// // //     tagline: null,
// // //     description: null,
// // //     paragraph: null,
// // //     features: [
// // //       {
// // //         icon: "handshake",
// // //         title: "STREAMLINED EMPLOYEE ONBOARDING AND DOCUMENTATION",
// // //         description:
// // //           "Simplify The Onboarding Experience By Automating Paperwork, Document Collection, And Employee Orientation.",
// // //       },
// // //       {
// // //         icon: "clock",
// // //         title: "EFFICIENT TIME TRACKING, ATTENDANCE, AND LEAVE MANAGEMENT",
// // //         description:
// // //           "Track Employee Hours, Manage Attendance, And Handle Leave Requests In A Single Interface. Real-Time Monitoring And Automated Approvals Improve Transparency And Reduce Manual Errors.",
// // //       },
// // //       {
// // //         icon: "file-check",
// // //         title: "AUTOMATED PAYROLL AND TAX COMPLIANCE",
// // //         description:
// // //           "Eliminate Manual Payroll Calculations With Automated Systems That Ensure Timely Salary Disbursements And Accurate Tax Deductions. Stay Compliant With The Latest Tax Regulations Effortlessly.",
// // //       },
// // //       {
// // //         icon: "chart-bar",
// // //         title: "PERFORMANCE REVIEWS AND CAREER DEVELOPMENT",
// // //         description:
// // //           "Monitor Employee Performance Through Structured Reviews And Set Clear Career Development Goals. Regular Feedback And Growth Planning Help Boost Engagement And Retention.",
// // //       },
// // //       {
// // //         icon: "file-user",
// // //         title: "INTEGRATED RECRUITMENT AND INTERNAL JOB POSTING",
// // //         description:
// // //           "Facilitate Internal Mobility And Recruitment Through Streamlined Job Posting And Application Workflows. Enhance Collaboration Between Hiring Teams And Ensure A Transparent Selection Process.",
// // //       },
// // //       {
// // //         icon: "bar-chart-4",
// // //         title: "HR ANALYTICS AND COMPLIANCE REPORTING",
// // //         description:
// // //           "Generate Detailed Reports On Workforce Metrics, Compliance Status, And HR Operations. Leverage Data-Driven Insights To Make Informed Strategic Decisions And Maintain Regulatory Standards.",
// // //       },
// // //     ],
// // //     image: hr, // Use imported variable
// // //   },
// // //   {
// // //     id: "vehicle-shipping",
// // //     title: "VEHICLE SHIPPING SERVICES",
// // //     subtitle: "IMPORT / EXPORT",
// // //     tagline: null,
// // //     description: null,
// // //     paragraph: null,
// // //     features: [
// // //       {
// // //         icon: "users",
// // //         title: "CUSTOMERS",
// // //         description:
// // //           "This Feature Enables You To Create A Structured And Categorized Customer Database For Efficient Management And Communication.",
// // //       },
// // //       {
// // //         icon: "user-check",
// // //         title: "AUCTION BUYER ID",
// // //         description:
// // //           "This Module Streamlines The Auction Buyer ID Allocation And Tracking, Fulfilling The Business Needs For Efficient Auction Management.",
// // //       },
// // //       {
// // //         icon: "car",
// // //         title: "VEHICLES",
// // //         description:
// // //           "This Feature Enables Full Control Over The Vehicle Lifecycle – From Manufacture To International Payment Processing And Delivery.",
// // //       },
// // //       {
// // //         icon: "truck",
// // //         title: "SHIPPING & CONTAINER MANAGEMENT",
// // //         description:
// // //           "This Feature Enhances Shipping Container Management Efficiency By Optimizing Vehicle Loading And Tracking.",
// // //       },
// // //       {
// // //         icon: "file-certificate",
// // //         title: "VEHICLE CLEARANCE CERTIFICATE (VCC)",
// // //         description:
// // //           "This Module Fulfills The Compliance And Import Certification Needs Of Vehicle Importers Through A Systematic Approach.",
// // //       },
// // //       {
// // //         icon: "users-round",
// // //         title: "CLIENTS",
// // //         description:
// // //           "This Feature Supports Accurate Client Data Filing, Management, And Tracking To Enhance Customer Relationships And Service Delivery.",
// // //       },
// // //     ],
// // //     image: vehicle, // Use imported variable
// // //   },
// // // ]

// // // // --- COMPONENT IMPLEMENTATION (Keep hooks and logic) ---
// // // export default function Test() {
// // //   const [currentSlide, setCurrentSlide] = useState(0)
// // //   const [autoplay, setAutoplay] = useState(true)
// // //   const [direction, setDirection] = useState<"left" | "right" | null>(null)

// // //   useEffect(() => {
// // //     if (!autoplay) return

// // //     const interval = setInterval(() => {
// // //       setDirection("right")
// // //       // Ensure slides array is not empty before accessing length
// // //       if (slides.length > 0) {
// // //         setCurrentSlide((prev) => (prev + 1) % slides.length)
// // //       }
// // //     }, 5000) // Slide duration 5 seconds

// // //     return () => clearInterval(interval)
// // //   }, [autoplay, slides.length]) // Add slides.length dependency

// // //   const nextSlide = () => {
// // //     setAutoplay(false)
// // //     setDirection("right")
// // //     if (slides.length > 0) {
// // //       setCurrentSlide((prev) => (prev + 1) % slides.length)
// // //     }
// // //   }

// // //   const prevSlide = () => {
// // //     setAutoplay(false)
// // //     setDirection("left")
// // //     if (slides.length > 0) {
// // //       setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
// // //     }
// // //   }

// // //   const goToSlide = (index: number) => {
// // //     setAutoplay(false)
// // //     setDirection(index > currentSlide ? "right" : "left")
// // //     setCurrentSlide(index)
// // //   }

// // //   // Check if slides data is available before rendering
// // //   if (!slides || slides.length === 0) {
// // //     return <div>Loading slides...</div> // Or some placeholder
// // //   }

// // //   // --- RETURN JSX (Structure mostly kept, ensure FeatureIcon is implemented) ---
// // //   return (
// // //     // Added min-h-[calc(100vh-80px)] assuming you might have a header/navbar
// // //     // Adjust if needed or revert to min-h-screen if it's full page
// // //     <div className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden bg-white">
// // //       {/* Changed h-full to min-h-full to allow content growth */}
// // //       <div className="relative w-full min-h-full overflow-hidden">
// // //         {slides.map((slide, index) => {
// // //           // Determine which animation to apply based on direction and current slide
// // //           let animationClass = ""
// // //           const prevIndex = (currentSlide - 1 + slides.length) % slides.length
// // //           const nextIndex = (currentSlide + 1) % slides.length

// // //           if (index === currentSlide) {
// // //             // Current slide coming IN
// // //             animationClass =
// // //               direction === "right"
// // //                 ? "animate-slide-in-from-right" // Renamed for clarity
// // //                 : direction === "left"
// // //                   ? "animate-slide-in-from-left" // Renamed for clarity
// // //                   : "opacity-100" // Initial state or no direction
// // //           } else if (direction === "right" && index === prevIndex) {
// // //             // Previous slide going OUT to the left
// // //             animationClass = "animate-slide-out-to-left" // Renamed for clarity
// // //           } else if (direction === "left" && index === nextIndex) {
// // //             // Next slide going OUT to the right
// // //             animationClass = "animate-slide-out-to-right" // Renamed for clarity
// // //           } else {
// // //             // All other slides are hidden
// // //             animationClass = "opacity-0 pointer-events-none"
// // //           }

// // //           return (
// // //             <div
// // //               key={slide.id}
// // //               className={cn(
// // //                 "absolute inset-0 w-full transition-opacity duration-500 ease-in-out", // Added base transition
// // //                 index === currentSlide ? "z-10" : "z-0", // Keep z-index logic
// // //                 animationClass, // Apply calculated animation class
// // //                 slide.darkTheme ? "bg-[#050314] text-white" : "bg-white text-black",
// // //               )}
// // //               style={{
// // //                 // Ensure non-active slides don't interfere if opacity isn't enough
// // //                 visibility: index === currentSlide ? "visible" : "hidden",
// // //               }}
// // //             >
// // //               {/* Use min-h-full here too to ensure it takes space */}
// // //               <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 min-h-full relative">
// // //                 {" "}
// // //                 {/* Removed bg-gray-100, handled by parent */}
// // //                 {/* Decorations - kept */}
// // //                 {!slide.darkTheme && (
// // //                   <>
// // //                     <div className="absolute left-0 top-1/4 bottom-0 w-32 md:w-48 opacity-70 z-0">
// // //                       <div className="absolute inset-0 bg-purple-300 opacity-20 rounded-full blur-3xl transform -translate-x-1/2"></div>
// // //                     </div>
// // //                     <div className="absolute right-0 top-1/4 bottom-0 w-32 md:w-48 opacity-70 z-0">
// // //                       <div className="absolute inset-0 bg-purple-300 opacity-20 rounded-full blur-3xl transform translate-x-1/2"></div>
// // //                     </div>
// // //                   </>
// // //                 )}
// // //                 {/* Main content */}
// // //                 <div className="relative z-10">
// // //                   {/* Special dark theme rendering */}
// // //                   {slide.darkTheme ? (
// // //                     <div className="w-full lg:w-3/4 xl:w-2/3 relative mx-auto py-10">
// // //                       {" "}
// // //                       {/* Adjusted width and padding */}
// // //                       {/* Image Background */}
// // //                       <div className="absolute inset-0 opacity-10 z-0">
// // //                         {" "}
// // //                         {/* Reduced opacity, kept behind text */}
// // //                         <div className="w-full h-full relative">
// // //                           <Image
// // //                             src={slide.image || "/placeholder.svg"} // Use imported image
// // //                             alt="Car silhouette background"
// // //                             fill
// // //                             className="object-contain" // Contain might be better here
// // //                             priority={index === 0} // Prioritize first image
// // //                           />
// // //                         </div>
// // //                       </div>
// // //                       {/* Content foreground */}
// // //                       <div className="relative z-10">
// // //                         {/* Logo and Title */}
// // //                         <div className="flex items-center gap-3 mb-8">
// // //                           <div className="w-10 h-10">
// // //                             {" "}
// // //                             {/* Logo SVG */}
// // //                             <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// // //                               <path
// // //                                 d="M12 2L2 7L12 12L22 7L12 2Z"
// // //                                 stroke="currentColor"
// // //                                 strokeWidth="2"
// // //                                 strokeLinecap="round"
// // //                                 strokeLinejoin="round"
// // //                               />
// // //                               <path
// // //                                 d="M2 17L12 22L22 17"
// // //                                 stroke="currentColor"
// // //                                 strokeWidth="2"
// // //                                 strokeLinecap="round"
// // //                                 strokeLinejoin="round"
// // //                               />
// // //                               <path
// // //                                 d="M2 12L12 17L22 12"
// // //                                 stroke="currentColor"
// // //                                 strokeWidth="2"
// // //                                 strokeLinecap="round"
// // //                                 strokeLinejoin="round"
// // //                               />
// // //                             </svg>
// // //                           </div>
// // //                           {/* Using slide.title instead of hardcoding */}
// // //                           <h2 className="text-xl sm:text-2xl font-bold text-gray-200">{slide.title}</h2>
// // //                         </div>

// // //                         {/* Features Grid */}
// // //                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
// // //                           {slide.features.map((feature, featureIndex) => (
// // //                             <div
// // //                               key={featureIndex}
// // //                               className="bg-[#0e0628]/70 p-4 rounded-lg border border-gray-700/50 backdrop-blur-sm"
// // //                             >
// // //                               <div className="flex items-start gap-3 mb-2">
// // //                                 <div className="bg-[#1a0d4a]/60 p-2 rounded-md flex-shrink-0">
// // //                                   {" "}
// // //                                   {/* Adjusted background and padding */}
// // //                                   {/* Using FeatureIcon component for consistency */}
// // //                                   <FeatureIcon type={feature.icon} className="w-5 h-5 text-purple-300" />
// // //                                 </div>
// // //                                 <h3 className="text-sm font-semibold mt-1">{feature.title}</h3>
// // //                               </div>
// // //                               <p className="text-xs text-gray-400 pl-10">{feature.description}</p>
// // //                             </div>
// // //                           ))}
// // //                         </div>

// // //                         {/* Many More Button */}
// // //                         <div className="flex justify-end mt-6">
// // //                           <button className="text-gray-300 hover:text-white flex items-center gap-1 text-sm font-medium">
// // //                             Many More
// // //                             <ChevronRight className="h-4 w-4" />
// // //                           </button>
// // //                         </div>
// // //                       </div>
// // //                     </div>
// // //                   ) : (
// // //                     // Standard rendering for other slides
// // //                     <>
// // //                       {/* Header */}
// // //                       <div className="text-center mb-8 md:mb-12">
// // //                         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
// // //                           {slide.title}
// // //                         </h1>
// // //                         {slide.subtitle && (
// // //                           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-700 mt-1">
// // //                             {slide.subtitle}
// // //                           </h2>
// // //                         )}
// // //                       </div>

// // //                       {/* Removed tagline section for simplicity - add back if needed */}

// // //                       {/* Features grid */}
// // //                       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-12">
// // //                         {slide.features.map((feature, featureIndex) => (
// // //                           <div key={featureIndex} className="flex flex-col items-center text-center">
// // //                             <div className="w-16 h-16 mb-4 flex items-center justify-center bg-purple-100 rounded-full">
// // //                               {/* Use FeatureIcon for light theme too */}
// // //                               <FeatureIcon type={feature.icon} className="w-8 h-8 text-purple-700" />
// // //                             </div>
// // //                             <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
// // //                             <p className="text-sm text-gray-600">{feature.description}</p>
// // //                           </div>
// // //                         ))}
// // //                       </div>

// // //                       {/* Bottom image section */}
// // //                       <div className="relative h-48 sm:h-64 md:h-80 mt-8 md:mt-12">
// // //                         <Image
// // //                           src={slide.image || "/placeholder.svg"} // Use imported image
// // //                           alt={slide.title}
// // //                           fill
// // //                           className="object-contain" // Use contain to show whole image
// // //                           priority={index === 0} // Prioritize first image
// // //                         />

// // //                         {/* Many More button stylized */}
// // //                         <div className="absolute bottom-4 right-4">
// // //                           <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md flex items-center gap-2 shadow-md text-sm">
// // //                             Many More <Plus className="w-4 h-4" />
// // //                           </button>
// // //                         </div>
// // //                       </div>
// // //                     </>
// // //                   )}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )
// // //         })}
// // //       </div>

// // //       {/* Navigation buttons */}
// // //       {slides.length > 1 && (
// // //         <>
// // //           <button
// // //             onClick={prevSlide}
// // //             className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-lg z-20 backdrop-blur-sm transition"
// // //             aria-label="Previous slide"
// // //           >
// // //             <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
// // //           </button>

// // //           <button
// // //             onClick={nextSlide}
// // //             className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-2 shadow-lg z-20 backdrop-blur-sm transition"
// // //             aria-label="Next slide"
// // //           >
// // //             <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
// // //           </button>

// // //           {/* Dots navigation */}
// // //           <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
// // //             {slides.map((_, index) => (
// // //               <button
// // //                 key={index}
// // //                 onClick={() => goToSlide(index)}
// // //                 className={cn(
// // //                   "w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out", // Smoother transition
// // //                   currentSlide === index ? "bg-purple-700 scale-125" : "bg-gray-300 hover:bg-gray-400", // Highlight current
// // //                 )}
// // //                 aria-label={`Go to slide ${index + 1}`}
// // //               />
// // //             ))}
// // //           </div>
// // //         </>
// // //       )}
// // //     </div>
// // //   )
// // // }

// // // // --- FeatureIcon Component (Replace with actual icons from lucide-react) ---
// // // // Using lucide-react icons is highly recommended for consistency and quality.
// // // // Install: npm install lucide-react OR yarn add lucide-react
// // // import {
// // //   FileText,
// // //   Search,
// // //   CalendarDays,
// // //   CheckSquare,
// // //   MessageSquare,
// // //   TrendingUp,
// // //   ShieldCheck,
// // //   ClipboardList,
// // //   ShieldAlert,
// // //   FileSearch2,
// // //   GitMerge,
// // //   BarChart3,
// // //   Handshake,
// // //   Clock,
// // //   FileCheck,
// // //   BarChartHorizontal,
// // //   FileIcon as FileUser,
// // //   BarChartBig,
// // //   Users,
// // //   UserCheck,
// // //   Car,
// // //   Truck,
// // //   FileBadge,
// // //   UsersRound,
// // //   type LucideIcon,
// // //   HelpCircle,
// // // } from "lucide-react"

// // // // Map string identifiers to actual Lucide icon components
// // // const iconMap: { [key: string]: typeof LucideIcon } = {
// // //   document: FileText,
// // //   search: Search,
// // //   calendar: CalendarDays,
// // //   check: CheckSquare,
// // //   message: MessageSquare,
// // //   chart: TrendingUp,
// // //   "shield-lock": ShieldCheck, // More appropriate icon
// // //   "clipboard-check": ClipboardList,
// // //   "shield-alert": ShieldAlert,
// // //   "file-search": FileSearch2,
// // //   "git-merge": GitMerge,
// // //   "bar-chart-3": BarChart3,
// // //   handshake: Handshake,
// // //   clock: Clock,
// // //   "file-check": FileCheck,
// // //   "chart-bar": BarChartHorizontal, // Or BarChartBig
// // //   "file-user": FileUser,
// // //   "bar-chart-4": BarChartBig,
// // //   users: Users,
// // //   "user-check": UserCheck,
// // //   car: Car,
// // //   truck: Truck,
// // //   "file-certificate": FileBadge,
// // //   "users-round": UsersRound,
// // //   // Add any other icons used
// // // }

// // // type IconNode = [SVGElement, Record<string, string>]

// // // function FeatureIcon({ type, className }: { type: string; className?: string }) {
// // //   const IconComponent = iconMap[type] || HelpCircle // Use mapped icon or fallback

// // //   return <IconComponent className={cn("w-6 h-6", className)} strokeWidth={1.5} />
// // // }




// // // import { getServiceForHome } from "@/sanity/lib/getoverview"


// // // // import { motion } from 'framer-motion'
// // // // import Image from 'next/image'
// // // // import { useState } from 'react'
// // // // import { useInView } from 'react-intersection-observer'
// // // // import core01 from "@/public/core/core01.png"
// // // // import core02 from "@/public/core/core02.png"
// // // // import core03 from "@/public/core/core03.png"
// // // // import core04 from "@/public/core/core04.png"
// // // // import core05 from "@/public/core/core05.png"
// // // // import core06 from "@/public/core/core06.png"
// // // // const fadeInUp = {
// // // //   hidden: { opacity: 0, y: 40 },
// // // //   visible: (i: number) => ({
// // // //     opacity: 1,
// // // //     y: 0,
// // // //     transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
// // // //   }),
// // // // }

// // // // export default function Try(){
// // // //   return (
// // // //     <main className="min-h-screen p-4 md:p-8">


// // // //     <section>
// // // //       Test
// // // //     </section>
// // // //   </main>
// // // //   )
// // // // }

// // // // 'use client'

// // // // import { useState } from 'react'
// // // // import { motion, AnimatePresence } from 'framer-motion'
// // // import { Overview } from '../../../components/details/overview';
// // import Solutions from '../../../components/erp/main';

// // // const faqs = [
// // //   {
// // //     question: 'How can DevEdge help protect my business from cyber threats?',
// // //     answer:
// // //       `We offer end-to-end cybersecurity solutions from risk assessments and penetration testing to cloud security, incident response, and digital forensics. Whether you're concerned about ransomware, phishing, or insider threats, our team helps you build a secure and resilient digital environment.`,
// // //   },
// // //   {
// // //     question: 'What makes your cybersecurity approach unique?',
// // //     answer:
// // //       `We combine technical depth (OSCP, CISSP-certified professionals) with business-aligned strategies, ensuring protection that fits your industry, risk profile, and compliance needs not just generic IT fixes.`,
// // //   },
// // //   {
// // //     question: 'Does DevEdge provide secondment or outsourced professional resources?',
// // //     answer:
// // //       `Yes, DevEdge offers secondment services by providing skilled professionals who can work on-site or remotely as an extension of your internal team. Whether you need support in internal audit, cybersecurity, IT, finance, HR, or compliance, our certified experts can fill temporary gaps, support special projects, or help scale your team during critical periods all while maintaining full alignment with your business goals and standards`,
// // //   },
// // //   {
// // //     question: 'Can DevEdge set up or improve my internal audit function?',
// // //     answer:
// // //       `Absolutely. We help businesses set up, transform, or co-source internal audit departments, design risk-based audit plans, and implement digital audit tools aligning with IIA standards and local regulations.`,
// // //   },
// // //   {
// // //     question: 'What makes your cybersecurity approach unique?',
// // //     answer:
// // //       `We combine technical depth (OSCP, CISSP-certified professionals) with business-aligned strategies, ensuring protection that fits your industry, risk profile, and compliance needs not just generic IT fixes.`,
// // //   },{
// // //     question: 'Do you provide support with regulatory compliance and risk controls?',
// // //     answer:
// // //       `Yes. Our GRC experts help you design frameworks, assess third-party risks, implement IT controls, and meet compliance requirements for standards like ISO, NCA, and local data protection laws (PDPL, DIFC, etc.).`,
// // //   },{
// // //     question: 'What is your approach to multi-cloud solutions?',
// // //     answer:
// // //       `We design, implement, and manage multi-cloud environments using AWS, Azure, Google Cloud, or hybrid models. Our focus is on cost optimization, security, and business continuity, ensuring your cloud infrastructure aligns with your goals.`,
// // //   },{
// // //     question: 'Can you help migrate my legacy systems to the cloud?',
// // //     answer:
// // //       `Yes. From assessment to execution, we provide seamless migration services, hybrid cloud integration, and performance optimization with minimal downtime and full compliance assurance.`,
// // //   },{
// // //     question: 'What support does DevEdge offer in HR and people strategy?',
// // //     answer:
// // //       `DevEdge provides comprehensive support in workforce planning, organizational design, talent risk assessments, and leadership development helping you align your human capital strategy with your business goals.
// // // We also offer a customized HR management solution that includes modules for onboarding, payroll, performance management, employee engagement, and compliance tailored to fit your organization’s specific needs and structure.
// // // `,
// // //   },
// // // ]


// // // export default function ABC() {
// // //   // const [openIndex, setOpenIndex] = useState<number | null>(0)

// // //   // const toggle = (index: number) =>
// // //   //   setOpenIndex(openIndex === index ? null : index)

// // //   return (
// // //     // <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
// // //     //   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
// // //     //     <span className="text-black">Frequently Ask </span>
// // //     //     <span className="text-purple-600 block">Questions</span>
// // //     //   </h2>

// // //     //   <div className="space-y-5">
// // //     //     {faqs.map((faq, i) => {
// // //     //       const isOpen = openIndex === i
// // //     //       return (
// // //     //         <motion.div
// // //     //           key={i}
// // //     //           layout
// // //     //           initial={{ borderRadius: 12 }}
// // //     //           className="bg-white shadow-sm rounded-md border overflow-hidden"
// // //     //         >
// // //     //           <div className="flex justify-between items-start sm:items-center">
// // //     //             <div className="p-4 pr-2 w-full">
// // //     //               <p className="font-semibold text-base sm:text-lg">
// // //     //                 {String(i + 1).padStart(2, '0')} {faq.question}
// // //     //               </p>

// // //     //               <AnimatePresence>
// // //     //                 {isOpen && (
// // //     //                   <motion.div
// // //     //                     initial={{ opacity: 0, height: 0 }}
// // //     //                     animate={{ opacity: 1, height: 'auto' }}
// // //     //                     exit={{ opacity: 0, height: 0 }}
// // //     //                     transition={{ duration: 0.3 }}
// // //     //                     className="overflow-hidden mt-2 text-gray-600 text-sm sm:text-base"
// // //     //                   >
// // //     //                     {faq.answer}
// // //     //                   </motion.div>
// // //     //                 )}
// // //     //               </AnimatePresence>
// // //     //             </div>

// // //     //             {/* Toggle Button */}
// // //     //             <motion.button
// // //     //               onClick={() => toggle(i)}
// // //     //               animate={{
// // //     //                 rotate: isOpen ? 180 : 0,
// // //     //               }}
// // //     //               transition={{ type: 'spring', stiffness: 300 }}
// // //     //               className={`w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl transition-colors duration-300 ${
// // //     //                 isOpen
// // //     //                   ? 'bg-purple-700 text-white'
// // //     //                   : 'bg-gray-300 text-black'
// // //     //               }`}
// // //     //             >
// // //     //               {isOpen ? '−' : '+'}
// // //     //             </motion.button>
// // //     //           </div>
// // //     //         </motion.div>
// // //     //       )
// // //     //     })}
// // //     //   </div>
// // //     // </div>
// // //     <div>
// // //       Heloo
// // //     </div>
// // //   )
// // // }

// // //  const Test = async () => {
// // //   const data = await getServiceForHome()
// // //   function truncateText(text: string, maxLength: number) {
// // //     if (text.length <= maxLength) return text;
// // //     return text.slice(0, maxLength) + '...';
// // //   }
  
  
// // //   return (
// // //     <div className="min-h-screen p-4 md:p-8 mt-10 " >
// // //       {data.map((item, index) => (
// // //         <div key={index} className="flex flex-col items-center justify-center text-red-100" >
// // //           <h1>{item.title}</h1>
// // //           <p>{truncateText(item.overview, 50)}</p>
// // //           <p>{item.slug}</p>
// // //           <img src={item.icon.asset.url} />
// // //         </div>
// // //       ))}
// // //     </div>
// // //   )
// // // }

// // // export default Test






// //  // Update path if needed


// // // Replace with your background path
 

 
// // // export default function ConsultingBenefits() {
// // //   return (
// // //     <main className="mt-20 sm:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-20">
// // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // //         {/* Left Section */}
// // //         <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col justify-center w-full">
// // //           <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
// // //             <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full flex-shrink-0">
// // //               {/* Icon */}
// // //               <svg
// // //                 className="w-7 h-7 text-white"
// // //                 fill="none"
// // //                 stroke="currentColor"
// // //                 strokeWidth="2"
// // //                 viewBox="0 0 24 24"
// // //               >
// // //                 <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v4H3V4z" />
// // //                 <path
// // //                   strokeLinecap="round"
// // //                   strokeLinejoin="round"
// // //                   d="M21 10H3v10a1 1 0 001 1h16a1 1 0 001-1V10z"
// // //                 />
// // //               </svg>
// // //             </div>
// // //             <div className="w-full">
// // //               <h2 className="text-2xl sm:text-3xl font-bold mb-3 leading-snug">
// // //                 A Culture of Curiosity, Integrity & Impact
// // //               </h2>
// // //               <hr className="border-t-2 border-gray-200 my-4 w-full" />
// // //               <p className="text-gray-600 text-base leading-relaxed">
// // //                 At DevEdge Consulting, we don’t just hire talent — we invest in it. 
// // //                 Join a team where innovation meets impact, where you're empowered 
// // //                 to lead, learn, and leave a mark.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Right Section */}
// // //         <div className="flex flex-col gap-8 w-full">
// // //           {/* Box 1 */}
// // //           <div className="bg-white rounded-2xl p-8 shadow-md w-full">
// // //             <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
// // //               <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full flex-shrink-0">
// // //                 {/* Icon */}
// // //                 <svg
// // //                   className="w-7 h-7 text-white"
// // //                   fill="none"
// // //                   stroke="currentColor"
// // //                   strokeWidth="2"
// // //                   viewBox="0 0 24 24"
// // //                 >
// // //                   <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v4H3V4z" />
// // //                   <path
// // //                     strokeLinecap="round"
// // //                     strokeLinejoin="round"
// // //                     d="M21 10H3v10a1 1 0 001 1h16a1 1 0 001-1V10z"
// // //                   />
// // //                 </svg>
// // //               </div>
// // //               <div className="w-full">
// // //                 <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug">
// // //                   Diverse Industry Exposure
// // //                 </h3>
// // //                 <hr className="border-t-2 border-gray-200 my-4 w-full" />
// // //                 <p className="text-gray-600 text-base leading-relaxed">
// // //                   Consultants work with clients across various industries, gaining broad 
// // //                   knowledge, experience, and problem-solving skills that accelerate career growth.
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Box 2 */}
// // //           <div className="bg-white rounded-2xl p-8 shadow-md w-full">
// // //             <div className="flex flex-col sm:flex-row items-start gap-5 w-full">
// // //               <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-4 rounded-full flex-shrink-0">
// // //                 {/* Icon */}
// // //                 <svg
// // //                   className="w-7 h-7 text-white"
// // //                   fill="none"
// // //                   stroke="currentColor"
// // //                   strokeWidth="2"
// // //                   viewBox="0 0 24 24"
// // //                 >
// // //                   <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v4H3V4z" />
// // //                   <path
// // //                     strokeLinecap="round"
// // //                     strokeLinejoin="round"
// // //                     d="M21 10H3v10a1 1 0 001 1h16a1 1 0 001-1V10z"
// // //                   />
// // //                 </svg>
// // //               </div>
// // //               <div className="w-full">
// // //                 <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug">
// // //                   High Earning Potential
// // //                 </h3>
// // //                 <hr className="border-t-2 border-gray-200 my-4 w-full" />
// // //                 <p className="text-gray-600 text-base leading-relaxed">
// // //                   Consulting roles often offer competitive salaries, performance-based 
// // //                   bonuses, and opportunities for rapid financial growth.
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </main>
// // //   );
// // // }

// // // components/ServicesList.tsx

// // // components/ServicesList.tsx
// // // import {
// // //   Building2,
// // //   LandmarkIcon,
// // //   Store,
// // //   Wallet,
// // //   Heart,
// // //   Ship,
// // //   Zap,
// // //   ShoppingCart,
// // //   Factory,
// // //   GraduationCap,
// // //   Cpu,
// // //   Radio,
// // //   Hammer,
// // //   UtensilsCrossed,
// // // } from "lucide-react"

// // // const services = [
// // //   "Internal Audit",
// // //   "Cybersecurity Services",
// // //   "Multi-Cloud Services",
// // //   "Intelligent Enterprise Systems & Application Development Services",
// // //   "Analytics And Artificial Intelligence Services",
// // //   "Digital Transformation & Business Automation",
// // //   "Business Continuity Management (BCM) Services",
// // //   "Technology Consulting And GRC (Governance, Risk & Compliance)",
// // //   "Precision Data Management & Privacy Services",
// // //   "Integrated Accounting & Financial Advisory Services",
// // //   "Risk Management & Human Capital Advisory",
// // //   "Industrial Control Systems (ICS) & OT Security Services",
// // //   "Fixed Asset Management",
// // // ];

// // // interface IndustryCardProps {
// // //   title: string
// // //   icon: React.ReactNode
// // //   color: string
// // //   description: string
// // //   colorTop?: string
// // //   colorBottom?: string
// // //   number: number
// // // }

// // // const industries = [
// // //     { description:"Lorem ipsum", title: "Banking", icon: <Building2 size={18} />, color: "#FF3366" },
// // //     { description:"Lorem ipsum", title: "Government & Public Services", icon: <LandmarkIcon size={18} />, color: "#FF9933" },
// // //     { description:"Lorem ipsum", title: "Retail and Real Estate", icon: <Store size={18} />, color: "#FFCC33" },
// // //     { description:"Lorem ipsum", title: "Financial Services", icon: <Wallet size={18} />, color: "#66CC66" },
// // //     { description:"Lorem ipsum", title: "Health Care", icon: <Heart size={18} />, color: "#9933CC" },
// // //     { description:"Lorem ipsum", title: "Shipping and Logistics", icon: <Ship size={18} />, color: "#666699" },
// // //     { description:"Lorem ipsum", title: "Energy", icon: <Zap size={18} />, color: "#3399FF" },
// // //     { description:"Lorem ipsum", title: "Consumer", icon: <ShoppingCart size={18} />, color: "#33CCCC" },
// // //     { description:"Lorem ipsum", title: "Power and Industrial Control System", icon: <Factory size={18} />, color: "#CC3333" },
// // //     { description:"Lorem ipsum",title: "Education", icon: <GraduationCap size={18} />, color: "#999999" },
// // //     { description:"Lorem ipsum",title: "Technology", icon: <Cpu size={18} />, color: "#6666CC" },
// // //     { description:"Lorem ipsum", title: "Media & Telecommunications", icon: <Radio size={18} />, color: "#CC66CC" },
// // //     { description:"Lorem ipsum",title: "Manufacturing", icon: <Hammer size={18} />, color: "#99CC33" },
// // //     { description:"Lorem ipsum",title: "Hospitality", icon: <UtensilsCrossed size={18} />, color: "#CCCCCC" },
// // //   ]

// // //   const IndustryCard = ({ title, icon, number, description }: IndustryCardProps) => {
// // //     return (
// // //       <div className="relative p-[2px] rounded-lg bg-[linear-gradient(180deg,#6A0DAD,#00E0FF)] w-full max-w-xs ">
// // //   {/* Floating Icon - moved outside the inner card but still centered */}
// // //   <div className="absolute z-10 -top-8 left-1/2 transform -translate-x-1/2">
// // //     <div className="bg-white p-4 rounded-full border-2 shadow-md" style={{ borderColor: "linear-gradient(90deg,#6A0DAD,#00E0FF)" }}>
// // //       {icon}
// // //     </div>
// // //   </div>
  
// // //   {/* Inner white card */}
// // //   <div className="bg-white rounded-lg pt-10 pb-6 px-6 text-center relative overflow-hidden">
// // //     {/* Number at top-right */}
// // //     <span className="absolute top-1 left-2 text-2xl font-bold text-gray-700">
// // //       {number}
// // //     </span>

// // //     {/* Title */}
// // //     <h3 className="text-sm font-bold text-purple-700 uppercase mb-2 leading-tight">
// // //       {title}
// // //     </h3>

// // //     {/* Description */}
// // //     <p className="text-gray-600 text-xs leading-relaxed">
// // //       {description}
// // //     </p>
// // //   </div>
// // // </div>
// // //     );
// // //   };
  
  
// // // const AnyGrid = () =>{
// // //   return (<div className="px-4 md:py-12 max-w-7xl mx-4 sm:mx-6 md:mx-10 lg:mx-48">
// // //     <div className="flex  flex-wrap justify-center gap-6">
// // //   {industries.map((industry, index) => (
// // //     <div 
// // //       key={index} 
// // //       className="w-full sm:w-[calc(50%-12px)] mt-4 lg:w-[calc(25%-18px)]"
// // //     >
// // //       <IndustryCard
// // //         title={industry.title}
// // //         icon={industry.icon}
// // //         color={industry.color}
// // //         number={index + 1}
// // //         description={industry.description}
// // //       />
// // //     </div>
// // //   ))}
// // // </div>
// // // </div>)
// // // }
  
// // //  function NewServicesList() {
// // //   return (

// // //     <div className="relative flex flex-col items-center mt-16 sm:mt-24 md:mt-32 px-4 sm:px-6 lg:px-8 justify-center">
// // //       {/* Heading */}
// // //       <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center tracking-widest text-purple-700">
// // //         OUR SERVICES
// // //       </h2>

// // //       {/* Content Box */}
// // //       <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-black rounded-lg p-4 sm:p-6 md:p-8 border-4 border-b-[10px] border-black shadow-2xl">
// // //         {/* Gradient Strip */}
// // //         <div className="absolute left-0 top-0 h-full w-3 sm:w-4 md:w-6 bg-gradient-to-b from-purple-500 to-blue-500" />
        
// // //         <div className="space-y-2 sm:space-y-3 md:space-y-4 ml-4 sm:ml-6">
// // //           {services.map((service, index) => (
// // //             <div key={index} className="flex items-start space-x-2 sm:space-x-3">
// // //               <span className="font-bold min-w-[20px]">{index + 1}.</span>
// // //               <p className="text-xs sm:text-sm md:text-base">{service}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>

// // //   );
// // // }

// // // function Overview({ overview = "No overview available." }: { overview?: string }) {
// // //   return (
// // //     <div
      
// // //       className="w-auto h-full mt-[50px] mx-4 sm:mx-6 md:mx-10 lg:mx-48 rounded-lg"
// // //     >
// // //       <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center lg:text-left">Overview</h2>
// // //       <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground text-center lg:text-left">
// // //         {overview}
// // //       </p>
// // //     </div>
// // //   )
// // // }

// // // export default function AllGrid(){
// // //   return (
// // //     <div className="relative w-full mx-auto   py-12 md:py-24">
// // //       {/* Main content container */}
// // //       <div className="flex flex-col lg:flex-row l gap-8">
// // //         {/* Left column with Overview and AnyGrid */}
// // //         <div className="flex flex-col lg:w-2/3">
// // //           <Overview overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat." />
          
// // //           <div className="mx-auto mt-8">
// // //             <AnyGrid />
// // //           </div>
// // //         </div>
        
// // //         {/* Right column with ServicesList */}
// // //         <div className="lg:w-1/3">
// // //           <NewServicesList />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }
 




// // import React, {  useRef } from 'react';

// // // Import specific icons from react-icons
// // import { FaChevronDown, FaChevronUp, FaTimes, FaBars } from 'react-icons/fa';
// // import Searching from "@/components/navbar/searching"
// // import Link from "next/link"

// // interface MenuItem {
// //   slug: string;
// //   label: string;
// //   href?: string;
// //   isActive?: boolean;
// //   submenu?: MenuItem[];
// // }

// // const menuData: MenuItem[] = [
// //   { slug: 'home', label: 'Home', href: 'home', isActive: true },
// //   {
// //     slug: 'about', label: 'About', href: 'about',
    
// //   },
// //   {
// //     slug: 'services',
// //     label: 'Services',
    
// //     submenu: [
// //   {
// //     slug: 'internal-audit',
// //     label: 'Internal Audit',
// //     href: '/services/internal-audit',
// //   },
// //   {
// //     slug: 'cybersecurity',
// //     label: 'Cybersecurity Services',
// //     href: '/services/cybersecurity',
// //   },
// //   {
// //     slug: 'multi-cloud-services',
// //     label: 'Multi-Cloud',
// //     href: '/services/multi-cloud-services',
// //   },
// //   {
// //     slug: 'intelligent-enterprise-and-application-development-systems',
// //     label: 'Intelligent Enterprise Systems',
// //     href: '/services/intelligent-enterprise-and-application-development-systems',
// //   },
// //   {
// //     slug: 'digital-transformation-and-business-automation',
// //     label: 'Digital Transformation',
// //     href: '/services/digital-transformation-and-business-automation',
// //   },
// //   {
// //     slug: 'technology-consulting-and-grc-governance-risk-and-compliance',
// //     label: 'Technology Consulting & GRC',
// //     href: '/services/technology-consulting-and-grc-governance-risk-and-compliance',
// //   },
// //   {
// //     slug: 'precision-data-management-and-privacy-services',
// //     label: 'Precision Data Management',
// //     href: '/services/precision-data-management-and-privacy-services',
// //   },
// //   {
// //     slug: 'integrated-accounting-and-financial-advisory-services',
// //     label: 'Integrated Accounting & Financial Advisory Service',
// //     href: '/services/integrated-accounting-and-financial-advisory-services',
// //   },
// //   {
// //     slug: 'risk-management-and-human-capital-advisory',
// //     label: 'Risk Management & Human Capital Advisory',
// //     href: '/services/risk-management-and-human-capital-advisory',
// //   },
// //   {
// //     slug: 'fixed-asset-management',
// //     label: 'Fixed Asset Management',
// //     href: '/services/fixed-asset-management',
// //   },
// // ]
// // ,
// //   },
// //   {
// //     slug: 'contact',
// //     label: 'Contact',
// //     href: 'contact',
    
// //   },
// //   {
// //     slug: 'company',
// //     label: 'Company',
// //     submenu: [
// //       { slug: 'leadership', label: 'Leadership', href: 'company/leadership' },
// //       { slug: 'career', label: 'Career', href: 'company/career' },
// //       { slug: 'cv', label: 'Submit CV', href: 'company/cv' },
// //     ]
// //   },
// //   {
// //     slug: 'erp',
// //     label: 'Our Solutions',
// //     href:"/erp",
// //   },

// // ];

// // const MobileNavbar: React.FC = () => {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
// //   const navRef = useRef<HTMLDivElement>(null);

// //   const toggleMobileMenu = () => {
// //     setIsMobileMenuOpen(!isMobileMenuOpen);
// //   };

// //   const toggleSubmenu = (slug: string) => {
// //     setOpenSubmenus(prev => ({ ...prev, [slug]: !prev[slug] }));
// //   };

// //   useEffect(() => {
// //     if (isMobileMenuOpen) {
// //       document.body.style.overflow = 'hidden';
// //     } else {
// //       document.body.style.overflow = 'auto';
// //     }
// //     return () => {
// //       document.body.style.overflow = 'auto';
// //     };
// //   }, [isMobileMenuOpen]);

// //   useEffect(() => {
// //     const handleClickOutside = (event: MouseEvent) => {
// //       if (navRef.current && !navRef.current.contains(event.target as Node) && isMobileMenuOpen) {
// //         const toggleButton = document.getElementById('mobile-menu-toggle-button');
// //         if (toggleButton && !toggleButton.contains(event.target as Node)) {
// //           setIsMobileMenuOpen(false);
// //         }
// //       }
// //     };
// //     document.addEventListener('mousedown', handleClickOutside);
// //     return () => {
// //       document.removeEventListener('mousedown', handleClickOutside);
// //     };
// //   }, [isMobileMenuOpen]);

// //   const renderMenuItem = (item: MenuItem) => (
// //     <li
// //       key={item.slug}
// //       className={`border-b w-full border-gray-700 ${item.isActive ? 'bg-brand-red' : ''}`}
// //     >
// //       <div className="flex items-center justify-between">
// //         <Link
// //           href={item.href || '#'}
// //           className={`block flex-grow py-3 px-5 text-lg ${item.isActive ? 'font-bold' : ''} hover:bg-purple-600 transition-colors duration-200`}
// //           onClick={() => {
// //             if (!item.submenu) setIsMobileMenuOpen(false);
// //           }}
// //         >
// //           {item.label}
// //         </Link>
// //         {item.submenu && (
// //           <button
// //             onClick={() => toggleSubmenu(item.slug)}
// //             aria-expanded={openSubmenus[item.slug] || false}
// //             aria-controls={`submenu-${item.slug}`}
// //             className="p-4 focus:outline-none focus:bg-purple-600"
// //             aria-label={`Toggle ${item.label} submenu`}
// //           >
// //             {openSubmenus[item.slug] ? (
// //               // Using react-icons and applying Tailwind size classes
// //               <FaChevronUp className="h-4 w-4 text-white" />
// //             ) : (
// //               <FaChevronDown className="h-4 w-4 text-white" />
// //             )}
// //           </button>
// //         )}
// //       </div>
// //       {item.submenu && openSubmenus[item.slug] && (
// //         <ul id={`submenu-${item.slug}`} className="bg-nav-submenu pl-5">
// //           {item.submenu.map(subItem => (
// //             <li key={subItem.slug} className="border-t border-purple-600">
// //               <a
// //                 href={subItem.href || '#'}
// //                 className="block py-3 px-5 text-base hover:bg-purple-500 transition-colors duration-200"
// //                 onClick={() => setIsMobileMenuOpen(false)}
// //               >
// //                 {subItem.label}
// //               </a>
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </li>
// //   );

// //   return (
// //     <>
// //       <header className="fixed top-0 left-0 right-0 z-50  text-black h-16 flex items-center justify-end px-4 shadow-md">
        
// //         <button
// //           id="mobile-menu-toggle-button"
// //           onClick={toggleMobileMenu}
// //           className="p-2 focus:outline-none focus:ring-2 focus:ring-black rounded"
// //           aria-label="Toggle menu"
// //           aria-expanded={isMobileMenuOpen}
// //           aria-controls="mobile-nav-panel"
// //         >
// //           {isMobileMenuOpen ? (
// //             // Using react-icons and applying Tailwind size classes
// //             <FaTimes className="h-6 w-6" />
// //           ) : (
// //             <FaBars className="h-6 w-6" />
// //           )}
// //         </button>
// //       </header>

// //       {isMobileMenuOpen && (
// //         <div
// //           className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
// //           onClick={toggleMobileMenu}
// //           aria-hidden="true"
// //         ></div>
// //       )}

// //       <nav
// //         ref={navRef}
// //         id="mobile-nav-panel"
// //         className={`fixed top-16 left-0 h-[calc(100vh-4rem)] w-72 max-w-[80vw] bg-nav-dark text-white shadow-xl transform transition-transform duration-300 ease-in-out z-40
// //                    ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
// //         aria-hidden={!isMobileMenuOpen}
// //       >
// //         <ul className="py-4">
// //           {menuData.map(item => renderMenuItem(item))}

// //           <div className="flex-1 mt-2 mx-4">
// //           <Searching />
// //         </div>
// //         </ul>
// //       </nav>
// //     </>
// //   );
// // };

// // export default MobileNavbar;


// export default function CompanyPage() {
//   return (
//     <div className="overflow-x-hidden"> {/* Important to prevent horizontal scroll from animations */}
//       {/*
//         The original site has a very complex, GSAP-driven scroll animation sequence
//         for the initial sections. Replicating that 1:1 is highly advanced.
//         We'll structure it conceptually.
//       */}

//       {/* Placeholder for the complex initial animated wrapper if you attempt it */}
//       {/* <AnimatedScrollWrapper> */}
//         <HeroSection />
//         <HistoryIntro />
//       {/* </AnimatedScrollWrapper> */}

//       {/* Simpler Sections */}
//       <OurStory />
//       <GlobalPresence />
//       <Achievements />
//       <Collaborations />
//       <TeamCulture />
//       <CommunityFocus />
      
//     </div>
//   );
// }

// const HistoryIntro = () => {
//   // For the advanced horizontal scroll animation, you'd typically:
//   // 1. Create a tall container that will be 'pinned' visually while its content scrolls horizontally.
//   // 2. Use a ref for this container to track scroll progress within it.
//   // 3. Use useScroll and useTransform to map vertical scroll to horizontal movement (translateX) of the text.

//   const targetRef = useRef<HTMLDivElement | null>(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     // offset: ['start end', 'end start'] // Adjust offset based on when you want the animation to start/end relative to this section.
//                                       // For horizontal scroll of a pinned element, it's often more about the height of the trigger container.
//   });

//   // This is a simplified placeholder. A true horizontal scroll would map scrollYProgress
//   // to a translateX value, e.g., from 0 to - (textWidth - containerWidth).
//   // Example: const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]); // -50% or whatever makes sense for your text width

//   // The actual translateX will depend on the width of the scrolling text content
//   // and the width of the viewport or pinned container.
//   // For instance, if the text "Our History" is 1000px wide and you want it to scroll fully
//   // out of view from a 300px wide viewport, the transform might go from '0px' to '-700px'.
//   // You might need to measure the text element's width with another ref.
//   const textX = useTransform(scrollYProgress, [0.1, 0.9], ['50vw', '-150vw']); // Adjust these values drastically based on text width and desired scroll distance.
//                                                                         // This is a large translation to make it visibly move a lot.

//   return (
//     // This outer div represents the section that triggers the animation.
//     // Its height would determine how long the "pinning" and horizontal scroll effect lasts.
//     // In a real scenario, this might be `min-h-[300vh]` or similar to give scroll room.
//     <div ref={targetRef} className="relative h-[200vh] bg-tkxel-primary"> {/* Ensure enough height for scroll effect */}
//       {/* Sticky container to achieve the "pinning" effect for the text */}
//       <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
//         {/* The element that will scroll horizontally */}
//         <motion.div
//           style={{ x: textX }} // Apply the horizontal transform
//           className="whitespace-nowrap" // Prevent text from wrapping
//         >
//           <h2
//             className="text-white text-[200px] sm:text-[300px] md:text-[400px] font-black uppercase tracking-wider anim_text"
//             // text-tkxel-light (or text-white if the original CSS for anim_text is light on dark blue)
//             // The original uses `font-size: 400px` directly in CSS. Tailwind equivalent could be custom.
//             // Letter-spacing: 4px; (tracking-wider might be close, or a custom utility)
//             // white-space: nowrap;
//             // padding-right: clamp(48px, 5vw, 80px); -> This will be part of the overall text element that scrolls
//           >
//             Our History
//           </h2>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// const HeroSection = () => {
//   return (
//     // The original has a complex structure with 'anim-wrapper', 'fixed-bottom', 'banner_boxed_bg'
//     // For simplicity, we'll make a basic hero section.
//     // Replicating the original's scroll-based pinning and text transitions is advanced.
//     <div className="relative min-h-screen flex items-center justify-center bg-tkxel-secondary text-tkxel-light px-4 md:px-8 overflow-hidden">
//       {/* This simulates the inner_box background for the text */}
//       <div className="absolute inset-0 flex items-center justify-center p-5 md:p-10">
//         <motion.div
//           className="w-full h-[calc(100vh-var(--header-h)-40px)] bg-tkxel-secondary rounded-lg flex items-center justify-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <h1 className="text-dynamic-hero font-bold text-center leading-tight">
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.5 }}
//               className="block" // Each part of the text for staggered animation
//             >
//               We drive growth
//             </motion.span>
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.8 }}
//               className="block"
//             >
//               and shape the
//             </motion.span>
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 1.1 }}
//               className="block"
//             >
//               digital future.
//             </motion.span>
//           </h1>
//         </motion.div>
//       </div>

//       {/* Simplified image group - original uses absolute positioning and complex animations */}
//       {/* For a real clone, you'd download these images and place them in /public */}
//       <motion.div
//         className="absolute inset-0 z-0 opacity-30 mix-blend-overlay" // For subtle background imagery
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 0.15 }}
//         transition={{ duration: 1, delay: 1.5 }}
//       >
//         {/* Placeholder images - replace with actual image paths and adjust Tailwind for layout */}
//         <Image src="/images/company/image-1.png" alt="Abstract Background 1" layout="fill" objectFit="cover" className="opacity-50" />
//       </motion.div>
//     </div>
//   );
// };



// const storyImages = [
//   {
//     src: "/images/company/story/UJ-1-e1712053296673-1.png", // Replace with your actual path
//     alt: "University Lab Beginnings",
//   },
//   {
//     src: "/images/company/story/LUMS-1.jpg", // Replace with your actual path
//     alt: "Tkxel Growth Journey",
//   },
//   {
//     src: "/images/company/story/Wajih-1-e1712053648993.png", // Replace with your actual path
//     alt: "Tkxel Team Innovation",
//   },
// ];

// const OurStory = () => {
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 20 },
//     visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <motion.section
//       className="py-16 md:py-24 lg:py-32 bg-white px-4 md:px-global_x_padding" // Assuming global_x_padding defined in tailwind.config
//       variants={sectionVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of the section is in view
//     >
//       <div className="container mx-auto max-w-content_width"> {/* Assuming content_width defined */}
//         <motion.h2
//           className="text-3xl sm:text-4xl lg:text-[56px] font-bold text-tkxel-secondary mb-12 md:mb-16 lg:mb-20 text-center leading-tight max-w-3xl mx-auto"
//           variants={itemVariants}
//         >
//           Born in a university lab (2008), with the passion to architect the digital future of businesses
//         </motion.h2>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
//           variants={sectionVariants} // Re-using sectionVariants for staggered children
//         >
//           {storyImages.map((image, index) => (
//             <motion.div
//               key={index}
//               className="rounded-2xl md:rounded-3xl overflow-hidden shadow-xl aspect-[4/3] md:aspect-auto md:h-[300px] lg:h-[400px] xl:h-[450px] elementor-element-f39a458" // added original class for ref
//               variants={itemVariants}
//             >
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 width={600} // Original aspect ratio maintained more by object-cover
//                 height={450}
//                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// const locations = [
//   { name: "USA", bgImage: "/images/company/locations/usa-bg.png" }, // Replace with actual images
//   { name: "UAE", bgImage: "/images/company/locations/uae-bg.png" },
//   { name: "Canada", bgImage: "/images/company/locations/canada-bg.png" },
//   { name: "UK", bgImage: "/images/company/locations/uk-bg.png" },
//   { name: "Portugal", bgImage: "/images/company/locations/portugal-bg.png" },
//   { name: "Pakistan", bgImage: "/images/company/locations/pakistan-bg.png" },
// ];

// const GlobalPresence = () => {
//   const sectionVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.15 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30, scale: 0.9 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
//   };

//   return (
//     <motion.section
//       className="py-16 md:py-24 lg:py-32 bg-tkxel-light px-4 md:px-global_x_padding"
//       variants={sectionVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//     >
//       <div className="container mx-auto max-w-content_width">
//         <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-20">
//           {/* Left Side - Heading */}
//           <motion.div className="lg:w-1/3 text-center lg:text-left" variants={itemVariants}>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-tkxel-secondary leading-tight">
//               Now operating across six diverse international locations
//             </h2>
//           </motion.div>

//           {/* Right Side - Location Cards Grid */}
//           <motion.div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6" variants={sectionVariants}>
//             {locations.map((location, index) => (
//               <motion.div
//                 key={location.name}
//                 className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-video md:aspect-[5/4] flex items-end justify-center p-4 md:p-6 shadow-lg elementor-element-ff70664" // Ref class
//                 style={{
//                   // The original uses background images for these cards
//                   // Ensure these image paths are correct in your /public folder
//                   backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.14) 50%, #000000 100%), url('${location.bgImage}')`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center center',
//                 }}
//                 variants={itemVariants}
//               >
//                 <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white z-10 text-center">
//                   {location.name}
//                 </h3>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// const awards = [
//   { src: "/images/company/awards/INC-5000.svg", alt: "Inc 5000", title: "Inc 5000<br/>2023", tierClass: "awards-logo-tier3" },
//   { src: "/images/company/awards/FT.svg", alt: "Financial Times", title: "Financial<br/>Times", tierClass: "awards-logo-tier2" },
//   { src: "/images/company/awards/clutch.svg", alt: "Clutch", title: "Top B2B Companies<br/>2022" },
//   { src: "/images/company/awards/forbes.svg", alt: "Forbes", title: "Official Members<br/>Forbes 2019" },
//   { src: "/images/company/awards/mogul.svg", alt: "Mogul", title: "Mogul 2022<br/>People Leader and CHROs", tierClass: "awards-logo-tier2" },
//   { src: "/images/company/awards/good-firms.svg", alt: "GoodFirms", title: "Top IT Companies<br/>2018", tierClass: "awards-logo-tier3" },
// ];






// const cultureImages = [
//   { src: "/images/company/culture/image-650-e1714122926495.png", alt: "Tkxel Team Event 1", span: "col-span-1 md:col-span-1 row-span-1 md:row-span-2" }, // Tall image
//   { src: "/images/company/culture/327146805_6012516732120251_4118021952877874846_n-1.jpg", alt: "Tkxel Team Collaboration", span: "col-span-1" },
//   { src: "/images/company/culture/Tkxel-concert.png", alt: "Tkxel Concert", span: "col-span-1" },
//   { src: "/images/company/culture/Photo-75-1.jpg", alt: "Tkxel Team Outing", span: "col-span-1 md:col-span-2 row-span-1" }, // Wide image
// ];
// // The original structure had 2 images in first column, then one big one. Let's try to approximate a flexible grid.
// // Original classes used complex widths (55%, 50%-8px etc.) which is hard to replicate with simple grid unless it is specific layout

// const TeamCulture = () => {
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.15 },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20, filter: "grayscale(100%)" },
//     visible: { opacity: 1, y: 0, filter: "grayscale(0%)", transition: { duration: 0.6, ease: 'easeOut' } },
//   };

//   // Approximating the Tkxel image layout is tricky with a simple Tailwind grid
//   // They use specific height percentages (50% - 8px) which are Elementor layout specific.
//   // This example will use a more standard responsive grid, but the layout won't be identical.
//   // For a closer match, a more complex grid setup or absolute positioning would be needed.

//   return (
//     <motion.section
//       className="py-16 md:py-24 lg:py-32 bg-white px-4 md:px-global_x_padding"
//       variants={sectionVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//     >
//       <div className="container mx-auto max-w-content_width text-center">
//         <motion.h2
//           className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-tkxel-secondary mb-12 md:mb-16 lg:mb-20 max-w-3xl mx-auto leading-tight"
//           variants={itemVariants} // Re-use for simple entrance
//         >
//           ...and that’s how we uplift our culture and encourage teamwork
//         </motion.h2>

//         {/* Simplified Masonry-like grid, actual Tkxel layout is more custom via Elementor containers */}
//         <motion.div
//           className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
//           // The original is not a simple uniform grid. Elementor section 11178
//           // .elementor-element-7842a4a { --width: 55% }
//           // .elementor-element-98f0699 { --width: 45% }
//           // The images inside 7842a4a also have 50% height distribution.
//           // This is difficult to achieve perfectly with pure Tailwind grid without specific heights.
//           // This grid is a general representation.
//           variants={sectionVariants}
//         >
//           {cultureImages.map((image, index) => (
//             <motion.div
//               key={index}
//               // Example for specific spanning if we had fewer images in a more structured grid:
//               // className={`rounded-2xl md:rounded-3xl overflow-hidden shadow-xl ${
//               //   index === 0 ? 'md:col-span-2 md:row-span-2' : index === 3 ? 'md:col-span-2' : ''
//               // }`}
//               className={`rounded-2xl md:rounded-3xl overflow-hidden shadow-xl aspect-square md:aspect-[4/3] ${image.span || 'col-span-1 row-span-1'}`}
//               variants={itemVariants}
//             >
//               <Image
//                 src={image.src}
//                 alt={image.alt}
//                 width={600}
//                 height={450}
//                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
//               />
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// const initiatives = [
//   {
//     icon: "/images/company/community/Icon-1.svg", // Replace with actual paths
//     title: "Education and Health Initiatives",
//     description: "We’re dedicated to enriching lives by funding education and healthcare. By supporting educational programs, we aim to ignite minds and shape futures. In healthcare, our contributions focus on enhancing wellness and accessibility, ensuring communities not only grow but also thrive.",
//     bgColor: "bg-[#ffe500]", // Original: #ffe500 (yellow)
//     textColor: "text-tkxel-secondary", // Usually black on light backgrounds
//     imgAlt: "Education and Health Icon"
//   },
//   {
//     icon: "/images/company/community/Icon-2.svg",
//     title: "Environment and Sustainability",
//     description: "We’re eco-conscious and promote eco-friendly practices like video conferencing to reduce travel, prioritize energy efficient workspaces, and emphasize recycling.",
//     bgColor: "bg-[#80ff00]", // Original: #80ff00 (light green)
//     textColor: "text-tkxel-secondary",
//     movedCard: true, // Original had 'moved-card' class, maybe for slight offset/animation
//     imgAlt: "Environment Icon"
//   },
//   {
//     icon: "/images/company/community/Icon-3.svg",
//     title: "Social and Employee Welfare",
//     description: "We support inclusivity, mental well-being, and work-life balance. Our flexible hybrid model supports remote work and mutual respect.",
//     bgColor: "bg-[#00ffe0]", // Original: #00ffe0 (cyan)
//     textColor: "text-tkxel-secondary",
//     imgAlt: "Social Welfare Icon"
//   },
//   {
//     icon: "/images/company/community/Icon-4.svg",
//     title: "Knowledge Sharing Hub",
//     description: "We’re committed to learning and development of communities. We share IT and other key business areas knowledge through webinars, workshops, and philanthropic initiatives for individual and societal betterment.",
//     bgColor: "bg-[#ffe500]", // Original reused yellow
//     textColor: "text-tkxel-secondary",
//     movedCard: true,
//     imgAlt: "Knowledge Hub Icon"
//   },
//   {
//     icon: "/images/company/community/Icon-5.svg",
//     title: "Community Engagement",
//     description: "Our dedication to CSR goes beyond our office walls. We engages with local communities through various initiatives like education, sponsor events, and engage in community service to create a positive impact.",
//     bgColor: "bg-[#80ff00]", // Original reused light green
//     textColor: "text-tkxel-secondary",
//     imgAlt: "Community Engagement Icon"
//   },
// ];

// const CommunityFocus = () => {
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.15 },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 30, scale: 0.95 },
//     visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
//   };

//   return (
//     <motion.section
//       className="py-16 md:py-24 lg:py-32 bg-white px-4 md:px-global_x_padding"
//       variants={sectionVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//     >
//       <div className="container mx-auto max-w-content_width text-center">
//         <motion.h2
//           className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-tkxel-secondary mb-12 md:mb-16 lg:mb-20 max-w-2xl mx-auto leading-tight"
//           variants={cardVariants} // Using cardVariants for consistent simple entrance
//         >
//           Now we are Thriving to give back to the community
//         </motion.h2>

//         {/* The original had a 2xN and then a 1x1 grid for the last item.
//             This uses a simpler responsive grid. A CSS grid or more complex flexbox would be needed for exact match.
//             Tailwind's default grid can't easily do the "moved-card" offset purely with classes.
//         */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
//           variants={sectionVariants}
//         >
//           {initiatives.map((item, index) => (
//             <motion.div
//               key={item.title}
//               className={`p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl flex flex-col items-start text-left shadow-xl transform transition-all duration-300 hover:-translate-y-2 ${item.bgColor} ${item.movedCard && index % 2 !== 0 && 'lg:translate-y-12'}`}
//               // Added `lg:translate-y-12` for the moved-card effect on larger screens if it's an odd index in the list.
//               // This is a simplified way to achieve an offset; original CSS might be more complex.
//               variants={cardVariants}
//               style={{ minHeight: '350px' }} // Ensure cards have enough height for content
//             >
//               <div className="mb-4 md:mb-6">
//                 <Image src={item.icon} alt={item.imgAlt} width={48} height={48} className="object-contain" />
//               </div>
//               <h3 className={`text-xl md:text-2xl font-semibold mb-3 md:mb-4 ${item.textColor}`}>
//                 {item.title}
//               </h3>
//               <p className={`text-sm md:text-base leading-relaxed ${item.textColor} opacity-90`}>
//                 {item.description}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// interface AchievementCardProps {
//   imageUrl: string;
//   altText: string;
//   title: string; // Can include <br/> for line breaks
//   tierClass?: string; // Optional for specific styling variations
//   delay?: number;
// }

// const AchievementCard: React.FC<AchievementCardProps> = ({
//   imageUrl,
//   altText,
//   title,
//   tierClass,
//   delay = 0,
// }) => {
//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 20 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: { duration: 0.5, delay },
//     },
//   };

//   return (
//     <motion.div
//       className={`bg-tkxel-light w-full p-4 sm:p-6 rounded-xl md:rounded-2xl flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-square ${tierClass || ''}`}
//       variants={cardVariants}
//       // Add min-h-[160px] md:min-h-[200px] or similar if fixed height is desired rather than just aspect-square
//     >
//       <div className="h-16 md:h-20 lg:h-24 w-full flex items-center justify-center mb-2 md:mb-3">
//         <Image
//           src={imageUrl} // Example: /images/company/awards/INC-5000.svg
//           alt={altText}
//           width={100} // Default width, adjust if needed or make it a prop
//           height={80} // Default height
//           className="max-h-full max-w-full object-contain"
//         />
//       </div>
//       <h4
//         className="text-xs sm:text-sm font-semibold text-tkxel-secondary leading-tight mt-auto" // mt-auto to push text to bottom
//         dangerouslySetInnerHTML={{ __html: title }} // Allows <br/> tags in title
//       />
//     </motion.div>
//   );
// };

// const achievementsList = [
//   {
//     imageUrl: "/images/company/awards/INC-5000.svg", // Replace with your actual path
//     altText: "Inc 5000 Award Logo",
//     title: "Inc 5000<br/>2023",
//     tierClass: "awards-logo-tier3" // Optional: example class if some need different styling
//   },
//   {
//     imageUrl: "/images/company/awards/FT.svg",
//     altText: "Financial Times Award Logo",
//     title: "Financial<br/>Times",
//     tierClass: "awards-logo-tier2"
//   },
//   {
//     imageUrl: "/images/company/awards/clutch.svg",
//     altText: "Clutch Award Logo",
//     title: "Top B2B<br/>Companies 2022"
//   },
//   {
//     imageUrl: "/images/company/awards/forbes.svg",
//     altText: "Forbes Award Logo",
//     title: "Official Members<br/>Forbes 2019"
//   },
//   {
//     imageUrl: "/images/company/awards/mogul.svg",
//     altText: "Mogul Award Logo",
//     title: "Mogul 2022 People<br/>Leader and CHROs",
//     tierClass: "awards-logo-tier2"
//   },
//   {
//     imageUrl: "/images/company/awards/good-firms.svg",
//     altText: "GoodFirms Award Logo",
//     title: "Top IT Companies<br/>2018",
//     tierClass: "awards-logo-tier3"
//   },
//   // Add more achievements if needed, following the same structure
//   // For example, if there are 12 awards for a 6-column layout on large screens
//   // { imageUrl: "/images/company/awards/placeholder.svg", altText: "Award 7", title: "Placeholder<br/>Award" },
//   // { imageUrl: "/images/company/awards/placeholder.svg", altText: "Award 8", title: "Placeholder<br/>Award" },
//   // { imageUrl: "/images/company/awards/placeholder.svg", altText: "Award 9", title: "Placeholder<br/>Award" },
//   // { imageUrl: "/images/company/awards/placeholder.svg", altText: "Award 10", title: "Placeholder<br/>Award" },
//   // { imageUrl: "/images/company/awards/placeholder.svg", altText: "Award 11", title: "Placeholder<br/>Award" },
//   // { imageUrl: "/images/company/awards/placeholder.svg", altText: "Award 12", title: "Placeholder<br/>Award" },
// ];

// const Achievements = () => {
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.05 }, // Slower stagger for many items
//     },
//   };

//   // This item variant is now primarily handled by AchievementCard, but kept for the heading
//   const headingVariant = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <motion.section
//       className="py-16 md:py-24 lg:py-32 bg-white px-4 md:px-global_x_padding"
//       // Using global_x_padding assuming it's defined like:
//       // `px-4 sm:px-6 lg:px-8 xl:px-20` in your main layout or a global CSS/Tailwind layer
//       variants={sectionVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }} // Trigger when 10% of section is visible
//     >
//       <div className="container mx-auto max-w-content_width text-center">
//         <motion.h2
//           className="text-3xl sm:text-4xl lg:text-[56px] font-bold text-tkxel-secondary mb-12 md:mb-16 lg:mb-20"
//           variants={headingVariant} // Apply variant to heading
//         >
//           We’ve also been<br className="sm:hidden" /> recognized globally {/* Break line on small screens */}
//         </motion.h2>

//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 place-items-stretch"
//           // `place-items-stretch` makes grid items fill the cell height if they have varying content heights
//           // but since we are using `aspect-square` in AchievementCard, this might not be strictly necessary for alignment
//           variants={sectionVariants} // Parent will handle initial animation, children stagger based on cardVariants
//         >
//           {achievementsList.map((achievement, index) => (
//             <AchievementCard
//               key={achievement.altText + index} // More unique key
//               imageUrl={achievement.imageUrl}
//               altText={achievement.altText}
//               title={achievement.title}
//               tierClass={achievement.tierClass}
//               delay={index * 0.05} // Individual delay for stagger effect handled by AchievementCard itself
//             />
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// const partnersList = [
//   {
//     logoUrl: "/images/company/partners/salesforce-logo.svg", // Replace with your actual path
//     altText: "Salesforce Partner Logo",
//     name: "Salesforce",
//   },
//   {
//     logoUrl: "/images/company/partners/aws-logo.svg",
//     altText: "AWS Partner Logo",
//     name: "AWS",
//   },
//   {
//     logoUrl: "/images/company/partners/ms-logo.svg",
//     altText: "Microsoft Partner Logo",
//     name: "Microsoft",
//   },
//   // Add more if desired, the grid will adapt.
// ];

// const Collaborations = () => {
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.1 },
//     },
//   };

//   const headingVariant = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   return (
//     <motion.section
//       className="py-16 md:py-24 lg:py-32 bg-tkxel-light px-4 md:px-global_x_padding"
//       // bg-tkxel-light matches the section background after achievements, adjust if needed
//       variants={sectionVariants}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.1 }}
//     >
//       <div className="container mx-auto max-w-content_width text-center">
//         <motion.h2
//           className="text-3xl sm:text-4xl lg:text-[56px] font-bold text-tkxel-secondary mb-12 md:mb-16 lg:mb-20"
//           variants={headingVariant}
//         >
//           ...and built strong<br className="sm:hidden" /> partnerships with
//         </motion.h2>

//         <motion.div
//           className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 place-items-stretch max-w-4xl mx-auto"
//           // max-w-4xl mx-auto to center the grid if there are fewer items, e.g., just 3.
//           // The original uses .elementor-element-27a0f3a which has --content-width: 1360px
//           // but the cards within (.elementor-element-726fd5e) have --width: 200px so they are small.
//           // We can achieve this effect with the max-w on the grid or by setting explicit widths on PartnerCard if needed.
//           variants={sectionVariants}
//         >
//           {partnersList.map((partner, index) => (
//             <PartnerCard
//               key={partner.name + index}
//               logoUrl={partner.logoUrl}
//               altText={partner.altText}
//               name={partner.name}
//               delay={index * 0.1}
//             />
//           ))}
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };


// interface PartnerCardProps {
//   logoUrl: string;
//   altText: string;
//   name: string;
//   delay?: number;
// }

// const PartnerCard: React.FC<PartnerCardProps> = ({
//   logoUrl,
//   altText,
//   name,
//   delay = 0,
// }) => {
//   const cardVariants = {
//     hidden: { opacity: 0, y: 30, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 0.5, delay },
//     },
//   };

//   return (
//     <motion.div
//       className="bg-white w-full p-4 sm:p-6 rounded-xl md:rounded-2xl flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-square"
//       // The original page cards have --min-height: 200px for elementor-10968 elementor-element-726fd5e (one of the card containers)
//       // You can add `min-h-[160px] md:min-h-[200px]` to ensure a minimum height.
//       variants={cardVariants}
//     >
//       <div className="h-20 md:h-24 lg:h-28 w-full flex items-center justify-center mb-3 md:mb-4">
//         <Image
//           src={logoUrl} // Example: /images/company/partners/salesforce-logo.svg
//           alt={altText}
//           width={120} // Adjust as needed for partner logos
//           height={60}  // Adjust
//           className="max-h-full max-w-[80%] object-contain" // max-w to prevent extra wide logos from filling too much
//         />
//       </div>
//       <h4 className="text-sm sm:text-base font-semibold text-tkxel-secondary mt-auto">
//         {name}
//       </h4>
//     </motion.div>
//   );
// };



const Test = () => {
  return (
    <div>Test</div>
  )
}

export default Test