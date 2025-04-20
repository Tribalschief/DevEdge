"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { FaAngleDown } from "react-icons/fa"

export function Company({title}:{title:string}) {
  const [position, setPosition] = React.useState("bottom")

  return (
    
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex">{title} <span className="ml-2 mt-2"><FaAngleDown /></span>
        </div>
        
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup className="transition duration-100 translate-y-3" value={position} onValueChange={setPosition}>
        <Link href='/company/about'>
          <DropdownMenuRadioItem value="top">
            About DevEdge
            </DropdownMenuRadioItem>
        </Link>
        <Link href='/company/leadership'>
          <DropdownMenuRadioItem value="top">
            Leadership
            </DropdownMenuRadioItem>
            </Link>
            <Link href='/company/career'>
          <DropdownMenuRadioItem value="top">
           Career</DropdownMenuRadioItem>
           </Link>
           <Link href='/company/cv'>
            <DropdownMenuRadioItem value="top">
            Submit Cv</DropdownMenuRadioItem>
            </Link>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
      
    </DropdownMenu>
  )
}
