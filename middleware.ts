import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Skip if we are already on a localised path or requesting a static asset
  if (
    pathname.startsWith('/gb') ||
    pathname.startsWith('/fr') ||
    pathname.startsWith('/de') ||
    pathname.includes('.') || // naive check for files (images, css, etc)
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api')
  ) {
    return NextResponse.next()
  }

  // Get country from Vercel's geo header, fallback to cloudflare or generic
  const country = request.geo?.country || 
                  request.headers.get('x-vercel-ip-country') || 
                  request.headers.get('cf-ipcountry') || 
                  'US' // Default to US/Generic if unknown

  const countryLower = country.toLowerCase()

  if (countryLower === 'gb' || countryLower === 'uk') {
    return NextResponse.redirect(new URL('/gb', request.url))
  }
  
  if (countryLower === 'fr') {
    return NextResponse.redirect(new URL('/fr', request.url))
  }
  
  if (countryLower === 'de') {
    return NextResponse.redirect(new URL('/de', request.url))
  }

  // Default: no redirect (stay on main page which presumably is US/Global)
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
