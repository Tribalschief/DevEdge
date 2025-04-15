// app/components/IndustriesSection.tsx

export default function IndustriesSection() {
    return (
      <div className="relative overflow-hidden bg-[#f4e7ff]">
        {/* SVG Background Curve */}
        <svg
          className="absolute top-0 left-0 w-full h-[200px]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,160 C480,0 960,0 1440,160 L1440,0 L0,0 Z"
          />
        </svg>
  
        {/* Text Content */}
        <div className="relative z-10 text-center px-20 pt-[180px] pb-12">
          <h2 className="text-6xl  font-bold">Industries We Work With</h2>
          <p className="mt-4 text-gray-600 text-3xl max-w-6xl mx-auto">
            Our industry knowledge and expertise are the cornerstone of our organization,
            positioning us as emerging leaders in our areas of work. Our rich experience and
            diverse backgrounds enhance our ability to provide extraordinary solutions with
            local emphasis.
          </p>
        </div>
      </div>
    );
  }
  
  