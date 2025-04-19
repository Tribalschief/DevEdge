import React from 'react'
import logo from '@/public/whitelogo.png'
import Image from 'next/image'
export const Intro = ({image, title}:{image:any, title?:string}) => {
  return (
    <div className="relative w-full h-auto ">
  <Image 
    src={image} 
    alt="service" 
    width={1200}
    height={600}
    style={{ width: '100%', height: '100%' }}
    className="object-cover"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
    <h1 className='text-white text-4xl md:text-5xl lg:text-7xl lg:mt-4 md:mt-16 font-bold text-center px-4'>
      {title}
    </h1>
    <div className='absolute sm:top-0 md:top-5  lg:top-10 right-2 md:right-[30px] lg:right-[50px]'>
      <Image 
        src={logo} 
        alt="logo" 
        width={120} 
        height={120}
        className="w-16 h-16 md:w-32 md:h-32 lg:w-60 lg:h-60"
      />
    </div>
  </div>
</div>
  )
}
