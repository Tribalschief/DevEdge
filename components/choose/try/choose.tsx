"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

// Import SVGs
import core01 from "@/public/why/Global Expertise.svg"
import core02 from "@/public/why/Partnership.svg"
import core03 from "@/public/why/Accountability.svg"
import core04 from "@/public/why/Governance.svg"
import core05 from "@/public/why/Value.svg"
import core06 from "@/public/why/Lerning.svg"

interface CoreValueCardProps {
  icon: string
  title: string
  description: string
  index: number
}

export const Try = () => {
  return (
    <main className="h-full p-4 md:p-8 ">
      <section>
        <GlobalExpertise />
      </section>
    </main>
  )
}

function GlobalExpertiseCard({ icon, title, description, index }: CoreValueCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div className="relative w-full max-w-sm z-10">
      {/* Purple background shadow */}
      <div className="absolute bottom-2 right-2 w-full h-full rounded-2xl bg-purple-700"></div>

      {/* Main card */}
      <motion.div
        ref={ref}
        className="relative bg-white h-[320px] xs:h-[350px] sm:h-[420px] md:h-[440px] lg:h-[460px] xl:h-[480px] p-4 sm:p-6 md:p-8 flex flex-col justify-evenly rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Icon */}
        <motion.div
          className="flex justify-center mb-4"
          animate={isHovered ? { y: [0, -5, 0], transition: { repeat: Number.POSITIVE_INFINITY, duration: 2 } } : {}}
        >
          <motion.div
            className="w-[80px] h-[80px] xs:w-[100px] xs:h-[100px] sm:w-[125px] sm:h-[125px] rounded-full bg-gray-100 border-[6px] sm:border-[8px] md:border-[10px] border-purple-700 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src={icon || "/placeholder.svg"}
              alt={`${title} icon`}
              width={80}
              height={80}
              className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:w-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Title */}
        <h2 className="text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] font-bold text-gray-900 mb-2">
          {title}
        </h2>

        {/* Description */}
        <p className="text-center text-[10px] xs:text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] 2xl:text-[16px] mt-4 sm:mt-6 md:mt-8 lg:mt-10 font-medium text-[#585675] line-clamp-6 sm:line-clamp-none">
          {description}
        </p>

        {/* Animated bottom border */}
        <motion.div
          className="w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-400 absolute bottom-0 left-0"
          initial={{ scaleX: 0, originX: 0 }}
          animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  )
}

