"use client"

import React, { useEffect, useState } from "react"
import Logo from "./logo"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaPhone, FaBars, FaAngleUp, FaAngleDown } from "react-icons/fa"
import { Services } from "./service"
import { Company } from "./com"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Searching from "./searching"
import { getService } from "@/sanity/lib/getLinks"

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  
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
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-black shadow-md" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-36 h-[100px] md:h-[120px] lg:h-[120px]">
        {/* Logo */}
        <Link href="/">
          <Logo dark={scrolled} />
        </Link>

        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center gap-x-4 lg:gap-x-10 xl:gap-x-16 ${scrolled ? "text-gray-50" : "text-gray-900"}`}>
          <Link href="/" className="text-base xl:text-xl lg:text-lg font-medium hover:opacity-80">
            Home
          </Link>
          <div className="text-base xl:text-xl lg:text-lg font-medium">
            <Services heading="Services" />
          </div>
          <div className="text-base xl:text-xl lg:text-lg font-medium">
            <Company title="Company" />
          </div>
          <Link href="/erp" className="text-base lg:text-lg xl:text-xl font-medium">
            ERP's
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-x-3 lg:gap-x-5">
          <Searching />
          <Link href="/rfp">
            <Button
              className={`transition-colors duration-300 ${
                scrolled ? "bg-primary hover:bg-primary/90 text-white" : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              Submit RFP
            </Button>
          </Link>
          <Link href="/contact">
            <div className="flex items-center gap-x-2">
              <FaPhone className={scrolled ? "text-white" : "text-black"} />
              <Button
                className={`transition-colors duration-300 ${
                  scrolled ? "bg-primary hover:bg-primary/90 text-white" : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Contact Us
              </Button>
            </div>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={scrolled ? "text-white" : "text-black"}>
                <FaBars className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] z-[60]">
              <div className="flex flex-col gap-6 pt-6">
                <Link href="/" className="text-lg font-semibold" onClick={() => setScrolled(false)}>
                  Home
                </Link>
                <div className="text-lg font-semibold">
                <div className="flex flex-col">
      <button
        onClick={() => setServicesOpen(!servicesOpen)}
        className="text-lg font-semibold flex items-center gap-x-2"
      >
        Services
        <span className="mt-1">{companyOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
      </button>
      
      {servicesOpen && Array.isArray(services) || (
        <div className="flex flex-col pl-4 mt-2 gap-2">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="text-base font-normal">
              {service.title}
            </Link>
          ))}
        </div>
      )}
    </div>
                </div>
                <div className="text-lg font-semibold">
                <div className="flex flex-col">
      <button
        onClick={() => setCompanyOpen(!companyOpen)}
        className="text-lg font-semibold flex items-center gap-x-2 "
      >
        Company
        <span className="mt-1">{companyOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
      </button>
      {companyOpen && (
        <div className="flex flex-col pl-4 mt-2 gap-2">
          <Link href="/company/about" className="text-base font-normal">About DevEdge</Link>
          <Link href="/company/leadership" className="text-base font-normal">Leadership</Link>
          <Link href="/company/career" className="text-base font-normal">Career</Link>
          <Link href="/company/cv" className="text-base font-normal">Submit CV</Link>
        </div>
      )}
    </div>
                </div>
                <Link href="/erp" className="text-lg font-semibold">
                  Our ERP's
                </Link>

                <div className="pt-6">
                  <div className="mb-4">
                    <Searching />
                  </div>
                  <div className="flex flex-col gap-4">
                    <Link href="/rfp">
                      <Button className="w-full">Submit RFP</Button>
                    </Link>
                    <Link href="/contact">
                      <Button className="w-full flex items-center justify-center gap-2">
                        <FaPhone />
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}
