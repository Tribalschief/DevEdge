"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import uae from "@/public/locations/UAE.jpg";
import ksa from "@/public/locations/KSA.jpg";
import uk from "@/public/locations/Uk.webp";
import gr from "@/public/locations/GERMANY.jpg";
import nz from "@/public/locations/NZ.jpg";
import qt from "@/public/locations/Qatar.jpg";
import bh from "@/public/locations/BAHRAIN.jpg";
import eg from "@/public/locations/Egypt.webp";
import pk from "@/public/locations/PAK.jpeg";

export function Locations() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Trigger when container starts entering and fully leaves viewport
  });

  // Parallax effect for the main title or section description (if you had one)
  // const titleY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Sample locations - replace with actual locations when available
  const locations = [
    { name: "UAE", image: uae.src, speed: 0.05 }, // Added speed factor
    { name: "KSA", image: ksa.src, speed: 0.1 },
    { name: "UK", image: uk.src, speed: 0.03 },
    { name: "Germany", image: gr.src, speed: 0.08 },
    { name: "New Zealand", image: nz.src, speed: 0.06 },
    { name: "Qatar", image: qt.src, speed: 0.12 },
    { name: "Bahrain", image: bh.src, speed: 0.04 },
    { name: "Egypt", image: eg.src, speed: 0.09 },
    { name: "Pakistan", image: pk.src, speed: 0.07 },
  ];

  return (
    <section
      ref={containerRef}
      className="lg:py-24 py-12 overflow-hidden relative" // Added a subtle gradient bg
    >
      {/* Optional: A subtle background element that moves slower for depth */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 200]), // Moves slowly downwards
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.1, 0]),
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* You could add a title here that also has a parallax effect */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-slate-800 mb-20"
          // style={{ y: titleY }} // If you uncomment titleY above
        >
          Our Global Presence
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"> {/* Adjusted grid for better spacing with parallax */}
          {locations.map((location, index) => {
            // Each card gets its own transform based on the global scrollYProgress
            // but scaled by its individual speed factor.
            // The range [-100, 100] means it will move up and down as you scroll past it.
            // Adjust the multiplier (e.g., 100 * location.speed) for more or less movement.
            const cardY = useTransform(
              scrollYProgress,
              [0, 1], // Input range: scroll progress from 0 to 1
              [-150 * location.speed * (index % 2 === 0 ? 1 : 1.5), 150 * location.speed * (index % 2 === 0 ? 1 : 1.5)] // Output range for y
            );

            // Parallax for the image inside the card (moves slightly differently than the card)
            const imageY = useTransform(
              scrollYProgress,
              [0, 1],
              [20 * location.speed, -20 * location.speed]
            );

            return (
              <motion.div
                key={location.name} // Use a more stable key like location.name if unique
                style={{ y: cardY }} // Parallax for the whole card
                initial={{ opacity: 0, y: 50 }} // Initial animation a bit lower
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is in view
                className="relative group overflow-hidden rounded-xl shadow-xl h-96" // Increased height slightly
              >
                <motion.div
                  className="absolute inset-0 w-full h-full"
                  style={{ y: imageY }} // Parallax for the image container
                >
                  <Image
                    src={location.image || "/placeholder.svg"}
                    alt={location.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" // Zoom on hover
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end">
                  <h3 className="text-white text-2xl md:text-3xl font-bold p-6 transition-all duration-300 group-hover:pb-8"> {/* Text slightly moves on hover */}
                    {location.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}