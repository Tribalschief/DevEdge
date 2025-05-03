"use client"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getService } from "@/sanity/lib/getLinks"
import Link from "next/link"
import { FaAngleDown } from "react-icons/fa"

export function Services({ heading }) {
  const [selectedService, setSelectedService] = React.useState("")
  const [services, setServices] = React.useState([])

  React.useEffect(() => {
    async function fetchServices() {
      try {
        const fetchedServices = await getService()
        const filteredServices = fetchedServices.filter((service) => service.title !== null && service.slug !== null)
        setServices(filteredServices)
      } catch (error) {
        console.error("Error fetching services:", error)
        setServices([])
      }
    }

    fetchServices()
  }, [])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer flex items-center gap-x-2">{heading}<span className="mt-1"><FaAngleDown /></span> </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Our Playgrounds</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          className="transition duration-100"
          value={selectedService ?? ''}
          onValueChange={setSelectedService}
        >
          {Array.isArray(services) &&
            services.map((service , index) => (
              <DropdownMenuRadioItem key={index} value={service.slug?.toString() ?? ''}>
               <Link href={`/services/${service.slug}`} className="w-full   py-1 hover:bg-muted/50 focus:bg-muted/50 focus:outline-none transition-colors rounded-md"><span className="mr-2 "> {index + 1}</span> {service.title} </Link>
              </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
