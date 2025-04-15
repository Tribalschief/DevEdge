import type React from "react"
import svges from "@/public/mini service pic.svg"
import Image from "next/image"

interface MiniServiceProps extends React.ComponentProps<any> {
  services?: { image?: any; name?: string }[]
}

export const MiniService: React.FC<MiniServiceProps> = ({ services = [] }) => {
  // If services is undefined or empty, show a message
  if (!services || services.length === 0) {
    return <div className="py-2">No services found</div>
  }

  return (
    <div className="mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          // Handle missing name
          const serviceName = service.name || "Service"
          const words = serviceName.split(" ")
          const firstLine = words.slice(0, 2).join(" ")
          const secondLine = words.slice(2).join(" ")

          // Handle missing image
          const imageSrc = service.image?.src || "/placeholder.svg"

          return (
            <div key={index} className="rounded-lg p-6 flex flex-col items-center justify-center">
              <Image
                src={svges.src || "/placeholder.svg"}
                alt={serviceName}
                className="w-[87px] h-[95px] object-contain"
                width={87}
                height={95}
              />
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={serviceName}
                className="w-[30px] absolute -translate-y-[60px] h-[30px] z-10 object-contain"
                width={30}
                height={30}
              />
              <div className="relative mt-4">
                {/* Main white card with black shadow on right */}
                <div className="border-gray-950 border-r-2 border-b-2 rounded-lg">
                  <div className="w-full max-w-[300px] bg-white border border-gray-200 rounded-lg p-4 relative z-10">
                    <h3 className="text-center text-lg font-bold">
                      {firstLine}
                      <br />
                      {secondLine}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
