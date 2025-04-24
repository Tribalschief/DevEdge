'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface DetailedHeaderProps {
  image?: string
  title?: string
}

export const DetailedHeader = ({
  image = "/placeholder.svg",
  title = "Service Title",
}: DetailedHeaderProps) => {
  return (
    <div className="relative">
      <motion.div
        className="relative 
          mt-[100px] 
          sm:mt-[100px] 
          md:mt-[100px] 
          lg:mt-[120px] 
          xl:mt-[130px] 
          h-[28vh] 
          md:h-[30vh]
          lg:h-[35vh]
          xl:h-[40vh] "
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <Image
          src={image}
          alt={`Header - ${title}`}
          fill
          priority
          className="object-cover"
        />

        {/* Overlay and content */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center lg:justify-start text-gray-50 p-4 md:p-8 lg:p-12">
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl  mx-auto lg:mx-32"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium mb-2 drop-shadow">
              DevEdge / Services / {title}
            </h3>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mb-4 drop-shadow-md">
              {title}
            </h1>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-2">
              <Link href="/rfp">
                <Button className="w-full sm:w-auto">Submit RFP</Button>
              </Link>
              <Link href="/contact">
                <Button className="w-full sm:w-auto">Contact Us</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
