'use client'

import React, { useState } from 'react';
// No need for Image import if not used directly here
import { motion } from 'framer-motion';
import cn from 'classnames';

interface IndustryCardProps {
    title: string
    backgroundIcon: string
    description: string
    number: number | string
}

// Helper function to render description with potential list
const renderDescription = (desc: string) => {
    // Regex to split the string just BEFORE a number followed by a period and space (e.g., " 1. ")
    // It uses a positive lookahead (?=...) to split without consuming the delimiter pattern itself.
    const listRegex = /\s+(?=\d+\.\s)/;
    const parts = desc.split(listRegex);

    if (parts.length <= 1) {
        // No list found, render as a single paragraph
        return <p className="text-gray-800 text-xs sm:text-sm leading-relaxed drop-shadow-sm">{desc}</p>;
    }

    // List found, render the intro and then each item
    const intro = parts[0];
    const listItems = parts.slice(1);

    return (
        <div className="text-gray-800 text-xs sm:text-sm leading-relaxed drop-shadow-sm">
            {/* Render the introductory text */}
            <p className="mb-1">{intro}</p> {/* Add some margin below intro */}
            {/* Render each list item potentially as separate paragraphs or divs */}
            {listItems.map((item, index) => (
                // Using div for block display, adjust styling as needed
                 // Add small top margin for spacing between list items
                <p key={index} className="mt-0.5"> 
                    {item.trim()} {/* Trim whitespace */}
                </p>
                // Alternatively, for more semantic HTML (but more complex parsing):
                // You could try parsing the number and text to use <ol> and <li>
                // But for display purposes, multiple <p> often suffice.
            ))}
        </div>
    );
};


export const IndustryCard = ({ number, title, description, backgroundIcon }: IndustryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative h-full w-full max-w-sm mx-auto"
      initial={{ opacity: 0.8, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 15 }}
    >
        {/* --- Floating Icon --- */}
        <div className="absolute z-20 -top-8 sm:-top-9 md:-top-10 left-1/2 transform -translate-x-1/2">
            <div className="relative bg-white rounded-full border border-gray-200 shadow-lg
                        w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20
                        flex items-center justify-center
                        overflow-hidden
                        transition-all duration-300 hover:shadow-xl">
                {backgroundIcon ? (
                <img
                    src={backgroundIcon}
                    alt={`${title || 'Feature'} icon`}
                    className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain"
                    loading="lazy"
                />
                ) : (
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-400 text-xl">
                    {title ? title.charAt(0).toUpperCase() : '?'}
                    </span>
                </div>
                )}
            </div>
        </div>

      {/* --- Inner Container --- */}
      <div
        className={cn(
          "relative h-full w-full rounded-lg shadow-lg overflow-hidden",
          "p-[2px] gradient-border-purple-cyan"
        )}
      >
        {/* Actual Content Background and Text */}
        <div
          className="bg-white bg-opacity-10
                     h-full w-full
                     rounded-lg
                     pt-10 pb-4 sm:pb-6 px-4 sm:px-6
                     text-center relative"
        >
          {/* Number at top-left */}
          <span className="absolute top-2 left-3 text-lg sm:text-xl font-bold text-black drop-shadow-sm">
            {number}.
          </span>

          {/* Title */}
          <h3 className="text-sm sm:text-base font-semibold text-[#A174E4] uppercase mb-2 leading-tight drop-shadow-sm">
            {title}
          </h3>

          {/* Description - Rendered using the helper function */}
          {renderDescription(description)}

        </div>

        {/* --- Animated Underline Bar --- */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
          initial={{ scaleX: 0, originX: 0 }}
          animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};