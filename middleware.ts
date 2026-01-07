import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Define locales
  const locales = ['gb', 'fr', 'de']

  // Check if the path is already localised
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // If the path already has a locale, do nothing
  if (!pathnameIsMissingLocale) {
    return NextResponse.next()
  }

  // Skip internal Next.js paths, API routes, and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.endsWith('.ico') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.svg') ||
    pathname.endsWith('.css') ||
    pathname.endsWith('.js')
  ) {
    return NextResponse.next()
  }

  // Only redirect on the main root page or specific landing pages that should be localized
  // For this specific request, we want to redirect users landing on the default page.
  if (pathname !== '/') {
    return NextResponse.next()
  }

  // Get country from headers
  const country = (
    request.geo?.country ||
    request.headers.get('x-vercel-ip-country') ||
    request.headers.get('cf-ipcountry') ||
    'US'
  ).toUpperCase()

  // Console log for debugging (will appear in server logs)
  console.log(`Middleware: Visitor from ${country} on ${pathname}`)

  if (country === 'GB' || country === 'UK') {
    return NextResponse.redirect(new URL('/gb', request.url))
  }

  if (country === 'FR') {
    return NextResponse.redirect(new URL('/fr', request.url))
  }

  if (country === 'DE') {
    return NextResponse.redirect(new URL('/de', request.url))
  }

  // Default behaviour: Stay on root (US/Global)
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
