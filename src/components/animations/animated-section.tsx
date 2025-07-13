"use client"

import type { ReactNode } from "react"
import useIntersectionObserver from "@/src/hooks/use-intersection-observer";

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "zoom-in"
  delay?: number
  threshold?: number
  rootMargin?: string
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
  rootMargin = "-50px",
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  })

  const getAnimationClass = () => {
    if (!isIntersecting) return "opacity-0"

    switch (animation) {
      case "fade-up":
        return "animate-fade-up"
      case "fade-in":
        return "animate-fade-in"
      case "slide-in-left":
        return "animate-slide-in-left"
      case "slide-in-right":
        return "animate-slide-in-right"
      case "zoom-in":
        return "animate-zoom-in"
      default:
        return "animate-fade-up"
    }
  }

  const getInitialClass = () => {
    switch (animation) {
      case "fade-up":
        return "translate-y-10 opacity-0"
      case "fade-in":
        return "opacity-0"
      case "slide-in-left":
        return "-translate-x-10 opacity-0"
      case "slide-in-right":
        return "translate-x-10 opacity-0"
      case "zoom-in":
        return "scale-95 opacity-0"
      default:
        return "translate-y-10 opacity-0"
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isIntersecting ? getAnimationClass() : getInitialClass()
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
