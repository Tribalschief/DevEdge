"use client"

import type React from "react"
  import { CoreValues } from '@/components/core/try'
import { Divider } from '@/components/choose/divider'

import divider from '@/public/divider.jpg'
import {
  Building2,
  LandmarkIcon,
  Store,
  Wallet,
  Heart,
  Ship,
  Zap,
  ShoppingCart,
  Factory,
  GraduationCap,
  Cpu,
  Radio,
  Hammer,
  UtensilsCrossed,
} from "lucide-react"
import { CoreDivider } from "../core/coredivider"
import core from "@/public/core.png"
interface IndustryCardProps {
  title: string
  icon: React.ReactNode
  color: string
  projects?: number
  years?: number
}

const IndustryCard = ({ title, icon, color }: IndustryCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md">
      {/* Colored bar at top */}
      <div className="h-1.5" style={{ backgroundColor: color }}></div>

      <div className="p-4">
        {/* Icon and title */}
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-gray-200 p-2 rounded-md">{icon}</div>
          <h3 className="font-medium text-sm sm:text-base">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-xs sm:text-sm mb-4">
          Transforming production processes through innovative solutions and operational excellence.
        </p>

       
      </div>
    </div>
  )
}

export default function IndustryGrid() {
  const industries = [
    { title: "Banking", icon: <Building2 size={18} />, color: "#FF3366" },
    { title: "Government & Public Services", icon: <LandmarkIcon size={18} />, color: "#FF9933" },
    { title: "Retail and Real Estate", icon: <Store size={18} />, color: "#FFCC33" },
    { title: "Financial Services", icon: <Wallet size={18} />, color: "#66CC66" },
    { title: "Health Care", icon: <Heart size={18} />, color: "#9933CC" },
    { title: "Shipping and Logistics", icon: <Ship size={18} />, color: "#666699" },
    { title: "Energy", icon: <Zap size={18} />, color: "#3399FF" },
    { title: "Consumer", icon: <ShoppingCart size={18} />, color: "#33CCCC" },
    { title: "Power and Industrial Control System", icon: <Factory size={18} />, color: "#CC3333" },
    { title: "Education", icon: <GraduationCap size={18} />, color: "#999999" },
    { title: "Technology", icon: <Cpu size={18} />, color: "#6666CC" },
    { title: "Media & Telecommunications", icon: <Radio size={18} />, color: "#CC66CC" },
    { title: "Manufacturing", icon: <Hammer size={18} />, color: "#99CC33" },
    { title: "Hospitality", icon: <UtensilsCrossed size={18} />, color: "#CCCCCC" },
  ]

  return (
<div className="relative bg-[#f6ebff] ">
    <div className="px-4  md:py-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {industries.slice(0, 12).map((industry, index) => (
          <IndustryCard key={index} title={industry.title} icon={industry.icon} color={industry.color} />
        ))}
      </div>

      {/* Last two items centered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="hidden lg:block lg:col-span-1"></div>
        {industries.slice(12).map((industry, index) => (
          <IndustryCard key={index + 12} title={industry.title} icon={industry.icon} color={industry.color} />
        ))}
        <div className="hidden lg:block lg:col-span-1"></div>
      </div>
    </div>
    <CoreDivider core={core}/>
    <CoreValues/>
    <Divider image={divider}/>   
    </div>
  )
}