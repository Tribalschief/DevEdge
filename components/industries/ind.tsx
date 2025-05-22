'use client'

import { useRef } from "react";
import {motion , useScroll, useTransform} from "framer-motion";
export default function IndustriesSection() {
 const sectionHeaderRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionHeaderRef,
    offset: ["start end", "end center"], // Effect prominent as top of section scrolls to center of viewport
  });

  // Heading parallax: moves up a bit faster
  const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]); // Moves up 30% of its height
  const headingOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 1]); // Fades in

  // Paragraph parallax: moves up slower, or even slightly down for contrast
  const paragraphY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]); // Moves up 15% of its height
  const paragraphOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [0.3, 1, 1]); // Fades in a bit later

  return (
    <div className="relative overflow-hidden bg-[#f4e7ff]">
      {/* SVG Background Curve */}
      <svg
        className="absolute top-0 left-0 w-full h-[100px] sm:h-[150px] md:h-[200px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,160 C480,0 960,0 1440,160 L1440,0 L0,0 Z"
        />
      </svg>

      {/* Text Content */}
      <div ref={sectionHeaderRef} className="relative overflow-hidden"> {/* Added ref and overflow-hidden */}
      <div
        className="relative z-10 text-center px-4 sm:px-8 md:px-12 lg:px-20
                      pt-[100px] sm:pt-[120px] md:pt-[150px] lg:pt-[180px]
                      pb-6 sm:pb-8 md:pb-10 lg:pb-12"
      >
        <motion.h2
          style={{ y: headingY, opacity: headingOpacity }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800" // Added text color for better contrast if bg changes
          initial={{ opacity: 0, y: 30 }} // Initial state for a potential whileInView animation
          whileInView={{ opacity: 1, y: 0 }} // Animate into view (alternative to scroll-linked opacity)
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }} // Trigger when 50% is in view
        >
          Industries We Work With
        </motion.h2>
        <motion.p
          style={{ y: paragraphY, opacity: paragraphOpacity }}
          className="mt-4 sm:mt-5 md:mt-6 text-gray-700  // Adjusted top margin slightly, and text color
                     text-base sm:text-lg md:text-xl lg:text-2xl // Adjusted text sizes slightly for readability
                     max-w-4xl mx-auto" // Adjusted max-width
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Our industry knowledge and expertise are the cornerstone of our organization,
          positioning us as emerging leaders in our areas of work. Our rich experience and
          diverse backgrounds enhance our ability to provide extraordinary solutions with
          local emphasis.
        </motion.p>
      </div>
    </div>

    </div>
  );
}
  
  