"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Counter } from "./counter"

export default function AboutStats() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -80])

  const stats = [
    { value: 15, label: "Years Experience", suffix: "+" },
    { value: 200, label: "Projects Completed", suffix: "+" },
    { value: 50, label: "Team Members", suffix: "+" },
    { value: 12, label: "Countries Served", suffix: "+" },
  ]

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            DevEdge Consulting has been delivering exceptional solutions across the globe
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Counter key={index} end={stat.value} label={stat.label} suffix={stat.suffix} duration={2.5} />
          ))}
        </div>
      </div>
    </section>
  )
}