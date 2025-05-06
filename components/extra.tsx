import React from 'react';

export function Extra({ src }: { src: string }) {
  return (
    <section className="w-full bg-white py-10 sm:py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Text Section - Modified Text Sizes */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 md:order-1 text-center sm:text-center md:text-left flex flex-col justify-center items-center md:items-start">
            {/* 
              Fluid Heading Size using clamp()
              - Min size: 1.25rem (equivalent to text-xl)
              - Max size: 2.25rem (equivalent to text-4xl)
              - Preferred size: Scales with viewport width (vw) and height (vh)
              - Adjust the '1.5vw' and '1vh' values to control scaling intensity.
            */}
            <h2
              className="
                font-bold mb-2 md:mb-4 lg:mb-6 drop-shadow-md text-gray-800
                text-[clamp(1.25rem,calc(1rem+1.5vw+1vh),2.25rem)] 
              "
            >
              Delivered
            </h2>

            {/* 
              Fluid Paragraph Size using clamp()
              - Min size: 0.875rem (equivalent to text-sm)
              - Max size: 1.125rem (equivalent to text-lg)
              - Preferred size: Scales gently with vw and vh
              - Adjust the '0.5vw' and '0.25vh' values to control scaling.
            */}
            <p
              className="
                text-gray-700 leading-relaxed max-w-xl
                text-[clamp(0.875rem,calc(0.8rem+0.5vw+0.25vh),1.125rem)] text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium mt-1 sm:mt-2 md:mt-3 lg:mt-4 drop-shadow-lg
              "
            >
              We are more than just advisors — we are solution architects. We
              develop cost-effective, customizable ERP systems, drive end-to-end
              business automation, and design AI-powered applications tailored
              to your business needs.
            </p>

            <p
              className="
                text-gray-700 leading-relaxed max-w-xl
                text-[clamp(0.875rem,calc(0.8rem+0.5vw+0.25vh),1.125rem)]  text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium mt-1 sm:mt-2 md:mt-3 lg:mt-4 drop-shadow-lg
              "
            >
              Whether you're modernizing processes, strengthening governance,
              securing critical infrastructure, or scaling your enterprise, we
              bring strategy and execution together for measurable results.
            </p>
          </div>

          {/* Image Section (Using previous responsive aspect-ratio approach) */}
          <div className="flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0">
            <div
              className="
                relative 
                aspect-square 
                w-60 sm:w-72 md:w-80 lg:w-96 
                rounded-full 
                overflow-hidden 
                shadow-lg
              "
            >
              <img
                src={src}
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}