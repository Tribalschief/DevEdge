import Image from 'next/image';
import about from '@/public/about.jpg';


export const AboutHero = () => {
  return (
    <div className="relative w-full">
      <div
        className="
          relative 
          mt-6 sm:mt-10 md:mt-16 lg:mt-24 xl:mt-28
          
          // Small screens: Taller aspect ratio for better readability
          aspect-[3/2]  // Mobile default (more square-ish)
          sm:aspect-[4/2] // Small tablets
          md:aspect-[6/2] // Medium screens
          lg:aspect-[9/2] // Large screens (as you had before)
        "
      >
        <Image src={about || "/placeholder.svg"} alt="About DevEdgeConsulting" fill priority className="object-cover" />

        {/* Overlay and Text Content */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/55 md:bg-black/50 flex items-center justify-center text-gray-50 p-4 sm:p-5 md:p-8 lg:p-12">
          <div className="flex flex-col justify-center items-center w-full px-3 sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 drop-shadow-lg">
              About DevEdge Consulting
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium mt-1 sm:mt-2 md:mt-3 lg:mt-4 drop-shadow-lg max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl">
              DevEdge Consulting works with organizations across Pakistan, UAE, KSA and beyond to help them achieve
              operational excellence, manage risks, and embrace digital transformation with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
