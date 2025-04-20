import React from 'react'
import Image from 'next/image'
import rfp from '@/public/rfp.png'

const ContactHeader = () => {
  return (
    <div className="relative w-full h-36 sm:h-48 md:h-64 lg:h-80 xl:h-96 
                    my-6 mt-20 sm:my-10 md:my-16  xl:mt-[120px] lg:mt-[120px] sm:mt-[80px] md:mt-[110px]">
      <div className="absolute inset-0">
        <Image 
          src={rfp} 
          alt="RFP header"   
          fill
          priority
          sizes="(max-width: 640px) 100vw, 
                 (max-width: 768px) 100vw, 
                 (max-width: 1024px) 100vw, 
                 100vw"
          className="object-cover"
          style={{ objectPosition: 'center' }}
        />
      </div>
      
      {/* Optional overlay for better text visibility if needed */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div> 
      
      {/* Optional content container */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">
            Request For Proposal
          </h1>
        </div>
      </div> 
    </div>
  )
}

export default ContactHeader