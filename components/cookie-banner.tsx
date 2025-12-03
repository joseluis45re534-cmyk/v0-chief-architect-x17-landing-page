"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg animate-in slide-in-from-bottom duration-300">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2" style={{ color: "#1a3e6e" }}>
              We use cookies
            </h3>
            <p className="text-sm text-gray-600">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
              By clicking "Accept All", you consent to our use of cookies.{" "}
              <Link href="/policies/cookies" className="underline hover:text-[#1a3e6e]">
                Read our Cookie Policy
              </Link>
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <Button variant="outline" onClick={declineCookies} className="flex-1 md:flex-none bg-transparent">
              Decline
            </Button>
            <Button
              onClick={acceptCookies}
              className="flex-1 md:flex-none text-white"
              style={{ backgroundColor: "#1a3e6e" }}
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
