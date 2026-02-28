import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import "./globals.css"
import { CookieBanner } from "@/components/cookie-banner"
import { GlobalTags, GlobalFooterTags } from "@/components/global-tags"
import { LiveChatWidget } from "@/components/live-chat-widget"


const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// Updated metadata for Chief Architect X17 SEO
export const metadata: Metadata = {
  title: "Chief Architect X17 – The Most Advanced 3D Architectural Design Software",
  description:
    "Discover the power of Chief Architect X17. Faster rendering, smart building tools, and the industry's most intuitive 3D design workflow. Buy now for $69.",
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

import { ConfigProvider } from "@/contexts/config-context"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K4CDVGJ9');`,
          }}
        />

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
        <script src="//code.jivosite.com/widget/5YJwlXjzAo" async></script>
      </head>
      <body className={`font-sans antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K4CDVGJ9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ConfigProvider>
          <GlobalTags />
          {children}
          <CookieBanner />
          <Analytics />
          <LiveChatWidget />
          <GlobalFooterTags />
        </ConfigProvider>
      </body>
    </html>
  )
}
