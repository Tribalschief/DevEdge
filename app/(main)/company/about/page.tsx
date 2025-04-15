
import Image from 'next/image'
import React from 'react'
import about from '@/public/about.jpg'
import Extra from '@/components/extra'
import MissionVision from '@/components/mission/main'
import IndustriesSection from '@/components/industries/ind'
import IndustriesGrid from '@/components/industries/grid'
import FeatureGrid from '@/components/choose/grid'
import { AboutHero } from '@/components/about'

const About = () => {
    
  return (
    <>
    <div className="mx-auto my-20 relative w-full">
    <AboutHero/>
    <Extra src={about.src}/>
    <MissionVision/>
    <IndustriesSection/>
    <IndustriesGrid/>
    </div>
    <FeatureGrid/>
    

    </>
  )
}

export default About