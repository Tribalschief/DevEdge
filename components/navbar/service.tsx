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

export function Services({ heading }: { heading: string }) {
  const [selectedService, setSelectedService] = React.useState("")
  const [services, setServices] = React.useState<{ title: string | null; slug: string | null }[]>([])

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
        <div className="cursor-pointer">{heading}</div>
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
            services.map((service) => (
              <DropdownMenuRadioItem key={service.slug} value={service.slug?.toString() ?? ''}>
               <Link href={`/services/${service.slug}`}> {service.title} </Link>
              </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
