import React from 'react'
import Image from 'next/image'
import logo from '@/public/CRBP.png'

const TaglineBar = () => {
  return (
    <div className="w-full bg-[#6208CA] text-white flex flex-col md:flex-row items-center  justify-between px-4 py-2 md:px-10 md:py-3 lg:px-20 lg:py-4">
      {/* Tagline - full width on mobile, proportional on larger screens */}
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-center sm:text-left mb-2 md:mb-1">
        Elite Services, Tailored for You
      </h2>
      
      {/* Company name and logo */}
      <div className='flex items-center gap-x-1 md:gap-x-2'>
      <Image
          src={logo}
          alt="DevEdge logo"
          width={100}
          height={50}
          className="h-auto w-auto max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-24"
        />
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold">DevEdge  Consulting</h2>
        
      </div>
    </div>
  )
}

export default TaglineBar