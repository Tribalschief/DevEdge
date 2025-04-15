import Image from "next/image"
import Link from "next/link"
import { Linkedin } from "lucide-react"
import logo from "../public/whitelogo.png"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company Info Column */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="DevEdge Logo" width={80} height={80} className="w-20 h-auto" />
           
          </div>

          <Link href="https://linkedin.com" className="inline-block text-blue-400">
            <Linkedin size={24} />
          </Link>

          <p className="text-sm text-gray-300">
            DevEdge Consulting works with organizations across Pakistan, UAE, USA and Europe to help them achieve
            operational excellence, manage risks, and embrace digital transformation with confidence.
          </p>

          <div className="flex space-x-6 text-sm">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:underline">
              Terms of use
            </Link>
          </div>
        </div>

        {/* Our Playground Column */}
        <div>
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
        <div>
          <h3 className="text-lg font-medium mb-4">Industry Experience</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/industries/banking" className="hover:underline">
                Banking
              </Link>
            </li>
            <li>
              <Link href="/industries/government" className="hover:underline">
                Government & Public Services
              </Link>
            </li>
            <li>
              <Link href="/industries/retail" className="hover:underline">
                Retail and Real Estate
              </Link>
            </li>
            <li>
              <Link href="/industries/financial" className="hover:underline">
                Financial Services
              </Link>
            </li>
            <li>
              <Link href="/industries/shipping" className="hover:underline">
                Shipping
              </Link>
            </li>
            <li>
              <Link href="/industries/education" className="hover:underline">
                Education
              </Link>
            </li>
            <li>
              <Link href="/industries/hospitality" className="hover:underline">
                Hospitality
              </Link>
            </li>
            <li>
              <Link href="/industries/healthcare" className="hover:underline">
                Health Care
              </Link>
            </li>
          </ul>
        </div>

        {/* Find Us Column */}
        <div>
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
              <Link href="/careers" className="hover:underline">
                Career
              </Link>
            </li>
            <li>
              <Link href="/leadership" className="hover:underline">
                Leadership
              </Link>
            </li>
            <li>
              <Link href="/software" className="hover:underline">
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

