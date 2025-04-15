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

export function Company({title}:{title:string}) {
  const [position, setPosition] = React.useState("bottom")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>{title}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup className="transition duration-100 translate-y-3" value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">
            <Link href='/company/about'>About DevEdge</Link>
            </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="top">
            <Link href='/company/leadership'>Leadership</Link>
            </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="top">
            <Link href='/company/career'>Career</Link></DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="top">
            <Link href='/company/cv'>Submit Cv</Link></DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
