import React from 'react'
import logo from '@/public/logoremovebg.png'
import darkLogo from '@/public/whitelogo.png'
import Image from 'next/image'

const Logo = ({ dark }: { dark: boolean }) => {
  return (
    <div className="relative w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 h-auto">
      <Image
        src={dark ? darkLogo : logo}
        alt="Logo"
        className="w-full h-auto object-contain"
        sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
        priority
      />
    </div>
  )
}

export default Logo
