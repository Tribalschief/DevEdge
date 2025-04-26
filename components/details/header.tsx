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
    <div className="relative w-full">
      <motion.div
        className="relative 
          mt-16 
          sm:mt-20 
          md:mt-24 
          lg:mt-28 
          xl:mt-32
          min-h-[200px]
          h-[30vh] 
          sm:h-[35vh] 
          md:h-[40vh]
          lg:h-[50vh]
          xl:h-[60vh]
          max-h-[600px]"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <Image
          src={image}
          alt={`Header - ${title}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay and content */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center lg:justify-start text-gray-50 p-4 md:p-6 lg:p-10 xl:p-12">
          <motion.div
            className="flex flex-col items-center lg:items-start text-center lg:text-left 
                      w-full 
                      max-w-[90%] 
                      sm:max-w-[85%] 
                      md:max-w-2xl 
                      lg:max-w-4xl 
                      mx-auto 
                      lg:ml-[5%] 
                      xl:ml-[10%]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-medium mb-1 sm:mb-2 drop-shadow">
              DevEdge / Services / {title}
            </h3>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold 
                          mb-3 sm:mb-4 
                          tracking-tight 
                          drop-shadow-md 
                          line-clamp-2 md:line-clamp-none">
              {title}
            </h1>
            <div className="flex items-center justify-center xs:flex-row gap-2 xs:gap-4 mt-2 w-full xs:w-auto">
              <Link href="/rfp" className="w-auto xs:w-auto">
                <Button className="w-full xs:w-auto text-sm sm:text-base">Submit RFP</Button>
              </Link>
              <Link href="/contact" className="w-auto xs:w-auto">
                <Button className="w-full xs:w-auto text-sm sm:text-base">Contact Us</Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
