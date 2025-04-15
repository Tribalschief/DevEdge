import React from 'react'
import logo from '@/public/whitelogo.png'
import Image from 'next/image'
export const Intro = ({image, title}:{image:any, title?:string}) => {
  return (
    <div className="relative w-full h-64">
        <Image src={image} alt ="service"   width={1200}
  height={600}
  style={{ width: '100%', height: 'auto' }}
/>
        <div className="absolute inset-0 flex items-center justify-center text-white">
            <h1 className='text-white text-7xl mt-16 font-bold'>
            {title}
            </h1>
            <div className='absolute top-10 right-[50px] flex space-x-2'>
            <Image src={logo} alt="logo" width={240} height={240}/>
            </div>
        </div>
    </div>
  )
}
