'use client'

import React from 'react'
import why from '@/public/Why.svg'
import Image from 'next/image'

export const Divider = ({ image }: { image: any }) => {
  return (
    <div className="relative w-full h-full">
      {/* Background Image */}
      <Image
        src={image}
        alt="service"
        width={1200}
        height={600}
        className="object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Foreground Content */}
      <div className="absolute inset-0 flex items-center justify-center text-white z-20">
        <div className="flex flex-col text-center justify-center items-center ">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold">
            Why Choose <span className="text-purple-700">DevEdge Consulting</span>
          </h1>
          <h2 className="text-md text-center lg:text-2xl sm:justify-center mt-10 mx-4 md:mx-[80px] lg:mx-72 font-semibold">
            We don’t just consult — we commit. DevEdge is your partner in strengthening defenses, elevating audit
            integrity, and engineering secure, resilient systems that stand up to real-world threats.
          </h2>
        </div>

        {/* Floating Image (Only on large screens) */}
        <div className="hidden lg:flex absolute top-20 right-[50px] space-x-2">
          <Image
            src={why}
            alt="logo"
            width={120}
            height={120}
            className="w-16 h-16 md:w-32 md:h-32 lg:w-60 lg:h-60"
          />
        </div>
      </div>
    </div>
  )
}
