"use client";

import CImage from "./cimage";
import ContentSection from "./content";
import vision from "@/public/possible.jpg";
import Om from "@/public/OM.png";
import Ov from "@/public/OV.png";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MissionVision() {
  const sectionRef = useRef<HTMLDivElement>(null); // Renamed for clarity
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"], // Adjust offset for when effect starts/ends
                                      // "end end" means effect completes when bottom of section hits bottom of viewport
  });

  // Parallax for individual content sections - Mission moves slightly more
  const missionY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]); // Moves up 25% of its height
  const visionY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]); // Moves up 15% of its height

  // Parallax for the image - Image moves up less, creating depth
  // We can also make it scale slightly or move horizontally for more dynamism
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]); // Moves slightly down, or keep 0 to -X%
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]); // Optional: image scales down a bit
  // const imageX = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]); // Optional: slight horizontal movement

  const missionContent =
    "DevEdge Consulting's mission is to help businesses thrive by delivering " +
    "intelligent, tailored, and practical solutions that solve real challenges. We " +
    "combine deep expertise with innovative thinking and unwavering " +
    "execution to drive results that matter—improving efficiency, strengthening " +
    "controls, securing digital assets, and unlocking growth opportunities.";

  const visionContent =
    "To be the most trusted consulting partner across the Middle East, Asia and " +
    "Europe known for transforming businesses through customized digital solutions, " +
    "smart automation, robust risk management, and future-ready technologies.";

  return (
    <div
      ref={sectionRef}
      className="w-full px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:px-20 xl:px-24 2xl:px-32 overflow-hidden" // Added more padding, crucial: overflow-hidden on parent
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-x-12 lg:gap-x-16 xl:gap-x-24 items-center max-w-7xl mx-auto">
        {/* Text Section - Now ContentSections will move individually */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-6 lg:gap-10 items-start">
          {/* Mission Content with its own parallax */}
          <motion.div
            style={{ y: missionY }}
            className="flex-1" // Ensure it takes up space
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ContentSection
              title="Our Mission"
              icon={Om.src}
              content={missionContent}
            />
          </motion.div>

          {/* Vision Content with its own parallax */}
          <motion.div
            style={{ y: visionY }}
            className="flex-1 mt-8 lg:mt-0" // Add some top margin for stacked view on small screens
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ContentSection
              title="Our Vision"
              icon={Ov.src}
              content={visionContent}
            />
          </motion.div>
        </div>

        {/* Image Section - apply multiple transforms if desired */}
        <motion.div
          // You can combine transforms in the style prop
          style={{
            y: imageY,
            scale: imageScale,
            // x: imageX, // Uncomment if using horizontal parallax
          }}
          className="flex justify-center md:justify-end order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl shadow-2xl rounded-lg overflow-hidden"> {/* Added shadow and rounded corners for image container */}
            <CImage image={vision.src} /> {/* Assuming CImage handles responsiveness well */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}