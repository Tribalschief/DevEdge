"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react"
import Searching from "./searching"

interface MenuItem {
  slug: string
  label: string
  href?: string
  isActive?: boolean
  submenu?: MenuItem[]
}

const menuData: MenuItem[] = [
  { slug: "home", label: "Home", href: "/", isActive: true }, // Ensure href starts with / for proper Link behavior
  {
    slug: "about",
    label: "About",
    href: "/about",
  },
  {
    slug: "services",
    label: "Services",
    submenu: [
      {
        slug: "internal-audit",
        label: "Internal Audit",
        href: "/services/internal-audit",
      },
      {
        slug: "cybersecurity",
        label: "Cybersecurity Services",
        href: "/services/cybersecurity",
      },
      {
        slug: "multi-cloud-services",
        label: "Multi-Cloud",
        href: "/services/multi-cloud-services",
      },
      {
        slug: "intelligent-enterprise-and-application-development-systems",
        label: "Intelligent Enterprise Systems",
        href: "/services/intelligent-enterprise-and-application-development-systems",
      },
      {
        slug: "digital-transformation-and-business-automation",
        label: "Digital Transformation",
        href: "/services/digital-transformation-and-business-automation",
      },
      {
        slug: "technology-consulting-and-grc-governance-risk-and-compliance",
        label: "Technology Consulting & GRC",
        href: "/services/technology-consulting-and-grc-governance-risk-and-compliance",
      },
      {
        slug: "precision-data-management-and-privacy-services",
        label: "Precision Data Management",
        href: "/services/precision-data-management-and-privacy-services",
      },
      {
        slug: "integrated-accounting-and-financial-advisory-services",
        label: "Integrated Accounting & Financial Advisory Service",
        href: "/services/integrated-accounting-and-financial-advisory-services",
      },
      {
        slug: "risk-management-and-human-capital-advisory",
        label: "Risk Management & Human Capital Advisory",
        href: "/services/risk-management-and-human-capital-advisory",
      },
      {
        slug: "fixed-asset-management",
        label: "Fixed Asset Management",
        href: "/services/fixed-asset-management",
      },
    ],
  },
  {
    slug: "contact",
    label: "Contact",
    href: "/contact",
  },
  {
    slug: "company",
    label: "Company",
    submenu: [
      { slug: "leadership", label: "Leadership", href: "/company/leadership" },
      { slug: "career", label: "Career", href: "/company/career" },
      { slug: "cv", label: "Submit CV", href: "/company/cv" },
    ],
  },
  {
    slug: "erp",
    label: "Our Solutions",
    href: "/erp",
  },
]

function MobileNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({})
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  // navRef is no longer needed for click outside as that logic is removed
  // const navRef = useRef<HTMLDivElement>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // If closing, reset submenus (optional, but good for UX)
    if (isMobileMenuOpen) {
      setOpenSubmenus({})
    }
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setOpenSubmenus({}) // Reset submenus when closing explicitly
  }

  const toggleSubmenu = (slug: string) => {
    setOpenSubmenus((prev) => ({ ...prev, [slug]: !prev[slug] }))
  }

  // Effect for body scroll lock (optional, but common for mobile menus)
  useEffect(() => {
    // No need to modify body overflow - we want to keep it scrollable
    // This effect can be empty or removed entirely
  }, [isMobileMenuOpen])

  // Removed the handleClickOutside useEffect as it's no longer needed

  // Background parallax effect
  useEffect(() => {
    if (!isMobileMenuOpen) return

    const nav = document.getElementById("mobile-nav-panel")
    const navContent = document.getElementById("mobile-nav-content")

    if (!nav || !navContent) return

    // Create a background element if it doesn't exist
    let bgElement = document.getElementById("mobile-nav-bg")
    if (!bgElement) {
      bgElement = document.createElement("div")
      bgElement.id = "mobile-nav-bg"
      bgElement.style.position = "absolute"
      bgElement.style.top = "0"
      bgElement.style.left = "0"
      bgElement.style.width = "100%"
      bgElement.style.height = "200%" // Make it taller for parallax effect
      bgElement.style.backgroundImage = "linear-gradient(135deg, #111827 0%, #1f2937 50%, #374151 100%)"
      bgElement.style.backgroundSize = "cover"
      bgElement.style.zIndex = "-1"
      bgElement.style.pointerEvents = "none"
      nav.insertBefore(bgElement, navContent)
    }

    const handleScroll = () => {
      if (bgElement) {
        // Move background at half the speed of scrolling for parallax effect
        const scrollY = nav.scrollTop
        bgElement.style.transform = `translateY(-${scrollY * 0.5}px)`
      }
    }

    nav.addEventListener("scroll", handleScroll)

    return () => {
      nav.removeEventListener("scroll", handleScroll)
    }
  }, [isMobileMenuOpen])

  const renderMenuItem = (item: MenuItem) => (
    <li
      key={item.slug}
      className={`border-b w-full border-gray-800 ${item.isActive ? "bg-purple-600" : "bg-[#111827]"}`}
    >
      <div className="flex items-center justify-between">
        <Link
          href={item.href || "#"} // Fallback to "#" if href is undefined, though all should have one now
          className={`block flex-grow py-3 px-5 text-lg ${item.isActive ? "font-medium" : ""} hover:bg-gray-800 transition-colors duration-200`}
          onClick={() => {
            if (!item.submenu) closeMobileMenu() // Close menu if it's a direct link
          }}
        >
          {item.label}
        </Link>
        {item.submenu && (
          <button
            onClick={() => toggleSubmenu(item.slug)}
            aria-expanded={openSubmenus[item.slug] || false}
            aria-controls={`submenu-${item.slug}`}
            className="p-4 focus:outline-none" // Added focus:outline-none for better accessibility
            aria-label={`Toggle ${item.label} submenu`}
          >
            {openSubmenus[item.slug] ? (
              <ChevronUp className="h-5 w-5 text-white" />
            ) : (
              <ChevronDown className="h-5 w-5 text-white" />
            )}
          </button>
        )}
      </div>
      {item.submenu && openSubmenus[item.slug] && (
        <ul
          id={`submenu-${item.slug}`}
          className="bg-[#111827] pl-5 max-h-[40vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-900"
          style={{
            scrollbarWidth: "thin",
            scrollBehavior: "smooth",
          }}
        >
          {item.submenu.map((subItem) => (
            <li key={subItem.slug} className="border-t border-gray-800">
              <Link
                href={subItem.href || "#"}
                className="block py-3 px-5 text-base hover:bg-gray-800 transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                {subItem.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  )

  return (
    <>
      {/* Site Header */}
      <header
        className={`fixed top-0 left-0 right-0  ${scrolled ? "text-white shadow-md" : "text-black"} h-[60px] sm:h-[70px] md:h-[90px] lg:h-[100px] xl:h-[110px] flex items-center justify-end px-4 shadow-md`}
      >
        <button
          id="mobile-menu-toggle-button" // Main toggle button
          onClick={toggleMobileMenu}
          className="p-2 focus:outline-none focus:ring-2 focus:ring-black rounded"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-panel"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>

      {/* Overlay - Non-interactive, just for visual effect */}
      {isMobileMenuOpen && <div className="fixed inset-0  z-30 md:hidden pointer-events-none" aria-hidden="true"></div>}

      {/* Mobile Navigation Panel */}
      <nav
        id="mobile-nav-panel"
        className={`fixed top-0 left-0 h-auto mt-[60px] sm:mt-[70px] md:mt-[90px] w-full bg-[#111827] text-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto pointer-events-auto
                   ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-hidden={!isMobileMenuOpen}
        style={{
          scrollBehavior: "smooth",
        }}
      >
        {/* Scrollable Menu List */}
        <div id="mobile-nav-content" className="relative z-10">
          <ul className="pb-4" style={{ scrollBehavior: "smooth" }}>
            {menuData.map((item) => renderMenuItem(item))}
            <div className="mt-2 mx-2 flex-1">
              <Searching />
            </div>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default MobileNavbar
