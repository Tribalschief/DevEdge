import type { ReactNode } from "react"
import { SectionTitle } from "@/components/service/stitle"
import { ServiceGrid } from "@/components/service/sgrid"
import { cn } from "@/lib/utils"

interface ServiceSectionProps {
  title: string
  highlight?: string
  subtitle?: string
  children: ReactNode
  columns?: {
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: "small" | "medium" | "large"
  className?: string
  centered?: boolean
}

export function ServiceSection({
  title,
  highlight,
  subtitle,
  children,
  columns,
  gap = "small",
  className = "",
  centered = true,
}: ServiceSectionProps) {
  return (
    <section className={cn("py-16 px-8 bg-white", className)}>
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={title} highlight={highlight} subtitle={subtitle} centered={centered} />

        <ServiceGrid columns={columns} gap={gap}>
          {children}
        </ServiceGrid>
      </div>
    </section>
  )
}

