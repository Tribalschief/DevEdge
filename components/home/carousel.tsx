
"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Vision2030Hero from "./vision"
import GlobalExpertiseHero from "./hero"
import ServicesHero from "./services-hero"
import { motion, AnimatePresence, type PanInfo, useAnimation } from "framer-motion"

const slides = [
  { id: 0, component:  <ServicesHero /> },
  { id: 1, component: <Vision2030Hero /> },
  { id: 2, component: <GlobalExpertiseHero /> },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)
  const controls = useAnimation()
  const constraintsRef = useRef(null)
  const [width, setWidth] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  // Update width on resize for responsive behavior
  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth)
    }

    updateWidth()
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
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
    const threshold = width * 0.15 // 15% of screen width

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
      x: direction > 0 ? -width : width,
      opacity: 0,
    }),
  }

  return (
    <div
      className="relative w-full lg:h-[700px] min-h-screen px-auto mt-24 lg:mt-[132px]  sm:mt-24 md:mt-[120px] overflow-hidden bg-white"
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
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          {slides[currentSlide].component}
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows - added for better UX */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 z-10 backdrop-blur-sm hidden sm:block"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 z-10 backdrop-blur-sm hidden sm:block"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-purple-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}