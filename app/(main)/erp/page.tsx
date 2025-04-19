import HeroERP from '@/components/erp/hero'
import LastERM from '@/components/erp/last'
import ERMService from '@/components/erp/service'
import SolutionsShowcase from '@/components/erp/solutionsShowcase'
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