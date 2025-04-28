"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-green-500/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1.5">
            <Image src="/logo-i.png" alt="Invictus" width={28} height={28} className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-xl">Invictus</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="hover:text-green-400 transition-colors">
            Features
          </Link>
          <Link href="/#about" className="hover:text-green-400 transition-colors">
            About
          </Link>
          <Link href="/#waitlist" className="hover:text-green-400 transition-colors">
            Waitlist
          </Link>
        </div>

        <div className="hidden md:block">
          <Link href="/#waitlist">
            <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
              Join Waitlist
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden fixed inset-0 top-16 bg-black z-40 transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col items-center gap-6 pt-10">
          <Link
            href="/#features"
            className="text-xl hover:text-green-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="/#about"
            className="text-xl hover:text-green-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#waitlist"
            className="text-xl hover:text-green-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Waitlist
          </Link>
          <Link href="/#waitlist">
            <Button
              variant="outline"
              className="mt-4 border-green-500 text-green-500 hover:bg-green-500/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Waitlist
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
