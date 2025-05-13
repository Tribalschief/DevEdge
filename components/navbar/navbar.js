"use client"

import React, { useEffect, useState } from "react"
import Logo from "./logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FaBars, FaAngleDown } from "react-icons/fa"
import { FaPhone, FaWpforms } from "react-icons/fa6"
import { Services } from "./service" // Assuming this is your services dropdown
import { Company } from "./com" // Assuming this is your company dropdown
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Searching from "./searching" // Assuming this is your search component
import { getService } from "@/sanity/lib/getLinks" // Assuming this fetches services
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"




export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)
  const [services, setServicesData] = React.useState([]) // Typed state

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    async function fetchServices() {
      try {
        const fetchedServices = await getService()
        const filteredServices = fetchedServices.filter(
          (service) =>
            service.title !== null &&
            service.slug?.current !== null && // Check slug.current
            service.icon?.asset?.url !== null, // Check icon.asset.url
        )
        setServicesData(filteredServices)
      } catch (error) {
        console.error("Error fetching services:", error)
        setServicesData([])
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

  const isActive = (path) => {
    return pathname === path
  }

  const NavLink = ({ href, children, className }) => {
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
      <div className="flex items-center justify-between px-2 sm:px-5 md:px-6 lg:px-8 xl:px-16 2xl:px-32 h-[60px] sm:h-[70px] md:h-[90px] lg:h-[100px] xl:h-[110px]">
        {/* Logo - For mobile and tablet */}
        <div className="block lg:hidden scale-75 sm:scale-90 md:scale-95 ">
          <Link href="/" className="">
            <Logo dark={scrolled} />
          </Link>
        </div>

        {/* Desktop Navigation - This outer div will take available space and center its single child */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          {/* This inner div groups all desktop nav items and is centered by its parent */}
          <div className="flex items-center gap-x-3 lg:gap-x-8 xl:gap-x-32 ">
            {/* Desktop Logo - Now part of the centered group */}
            <div className="flex-none  scale-75 sm:scale-90 md:scale-95 lg:scale-100"> {/* Removed lg:mr-48 */}
              <Link href="/" className="">
                <Logo dark={scrolled} />
              </Link>
            </div>

            {/* Links, Search, and Buttons Container */}
            <div
              className={`flex items-center whitespace-nowrap gap-x-1 lg:gap-x-1.5 xl:gap-x-3 2xl:gap-x-4 ${ // Adjusted gaps
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
                <Services heading="Our Playground" /> {/* Your Services Dropdown */}
              </div>
              <NavLink
                href="/about"
                className="text-sm lg:text-sm xl:text-base font-medium hover:border-[#6208ac] hover:border-b-2 transition-all duration-200"
              >
                About Us
              </NavLink>
              <div className="text-sm lg:text-sm xl:text-base font-medium">
                <Company title="Company" /> {/* Your Company Dropdown */}
              </div>
              <NavLink
                href="/erp"
                className="text-sm lg:text-sm xl:text-base font-medium hover:border-[#6208ac] hover:border-b-2 transition-all duration-200"
              >
                <span className="hidden xl:inline">Our Solution</span>
                <span className="xl:hidden">Solution</span>
              </NavLink>
              {/* Search Component - ensure it doesn't grow too wide */}
              <div className="w-auto md:min-w-[80px] lg:min-w-[100px] xl:w-[150px] 2xl:w-[200px] flex-shrink-0">
                <Searching />
              </div>
              {/* Buttons */}
              <div className="hidden md:flex items-center gap-x-1 lg:gap-x-2 flex-shrink-0">
                <Link href="/rfp">
                  <Button
                    size="sm"
                    className={`transition-colors duration-300 md:text-xs lg:text-xs xl:text-sm ${
                      scrolled ? "bg-primary hover:bg-primary/90 text-white" : "bg-white text-black hover:bg-gray-200"
                    }`}
                  >
                    <FaWpforms className={`${scrolled ? "text-white" : "text-black"} md:mr-1 lg:mr-1`} />
                    <span className="hidden md:inline-block">Submit RFP</span>
                    <span className="md:hidden">RFP</span>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="sm"
                    className={`transition-colors duration-300 md:text-xs lg:text-xs xl:text-sm ${
                      scrolled ? "bg-primary hover:bg-primary/90 text-white" : "bg-white text-black hover:bg-gray-200"
                    }`}
                  >
                    <FaPhone className={`${scrolled ? "text-white" : "text-black"} md:mr-1 lg:mr-1`} />
                    <span className="hidden md:inline-block">Contact Us</span>
                    <span className="md:hidden">Contact</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`${scrolled ? "text-white" : "text-black"} scale-75 sm:scale-90`}
              >
                <FaBars className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-[300px] sm:w-[200px] z-[60] mt-[60px] sm:mt-[70px] md:mt-[90px] overflow-y-auto" // Ensure mt matches navbar height at respective breakpoints
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <div className="flex flex-col pt-6 pb-6">
                <SheetClose asChild>
                  {isActive("/") ? (
                    <span className="text-lg font-semibold opacity-70 cursor-default p-2">Home</span>
                  ) : (
                    <Link
                      href="/"
                      className="text-lg font-semibold hover:bg-black hover:text-white p-2 rounded-md transition-colors"
                      onClick={() => setScrolled(false)} // Optional: reset scroll state if needed on nav
                    >
                      Home
                    </Link>
                  )}
                </SheetClose>
                <SheetClose asChild>
                  {isActive("/about") ? (
                    <span className="text-base xl:text-xl lg:text-lg font-semibold opacity-70 cursor-default p-2">
                      About Us
                    </span>
                  ) : (
                    <Link
                      href="/about"
                      className="text-base xl:text-xl lg:text-lg font-semibold hover:bg-black hover:text-white p-2 rounded-md transition-colors"
                    >
                      About Us
                    </Link>
                  )}
                </SheetClose>
                {/* Services Dropdown for Mobile */}
                <div className="text-lg font-semibold">
                  <div className="flex flex-col">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="text-lg font-semibold flex items-center justify-between gap-x-2 hover:bg-black hover:text-white p-2 rounded-md transition-colors w-full text-left"
                    >
                      Our Playground
                      <motion.span
                        className="mt-1"
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaAngleDown />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {servicesOpen && Array.isArray(services) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col pl-4 mt-2 gap-2">
                            {services.map((service, i) => {
                              // Ensure service.slug and service.icon are not null before accessing nested properties
                              if (!service.slug?.current || !service.icon?.asset?.url) return null;
                              const serviceUrl = `/services/${service.slug.current}`
                              const isServiceActive = isActive(serviceUrl)

                              return (
                                <motion.div
                                  key={service.slug.current}
                                  variants={{
                                    hidden: { opacity: 0, y: -5 },
                                    visible: (customI) => ({ // Use customI to avoid conflict
                                      opacity: 1,
                                      y: 0,
                                      transition: { delay: customI * 0.1 },
                                    }),
                                  }}
                                  initial="hidden"
                                  animate="visible"
                                  custom={i}
                                >
                                  <SheetClose asChild>
                                    {isServiceActive ? (
                                      <span className="text-base flex font-normal items-center gap-x-2 text-black hover:text-white opacity-70 cursor-default p-2">
                                        <Image
                                          src={service.icon.asset.url}
                                          alt={service.title || "Service Icon"}
                                          width={16} // Adjusted size
                                          height={16} // Adjusted size
                                          className="h-4 w-4 rounded-full" // Removed mt-1, relying on flex alignment
                                        />
                                        {service.title}
                                      </span>
                                    ) : (
                                      <Link
                                        href={serviceUrl}
                                        className="text-base flex font-normal items-center text-black gap-x-2 hover:bg-black hover:text-white p-2 rounded-md transition-colors"
                                      >
                                        <Image
                                          src={service.icon.asset.url}
                                          alt={service.title || "Service Icon"}
                                          width={16}
                                          height={16}
                                          className="h-4 w-4 rounded-full"
                                        />
                                        {service.title}
                                      </Link>
                                    )}
                                  </SheetClose>
                                </motion.div>
                              )
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                {/* Company Dropdown for Mobile */}
                <div className="text-lg font-semibold">
                  <div className="flex flex-col">
                    <button
                      onClick={() => setCompanyOpen(!companyOpen)}
                      className="text-lg font-semibold flex items-center justify-between gap-x-2 hover:bg-black hover:text-white p-2 rounded-md transition-colors w-full text-left"
                    >
                      Company
                      <motion.span
                        className="mt-1"
                        animate={{ rotate: companyOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaAngleDown />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {companyOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col pl-4 mt-2 gap-2">
                            {[
                              { path: "/company/leadership", title: "Leadership" },
                              { path: "/company/career", title: "Career" },
                              { path: "/company/cv", title: "Submit CV" },
                            ].map((item, i) => ( // Renamed index to avoid conflict
                              <motion.div
                                key={item.path}
                                variants={{
                                  hidden: { opacity: 0, y: -5 },
                                  visible: (customI) => ({ opacity: 1, y: 0, transition: { delay: customI * 0.1 } }),
                                }}
                                initial="hidden"
                                animate="visible"
                                custom={i}
                              >
                                <SheetClose asChild>
                                  {isActive(item.path) ? (
                                    <span className="text-base font-normal opacity-70 cursor-default p-2">
                                      {item.title}
                                    </span>
                                  ) : (
                                    <Link
                                      href={item.path}
                                      className="text-base font-normal hover:bg-black hover:text-white p-2 rounded-md transition-colors block"
                                    >
                                      {item.title}
                                    </Link>
                                  )}
                                </SheetClose>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <SheetClose asChild>
                  {isActive("/erp") ? (
                    <span className="text-lg font-semibold opacity-70 cursor-default p-2">Our Solutions</span>
                  ) : (
                    <Link
                      href="/erp"
                      className="text-lg font-semibold hover:bg-black hover:text-white p-2 rounded-md transition-colors"
                    >
                      Our Solutions
                    </Link>
                  )}
                </SheetClose>
                <div className="pt-6">
                  <div className="mb-4">
                    <Searching />
                  </div>
                  <div className="flex flex-col gap-4">
                    <SheetClose asChild>
                      <Link href="/rfp">
                        <Button className="w-full">Submit RFP</Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/contact">
                        <Button className="w-full flex items-center justify-center gap-2">
                          <FaPhone />
                          Contact Us
                        </Button>
                      </Link>
                    </SheetClose>
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