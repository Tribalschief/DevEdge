import React from 'react'
import Image from 'next/image'
import header from '@/public/header.png'

const ContactHeader = () => {
  return (
    <div className="relative mt-20 lg:mt-[120px] sm:mt-[80px] md:mt-[100px] h-[30vh] lg:h-[35vh] xl:h-[40vh]">
      {/* The container needs proper height to contain the image */}
      <div className="relative h-[300px] ">
        <Image 
          src={header} 
          alt="contact header"
          fill
          style={{ objectFit: 'cover' }}
          priority
                    
        />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="px-6 sm:px-12 md:px-20 lg:px-48 text-white">
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4 lg:mb-6 drop-shadow-md">
            Contact
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-xl font-medium mt-1 sm:mt-2 md:mt-3 lg:mt-4 px-1 sm:px-2 md:px-4 lg:px-6 drop-shadow-md">
          We don’t just consult — we build, secure, and transform your business for lasting success
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactHeader