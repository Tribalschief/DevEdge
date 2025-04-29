'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Linkedin } from 'lucide-react' // Assuming you're using lucide-react for icons
import { Button } from '@/components/ui/button' // Assuming you have a Button component

export const DividerWithButton = ({ image }: { image: any }) => {
    return (
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
        {/* Background Image */}
        <Image
          src={image.src}
          alt="Service background"
          fill
          sizes="100vw"
          priority
          className="object-cover z-0"
        />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10" />
  
        {/* Foreground Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 text-center px-4 py-6">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-[90%]">
            Why Choose <span className="text-purple-600">DevEdge Consulting</span>
          </h1>
          <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-2xl mt-4 sm:mt-6 max-w-[95%] sm:max-w-4xl font-medium">
            We don't just consult — we commit. DevEdge is your partner in strengthening defenses,
            elevating audit integrity, and engineering secure, resilient systems that stand up to
            real-world threats.
          </h2>
          
          <div className="mt-6 sm:mt-8">
            <Button className="bg-[#0077B5] hover:bg-[#0077B5]/90" size="lg">
              <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              <Link href="https://www.linkedin.com/company/devedge-consulting" target="_blank" rel="noopener noreferrer">
                Connect on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }