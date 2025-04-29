'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import globe from '@/public/home/Group.svg' // Assuming this path is correct

const ResponsiveGlobe = () => {
  // Much larger base design size
  const baseWidth = 650 // Substantially increased from 328
  const [dimensions, setDimensions] = useState({ width: baseWidth, height: baseWidth })
  const [scale, setScale] = useState(1)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const updateSize = () => {
      const screenWidth = window.innerWidth
      // Updated responsive logic for much larger sizes
      const width =
        screenWidth >= 1280
          ? Math.min(screenWidth * 0.6, 800) // Desktop - up to 60% of screen width, max 800px
          : screenWidth >= 768
          ? screenWidth * 0.7 // Tablet - 70% of screen width
          : screenWidth - 20 // Mobile - almost full width

      const height = width // Keep it square
      const newScale = width / baseWidth

      setDimensions({ width, height })
      setScale(newScale)
    }

    updateSize()
    window.addEventListener('resize', updateSize)

    return () => window.removeEventListener('resize', updateSize)
  }, [baseWidth])

  if (!isMounted) {
    return null;
  }

  return (
    <div className="absolute top-1/2 left-1/2 z-20 pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
      <div
        className="relative"
        style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
      >
        <Image
          src={globe}
          alt="Globe Map"
          width={dimensions.width}
          height={dimensions.height}
          className="w-full h-auto"
        />

        <div
          className="absolute top-0 left-0 origin-top-left"
          style={{
            transform: `scale(${scale})`,
            width: `${baseWidth}px`,
            height: `${baseWidth}px`,
          }}
        >
          {/* Labels with larger text */}
          <div className="absolute top-[12%] left-[35.5%] text-sm whitespace-nowrap">
            <div className="bg-white text-black px-2 py-1 rounded shadow">
              Kingdom of Saudi Arabia
            </div>
            <div className="absolute left-[105px] top-[calc(100%+20px)] bg-white w-[50px] h-[1px] origin-top-left rotate-[75deg]" />
          </div>

          <div className="absolute top-[50%] left-[71%] text-sm whitespace-nowrap">
            <div className="absolute right-[calc(100%+4px)] bottom-[calc(100%+20px)] bg-white w-[50px] h-[1px] origin-bottom-right rotate-[65deg]" />
            <div className="bg-white text-black px-2 py-1 rounded shadow">
              United Arab Emirates
            </div>
          </div>

          <div className="absolute top-[62%] left-[32%] text-sm whitespace-nowrap">
            <div className="absolute left-[5px] bottom-[calc(100%+20px)] bg-white w-[50px] h-[1px] origin-bottom-left rotate-[105deg]" />
            <div className="bg-white text-black px-2 py-1 rounded shadow">
              Pakistan
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveGlobe