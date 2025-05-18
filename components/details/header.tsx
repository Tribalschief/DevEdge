"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

interface DetailedHeaderProps {
  image?: string
  title?: string
}

export const DetailedHeader = ({ image = "/placeholder.svg", title = "Service Title" }: DetailedHeaderProps) => {
  return (
    <div className="relative w-full">
      <motion.div
        className="relative mt-16 min-h-[300px] h-[40vh] sm:h-[50vh] max-h-[500px]"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Background Image */}
        <Image
          src={image} // Removed || "/placeholder.svg" because default prop handles it
          alt={`Header - ${title}`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Overlay */}
        {/* Key change: Added items-center justify-center to center the content block */}
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-10">
          {/* This container will now be centered. Its children are positioned relative to it. */}
          {/* Simplified flex properties here as children are absolute. Added w-full. */}
          <div className="relative w-full h-full max-w-screen-res">
            {/* Back button */}
            {/* Added text-white to Link for default state, hover color will override for icon */}
            <div className="absolute top-2 left-2 sm:top-10 sm:left-10">
              <Link
                href="/"
                className="rounded-full border border-white text-white hover:border-purple-500 w-10 h-10 flex items-center justify-center hover:text-purple-400 transition-colors duration-200"
              >
                {/* Removed explicit text-white from icon, it will inherit from Link */}
                <ArrowLeft className="h-6 w-6" />
              </Link>
            </div>

            {/* Title */}
            <div className="absolute top-2 sm:top-10 left-24 sm:left-28">
              <h1 className="text-2xl text-white hover:text-[#6208CA] transition duration-300 ease-in-out hover:scale-105 sm:text-3xl md:text-4xl 2xl:text-5xl font-bold tracking-wide">
                {title}
              </h1>
            </div>

            {/* Buttons - positioned below title */}
            <div className="absolute top-[70%] sm:top-32 md:top-36 lg:top-40 left-24 sm:left-28">
              <div className="flex gap-4 flex-col sm:flex-row sm:gap-x-8 md:gap-x-10 lg:gap-x-16">
                <Link href="/rfp">
                  <Button
                    variant="outline"
                    className="text-sm sm:text-base border-white text-black hover:bg-white hover:text-[#6208CA] transition duration-300 ease-in-out hover:scale-105"
                  >
                    Submit Your RFP
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="text-sm sm:text-base border-white text-black hover:bg-white hover:text-[#6208CA] transition duration-300 ease-in-out hover:scale-105"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}