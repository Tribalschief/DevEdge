"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { FaAngleDown } from "react-icons/fa"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function Company({ title }: { title: string }) {
  const [position, setPosition] = React.useState("bottom")
  const pathname = usePathname()

  // Check if a link is active
  const isActive = (path: string) => {
    return pathname === path
  }

  const companyLinks = [
    
    { path: "/company/leadership", title: "Leadership" },
    { path: "/company/career", title: "Career" },
    { path: "/company/cv", title: "Submit Cv" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center cursor-pointer">
          {title}{" "}
          <span className="ml-1 mt-1">
            <FaAngleDown className="h-3 w-3 md:h-3 md:w-3 lg:h-4 lg:w-4" />
          </span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Company</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup className="transition duration-100" value={position} onValueChange={setPosition}>
          {companyLinks.map((item, index) => {
            const active = isActive(item.path)

            return (
              <DropdownMenuRadioItem
                key={index}
                value={item.path}
                disabled={active}
                className={active ? "opacity-70 cursor-default" : ""}
              >
                {active ? (
                  <span className="w-full py-1 rounded-md">{item.title}</span>
                ) : (
                  <Link
                    href={item.path}
                    className="w-full py-1 hover:bg-muted/50 focus:bg-muted/50 focus:outline-none transition-colors rounded-md"
                  >
                    {item.title}
                  </Link>
                )}
              </DropdownMenuRadioItem>
            )
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
