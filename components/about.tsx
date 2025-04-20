import Image from 'next/image'
import about from '@/public/about.jpg'

export const AboutHero = () => {
  return (
    <div className="relative">
      <div className="
      relative 
      mt-[100px] 
      sm:mt-[100px] 
      md:mt-[100px] 
      lg:mt-[120px] 
      xl:mt-[130px] 
      h-[30vh] 
      
      xl:h-[55vh] 

    ">
        <Image 
          src={about} 
          alt="About DevEdgeConsulting" 
          fill
          priority
          className="object-cover"
        />
        
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-gray-50 p-4 md:p-8 lg:p-12">
          <div className="flex flex-col justify-center items-center max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4 lg:mb-6 drop-shadow-md">
              About DevEdge Consulting
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl font-medium mt-1 sm:mt-2 md:mt-3 lg:mt-4 px-1 sm:px-2 md:px-4 lg:px-6 drop-shadow-md">
              DevEdge Consulting works with organizations across Pakistan, 
              UAE, KSA and beyond to help them achieve operational excellence, 
              manage risks, and embrace digital transformation with confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
