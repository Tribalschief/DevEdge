import HeroERP from '@/components/erm/hero'
import LastERM from '@/components/erm/last'
import ERMService from '@/components/erm/service'
import SolutionsShowcase from '@/components/erm/solutionsShowcase'
import React from 'react'

const ERM = () => {
  return (
    <>
    <HeroERP/>
    <SolutionsShowcase/>
    <ERMService/>
    
    <LastERM/>
    </>
  )
}

export default ERM