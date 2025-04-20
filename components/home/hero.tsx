"use client"

import { motion } from "framer-motion"
import WorldMap from "./wm"

export const GlobalExpertiseHero = () => {
  return (
    <section className="bg-[#f3edf8] w-full h-full flex items-center justify-center px-4  md:px-8  py-16 lg:py-0 overflow-hidden">
      <div className="container mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-2">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Global Expertise
              </motion.h1>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-purple-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                with Local Knowledge
              </motion.h2>
            </div>

            <div className="space-y-4">
              <motion.p
                className="text-gray-700 text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                At DevEdge Consulting, we bring global expertise to local markets with precision and purpose.
              </motion.p>

              <motion.p
                className="text-gray-700 text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Our consultants combine international best practices with deep understanding of regional dynamics across
                the Middle East and beyond. Whether it's cybersecurity, audit, cloud, or digital transformation — we
                deliver solutions tailored to your business environment, culture, and compliance landscape.
              </motion.p>

              <motion.p
                className="text-gray-700 text-base hidden sm:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Because real impact happens when global insight meets local intelligence.
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div>
                <h3 className="text-2xl font-bold">3,500</h3>
                <p className="text-gray-600 text-sm">Professionals Across the Globe</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">100+ Projects</h3>
                <p className="text-gray-600 text-sm">
                  Across 15+ industries, from government to energy, healthcare to finance.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative mx-auto lg:mx-0 w-full max-w-md sm:max-w-lg md:max-w-xl"
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

export default GlobalExpertiseHero