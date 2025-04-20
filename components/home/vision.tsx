"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import vision from "@/public/V2030.png"
export default function Vision2030Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="hero-section w-full h-full flex items-center justify-center bg-white py-16 lg:py-0 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
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
                Vision 2030:
              </motion.h1>
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Enabling Saudi Arabia's
                <br className="hidden sm:block" />
                Digital and Economic Transformation
              </motion.h2>
            </div>

            <div className="space-y-4">
              <motion.p
                className="text-gray-700 text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                DevEdge Consulting proudly supports the Kingdom of Saudi Arabia's Vision 2030 by empowering
                organizations with future-ready solutions across cybersecurity, digital transformation, risk management,
                and intelligent automation.
              </motion.p>
              <motion.p
                className="text-gray-700 text-base hidden sm:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                With a deep understanding of local regulatory frameworks and international standards, we are committed
                to helping public and private sector entities build secure, data-driven, and agile enterprises that
                contribute to the Kingdom's global economic leadership.
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900">100+ Projects</h3>
                <p className="text-gray-600 text-sm">Across 15+ Different industries</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">20+</h3>
                <p className="text-gray-600 text-sm">Clients Empowered Across Sectors</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
              {imageError ? (
                <div className="aspect-[5/3] w-full bg-purple-100 rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="text-purple-700 text-4xl font-bold mb-2">Vision 2030</div>
                    <div className="text-gray-600">Saudi Arabia's transformation initiative</div>
                  </div>
                </div>
              ) : (
                <Image
                  src={vision.src}
                  width={500}
                  height={300}
                  alt="Vision 2030"
                  className="object-contain w-full h-auto rounded-lg"
                  priority
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
