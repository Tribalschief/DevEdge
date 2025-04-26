import HeroERP from '@/components/erp/hero'
import LastERM from '@/components/erp/last'
import ERMService from '@/components/erp/service'
import SolutionsShowcase from '@/components/erp/solutionsShowcase'
import LogoCarousel from '@/components/erp/tagline'
import React from 'react'

const ERM = () => {
  return (
    <main className="min-h-screen ">
    <HeroERP/>
    
    <SolutionsShowcase/>
    <LogoCarousel/>
    <ERMService/>
    <LastERM/>
    </main>
  )
}

export default ERM