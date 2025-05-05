"use client"

import { motion } from "framer-motion"
import WorldMap from "./wm"
import { useMediaQuery } from "@/hooks/use-media-query"

export default function HeroSection() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")

  return (
    <section
      className="
      bg-[rgb(243,237,248)] w-full
      mt-[100px] md:mt-[120px]
      sm:pb-4 md:pb-8 pb-10
       h-full
      flex items-center justify-center
      px-4 sm:px-6 md:px-8 lg:px-12
      overflow-y-auto
    "
    >
      <div className="container mx-auto h-full w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
          {/* Left Side */}
          <motion.div
            className="space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-2">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Global Expertise
              </motion.h1>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-purple-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                with Local Knowledge
              </motion.h2>
            </div>

            <div className="space-y-4">
              <motion.p
                className="text-gray-700 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                At DevEdge Consulting, we bring global expertise to local markets with precision and purpose.
              </motion.p>

              <motion.p
                className="text-gray-700 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Our consultants combine international best practices with deep understanding of regional dynamics across
                the Middle East and beyond. Whether it's cybersecurity, audit, cloud, or digital transformation — we
                deliver solutions tailored to your business environment, culture, and compliance landscape.
              </motion.p>

              <motion.p
                className="text-gray-700 text-sm sm:text-base hidden sm:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Because real impact happens when global insight meets local intelligence.
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">3,500</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Professionals Across the Globe</p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold">100+ Projects</h3>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Across 15+ industries, from government to energy, healthcare to finance.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Map */}
          <motion.div
            className="relative mx-auto lg:mx-0 w-full max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-xl order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <WorldMap />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
