'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import map1 from '@/public/home/map.svg'
import map2 from '@/public/home/map2.svg'
import globe from '@/public/home/Group.svg'

const WM = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 600, height: 500 })

  useEffect(() => {
    setIsMounted(true)

    const updateSize = () => {
      const width = window.innerWidth < 768 ? window.innerWidth - 40 : 600
      const height = window.innerWidth < 768 ? 300 : 500
      setDimensions({ width, height })
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  if (!isMounted) return null

  return (
    <div className="my-40 min-h-screen flex justify-center items-center relative">
      <Earthmap width={dimensions.width} height={dimensions.height} />
      <GlobeMap  />
    </div>
  )
}

const Earthmap = ({ width, height }: { width: number; height: number }) => {
  const [showMap1, setShowMap1] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMap1(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Image
      src={showMap1 ? map1 : map2}
      alt="Earth Map"
      width={width}
      height={height}
      unoptimized={true}
      priority={true}
    />
  )
}

const GlobeMap = () => {
	const [dimensions, setDimensions] = useState({ width: 328, height: 328 })
	const [scale, setScale] = useState(1)
  
	useEffect(() => {
	  const updateSize = () => {
		const screenWidth = window.innerWidth
		const baseWidth = 328
  
		const width =
		  screenWidth >= 1024 ? 328 : screenWidth < 400 ? screenWidth - 40 : screenWidth / 2
		const height = width // keep circular
		const newScale = width / baseWidth
  
		setDimensions({ width, height })
		setScale(newScale)
	  }
  
	  updateSize()
	  window.addEventListener("resize", updateSize)
	  return () => window.removeEventListener("resize", updateSize)
	}, [])
  
	return (
	  <div className="absolute top-[300px] left-[30px] w-full h-full pointer-events-none">
		<div
		  className="relative mx-auto"
		  style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
		>
		  {/* Globe Image */}
		  <Image
			src={globe}
			alt="Globe Map"
			width={dimensions.width}
			height={dimensions.height}
			className="w-full h-auto"
		  />
  
		  {/* Labels Layer - scaled */}
		  <div
			className="absolute top-0 left-0 origin-top-left"
			style={{ transform: `scale(${scale})`, width: "328px", height: "328px" }}
		  >
			{/* Saudi Arabia */}
			<div className="absolute top-[12%] left-[35.5%] text-xs">
			  <div className="bg-white text-black px-2 py-1 rounded shadow">Kingdom of Saudi Arabia</div>
			  <div className="bg-white w-[40px] h-[1px] mt-[20px] rotate-[75deg] ml-[105px]" />
			</div>
  
			{/* UAE */}
			<div className="absolute top-[50%] left-[71%] text-xs">
			  <div className="bg-white w-[40px] h-[1px] mb-[20px] rotate-[65deg]" />
			  <div className="bg-white text-black px-2 py-1 ml-4 rounded shadow">UAE</div>
			</div>
  
			{/* Pakistan */}
			<div className="absolute top-[62%] left-[32%] text-xs">
			  <div className="bg-white w-[40px] h-[1px] mb-[20px] rotate-[105deg] ml-[5px]" />
			  <div className="bg-white text-black px-2 py-1 rounded shadow">Pakistan</div>
			</div>
		  </div>
		</div>
	  </div>
	)
  }
  


export default WM
