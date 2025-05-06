"use client"
import carSelling from "@/public/secondsection/sec/CarSellingPlatform.jpg"
import cyber from "@/public/secondsection/sec/CybersecurityRiskManagementPlatform.jpg"
import hr from "@/public/secondsection/sec/HRM.jpg"
import vehicle from "@/public/secondsection/sec/vehicleshippingservices.jpg"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function SolutionsShowcase() {
  const [loadedImages, setLoadedImages] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const solutions = [
    {
      id: 1,
      title: "Vehicle Shipping Import/Export ERP",
      image: vehicle,
    },
    {
      id: 2,
      title: "Cybersecurity Risk Management Platform",
      image: cyber,
    },
    {
      id: 3,
      title: "Car Selling Platform",
      image: carSelling,
    },
    {
      id: 4,
      title: "Human Resource Management Solution",
      image: hr,
    },
  ]

  // Update active solution periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % solutions.length)
    }, 4000) // Change heading every 4 seconds

    return () => clearInterval(interval)
  }, [solutions.length])

  // Also update when all images are loaded
  useEffect(() => {
    if (loadedImages === solutions.length) {
      // Move to next solution immediately when images are loaded
      setActiveIndex((prevIndex) => (prevIndex + 1) % solutions.length)
    }
  }, [loadedImages, solutions.length])

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1)
  }

  // Progress indicator for the solution changes
  const ProgressIndicator = () => {
    return (
      <div className="flex justify-center mt-2 space-x-2">
        {solutions.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-6 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white" : "bg-white/30"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="w-full bg-black text-white flex justify-center items-center py-12 lg:py-24">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        {/* Heading with dynamic text */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">All in One Solution</h2>
          <div className="h-0.5 w-40 sm:w-64 md:w-96 bg-white mx-auto"></div>
          <ProgressIndicator />
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 mx-auto">
          {/* Left column - Solution cards */}
          <div className="space-y-4 lg:col-span-2">
            {solutions.map((solution, idx) => (
              <div
                key={solution.id}
                className={`bg-white bg-opacity-10 rounded-xl p-4 sm:p-5 backdrop-blur-sm transition-all duration-500 cursor-pointer ${
                  idx === activeIndex ? "ring-2 ring-white ring-opacity-50 scale-[1.02]" : ""
                }`}
                onClick={() => setActiveIndex(idx)}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      idx === activeIndex ? "bg-white text-black" : "bg-white/50 text-black"
                    }`}
                  >
                    <span className="font-bold text-sm">{solution.id}</span>
                  </div>
                  <div className="w-full">
                    <h3
                      className={`font-medium text-base sm:text-lg transition-colors duration-300 ${
                        idx === activeIndex ? "text-white" : "text-white/70"
                      }`}
                    >
                      {solution.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right column - Image showcase (larger) */}
          <div className="rounded-xl overflow-hidden relative lg:col-span-3">
            <div className="relative w-full aspect-[16/9] md:aspect-[16/10] lg:aspect-[16/11]">
              {solutions.map((solution, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    idx === activeIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                    onLoad={handleImageLoad}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
