import React from 'react'
import logo from '@/public/logoremovebg.png'
import darkLogo from '@/public/whitelogo.png'
import Image from 'next/image'

const Logo = ({dark}:{dark:boolean}) => {
  return (
    <div className="text-xl font-bold">
      {dark ? (
        <Image src={darkLogo} alt="Logo" width={100} height={100} />
      ) : (
        <Image src={logo} alt="Logo" width={100} height={100} />
      )}
    </div>
  )
}

export default Logo