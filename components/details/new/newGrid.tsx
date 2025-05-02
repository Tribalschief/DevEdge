import React from 'react'
import { IndustryCard } from './newCard'

export const CardGrid = ({services , title}:{services: any, title: string}) => {
  
  return (
    <>
    <h2 className="px-4 ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-24 2xl:ml-32 text-2xl sm:text-3xl font-bold lg:mt-4 text-[#0e0f0c]">
      DevEdge {title} Services Offerings
    </h2>
    
    <div className="py-8 md:py-12 max-w-7xl mt-10 sm:mt-16  mx-4 sm:ml-6 md:ml-10 lg:mx-auto lg:ml-16 xl:ml-24 2xl:ml-32">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {services.map((service:any, index:number) => {
          console.log('Background icon:', service.backgroundIcon?.asset?.url || 'No icon available');
          return (
          
          <div 
            key={index} 
            className="w-full sm:w-[calc(50%-12px)] md:w-[calc(50%-16px)] lg:w-[calc(33%-16px)] xl:w-[calc(33%-24px)]"
          >
            <IndustryCard
              title={service.title}
              backgroundIcon={service.backgroundIcon!.asset.url || '/placeholder.svg'}
              
              number={index + 1}
              description={service.description}
            />
          </div>
        )})}
      </div>
    </div>
  </>
)
}
