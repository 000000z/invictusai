"use client"

import { useEffect, useState } from "react"

export default function ParallaxScroll() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Parallax elements that move at different speeds when scrolling - adjusted positioning and opacity */}
      <div
        className="absolute w-40 h-40 rounded-full border border-green-500/10 opacity-20 left-[5%]"
        style={{
          top: `calc(30% + ${scrollY * 0.05}px)`,
          transform: `rotate(${scrollY * 0.02}deg)`,
        }}
      />

      <div
        className="absolute w-64 h-64 rounded-full border border-green-500/10 opacity-15 right-[5%]"
        style={{
          top: `calc(60% + ${scrollY * -0.08}px)`,
          transform: `rotate(${scrollY * -0.03}deg)`,
        }}
      />

      <div
        className="absolute w-32 h-32 rounded-md border border-green-500/10 opacity-15 rotate-45 left-[10%]"
        style={{
          top: `calc(70% + ${scrollY * 0.1}px)`,
          transform: `rotate(${45 + scrollY * 0.04}deg)`,
        }}
      />

      <div
        className="absolute w-24 h-24 rounded-md border border-green-500/10 opacity-20 right-[10%]"
        style={{
          top: `calc(20% + ${scrollY * -0.07}px)`,
          transform: `rotate(${scrollY * 0.05}deg)`,
        }}
      />
    </div>
  )
}
