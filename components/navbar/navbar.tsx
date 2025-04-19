"use client"
import { useEffect, useState } from "react"
import Logo from "./logo"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FaPhone, FaAngleDown, FaBars } from "react-icons/fa"
import { Services } from "./service"
import { Company } from "./com"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Searching from "./searching"

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100) // change this threshold as needed
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`flex px-4 md:px-8 lg:px-[10rem] justify-between mx-auto min-w-full h-[80px] md:h-[100px] ${scrolled ? "bg-black" : "bg-transparent"} transition-all duration-300 fixed top-0 z-50 items-center`}
    >
      <Link href="/">
      <Logo dark={scrolled} />
      </Link>
      {/* Desktop Navigation */}
      <div className={`hidden md:flex items-center gap-x-6 lg:gap-x-10 ${scrolled ? "text-gray-50" : "text-gray-950"}`}>
        <Link href="/" className="text-lg lg:text-xl font-semibold cursor-pointer">
          Home
        </Link>
        <div className="text-lg lg:text-xl font-semibold cursor-pointer">
          <Services heading="Services" />
        </div>
        <div className="text-lg lg:text-xl font-semibold cursor-pointer flex items-center">
          <Company title="Company" />
          <span className="ml-2 mt-1">
            <FaAngleDown />
          </span>
        </div>
        <Link href="/erp" className="text-lg lg:text-xl font-semibold cursor-pointer">
          Our ERP's Software
        </Link>
      </div>

      {/* Desktop Action Buttons */}
      <div className="hidden md:flex items-center gap-x-4">
        <div className="text-xl font-semibold">
          <Searching />
        </div>
        <div>
          <Button
            className={`transition-colors duration-300 ${
              scrolled ? "bg-primary hover:bg-primary/90" : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            <Link href={"/rfp"}>Submit RFP</Link>
          </Button>
        </div>
        <div className="flex gap-x-2 items-center">
          <span className={`flex items-center ${scrolled ? "text-white" : "text-black"}`}>
            <FaPhone />
          </span>
          <Button
            className={`transition-colors duration-300 ${
              scrolled ? "bg-primary hover:bg-primary/90" : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            <Link href={"/contact"}>Contact Us</Link>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className={scrolled ? "text-white" : "text-black"}>
              <FaBars className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 py-6">
              <Link
                href="/"
                className="text-xl font-semibold cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <div className="text-xl font-semibold cursor-pointer">
                <Services heading="Services" />
              </div>
              <div className="text-xl font-semibold cursor-pointer flex items-center">
                <Company title="Company" />
                <span className="ml-2 mt-1">
                  <FaAngleDown />
                </span>
              </div>
              <Link
                href="/erp"
                className="text-xl font-semibold cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Our ERP's Software
              </Link>

              <div className="pt-4">
                <div className="mb-4">
                  <Searching />
                </div>
                <div className="flex flex-col gap-4">
                  <Button className="w-full">
                    <Link href={"/rfp"}>Submit RFP</Link>
                  </Button>
                  <Button className="w-full">
                    <FaPhone className="mr-2 h-4 w-4" />
                    <Link href={"/contact"}>Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
