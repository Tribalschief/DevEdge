"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface CounterProps {
  end: number
  duration?: number
  label: string
  prefix?: string
  suffix?: string
}

export function Counter({ end, duration = 2, label, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  const { scrollYProgress } = useScroll({
    target: counterRef,
    offset: ["start bottom", "end bottom"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0])

  useEffect(() => {
    const handleScroll = () => {
      if (counterRef.current && !hasAnimated) {
        const rect = counterRef.current.getBoundingClientRect()
        if (rect.top <= window.innerHeight * 0.8) {
          const increment = end / (duration * 60)
          let currentCount = 0

          const timer = setInterval(() => {
            currentCount += increment
            if (currentCount >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(currentCount))
            }
          }, 1000 / 60)

          setHasAnimated(true)
          return () => clearInterval(timer)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on mount

    return () => window.removeEventListener("scroll", handleScroll)
  }, [end, duration, hasAnimated])

  return (
    <motion.div ref={counterRef} style={{ opacity, y }} className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-bold">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-lg text-gray-600 mt-2">{label}</div>
    </motion.div>
  )
}
