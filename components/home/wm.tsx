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
"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import map1 from "@/public/home/map.svg"
import map2 from "@/public/home/map2.svg"
import globe from "@/public/home/Group.svg"

const WM = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 600, height: 450 })

  useEffect(() => {
    setIsMounted(true)

    const updateSize = () => {
      // More consistent sizing logic with smoother transitions
      const screenWidth = window.innerWidth
      let width, height

      if (screenWidth >= 1024) {
        // Desktop
        width = 600
        height = 450
      } else if (screenWidth >= 768) {
        // Tablet
        width = Math.min(screenWidth * 0.7, 600)
        height = width * 0.75
      } else {
        // Mobile
        width = Math.min(screenWidth - 40, 500)
        height = width * 0.75
      }

      setDimensions({ width, height })
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  if (!isMounted) return null

  return (
    <section className="relative w-full flex justify-center items-center py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 overflow-visible">
      <div className="relative z-10">
        <Earthmap width={dimensions.width} height={dimensions.height} />
      </div>
      <GlobeMap mapWidth={dimensions.width} />
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

const GlobeMap = ({ mapWidth }: { mapWidth: number }) => {
  // Calculate globe size based on map width for consistent proportions
  const globeSize = Math.min(328, mapWidth * 0.55)

  // Calculate font size based on globe size
  const fontSize = Math.max(10, Math.min(12, globeSize * 0.036))

  return (
    <div className="absolute top-1/2 left-1/2 z-20 pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
      <div className="relative" style={{ width: `${globeSize}px`, height: `${globeSize}px` }}>
        <Image
          src={globe || "/placeholder.svg"}
          alt="Globe Map"
          width={globeSize}
          height={globeSize}
          className="w-full h-auto"
        />

        {/* Labels container with fixed size reference */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Saudi Arabia */}
          <div className="absolute top-[12%] left-[35.5%]" style={{ fontSize: `${fontSize}px` }}>
            <div
              className="bg-white text-black px-2 py-1 rounded shadow whitespace-nowrap"
              style={{ fontSize: `${fontSize}px` }}
            >
              Kingdom of Saudi Arabia
            </div>
            <div
              className="bg-white h-[1px] rotate-[75deg]"
              style={{
                width: `${globeSize * 0.12}px`,
                marginTop: `${globeSize * 0.06}px`,
                marginLeft: `${globeSize * 0.32}px`,
              }}
            />
          </div>

          {/* UAE */}
          <div className="absolute top-[50%] left-[71%]" style={{ fontSize: `${fontSize}px` }}>
            <div
              className="bg-white h-[1px] rotate-[65deg]"
              style={{
                width: `${globeSize * 0.12}px`,
                marginBottom: `${globeSize * 0.06}px`,
              }}
            />
            <div
              className="bg-white text-black px-2 py-1 rounded shadow whitespace-nowrap"
              style={{ marginLeft: `${globeSize * 0.012}px`, fontSize: `${fontSize}px` }}
            >
              United Arab Emirates
            </div>
          </div>

          {/* Pakistan */}
          <div className="absolute top-[62%] left-[32%]" style={{ fontSize: `${fontSize}px` }}>
            <div
              className="bg-white h-[1px] rotate-[105deg]"
              style={{
                width: `${globeSize * 0.12}px`,
                marginBottom: `${globeSize * 0.06}px`,
                marginLeft: `${globeSize * 0.015}px`,
              }}
            />
            <div
              className="bg-white text-black px-2 py-1 rounded shadow whitespace-nowrap"
              style={{ fontSize: `${fontSize}px` }}
            >
              Pakistan
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WM




