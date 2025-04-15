import Image from "next/image"
import type { Leader } from "./types"

interface LeaderProfileProps {
  leader: Leader
}

export const Advisory = ({advisor}:{advisor:Leader}) => {
  return (
           <div className="max-w-6xl mx-4 px-4 py-8">
          {/* Header */}
          <div className="w-full mt-10">
        <h1 className="text-4xl font-bold text-center py-6 text-black">Our Advisor</h1>
      </div>
    
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column - Qualifications and Industry Lines */}
            <div className="space-y-4">
              {/* Name Card */}
              <div className="bg-black text-white p-4 rounded">
                <h2 className="text-lg text-center font-medium">{advisor.name}</h2>
              </div>
    
              {/* Profile Image */}
              <div className="bg-gray-200 p-2">
                <Image
                  src={advisor.imageSrc || "/placeholder.svg"}
                  alt={advisor.name}
                  width={300}
                  height={300}
                  className="w-full"
                />
              </div>
    
              {/* Industry Lines */}
              
              <div className="text-sm space-y-2 pl-2">
                
              </div>
            </div>
    
            {/* Right Column - Profile Details */}
            <div className="md:col-span-2 space-y-4">
              {/* Title */}
              <div className="bg-black w-[256px] h-[60px] text-center flex flex-col justify-center text-white p-4 rounded">
                <h2 className="text-lg  font-medium">{advisor.title}</h2>
                <p className="text-sm">{advisor.company}</p>
              </div>
    
              {/* Background */}
              <div>
                <h3 className="font-bold">Background :</h3>
                {advisor.background.map((paragraph, index) => (
                  <p key={index} className="text-sm w-[1040px] mt-2">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }