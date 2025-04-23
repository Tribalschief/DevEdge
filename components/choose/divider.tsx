'use client'

import React from 'react'
import Image from 'next/image'
import why from '@/public/Why.svg'

export const Divider = ({ image }: { image: any }) => {
  return (
    <div className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={image.src}
        alt="Service background"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Foreground Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-20 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Why Choose <span className="text-purple-600">DevEdge Consulting</span>
        </h1>
        <h2 className="text-sm sm:text-base md:text-lg lg:text-2xl mt-6 max-w-4xl font-medium">
          We don’t just consult — we commit. DevEdge is your partner in strengthening defenses,
          elevating audit integrity, and engineering secure, resilient systems that stand up to
          real-world threats.
        </h2>
      </div>

      {/* Floating Image (Only on large screens) */}
      <div className="hidden lg:block absolute top-12 right-12 z-30">
        <Image
          src={why}
          alt="Why DevEdge logo"
          width={160}
          height={160}
          className="w-32 h-32 lg:w-40 lg:h-40"
        />
      </div>
    </div>
  )
}
