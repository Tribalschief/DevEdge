"use client"

import { ServiceCard } from "@/components/details/card"
import { useMemo } from "react"
import { BigService } from "./BigService"

type RegularService = {
  type: "regular"
  title: string
  description: string
  backgroundImage: any
}

type BigServiceType = {
  type: "big"
  title: string
  description: string
  coverageItems: string[]
  imageSrc: string
}

export type ServiceItem = RegularService | BigServiceType

interface ServicesGridProps {
  services?: ServiceItem[]
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  // Handle case when services is undefined
  const safeServices = services || []

  const regularServices = useMemo(
    () => safeServices.filter((service): service is RegularService => service && service.type === "regular"),
    [safeServices],
  )

  // Function to render grid sections with proper centering for last row
  const renderGridSection = (items: RegularService[], startIndex: number) => {
    if (!items || items.length === 0) return null

    const itemsPerRow = 3 // Number of columns in desktop view
    const remainder = items.length % itemsPerRow
    const lastRowItems = remainder === 0 ? itemsPerRow : remainder

    return items.map((service, index) => {
      // Provide default values for service properties
      const title = service.title || "Service Title"
      const description = service.description || "No description available"
      const backgroundImage = service.backgroundImage.asset.url || "/placeholder.svg"

      const isInLastRow = Math.floor(index / itemsPerRow) === Math.floor((items.length - 1) / itemsPerRow)
      const needsCentering = lastRowItems < itemsPerRow && isInLastRow

      // Apply special classes for the last row if it's not full
      let wrapperClasses = ""

      if (needsCentering) {
        // If there's only 1 item in the last row, center it across all 3 columns
        if (lastRowItems === 1) {
          wrapperClasses = "md:col-span-3 flex justify-center"
        }
        // If there are 2 items in the last row, make them span columns 1-2 and 2-3
        else if (lastRowItems === 2) {
          // First item in last row
          if (index === items.length - 2) {
            wrapperClasses = "md:col-start-1 md:col-end-3 flex justify-end"
          }
          // Second item in last row
          else if (index === items.length - 1) {
            wrapperClasses = "md:col-start-2 md:col-end-4 flex justify-start"
          }
        }
      }

      return (
        <div key={`regular-${startIndex + index}`} className={wrapperClasses}>
          <ServiceCard title={title} description={description} backgroundImage={backgroundImage} />
        </div>
      )
    })
  }

  // Render the mixed grid with big services interspersed
  const renderMixedGrid = () => {
    if (!safeServices || safeServices.length === 0) {
      return <div className="text-center py-8">No services available</div>
    }

    let currentRegularIndex = 0
    const gridSections = []
    let sectionRegularServices: RegularService[] = []

    // Process all services in order
    safeServices.forEach((service, index) => {
      if (!service) return // Skip undefined services

      if (service.type === "regular") {
        // Add regular service to current section
        sectionRegularServices.push(service)
        currentRegularIndex++
      } else if (service.type === "big") {
        // If we have regular services before this big service, render them as a grid section
        if (sectionRegularServices.length > 0) {
          gridSections.push(
            <div key={`grid-section-${gridSections.length}`} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {renderGridSection(sectionRegularServices, currentRegularIndex - sectionRegularServices.length)}
            </div>,
          )
          sectionRegularServices = []
        }

        // Provide default values for big service properties
        const title = service.title || "Service Title"
        const description = service.description || "No description available"
        const coverageItems = service.coverageItems || []
        const imageSrc = service.imageSrc || "/placeholder.svg"

        // Render the big service
        gridSections.push(
          <div key={`big-service-${index}`} className="mb-12">
            <BigService title={title} description={description} coverageItems={coverageItems} imageSrc={imageSrc} />
          </div>,
        )
      }
    })

    // Render any remaining regular services
    if (sectionRegularServices.length > 0) {
      gridSections.push(
        <div key={`grid-section-${gridSections.length}`} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {renderGridSection(sectionRegularServices, currentRegularIndex - sectionRegularServices.length)}
        </div>,
      )
    }

    return gridSections.length > 0 ? gridSections : <div className="text-center py-8">No valid services available</div>
  }

  return (
    <div className="relative w-full px-4 py-4">
      {/* Shorter vertical lines on left and right */}
      

      {renderMixedGrid()}
    </div>
  )
}
