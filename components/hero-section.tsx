"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Copy, Check } from "lucide-react"
import { motion } from "framer-motion"
import InteractiveBackground from "./interactive-background"
import Link from "next/link"

export default function HeroSection() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "CZAzE7hKQMBeQRbLdKGNatiBjRtMKNxDvzUh2u66pump"

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <section className="pt-28 pb-32 md:pt-40 md:pb-40 relative overflow-hidden">
      {/* Interactive background */}
      <InteractiveBackground />

      {/* Keep the static glow effect for devices that might not support the interactive background well */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px] z-0"></div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6"
          >
            Merging AI & Crypto for the Future
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-400"
          >
            Invictus AI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
          >
            The revolutionary platform that combines the power of artificial intelligence with blockchain technology to
            create unprecedented value.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full max-w-xl bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-4 mb-8"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-400">Contract Address:</div>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1 text-green-400 text-sm font-medium hover:text-green-300 transition-colors"
                aria-label="Copy contract address"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" /> Copy
                  </>
                )}
              </button>
            </div>
            <div
              className="font-mono text-sm md:text-base text-gray-300 p-2 bg-black/50 rounded border border-green-500/20 flex items-center justify-between cursor-pointer"
              onClick={copyToClipboard}
            >
              <span className="truncate">{contractAddress}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  copyToClipboard()
                }}
                className="ml-2 text-green-400 hover:text-green-300 transition-colors"
                aria-label="Copy contract address"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/countdown">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black font-bold">
                Try Invictus <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <a href="https://info.invictusai.io/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                View Docs <Github className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Connecting element to next section - adjusted positioning */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-green-500/30 to-transparent z-10"></div>
    </section>
  )
}
