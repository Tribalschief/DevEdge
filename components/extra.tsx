
export default function Extra({src}:{src:string}) {
    return (
      <section className="w-full bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Delivered</h2>
  
              <p className="text-gray-700 leading-relaxed">
                We are more than just advisors we are solution architects. We develop cost-effective, customizable ERP
                systems, drive end-to-end business automation, and design AI- powered applications tailored to your
                business needs
              </p>
  
              <p className="text-gray-700 leading-relaxed">
                Whether you're modernizing processes, strengthening governance, securing critical infrastructure, or
                scaling your enterprise, we bring strategy and execution together for measurable results.
              </p>
            </div>
  
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <img
                  src={src}
                  alt="Team collaboration in a circle"
                  
                  className="w-[400px] h-[400px] rounded-full object-cover mt-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }