"use client"
import { getService } from "@/sanity/lib/getLinks"
import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export function NewServicesList() {
  const [services, setServices] = React.useState([])

  React.useEffect(() => {
    async function fetchServices() {
      try {
        const fetchedServices = await getService()
        const filteredServices = fetchedServices.filter(
          (service) => service.title !== null && service.slug !== null && service.icon !== null,
        )
        setServices(filteredServices)
      } catch (error) {
        console.error("Error fetching services:", error)
        setServices([])
      }
    }

    fetchServices()
  }, [])

  return (
    <div className="relative flex flex-col items-center mt-24 xl:mt-80 sm:mt-16 mb-16 justify-center">
      {/* Heading */}
      <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-center tracking-widest text-purple-700">
        OUR SERVICES
      </h2>

      {/* Content Box */}
      <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-black rounded-lg p-4 sm:p-6 md:p-8 border-4 border-b-[10px] border-black shadow-2xl">
        {/* Gradient Strip */}
        <div className="absolute left-0 top-0 h-full w-3 sm:w-4 md:w-6 bg-gradient-to-b from-purple-500 to-blue-500" />

        <div className="space-y-2 sm:space-y-3 md:space-y-4 ml-4 sm:ml-6">
          <div className="flex flex-col pl-4 mt-2 gap-2">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                variants={{
                  hidden: { opacity: 0, y: -5 },
                  visible: (i) => ({
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.1 },
                  }),
                }}
                initial="hidden"
                animate="visible"
                custom={i}
              > 
              
                <Link href={`/services/${service.slug}`} className="text-xl font-normal hover:text-[#6208CA] block">
                
                <div className="gap-x-3">
  {i + 1}
  <span style={{ fontSize: '1.25em' }}>.</span> {service.title}
  <span className="inline-block ml-3 scale-125">«</span>
</div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
