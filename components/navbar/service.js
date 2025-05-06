"use client"

import React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { FaAngleDown } from "react-icons/fa"
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

export function Services({ heading }) {
  const [selectedService, setSelectedService] = React.useState("")
  const [services, setServices] = React.useState([])
  const [open, setOpen] = React.useState(false)
  const [isHovered, setIsHovered] = React.useState(false)
  const timeoutRef = React.useRef(null)
  const pathname = usePathname()

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

  // Check if a service link is active
  const isServiceActive = (slug) => {
    return pathname === `/services/${slug}`
  }

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setOpen(true)
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false)
      setIsHovered(false)
    }, 300) // Small delay to prevent menu from closing immediately
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <div
            className={`cursor-pointer flex items-center gap-x-1 pb-1 ${
              isHovered ? "border-b-2 border-[#6208ac]" : ""
            } transition-all duration-200`}
          >
            {heading}
            <span className="mt-1">
              <FaAngleDown className="h-3 w-3 md:h-3 md:w-3 lg:h-4 lg:w-4" />
            </span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <DropdownMenuLabel>Our Playgrounds</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            className="transition duration-100"
            value={selectedService ?? ""}
            onValueChange={setSelectedService}
          >
            {Array.isArray(services) &&
              services.map((service, index) => {
                const isActive = isServiceActive(service.slug)

                return (
                  <DropdownMenuRadioItem
                    key={index}
                    value={service.slug?.toString() ?? ""}
                    disabled={isActive}
                    className={isActive ? "opacity-70 cursor-default" : ""}
                  >
                    {isActive ? (
                      <span className="w-full py-1 rounded-md">
                        <span className="mr-2">{index + 1}</span> {service.title}
                      </span>
                    ) : (
                      <Link
                        href={`/services/${service.slug}`}
                        className="w-full py-1 hover:bg-muted/50 focus:bg-muted/50 focus:outline-none transition-colors rounded-md"
                      >
                        <span className="mr-2">{index + 1}</span> {service.title}
                      </Link>
                    )}
                  </DropdownMenuRadioItem>
                )
              })}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
