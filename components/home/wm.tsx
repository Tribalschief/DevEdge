// "use client"

// import type React from "react"
// import { useEffect, useState } from "react"
// import dynamic from "next/dynamic"

// // Dynamically import Globe to avoid SSR issues
// const Globe = dynamic(() => import("react-globe.gl"), {
//   ssr: false,
//   loading: () => (
//     <div className="w-full h-[400px] bg-[#f3edf8] flex items-center justify-center">
//       Loading Globe...
//     </div>
//   ),
// })

// const WorldMap: React.FC = () => {
//   const [isMounted, setIsMounted] = useState(false)
//   const [dimensions, setDimensions] = useState({ width: 400, height: 400 })

//   // Generate random arcs data
//   const N = 20
//   const arcsData = [...Array(N).keys()].map(() => ({
//     startLat: (Math.random() - 0.5) * 180,
//     startLng: (Math.random() - 0.5) * 360,
//     endLat: (Math.random() - 0.5) * 180,
//     endLng: (Math.random() - 0.5) * 360,
//     color: [
//       ["#9333ea", "#f3edf8", "#6b21a8", "#a855f7"][Math.round(Math.random() * 3)],
//       ["#9333ea", "#f3edf8", "#6b21a8", "#a855f7"][Math.round(Math.random() * 3)],
//     ],
//   }))

//   useEffect(() => {
//     setIsMounted(true)

//     const updateSize = () => {
//       const width = window.innerWidth < 768 ? window.innerWidth - 40 : 600
//       const height = window.innerWidth < 768 ? 300 : 500
//       setDimensions({ width, height })
//     }

//     updateSize()
//     window.addEventListener("resize", updateSize)
//     return () => window.removeEventListener("resize", updateSize)
//   }, [])

//   if (!isMounted) return null

//   return (
//     <div className="relative w-full h-auto">
//       <Globe
//         globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
//         backgroundColor="#f3edf8"
//         arcsData={arcsData}
//         arcColor={"color"}
//         arcDashLength={() => Math.random()}
//         arcDashGap={() => Math.random()}
//         arcDashAnimateTime={() => Math.random() * 4000 + 500}
//         arcStroke={0.5}
//         atmosphereColor="#f3edf8"
//         width={dimensions.width}
//         height={dimensions.height}
//       />
//     </div>
//   )
// }

// export default WorldMap
'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import map1 from '@/public/home/map.svg'
import map2 from '@/public/home/map2.svg'
import globe from '@/public/home/Group.svg'

const WM = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 600, height: 500 })

  useEffect(() => {
    setIsMounted(true)

    const updateSize = () => {
      const isMobile = window.innerWidth < 768
      const width = isMobile ? window.innerWidth - 40 : 600
      const height = isMobile ? 250 : 450
      setDimensions({ width, height })
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  if (!isMounted) return null

  return (
    <section className="relative w-full flex justify-center items-center py-12 sm:py-16 md:py-24 lg:py-32 overflow-visible">
      <div className="relative z-10">
        <Earthmap width={dimensions.width} height={dimensions.height} />
      </div>
      <GlobeMap />
    </section>
  )
}

const Earthmap = ({ width, height }: { width: number; height: number }) => {
  const [showMap1, setShowMap1] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMap1(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full flex justify-center overflow-visible">
      <Image
        src={showMap1 ? map1 : map2}
        alt="Earth Map"
        width={width}
        height={height}
        priority
        unoptimized
        className="max-w-full h-auto"
      />
    </div>
  )
}

const GlobeMap = () => {
  const [dimensions, setDimensions] = useState({ width: 328, height: 328 })
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateSize = () => {
      const screenWidth = window.innerWidth
      const baseWidth = 328

      const width =
        screenWidth >= 1024
          ? 328
          : screenWidth < 400
          ? screenWidth - 40
          : screenWidth / 2
      const height = width
      const newScale = width / baseWidth

      setDimensions({ width, height })
      setScale(newScale)
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

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

        {/* Labels */}
        <div
          className="absolute top-0 left-0 origin-top-left"
          style={{
            transform: `scale(${scale})`,
            width: '328px',
            height: '328px',
          }}
        >
          {/* Saudi Arabia */}
          <div className="absolute top-[12%] left-[35.5%] text-xs">
            <div className="bg-white text-black px-2 py-1 rounded shadow">
              Kingdom of Saudi Arabia
            </div>
            <div className="bg-white w-[40px] h-[1px] mt-[20px] rotate-[75deg] ml-[105px]" />
          </div>

          {/* UAE */}
          <div className="absolute top-[50%] left-[71%] text-xs">
            <div className="bg-white w-[40px] h-[1px] mb-[20px] rotate-[65deg]" />
            <div className="bg-white text-black px-2 py-1 ml-4 rounded shadow">
              United Arab Emirates
            </div>
          </div>

          {/* Pakistan */}
          <div className="absolute top-[62%] left-[32%] text-xs">
            <div className="bg-white w-[40px] h-[1px] mb-[20px] rotate-[105deg] ml-[5px]" />
            <div className="bg-white text-black px-2 py-1 rounded shadow">
              Pakistan
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WM


