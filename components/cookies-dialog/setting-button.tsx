"use client"

import { Cookie } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCookieConsent } from "@/context/cookies-context"

interface CookieSettingsButtonProps {
  variant?: "default" | "outline" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export function CookieSettingsButton({ variant = "outline", size = "sm", className = "" }: CookieSettingsButtonProps) {
  const { setShowCustomizeDialog } = useCookieConsent()

  return (
    <Button variant={variant} size={size} onClick={() => setShowCustomizeDialog(true)} className={className}>
      <Cookie className="h-4 w-4 mr-2" />
      Cookie Settings
    </Button>
  )
}