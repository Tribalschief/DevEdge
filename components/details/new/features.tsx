import Image from "next/image"
import InternalAudit from "@/public/IA.png"
import { ArrowRight, ChevronLeft, ChevronRight, Plus } from "lucide-react"
import Logo from "@/public/logoremovebg.png"

interface FeatureItem {
  text: string
}

interface FeatureSection {
  featuresList: FeatureItem[]
  featuresTitle: string
}

export const Features = ({ features }: { features: FeatureSection[] }) => {
  

  // Access the first feature section
  const currentFeature = features[0]
  const featuresTitle = currentFeature.featuresTitle
  const featuresList = currentFeature.featuresList

  return (
    <main className="min-h-screen mt-16 sm:mt-24 relative overflow-x-hidden container h-full mx-auto p-4 md:p-6">
      <div className="relative flex flex-col items-center justify-center lg:mb-4 ">
        {/* Pink curved shape */}
        {/* Visible on screens smaller than lg */}
        <div className="w-[900px] h-[450px] lg:hidden absolute z-30 flex -top-[248px] 2xs:-top-[248px] xs:-top-[274px] sm:-top-[238px] md:-top-[262px] rounded-b-full res:xl:rounded-br-full bg-[#6208ac] opacity-10" />

        {/* Visible only on lg and up */}
        <div className="w-[900px] h-[450px] hidden lg:flex absolute z-30 -top-[260px] lg:-left-[340px] rounded-br-full res:xl:rounded-br-full bg-[#6208ac] opacity-10" />

        {/* Title */}
        <h1 className="text-center text-xl sm:text-2xl mt-12 sm:mt-20 lg:mt-10 font-bold z-30 mb-2  md:mb-8 px-2">
          WHY CHOOSE DEVEDGE CONSULTING FOR {featuresTitle.toUpperCase()}
        </h1>

        {/* Logo */}
        <div
          className="absolute top-[calc(1%-30px)] sm:top-[calc(1%-30px)] md:top-[calc(1%-50px)] left-[calc(50%-50px)] z-40 
                        scale-[0.5] sm:scale-75 md:scale-90 lg:scale-100 
                        origin-top-left 
                        lg:top-10 lg:left-0 xl:top-0"
        >
          <Image src={Logo || "/placeholder.svg"} alt="DevEdge Logo" width={160} height={160} />
        </div>

        {/* Layout container for Image section and Points section */}
        {/* Stacks vertically on mobile, row on lg+. Columns will stretch to equal height on lg. */}
        <div className="w-full flex flex-col lg:flex-row lg:gap-8">
          {/* --- Left Column (Image as background and "WHY CHOOSE US" text) --- */}
          <div
            className="w-full lg:w-[50%] xl:w-[45%] relative mb-10 lg:mb-0 z-20 
                          min-h-[380px] xs:min-h-[420px] sm:min-h-[500px] md:min-h-[520px] lg:min-h-0"
          >
            {/* Background Image - Fills this entire left column div */}
            <div className="absolute inset-0 z-0 opacity-70 lg:top-[50px] top-[100px] lg:-left-10">
              {/* This div is the main "viewport" for the image */}
              <div className="relative w-full h-full top-[50px] overflow-hidden rounded-tr-[50px] sm:rounded-t-[100px]">
                {/* Visible on md and smaller (mobile/tablet) */}
                <div className="absolute inset-0 bottom-[-50px] block lg:hidden">
                  <Image
                    src={InternalAudit || "/placeholder-image.jpg"}
                    alt={featuresTitle}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Visible on lg and up (desktop) */}
                <div className="absolute inset-0 bottom-[-50px] hidden lg:block">
                  <Image
                    src={InternalAudit || "/placeholder-image.jpg"}
                    alt={featuresTitle}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Darker overlay - WIDENED MORE */}
              <div className="absolute -left-[15%] -right-[15%] z-10 top-0 md:top-0 lg:top-[36px] bottom-[-50px] lg:rounded-tr-[650px] bg-[#e0cef5] opacity-60"></div>
            </div>

            {/* "WHY CHOOSE US" Text Block - Overlaying the image */}
            <div className="relative z-10 flex flex-col justify-start h-full p-4 xs:p-5 sm:p-6 md:p-8 text-white lg:mt-10">
              <div className="relative">
                <ArrowRight className="absolute top-[calc(60%-50px)] lg:top-28 left-1/2 lg:left-8 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 text-black w-8 h-8 xs:w-8 xs:h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />

                <div className="mt-48 mx-auto text-center pl-0 xs:pl-0 sm:pl-0 md:pl-0 lg:pl-[32px] lg:text-left">
                  <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider">
                    <span className="font-extrabold text-[52px] xs:text-[60px] sm:text-[72px] md:text-[96px] lg:text-[100px] text-[#6208ac]">
                      WHY
                    </span>
                    <br />
                    <span className="block mt-0 sm:mt-1 text-[20px] xs:text-[24px] sm:text-[28px] text-black md:text-[38px] lg:text-[50px]">
                      CHOOSE US
                    </span>
                  </h1>

                  <h2 className="mt-2 sm:mt-3 text-[10px] xs:text-[11px] sm:text-xs md:text-sm lg:text-base text-black tracking-wider leading-snug">
                    Take Your Business To The Next Level With Our Digital Transformation Solutions And Start Your
                    Transformation Journey With Solutions Made For Real-World Results
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* --- Right Column (Points List) --- */}
          <div className="w-full lg:w-[55%] xl:w-[60%] relative right-0 lg:right-[100px] z-40 px-1 sm:px-2">
            {featuresList.map((point, index) => (
              <div key={index} className="flex gap-2 sm:gap-3 mt-10 lg:mt-0 items-start p-2 sm:p-3 mb-2 sm:mb-3">
                <div className="text-sm sm:text-base md:text-lg font-bold min-w-[35px] sm:min-w-[30px] md:min-w-[35px] pt-0.5 text-center">
                  {index + 1}
                </div>
                <div className="font-bold text-[11px] xs:text-xs sm:text-sm md:text-base text-gray-800">
                  {typeof point === "string" ? point : point.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}


  