"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Cookie, Info } from "lucide-react"
import { useCookieConsent, type CookiePreferences } from "@/context/cookies-context"
import Link from "next/link"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"

export function CookieConsentDialog() {
  const {
    preferences,
    setPreferences,
    savePreferences,
    hasConsented,
    showConsentDialog,
    setShowConsentDialog,
    showCustomizeDialog,
    setShowCustomizeDialog,
  } = useCookieConsent()

  const [localPreferences, setLocalPreferences] = useState<CookiePreferences>({ ...preferences })

  // Update local preferences when context preferences change
  useEffect(() => {
    setLocalPreferences({ ...preferences })
  }, [preferences])

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      functional: true,
      analytics: true,
      marketing: true,
    }
    savePreferences(allAccepted)
  }

  const handleAcceptSelected = () => {
    savePreferences(localPreferences)
  }

  const handleRejectNonEssential = () => {
    const essentialOnly: CookiePreferences = {
      essential: true,
      functional: false,
      analytics: false,
      marketing: false,
    }
    savePreferences(essentialOnly)
  }

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "essential") return // Cannot toggle essential cookies

    setLocalPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <>
      {/* Initial consent dialog */}
      <Dialog open={showConsentDialog} onOpenChange={setShowConsentDialog}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Cookie className="h-5 w-5 text-blue-600" />
              Cookie Consent
            </DialogTitle>
            <DialogDescription className="text-sm">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
              Please choose your cookie preferences below.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2">
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-md text-sm">
              <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-700">
                  Essential cookies are always active as they are necessary for the website to function properly.
                </p>
                <Link href="/cookie-policy" className="text-blue-600 hover:underline inline-flex items-center mt-1">
                  Learn more about our cookies
                  <ChevronRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <DialogFooter className="flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCustomizeDialog(true)}
              className="order-3 sm:order-1"
            >
              Customize
            </Button>
            <div className="flex flex-col sm:flex-row gap-2 order-1 sm:order-2 w-full sm:w-auto">
              <Button variant="outline" size="sm" onClick={handleRejectNonEssential} className="whitespace-nowrap">
                Accept Essential Only
              </Button>
              <Button size="sm" onClick={handleAcceptAll} className="whitespace-nowrap bg-blue-600 hover:bg-blue-700">
                Accept All
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Customize preferences dialog */}
      <Dialog open={showCustomizeDialog} onOpenChange={setShowCustomizeDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Cookie className="h-5 w-5 text-blue-600" />
              Cookie Preferences
            </DialogTitle>
            <DialogDescription>
              Customize which cookies you want to allow. You can change these settings at any time.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Essential Cookies</p>
                  <p className="text-sm text-gray-500">
                    These cookies are necessary for the website to function and cannot be switched off.
                  </p>
                </div>
                <Switch checked disabled />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Functional Cookies</p>
                  <p className="text-sm text-gray-500">These cookies enable personalized features and functionality.</p>
                </div>
                <Switch checked={localPreferences.functional} onCheckedChange={() => togglePreference("functional")} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Analytics Cookies</p>
                  <p className="text-sm text-gray-500">
                    These cookies help us improve our website by collecting anonymous information.
                  </p>
                </div>
                <Switch checked={localPreferences.analytics} onCheckedChange={() => togglePreference("analytics")} />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Marketing Cookies</p>
                  <p className="text-sm text-gray-500">
                    These cookies are used to track visitors across websites to display relevant advertisements.
                  </p>
                </div>
                <Switch checked={localPreferences.marketing} onCheckedChange={() => togglePreference("marketing")} />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 justify-end">
            <Button variant="outline" size="sm" onClick={handleRejectNonEssential}>
              Essential Only
            </Button>
            <Button size="sm" onClick={handleAcceptSelected} className="bg-blue-600 hover:bg-blue-700">
              Save Preferences
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating button to manage cookies after consent */}
      {!showConsentDialog && hasConsented && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowCustomizeDialog(true)}
          className="fixed bottom-4 left-4 z-40 bg-white shadow-md flex items-center gap-1.5"
        >
          <Cookie className="h-4 w-4" />
          <span className="text-xs">Cookie Settings</span>
        </Button>
      )}
    </>
  )
}
