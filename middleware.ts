import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Protect the secret dashboard route
  if (request.nextUrl.pathname.startsWith("/dashboard-secret-2024")) {
    const userAgent = request.headers.get("user-agent") || ""
    const referer = request.headers.get("referer") || ""

    // Block common bots and crawlers
    const blockedUserAgents = ["bot", "crawler", "spider", "scraper", "curl", "wget", "python"]

    if (blockedUserAgents.some((agent) => userAgent.toLowerCase().includes(agent))) {
      return NextResponse.redirect(new URL("/", request.url))
    }

    // Optional: Add IP-based restrictions for production
    // const ip = request.ip || request.headers.get('x-forwarded-for')
    // const allowedIPs = ['your.ip.address.here']
    // if (process.env.NODE_ENV === 'production' && !allowedIPs.includes(ip)) {
    //   return NextResponse.redirect(new URL('/', request.url))
    // }
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/dashboard/:path*",
}
