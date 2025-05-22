"use client"

import { motion } from "framer-motion"

interface ChapterIndicatorProps {
  title: string
  currentStep: number
  totalSteps: number
}

export function ChapterIndicator({ title, currentStep, totalSteps }: ChapterIndicatorProps) {
  return (
    <div className="bg-gray-900 text-white rounded-lg py-4 px-6 max-w-md mx-auto mb-12">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 rounded-full ${
                index + 1 === currentStep
                  ? "w-16 bg-white"
                  : index + 1 < currentStep
                    ? "w-2 bg-white"
                    : "w-2 bg-gray-600"
              }`}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}