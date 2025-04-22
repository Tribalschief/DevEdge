'use client'
import Image from 'next/image'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from "framer-motion"

export const CoreDivider = ({core}) => {
     const { ref: sectionRef, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
      })
  return (
    <div ref={sectionRef} className="relative overflow-hidden py-20 ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image src={core} alt="Background" fill className="object-cover" priority />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/70 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-100 to-indigo-100 bg-clip-text text-transparent">
            Our Core Values
          </h1>

          <p className="text-center mb-6 max-w-2xl mx-auto text-purple-100 font-medium text-lg">
            From cyber resilience to enterprise automation, our values are the edge that drives trust, innovation, and
            impact.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-[#6208CA] mx-auto rounded-full"></div>
        </motion.div>
      </div>
    </div>
  )
}
