"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

type CountdownContextType = {
  timeLeft: TimeLeft
  targetDate: Date | null
  isInitialized: boolean
}

const CountdownContext = createContext<CountdownContextType>({
  timeLeft: { days: 0, hours: 0, minutes: 0, seconds: 0 },
  targetDate: null,
  isInitialized: false,
})

export const useCountdown = () => useContext(CountdownContext)

export function CountdownProvider({ children }: { children: React.ReactNode }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [targetDate, setTargetDate] = useState<Date | null>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Check if we already have a target date in localStorage
    const storedTargetDate = localStorage.getItem("invictusCountdownTarget")

    if (storedTargetDate) {
      // Use the stored date
      setTargetDate(new Date(storedTargetDate))
    } else {
      // Set a new target date (2 days from now)
      const newTargetDate = new Date()
      newTargetDate.setDate(newTargetDate.getDate() + 2)

      // Store it in localStorage
      localStorage.setItem("invictusCountdownTarget", newTargetDate.toISOString())
      setTargetDate(newTargetDate)
    }

    setIsInitialized(true)
  }, [])

  useEffect(() => {
    if (!targetDate) return

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        // Countdown finished
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      // Calculate time units
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }

    // Calculate immediately
    calculateTimeLeft()

    // Then update every second
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <CountdownContext.Provider value={{ timeLeft, targetDate, isInitialized }}>{children}</CountdownContext.Provider>
  )
}
