"use client"

import React, { useEffect, useState } from "react"
import Logo from "./logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FaBars, FaAngleDown } from "react-icons/fa"
import { FaPhone, FaWpforms } from "react-icons/fa6"
import { Services } from "./service"
import { Company } from "./com"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Searching from "./searching"
import { getService } from "@/sanity/lib/getLinks"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
  const pathname = usePathname()

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
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Check if a link is active
  const isActive = (path) => {
    return pathname === path
  }

  // Custom link component that disables active links
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
      <div className="flex items-center justify-between px-4 sm:px-5 md:px-6 lg:px-8 xl:px-16 2xl:px-32 h-[60px] sm:h-[70px] md:h-[90px] lg:h-[100px] xl:h-[110px]">
        {/* Logo - Scale down on smaller screens */}
        <div className="lg:flex-none scale-75 sm:scale-90 md:scale-95 lg:scale-100">
          <Link href="/" className="">
            <Logo dark={scrolled} />
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex lg:flex-1 lg:justify-center">
          <div
            className={`flex items-center justify-center whitespace-nowrap md:gap-x-1 lg:gap-x-1.5 xl:gap-x-3 2xl:gap-x-6 ${
              scrolled ? "text-gray-50" : "text-gray-900"
            }`}
          >
            <NavLink href="/" className="text-sm lg:text-sm xl:text-base font-medium ">
              Home
            </NavLink>
            <div className="text-sm lg:text-sm xl:text-base font-medium">
              <Services heading="Our Playground" />
            </div>
            <NavLink href="/about" className="text-sm lg:text-sm xl:text-base font-medium hover:border-[#6208ac] hover:border-b-2 transition-all duration-200">
              About Us
            </NavLink>
            <div className="text-sm lg:text-sm xl:text-base font-medium">
              <Company title="Company" />
            </div>
            <NavLink href="/erp" className="text-sm lg:text-sm xl:text-base font-medium hover:border-[#6208ac] hover:border-b-2 transition-all duration-200">
              <span className="hidden xl:inline">Our ERP Software</span>
              <span className="xl:hidden">ERP Software</span>
            </NavLink>
            <div className="w-auto md:w-[80px] lg:w-[100px] xl:w-[200px] 2xl:w-[300px]">
              <Searching />
            </div>
            <div className="hidden md:flex items-center md:gap-x-1 lg:gap-x-2">
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

        {/* Mobile Menu - Scale down button on smaller screens */}
        <div className="md:hidden">
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px] z-[60]">
              <div className="flex flex-col gap-6 pt-6">
                <SheetClose asChild>
                  {isActive("/") ? (
                    <span className="text-lg font-semibold opacity-70 cursor-default">Home</span>
                  ) : (
                    <Link href="/" className="text-lg font-semibold" onClick={() => setScrolled(false)}>
                      Home
                    </Link>
                  )}
                </SheetClose>
                <SheetClose asChild>
                  {isActive("/about") ? (
                    <span className="text-base xl:text-xl lg:text-lg font-medium opacity-70 cursor-default">
                      About Us
                    </span>
                  ) : (
                    <Link href="/about" className="text-base xl:text-xl lg:text-lg font-medium hover:opacity-80">
                      About Us
                    </Link>
                  )}
                </SheetClose>
                <div className="text-lg font-semibold">
                  <div className="flex flex-col">
                    <SheetClose asChild>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="text-lg font-semibold flex items-center gap-x-2"
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
                    </SheetClose>

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
                              const serviceUrl = `/services/${service.slug}`
                              const isServiceActive = isActive(serviceUrl)

                              return (
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
                                  <SheetClose asChild>
                                    {isServiceActive ? (
                                      <span className="text-base flex font-normal gap-x-2 opacity-70 cursor-default">
                                        <Image
                                          src={service.icon.asset.url || "/placeholder.svg"}
                                          alt={service.title}
                                          width={20}
                                          height={20}
                                          className="h-4 w-4 rounded-full mt-1"
                                        />{" "}
                                        {service.title}
                                      </span>
                                    ) : (
                                      <Link
                                        href={serviceUrl}
                                        className="text-base flex font-normal gap-x-2 hover:text-[#6208CA]"
                                      >
                                        <Image
                                          src={service.icon.asset.url || "/placeholder.svg"}
                                          alt={service.title}
                                          width={20}
                                          height={20}
                                          className="h-4 w-4 rounded-full mt-1"
                                        />{" "}
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
                <div className="text-lg font-semibold">
                  <div className="flex flex-col">
                    <button
                      onClick={() => setCompanyOpen(!companyOpen)}
                      className="text-lg font-semibold flex items-center gap-x-2"
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
                            ].map((item, i) => (
                              <motion.div
                                key={item.path}
                                variants={{
                                  hidden: { opacity: 0, y: -5 },
                                  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }),
                                }}
                                initial="hidden"
                                animate="visible"
                                custom={i}
                              >
                                <SheetClose asChild>
                                  {isActive(item.path) ? (
                                    <span className="text-base font-normal opacity-70 cursor-default">
                                      {item.title}
                                    </span>
                                  ) : (
                                    <Link href={item.path} className="text-base font-normal">
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
                    <span className="text-lg font-semibold opacity-70 cursor-default">Our Solutions</span>
                  ) : (
                    <Link href="/erp" className="text-lg font-semibold">
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
