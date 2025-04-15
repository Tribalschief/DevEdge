import Image from "next/image"

interface ServiceCardProps {
  title: string
  description: string
  backgroundImage: string
}

export function ServiceCard({ title, description, backgroundImage }: ServiceCardProps) {
  return (
    <div className="flex flex-col w-full">
      {/* Card with image background */}
      <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-4">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-cover" />
          
        </div>

        {/* Corner dots - only 4 as requested */}
        <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full" />
        <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full" />
        <div className="absolute bottom-2 left-2 w-2 h-2 bg-white rounded-full" />
        <div className="absolute bottom-2 right-2 w-2 h-2 bg-white rounded-full" />

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <h3 className="text-white text-center font-semibold text-xl">{title}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm text-center mb-4">{description}</p>

      {/* Horizontal line */}
      <div className="w-48 h-0.5 bg-purple-500 mx-auto mt-auto" />
    </div>
  )
}
