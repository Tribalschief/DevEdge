import React from 'react'

import Image from 'next/image'
import header from '@/public/header.png'

const ContactHeader = () => {
  return (
    <div className="relative w-full h-48 my-[100px]">
        <Image src={header} alt ="service"   width={500}
  height={300}
  style={{ width: '100%', height: '200%' }} className='b'
/>
        <div className="absolute inset-0 flex items-center justify-items-start mx-48 text-white">
            <div className='flex flex-col justify-items-start '>
            <h1 className=' text-6xl mt-64 font-bold'>
            <h1>Contact </h1>
            </h1>
            <h2 className='text-2xl mt-4 font-semibold'>
            We don’t just consult — we commit. DevEdge is your partner<br/> in strengthening defenses, elevating audit integrity, and<br/> engineering secure, resilient systems that stand up to real-<br/>world threats.
            </h2>
            </div>
            
        </div>
    </div>
  )
}

export default ContactHeader