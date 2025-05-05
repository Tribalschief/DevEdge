"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

interface ServiceCardProps {
  icon: string
  title: string
  shortTagline: string
  className?: string
  iconClassName?: string
  slug: string
  index: number // Added index prop
}

export function ServiceCard({
  icon,
  title,
  shortTagline,
  className = "",
  iconClassName = "",
  slug,
  index, // Destructure the index prop
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)


  return (
    <motion.div
      className={cn(
        "relative flex flex-col items-center text-center p-6 rounded-lg shadow transition-all",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ duration: 0.5 }}
    >
      {/* Icon with Index */}
      <div className="flex items-center mb-4">
        <motion.div
          className={cn("text-black", iconClassName)}
          whileHover={{
            y: [0, -4, 0],
            transition: { repeat: Infinity, duration: 2 },
          }}
        >
          <img src={icon!} alt="Icon" width={80} height={80} />
        </motion.div>
        <span className="ml-2 text-lg font-semibold">{index + 1}</span>
      </div>

      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 flex-grow">
      {shortTagline } 
      </p>

      <Link href={`/services/${slug}`}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="text-sm border border-gray-300 rounded-full px-6 py-1 hover:bg-gray-50 transition-colors"
        >
          Learn More
        </motion.button>
      </Link>

      {/* Bottom Animated Bar */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-400"
        initial={{ scaleX: 0, originX: 0 }}
        animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}