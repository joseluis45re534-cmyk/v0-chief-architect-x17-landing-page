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
    "Discover the power of Chief Architect X17. AI-assisted drafting, faster rendering, smart building tools, and the industry's most intuitive 3D design workflow. Buy now for $85.75.",
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
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YED9ZDVK84"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YED9ZDVK84');
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
