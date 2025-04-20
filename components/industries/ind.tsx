// app/components/IndustriesSection.tsx

export default function IndustriesSection() {
  return (
    <div className="relative overflow-hidden bg-[#f4e7ff]">
      {/* SVG Background Curve */}
      <svg
        className="absolute top-0 left-0 w-full h-[100px] sm:h-[150px] md:h-[200px]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          d="M0,160 C480,0 960,0 1440,160 L1440,0 L0,0 Z"
        />
      </svg>

      {/* Text Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-12 lg:px-20 
                      pt-[100px] sm:pt-[120px] md:pt-[150px] lg:pt-[180px] 
                      pb-6 sm:pb-8 md:pb-10 lg:pb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Industries We Work With
        </h2>
        <p className="mt-2 sm:mt-3 md:mt-4 text-gray-600 
                     text-lg sm:text-xl md:text-2xl lg:text-3xl 
                     max-w-6xl mx-auto">
          Our industry knowledge and expertise are the cornerstone of our organization,
          positioning us as emerging leaders in our areas of work. Our rich experience and
          diverse backgrounds enhance our ability to provide extraordinary solutions with
          local emphasis.
        </p>
      </div>
    </div>
  );
}
  
  