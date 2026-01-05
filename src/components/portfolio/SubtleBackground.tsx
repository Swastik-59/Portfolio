'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

// ============================================================================
// GRADIENT ORBS - CSS-based for better performance
// ============================================================================

const GradientOrbs = () => {
  const { scrollYProgress } = useScroll();
  
  // Orbs move slightly based on scroll
  const orb1Y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Primary orb - top right - CSS animation */}
      <motion.div
        className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full animate-orb-slow"
        style={{
          background: 'radial-gradient(circle, hsl(180 70% 50% / 0.03) 0%, transparent 70%)',
          y: orb1Y,
          willChange: 'transform',
        }}
      />

      {/* Secondary orb - bottom left - CSS animation */}
      <motion.div
        className="absolute -bottom-[30%] -left-[15%] w-[800px] h-[800px] rounded-full animate-orb-slower"
        style={{
          background: 'radial-gradient(circle, hsl(200 80% 50% / 0.02) 0%, transparent 70%)',
          y: orb2Y,
          willChange: 'transform',
        }}
      />
    </div>
  );
};

// ============================================================================
// MOUSE GLOW - Subtle cursor follow effect (optimized)
// ============================================================================

const MouseGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 40, stiffness: 80 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // Passive listener for better scroll performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed w-[400px] h-[400px] rounded-full pointer-events-none hidden md:block will-change-transform"
      style={{
        x: glowX,
        y: glowY,
        translateX: '-50%',
        translateY: '-50%',
        background: 'radial-gradient(circle, hsl(180 70% 50% / 0.04) 0%, transparent 60%)',
      }}
    />
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const SubtleBackground = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none" aria-hidden="true">
      {/* Layer 1: Gradient orbs (CSS animated) */}
      <GradientOrbs />
      
      {/* Layer 2: Mouse glow (desktop only) */}
      <MouseGlow />
    </div>
  );
};

export default SubtleBackground;
