"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
            <Image
              src="/images/logo-20rec-20.webp"
              alt="Chief Architect X17 Logo"
              width={200}
              height={60}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* CTA Button */}
          <Button
            size="lg"
            className="font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: "#1a3e6e" }}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </header>
  )
}
