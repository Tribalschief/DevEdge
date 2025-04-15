"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import Cookies from "js-cookie"

// Define cookie categories
export type CookieCategory = "essential" | "functional" | "analytics" | "marketing"

export interface CookiePreferences {
  essential: boolean // Always true, cannot be disabled
  functional: boolean
  analytics: boolean
  marketing: boolean
}

interface CookieConsentContextType {
  preferences: CookiePreferences
  setPreferences: (preferences: CookiePreferences) => void
  savePreferences: (preferences: CookiePreferences) => void
  hasConsented: boolean
  setHasConsented: (value: boolean) => void
  showConsentDialog: boolean
  setShowConsentDialog: (value: boolean) => void
  showCustomizeDialog: boolean
  setShowCustomizeDialog: (value: boolean) => void
  resetConsent: () => void
}

const defaultPreferences: CookiePreferences = {
  essential: true, // Essential cookies are always enabled
  functional: false,
  analytics: false,
  marketing: false,
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined)

const COOKIE_CONSENT_KEY = "cookie_consent"
const COOKIE_PREFERENCES_KEY = "cookie_preferences"
const COOKIE_EXPIRY_DAYS = 365

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences)
  const [hasConsented, setHasConsented] = useState<boolean>(false)
  const [showConsentDialog, setShowConsentDialog] = useState<boolean>(false)
  const [showCustomizeDialog, setShowCustomizeDialog] = useState<boolean>(false)
  const [isInitialized, setIsInitialized] = useState<boolean>(false)

  // Load saved preferences on initial render
  useEffect(() => {
    const consentCookie = Cookies.get(COOKIE_CONSENT_KEY)
    const preferencesCookie = Cookies.get(COOKIE_PREFERENCES_KEY)

    if (consentCookie === "true" && preferencesCookie) {
      try {
        const savedPreferences = JSON.parse(preferencesCookie)
        setPreferences({
          ...savedPreferences,
          essential: true, // Always ensure essential cookies are enabled
        })
        setHasConsented(true)
      } catch (e) {
        console.error("Error parsing cookie preferences", e)
        setShowConsentDialog(true)
      }
    } else {
      // Show consent dialog if no consent has been given
      setShowConsentDialog(true)
    }

    setIsInitialized(true)
  }, [])

  // Save preferences to cookies
  const savePreferences = (newPreferences: CookiePreferences) => {
    // Ensure essential cookies are always enabled
    const updatedPreferences = {
      ...newPreferences,
      essential: true,
    }

    // Save preferences to cookies
    Cookies.set(COOKIE_PREFERENCES_KEY, JSON.stringify(updatedPreferences), {
      expires: COOKIE_EXPIRY_DAYS,
      sameSite: "strict",
    })

    // Set consent cookie
    Cookies.set(COOKIE_CONSENT_KEY, "true", {
      expires: COOKIE_EXPIRY_DAYS,
      sameSite: "strict",
    })

    // Update state
    setPreferences(updatedPreferences)
    setHasConsented(true)
    setShowConsentDialog(false)
    setShowCustomizeDialog(false)
  }

  // Reset consent
  const resetConsent = () => {
    Cookies.remove(COOKIE_CONSENT_KEY)
    Cookies.remove(COOKIE_PREFERENCES_KEY)
    setPreferences(defaultPreferences)
    setHasConsented(false)
    setShowConsentDialog(true)
  }

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        setPreferences,
        savePreferences,
        hasConsented,
        setHasConsented,
        showConsentDialog,
        setShowConsentDialog,
        showCustomizeDialog,
        setShowCustomizeDialog,
        resetConsent,
      }}
    >
      {isInitialized ? children : null}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext)
  if (context === undefined) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider")
  }
  return context
}
