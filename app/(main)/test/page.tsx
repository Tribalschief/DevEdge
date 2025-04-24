// // 'use client'

import { useState } from "react"

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

const faqs = [
  {
    question: 'How can DevEdge help protect my business from cyber threats?',
    answer:
      `We offer end-to-end cybersecurity solutions from risk assessments and penetration testing to cloud security, incident response, and digital forensics. Whether you're concerned about ransomware, phishing, or insider threats, our team helps you build a secure and resilient digital environment.`,
  },
  {
    question: 'What makes your cybersecurity approach unique?',
    answer:
      `We combine technical depth (OSCP, CISSP-certified professionals) with business-aligned strategies, ensuring protection that fits your industry, risk profile, and compliance needs not just generic IT fixes.`,
  },
  {
    question: 'Does DevEdge provide secondment or outsourced professional resources?',
    answer:
      `Yes, DevEdge offers secondment services by providing skilled professionals who can work on-site or remotely as an extension of your internal team. Whether you need support in internal audit, cybersecurity, IT, finance, HR, or compliance, our certified experts can fill temporary gaps, support special projects, or help scale your team during critical periods all while maintaining full alignment with your business goals and standards`,
  },
  {
    question: 'Can DevEdge set up or improve my internal audit function?',
    answer:
      `Absolutely. We help businesses set up, transform, or co-source internal audit departments, design risk-based audit plans, and implement digital audit tools aligning with IIA standards and local regulations.`,
  },
  {
    question: 'What makes your cybersecurity approach unique?',
    answer:
      `We combine technical depth (OSCP, CISSP-certified professionals) with business-aligned strategies, ensuring protection that fits your industry, risk profile, and compliance needs not just generic IT fixes.`,
  },{
    question: 'Do you provide support with regulatory compliance and risk controls?',
    answer:
      `Yes. Our GRC experts help you design frameworks, assess third-party risks, implement IT controls, and meet compliance requirements for standards like ISO, NCA, and local data protection laws (PDPL, DIFC, etc.).`,
  },{
    question: 'What is your approach to multi-cloud solutions?',
    answer:
      `We design, implement, and manage multi-cloud environments using AWS, Azure, Google Cloud, or hybrid models. Our focus is on cost optimization, security, and business continuity, ensuring your cloud infrastructure aligns with your goals.`,
  },{
    question: 'Can you help migrate my legacy systems to the cloud?',
    answer:
      `Yes. From assessment to execution, we provide seamless migration services, hybrid cloud integration, and performance optimization with minimal downtime and full compliance assurance.`,
  },{
    question: 'What support does DevEdge offer in HR and people strategy?',
    answer:
      `DevEdge provides comprehensive support in workforce planning, organizational design, talent risk assessments, and leadership development helping you align your human capital strategy with your business goals.
We also offer a customized HR management solution that includes modules for onboarding, payroll, performance management, employee engagement, and compliance tailored to fit your organization’s specific needs and structure.
`,
  },
]


export default function ABC() {
  // const [openIndex, setOpenIndex] = useState<number | null>(0)

  // const toggle = (index: number) =>
  //   setOpenIndex(openIndex === index ? null : index)

  return (
    // <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    //   <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
    //     <span className="text-black">Frequently Ask </span>
    //     <span className="text-purple-600 block">Questions</span>
    //   </h2>

    //   <div className="space-y-5">
    //     {faqs.map((faq, i) => {
    //       const isOpen = openIndex === i
    //       return (
    //         <motion.div
    //           key={i}
    //           layout
    //           initial={{ borderRadius: 12 }}
    //           className="bg-white shadow-sm rounded-md border overflow-hidden"
    //         >
    //           <div className="flex justify-between items-start sm:items-center">
    //             <div className="p-4 pr-2 w-full">
    //               <p className="font-semibold text-base sm:text-lg">
    //                 {String(i + 1).padStart(2, '0')} {faq.question}
    //               </p>

    //               <AnimatePresence>
    //                 {isOpen && (
    //                   <motion.div
    //                     initial={{ opacity: 0, height: 0 }}
    //                     animate={{ opacity: 1, height: 'auto' }}
    //                     exit={{ opacity: 0, height: 0 }}
    //                     transition={{ duration: 0.3 }}
    //                     className="overflow-hidden mt-2 text-gray-600 text-sm sm:text-base"
    //                   >
    //                     {faq.answer}
    //                   </motion.div>
    //                 )}
    //               </AnimatePresence>
    //             </div>

    //             {/* Toggle Button */}
    //             <motion.button
    //               onClick={() => toggle(i)}
    //               animate={{
    //                 rotate: isOpen ? 180 : 0,
    //               }}
    //               transition={{ type: 'spring', stiffness: 300 }}
    //               className={`w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl transition-colors duration-300 ${
    //                 isOpen
    //                   ? 'bg-purple-700 text-white'
    //                   : 'bg-gray-300 text-black'
    //               }`}
    //             >
    //               {isOpen ? '−' : '+'}
    //             </motion.button>
    //           </div>
    //         </motion.div>
    //       )
    //     })}
    //   </div>
    // </div>
    <div>
      Heloo
    </div>
  )
}

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