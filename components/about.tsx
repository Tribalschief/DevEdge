import Image from 'next/image'
import about from '@/public/about.jpg'

export const AboutHero = () => {
  return (
    <div className="relative">
  <Image 
    src={about} 
    alt="service" 
    width={500}
    height={300}
    className="w-full h-auto object-cover"
  />
  
  <div className="absolute inset-0 flex items-center justify-center text-gray-50 p-4 md:p-8">
    <div className='flex flex-col justify-center items-center max-w-4xl mx-auto text-center'>
      <h1 className='text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4'>
        About DevEdgeConsulting
      </h1>
      <p className='text-sm sm:text-base md:text-lg lg:text-xl font-semibold mt-2 md:mt-4 px-2'>
        DevEdge Consulting works with organizations across Pakistan, 
        UAE, KSA and beyond to help them achieve operational excellence, 
        manage risks, and embrace digital transformation with confidence.
      </p>
    </div>
  </div>
</div>
  )
}
