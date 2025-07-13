"use client"

import { useState, useEffect, useRef } from "react"

interface UseIntersectionObserverProps {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export default function useIntersectionObserver({
                                                  threshold = 0.1,
                                                  rootMargin = "0px",
                                                  triggerOnce = true,
                                                }: UseIntersectionObserverProps = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          // If we only want to trigger once and it's already been triggered, do nothing
          if (triggerOnce && hasTriggered) return

          setIsIntersecting(entry.isIntersecting)

          // If it's intersecting and we only want to trigger once, mark as triggered
          if (entry.isIntersecting && triggerOnce) {
            setHasTriggered(true)
          }
        },
        {
          threshold,
          rootMargin,
        },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, rootMargin, triggerOnce, hasTriggered])

  return { ref, isIntersecting }
}
