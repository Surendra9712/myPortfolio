"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  text: string
  typingSpeed?: number
  delayBeforeRestart?: number // New prop for delay before restarting
  className?: string
}

export default function TypingAnimation({
  text,
  typingSpeed = 100,
  delayBeforeRestart = 1500, // Default delay before restarting the loop
  className = "",
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, typingSpeed)

      return () => clearTimeout(timeout)
    } else {
      // Text has been fully typed, now wait and restart
      const restartTimeout = setTimeout(() => {
        setDisplayText("") // Clear text to restart typing
        setCurrentIndex(0) // Reset index
      }, delayBeforeRestart)

      return () => clearTimeout(restartTimeout)
    }
  }, [currentIndex, text, typingSpeed, delayBeforeRestart])

  return <span className={className}>{displayText}</span>
}
