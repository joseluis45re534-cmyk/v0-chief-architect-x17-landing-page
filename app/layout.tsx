import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CookieBanner } from "@/components/cookie-banner"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// Updated metadata for Chief Architect X17 SEO
export const metadata: Metadata = {
  title: "Chief Architect X17 – The Most Advanced 3D Architectural Design Software",
  description:
    "Discover the power of Chief Architect X17. AI-assisted drafting, faster rendering, smart building tools, and the industry's most intuitive 3D design workflow. Download your free trial.",
  keywords: [
    "Chief Architect X17",
    "architectural design software",
    "3D home design software",
    "BIM drafting tools",
    "interior design software",
    "CAD tools",
    "floor plan software",
    "3D rendering for architects",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
