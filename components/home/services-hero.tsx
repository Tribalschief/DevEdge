"use client"

import { motion } from "framer-motion"
import { DevEdgeWordCloudSVG } from "./services-circle"

export default function ServicesHero() {
  return (
    <section className="bg-white w-full h-full flex items-center justify-center py-16 lg:py-0 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
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
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-purple-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Our Services
              </motion.h1>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Comprehensive Solutions for Modern Enterprises
              </motion.h2>
            </div>

            <div className="space-y-4">
              <motion.p
                className="text-gray-700 text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                DevEdge Consulting offers a wide range of services designed to help organizations navigate the complex
                digital landscape. Our expertise spans cybersecurity, compliance, digital transformation, and more.
              </motion.p>
              <motion.p
                className="text-gray-700 text-base hidden sm:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Our Internal Audit approach integrates with all our service offerings, ensuring comprehensive risk
                assessment and compliance across your entire organization.
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900">8+ Service Areas</h3>
                <p className="text-gray-600 text-sm">Integrated solutions for complete coverage</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Dedicated teams ready to assist anytime</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full max-w-md sm:max-w-lg">
              <DevEdgeWordCloudSVG />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
