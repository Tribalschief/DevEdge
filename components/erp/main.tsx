"use client"
import carSelling from "@/public/section/sec/CarSellingPlatform.jpg"
import cyber from "@/public/section/sec/CybersecurityRiskManagementPlatform.jpg"
import hr from "@/public/section/sec/HRM.jpg"
import vehicle from "@/public/section/sec/vehicleshippingservices.jpg"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Solutions() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState(0)

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1)
  }

  const scrollToSection = () => {
    const element = document.getElementById("target-section")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  const goToSlide = (index: number) => {
  // implementation to navigate to the slide at the given index
  setCarouselIndex(index);
};


  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % 4)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

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
        <div className="w-full lg:w-1/2 lg:h-[800px] h-[60vh] md:h-[70vh]  relative">
          <div className="h-full w-full overflow-hidden">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${-100 * carouselIndex}%)` }}
            >
              {/* Slide 1 */}
              <div className="min-w-full h-full relative  p-2">
                <Image
                  src={vehicle || "/placeholder.svg"}
                  alt="Vehicle Shipping Services"
                  className="object-contain"
                  fill
                  priority
                  onLoad={handleImageLoad}
                  sizes="100vw"
                  quality={90}
                />
                
              </div>

              {/* Slide 2 */}
              <div className="min-w-full h-full relative  p-2">
                <Image
                  src={cyber || "/placeholder.svg"}
                  alt="Cybersecurity Risk Management"
                  className="object-contain"
                  fill
                  priority
                  onLoad={handleImageLoad}
                  sizes="100vw"
                  quality={90}
                />
                
              </div>

              {/* Slide 3 */}
              <div className="min-w-full h-full relative  p-2">
                <Image
                  src={carSelling || "/placeholder.svg"}
                  alt="Car Selling Platform"
                  className="object-contain"
                  fill
                  priority
                  onLoad={handleImageLoad}
                  sizes="100vw"
                  quality={90}
                />
               
              </div>

              {/* Slide 4 */}
              <div className="min-w-full h-full relative  p-2">
                <Image
                  src={hr || "/placeholder.svg"}
                  alt="Human Resource Management"
                  className="object-contain"
                  fill
                  priority
                  onLoad={handleImageLoad}
                  sizes="100vw"
                  quality={90}
                />
                
              </div>
            </div>
            <button
                    onClick={() => setCarouselIndex((prevIndex) => (prevIndex - 1) % 4)}
                    className="absolute left-6 lg:top-[62%] top-[45%] transform -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-[#6208ac] flex items-center justify-center shadow-md  transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-4 h-4 text-gray-700 hover:text-white" />
                  </button>
            
                  <button
                    onClick={() =>  setCarouselIndex((prevIndex) => (prevIndex + 1) % 4)}
                    className="absolute right-6 lg:top-[62%] top-[45%] transform -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/90 hover:bg-[#6208ac] flex items-center justify-center shadow-md  transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-4 h-4 text-gray-700 hover:text-white" />
                  </button>
            {/* Carousel Controls */}
            <div className="absolute lg:top-[65%] top-[45%] gap-x-2 right-20 z-10 flex items-center">
              {[0, 1, 2, 3].map((index) => (
                <button
        key={index}
        onClick={() => goToSlide(index)}
        className={`
          transition-all duration-300 ease-in-out  
          ${
            carouselIndex === index
              ? "bg-[#6208ac] w-12 h-[6px] rounded-md" // Active: short bar, h-[6px] is 1.5 (0.375rem)
              : "bg-gray-300 w-2 h-2 rounded-full" // Inactive: circle (used gray-300 for better visibility than gray-100 if on light bg)
          }
        `}
        aria-label={`Go to slide ${index + 1}`}
      />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
