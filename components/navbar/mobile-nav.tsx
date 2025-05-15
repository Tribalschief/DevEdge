"use client"

import type React from "react"


/* The above code is a TypeScript React component called `MobileNavbar` that represents a mobile
navigation menu. It takes in props `menuData` (an array of `MenuItem` objects), `scrolled` (a
boolean), and `servicesData` (an optional array). */
// interface MenuItem {
//   id: string
//   label: string
//   href?: string
//   isActive?: boolean
//   submenu?: MenuItem[]
//   icon?: {
//     asset: {
//       url: string
//     }
//   }
// }

// interface MobileNavbarProps {
//   menuData: MenuItem[]
//   scrolled: boolean
//   servicesData?: any[]
// }

// const MobileNavbar: React.FC<MobileNavbarProps> = ({ menuData, scrolled, servicesData = [] }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({})
//   const navRef = useRef<HTMLDivElement>(null)
//   const pathname = usePathname()

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen)
//   }

//   const toggleSubmenu = (id: string) => {
//     setOpenSubmenus((prev) => ({ ...prev, [id]: !prev[id] }))
//   }

//   const isActive = (path: string) => {
//     return pathname === path
//   }

//   useEffect(() => {
//     if (isMobileMenuOpen) {
//       document.body.style.overflow = "hidden"
//     } else {
//       document.body.style.overflow = "auto"
//     }
//     return () => {
//       document.body.style.overflow = "auto"
//     }
//   }, [isMobileMenuOpen])

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (navRef.current && !navRef.current.contains(event.target as Node) && isMobileMenuOpen) {
//         const toggleButton = document.getElementById("mobile-menu-toggle-button")
//         if (toggleButton && !toggleButton.contains(event.target as Node)) {
//           setIsMobileMenuOpen(false)
//         }
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside)
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside)
//     }
//   }, [isMobileMenuOpen])

//   // Special handling for services and company sections
//   const servicesItem = menuData.find((item) => item.id === "services")
//   const companyItem = menuData.find((item) => item.id === "about")

//   return (
//     <>
//       {/* Mobile Menu Trigger */}
//       <div className="block lg:hidden">
//         <Button
//           id="mobile-menu-toggle-button"
//           variant="ghost"
//           size="icon"
//           className={`${scrolled ? "text-white" : "text-black"} scale-75 sm:scale-90`}
//           onClick={toggleMobileMenu}
//           aria-label="Toggle menu"
//           aria-expanded={isMobileMenuOpen}
//           aria-controls="mobile-nav-panel"
//         >
//           {isMobileMenuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
//         </Button>
//       </div>

//       {/* Overlay */}
//       {isMobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
//           onClick={toggleMobileMenu}
//           aria-hidden="true"
//         ></div>
//       )}

//       {/* Mobile Navigation Panel */}
//       <nav
//         ref={navRef}
//         id="mobile-nav-panel"
//         className={`fixed top-[60px] sm:top-[70px] md:top-[90px] left-0 h-[calc(100vh-60px)] sm:h-[calc(100vh-70px)] md:h-[calc(100vh-90px)] w-[300px] max-w-[80vw] bg-white text-black shadow-xl transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto
//                    ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
//         aria-hidden={!isMobileMenuOpen}
//       >
//         <div className="flex flex-col pt-6 pb-6">
//           {/* Home Link */}
//           {isActive("/") ? (
//             <span className="text-lg font-semibold opacity-70 cursor-default p-2">Home</span>
//           ) : (
//             <Link
//               href="/"
//               className="text-lg font-semibold hover:bg-black hover:text-white p-2 rounded-md transition-colors"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Home
//             </Link>
//           )}

//           {/* About Link */}
//           {isActive("/about") ? (
//             <span className="text-base xl:text-xl lg:text-lg font-semibold opacity-70 cursor-default p-2">
//               About Us
//             </span>
//           ) : (
//             <Link
//               href="/about"
//               className="text-base xl:text-xl lg:text-lg font-semibold hover:bg-black hover:text-white p-2 rounded-md transition-colors"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               About Us
//             </Link>
//           )}

