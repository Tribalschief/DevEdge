"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import core01 from "@/public/core/core01.png"
import core02 from "@/public/core/core02.png"
import core03 from "@/public/core/core03.png"
import core04 from "@/public/core/core04.png"
import core05 from "@/public/core/core05.png"
import core06 from "@/public/core/core06.png"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
}

const coreValues = [
  {
    icon: core01,
    index: 0,
    title: "Security by Design",
    description:
      "We embed cybersecurity and risk management into every solution —from ERP systems to cloud infrastructure—ensuring our clients operate with security and compliance in an evolving threat landscape.",
    iconAlt: "Security icon",
  },
  {
    icon: core02,
    index: 1,
    title: "Intelligence in Action",
    description:
      "We combine data, analytics, and automation to deliver smarter decisions and measurable results. Whether it's AI-driven insights or precision analytics, we turn intelligence into strategic advantage.",
    iconAlt: "Intelligence icon",
  },
  {
    icon: core03,
    index: 2,
    title: "Customized, Not Standardized",
    description:
      "Every client is unique—and so are our solutions. Whether it's setting up a GRC framework or designing a multi-cloud strategy, we tailor every engagement to your size, sector, and vision.",
    iconAlt: "Customization icon",
  },
  {
    icon: core04,
    index: 3,
    title: "Innovation with Purpose",
    description:
      "From intelligent automation to next-gen cloud architecture, we innovate with one goal: to solve real business problems and unlock long-term value for your organization.",
    iconAlt: "Innovation icon",
  },
  {
    icon: core05,
    index: 4,
    title: "Results Matter Most",
    description:
      "From strategy to execution, our focus is outcomes. We measure success by the risks we've reduced, the operations we've optimized, and the confidence we've built in your business.",
    iconAlt: "Results icon",
  },
  {
    icon: core06,
    index: 5,
    title: "Technical Depth, Real-World Defense",
    description:
      "We go beyond checklists. Our cybersecurity experts simulate real-world attacks, uncover deep vulnerabilities, and implement technical controls that actually work—because cybersecurity requires hands-on expertise, not surface-level audits.",
    iconAlt: "Technical depth icon",
  },
]

export function CoreValues() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.div
      className="bg-purple-100 p-6 sm:p-10 md:p-16 lg:p-20 
                h-full lg:h-[720px] xl:h-[800px] 
                flex justify-center items-center rounded-lg w-full mx-auto"
      ref={ref}
    >
      {/* Core Values Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto w-full">
        {coreValues.map((value, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            custom={i + 3}
            className="flex gap-4 w-full relative  p-4 rounded-lg shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center">
                <motion.div
                  className="flex justify-center"
                  animate={
                    hoveredIndex === i
                      ? {
                          y: [0, -5, 0],
                          transition: { repeat: Number.POSITIVE_INFINITY, duration: 2 },
                        }
                      : {}
                  }
                >
                  <motion.div
                    className="flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src={value.icon.src || "/placeholder.svg"}
                      width={56}
                      height={56}
                      alt={value.iconAlt}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="w-px bg-purple-300 mx-1 sm:mx-2 self-stretch"></div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#061f33] font-bold mb-1 sm:mb-2">
                {value.title}
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#5b5675] text-justify">{value.description}</p>
            </div>

            {/* Animated Line */}
            <motion.div
              className="w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-400 absolute bottom-0 left-0 rounded-b-lg"
              initial={{ scaleX: 0, originX: 0 }}
              animate={hoveredIndex === i ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
