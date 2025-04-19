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
    <div className="w-full mx-auto p-6 md:p-8">
      <div className="grid md:grid-cols-2 gap-16  mx-[100px] items-center">
        <div className="space-y-12">
          <ContentSection title="Our Mission" icon={Om.src} content={missionContent} />

          <ContentSection title="Our Vision" icon={Ov.src} content={visionContent} />
        </div>

        <CImage image={vision.src}/>
      </div>
    </div>
  )
}