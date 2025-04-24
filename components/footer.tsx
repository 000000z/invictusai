import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Twitter, DiscIcon as Discord, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-green-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="font-bold text-black text-xs">IC</span>
              </div>
              <span className="font-bold text-lg">Invictus</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Merging AI and blockchain technology to revolutionize the crypto space.
            </p>
            <div className="flex gap-4 mt-4">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8 text-gray-400 hover:text-white hover:bg-green-500/10"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8 text-gray-400 hover:text-white hover:bg-green-500/10"
              >
                <Discord className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8 text-gray-400 hover:text-white hover:bg-green-500/10"
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-8 w-8 text-gray-400 hover:text-white hover:bg-green-500/10"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#features" className="hover:text-green-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-green-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="hover:text-green-400 transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="#waitlist" className="hover:text-green-400 transition-colors">
                  Waitlist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-green-400 transition-colors">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-400 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-400 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-green-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-400 transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-green-400 transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500/20 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Invictus Coin. All rights reserved.</p>
          <p className="mt-2">Cryptocurrency investments are subject to market risks. Please invest responsibly.</p>
        </div>
      </div>
    </footer>
  )
}
