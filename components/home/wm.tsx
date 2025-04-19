"use client"

import type React from "react"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-[#f3edf8] flex items-center justify-center">
      Loading Globe...
    </div>
  ),
})

const WorldMap: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 })

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

  useEffect(() => {
    setIsMounted(true)

    const updateSize = () => {
      const width = window.innerWidth < 768 ? window.innerWidth - 40 : 600
      const height = window.innerWidth < 768 ? 300 : 500
      setDimensions({ width, height })
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  if (!isMounted) return null

  return (
    <div className="relative w-full h-auto">
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
        width={dimensions.width}
        height={dimensions.height}
      />
    </div>
  )
}

export default WorldMap
