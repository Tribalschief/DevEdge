
import React from 'react'
import about from '@/public/delevired.jpg'
import {Extra} from '@/components/extra'
import MissionVision from '@/components/mission/main'
import IndustriesSection from '@/components/industries/ind'
import IndustriesGrid from '@/components/industries/grid'
import { AboutHero } from '@/components/about'
import { Try } from '@/components/choose/try/choose'
import { Locations } from './_components/location'
import { PageProgressIndicator } from './_components/page-progress-indicator'




const About = () => {
  // Define all sections of the page
  const sections = [
    { id: "hero", title: "About Us" },

    { id: "extra", title: "Our Impact" },
    { id: "locations", title: "Locations" },

    { id: "mission", title: "Mission & Vision" },
    { id: "industries", title: "Industries" },
    { id: "grid", title: "Industry Grid" },
    { id: "try", title: "Why Choose Us" },
  ]

  return (
    <main className="min-h-screen mx-auto">
      <PageProgressIndicator sections={sections} />

      <section id="hero">
        <AboutHero />
      </section>


      <section id="extra">
        <Extra src={about.src} />
      </section>

      <section id="locations">
        <Locations />
      </section>

    

      <section id="mission">
        <MissionVision />
      </section>

      <section id="industries">
        <IndustriesSection />
      </section>

      <section id="grid">
        <IndustriesGrid />
      </section>

      <section id="try">
        <Try />
      </section>
    </main>
  )
}

export default About