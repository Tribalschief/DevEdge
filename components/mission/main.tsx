import CImage from "./cimage"
import ContentSection from "./content"
import vision from "@/public/Vsion.png"
import Om from "@/public/OM.png"
import Ov from "@/public/OV.png"

export default function MissionVision() {
  const missionContent =
    "DevEdge Consulting mission is to help businesses thrive by delivering " +
    "intelligent, tailored, and practical solutions that solve real challenges. We " +
    "combine deep expertise with innovative thinking and unwavering " +
    "execution to drive results that matter—improving efficiency, strengthening " +
    "controls, securing digital assets, and unlocking growth opportunities."

  const visionContent =
    "To be the most trusted consulting partner across the Middle East, Asia and " +
    "Europe known for transforming businesses through customized digital solutions, " +
    "smart automation, robust risk management, and future-ready technologies."

  return (
    <div className="w-full mx-auto p-4 sm:p-5 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mx-4 sm:mx-6 md:mx-8 lg:mx-[100px] items-center">
        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 order-2 md:order-1">
          <ContentSection title="Our Mission" icon={Om.src} content={missionContent} />
          <ContentSection title="Our Vision" icon={Ov.src} content={visionContent} />
        </div>

        <div className="flex justify-center mb-8 md:mb-0 order-1 md:order-2">
          <CImage image={vision.src} />
        </div>
      </div>
    </div>
  )
}