"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [policiesOpen, setPoliciesOpen] = useState(false)

  const policyLinks = [
    { href: "/policies/privacy", label: "Privacy Policy" },
    { href: "/policies/terms", label: "Terms & Conditions" },
    { href: "/policies/refund", label: "Refund & Return Policy" },
    { href: "/policies/cookies", label: "Cookie Policy" },
    { href: "/policies/disclaimer", label: "Disclaimer" },
    { href: "/policies/payment", label: "Payment & Security" },
  ]

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

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/contact" className="text-gray-700 hover:text-[#1a3e6e] font-medium transition-colors">
              Contact Us
            </Link>
            <div className="relative group">
              <button
                className="text-gray-700 hover:text-[#1a3e6e] font-medium transition-colors flex items-center gap-1"
                onMouseEnter={() => setPoliciesOpen(true)}
                onMouseLeave={() => setPoliciesOpen(false)}
              >
                Policies
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className="absolute top-full left-0 mt-2 w-56 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                onMouseEnter={() => setPoliciesOpen(true)}
                onMouseLeave={() => setPoliciesOpen(false)}
              >
                {policyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#f0f4f8] hover:text-[#1a3e6e] transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <Button
              size="lg"
              className="font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: "#1a3e6e" }}
            >
              Buy Now
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <X className="h-6 w-6" style={{ color: "#1a3e6e" }} />
            ) : (
              <Menu className="h-6 w-6" style={{ color: "#1a3e6e" }} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#1a3e6e] font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div className="flex flex-col">
                <button
                  onClick={() => setPoliciesOpen(!policiesOpen)}
                  className="text-gray-700 hover:text-[#1a3e6e] font-medium py-2 transition-colors flex items-center justify-between"
                >
                  Policies
                  <ChevronDown className={`h-4 w-4 transition-transform ${policiesOpen ? "rotate-180" : ""}`} />
                </button>
                {policiesOpen && (
                  <div className="flex flex-col pl-4 mt-2 gap-2">
                    {policyLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-gray-600 hover:text-[#1a3e6e] py-2 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Button
                size="lg"
                className="font-semibold text-white w-full"
                style={{ backgroundColor: "#1a3e6e" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Buy Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
