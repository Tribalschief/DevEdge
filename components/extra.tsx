
export  function Extra({src}:{src:string}) {
    return (
      <section className="w-full bg-white py-10 sm:py-12 md:py-16 lg:py-24">
  <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
      
      {/* Text Section */}
      <div className="space-y-4 sm:space-y-5 md:space-y-6 order-2 md:order-1 text-center sm:text-center md:text-left flex flex-col justify-center items-center md:items-start">
        <h2 className="text-xl sm:text-xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 lg:mb-6 drop-shadow-md text-gray-800">
          Delivered
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-xl">
          We are more than just advisors — we are solution architects. We develop cost-effective, customizable ERP
          systems, drive end-to-end business automation, and design AI-powered applications tailored to your
          business needs.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-xl">
          Whether you're modernizing processes, strengthening governance, securing critical infrastructure, or
          scaling your enterprise, we bring strategy and execution together for measurable results.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex justify-center md:justify-end order-1 md:order-2 mb-8 md:mb-0">
        <div className="relative">
          <img
            src={src}
            alt="Team collaboration"
            className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  </div>
</section>

    )
  }