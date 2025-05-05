import Image from 'next/image';
import about from '@/public/about.jpg';

export const AboutHero = () => {
  return (
    <div className="relative w-full">
      <div
        className="
          relative 
          mt-10 sm:mt-16 md:mt-20 lg:mt-28 xl:mt-32
          
          // --- Responsive Aspect Ratios ---
          // Default (Mobile First): Still reasonably tall
          aspect-video // (16:9 ≈ 1.78:1) - Keep this for smaller screens

          // Large screens: Make it noticeably wider/shorter
          lg:aspect-[5/2] // (2.5:1) - Wider than 2:1 used previously

          // Extra Large screens: Make it even wider/shorter
          xl:aspect-[3/1] // (3:1) - Wider than 5:2 used previously
        "
      >
        <Image
          src={about}
          alt="About DevEdgeConsulting"
          fill
          priority
          className="object-cover" // Adjusts image within the container
        />

        {/* Overlay and Text Content */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-gray-50 p-2 sm:p-5 md:p-8 lg:p-12">
          <div className="flex flex-col justify-center items-center w-full px-2 sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6 drop-shadow-lg">
              About DevEdge Consulting
            </h1>
            <p className="text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium mt-1 sm:mt-2 md:mt-3 lg:mt-4 drop-shadow-lg">
              DevEdge Consulting works with organizations across Pakistan, UAE,
              KSA and beyond to help them achieve operational excellence, manage
              risks, and embrace digital transformation with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};