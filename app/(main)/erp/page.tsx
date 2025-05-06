
import LastERM from '@/components/erp/last'
import Solutions from '@/components/erp/main'
import ERMService from '@/components/erp/service'
import SolutionsShowcase from '@/components/erp/solutionsShowcase'
import LogoCarousel from '@/components/erp/tagline'
import { Tech } from '@/components/tech'
import React from 'react'

const ERM = () => {
  return (
    <main className="min-h-screen ">
    <Solutions/>
    
    <SolutionsShowcase/>
    <LogoCarousel/>
    <ERMService/>
    <Tech/>
    <LastERM/>

    </main>
  )
}

export default ERM