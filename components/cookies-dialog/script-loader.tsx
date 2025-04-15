"use client"

import { useEffect } from "react"
import { useCookieConsent } from "@/context/cookies-context"
import { loadGoogleAnalytics, loadMarketingScripts } from "@/utils/cookies-manager"

interface CookieScriptLoaderProps {
  googleAnalyticsId?: string
}

export function CookieScriptLoader({ googleAnalyticsId }: CookieScriptLoaderProps) {
  const { preferences, hasConsented } = useCookieConsent()

  useEffect(() => {
    if (!hasConsented) return

    // Load scripts based on user preferences
    if (googleAnalyticsId && preferences.analytics) {
      loadGoogleAnalytics(preferences, googleAnalyticsId)
    }

    if (preferences.marketing) {
      loadMarketingScripts(preferences)
    }

    // You can add more conditional script loading here
  }, [preferences, hasConsented, googleAnalyticsId])

  return null // This component doesn't render anything
}
