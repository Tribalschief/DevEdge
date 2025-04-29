interface IndustryCardProps {
    title: string
    backgroundIcon: any
   
    description: string
    
    number: number
  }
import Image from 'next/image';
//   export const IndustryCard = ({ title, icon, number, description }: IndustryCardProps) => {
//     return (
//       <div className="relative p-[2px] bg-opacity- rounded-lg bg-[linear-gradient(180deg,#6A0DAD,#00E0FF)] h-full w-full max-w-sm mx-auto">
//         {/* Floating Icon */}
//         <div className="absolute z-10 lg:-top-4  sm:-top-8 left-1/2 transform -translate-x-1/2 ">
//           <div className="bg-white p-12 sm:p-4 rounded-full border-2 shadow-md" 
//                style={{ borderColor: "linear-gradient(90deg,#6A0DAD,#00E0FF)" }}>
//             {icon}
//           </div>
//         </div>
        
//         {/* Inner white card */}
//         <div className="bg-white h-full  rounded-lg pt-8 sm:pt-10 pb-4 sm:pb-6 px-4 sm:px-6 text-center relative overflow-hidden">
//           {/* Number at top-right */}
//           <span className="absolute top-1 left-2 text-xl sm:text-2xl font-bold text-gray-700">
//             {number}
//           </span>
  
//           {/* Title */}
//           <h3 className="text-xs sm:text-sm font-bold text-purple-700 uppercase mb-1 sm:mb-2 leading-tight">
//             {title}
//           </h3>
  
//           {/* Description */}
//           <p className="text-gray-600 text-xs leading-relaxed">
//             {description}
//           </p>
//         </div>
//       </div>
//     );
//   };

import React from 'react'; // Make sure to import React if not already

// Example Icon component (replace with your actual icon)


export const IndustryCard = ({ number, title, description, backgroundIcon }:IndustryCardProps) => {
  return (
    <div className="relative p-[2px]  rounded-lg new-border  h-full w-full max-w-sm mx-auto shadow-lg">
    <div className=''>
        {/* Floating Icon structure (using simple white bg/border as per image reference) */}
        <div className="absolute z-10 -top-5 md:-top-6 left-1/2 transform -translate-x-1/2">
             <div className="bg-white p-3 sm:p-4 rounded-full border border-gray-200 shadow-md">
                 <Image
                             src={backgroundIcon || '/placeholder.svg'}
                             alt={title}
                             fill
                             className="object-cover brightness-[0.6]" // dark overlay effect
                           />
             </div>
        </div>

        {/* Inner Card Content Area */}
        <div
          // ** CRITICAL CHANGE HERE **
          // Use RGBA for background: white (255,255,255) with 10% opacity (0.1)
          // This makes ONLY the background transparent, not the text content.
          className="bg-white bg-opacity-10
                     h-full w-full 
                     pt-10 pb-4 sm:pb-6 px-4 sm:px-6
                     text-center relative overflow-hidden"
        >
            {/* Number at top-left */}
            {/* Text color MUST contrast with the background *behind* the card */}
            <span className="absolute top-2 left-3 text-lg sm:text-xl font-bold  drop-shadow-sm"> {/* Changed to white */}
                {number}.
            </span>

            {/* Title */}
            {/* Text color MUST contrast */}
            <h3 className="text-sm sm:text-base font-semibold text-[#6A28ca] uppercase mb-2 leading-tight drop-shadow-sm"> {/* Changed to light purple */}
                {title}
            </h3>

            {/* Description */}
            {/* Text color MUST contrast */}
            <p className=" text-xs sm:text-sm leading-relaxed drop-shadow-sm"> {/* Changed to light gray */}
                {description}
            </p>
        </div>
        </div>
    </div>
  );;
};
