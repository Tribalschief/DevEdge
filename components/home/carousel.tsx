"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"
import { ChevronLeft, ChevronRight } from "lucide-react"
import HeroSection from "./hero"
import VisionSection from "./vision"
import ServicesSection from "./services-hero"

const slides = [
  {
    id: 0,
    component: <ServicesSection />,
    
  },
  {
    id: 1,
    component: <VisionSection />,
    
  },
  {
    id: 2,
    component: <HeroSection />,
   
  },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)

  const constraintsRef = useRef(null)
  const [width, setWidth] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Update width on resize for responsive behavior
  useEffect(() => {
    const updateDimensions = () => {
      setWidth(window.innerWidth)
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  const nextSlide = useCallback(() => {
    if (isDragging) return
    setDirection(1)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [isDragging])

  const prevSlide = useCallback(() => {
    if (isDragging) return
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [isDragging])

  const goToSlide = useCallback(
    (index: number) => {
      if (isDragging) return
      setDirection(index > currentSlide ? 1 : -1)
      setCurrentSlide(index)
    },
    [currentSlide, isDragging],
  )

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 7000) // Change slide every 7 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  // Pause auto-play on hover or drag
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  // Handle drag gestures
  const handleDragStart = () => {
    setIsDragging(true)
    setIsAutoPlaying(false)
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setIsDragging(false)
    setIsAutoPlaying(true)

    // Determine if we should change slides based on drag distance
    const threshold = width * (isMobile ? 0.1 : 0.15) // Adjust threshold for mobile

    if (info.offset.x < -threshold) {
      nextSlide()
    } else if (info.offset.x > threshold) {
      prevSlide()
    }
  }

  // Variants for slide animations
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? width : -width,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? width : -width,
      opacity: 0,
    }),
  }

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={constraintsRef}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="w-full"
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          dragDirectionLock
        >
          {slides[currentSlide].component}
        </motion.div>
      </AnimatePresence>

      

      {/* Navigation buttons - DGDA style */}
      <button
        onClick={prevSlide}
        className="absolute left-6 lg:top-[85%] top-[95%] transform -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black hover:bg-[#6208ac] flex items-center justify-center shadow-md  transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 lg:top-[85%] top-[95%] transform -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-black hover:bg-[#6208ac] flex items-center justify-center shadow-md  transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Pagination indicators - DGDA style */}
      <div className="absolute lg:top-[85%] top-[97%] right-20 z-30 flex items-center">
  <span className="text-[#6208ac] text-sm mr-4 font-medium">
    {String(currentSlide + 1).padStart(2, "0")}
  </span>
  {/* Added items-center here for better alignment if heights differ slightly */}
  <div className="flex space-x-1 items-center">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => goToSlide(index)}
        className={`
          transition-all duration-300 ease-in-out  
          ${
            currentSlide === index
              ? "bg-[#6208ac] w-12 h-[6px] rounded-md" // Active: short bar, h-[6px] is 1.5 (0.375rem)
              : "bg-gray-300 w-2 h-2 rounded-full" // Inactive: circle (used gray-300 for better visibility than gray-100 if on light bg)
          }
        `}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
</div>
    </div>
  )
}
