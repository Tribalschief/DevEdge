
"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence, type PanInfo, useAnimation } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"
import HeroSection from "./hero"
import VisionSection from "./vision"
import ServicesSection from "./services-hero"

const slides = [
  { id: 0, component: <ServicesSection /> },
  { id: 1, component: <VisionSection /> },
  { id: 2, component: <HeroSection /> },
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)
  
  const constraintsRef = useRef(null)
  const [width, setWidth] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")

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
      style={{ minHeight: "100vh" }}
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

      {/* Navigation controls */}
      <div className="fixed bottom-6 left-1/2 flex -translate-x-1/2 space-x-4 z-10">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow navigation */}
      <button
        className="fixed left-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white z-10 hover:bg-black/50 transition-colors"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        className="fixed right-4 top-1/2 -translate-y-1/2 bg-black/30 p-2 rounded-full text-white z-10 hover:bg-black/50 transition-colors"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        →
      </button>
    </div>
  )
}