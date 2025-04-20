import VideoPlayer from "./video";

export default function HeroERP() {
  return (
    <main className="relative min-h-screen mt-[60px] sm:mt-[80px] md:mt-[100px] overflow-hidden">
  <div className="container mx-auto px-4 py-8 sm:py-12 md:py-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
      <div className="text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-700 leading-tight">
          Boost your Business With DevEdge
        </h1>
        <p className="mt-3 md:mt-4 text-base sm:text-lg text-purple-600">
          Customized AI driven ERP Solutions
        </p>
        <div className="mt-6 md:mt-8 flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
          <button className="px-4 sm:px-6 py-2 bg-gray-100 text-gray-800 rounded-md font-medium text-sm sm:text-base">
            Get Product
          </button>
          <button className="px-4 sm:px-6 py-2 bg-black text-white rounded-md font-medium text-sm sm:text-base">
            Free Demo
          </button>
        </div>
      </div>
      <div className="aspect-square w-full max-w-[500px] mx-auto mt-8 md:mt-0 rounded-lg z-10 overflow-hidden">
        <VideoPlayer />
      </div>
    </div>
  </div>

  {/* Blurred Background */}
  <div className="w-[200px] sm:w-[300px] md:w-[423px] h-[200px] sm:h-[300px] md:h-[384px] bg-[#DC8FFF] absolute -right-20 sm:-right-30 md:-right-40 -bottom-[70px] sm:-bottom-[100px] md:-bottom-[140px] -z-10 blur-2xl md:blur-3xl" />
</main>
  );
}
