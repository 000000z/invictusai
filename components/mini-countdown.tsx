"use client"

import { useCountdown } from "@/contexts/countdown-context"
import { Clock } from "lucide-react"
import Link from "next/link"

export default function MiniCountdown() {
  const { timeLeft, isInitialized } = useCountdown()

  if (!isInitialized) {
    return null
  }

  // Format the time as DD:HH:MM:SS
  const formattedTime = `${timeLeft.days.toString().padStart(2, "0")}:${timeLeft.hours
    .toString()
    .padStart(2, "0")}:${timeLeft.minutes.toString().padStart(2, "0")}:${timeLeft.seconds.toString().padStart(2, "0")}`

  return (
    <Link
      href="/countdown"
      className="fixed bottom-4 right-4 z-50 bg-black/80 backdrop-blur-md border border-green-500/30 rounded-full px-4 py-2 flex items-center gap-2 hover:bg-green-500/10 transition-colors"
    >
      <Clock className="h-4 w-4 text-green-400" />
      <span className="text-sm font-mono text-green-400">{formattedTime}</span>
    </Link>
  )
}
