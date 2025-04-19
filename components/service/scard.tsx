"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
  iconClassName?: string
}

export function ServiceCard({
  icon,
  title,
  description,
  className = "",
  iconClassName = "",
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center p-6 transition-all duration-200 hover:shadow-md rounded-lg",
        className,
      )}
    >
      <div className={cn("mb-4 text-black", iconClassName)}>{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
    </div>
  )
}

