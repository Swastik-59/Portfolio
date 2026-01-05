'use client';

import { motion } from 'framer-motion'

const IntroSection = ({text}) => {
  const letters = text.split('')
  
  return (
    <section className="section-panel flex items-center justify-center w-screen h-screen bg-transparent relative overflow-hidden">
      {/* Ambient background glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[120px]" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 100 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            y: -100,
            x: Math.sin(i) * 50
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.8,
            ease: 'easeInOut'
          }}
          className="absolute w-1 h-1 rounded-full bg-cyan-400/60"
          style={{
            left: `${20 + i * 13}%`,
            bottom: '10%'
          }}
        />
      ))}

      <div className="relative z-10 px-4 sm:px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-[clamp(2.5rem,6vw,7rem)]
            sm:text-[clamp(3rem,7vw,7rem)]
            md:text-[clamp(3.5rem,8vw,7rem)]
            font-light
            tracking-[0.2em]
            sm:tracking-[0.25em]
            md:tracking-[0.3em]
            text-foreground/90
            relative
            text-center
            drop-shadow-[0_0_30px_rgba(34,211,238,0.15)]
          "
          style={{
            textShadow: '0 0 40px rgba(34, 211, 238, 0.1)'
          }}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + i * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="inline-block"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}

          {/* Enhanced underline with glow */}
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="
              absolute
              left-1/2
              -bottom-4
              sm:-bottom-6
              md:-bottom-8
              h-[2px]
              w-20
              sm:w-28
              md:w-32
              -translate-x-1/2
              bg-gradient-to-r
              from-cyan-400/0
              via-cyan-400
              to-cyan-400/0
              origin-center
              shadow-[0_0_20px_rgba(34,211,238,0.5)]
            "
          />
          
          {/* Decorative side accents */}
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.6, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              -translate-x-12
              sm:-translate-x-16
              md:-translate-x-20
              w-8
              sm:w-10
              md:w-12
              h-[1px]
              bg-gradient-to-r
              from-transparent
              to-cyan-400/60
              hidden
              sm:block
            "
          />
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 0.6, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              translate-x-12
              sm:translate-x-16
              md:translate-x-20
              w-8
              sm:w-10
              md:w-12
              h-[1px]
              bg-gradient-to-l
              from-transparent
              to-cyan-400/60
              hidden
              sm:block
            "
          />
        </motion.h2>
      </div>

      {/* Subtle corner accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute top-8 left-8 w-16 h-16 border-l border-t border-cyan-400/30"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-cyan-400/30"
      />
    </section>
  )
}

export default IntroSection