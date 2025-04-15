import type { CookieCategory, CookiePreferences } from "@/context/cookies-context"

// Check if a specific cookie category is allowed
export function isCookieCategoryAllowed(preferences: CookiePreferences, category: CookieCategory): boolean {
  return preferences[category] === true
}

// Load scripts based on cookie preferences
export function loadScriptByCookieCategory(
  preferences: CookiePreferences,
  category: CookieCategory,
  scriptSrc: string,
  async = true,
  defer = true,
): void {
  if (isCookieCategoryAllowed(preferences, category)) {
    const script = document.createElement("script")
    script.src = scriptSrc
    script.async = async
    script.defer = defer
    document.body.appendChild(script)
  }
}

// Example function to load Google Analytics if analytics cookies are allowed
export function loadGoogleAnalytics(preferences: CookiePreferences, measurementId: string): void {
  if (isCookieCategoryAllowed(preferences, "analytics")) {
    // Load Google Analytics script
    loadScriptByCookieCategory(preferences, "analytics", `https://www.googletagmanager.com/gtag/js?id=${measurementId}`)

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    gtag("js", new Date())
    gtag("config", measurementId)
  }
}

// Example function to load marketing scripts if marketing cookies are allowed
export function loadMarketingScripts(preferences: CookiePreferences): void {
  if (isCookieCategoryAllowed(preferences, "marketing")) {
    // Load Facebook Pixel
    loadScriptByCookieCategory(preferences, "marketing", "https://connect.facebook.net/en_US/fbevents.js")

    // Initialize Facebook Pixel (example)
    if (window.fbq) {
      window.fbq("init", "YOUR_PIXEL_ID")
      window.fbq("track", "PageView")
    }
  }
}
