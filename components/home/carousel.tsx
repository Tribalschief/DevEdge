"use client"

import { useState, useEffect, useCallback } from "react"
import Vision2030Hero from "./vision"
import GlobalExpertiseHero from "./hero"
import ServicesHero from "./services-hero"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  { id: 0, component:  <GlobalExpertiseHero /> },
  { id: 1, component:  <Vision2030Hero />},
  { id: 2, component: <ServicesHero /> },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [])

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > currentSlide ? 1 : -1)
      setCurrentSlide(index)
    },
    [currentSlide],
  )

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 7000) // Change slide every 7 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  // Variants for slide animations
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <div className="relative lg:h-[700px] min-h-screen lg:mt-[100px] mt-auto overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
        >
          {slides[currentSlide].component}
        </motion.div>
      </AnimatePresence>

      {/* Dots navigation */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-purple-600 scale-110" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
