import React from 'react'
import Image from 'next/image'
import header from '@/public/header.png'



const ContactHeader = () => { // Renamed component for clarity
  return (
    // Apply the height and margin structure from ContactHeader
    // <div className="relative w-full h-36 sm:h-48 md:h-64 lg:h-80 xl:h-96 
    //                 my-6 mt-20 sm:my-10 md:my-16 xl:mt-[120px] lg:mt-[120px] sm:mt-[80px] md:mt-[110px]">
      
    //   {/* Image Container */}
    //   <div className="absolute inset-0">
    //     <Image
    //       src={header} // Use the correct image source for this component
    //       alt="Contact header background"
    //       fill
    //       priority
    //       // Added sizes attribute similar to ContactHeader (adjust if needed)
    //       sizes="(max-width: 640px) 100vw, 
    //              (max-width: 768px) 100vw, 
    //              (max-width: 1024px) 100vw, 
    //              100vw"
    //       className="object-cover" // Use class instead of style for object-fit
    //       // style={{ objectPosition: 'center' }} // Optional: if you need specific positioning
    //     />
    //   </div>

    //   {/* Overlay for text contrast (like ContactHeader) */}
    //   <div className="absolute inset-0 bg-black bg-opacity-30"></div>

    //   {/* Content Container - centered vertically */}
    //   <div className="absolute inset-0 flex items-center">
    //     {/* Use container for width control and padding like ContactHeader */}
    //     <div className="container mx-auto px-4 sm:px-6 md:px-8 text-white">
    //       {/* Keep original text content but ensure it's white for visibility */}
    //       <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4 lg:mb-6 drop-shadow-md">
    //         Contact
    //       </h1>
    //       <p className="text-xs sm:text-sm md:text-base lg:text-xl font-medium mt-1 sm:mt-2 md:mt-3 lg:mt-4 drop-shadow-md">
    //         We don’t just consult — we build, secure, and transform your
    //         business for lasting success
    //       </p>
    //     </div>
    //   </div>
    // </div>    // Apply the height and margin structure from ContactHeader
     <div className="relative w-full h-36 sm:h-48 md:h-64 lg:h-80 xl:h-96 
                        my-6 mt-20 sm:my-10 md:my-16  xl:mt-[120px] lg:mt-[120px] sm:mt-[80px] md:mt-[110px]">
          <div className="absolute inset-0">
            <Image 
              src={header} 
              alt="Contact header"   
              fill
              priority
              sizes="(max-width: 640px) 100vw, 
                     (max-width: 768px) 100vw, 
                     (max-width: 1024px) 100vw, 
                     100vw"
              className="object-cover"
              style={{ objectPosition: 'center' }}
            />
          </div>
          
          {/* Optional overlay for better text visibility if needed */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div> 
          
          {/* Optional content container */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold">
                Contact Us
              </h1>
              <p className="mt-3 md:mt-4 text-base sm:text-lg text-white">
                We don’t just consult — we build, secure, and transform your
                business for lasting success
              </p>
            </div>
          </div> 
        </div>
  );
};
export default ContactHeader; // Export with the new name