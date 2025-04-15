import Image from "next/image"
import type { Leader } from "./types"

interface LeaderProfileProps {
  leader: Leader
}

export default function LeaderProfile({ leader }: LeaderProfileProps) {
  return (
    <div className="max-w-6xl mx-4 px-4 py-8">
      {/* Header */}
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Qualifications and Industry Lines */}
        <div className="space-y-4">
          {/* Name Card */}
          <div className="bg-black text-white p-4 rounded">
            <h2 className="text-lg text-center font-medium">{leader.name}</h2>
          </div>

          {/* Profile Image */}
          <div className="bg-gray-200 p-2">
            <Image
              src={leader.imageSrc || "/placeholder.svg"}
              alt={leader.name}
              width={300}
              height={300}
              className="w-full"
            />
          </div>

          {/* Educational Qualification */}
          <div className="bg-black text-white p-4 rounded">
            <h3 className="text-lg text-center font-medium">Educational Qualification</h3>
          </div>
          <div className="text-sm space-y-2 pl-2">
            {leader.education.map((edu, index) => (
              <p key={index}>• {edu.title}</p>
            ))}
          </div>

          {/* Industry Lines */}
          <div className="bg-black text-white p-4 rounded">
            <h3 className="text-lg text-center font-medium">Industry Lines</h3>
          </div>
          <div className="text-sm space-y-2 pl-2">
            {leader.industries.map((industry, index) => (
              <p key={index}>• {industry.name}</p>
            ))}
          </div>
        </div>

        {/* Right Column - Profile Details */}
        <div className="md:col-span-2 space-y-4">
          {/* Title */}
          <div className="bg-black w-[256px] h-[60px] text-center flex flex-col justify-center text-white p-4 rounded">
            <h2 className="text-lg  font-medium">{leader.title}</h2>
            <p className="text-sm">{leader.company}</p>
          </div>

          {/* Background */}
          <div>
            <h3 className="font-bold">Background :</h3>
            {leader.background.map((paragraph, index) => (
              <p key={index} className="text-sm w-[1040px] mt-2">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Major Engagement */}
          <div>
            <h3 className="font-bold">MAJOR Engagement</h3>
            <ul className="text-sm mt-2 space-y-6">
              {leader.engagements.map((engagement, index) => (
                <li key={index}>
                  <p className="font-bold">• {engagement.title}</p>
                  <p className="ml-4 w-[1040px]">{engagement.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

