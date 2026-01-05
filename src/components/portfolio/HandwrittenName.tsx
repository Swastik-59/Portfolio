'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface HandwrittenNameProps {
  name: string;
}

const HandwrittenName = ({ name }: HandwrittenNameProps) => {
  const [firstName, lastName] = name.split(' ');
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Subtle parallax on scroll (2-4px max)
  const { scrollY } = useScroll();
  const underlineX = useTransform(scrollY, [0, 300], [0, 3]);
  
  return (
    <div ref={containerRef} className="relative flex flex-col items-center">
      {/* First name */}
      <motion.div
        className="overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        <motion.span
          className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] text-foreground tracking-wide block"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.7, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.05
          }}
        >
          {firstName}
        </motion.span>
      </motion.div>

      {/* Last name with underline */}
      <motion.div
        className="overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        <motion.span
          className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7rem] text-foreground tracking-wide block"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            duration: 0.7, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.15
          }}
        >
          {lastName}
        </motion.span>
        
        {/* Underline - animates left to right with subtle parallax and gentle pulse */}
        <motion.div
          className="absolute -bottom-2 sm:-bottom-3 left-0 right-0 h-[2px] origin-left"
          style={{ x: underlineX }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ 
            delay: 0.5,
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-primary/60 via-primary/40 to-transparent animate-subtle-pulse" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HandwrittenName;
