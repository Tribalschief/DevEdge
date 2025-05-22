"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface Section {
  id: string
  title: string
}

export function PageProgressIndicator({ sections }: { sections: Section[] }) {
  const [activeSection, setActiveSection] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const sectionElements = sections.map((section) => document.getElementById(section.id))

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0 // Avoid division by zero
      setScrollProgress(progress)

      const viewportHeight = window.innerHeight
      const viewportMiddle = scrollTop + viewportHeight / 2

      let currentSectionIndex = -1 // Use -1 to indicate no section found initially

      // Find the section whose range includes the viewportMiddle
      // This is more robust than checking if element is "most in view"
      for (let i = 0; i < sectionElements.length; i++) {
        const element = sectionElements[i];
        if (!element) continue;

        const { top: elementTopRelative, bottom: elementBottomRelative } = element.getBoundingClientRect();
        const elementTopAbsolute = elementTopRelative + scrollTop;
        const elementBottomAbsolute = elementBottomRelative + scrollTop;

        if (viewportMiddle >= elementTopAbsolute && viewportMiddle < elementBottomAbsolute) {
          currentSectionIndex = i;
          break; // Found the active section
        }
      }
      
      // If no section is "active" by the middle rule (e.g., between sections, or at the very top/bottom)
      // Fallback: find the section closest to the top of the viewport
      if (currentSectionIndex === -1) {
        let minDistance = Infinity;
        let closestSectionIndex = 0; // Default to first section
        sectionElements.forEach((element, index) => {
          if (!element) return;
          const { top } = element.getBoundingClientRect();
          const distance = Math.abs(top); // Distance from viewport top
          if (distance < minDistance) {
            minDistance = distance;
            closestSectionIndex = index;
          }
        });
        currentSectionIndex = closestSectionIndex;
      }
      
      // Ensure currentSectionIndex is valid if sections exist
      if (sections.length > 0 && currentSectionIndex === -1) {
        currentSectionIndex = 0;
      }


      if (currentSectionIndex !== -1) { // Only update if a valid section was found
          setActiveSection(currentSectionIndex);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true }) // Use passive listener for better scroll performance
    handleScroll() // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections])

  return (
    <div className="fixed top-1/2 right-3 sm:right-6 transform -translate-y-1/2 z-50 ">
      {/* Adjust right padding for smaller screens */}
      <div className="bg-gray-900 text-white rounded-lg py-2 px-2 sm:py-4 sm:px-4 shadow-lg">
        {/* Adjust gap for smaller screens */}
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          {/* Overall progress bar - adjust dimensions */}
          <div className="w-0.5 sm:w-1 h-24 sm:h-32 bg-gray-700 rounded-full relative mb-1 sm:mb-2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-white rounded-full"
              style={{
                height: `${scrollProgress * 100}%`,
                originY: 0,
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.1 }}
            />
          </div>

          {/* Section indicators */}
          {sections.map((section, index) => (
            <motion.div
              key={section.id} // Use section.id for key if unique, otherwise index is fine
              className={`relative flex items-center cursor-pointer group`}
              onClick={() => {
                const element = document.getElementById(section.id)
                if (element) {
                  window.scrollTo({
                    top: element.offsetTop,
                    behavior: "smooth",
                  })
                }
              }}
            >
              {/* Adjust dot size */}
              <motion.div
                className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full ${index === activeSection ? "bg-white" : "bg-gray-600"}`}
                initial={{ scale: 0.8 }}
                animate={{
                  scale: index === activeSection ? 1.2 : 0.8,
                  backgroundColor: index === activeSection ? "#ffffff" : "#4b5563", // Tailwind gray-600
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Section title tooltip - adjust text size and padding */}
              <div className="absolute right-full mr-2 sm:mr-3 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <div className="bg-gray-800 text-white text-xs sm:text-sm py-0.5 px-1.5 sm:py-1 sm:px-2 rounded">
                  {section.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
