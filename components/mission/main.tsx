import CImage from "./cimage"
import ContentSection from "./content"
import vision from "@/public/Vsion.png"
import Om from "@/public/OM.png"
import Ov from "@/public/OV.png"

export default function MissionVision() {
  const missionContent =
    "DevEdge Consulting’s mission is to help businesses thrive by delivering " +
    "intelligent, tailored, and practical solutions that solve real challenges. We " +
    "combine deep expertise with innovative thinking and unwavering " +
    "execution to drive results that matter—improving efficiency, strengthening " +
    "controls, securing digital assets, and unlocking growth opportunities."

  const visionContent =
    "To be the most trusted consulting partner across the Middle East, Asia and " +
    "Europe known for transforming businesses through customized digital solutions, " +
    "smart automation, robust risk management, and future-ready technologies."

  return (
    <div className="w-full px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12 lg:gap-x-20 items-center">
        {/* Text Section */}
        <div className="space-y-10 text-center md:text-left order-2 md:order-1">
          <ContentSection title="Our Mission" icon={Om.src} content={missionContent} />
          <ContentSection title="Our Vision" icon={Ov.src} content={visionContent} />
        </div>

        {/* Image Section */}
        <div className="flex justify-center order-1 md:order-2">
          <CImage image={vision.src} />
        </div>
      </div>
    </div>
  )
}
