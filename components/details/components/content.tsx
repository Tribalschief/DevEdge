'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { FeaturesList } from "./flist"

interface ContentSectionProps {
  imageSrc: string
  imageAlt: string
  title: string
  subtitle: string
  description: string
  features: {
    iconSrc: string
    text: string
  }[]
}

export function ContentSection({ imageSrc, imageAlt, title, subtitle, description, features }: ContentSectionProps) {
  return (
    <motion.div 
      className="grid md:grid-cols-2 gap-8 mt-8 justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          width={500}
          height={400}
          className="rounded-lg shadow-md"
        />
      </div>

      <div className="">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <h3 className="text-xl font-semibold mb-6">{subtitle}</h3>
        <p className="text-gray-700 mb-6">{description}</p>

        <FeaturesList features={features} />
      </div>
    </motion.div>
  )
}