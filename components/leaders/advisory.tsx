import Image from "next/image"
import type { Leader } from "./types"

interface LeaderProfileProps {
  leader: Leader
}

export const Advisory = ({advisor}:{advisor:Leader}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
      {/* Header */}
      <div className="w-full mt-4 sm:mt-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-center py-4 sm:py-6 text-black">Our Advisor</h1>
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column - Qualifications and Industry Lines */}
        <div className="space-y-3 sm:space-y-4">
          {/* Name Card */}
          <div className="bg-black text-white p-3 sm:p-4 rounded">
            <h2 className="text-lg text-center font-medium">{advisor.name}</h2>
          </div>
    
          {/* Profile Image */}
          <div className="bg-gray-200 p-2">
            <div className="relative aspect-square">
              <Image
                src={advisor.imageSrc || "/placeholder.svg"}
                alt={advisor.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
    
          {/* Industry Lines */}
          <div className="text-sm space-y-2 pl-2">
            {/* Content for industry lines if needed */}
          </div>
        </div>
    
        {/* Right Column - Profile Details */}
        <div className="md:col-span-2 space-y-3 sm:space-y-4">
          {/* Title */}
          <div className="bg-black text-white p-3 sm:p-4 rounded w-full max-w-[256px]">
            <h2 className="text-lg font-medium">{advisor.title}</h2>
            <p className="text-sm">{advisor.company}</p>
          </div>
    
          {/* Background */}
          <div>
            <h3 className="font-bold">Background :</h3>
            {advisor.background.map((paragraph, index) => (
              <p key={index} className="text-sm sm:text-base mt-2 w-full">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}