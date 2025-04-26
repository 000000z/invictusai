import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Github, Twitter, DiscIcon as Discord, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-green-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Image src="/logo.webp" alt="Invictus" width={16} height={16} />
              </div>
              <span className="font-bold text-lg">Invictus</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Merging AI and blockchain technology to revolutionize the crypto space.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-8 w-8 text-gray-400 hover:text-white hover:bg-green-500/10"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-8 w-8 text-gray-400 hover:text-white hover:bg-green-500/10"
                >
                  <Discord className="h-4 w-4" />
                </Button>
              </a>
              <a href="https://info.invictusai.io/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-8 w-8 text-gray-400 hover:text-white hover:bg-green-500/10"
                >
                  <Github className="h-4 w-4" />
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-8 w-8 text-gray-400 hover:text-white hover:bg-green-500/10"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-green-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-green-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#waitlist" className="hover:text-green-400 transition-colors">
                  Waitlist
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://info.invictusai.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors inline-flex items-center gap-1"
                >
                  Documentation <Github className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://info.invictusai.io/api-reference-overview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="https://info.invictusai.io/general-faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-500/20 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Invictus AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
