'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import HandwrittenName from './HandwrittenName';

const HeroSection = () => {
  const [currentTime, setCurrentTime] = useState('');
  const { scrollY } = useScroll();
  
  // First-scroll transition: gently de-emphasize hero
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.97]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.4]);
  const heroY = useTransform(scrollY, [0, 400], [0, -20]);
  
  // Scroll indicator fades out
  const scrollLineHeight = useTransform(scrollY, [0, 100], [24, 48]);
  const scrollLineOpacity = useTransform(scrollY, [0, 150], [0.15, 0]);

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata',
      };
      setCurrentTime(new Date().toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Swastik-59', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/swastik-mukherjee-851979315', label: 'LinkedIn' },
  ];

  return (
    <section className="section-panel flex items-center justify-center relative bg-transparent overflow-hidden" id="home">
      
      {/* Hero content wrapper with scroll-based de-emphasis */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center will-change-transform"
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
      >
        {/* Subtle radial glow behind name */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[500px] h-[350px] sm:w-[700px] sm:h-[450px] bg-primary/[0.03] rounded-full blur-[120px]" />
        </div>

        {/* Main Content - Center */}
        <div className="relative z-10 text-center px-6 sm:px-8">
          <HandwrittenName name="Swastik Mukherjee" />
          
          {/* Primary subtitle */}
          <motion.p
            className="mt-6 sm:mt-8 md:mt-10 text-[10px] sm:text-[11px] md:text-xs text-muted-foreground/35 tracking-[0.18em] sm:tracking-[0.22em] uppercase font-mono"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Applied AI Systems & Full-Stack Engineering
          </motion.p>
        </div>
      </motion.div>

      {/* Corner accent - Top Left */}
      <motion.div
        className="absolute top-6 left-5 sm:top-8 sm:left-8 flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-6 sm:w-8 h-px bg-muted-foreground/15" />
        <span className="text-[9px] sm:text-[10px] font-mono text-muted-foreground/25 tracking-[0.2em] uppercase">
          Portfolio
        </span>
      </motion.div>

      {/* Location & Time - Top Right */}
      <motion.div
        className="absolute top-6 right-5 sm:top-8 sm:right-8 text-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[9px] sm:text-[14px] font-mono text-muted-foreground/30 tracking-wider">
          Chennai, IN
        </span>
        <span className="text-muted-foreground/15 mx-1.5 sm:mx-2">·</span>
        <span className="text-[9px] sm:text-[14px] font-mono text-muted-foreground/25 tabular-nums">
          {currentTime}
        </span>
      </motion.div>

      {/* Main Content - Center */}
      <div className="relative z-10 text-center px-6 sm:px-8">
        <HandwrittenName name="Swastik Mukherjee" />
        
        {/* Primary subtitle */}
        <motion.p
          className="mt-6 sm:mt-8 md:mt-10 text-[10px] sm:text-[11px] md:text-xs text-muted-foreground/35 tracking-[0.18em] sm:tracking-[0.22em] uppercase font-mono"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Applied AI Systems & Full-Stack Engineering
        </motion.p>
      </div>

      {/* Social Links - Bottom Left */}
      <motion.div
        className="absolute bottom-6 left-5 sm:bottom-8 sm:left-8 flex items-center gap-4 sm:gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/25 hover:text-muted-foreground/50 transition-colors duration-300"
            aria-label={label}
          >
            <Icon size={14} strokeWidth={1.5} />
          </a>
        ))}
      </motion.div>

      {/* Scroll indicator - vertical line that extends on scroll */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[8px] sm:text-[9px] font-mono text-muted-foreground/20 tracking-[0.25em] uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px bg-muted-foreground/15 origin-top"
          style={{ 
            height: scrollLineHeight,
            opacity: scrollLineOpacity 
          }}
        />
      </motion.div>

      {/* Year indicator - Bottom Right */}
      <motion.div
        className="absolute bottom-6 right-5 sm:bottom-8 sm:right-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.95, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[9px] sm:text-[10px] font-mono text-muted-foreground/15 tracking-wider">
          © 2026
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
