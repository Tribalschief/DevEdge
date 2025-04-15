// import Image from "next/image";

// interface CoreValueCardProps {
//   icon: string;
//   title: string;
//   description: string;
//   centerText?: boolean;
// }

// export default function CoreValueCard({
//   icon,
//   title,
//   description,
//   centerText = false,
// }: CoreValueCardProps) {
//   return (
//     <div className="flex gap-4">
//     <div className="flex-shrink-0">
//       <div className="w-14 h-14 flex items-center justify-center">
//         <Image
//           src={icon}
//           width={56}
//           height={56}
//           alt={`${title} icon`}
//           className="w-full h-full mt-40"
//         />
//       </div>
//     </div>
//     <div className="w-px bg-purple-300 mx-1"></div>
//     <div className={`${centerText ? "text-center" : ""}`}>
//       <h2 className="text-[#061F33] text-center font-montserrat text-[28px] font-bold leading-none">
//         {title.split("\n").map((line, idx) => (
//           <div key={idx}>{line}</div>
//         ))}
//       </h2>
//       <p className={`text-[#5B5675] text-center font-montserrat mt-4 self-stretch text-[18px] font-medium leading-[24px]${centerText ? "text-lg" : ""}`}>
//         {description.split("\n").map((line, idx) => (
//           <span key={idx}>
//             {line}
//             <br />
//           </span>
//         ))}
//       </p>
//     </div>
//   </div>
//   );
// }

/*
  <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-14 h-14 flex items-center justify-center">
          <Image
            src={icon}
            width={56}
            height={56}
            alt={`${title} icon`}
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="w-px bg-purple-300 mx-1"></div>
      <div className={`${centerText ? "text-center" : ""}`}>
        <h2 className="text-[#061F33] text-center font-montserrat text-[28px] font-bold leading-none">
          {title.split("\n").map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
        </h2>
        <p className={`text-[#5B5675] text-center font-montserrat text-[18px] font-medium leading-[27px]${centerText ? "text-lg" : ""}`}>
          {description.split("<br/>").map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
    </div>
    */
   "use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface CoreValueCardProps {
  icon: string
  title: string
  description: string
  index: number
}

export default function CoreValueCard({ icon, title, description, index }: CoreValueCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card number indicator */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
        <span className="text-purple-700 font-semibold text-sm">{index}</span>
      </div>

      <div className="p-6 md:p-8">
        <div className="flex flex-col items-center mb-6">
          <motion.div
            className="relative w-16 h-16 mb-4"
            animate={isHovered ? { y: [0, -5, 0], transition: { repeat: Number.POSITIVE_INFINITY, duration: 2 } } : {}}
          >
            <div className="absolute inset-0 bg-purple-200 rounded-full blur-md opacity-50 transform scale-90"></div>
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <Image
                src={icon || "/placeholder.svg"}
                width={64}
                height={64}
                alt={`${title} icon`}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          <h2 className="text-[#061F33] text-center font-bold text-xl md:text-2xl leading-tight mb-3">{title}</h2>

          <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
        </div>

        <p className="text-[#5B5675] text-center text-base md:text-lg leading-relaxed">{description}</p>

        <motion.div
          className="w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-400 absolute bottom-0 left-0"
          initial={{ scaleX: 0, originX: 0 }}
          animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  )
}
