"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import vision from '@/public/V2030.png'
export default function Vision2030Hero() {
  return (
    <section className="hero-section lg:h-[700px] min-h-screen mt-20 lg:mt-10 flex items-center justify-center bg-white py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 lg:px-auto overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-2 md:space-y-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Vision 2030:
            </motion.h1>
            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Enabling Saudi Arabia's
              <br />
              Digital and Economic Transformation
            </motion.h2>
            <motion.p
              className="text-gray-700 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              DevEdge Consulting proudly supports the Kingdom of Saudi Arabia's Vision 2030 by empowering organizations
              with future-ready solutions across cybersecurity, digital transformation, risk management, and intelligent
              automation.
            </motion.p>
            <motion.p
              className="text-gray-700 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              With a deep understanding of local regulatory frameworks and international standards, we are committed to
              helping public and private sector entities build secure, data-driven, and agile enterprises that
              contribute to the Kingdom's global economic leadership.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 pt-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">100+ Projects</h3>
                <p className="text-gray-600 text-sm">Across 15+ Different industries</p>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-opacity-50">20+</h3>
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
            <Image src={vision} alt="Vision 2030" width={500} height={300} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
