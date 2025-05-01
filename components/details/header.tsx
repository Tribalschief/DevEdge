'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react' // Assuming you use lucide icons

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
        className="relative mt-16 min-h-[300px] h-[40vh] sm:h-[50vh] max-h-[500px]"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        {/* Background Image */}
        <Image
          src={image}
          alt={`Header - ${title}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60  flex flex-col   p-4 sm:p-6 lg:p-10">
          {/* Top Row: Back button and Title */}
          <div className="absolute top-20 left-10 right-0 fl">
          <div className="flex items-center gap-10 text-white">
            <Link href="/" className="rounded-full border border-white hover:border-purple w-10 h-10 flex items-center justify-center hover:text-purple-400">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="2xl:text-5xl text-2xl hover:text-[#6208CA] transition duration-300 ease-in-out hover:scale-110 sm:text-3xl md:text-4xl font-bold tracking-wide">
              {title}
            </h1>
          
          </div>
          {/* Bottom Buttons */}
          <div className="flex gap-4 flex-col sm:flex-row  sm:gap-x-8 md:gap-x-10 lg:gap-x-16 xl:gap-x-16 2xl:gap-x-16 mx-20 items-center mt-12   md:mt-12 xl:mt-16 2xl:mt-20 ">
            <Link href="/rfp">
              <Button variant="outline" className="text-sm sm:text-base"  >Submit Your RFP</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-sm sm:text-base text-black border-white hover:bg-white">
                Contact Us
              </Button>
            </Link>
          </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
