"use client"
import logo from  '@/public/logoremovebg.png'
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export function DevEdgeWordCloudSVG() {
  const [showLogo, setShowLogo] = useState(true)
  const [showServices, setShowServices] = useState(false)
  const [key, setKey] = useState(0)

  // Handle animation sequence
  useEffect(() => {
    if (showLogo) {
      // After logo animation completes (about 5 seconds)
      const logoTimer = setTimeout(() => {
        setShowLogo(false)

        // Small delay before showing services
        setTimeout(() => {
          setShowServices(true)
        }, 500)
      }, 5000)

      return () => clearTimeout(logoTimer)
    } else if (showServices) {
      // After services are shown for 15 seconds, restart the animation
      const restartTimer = setTimeout(() => {
        setShowLogo(true)
        setShowServices(false)
        setKey((prev) => prev + 1)
      }, 15000)

      return () => clearTimeout(restartTimer)
    }
  }, [showLogo, showServices, key])

  // Define the 12 key services with their positions, sizes, colors, and rotations
  const services = [
    {
      id: 1,
      text: "INTERNAL AUDIT",
      size: "xlarge",
      color: "#6208CA", // Red
      x: 400,
      y: 220,
      rotation: 0,
      delay: 0.2,
    },
    {
      id: 2,
      text: "MULTI-CLOUD SERVICES",
      size: "large",
      color: "#6208CA", // Red
      x: 340,
      y: 400,
      rotation: 0,
      delay: 0.4,
    },
    {
      id: 3,
      text: "ANALYTICS and AI SERVICES ",
      size: "medium",
      color: "#6208CA", // Red
      x: 380,
      y: 360,
      rotation: 0,
      delay: 0.6,
    },
    {
      id: 4,
      text: "DIGITAL TRANSFORMATION ",
      size: "medium",
      color: "#6208CA", // Red
      x: 390,
      y: 300,
      rotation: 0,
      delay: 0.8,
    },
    {
      id: 5,
      text: "FIXED ASSET",
      size: "medium",
      color: "#6208CA", // Red
      x: 420,
      y: 95,
      rotation: 0,
      delay: 1.0,
    },
    {
      id: 6,
      text: "INDUSTRIAL CONTROL SYSTEMS",
      size: "medium",
      color: "#6208CA", // Red
      x: 580,
      y: 450,
      rotation: 0,
      delay: 1.2,
    },
    {
      id: 7,
      text: "CYBERSECURITY",
      size: "small",
      color: "#666666", // Gray
      x: 150,
      y: 280,
      rotation: 90,
      delay: 1.4,
    },
    {
      id: 8,
      text: "PRIVACY",
      size: "small",
      color: "#666666", // Gray
      x: 360,
      y: 270,
      rotation: 0,
      delay: 1.6,
    },
    {
      id: 9,
      text: "TECHNOLOGY CONSULTING",
      size: "large",
      color: "#666666", // Gray
      x: 400,
      y: 160,
      rotation: 0,
      delay: 1.8,
    },
    {
      id: 10,
      text: "BCM",
      size: "medium",
      color: "#666666", // Gray
      x: 740,
      y: 220,
      rotation: 90,
      delay: 2.0,
    },
    {
      id: 11,
      text: "PRECISION DATA MANAGEMENT",
      size: "medium",
      color: "#666666", // Gray
      x: 550,
      y: 330,
      rotation: 0,
      delay: 2.2,
    },
    {
      id: 12,
      text: "OT Security Services",
      size: "small",
      color: "#6208CA", // Red
      x: 530,
      y: 120,
      rotation: 0,
      delay: 2.4,
    },
  ]

  // Function to determine font size based on size category
  const getFontSize = (size: string) => {
    switch (size) {
      case "xlarge":
        return 80
      case "large":
        return 50
      case "medium":
        return 30
      case "small":
        return 20
      case "xsmall":
        return 14
      default:
        return 24
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto overflow-hidden">
      <div className="relative rounded-lg p-6 bg-white" style={{ height: "600px" }}>
        <AnimatePresence mode="wait">
          {showLogo && (
            <motion.div
              key={`logo-${key}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex flex-col items-center justify-center"
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative w-64 h-64 mb-8"
              >
                <Image
                  src={logo}
                  alt="DevEdge Consulting Logo"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-2">DevEdge Consulting (PVT) LTD</h2>
                <p className="text-gray-600">A technology solutions firm</p>
              </motion.div>
            </motion.div>
          )}

          {showServices && (
            <motion.div
              key={`services-${key}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0"
            >
              <svg width="100%" height="100%" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
                {services.map((service) => {
                  const fontSize = getFontSize(service.size)

                  return (
                    <motion.g
                      key={`${service.id}-${key}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: service.delay,
                        ease: "easeOut",
                      }}
                      style={{
                        transformOrigin: "center center",
                        transformBox: "fill-box",
                      }}
                    >
                      <text
                        x={service.x}
                        y={service.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={service.color}
                        fontFamily="Arial, sans-serif"
                        fontWeight="bold"
                        fontSize={fontSize}
                        transform={
                          service.rotation ? `rotate(${service.rotation} ${service.x} ${service.y})` : undefined
                        }
                      >
                        {service.text}
                      </text>
                    </motion.g>
                  )
                })}
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}


