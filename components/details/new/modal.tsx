"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
  backgroundIcon?: string
}

export const Modal = ({ isOpen, onClose, title, content, backgroundIcon }: ModalProps) => {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscKey)

    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      window.removeEventListener("keydown", handleEscKey)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  // Render description with potential list
  const renderModalContent = (desc: string) => {
    const listRegex = /\s+(?=\d+\.\s)/
    const parts = desc.split(listRegex)

    if (parts.length <= 1) {
      return <p className="text-gray-800 leading-relaxed">{desc}</p>
    }

    const intro = parts[0]
    const listItems = parts.slice(1)

    return (
      <div className="text-gray-800 leading-relaxed">
        <p className="mb-3">{intro}</p>
        {listItems.map((item, index) => (
          <p key={index} className="mb-2 pl-4 relative">
            <span className="absolute left-0">{index + 1}.</span> {item.trim().replace(/^\d+\.\s/, "")}
          </p>
        ))}
      </div>
    )
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-purple-500/10"
                initial={{
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  width: `${Math.random() * 200 + 100}px`,
                  height: `${Math.random() * 200 + 100}px`,
                  opacity: 0.1,
                }}
                animate={{
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>

          {/* Modal content */}
          <motion.div
            className="relative bg-white rounded-lg shadow-xl w-11/12 max-w-2xl max-h-[90vh] overflow-auto"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Modal header with icon */}
            <div className="p-6 border-b border-gray-200 flex items-center">
              {backgroundIcon && (
                <div className="mr-4 bg-white rounded-full border border-gray-200 shadow-md p-2 flex-shrink-0">
                  <img
                    src={backgroundIcon || "/placeholder.svg"}
                    alt={`${title} icon`}
                    className="w-8 h-8 object-contain"
                    loading="lazy"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold text-[#A174E4]">{title}</h3>
            </div>

            {/* Modal body */}
            <div className="p-6">{renderModalContent(content)}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
