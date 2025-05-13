"use client"
import carSelling from "@/public/section/sec/CarSellingPlatform.jpg"
import cyber from "@/public/section/sec/CybersecurityRiskManagementPlatform.jpg"
import hr from "@/public/section/sec/HRM.jpg"
import vehicle from "@/public/section/sec/vehicleshippingservices.jpg"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "../ui/button" // Assuming Button is correctly imported
import { ChevronLeft, ChevronRight } from "lucide-react"

// Define the slide data - easier to manage
const slides = [
  { src: vehicle, alt: "Vehicle Shipping Services", id: "vehicle" },
  { src: cyber, alt: "Cybersecurity Risk Management", id: "cyber" },
  { src: carSelling, alt: "Car Selling Platform", id: "carSelling" },
  { src: hr, alt: "Human Resource Management", id: "hr" },
];

const totalSlides = slides.length; // Dynamically get the total number of slides

export default function Solutions() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  // const [loadedImages, setLoadedImages] = useState(0) // This seems unused, can be removed if not needed

  // const handleImageLoad = () => {
  //   setLoadedImages((prev) => prev + 1) // Can be removed if not used
  // }

  const scrollToSection = () => {
    const element = document.getElementById("target-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const goToSlide = (index: number) => {
    // Ensure index is within bounds
    if (index >= 0 && index < totalSlides) {
      setCarouselIndex(index);
    }
  };

  const nextSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };


  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide(); // Use nextSlide for consistency
    }, 3000)

    return () => clearInterval(interval)
  }, []) // Empty dependency array ensures this runs once on mount and cleans up on unmount

  return (
    <div className="h-full lg:my-2 my-12 sm:mt-20 w-full bg-white text-[#0e0628] flex items-center justify-center">
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center">
        {/* Left Section with Text */}
        <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-16">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Built for the Future.
              <br />
              Ready Today.
            </h1>
            <h2 className="text-xl md:text-2xl mb-6">Work Smarter. Move Faster. Go Digital.</h2>
            <p className="text-gray-600 text-base md:text-lg">
              Take your business to the next level with our Digital Transformation solutions and start your
              transformation journey with solutions made for real-world results.
            </p>
          </div>
          <Button
            onClick={scrollToSection}
            className="mt-8 bg-[#6208ca] text-white hover:bg-[#6208ca]/80 transition duration-300 ease-in-out"
          >
            Get Free Demo
          </Button>
        </div>

        {/* Right Section with Carousel */}
        <div className="w-full lg:w-1/2 lg:h-[800px] h-[60vh] md:h-[70vh] relative">
          <div className="h-full w-full overflow-hidden">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${-100 * carouselIndex}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={slide.id} className="min-w-full h-full relative p-2">
                  <Image
                    src={slide.src || "/placeholder.svg"}
                    alt={slide.alt}
                    className="object-contain"
                    fill
                    priority={index === 0} // Only first image is high priority initially
                    // onLoad={handleImageLoad} // Can be removed if not used
                    sizes="100vw" // Consider refining this if the carousel is never full viewport width
                    quality={90}
                  />
                </div>
              ))}
            </div>

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-[73%]  transform -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black hover:bg-[#6208ac] flex items-center justify-center shadow-md transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-6 top-[73%]  transform -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black hover:bg-[#6208ac] flex items-center justify-center shadow-md transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>

            {/* Carousel Controls & Current Index */}
            <div className="absolute top-[75%]  gap-x-2 right-20 z-10 flex items-center">
              {/* Current slide text */}
              

              {/* Dot/Bar indicators */}
              {slides.map((_, index) => ( // Use slides.map for indicators to match total slides
                <button
                  key={`indicator-${index}`}
                  onClick={() => goToSlide(index)}
                  className={`
                    transition-all duration-300 ease-in-out
                    ${
                      carouselIndex === index
                        ? "bg-[#6208ac] w-12 h-[6px] rounded-md" // Active
                        : "bg-gray-300 w-2 h-2 rounded-full"   // Inactive
                    }
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
              <span className="text-sm text-gray-700 dark:text-gray-300 mr-3">
                {carouselIndex + 1} 
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}