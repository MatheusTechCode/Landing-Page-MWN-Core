"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#problema", label: "O Problema" },
  { href: "#solucao", label: "Solucao" },
  { href: "#features", label: "Recursos" },
  { href: "#cozinha", label: "Cozinha Inteligente" },
  { href: "#precos", label: "Precos" },
  { href: "#contato", label: "Contato" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0E17]/90 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="MWN CORE"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="text-xl font-bold text-white hidden sm:block">
              MWN <span className="text-[#00D4FF]">CORE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[#00D4FF] transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-[#00D4FF] to-[#6366F1] text-white font-semibold px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
            >
              <Link href="#contato">Solicitar Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0F1419]/95 backdrop-blur-xl border-t border-white/10">
          <nav className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-300 hover:text-[#00D4FF] transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-4 bg-gradient-to-r from-[#00D4FF] to-[#6366F1] text-white font-semibold px-6 py-3 rounded-full"
            >
              <Link href="#contato" onClick={() => setIsMobileMenuOpen(false)}>
                Solicitar Demo
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
