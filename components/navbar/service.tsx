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
  const [services, setServices] = React.useState<{ title: string; slug: string }[]>([])

  React.useEffect(() => {
    async function fetchServices() {
      try {
        const fetchedServices = await getService()
        // Assuming getServices returns an array of objects with title and slug
        setServices(fetchedServices)
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
          value={selectedService}
          onValueChange={setSelectedService}
        >
          {Array.isArray(services) &&
            services.map((service) => (
              <DropdownMenuRadioItem key={service.slug} value={service.slug}>
               <Link href={`/services/${service.slug}`}> {service.title} </Link>
              </DropdownMenuRadioItem>
            ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
