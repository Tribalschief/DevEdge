
"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import core01 from "@/public/core/core01.png"
import core02 from "@/public/core/core02.png"
import core03 from "@/public/core/core03.png"
import core04 from "@/public/core/core04.png"
import core05 from "@/public/core/core05.png"
import core06 from "@/public/core/core06.png"
import CoreValueCard from "./coreValueCard"


export default function CoreValues() {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-purple-100 to-indigo-50 py-6 md:p-10 lg:p-16 rounded-2xl shadow-lg">
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
