import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ServiceGridProps {
  children: ReactNode
  columns?: {
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
  gap?: "small" | "medium" | "large"
  className?: string
}

export function ServiceGrid({
  children,
  columns = { sm: 1, md: 2, lg: 3, xl: 3 },
  gap = "medium",
  className = "",
}: ServiceGridProps) {
  const gapClasses = {
    small: "gap-4",
    medium: "gap-6",
    large: "gap-8",
  }

  const getColumnsClass = () => {
    const { sm, md, lg, xl } = columns

    return [sm && `grid-cols-${sm}`, md && `md:grid-cols-${md}`, lg && `lg:grid-cols-${lg}`, xl && `xl:grid-cols-${xl}`]
      .filter(Boolean)
      .join(" ")
  }

  return <div className={cn("grid", getColumnsClass(), gapClasses[gap], className)}>{children}</div>
}