function GlobalExpertise() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const expertiseData = [
    {
      icon: core01,
      title: "Global Expertise, Local Commitment",
      description:
        "We bring world-class consulting standards with deep regional insight across the Middle East and beyond. Our solutions are globally informed, but always locally relevant — tailored to your market, people, and regulatory context.",
    },
    {
      icon: core02,
      title: "Partnership Over Projects",
      description:
        "We don't just deliver services — we build lasting partnerships. From co-sourcing internal audits to long-term digital transformation, our focus is on your sustained growth and continuous improvement.",
    },
    {
      icon: core03,
      title: "Certified Professionals",
      description:
        "We believe in clear communication, honest assessments, and executive-friendly reporting. Our teams provide you with full visibility, backed by facts, benchmarks, and actionable next steps.",
    },
    {
      icon: core04,
      title: "Governance with Integrity",
      description:
        "As specialists in internal audit, regulatory compliance, and GRC, we lead by example — practicing the same integrity and discipline we help our clients build.",
    },
    {
      icon: core05,
      title: "Value-Driven & Cost-Effective",
      description:
        "We deliver enterprise-grade solutions without the enterprise-level cost. By focusing on smart customization, open technologies, and efficient delivery models, we ensure your investment brings maximum return — without compromising quality or security..",
    },
    {
      icon: core06,
      title: "Learning-Driven Culture",
      description:
        "Our teams continuously evolve, gaining new certifications, mastering emerging tech, and staying ahead of regulations — because your business deserves consultants who never stop growing.",
    },
  ]

  return (
    <div ref={ref} className="relative p-6 md:p-10 lg:p-16 rounded-2xl flex justify-center items-center">
      {/* Changed grid-cols-1 to grid-cols-2 for mobile view */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {expertiseData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <GlobalExpertiseCard
              icon={item.icon.src}
              title={item.title}
              description={item.description}
              index={index + 1}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}



// function CoreValueCard({ icon, title, description, index }: CoreValueCardProps) {
//   const [isHovered, setIsHovered] = useState(false)

//   return (
//     <div className="relative">
//       <div className="absolute top-2 left-2 w-full h-full rounded-2xl bg-purple-700"></div>
//       <motion.div
//         className="relative bg-purple-100 backdrop-blur-sm overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
//         whileHover={{ y: -5 }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="p-6 md:p-8">
//           <div className="flex flex-col items-center mb-6">
//             <motion.div
//               className="relative w-16 h-16 mb-4"
//               animate={
//                 isHovered ? { y: [0, -5, 0], transition: { repeat: Number.POSITIVE_INFINITY, duration: 2 } } : {}
//               }
//             >
//               <div className="absolute inset-0 bg-purple-200 rounded-full blur-md opacity-50 transform scale-90"></div>
//               <div className="relative z-10 w-full h-full flex items-center justify-center">
//                 <Image
//                   src={icon || "/placeholder.svg"}
//                   width={64}
//                   height={64}
//                   alt={`${title} icon`}
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </motion.div>

//             <h2 className="text-[#061F33] text-center font-bold text-xl md:text-2xl leading-tight mb-3">{title}</h2>

//             <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
//           </div>

//           <p className="text-[#5B5675] text-center text-base md:text-lg leading-relaxed">{description}</p>

//           <motion.div
//             className="w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-400 absolute bottom-0 left-0"
//             initial={{ scaleX: 0, originX: 0 }}
//             animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
//             transition={{ duration: 0.3 }}
//           />
//         </div>
//       </motion.div>
//     </div>
//   )
// }

// function CoreValues() {
//   const { ref, inView } = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//   })

//   const coreValues = [
//     {
//       icon: "/icons/core01.svg",
//       title: "Security by Design",
//       description:
//         "We embed cybersecurity and risk management into every solution — from ERP systems to cloud infrastructure — ensuring our clients operate safely, securely, and compliantly in an evolving threat landscape.",
//     },
//     {
//       icon: "/icons/core02.svg",
//       title: "Intelligence in Action",
//       description:
//         "We combine data, analytics, and automation to deliver smarter decisions and measurable results. Whether it's AI-driven insights or precision analytics, we turn intelligence into strategic advantage.",
//     },
//     {
//       icon: "/icons/core03.svg",
//       title: "Customized, Not Standardized",
//       description:
//         "Every client is unique—and so are our solutions. Whether it's setting up a GRC framework or designing a multi-cloud strategy, we tailor every engagement to your size, sector, and vision.",
//     },
//     {
//       icon: "/icons/core04.svg",
//       title: "Innovation with Purpose",
//       description:
//         "From intelligent automation to next-gen cloud architecture, we innovate with one goal: to solve real business problems and unlock long-term value for your organization.",
//     },
//     {
//       icon: "/icons/core05.svg",
//       title: "Results Matter Most",
//       description:
//         "From strategy to execution, our focus is outcomes. We measure success by the risks we've reduced, the operations we've optimized, and the confidence we've built in your business.",
//     },
//     {
//       icon: "/icons/core06.svg",
//       title: "Technical Depth, Real-World Defense",
//       description:
//         "We go beyond checklists. Our cybersecurity experts simulate real-world attacks, uncover deep vulnerabilities, and implement technical controls that actually work — because real protection requires hands-on expertise, not surface-level audits.",
//     },
//   ]

//   return (
//     <div ref={ref} className="relative p-6 md:p-10 lg:p-32 rounded-2xl shadow-lg">
//       {/* Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative z-10">
//         {coreValues.map((value, index) => (
//           <motion.div
//             key={index}
//             initial={{ y: 50, opacity: 0 }}
//             animate={inView ? { y: 0, opacity: 1 } : {}}
//             transition={{ duration: 0.5, delay: 0.1 * index }}
//           >
//             <CoreValueCard icon={value.icon} title={value.title} description={value.description} index={index + 1} />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }