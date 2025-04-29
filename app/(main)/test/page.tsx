// // 'use client'
"use client";
import { useState } from "react"
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logoremovebg.png";
import cv from "@/public/CV.png"

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
import {
  Building2,
  LandmarkIcon,
  Store,
  Wallet,
  Heart,
  Ship,
  Zap,
  ShoppingCart,
  Factory,
  GraduationCap,
  Cpu,
  Radio,
  Hammer,
  UtensilsCrossed,
} from "lucide-react"

const services = [
  "Internal Audit",
  "Cybersecurity Services",
  "Multi-Cloud Services",
  "Intelligent Enterprise Systems & Application Development Services",
  "Analytics And Artificial Intelligence Services",
  "Digital Transformation & Business Automation",
  "Business Continuity Management (BCM) Services",
  "Technology Consulting And GRC (Governance, Risk & Compliance)",
  "Precision Data Management & Privacy Services",
  "Integrated Accounting & Financial Advisory Services",
  "Risk Management & Human Capital Advisory",
  "Industrial Control Systems (ICS) & OT Security Services",
  "Fixed Asset Management",
];

interface IndustryCardProps {
  title: string
  icon: React.ReactNode
  color: string
  description: string
  colorTop?: string
  colorBottom?: string
  number: number
}

const industries = [
    { description:"Lorem ipsum", title: "Banking", icon: <Building2 size={18} />, color: "#FF3366" },
    { description:"Lorem ipsum", title: "Government & Public Services", icon: <LandmarkIcon size={18} />, color: "#FF9933" },
    { description:"Lorem ipsum", title: "Retail and Real Estate", icon: <Store size={18} />, color: "#FFCC33" },
    { description:"Lorem ipsum", title: "Financial Services", icon: <Wallet size={18} />, color: "#66CC66" },
    { description:"Lorem ipsum", title: "Health Care", icon: <Heart size={18} />, color: "#9933CC" },
    { description:"Lorem ipsum", title: "Shipping and Logistics", icon: <Ship size={18} />, color: "#666699" },
    { description:"Lorem ipsum", title: "Energy", icon: <Zap size={18} />, color: "#3399FF" },
    { description:"Lorem ipsum", title: "Consumer", icon: <ShoppingCart size={18} />, color: "#33CCCC" },
    { description:"Lorem ipsum", title: "Power and Industrial Control System", icon: <Factory size={18} />, color: "#CC3333" },
    { description:"Lorem ipsum",title: "Education", icon: <GraduationCap size={18} />, color: "#999999" },
    { description:"Lorem ipsum",title: "Technology", icon: <Cpu size={18} />, color: "#6666CC" },
    { description:"Lorem ipsum", title: "Media & Telecommunications", icon: <Radio size={18} />, color: "#CC66CC" },
    { description:"Lorem ipsum",title: "Manufacturing", icon: <Hammer size={18} />, color: "#99CC33" },
    { description:"Lorem ipsum",title: "Hospitality", icon: <UtensilsCrossed size={18} />, color: "#CCCCCC" },
  ]

  const IndustryCard = ({ title, icon, number, description }: IndustryCardProps) => {
    return (
      <div className="relative p-[2px] rounded-lg bg-[linear-gradient(180deg,#6A0DAD,#00E0FF)] w-full max-w-xs ">
  {/* Floating Icon - moved outside the inner card but still centered */}
  <div className="absolute z-10 -top-8 left-1/2 transform -translate-x-1/2">
    <div className="bg-white p-4 rounded-full border-2 shadow-md" style={{ borderColor: "linear-gradient(90deg,#6A0DAD,#00E0FF)" }}>
      {icon}
    </div>
  </div>
  
  {/* Inner white card */}
  <div className="bg-white rounded-lg pt-10 pb-6 px-6 text-center relative overflow-hidden">
    {/* Number at top-right */}
    <span className="absolute top-1 left-2 text-2xl font-bold text-gray-700">
      {number}
    </span>

    {/* Title */}
    <h3 className="text-sm font-bold text-purple-700 uppercase mb-2 leading-tight">
      {title}
    </h3>

    {/* Description */}
    <p className="text-gray-600 text-xs leading-relaxed">
      {description}
    </p>
  </div>
</div>
    );
  };
  
  
const AnyGrid = () =>{
  return (<div className="px-4 md:py-12 max-w-7xl mx-4 sm:mx-6 md:mx-10 lg:mx-48">
    <div className="flex  flex-wrap justify-center gap-6">
  {industries.map((industry, index) => (
    <div 
      key={index} 
      className="w-full sm:w-[calc(50%-12px)] mt-4 lg:w-[calc(25%-18px)]"
    >
      <IndustryCard
        title={industry.title}
        icon={industry.icon}
        color={industry.color}
        number={index + 1}
        description={industry.description}
      />
    </div>
  ))}
</div>
</div>)
}
  
 function NewServicesList() {
  return (

    <div className="relative flex flex-col items-center mt-16 sm:mt-24 md:mt-32 px-4 sm:px-6 lg:px-8 justify-center">
      {/* Heading */}
      <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center tracking-widest text-purple-700">
        OUR SERVICES
      </h2>

      {/* Content Box */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-black rounded-lg p-4 sm:p-6 md:p-8 border-4 border-b-[10px] border-black shadow-2xl">
        {/* Gradient Strip */}
        <div className="absolute left-0 top-0 h-full w-3 sm:w-4 md:w-6 bg-gradient-to-b from-purple-500 to-blue-500" />
        
        <div className="space-y-2 sm:space-y-3 md:space-y-4 ml-4 sm:ml-6">
          {services.map((service, index) => (
            <div key={index} className="flex items-start space-x-2 sm:space-x-3">
              <span className="font-bold min-w-[20px]">{index + 1}.</span>
              <p className="text-xs sm:text-sm md:text-base">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

function Overview({ overview = "No overview available." }: { overview?: string }) {
  return (
    <div
      
      className="w-auto h-full mt-[50px] mx-4 sm:mx-6 md:mx-10 lg:mx-48 rounded-lg"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center lg:text-left">Overview</h2>
      <p className="mt-4 text-sm sm:text-base md:text-lg text-muted-foreground text-center lg:text-left">
        {overview}
      </p>
    </div>
  )
}

export default function AllGrid(){
  return (
    <div className="relative w-full mx-auto   py-12 md:py-24">
      {/* Main content container */}
      <div className="flex flex-col lg:flex-row l gap-8">
        {/* Left column with Overview and AnyGrid */}
        <div className="flex flex-col lg:w-2/3">
          <Overview overview="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat." />
          
          <div className="mx-auto mt-8">
            <AnyGrid />
          </div>
        </div>
        
        {/* Right column with ServicesList */}
        <div className="lg:w-1/3">
          <NewServicesList />
        </div>
      </div>
    </div>
  )
}
 
 
