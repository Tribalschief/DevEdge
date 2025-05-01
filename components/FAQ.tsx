

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
    question: 'Do you provide support with regulatory compliance and risk controls',
    answer:
      `Yes. Our GRC experts help you design frameworks, assess third-party risks, implement IT controls, and meet compliance requirements for standards like ISO, NCA, and local data protection laws (PDPL, DIFC, etc.).`,
  }
  ,{
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


export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold  mb-10">
        <span className="text-black">Frequently Ask </span>
        <span className="text-purple-600 block">Questions</span>
      </h2>

      <div className="space-y-5">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <motion.div
              key={i}
              layout
              initial={{ borderRadius: 12 }}
              className="bg-white shadow-sm rounded-md border overflow-hidden"
            >
              <div className="flex justify-between items-start sm:items-center">
                <div className="p-4 pr-2 w-full">
                  <p className="font-semibold text-base sm:text-lg">
                    {String(i + 1).padStart(2, '0')} {faq.question}
                  </p>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-2 text-gray-600 text-sm sm:text-base"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Toggle Button */}
                <motion.button
                  onClick={() => toggle(i)}
                  animate={{
                    rotate: isOpen ? 180 : 0,
                  }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center font-bold text-xl sm:text-2xl transition-colors duration-300 ${
                    isOpen
                      ? 'bg-purple-700 text-white'
                      : 'bg-gray-300 text-black'
                  }`}
                >
                  {isOpen ? '−' : '+'}
                </motion.button>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// "use client";

// import { useState } from "react";
// import { Plus, Minus } from "lucide-react"; // optional icon lib

// const faqs = [
//   {
//     id: 1,
//     question: "Lorem ipsum dolor sit amet consectetur. Sagittis id.",
//     answer:
//       "Lorem ipsum dolor sit amet consectetur. In augue ipsum tellus ultrices. Ac pharetra ultrices consectetur consequat tellus massa. Nec aliquam cras sagittis duis sed euismod arcu hac...",
//   },
//   {
//     id: 2,
//     question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
//   },
//   {
//     id: 3,
//     question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
//   },
//   {
//     id: 4,
//     question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
//   },
//   {
//     id: 5,
//     question: "Lorem ipsum dolor sit amet consectetur. Viverra.",
//   },
// ];

// export default function FaqAccordion() {
//   const [openIndex, setOpenIndex] = useState(0);

//   const toggle = (index: number) => {
//     setOpenIndex((prev) => (prev === index ? -1 : index));
//   };

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-12">
//       <h2 className="text-3xl font-bold text-black">
//         <span className="block">FREQUENTLY</span>
//         <span className="block">
//           ASK <span className="text-purple-600">QUESTIONS</span>
//         </span>
//       </h2>

//       <div className="mt-8 space-y-4">
//         {faqs.map((faq, idx) => (
//           <div
//             key={faq.id}
//             className="rounded-md border border-gray-200 overflow-hidden"
//           >
//             <button
//               onClick={() => toggle(idx)}
//               className={`w-full text-left px-4 py-4 flex justify-between items-center font-medium ${
//                 openIndex === idx ? "bg-purple-600 text-white" : "bg-white text-black"
//               }`}
//             >
//               <div className="flex gap-2">
//                 <span className="font-semibold text-lg">0{faq.id}</span>
//                 <span>{faq.question}</span>
//               </div>
//               <span className="text-xl">
//                 {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
//               </span>
//             </button>
//             {openIndex === idx && faq.answer && (
//               <div className="bg-white px-4 pb-4 text-gray-700 text-sm leading-relaxed">
//                 {faq.answer}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
