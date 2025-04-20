import React from 'react'
import Image from 'next/image'
import header from '@/public/header.png'

const ContactHeader = () => {
  return (
    <div className="relative my-20 sm:my-20 md:my-20 lg:my-[100px]">
      {/* The container needs proper height to contain the image */}
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Contact
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold max-w-3xl">
            We don't just consult — we commit. DevEdge is your partner in strengthening defenses, 
            elevating audit integrity, and engineering secure, resilient systems that stand up to 
            real-world threats.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactHeader