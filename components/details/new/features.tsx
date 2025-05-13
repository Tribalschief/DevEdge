import Image from "next/image"
import InternalAudit from "@/public/IA.png" // Ensure this path is correct
import { ArrowRight } from "lucide-react"
import Logo from "@/public/logoremovebg.png" // Ensure this path is correct

interface FeatureItem {
  text: string
}

interface FeatureSection {
  featuresList: FeatureItem[]
  featuresTitle: string
}

// Define fallbacks outside the component
const defaultImage = "/placeholder.svg"
const defaultLogo = "/placeholder.svg"

// Helper function to get image URL string
const getImageUrl = (src: any): string => {
  if (typeof src === "string") {
    return src
  }
  if (typeof src === "object" && src !== null && src.src) {
    return src.src // Assuming 'src' contains the path
  }
  return defaultImage // Fallback
}

export const Features = ({ features }: { features: FeatureSection[] }) => {
  const currentFeature = features?.[0]
  const featuresTitle = currentFeature?.featuresTitle ?? "OUR FEATURES"
  const featuresList = currentFeature?.featuresList ?? []
  const imageUrl = getImageUrl(InternalAudit)

  return (
    <main className="mt-16 sm:mt-24 lg:mt-4 relative overflow-hidden container h-full mx-auto p-4 md:p-6 lg:px-8 max-w-screen-res">
      <div className="relative flex flex-col items-center justify-center lg:mb-4">
        {/* Pink curved shape */}
        <div className="w-[900px] h-[450px] lg:hidden absolute z-30 flex -top-[248px] 2xs:-top-[248px] xs:-top-[274px] sm:-top-[238px] md:-top-[262px] rounded-b-full bg-[#6208ac] opacity-10" />
        <div className="w-[900px] h-[450px] hidden lg:flex absolute z-30 -top-[260px] lg:-left-[340px] rounded-br-full bg-[#6208ac] opacity-10" />
        {/* Title */}
        <h1 className="text-center text-xl sm:text-2xl lg:text-3xl mt-12 sm:mt-20 lg:mt-10 font-bold z-30 mb-2 md:mb-8 px-2 max-w-[1400px]">
          WHY CHOOSE DEVEDGE CONSULTING FOR {featuresTitle.toUpperCase()}
        </h1>
        {/* Logo */}
        <div
          className="absolute top-[calc(1%-30px)] sm:top-[calc(1%-30px)] md:top-[calc(1%-50px)] left-[calc(50%-50px)] z-40
                    scale-[0.5] sm:scale-75 md:scale-90 lg:scale-100
                    origin-top-left
                    xl:top-0 lg:top-10 lg:-left-16"
        >
          <Image src={Logo ?? defaultLogo} alt="DevEdge Logo" width={160} height={160} priority />
        </div>
        {/* Layout container */}
        <div className="w-full flex flex-col lg:flex-row lg:gap-y-8 max-w-screen-res relative">
          {/* --- Left Column --- */}
          <div
            className="w-full lg:w-[50%] xl:w-[30%] relative mb-10 lg:mb-0 z-20
                      min-h-[380px] xs:min-h-[420px] sm:min-h-[500px] md:min-h-[520px] lg:min-h-0"
          >
            {/* Background Image & Overlay Container - Original structure */}
            <div className="absolute inset-0 z-0 opacity-70 lg:top-[50px] top-[100px] lg:-left-10">
              {/* Image Viewport (relative, overflow, rounding) */}
              <div className="relative w-auto h-full overflow-hidden sm:rounded-t-[100px]">
                {/* Mobile Image - Use fill again */}
                <div className="absolute inset-0 bottom-[-50px] block lg:hidden">
                  <Image
                    src={InternalAudit ?? defaultImage}
                    alt={featuresTitle}
                    fill
                    className="w-full h-full object-contain"
                    sizes="(max-width: 1023px) 100vw, 50vw"
                  />
                </div>

                {/* Desktop Image - Using IMG with object-contain */}
                <img
                  src={imageUrl || "/placeholder.svg"}
                  alt={featuresTitle}
                  className="absolute inset-0 xl:-left-8 h-full w-full object-contain hidden lg:block rounded-tr-2xl"
                  loading="eager"
                />
              </div>

              {/* Overlay - Positioned relative to Background Container */}
              <div className="absolute -left-[15%] -right-[15%] lg:left-[-60px] xl:left-[-36px] h-full z-10 top-0 md:top-0 lg:-top-[8px] xl:-top-[6px] lg:rounded-tr-full bg-[#e0cef5] opacity-60 pointer-events-none"></div>
            </div>
            {/* "WHY CHOOSE US" Text Block - Needs higher Z-index than overlay */}
            <div className="relative z-20 lg:w-[75%]  flex flex-col justify-start h-full p-4 xs:p-5 sm:p-6 md:p-8  text-white lg:mt-10 pointer-events-none">
              <div className="relative pointer-events-auto">
                <ArrowRight className="absolute top-[calc(60%-50px)] lg:top-20 xl:top-24 left-1/2 lg:-left-[20px] -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 text-black w-8 h-8 xs:w-8 xs:h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-16 lg:h-16" />
                <div className="mt-36 sm:mt-40 md:mt-44 lg:mt-36 xl:mt-40 mx-auto text-center pl-0 xs:pl-0 sm:pl-0 md:pl-0 lg:-ml-[32px] xl:ml-[-20px] lg:text-left">
                  <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider">
                    <span className="font-extrabold text-[26px] xs:text-[30px] sm:text-[36px] md:text-[48px] lg:text-[60px] text-[#6208ac]">
                      WHY
                    </span>
                    <br />
                    <span className="block mt-0 sm:mt-1 text-[20px] xs:text-[24px] sm:text-[28px] text-black md:text-[38px] lg:text-[50px]">
                      CHOOSE US
                    </span>
                  </h1>
                  <h2 className="mt-2 sm:mt-3 text-[10px] xs:text-[11px] sm:text-xs md:text-sm lg:text-base lg:text-justify text-center text-black tracking-wider leading-snug max-w-[600px] mx-auto lg:mx-0">
                    Take Your Business To The Next Level With 
<br className="hidden xl:hidden 2xl:block" /> 
Our Digital Transformation Solutions And 
<br className="hidden xl:hidden 2xl:block" />
{" "}
Start Your Transformation Journey With 
<br className="hidden xl:hidden 2xl:block" /> 
Solutions Made For Real-World Results
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* --- Right Column --- */}
          <div className="w-full relative right-0 lg:right-[80px] xl:right-[100px] z-40 px-1 sm:px-2 lg:mt-16 lg:w-[70%] xl:w-[65%] lg:min-w-[700px]">
            {/* Feature list container with relative positioning */}
            <div className=" w-full">
              {featuresList.map((point, index) => (
                <div
                  key={index}
                  className="flex w-full gap-2 sm:gap-3 mt-4 items-start p-2 sm:p-3 relative h-[40px] xs:h-[45px] sm:h-[50px] md:h-[60px] lg:h-[70px]"
                >
                  {/* Number indicator */}
                  <div className="text-sm sm:text-base md:text-lg lg:text-xl font-bold min-w-[35px] sm:min-w-[30px] md:min-w-[35px] lg:min-w-[40px] pt-0.5 text-center z-10">
                    {index + 1}
                  </div>

                  {/* Feature text with absolute positioning - full width on lg */}
                  <div
                    className="absolute left-[45px] sm:left-[50px] md:left-[55px] lg:left-[60px] right-2 font-bold text-[11px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-gray-800 lg:pr-8 whitespace-normal"
                    // Removed: lg:w-full (let left/right define width for absolute elements)
                    // Removed: lg:whitespace-nowrap (to allow wrapping on lg+)
                    // Removed: lg:min-w-[600px] (to allow shrinking below 600px on lg+)
                  >
                    {typeof point === "object" && point !== null && "text" in point
                      ? point.text
                      : typeof point === "string"
                        ? point
                        : "Invalid feature item"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
