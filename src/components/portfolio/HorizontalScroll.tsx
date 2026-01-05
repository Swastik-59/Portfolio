'use client';

import { useEffect, useRef, ReactNode } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Lenis from 'lenis'

interface HorizontalScrollProps {
  children: ReactNode
}

const PANELS_COUNT = 2 // Hero + AboutIntro

const HorizontalScroll = ({ children }: HorizontalScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  /* ---------------- Lenis setup ---------------- */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    let rafId: number

    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  /* -------- Vertical scroll → horizontal motion -------- */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  /**
   * Clamp horizontal movement.
   * Once progress reaches 1, x STAYS at final value.
   */
  const x = useTransform(scrollYProgress, (v) => {
    const clamped = Math.min(Math.max(v, 0), 1)
    return `${-clamped * 100}%`
  })

  const smoothX = useSpring(x, {
    stiffness: 80,
    damping: 26,
    restDelta: 0.001,
  })

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{
        height: `${PANELS_COUNT * 100}vh`, // ONLY as tall as horizontal panels
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="flex h-full"
          style={{ x: smoothX }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

export default HorizontalScroll
