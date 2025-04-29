'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import map1 from '@/public/home/map.svg'
import map2 from '@/public/home/map2.svg'

const EarthmapSwitcher = () => {
  const [currentMap, setCurrentMap] = useState(map1)
  // Further increased dimensions
  const [dimensions, setDimensions] = useState({ width: 1200, height: 900 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const timer = setTimeout(() => {
      setCurrentMap(map2)
    }, 1000)

    const updateSize = () => {
      const isMobile = window.innerWidth < 768
      // Use 90% of screen width on desktop for very large displays
      const width = isMobile ? window.innerWidth - 40 : Math.min(1200, window.innerWidth * 0.9)
      // Maintain aspect ratio
      const height = (width / 1200) * 900

      // Increased minimum width
      const finalWidth = Math.max(width, 250)
      const finalHeight = Math.max(height, (finalWidth/1200)*900)

      setDimensions({ width: finalWidth, height: finalHeight })
    }

    updateSize()
    window.addEventListener('resize', updateSize)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  if (!isMounted) {
    // Updated placeholder size
    return <div style={{ width: '1200px', height: '900px' }} aria-hidden="true"></div>;
  }

  return (
    <div className="w-full flex justify-center overflow-visible">
      <Image
        src={currentMap}
        alt="Earth Map"
        width={dimensions.width}
        height={dimensions.height}
        priority
        unoptimized
        className="max-w-full h-auto"
        style={{ width: `${dimensions.width}px`, height: 'auto' }}
      />
    </div>
  )
}

export default EarthmapSwitcher