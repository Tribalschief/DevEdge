import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"
import logo from "../public/whitelogo.png"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Company Info Column */}
      <div className="space-y-6 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start space-x-2">
          <Link href="/">
            <Image src={logo} alt="DevEdge Logo" width={160} height={160} />
          </Link>
        </div>

        <div className="flex justify-center md:justify-start">
            <Link href="https://www.linkedin.com/company/devedge-consulting/" className="inline-block text-[#6208CA]">
              <Linkedin size={24} />
            </Link>
          </div>

          <p className="text-sm text-gray-300">
            DevEdge Consulting works with organizations across Pakistan, UAE, USA and Europe to help them achieve
            operational excellence, manage risks, and embrace digital transformation with confidence.
          </p>

          <div className="flex justify-center md:justify-start space-x-6 text-sm">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/privacy" className="hover:underline">
              Terms of use
            </Link>
          </div>
        </div>

        {/* Our Playground Column */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-medium mb-4">Our Playground</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services/internal-audit" className="hover:underline">
                Internal Audit
              </Link>
            </li>
            <li>
              <Link href="/services/cybersecurity" className="hover:underline">
                Cybersecurity Services
              </Link>
            </li>
            <li>
              <Link href="/services/multi-cloud" className="hover:underline">
                Multi-Cloud
              </Link>
            </li>
            <li>
              <Link href="/services/enterprise-systems" className="hover:underline">
                Intelligent Enterprise Systems
              </Link>
            </li>
            <li>
              <Link href="/services/digital-transformation" className="hover:underline">
                Digital Transformation
              </Link>
            </li>
            <li>
              <Link href="/services/technology-consulting" className="hover:underline">
                Technology Consulting & GRC
              </Link>
            </li>
            <li>
              <Link href="/services/data-management" className="hover:underline">
                Precision Data Management
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:underline">
                Many More ...
              </Link>
            </li>
          </ul>
        </div>

        {/* Industry Experience Column */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-medium mb-4">Industry Experience</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <div  className="hover:underline">
                Banking
              </div>
            </li>
            <li>
              <div className="hover:underline">
                Government & Public Services
              </div>
            </li>
            <li>
              <div className="hover:underline">
                Retail and Real Estate
              </div>
            </li>
            <li>
              <div className="hover:underline">
                Financial Services
              </div>
            </li>
            <li>
              <div className="hover:underline">
                Shipping
              </div>
            </li>
            <li>
              <div className="hover:underline">
                Education
              </div>
            </li>
            <li>
              <div className="hover:underline">
                Hospitality
              </div>
            </li>
            <li>
              <div className="hover:underline">
                Health Care
              </div>
            </li>
          </ul>
        </div>

        {/* Find Us Column */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-medium mb-4">Find Us</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/playground" className="hover:underline">
                Our Playground
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/company/careers" className="hover:underline">
                Career
              </Link>
            </li>
            <li>
              <Link href="/company/leadership" className="hover:underline">
                Leadership
              </Link>
            </li>
            <li>
              <Link href="/erp" className="hover:underline">
                Our Softwares
              </Link>
            </li>
            <li>
              <Link href="/rfp" className="hover:underline">
                Submit RFPs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

