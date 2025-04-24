'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ServiceCardProps {
  title: string
  description: string
  backgroundImage: string
}

export function ServiceCard({ title, description, backgroundImage }: ServiceCardProps) {
  return (
    <motion.div
      className="flex flex-col max-w-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
    >
      {/* Card with background image */}
      <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4">
        {/* Background Image + Overlay */}
        <div className="absolute inset-0">
          <Image
            src={backgroundImage || '/placeholder.svg'}
            alt={title}
            fill
            className="object-cover brightness-[0.6]" // dark overlay effect
          />
        </div>

        {/* Corner Dots */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full" />
        <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full" />
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-white rounded-full" />
        <div className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full" />

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <h3 className="text-white text-center max-w-sm font-semibold text-xl sm:text-2xl">
            {title}
          </h3>
        </div>
      </div>

      {/* Description */}
      <div className="relative flex items-center justify-center mb-4 px-4">
        {/* Left vertical line */}
        <div className="hidden sm:block w-1 h-20 bg-purple-500  rounded-full" />
        
        <p className="text-gray-700 text-sm sm:text-base text-center max-w-md">
          {description}
        </p>

        {/* Right vertical line */}
        <div className="hidden sm:block w-1 h-20 bg-purple-500  rounded-full" />
      </div>

      {/* Horizontal line */}
      <div className="w-48 h-0.5 bg-purple-500 mx-auto mt-auto" />

     
    </motion.div>
  )
}
