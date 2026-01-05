'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const email = 'swastikmukherjee59@gmail.com';

  const fadeUp = {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section 
      ref={ref}
      className="min-h-screen relative px-4 sm:px-6 md:px-12 lg:px-24 py-20 sm:py-28 lg:py-40" 
      id="contact"
    >
      {/* Section divider - left-aligned for rhythm contrast */}
      <div className="absolute top-0 left-1/4 w-px h-12 sm:h-16 bg-gradient-to-b from-transparent via-muted-foreground/8 to-transparent" />
      
      <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 min-h-[60vh] lg:min-h-[70vh]">
        {/* Left column - Main content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Context Label */}
          <motion.p
            className="text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-muted-foreground/50 mb-6 sm:mb-8 lg:mb-10"
            initial={fadeUp.initial}
            animate={isInView ? fadeUp.animate : {}}
            transition={{ duration: 0.5 }}
          >
            Contact
          </motion.p>

          {/* Primary Headline - Responsive typography */}
          <motion.h2
            className="text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] xl:text-[3.5rem] font-medium leading-[1.15] sm:leading-[1.1] tracking-[-0.02em] sm:tracking-[-0.03em] text-foreground mb-5 sm:mb-6 lg:mb-8"
            initial={fadeUp.initial}
            animate={isInView ? fadeUp.animate : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Looking for internships<br className="hidden sm:block" />
            <span className="text-primary"> in AI and full-stack</span><br className="hidden sm:block" />
            engineering.
          </motion.h2>

          {/* Supporting Paragraph */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-muted-foreground/60 leading-[1.6] sm:leading-[1.7] mb-8 sm:mb-10 lg:mb-14 max-w-md lg:max-w-lg"
            initial={fadeUp.initial}
            animate={isInView ? fadeUp.animate : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Second-year BTech student building real systems, not just coursework. 
            Interested in teams solving meaningful problems at scale.
          </motion.p>

          {/* Email - Visual Anchor */}
          <motion.div
            className="mb-10 sm:mb-12 lg:mb-16"
            initial={fadeUp.initial}
            animate={isInView ? fadeUp.animate : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <span className="block text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-2 sm:mb-3">
              Email
            </span>
            <a 
              href={`mailto:${email}`}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-foreground hover:text-primary transition-colors duration-300 tracking-[-0.02em] break-all sm:break-normal"
            >
              {email}
            </a>
          </motion.div>

          {/* Action Row - Elevated */}
          <motion.div
            className="pt-5 sm:pt-6 lg:pt-8 border-t border-muted-foreground/10"
            initial={fadeUp.initial}
            animate={isInView ? fadeUp.animate : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-8 sm:gap-12 lg:gap-16">
              <a 
                href="/resume.pdf"
                download
                className="group flex items-baseline gap-2 sm:gap-3 lg:gap-4"
              >
                <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">Resume</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground/30 group-hover:text-muted-foreground/60 transition-colors duration-200">PDF ↓</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right column - Visual counterweight */}
        <div className="lg:col-span-5 flex flex-col justify-between lg:pl-16 relative">
          {/* Vertical rule */}
          <motion.div 
            className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-muted-foreground/10 to-transparent hidden lg:block"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Engineering typographic accent */}
          <motion.div
            className="hidden lg:flex flex-col items-end pt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            aria-hidden="true"
          >
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground/15 font-medium">
              SYSTEMS
            </span>
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground/10 font-medium mt-1">
              BUILD
            </span>
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground/[0.07] font-medium mt-1">
              IMPACT
            </span>
          </motion.div>

          {/* Horizontal rule accent on mobile */}
          <motion.div 
            className="w-16 h-px bg-muted-foreground/15 mb-12 lg:hidden"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Social links - part of composition */}
          <motion.div
            className="lg:pt-24"
            initial={fadeUp.initial}
            animate={isInView ? fadeUp.animate : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <span className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-6">
              Elsewhere
            </span>
            <div className="flex flex-col gap-4">
              <a 
                href="https://github.com/Swastik-59"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground/60 hover:text-foreground transition-colors duration-200 w-fit"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/swastik-mukherjee-851979315"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground/60 hover:text-foreground transition-colors duration-200 w-fit"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.kaggle.com/swastik2006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground/60 hover:text-foreground transition-colors duration-200 w-fit"
              >
                Kaggle
              </a>
            </div>
          </motion.div>

          {/* Footer - aligned to grid */}
          <motion.footer
            className="mt-auto pt-24 lg:pt-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            <p className="text-[11px] text-muted-foreground/25 tracking-wide">
              © {new Date().getFullYear()} Swastik Mukherjee
            </p>
          </motion.footer>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
