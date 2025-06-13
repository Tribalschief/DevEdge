"use client"

import React, { useEffect, useState } from "react"
import Logo from "./logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FaPhone, FaWpforms } from "react-icons/fa6"
import { Services } from "./service" // Assuming this is your services dropdown
import { Company } from "./com" // Assuming this is your company dropdown
import Searching from "./searching" // Assuming this is your search component
import { getService } from "@/sanity/lib/getLinks" // Assuming this fetches services
import { cn } from "@/lib/utils"
import MobileNavbar from "./mobile-nav"

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)
  const [servicesData, setServicesData] = React.useState<any[]>([]) // Type the state

  useEffect(() => {
    console.log("Setting isClient to true") // <== Add this
    setIsClient(true)
  }, [])

  useEffect(() => {
    console.log("isClient state:", isClient)
    if (!isClient) {
      console.log("Not client yet")
      return
    }

    console.log("Running fetchServices")

    async function fetchServices() {
      try {
        const fetchedServices = await getService()
        console.log("Fetched Services:", fetchedServices) // Still keep this log!
        if (!Array.isArray(fetchedServices)) {
          // Good check
          console.error("fetchServices ERROR: getService did not return an array.")
          setServicesData([])
          return
        }

        console.log("Filtered Services after slug change:", fetchedServices) // Add this log
        setServicesData(fetchedServices)
      } catch (error) {
        console.error("Error fetching services:", error)
        setServicesData([]) // Good to reset on error
      }
    }

    fetchServices()
  }, [isClient])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isClient) {
    return null
  }

  const isActive = (path: string) => {
    // Add type for path
    return pathname === path
  }

  const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => {
    // Type props
    const active = isActive(href)

    if (active) {
      return <span className={cn(className, "cursor-default border-b-2 border-[#6208ac]")}>{children}</span>
    }

    return (
      <Link href={href} className={cn(className, "hover:opacity-80")}>
        {children}
      </Link>
    )
  }

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-black shadow-md" : "bg-white"
      }`}
    >
      {/* ...rest of your Navbar JSX top section ... */}
      <div className="flex items-center justify-between px-[2px] sm:px-3 md:px-2 lg:px-4 h-[60px] sm:h-[70px] md:h-[90px] lg:h-[100px] xl:h-[110px]">
        {/* Logo - For mobile and tablet */}
        <div className="block lg:hidden xl:mx-2 scale-75 sm:scale-90 md:scale-95 ">
          <Link href="/" className="">
            <Logo dark={scrolled} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 items-center justify-center w-full">
          <div className="w-full max-w-[1350px] grid grid-cols-12 items-center">
            {/* Column 1: Logo */}
            <div className="flex-none scale-100 px-2 col-span-2">
              <Link href="/" className="">
                <Logo dark={scrolled} />
              </Link>
            </div>

            {/* Column 2: Navigation Links */}
            <div
              className={`flex  whitespace-nowrap gap-x-1 lg:gap-x-4 xl:gap-x-4  px-2 col-span-5 ${
                scrolled ? "text-gray-50" : "text-gray-900"
              }`}
            >
              <NavLink
                href="/"
                className="text-sm lg:text-sm xl:text-base font-medium hover:border-[#6208ac] hover:border-b-2 transition-all duration-200"
              >
                Home
              </NavLink>
              <div className="text-sm lg:text-sm xl:text-base font-medium">
                <Services heading="Our Playground" />
              </div>
              <NavLink
                href="/about"
                className="text-sm lg:text-sm xl:text-base font-medium hover:border-[#6208ac] hover:border-b-2 transition-all duration-200"
              >
                About Us
              </NavLink>
              <div className="text-sm lg:text-sm xl:text-base font-medium">
                <Company title="Company" />
              </div>
              <NavLink
                href="/erp"
                className="text-sm lg:text-sm xl:text-base font-medium hover:border-[#6208ac] hover:border-b-2 transition-all duration-200"
              >
                <span className="hidden xl:inline">Our Solution</span>
                <span className="xl:hidden">Solution</span>
              </NavLink>
            </div>

            {/* Column 3: Search - with maximum width */}
            <div className="flex  lg:pl-1 xl:pl-4 ml-2 px-1 col-span-3 lg:mr-20">
              <div className="w-full max-w-sm">
                <Searching />
              </div>
            </div>

            {/* Column 4: Buttons */}
            <div className="flex items-center justify-end gap-x-3 px-2 col-span-2">
              <Link href="/rfp">
                <Button
                  size="sm"
                  className={`transition-colors duration-300 text-xs xl:text-sm ${
                    scrolled ? "bg-primary hover:bg-primary/90 text-white" : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  <FaWpforms className={`${scrolled ? "text-white" : "text-black"} mr-1`} />
                  <span>Submit RFP</span>
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="sm"
                  className={`transition-colors duration-300 text-xs xl:text-sm ${
                    scrolled ? "bg-primary hover:bg-primary/90 text-white" : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  <FaPhone className={`${scrolled ? "text-white" : "text-black"} mr-1`} />
                  <span>Contact Us</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="block lg:hidden">
          <MobileNavbar />
        </div>
      </div>
    </div>
  )
}