//           {/* Services Dropdown */}
//           <div className="text-lg font-semibold">
//             <div className="flex flex-col">
//               <button
//                 onClick={() => toggleSubmenu("services")}
//                 className="text-lg font-semibold flex items-center justify-between gap-x-2 hover:bg-black hover:text-white p-2 rounded-md transition-colors w-full text-left"
//               >
//                 Our Playground
//                 <motion.span
//                   className="mt-1"
//                   animate={{ rotate: openSubmenus["services"] ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <FaAngleDown />
//                 </motion.span>
//               </button>
//               <motion.div
//                 key="services-dropdown-content-mobile"
//                 initial={false}
//                 animate={{
//                   height:
//                     openSubmenus["services"] && Array.isArray(servicesData) && servicesData.length > 0 ? "auto" : 0,
//                   opacity: openSubmenus["services"] && Array.isArray(servicesData) && servicesData.length > 0 ? 1 : 0,
//                   marginTop:
//                     openSubmenus["services"] && Array.isArray(servicesData) && servicesData.length > 0
//                       ? "0.5rem"
//                       : "0rem",
//                 }}
//                 transition={{ duration: 0.3 }}
//                 className="overflow-hidden"
//               >
//                 {openSubmenus["services"] && Array.isArray(servicesData) && servicesData.length > 0 && (
//                   <div className="flex flex-col pl-4 gap-2">
//                     {servicesData.map((service: any, i) => {
//                       if (!service.slug || !service.icon?.asset?.url) {
//                         return null
//                       }
//                       const serviceUrl = `/services/${service.slug}`
//                       const isServiceActive = isActive(serviceUrl)

//                       return (
//                         <motion.div
//                           key={service.slug}
//                           initial={{ opacity: 0, y: -5 }}
//                           animate={{ opacity: 1, y: 0, transition: { delay: i * 0.05 } }}
//                         >
//                           {isServiceActive ? (
//                             <span className="text-base flex font-normal items-center gap-x-2 text-black hover:text-white opacity-70 cursor-default p-2">
//                               <Image
//                                 src={service.icon.asset.url || "/placeholder.svg"}
//                                 alt={service.title || "Service Icon"}
//                                 width={16}
//                                 height={16}
//                                 className="h-4 w-4 rounded-full"
//                               />
//                               {service.title}
//                             </span>
//                           ) : (
//                             <Link
//                               href={serviceUrl}
//                               className="text-base flex font-normal items-center text-black gap-x-2 hover:bg-black hover:text-white p-2 rounded-md transition-colors"
//                               onClick={() => setIsMobileMenuOpen(false)}
//                             >
//                               <Image
//                                 src={service.icon.asset.url || "/placeholder.svg"}
//                                 alt={service.title || "Service Icon"}
//                                 width={16}
//                                 height={16}
//                                 className="h-4 w-4 rounded-full"
//                               />
//                               {service.title}
//                             </Link>
//                           )}
//                         </motion.div>
//                       )
//                     })}
//                   </div>
//                 )}
//               </motion.div>
//             </div>
//           </div>

//           {/* Company Dropdown */}
//           <div className="text-lg font-semibold">
//             <div className="flex flex-col">
//               <button
//                 onClick={() => toggleSubmenu("company")}
//                 className="text-lg font-semibold flex items-center justify-between gap-x-2 hover:bg-black hover:text-white p-2 rounded-md transition-colors w-full text-left"
//               >
//                 Company
//                 <motion.span
//                   className="mt-1"
//                   animate={{ rotate: openSubmenus["company"] ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <FaAngleDown />
//                 </motion.span>
//               </button>
//               <motion.div
//                 key="company-dropdown-content-mobile"
//                 initial={false}
//                 animate={{
//                   height: openSubmenus["company"] ? "auto" : 0,
//                   opacity: openSubmenus["company"] ? 1 : 0,
//                   marginTop: openSubmenus["company"] ? "0.5rem" : "0rem",
//                 }}
//                 transition={{ duration: 0.3 }}
//                 className="overflow-hidden"
//               >
//                 {openSubmenus["company"] && (
//                   <div className="flex flex-col pl-4 gap-2">
//                     {[
//                       { path: "/company/leadership", title: "Leadership" },
//                       { path: "/company/career", title: "Career" },
//                       { path: "/company/cv", title: "Submit CV" },
//                     ].map((item, i) => (
//                       <motion.div
//                         key={item.path}
//                         initial={{ opacity: 0, y: -5 }}
//                         animate={{ opacity: 1, y: 0, transition: { delay: i * 0.05 } }}
//                       >
//                         {isActive(item.path) ? (
//                           <span className="text-base font-normal opacity-70 cursor-default p-2">{item.title}</span>
//                         ) : (
//                           <Link
//                             href={item.path}
//                             className="text-base font-normal hover:bg-black hover:text-white p-2 rounded-md transition-colors block"
//                             onClick={() => setIsMobileMenuOpen(false)}
//                           >
//                             {item.title}
//                           </Link>
//                         )}
//                       </motion.div>
//                     ))}
//                   </div>
//                 )}
//               </motion.div>
//             </div>
//           </div>

