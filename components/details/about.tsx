import { HeroSection } from "@/components/details/components/hero"
import { ContentSection } from "@/components/details/components/content"

interface AboutDetailsProps {
  imageSrc: string
  imageAlt: string
  features: {
    iconSrc: string
    text: string
  }[]
}

export function AboutDetails({features , imageSrc,imageAlt}:AboutDetailsProps) {
  // Features data
  

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <HeroSection
        title="Why Choose"
        highlightedText="DevEdge Consulting"
        description="We don't just consult — we commit. DevEdge is your partner in strengthening defenses, elevating audit integrity, and engineering secure, resilient systems that stand up to real-world threats."
      />

      <ContentSection
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        title="Why Join DevEdge"
        subtitle="Where Expertise Meets Purpose. And Every Day Shapes the Future."
        description="At DevEdge Consulting, you won't just be part of a company – you'll be part of building something bigger.\n\nFrom government transformation to driving digital transformation across industries, we're tackling real-world challenges with intelligence, integrity, and impact."
        features={features}
      />
    </div>
  )
}
