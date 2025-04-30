"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function SolutionsShowcase() {
  const [loadedImages, setLoadedImages] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const solutions = [
    {
      id: 1,
      title: "Vehicle Shipping Import/Export ERP",
      features: [
        "Manage vehicle auctions with an integrated management system",
        "Track and organize vehicle inventory across locations in real time",
        "Streamline documentation for their logistics and global shipping",
        "Automate finance operations and ensure regulatory compliance",
        "Build and monitor dashboards for vehicle movement control",
        "Generate shipping documents like Bill of Lading, BOLs and manage customs",
      ],
    },
    {
      id: 2,
      title: "Cybersecurity Risk Management Platform",
      features: [
        "End-to-End Cyber Risk Lifecycle Management: Covers identification, assessment, monitoring, and remediation of cyber risks",
        "Centralized Risk Register: Unified platform for documenting and managing risks across multiple categories (network, OS, third-party, etc.).",
        "Real-Time Dashboards & Reporting: Generate summary, issue-based, and detailed reports with visual dashboards",
        "Compliance & ISMS Support: Aligns with ISO/IEC 27001 & 31000 and supports centralized tracking of compliance gaps.",
        "Exception & Governance Management: Includes workflows for risk acceptance, sign-offs, and escalation processes.",
        "Vulnerability & Threat Management Integration: Supports capturing findings from risk assessments and integrates with scanners and SIEM.",
      ],
    },
    {
      id: 3,
      title: "Car Selling Platform",
      features: [
        "Showcase vehicles with detailed specifications and high-quality images",
        "Enable advanced search and filtering options for buyers",
        "Facilitate secure payment processing and escrow services",
        "Provide dealer and private seller management portals",
        "Implement buyer-seller messaging and negotiation system",
        "Generate analytics on market trends and popular vehicle models",
      ],
    },
    {
      id: 4,
      title: "Human Resource Management Solution",
      features: [
        "Streamline employee onboarding and documentation processes",
        "Manage time tracking, attendance, and leave requests",
        "Automate payroll processing and tax compliance",
        "Track performance reviews and career development plans",
        "Facilitate internal job postings and recruitment workflows",
        "Generate comprehensive HR analytics and compliance reports",
      ],
    },
  ]

  // Update active solution periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % solutions.length)
    }, 4000) // Change heading every 4 seconds (increased to give more time to read features)

    return () => clearInterval(interval)
  }, [solutions.length])

  // Also update when all images are loaded
  useEffect(() => {
    if (loadedImages === 3) {
      // Move to next solution immediately when images are loaded
      setActiveIndex((prevIndex) => (prevIndex + 1) % solutions.length)
    }
  }, [loadedImages, solutions.length])

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1)
  }

  // Progress indicator for the solution changes
  const ProgressIndicator = () => {
    return (
      <div className="flex justify-center mt-2 space-x-2">
        {solutions.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-6 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="w-full bg-black text-white min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl w-full">
    {/* Heading with dynamic text */}
    <div className="text-center mb-10 sm:mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 relative overflow-hidden h-[3rem] sm:h-[3.5rem]">
        
            All in One Solution
         
      </h2>
      <div className="h-0.5 w-40 sm:w-64 md:w-96 bg-white mx-auto"></div>
      <ProgressIndicator />
    </div>

    {/* Content grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      {/* Left column - Solution cards */}
      <div className="space-y-4">
        {solutions.map((solution, idx) => (
          <div
            key={solution.id}
            className={`bg-white bg-opacity-10 rounded-xl p-4 sm:p-5 backdrop-blur-sm transition-all duration-500 ${
              idx === activeIndex ? "ring-2 ring-white ring-opacity-50 scale-[1.02]" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-colors duration-300 ${
                  idx === activeIndex ? "bg-white text-black" : "bg-white/50 text-black"
                }`}
              >
                <span className="font-bold text-sm">{solution.id}</span>
              </div>
              <div className="w-full">
                <h3
                  className={`font-medium text-base sm:text-lg transition-colors duration-300 ${
                    idx === activeIndex ? "text-white" : "text-white/70"
                  }`}
                  onClick={() => setActiveIndex(idx)} >
                  {solution.title}
                </h3>

                {/* Features list */}
                <ul
                  className={`mt-2 space-y-1 text-sm transition-all duration-500 ${
                    idx === activeIndex ? "max-h-96 opacity-100 text-gray-300" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-xs mt-1">{index + 1}.</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right column - Image showcase */}
      <div className="rounded-xl overflow-hidden relative aspect-[16/9]">
        <div className="relative w-full h-full">
          {[...Array(3)].map((_, i) => (
            <Image
              key={i}
              src={`/placeholder.svg?height=400&width=600`}
              alt={`Solution visualization ${i + 1}`}
              width={600}
              height={400}
              className="absolute inset-0 w-full h-full object-cover opacity-0"
              onLoad={handleImageLoad}
            />
          ))}

          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="text-center px-4 py-6 sm:px-6">
              <p className="text-lg sm:text-xl font-medium mb-4">{solutions[activeIndex].title}</p>

              {/* Feature highlights */}
              <div className="text-sm text-left max-w-md mx-auto space-y-2">
                {solutions[activeIndex].features.slice(0, 3).map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 opacity-90">
                    <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0"></div>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>

              {/* Image Load Progress */}
              <div className="flex justify-center mt-4 space-x-1">
                {[1, 2, 3].map((n) => (
                  <span
                    key={n}
                    className={`w-2 h-2 rounded-full ${
                      loadedImages >= n ? "bg-white" : "bg-gray-500"
                    }`}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
