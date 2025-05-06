'use client'
import carSelling from "@/public/section/sec/CarSellingPlatform.jpg"
import cyber from "@/public/section/sec/CybersecurityRiskManagementPlatform.jpg"
import hr from "@/public/section/sec/HRM.jpg"
import vehicle from "@/public/section/sec/vehicleshippingservices.jpg"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"


export default function Solutions() {

  const [carouselIndex, setCarouselIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState(0)
  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1)
  }
  const scrollToSection = () => {
    const element = document.getElementById('target-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex:number) => (prevIndex + 1) % 4)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-full lg:my-24 my-12  w-full bg-white text-[#0e0628] flex items-center justify-center">
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
        <div className="w-full lg:w-1/2 h-[50vh] md:h-[60vh] lg:h-[80vh] relative">
          <div className="h-full w-full overflow-hidden">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${-100 * carouselIndex}%)` }}
            >
              {/* Slide 1 */}
              <div className="min-w-full h-full relative bg-gray-100">
                <Image
                  src={vehicle || "/placeholder.svg"}
                  alt="Vehicle Shipping Services"
                  className="object-fill"
                  fill
                  onLoad={handleImageLoad}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 w-full">
                  <h3 className="text-white text-xl font-bold">Vehicle Shipping Services</h3>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="min-w-full h-full relative bg-gray-100">
                <Image
                  src={cyber || "/placeholder.svg"}
                  alt="Cybersecurity Risk Management"
                  className="object-fill"
                  fill
                    onLoad={handleImageLoad}
                    sizes="(max-width: 1024px) 100vw, 60vw"/>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 w-full">
                  <h3 className="text-white text-xl font-bold">Cybersecurity Risk Management</h3>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="min-w-full h-full relative bg-gray-100">
                <Image
                  src={carSelling || "/placeholder.svg"}
                  alt="Car Selling Platform"
                  fill
                  className="object-fill"
                    
                    onLoad={handleImageLoad}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 w-full">
                  <h3 className="text-white text-xl font-bold">Car Selling Platform</h3>
                </div>
              </div>

              {/* Slide 4 */}
              <div className="min-w-full h-full relative bg-gray-100">
                <Image src={hr || "/placeholder.svg"} alt="Human Resource Management" fill
                    className="object-fill"
                    
                    onLoad={handleImageLoad}
                    sizes="(max-width: 1024px) 100vw, 60vw"/>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 w-full">
                  <h3 className="text-white text-xl font-bold">Human Resource Management</h3>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-3 z-10">
              {[0, 1, 2, 3].map((index) => (
                <button
                  key={index}
                  onClick={() => setCarouselIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    carouselIndex === index ? "bg-[#6208ca] scale-110" : "bg-white/70 hover:bg-white"
                  }`}
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