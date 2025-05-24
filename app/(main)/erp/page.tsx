
import LastERM from '@/components/erp/last'
import Solutions from '@/components/erp/main'
import ERMService from '@/components/erp/service'
import SolutionsShowcase from '@/components/erp/solutionsShowcase'
import LogoCarousel from '@/components/erp/tagline'
import { Tech } from '@/components/tech'
import React from 'react'
import { PageProgressIndicator } from '../about/_components/page-progress-indicator'

const ERM = () => {
  const sections = [
    { id: "solutions", title: "Solutions" },

    { id: "showcase", title: "showcase" },
    { id: "services", title: "Services" },

    
    { id: "tech", title: "Tech" },
    { id: "last", title: "Help" },
  ]
  return (
    <main className="min-h-screen ">
    <PageProgressIndicator sections={sections} />
    <section id="solutions">
    <Solutions/>
    </section>
    <section id="showcase">
    <SolutionsShowcase/>
    </section>

    <LogoCarousel/>
    <section id="services">
    <ERMService/>
    </section>
    <section id="tech">
    <Tech/>
    </section>
    <section id="last">
<LastERM/>
    </section>
    

    </main>
  )
}

export default ERM