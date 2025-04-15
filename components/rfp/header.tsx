import React from 'react'
import Image from 'next/image'
import rfp from '@/public/rfp.png'

const ContactHeader = () => {
  return (
    <div className="relative w-full h-36 sm:h-40 md:h-48 my-10 sm:my-16 md:my-[100px]">
      <Image 
        src={rfp} 
        alt="service"   
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: 'center' }}
      />
    </div>
  )
}

export default ContactHeader