
import Image from 'next/image'
import React from 'react'
import about from '@/public/about.jpg'
import {Extra} from '@/components/extra'
import MissionVision from '@/components/mission/main'
import IndustriesSection from '@/components/industries/ind'
import IndustriesGrid from '@/components/industries/grid'
import FeatureGrid from '@/components/choose/grid'
import { AboutHero } from '@/components/about'
import { Try } from '@/components/choose/try/choose'

const About = () => {
    
  return (
    
    <main className='min-h-screen mx-auto'>
    <AboutHero/>
    <Extra src={about.src}/>
    <MissionVision/>
    <IndustriesSection/>
    <IndustriesGrid/>
    <Try/>
    </main>
    
    

    
  )
}

export default About