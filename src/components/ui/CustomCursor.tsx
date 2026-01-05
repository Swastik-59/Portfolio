'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Raw mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Reduced spring stiffness for better performance
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  // Single spring for dot (same as ring for less computation)
  const dotX = useSpring(mouseX, springConfig);
  const dotY = useSpring(mouseY, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
    if (!isVisible) setIsVisible(true);
  }, [mouseX, mouseY, isVisible]);

  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);

  const handleElementHover = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isLink = target.closest('a, button, [role="button"]');
    setIsHovering(!!isLink);
  }, []);

  useEffect(() => {
    // Only show custom cursor on devices with fine pointer (desktop)
    const hasFineCursor = window.matchMedia('(pointer: fine)').matches;
    if (!hasFineCursor) return;

    // Use passive listeners for better scroll performance
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown, { passive: true });
    document.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseover', handleElementHover, { passive: true });
    document.addEventListener('mouseleave', () => setIsVisible(false), { passive: true });

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleElementHover);
      document.body.style.cursor = 'auto';
    };
  }, [handleMouseMove, handleMouseDown, handleMouseUp, handleElementHover]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
    return null;
  }

  return (
    <>
      {/* Global style to hide cursor on all elements */}
      <style jsx global>{`
        @media (pointer: fine) {
          *, *::before, *::after {
            cursor: none !important;
          }
        }
      `}</style>

      <div
        className="fixed inset-0 z-[9999] pointer-events-none will-change-transform"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        {/* Outer ring */}
        <motion.div
          className="absolute rounded-full border border-primary/30 mix-blend-difference will-change-transform"
          style={{
            x: ringX,
            y: ringY,
            translateX: '-50%',
            translateY: '-50%',
            width: isHovering ? 48 : isClicking ? 24 : 32,
            height: isHovering ? 48 : isClicking ? 24 : 32,
          }}
        />

        {/* Inner dot */}
        <motion.div
          className="absolute rounded-full bg-primary mix-blend-difference will-change-transform"
          style={{
            x: dotX,
            y: dotY,
            translateX: '-50%',
            translateY: '-50%',
            width: isHovering ? 6 : isClicking ? 8 : 4,
            height: isHovering ? 6 : isClicking ? 8 : 4,
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
