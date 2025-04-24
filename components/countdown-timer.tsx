"use client"

import { motion } from "framer-motion"
import { useCountdown } from "@/contexts/countdown-context"

export default function CountdownTimer() {
  const { timeLeft, isInitialized } = useCountdown()

  if (!isInitialized) {
    return (
      <div className="flex flex-col items-center">
        <div className="h-8 w-48 bg-green-500/20 animate-pulse rounded mb-8"></div>
        <div className="grid grid-cols-4 gap-4 md:gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-green-500/20 animate-pulse rounded-lg w-16 md:w-24 h-16 md:h-24 mb-2"></div>
              <div className="h-4 w-12 bg-green-500/20 animate-pulse rounded"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Invictus AI Launch Countdown</h2>

      <div className="grid grid-cols-4 gap-4 md:gap-6 mb-8">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg p-3 md:p-6 w-16 md:w-24 h-16 md:h-24 flex items-center justify-center mb-2">
              <span className="text-xl md:text-4xl font-bold text-white">{item.value.toString().padStart(2, "0")}</span>
            </div>
            <span className="text-xs md:text-sm text-gray-400">{item.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-gray-300 max-w-md"
      >
        We're putting the finishing touches on Invictus AI. Join our waitlist to be notified when we launch!
      </motion.p>
    </div>
  )
}
