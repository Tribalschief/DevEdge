"use client";

import type React from "react";
import { CoreValues } from '@/components/core/try';
import { Divider } from '@/components/choose/divider';
import { motion, useScroll, useTransform } from "framer-motion"; // Import Framer Motion
import { useRef } from "react"; // Import useRef

import divider from '@/public/divider.jpg';
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
} from "lucide-react";
import { CoreDivider } from "../core/coredivider"; // Assuming this path is correct
import core from "@/public/core.png";

interface IndustryCardProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  projects?: number;
  years?: number;
}

const IndustryCard = ({ title, icon, color, description }: IndustryCardProps) => {
  // We'll apply parallax and entry animation to the wrapper motion.div
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all hover:shadow-md hover:-translate-y-1 duration-300 ease-in-out">
      <div className="h-1.5" style={{ backgroundColor: color }}></div>
      <div className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-gray-100 p-2 rounded-md">{icon}</div> {/* Slightly lighter icon bg */}
          <h3 className="font-medium text-sm sm:text-base text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 text-xs sm:text-sm mb-4 p-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function IndustryGrid() {
  const gridContainerRef = useRef<HTMLDivElement>(null); // Ref for the main container of the grid
  const { scrollYProgress } = useScroll({
    target: gridContainerRef,
    offset: ["start end", "end center"], // Animate as the grid enters and its bottom reaches center
  });

  const industries = [
  { 
    title: "Banking",
    description: "Enhancing financial controls, cybersecurity, and automation across core banking operations.",
    icon: <Building2 size={18} />, 
    color: "#FF3366", 
    speed: 0.05 
  },
  { 
    title: "Government & Public Services",
    description: "Modernizing public-sector services with secure, efficient, and citizen-focused digital solutions.",
    icon: <LandmarkIcon size={18} />, 
    color: "#FF9933", 
    speed: 0.08 
  },
  { 
    title: "Retail and Real Estate",
    description: "Optimizing operations with intelligent ERP systems, analytics, and automation for seamless experiences.",
    icon: <Store size={18} />, 
    color: "#FFCC33", 
    speed: 0.03 
  },
  { 
    title: "Financial Services",
    description: "Delivering risk management, compliance, and digital transformation tailored for financial institutions.",
    icon: <Wallet size={18} />, 
    color: "#66CC66", 
    speed: 0.06 
  },
  { 
    title: "Health Care",
    description: "Securing patient data and enabling smarter, more efficient clinical and operational processes.",
    icon: <Heart size={18} />, 
    color: "#9933CC", 
    speed: 0.1 
  },
  { 
    title: "Shipping and Logistics",
    description: "Automating supply chain workflows with real-time visibility and secure digital infrastructure.",
    icon: <Ship size={18} />, 
    color: "#666699", 
    speed: 0.04 
  },
  { 
    title: "Energy",
    description: "Strengthening operational resilience with cybersecurity, automation, and regulatory-aligned solutions.",
    icon: <Zap size={18} />, 
    color: "#3399FF", 
    speed: 0.07 
  },
  { 
    title: "Consumer",
    description: "Driving growth through intelligent systems, secure platforms, and data-driven customer experiences.",
    icon: <ShoppingCart size={18} />, 
    color: "#33CCCC", 
    speed: 0.09 
  },
  { 
    title: "Power and Industrial Control System",
    description: "Protecting critical infrastructure with specialized OT/ICS security and automation frameworks.",
    icon: <Factory size={18} />, 
    color: "#CC3333", 
    speed: 0.02 
  },
  { 
    title: "Education",
    description: "Enabling secure, scalable digital ecosystems that elevate learning and institutional efficiency.",
    icon: <GraduationCap size={18} />, 
    color: "#999999", 
    speed: 0.05 
  },
  { 
    title: "Technology",
    description: "Accelerating innovation with cloud-native solutions, automation, and engineering excellence.",
    icon: <Cpu size={18} />, 
    color: "#6666CC", 
    speed: 0.08 
  },
  { 
    title: "Media & Telecommunications",
    description: "Securing networks and optimizing digital operations for fast, scalable content and communication.",
    icon: <Radio size={18} />, 
    color: "#CC66CC", 
    speed: 0.06 
  },
  { 
    title: "Manufacturing",
    description: "Improving productivity with smart automation, IoT-driven systems, and secure industrial workflows.",
    icon: <Hammer size={18} />, 
    color: "#99CC33", 
    speed: 0.03 
  },
  { 
    title: "Hospitality",
    description: "Enhancing guest experience through digital efficiency, secure systems, and intelligent automation.",
    icon: <UtensilsCrossed size={18} />, 
    color: "#CCCCCC", 
    speed: 0.07 
  }
];


  return (
    <div ref={gridContainerRef} className="relative bg-[#f6ebff] py-10 md:py-16 overflow-hidden"> {/* Add ref and overflow-hidden */}
      <div className="px-4 md:py-12 max-w-7xl mx-auto">
        {/* Main grid for the first 12 items */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.slice(0, 12).map((industry, index) => {
            // Parallax Y for each card, based on its speed and the overall scroll progress
            // Cards will move upwards as you scroll down, faster ones more so
            const cardY = useTransform(scrollYProgress, [0, 1], ['0%', `-${20 + industry.speed * 200}%`]);
            // Example: speed 0.05 -> -30%, speed 0.1 -> -40%
            // Adjust multipliers (20 and 200) to control intensity and differentiation

            return (
              <motion.div
                key={industry.title} // Use a unique key
                style={{ y: cardY }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }} // Stagger animation within rows
                viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is in view
              >
                <IndustryCard title={industry.title} icon={industry.icon} color={industry.color} description={industry.description} />
              </motion.div>
            );
          })}
        </div>

        {/* Grid for the last two items, centered */}
        {/* Apply similar parallax and animation if desired */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-4 md:mt-6">
          <div className="hidden lg:block lg:col-span-1"></div> {/* Spacer */}
          {industries.slice(12).map((industry, index) => {
            const overallIndex = index + 12;
            const cardY = useTransform(scrollYProgress, [0, 1], ['0%', `-${20 + industry.speed * 200}%`]);

            return (
              <motion.div
                key={industry.title}
                style={{ y: cardY }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (overallIndex % 4) * 0.12 }} // Slightly different delay
                viewport={{ once: true, amount: 0.2 }}
              >
                <IndustryCard title={industry.title} icon={industry.icon} color={industry.color} description={industry.description} />
              </motion.div>
            );
          })}
          <div className="hidden lg:block lg:col-span-1"></div> {/* Spacer */}
        </div>
      </div>
      {/* The dividers and CoreValues will scroll normally with the page, below the parallaxing grid */}
      <CoreDivider core={core} />
      <CoreValues />
      <Divider image={divider} />
    </div>
  );
}