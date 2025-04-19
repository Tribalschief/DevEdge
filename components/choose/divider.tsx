import React from 'react'
import why from '@/public/Why.svg'
import Image from 'next/image'
export const Divider = ({image }:{image:any}) => {
  return (
    <div className="relative w-full h-[400px]">
        <Image src={image} alt ="service"   width={500}
  height={500}
  style={{ width: '100%', height: '200%' }}
/>
        <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className='flex flex-col justify-center items-center mb-40'>
            <h1 className=' text-3xl lg:text-4xl mt-64  font-bold'>
            <h1>Why Choose <span className='text-purple-700'>DevEdge Consulting</span></h1>
            </h1>
            <h2 className='text-xl text-center lg:text-3xl sm:justify-center mt-10 font-semibold'>
            We don’t just consult — we commit. DevEdge is your partner<br/> in strengthening defenses, elevating audit integrity, and<br/> engineering secure, resilient systems that stand up to real-<br/>world threats.
            </h2>
            </div>
            <div className='hidden lg:flex absolute top-20 right-[50px] space-x-2'>
  <Image src={why} alt="logo" width={240} height={240}/>
</div>
        </div>
    </div>
  )
}
