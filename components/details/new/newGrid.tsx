import React from 'react'
import { IndustryCard } from './newCard'
import { NewServicesList } from './NewSL'


export const CardGrid = ({services , title}:{services: any, title: string}) => {
  
  return (
    <main className="relative overflow-hidden flex flex-col items-center justify-center">
      <h2 className="px-1 lg:px-4 ml-4 sm:ml-6 md:ml-10 lg:ml-16 xl:ml-24 2xl:ml-32 text-2xl sm:text-3xl font-bold lg:mt-4 text-[#0e0f0c]">
        DevEdge {title} Services Offerings
      </h2>

      <div className="py-8 flex md:py-12 max-w-full  mt-10 sm:mt-16 mx-0 md:mx-4 ml-0 sm:ml-6 md:ml-10 lg:mx-auto lg:ml-16 xl:ml-24 2xl:ml-32">
        <div className="flex flex-wrap justify-center lg:w-[70%] gap-3 gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-y-16 lg:gap-4 sm:gap-2">
          {services.map((service: any, index: number) => {
            const serviceId = service.title ? service.title.toLowerCase().replace(/\s+/g, "-") : `service-${index}`
            return (
              <div
                key={serviceId}
                className="w-[calc(50%-8px)] sm:w-[calc(50%-12px)] md:w-[calc(50%-16px)] lg:w-[calc(33%-16px)] xl:w-[calc(33%-24px)]"
              >
                <IndustryCard
                  title={service.title}
                  backgroundIcon={service.backgroundIcon!.asset.url || "/placeholder.svg"}
                  number={index + 1}
                  description={service.description}
                />
              </div>
            )
          })}
        </div>
        <div className='hidden lg:block lg:w-[30%] lg:-mt-12'>
          <NewServicesList/>
        </div>
        
      </div>
    </main>
)
}

