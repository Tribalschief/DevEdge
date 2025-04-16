"use client"

import { useRef, useEffect } from "react"

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error)
      })
    }
  }, [])

  return (
    <video
      ref={videoRef}
      className="w-full h-full object-cover"
      controls
      loop
      muted
      playsInline
      poster="/placeholder.svg?height=400&width=600"
    >
      <source
        src="https://static.videezy.com/system/resources/previews/000/041/329/original/alb_tech_01.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  )
}
