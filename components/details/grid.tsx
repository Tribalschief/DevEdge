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

interface ImageSrc {
  asset: {
    url: string;
  };
}

type BigServiceType = {
  type: "big"
  title: string
  description: string
  coverageItems: string[]
  imageSrc: ImageSrc;
}

export type ServiceItem = RegularService | BigServiceType

interface ServicesGridProps {
  services?: ServiceItem[]
  title: string
}

export default function ServicesGrid({ services , title }: ServicesGridProps) {
  // Handle case when services is undefined
  const safeServices = services || []

  const regularServices = useMemo(
    () => safeServices.filter((service): service is RegularService => service && service.type === "regular"),
    [safeServices],
  )

  // Function to render grid sections with proper centering for last row
  const renderGridSection = (items: RegularService[], startIndex: number) => {
    if (!items || items.length === 0) return null;
  
    const itemsPerRow = 3; // Number of columns in desktop view
    const remainder = items.length % itemsPerRow;
    const lastRowItems = remainder === 0 ? itemsPerRow : remainder;
  
    return items.map((service, index) => {
      // Provide default values for service properties
      const title = service.title || "Service Title";
      const description = service.description || "No description available";
      const backgroundImage = service.backgroundImage?.asset?.url || "/placeholder.svg";
  
      const isInLastRow = Math.floor(index / itemsPerRow) === Math.floor((items.length - 1) / itemsPerRow);
      const needsCentering = lastRowItems < itemsPerRow && isInLastRow;
  
      // Apply special classes for the last row if it's not full
      let wrapperClasses = "md:col-span-1";
  
      if (needsCentering) {
        if (lastRowItems === 1) {
          // Center the single item across all columns
          wrapperClasses = "md:col-span-3 flex justify-center";
        } else if (lastRowItems === 2) {
          // Center the two items across the available columns
          if (index === items.length - 2) {
            wrapperClasses = "md:col-start-1 md:col-end-2 flex justify-center";
          } else if (index === items.length - 1) {
            wrapperClasses = "md:col-start-2 md:col-end-3 flex justify-center";
          }
        }
      }
  
      return (
        <div key={`regular-${startIndex + index}`} className={wrapperClasses}>
          <ServiceCard title={title} description={description} backgroundImage={backgroundImage} />
        </div>
      );
    });
  };

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
        const imageSrc = service.imageSrc.asset.url || "/placeholder.svg"
        // console.log("imageSrc", imageSrc)
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
    <> 
    <h2 className="text-3xl font-bold text-center mt-8 text-[#0e0f0c]">DevEdge {title} Offerings</h2>
    <div className="relative w-full mx-auto max-w-[1600px] px-4 md:px-8 py-12 md:py-24">
      {/* Shorter vertical lines on left and right */}
      
      
      {renderMixedGrid()}
    </div>
    </>
  )
}
