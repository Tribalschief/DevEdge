// import Image from "next/image";
// import CoreValueCard from "./coreValueCard";
// import core01 from '@/public/core/core01.png'
// import core02 from '@/public/core/core02.png'
// import core03 from '@/public/core/core03.png'
// import core04 from '@/public/core/core04.png'
// import core05 from '@/public/core/core05.png'
// import core06 from '@/public/core/core06.png'
// import bulb from '@/public/bulb.png'

// export default function CoreValues() {
//   return (
//     <div className="bg-purple-100 p-6 md:p-10 rounded-lg h-full w-full ">
//       {/* Header */}
//       <div className="flex justify-between items-start mb-8">
//         <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center">
//           <span className="sr-only">Logo</span>
//         </div>
//         <div className="w-16 h-16">
//           <Image
//             src={bulb}
//             width={64}
//             height={64}
//             alt="Lightbulb with building icon"
//             className="w-full h-full"
//           />
//         </div>
//       </div>

//       {/* Title */}
//       <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
//         Our Core Values:
//       </h1>

//       {/* Subtitle */}
//       <p className="text-center mb-10 max-w-2xl mx-auto">
//         From cyber resilience to enterprise automation, our values are the edge that drives trust, innovation, and impact.
//       </p>

//       {/* Grid */}
//       <div className="grid md:grid-cols-2 gap-8 lg:ml-[250px]">
//         <CoreValueCard
//           icon={core01.src}
//           title="Security by Design"
//           description={`We embed cybersecurity and risk
//            management into every solution 
//            — from ERP systems to cloud 
//            infrastructure — ensuring our 
//            clients operate safely, securely,
//             and compliantly in an evolving 
//           threat landscape.`}
//         />
//         <CoreValueCard
//           icon={core02.src}
//           title="Intelligence in Action"
//           description={`We combine data, analytics, and 
//           automation to deliver smarter 
//           decisions and measurable results.
//            Whether it's AI-driven insights or
//             precision analytics, we turn 
//             intelligence into strategic advantage.`}
//         />
//         <CoreValueCard
//           icon={core03.src}
//           title="Customized, Not Standardized"
//           description={`Every client is unique—and so 
//           are our solutions. Whether it's 
//           setting up a GRC framework or 
//           designing a multi-cloud strategy, 
//           we tailor every engagement to
//            your size, sector, and vision.`}
//         />
//         <CoreValueCard
//           icon={core04.src}
//           title="Innovation with Purpose"
//           description={`From intelligent automation to 
//           next-gen cloud architecture, we 
//           innovate with one goal: to solve 
//           real business problems and 
//           unlock long-term value for your
//            organization.`}
//         />
//         <CoreValueCard
//           icon={core05.src}
//           title="Results Matter Most"
//           description={`From strategy to execution,
//            our focus is outcomes. 
//            We measure success by the risks 
//            we've reduced, the operations 
//            we've optimized, and the confidence 
//            we've built in your business.`}
//         />
//         <CoreValueCard
//           icon={core06.src}
//           title={`Technical Depth,\n Real-World Defense`}
//           description={`We go beyond checklists. Our 
//             cybersecurity experts simulate 
//             real-world attacks, uncover deep
//              vulnerabilities, and implement
//               technical controls that actually
//                work — because real protection
//                 requires hands-on expertise,
//                  not surface-level audits.`}
//         />
//       </div>
      
//     </div>
//   );
// }
"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import core01 from "@/public/core/core01.png"
import core02 from "@/public/core/core02.png"
import core03 from "@/public/core/core03.png"
import core04 from "@/public/core/core04.png"
import core05 from "@/public/core/core05.png"
import core06 from "@/public/core/core06.png"
import bulb from "@/public/bulb.png"
import CoreValueCard from "./coreValueCard"

export default function CoreValues() {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-purple-100 to-indigo-50 p-6 md:p-10 lg:p-16 rounded-2xl shadow-lg">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="relative flex justify-between items-start mb-12">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center shadow-lg"
        >
          <span className="text-white text-xl font-bold">CV</span>
          <span className="sr-only">Logo</span>
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-20 h-20 relative"
        >
          <div className="absolute inset-0 bg-purple-200 rounded-full blur-md opacity-50"></div>
          <Image
            src={bulb || "/placeholder.svg"}
            width={80}
            height={80}
            alt="Lightbulb with building icon"
            className="w-full h-full relative z-10"
          />
        </motion.div>
      </div>

      {/* Title and Subtitle */}
      <div ref={sectionRef} className="relative z-10 mb-16">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-800 to-indigo-700 bg-clip-text text-transparent">
            Our Core Values
          </h1>

          <p className="text-center mb-4 max-w-2xl mx-auto text-purple-700 font-medium text-lg">
            From cyber resilience to enterprise automation, our values are the edge that drives trust, innovation, and
            impact.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative z-10">
        {[
          {
            icon: core01,
            title: "Security by Design",
            description:
              "We embed cybersecurity and risk management into every solution — from ERP systems to cloud infrastructure — ensuring our clients operate safely, securely, and compliantly in an evolving threat landscape.",
          },
          {
            icon: core02,
            title: "Intelligence in Action",
            description:
              "We combine data, analytics, and automation to deliver smarter decisions and measurable results. Whether it's AI-driven insights or precision analytics, we turn intelligence into strategic advantage.",
          },
          {
            icon: core03,
            title: "Customized, Not Standardized",
            description:
              "Every client is unique—and so are our solutions. Whether it's setting up a GRC framework or designing a multi-cloud strategy, we tailor every engagement to your size, sector, and vision.",
          },
          {
            icon: core04,
            title: "Innovation with Purpose",
            description:
              "From intelligent automation to next-gen cloud architecture, we innovate with one goal: to solve real business problems and unlock long-term value for your organization.",
          },
          {
            icon: core05,
            title: "Results Matter Most",
            description:
              "From strategy to execution, our focus is outcomes. We measure success by the risks we've reduced, the operations we've optimized, and the confidence we've built in your business.",
          },
          {
            icon: core06,
            title: "Technical Depth, Real-World Defense",
            description:
              "We go beyond checklists. Our cybersecurity experts simulate real-world attacks, uncover deep vulnerabilities, and implement technical controls that actually work — because real protection requires hands-on expertise, not surface-level audits.",
          },
        ].map((value, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <CoreValueCard
              icon={value.icon.src}
              title={value.title}
              description={value.description}
              index={index + 1}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
