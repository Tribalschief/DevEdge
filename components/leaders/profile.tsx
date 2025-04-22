import Image from "next/image"
import type { Leader } from "./types"

interface LeaderProfileProps {
  leader: Leader
}

export default function LeaderProfile({ leader }: LeaderProfileProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column - Profile, Qualifications and Industry Lines */}
        <div className="space-y-4">
          {/* Name Card */}
          <div className="bg-black text-white p-3 sm:p-4 rounded">
            <h2 className="text-base sm:text-lg text-center font-medium">{leader.name}</h2>
          </div>

          {/* Profile Image */}
          <div className="bg-gray-200 p-2">
            <Image
              src={leader.pic.src || "/placeholder.svg"}
              alt={leader.name}
              width={300}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Educational Qualification */}
          <div className="bg-black text-white p-3 sm:p-4 rounded">
            <h3 className="text-base sm:text-lg text-center font-medium">Educational Qualification</h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1 sm:space-y-2 pl-2">
            {leader.education.map((edu, index) => (
              <p key={index}>• {edu.title}</p>
            ))}
          </div>

          {/* Industry Lines */}
          <div className="bg-black text-white p-3 sm:p-4 rounded">
            <h3 className="text-base sm:text-lg text-center font-medium">Industry Lines</h3>
          </div>
          <div className="text-xs sm:text-sm space-y-1 sm:space-y-2 pl-2">
            {leader.industries.map((industry, index) => (
              <p key={index}>• {industry.name}</p>
            ))}
          </div>
        </div>

        {/* Right Column - Profile Details */}
        <div className="md:col-span-2 space-y-4 mt-4 md:mt-0"> 
          <div className="flex  gap-x-2">
          {/* Title */}
          <div className="bg-black w-full max-w-[256px] py-2 sm:py-3 text-center flex flex-col justify-center text-white p-3 sm:p-4 rounded">
            <h2 className="text-base sm:text-lg font-medium">{leader.title}</h2>
            <p className="text-xs sm:text-sm">{leader.company}</p>
          </div>
          
          { leader.title2 && leader.company2 &&
            <div className="bg-black w-full max-w-[256px] py-2 sm:py-3 text-center flex flex-col justify-center text-white p-3 sm:p-4 rounded">
              <h2 className="text-base sm:text-lg font-medium">{leader.title2}</h2>
              <p className="text-xs sm:text-sm">{leader.company2}</p>
            </div>
          }
          </div>
          {/* Background */}
          <div>
            <h3 className="font-bold text-base sm:text-lg">Background:</h3>
            <div className="space-y-2 mt-2">
              {leader.background.map((paragraph, index) => (
                <p key={index} className="text-xs sm:text-sm">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Major Engagement */}
          <div>
            <h3 className="font-bold text-base sm:text-lg">MAJOR Engagement</h3>
            <ul className="text-xs sm:text-sm mt-2 space-y-4 sm:space-y-6">
              {leader.engagements.map((engagement, index) => (
                <li key={index}>
                  <p className="font-bold">• {engagement.title}</p>
                  <p className="ml-4">{engagement.description}</p>
                </li>
              ))}
            </ul>
          
          </div>
        </div>
      </div>
    </div>
  )
}

