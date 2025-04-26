import Shapes3D from './Shapes3d'
import VideoPlayer from './video'

export default function HeroERP() {
  return (
    <main className="relative min-h-screen mt-[60px] sm:mt-[80px] md:mt-[100px] overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 h-full w-full -z-10">
        <Shapes3D />
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-20 relative z-10">
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
    </main>
  )
}
