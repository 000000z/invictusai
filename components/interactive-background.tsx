"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    // Update mouse position
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    // Update window size on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Calculate relative mouse position (0-1)
  const relativeX = mousePosition.x / windowSize.width
  const relativeY = mousePosition.y / windowSize.height

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Main glow that follows the cursor */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-green-500/10 blur-[100px]"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 50,
          mass: 0.5,
        }}
      />

      {/* Grid lines that shift based on mouse position - reduced opacity */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green-500 to-transparent"
          animate={{
            left: `calc(25% + ${(relativeX - 0.5) * 40}px)`,
          }}
          transition={{ type: "spring", damping: 40 }}
        />
        <motion.div
          className="absolute left-2/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green-500 to-transparent"
          animate={{
            left: `calc(50% + ${(relativeX - 0.5) * 30}px)`,
          }}
          transition={{ type: "spring", damping: 40 }}
        />
        <motion.div
          className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green-500 to-transparent"
          animate={{
            left: `calc(75% + ${(relativeX - 0.5) * 20}px)`,
          }}
          transition={{ type: "spring", damping: 40 }}
        />
        <motion.div
          className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"
          animate={{
            top: `calc(25% + ${(relativeY - 0.5) * 40}px)`,
          }}
          transition={{ type: "spring", damping: 40 }}
        />
        <motion.div
          className="absolute top-2/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"
          animate={{
            top: `calc(50% + ${(relativeY - 0.5) * 30}px)`,
          }}
          transition={{ type: "spring", damping: 40 }}
        />
        <motion.div
          className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"
          animate={{
            top: `calc(75% + ${(relativeY - 0.5) * 20}px)`,
          }}
          transition={{ type: "spring", damping: 40 }}
        />
      </div>

      {/* Floating shapes that react to mouse - reduced opacity */}
      <motion.div
        className="absolute w-32 h-32 rounded-full border border-green-500/20 opacity-20"
        animate={{
          x: windowSize.width * 0.3 + (relativeX - 0.5) * 100,
          y: windowSize.height * 0.3 + (relativeY - 0.5) * 100,
          rotate: relativeX * 40,
        }}
        transition={{ type: "spring", damping: 60 }}
      />

      <motion.div
        className="absolute w-40 h-40 rounded-md border border-green-500/15 opacity-15 rotate-45"
        animate={{
          x: windowSize.width * 0.7 + (relativeX - 0.5) * -120,
          y: windowSize.height * 0.2 + (relativeY - 0.5) * 80,
          rotate: 45 + relativeY * 30,
        }}
        transition={{ type: "spring", damping: 50 }}
      />

      <motion.div
        className="absolute w-24 h-24 rounded-lg border border-green-500/15 opacity-15"
        animate={{
          x: windowSize.width * 0.2 + (relativeX - 0.5) * 150,
          y: windowSize.height * 0.7 + (relativeY - 0.5) * -100,
          rotate: -30 + relativeX * 60,
        }}
        transition={{ type: "spring", damping: 40 }}
      />

      <motion.div
        className="absolute w-36 h-36 rounded-full border border-green-500/10 opacity-10"
        animate={{
          x: windowSize.width * 0.8 + (relativeX - 0.5) * -80,
          y: windowSize.height * 0.8 + (relativeY - 0.5) * -60,
          scale: 0.8 + relativeY * 0.4,
        }}
        transition={{ type: "spring", damping: 30 }}
      />

      {/* Small particles - reduced number and opacity */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-green-400/30"
          animate={{
            x: (windowSize.width * ((i % 4) + 1)) / 5 + (relativeX - 0.5) * (i + 1) * 30,
            y: (windowSize.height * (Math.floor(i / 4) + 1)) / 3 + (relativeY - 0.5) * (i + 1) * 40,
            opacity: [0.2, 0.5, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            opacity: { repeat: Number.POSITIVE_INFINITY, duration: 2 + i * 0.5 },
            scale: { repeat: Number.POSITIVE_INFINITY, duration: 3 + i * 0.5 },
            x: { type: "spring", damping: 30 },
            y: { type: "spring", damping: 30 },
          }}
        />
      ))}
    </div>
  )
}
