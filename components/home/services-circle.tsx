"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Globe, FileText, BarChart3, Cloud, Search, Lock, Network } from "lucide-react"

// Service data with icons
const services = [
  { id: 1, name: "Cybersecurity", icon: <ShieldCheck className="w-5 h-5" /> },
  { id: 2, name: "Digital Transformation", icon: <Globe className="w-5 h-5" /> },
  { id: 3, name: "Compliance", icon: <FileText className="w-5 h-5" /> },
  { id: 4, name: "Business Intelligence", icon: <BarChart3 className="w-5 h-5" /> },
  { id: 5, name: "Cloud Solutions", icon: <Cloud className="w-5 h-5" /> },
  { id: 6, name: "Risk Management", icon: <Search className="w-5 h-5" /> },
  { id: 7, name: "Data Protection", icon: <Lock className="w-5 h-5" /> },
  { id: 8, name: "IT Infrastructure", icon: <Network className="w-5 h-5" /> },
]

export default function ServicesCircle() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  // Auto-rotate through services
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length)
      setProgress(0)
    }, 3000) // Rotate every 3 seconds within the 25-second section display

    return () => clearInterval(interval)
  }, [])

  // Progress animation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + (100 / 3000) * 100 // Increment progress every 100ms
        }
        return prev
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [activeIndex])

  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {/* Main circle - thin light gray outline */}
        <circle cx="200" cy="200" r="180" fill="white" stroke="#e5e7eb" strokeWidth="1" />

        {/* Purple circle path */}
        <circle cx="200" cy="200" r="150" fill="none" stroke="#9333ea" strokeWidth="4" strokeDasharray="5,5" />

        {/* Service nodes positioned around the circle */}
        {services.map((service, index) => {
          // Calculate position around the circle
          const angle = ((Math.PI * 2) / services.length) * index - Math.PI / 2
          const radius = 150 // distance from center
          const x = 200 + radius * Math.cos(angle)
          const y = 200 + radius * Math.sin(angle)

          const isActive = index === activeIndex

          return (
            <g key={service.id}>
              <motion.circle
                cx={x}
                cy={y}
                r="22"
                fill="white"
                stroke={isActive ? "#9333ea" : "#e5e7eb"}
                strokeWidth={isActive ? "3" : "1"}
                animate={{
                  stroke: isActive ? "#9333ea" : "#e5e7eb",
                  strokeWidth: isActive ? "3" : "1",
                  scale: isActive ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setActiveIndex(index)
                  setProgress(0)
                }}
              />
              <foreignObject x={x - 12} y={y - 12} width="24" height="24">
                <div className="flex items-center justify-center w-full h-full">{service.icon}</div>
              </foreignObject>
            </g>
          )
        })}

        {/* Center circle with "Internal Audit" text */}
        <circle cx="200" cy="200" r="60" fill="white" stroke="#9333ea" strokeWidth="2" />

        {/* Text in center */}
        <text
          x="200"
          y="200"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#111111"
          fontSize="16"
          fontWeight="bold"
        >
          Internal Audit
        </text>

        {/* Highlight active service with a line */}
        {(() => {
          const angle = ((Math.PI * 2) / services.length) * activeIndex - Math.PI / 2
          const innerRadius = 60 // Center circle radius
          const outerRadius = 150 // Outer circle radius
          const innerX = 200 + innerRadius * Math.cos(angle)
          const innerY = 200 + innerRadius * Math.sin(angle)
          const outerX = 200 + outerRadius * Math.cos(angle)
          const outerY = 200 + outerRadius * Math.sin(angle)

          return (
            <motion.line
              x1={innerX}
              y1={innerY}
              x2={outerX}
              y2={outerY}
              stroke="#9333ea"
              strokeWidth="4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
            />
          )
        })()}
      </svg>

      {/* Service name display */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <motion.p
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-lg font-medium text-purple-800"
        >
          {services[activeIndex].name}
        </motion.p>
      </div>
    </div>
  )
}
