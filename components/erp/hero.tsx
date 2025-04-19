import VideoPlayer from "./video";

export default function HeroERP() {
  return (
    <main className="relative min-h-screen mt-[100px] overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-bold text-purple-700 leading-tight">
              Boost your Business With DevEdge
            </h1>
            <p className="mt-4 text-lg text-purple-600">
              Customized AI driven ERP Solutions
            </p>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-2 bg-gray-100 text-gray-800 rounded-md font-medium">
                Get Product
              </button>
              <button className="px-6 py-2 bg-black text-white rounded-md font-medium">
                Free Demo
              </button>
            </div>
          </div>
          <div className="aspect-square w-full rounded-lg z-10 overflow-hidden">
            <VideoPlayer />
          </div>
        </div>
      </div>

      {/* Blurred Background */}
      <div className="w-[423px] h-[384px] bg-[#DC8FFF] absolute -right-40 -bottom-[140px] -z-10 blur-3xl" />
    </main>
  );
}
