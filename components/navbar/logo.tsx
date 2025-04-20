import React from 'react'
import logo from '@/public/logoremovebg.png'
import darkLogo from '@/public/whitelogo.png'
import Image from 'next/image'

const Logo = ({ dark }: { dark: boolean }) => {
  return (
    <div className="relative w-[100px] sm:w-[100px] md:w-[130px] lg:w-36 xl:w-40">
      <Image
        src={dark ? darkLogo : logo}
        alt="Logo"
        className="w-auto mb-4 md:mb-4 lg:mb-0 h-auto object-contain "
        
      />
    </div>
  )
}

export default Logo
