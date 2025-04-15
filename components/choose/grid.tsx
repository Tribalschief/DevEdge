"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative rounded-xl bg-gray-100 p-1 shadow-md">
        {/* Tech pattern overlay */}
        <div className="absolute inset-0 rounded-xl overflow-hidden opacity-5">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern
                id={`tech-pattern-${index}`}
                patternUnits="userSpaceOnUse"
                width="40"
                height="40"
                patternTransform="rotate(45)"
              >
                <rect width="100%" height="100%" fill="none" />
                <path d="M0 20h40M20 0v40" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="20" cy="20" r="2" fill="currentColor" />
              </pattern>
              <rect width="100%" height="100%" fill={`url(#tech-pattern-${index})`} />
            </svg>
          </div>
        </div>

        <div className="relative rounded-lg bg-white p-6 sm:p-8 flex flex-col items-center text-center h-full transition-all duration-300 group-hover:shadow-md border border-gray-200">
          {/* Card number */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-sm bg-gray-100 flex items-center justify-center border-b border-r border-pink-300">
            <span className="text-gray-700 font-mono text-sm">{String(index + 1).padStart(2, "0")}</span>
          </div>

          {/* Icon container */}
          <motion.div
            className="relative z-10 mb-6"
            animate={isHovered ? { scale: [1, 1.05, 1], transition: { repeat: 0, duration: 0.4 } } : {}}
          >
            <div className="bg-pink-100 rounded-lg p-3 shadow-sm border border-pink-200">
              <div className="bg-white rounded-md p-4 flex items-center justify-center text-purple-700 border border-gray-100">
                {icon}
              </div>
            </div>

            {/* Technical corner accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-pink-400"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-pink-400"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-pink-400"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-pink-400"></div>
          </motion.div>

          {/* Content */}
          <h3 className="relative z-10 text-xl sm:text-2xl font-bold mb-4 text-gray-800 group-hover:text-purple-900 transition-colors duration-300">
            {title}
          </h3>

          <div className="w-16 h-0.5 bg-pink-300 mb-4 transition-all duration-300 group-hover:w-24"></div>

          <p className="relative z-10 text-base sm:text-lg text-gray-600">{description}</p>

          {/* Technical bottom border */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Technical corner elements */}
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeatureGrid() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
      title: "Global Expertise, Local Commitment",
      description:
        "We bring world-class consulting standards with deep regional insight across the Middle East and beyond. Our solutions are globally informed, but always locally relevant — tailored to your market, people, and regulatory context.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
        </svg>
      ),
      title: "Partnership Over Projects",
      description:
        "We don't just deliver services — we build lasting partnerships. From co-sourcing internal audits to long-term digital transformation, our focus is on your sustained growth and continuous improvement.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
          <circle cx="17" cy="15" r="3" />
        </svg>
      ),
      title: "Accountability with Transparency",
      description:
        "We believe in clear communication, honest assessments, and executive-friendly reporting. Our teams provide you with full visibility, backed by facts, benchmarks, and actionable next steps.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
          <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
          <path d="M12 11v6" />
          <path d="M8 11v6" />
          <path d="M16 11v6" />
        </svg>
      ),
      title: "Governance with Integrity",
      description:
        "As specialists in internal audit, regulatory compliance, and GRC, we lead by example — practicing the same integrity and discipline we help our clients build.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20V10" />
          <path d="M18 20V4" />
          <path d="M6 20v-6" />
          <path d="M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path d="M6 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
      ),
      title: "Value-Driven & Cost-Effective",
      description:
        "We deliver enterprise-grade solutions without the enterprise-level cost. By focusing on smart customization, open technologies, and efficient delivery models, we ensure your investment brings maximum return — without compromising quality or security.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
          <path d="M16 16h5v5" />
        </svg>
      ),
      title: "Learning-Driven Culture",
      description:
        "Our teams continuously evolve, gaining new certifications, mastering emerging tech, and staying ahead of regulations — because your business deserves consultants who never stop growing.",
    },
  ]

  return (
    <div className="relative py-20 bg-gray-50">
      {/* Technical background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="tech-grid" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="rotate(45)">
            <rect width="100%" height="100%" fill="none" />
            <path d="M0 50h100M50 0v100" stroke="#000" strokeWidth="0.5" />
            <circle cx="50" cy="50" r="2" fill="#000" />
            <circle cx="0" cy="0" r="2" fill="#000" />
            <circle cx="0" cy="100" r="2" fill="#000" />
            <circle cx="100" cy="0" r="2" fill="#000" />
            <circle cx="100" cy="100" r="2" fill="#000" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      <div ref={ref} className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1 bg-gray-100 border border-gray-200 rounded-md">
            <span className="text-sm font-mono text-gray-600">CORE PRINCIPLES</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Our Guiding <span className="text-pink-600">Principles</span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            These core values define our approach to every client engagement and shape the solutions we deliver.
          </p>

          <div className="flex items-center justify-center mt-8 space-x-1">
            <div className="w-2 h-2 bg-pink-300"></div>
            <div className="w-12 h-0.5 bg-pink-300"></div>
            <div className="w-2 h-2 bg-pink-300"></div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
