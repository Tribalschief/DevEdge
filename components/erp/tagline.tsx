'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import a from "@/public/services/a.webp"
import b from "@/public/services/b.png"
import c from "@/public/services/c.jpg"
import d from "@/public/services/d.jpg"
import e from "@/public/services/e.png"
import f from "@/public/services/f.png"
import g from "@/public/services/g.png"
import h from "@/public/services/h.png"
// Example logos - replace with your actual logos
const logos = [
  { src: a, alt: 'Logo 1' },
  { src: b, alt: 'Logo 2' },
  { src: c, alt: 'Logo 3' },
  { src: d, alt: 'Logo 4' },
  { src: e, alt: 'Logo 5' },
  { src: f, alt: 'Logo 6' },
  { src: g, alt: 'Logo 7' },
  { src: h, alt: 'Logo 8' },
];

const LogoCarousel = () => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [width, setWidth] = useState(0);
  
  // Duplicate logos to create seamless infinite effect
  const duplicatedLogos = [...logos, ...logos];
  
  // Update width for responsive animation duration
  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);
  
  // Calculate animation duration based on screen width
  const duration = width < 640 ? 15 : width < 1024 ? 20 : 25;
  
  useEffect(() => {
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: -1 * logos.length * 150, // Adjust based on logo size
        transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }
      });
    }
  }, [controls, isHovered, logos.length, duration]);

  return (
    <div className="w-full bg-white py-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-center mb-8">Trusted By</h2>
    <div className="max-w-sm sm:max-w-md md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto overflow-hidden bg-transparent py-4">
      <div 
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={controls}
        >
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 lg:mx-10"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={50}
                className="h-8 sm:h-10 md:h-12 lg:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default LogoCarousel;