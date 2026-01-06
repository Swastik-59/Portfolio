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
      
      {/* Animated gradient orbs background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[120px]"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-cyan-500/[0.06] rounded-full blur-[100px]"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Hero content wrapper with scroll-based de-emphasis */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center will-change-transform"
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
      >
        {/* Enhanced radial glow behind name */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div 
            className="w-[600px] h-[400px] sm:w-[800px] sm:h-[500px] bg-primary/[0.06] rounded-full blur-[140px]"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.06, 0.08, 0.06],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Main Content - Center */}
        <div className="relative z-10 text-center px-6 sm:px-8 max-w-5xl">
          {/* Name with enhanced glow */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2 
            }}
            className="relative"
          >
            {/* Subtle text glow effect */}
            <div className="absolute inset-0 flex items-center justify-center blur-xl opacity-30" aria-hidden="true">
              <HandwrittenName name="Swastik Mukherjee" />
            </div>
            <HandwrittenName name="Swastik Mukherjee" />
          </motion.div>
          
          {/* Sharp headline with gradient */}
          <motion.h1
            className="mt-8 sm:mt-10 md:mt-12 text-xl sm:text-2xl md:text-3xl font-semibold leading-tight tracking-tight bg-gradient-to-br from-foreground via-foreground/95 to-foreground/75 bg-clip-text text-transparent antialiased"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.9, 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            AI Engineer & Full‑Stack Developer
          </motion.h1>

          {/* Supporting context with stagger */}
          <motion.div
            className="mt-6 sm:mt-7 md:mt-8 text-sm sm:text-base md:text-lg text-muted-foreground/80 leading-[1.8] tracking-wide max-w-2xl mx-auto font-light antialiased"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 1.2, 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            <p className="motion-reduce:transform-none">
              Shipping AI‑powered web apps, multi‑agent systems, and ML pipelines.
              I build end-to-end—from training models to deploying production backends.
            </p>
          </motion.div>

          {/* Subtle accent line */}
          <motion.div
            className="mt-8 sm:mt-10 flex items-center justify-center gap-4"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ 
              delay: 1.5, 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            aria-hidden="true"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          </motion.div>
        </div>
      </motion.div>

      {/* Corner accent - Top Left */}
      <motion.div
        className="absolute top-6 left-5 sm:top-8 sm:left-8 flex items-center gap-3"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-muted-foreground/20 to-transparent" />
        <span className="text-[9px] sm:text-[10px] font-mono text-muted-foreground/35 tracking-[0.25em] uppercase font-medium antialiased">
          Portfolio
        </span>
      </motion.div>

      {/* Location & Time - Top Right */}
      <motion.div
        className="absolute top-6 right-5 sm:top-8 sm:right-8 text-right"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[9px] sm:text-[14px] font-mono text-muted-foreground/40 tracking-wide font-medium antialiased">
          Chennai, IN
        </span>
        <span className="text-muted-foreground/25 mx-1.5 sm:mx-2">·</span>
        <span className="text-[9px] sm:text-[14px] font-mono text-muted-foreground/35 tabular-nums font-normal antialiased">
          {currentTime}
        </span>
      </motion.div>

      {/* Social Links - Bottom Left */}
      <motion.div
        className="absolute bottom-6 left-5 sm:bottom-8 sm:left-8 flex items-center gap-4 sm:gap-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground/30 hover:text-primary/80 transition-all duration-300 hover:scale-110 motion-reduce:hover:scale-100"
            aria-label={label}
          >
            <Icon size={16} strokeWidth={1.5} />
          </a>
        ))}
      </motion.div>

      {/* Scroll indicator - vertical line that extends on scroll */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[8px] sm:text-[9px] font-mono text-muted-foreground/30 tracking-[0.3em] uppercase font-medium antialiased">
          Scroll
        </span>
        <motion.div
          className="w-px bg-gradient-to-b from-primary/30 via-muted-foreground/20 to-transparent origin-top"
          style={{ 
            height: scrollLineHeight,
            opacity: scrollLineOpacity 
          }}
          animate={{
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Year indicator - Bottom Right */}
      <motion.div
        className="absolute bottom-6 right-5 sm:bottom-8 sm:right-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[9px] sm:text-[10px] font-mono text-muted-foreground/25 tracking-wide font-normal antialiased">
          © 2026
        </span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