//           {/* Solutions Link */}
//           {isActive("/erp") ? (
//             <span className="text-lg font-semibold opacity-70 cursor-default p-2">Our Solutions</span>
//           ) : (
//             <Link
//               href="/erp"
//               className="text-lg font-semibold hover:bg-black hover:text-white p-2 rounded-md transition-colors"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Our Solutions
//             </Link>
//           )}

//           {/* Search and Buttons */}
//           <div className="pt-6 px-2">
//             <div className="mb-4">
//               <Searching />
//             </div>
//             <div className="flex flex-col gap-4">
//               <Link href="/rfp" onClick={() => setIsMobileMenuOpen(false)}>
//                 <Button className="w-full">Submit RFP</Button>
//               </Link>
//               <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
//                 <Button className="w-full flex items-center justify-center gap-2">
//                   <FaPhone />
//                   Contact Us
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   )
// }



import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
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
  { slug: "home", label: "Home", href: "/home", isActive: true }, // Ensure href starts with / for proper Link behavior
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
        setOpenSubmenus({});
    }
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenSubmenus({}); // Reset submenus when closing explicitly
  }

  const toggleSubmenu = (slug: string) => {
    setOpenSubmenus((prev) => ({ ...prev, [slug]: !prev[slug] }))
  }

  // Effect for body scroll lock (optional, but common for mobile menus)
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scroll on component unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  // Removed the handleClickOutside useEffect as it's no longer needed

  const renderMenuItem = (item: MenuItem) => (
    <li key={item.slug} className={`border-b w-full border-gray-800 ${item.isActive ? "bg-purple-600" : "bg-[#111827]"}`}>
      <div className="flex items-center justify-between">
        <Link
          href={item.href || "#"} // Fallback to "#" if href is undefined, though all should have one now
          className={`block flex-grow py-3 px-5 text-lg ${item.isActive ? "font-medium" : ""} hover:bg-gray-800 transition-colors duration-200`}
          onClick={() => {
            if (!item.submenu) closeMobileMenu(); // Close menu if it's a direct link
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
        <ul id={`submenu-${item.slug}`} className="bg-[#111827] pl-5">
          {item.submenu.map((subItem) => (
            <li key={subItem.slug} className="border-t border-gray-800">
              <Link
                href={subItem.href || "#"}
                className="block py-3 px-5 text-base hover:bg-gray-800 transition-colors duration-200"
                onClick={closeMobileMenu} // Close menu on submenu item click
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
      <header className={`fixed top-0 left-0 right-0  ${scrolled ? "text-white shadow-md" : "text-black"} h-[60px] sm:h-[70px] md:h-[90px] lg:h-[100px] xl:h-[110px] flex items-center justify-end px-4 shadow-md`}>
        
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
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0  z-30 md:hidden pointer-events-none"
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Navigation Panel */}
      <nav
        // ref={navRef} // No longer needed for click outside
        id="mobile-nav-panel"
        className={`fixed top-0 left-0 h-auto mt-[60px] sm:mt-[70px] md:mt-[90px] w-full bg-[#111827] text-white shadow-xl transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto 
                   
                   ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-hidden={!isMobileMenuOpen}
         // Add padding top to account for fixed header
      >
        {/* Menu Header with Close Button */}
        

        {/* Scrollable Menu List */}
        <ul className="pb-4 "> {/* Added pt-2 to avoid content starting exactly at the top of the scrollable area */}
            {menuData.map((item) => renderMenuItem(item))}

            <div className="mt-2 mx-2 flex-1">
                 <Searching/>
            </div>
        </ul>
      </nav>
    </>
  )
}

export default MobileNavbar