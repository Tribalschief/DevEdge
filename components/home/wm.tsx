"use client"

import type React from "react"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] bg-[#f3edf8] flex items-center justify-center">Loading Globe...</div>,
})

const WorldMap: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)

  // Generate random arcs data
  const N = 20
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [
      ["#9333ea", "#f3edf8", "#6b21a8", "#a855f7"][Math.round(Math.random() * 3)],
      ["#9333ea", "#f3edf8", "#6b21a8", "#a855f7"][Math.round(Math.random() * 3)],
    ],
  }))

  // Only render Globe on client-side
  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="h-[400px] mb-56 -mt-10 relative">
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="#f3edf8"
        arcsData={arcsData}
        arcColor={"color"}
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcDashAnimateTime={() => Math.random() * 4000 + 500}
        arcStroke={0.5}
        atmosphereColor="#f3edf8"
        width={1000}
        height={700}
      />

    </div>
  )
}

export default WorldMap

// "use client"

// import type React from "react"
// import { useEffect, useState } from "react"
// import dynamic from "next/dynamic"

// // Dynamically import Globe to avoid SSR issues
// const Globe = dynamic(() => import("react-globe.gl"), {
//   ssr: false,
//   loading: () => (
//     <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] bg-[#f3edf8] flex items-center justify-center rounded-lg">
//       <div className="animate-pulse text-purple-700">Loading Globe...</div>
//     </div>
//   ),
// })

// const WorldMap: React.FC = () => {
//   const [isMounted, setIsMounted] = useState(false)
//   const [dimensions, setDimensions] = useState({ width: 1000, height: 700 })

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

//   // Handle resize for responsiveness
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth
//       if (width < 640) {
//         setDimensions({ width: width - 80, height: 400 })
//       } else if (width < 768) {
//         setDimensions({ width: width - 120, height: 500 })
//       } else if (width < 1024) {
//         setDimensions({ width: width - 160, height: 600 })
//       } else {
//         setDimensions({ width: Math.min(width - 100, 1000), height: 350 })
//       }
//     }

//     // Only render Globe on client-side
//     setIsMounted(true)
//     handleResize()

//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   if (!isMounted) return null

//   return (
//     <div className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] absolute overflow-hidden">
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
