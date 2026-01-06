'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

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
      aria-labelledby="contact-heading"
    >
      {/* Section divider - left-aligned for rhythm contrast */}
      <div className="absolute top-0 left-1/4 w-px h-12 sm:h-16 bg-gradient-to-b from-transparent via-muted-foreground/8 to-transparent" aria-hidden="true" />
      
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
            id="contact-heading"
            className="text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] xl:text-[3.5rem] font-medium leading-[1.15] sm:leading-[1.1] tracking-[-0.02em] sm:tracking-[-0.03em] text-foreground mb-5 sm:mb-6 lg:mb-8"
            initial={fadeUp.initial}
            animate={isInView ? fadeUp.animate : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Looking for an<br className="hidden sm:block" />
            <span className="text-primary"> AI or full‑stack intern?</span>
          </motion.h2>

          {/* Supporting Paragraph */}
          <motion.p
            className="text-sm sm:text-base md:text-lg text-muted-foreground/70 leading-[1.6] sm:leading-[1.7] mb-8 sm:mb-10 lg:mb-12 max-w-md lg:max-w-lg"
            initial={fadeUp.initial}
            animate={isInView ? fadeUp.animate : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            2nd-year B.Tech student. I build real systems, ship working code, 
            and own features end-to-end. Available for internships.
          </motion.p>

          {/* Primary CTA - Email */}
          <motion.div
            className="mb-8 sm:mb-10"
            initial={fadeUp.initial}
            animate={isInView ? fadeUp.animate : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <a 
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-foreground hover:text-primary transition-colors duration-300 
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-sm"
              aria-label={`Send email to ${email}`}
            >
              <Mail size={24} className="text-primary" aria-hidden="true" />
              <span className="break-all sm:break-normal">{email}</span>
            </a>
          </motion.div>

          {/* Quick Links Row */}
          <motion.div
            className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-muted-foreground/10"
            initial={fadeUp.initial}
            animate={isInView ? fadeUp.animate : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a 
              href="https://github.com/Swastik-59"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View GitHub profile (opens in new tab)"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground/70 hover:text-foreground 
                transition-colors duration-200 px-3 py-2 rounded-md border border-muted-foreground/20 
                hover:border-muted-foreground/40 hover:bg-muted-foreground/5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Github size={18} aria-hidden="true" />
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/swastik-mukherjee-851979315"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View LinkedIn profile (opens in new tab)"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground/70 hover:text-foreground 
                transition-colors duration-200 px-3 py-2 rounded-md border border-muted-foreground/20 
                hover:border-muted-foreground/40 hover:bg-muted-foreground/5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Linkedin size={18} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume as PDF (opens in new tab)"
              className="group inline-flex items-center gap-2 text-sm text-primary/80 hover:text-primary 
                transition-colors duration-200 px-3 py-2 rounded-md border border-primary/20 
                hover:border-primary/40 hover:bg-primary/5
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <FileText size={18} aria-hidden="true" />
              <span>Resume</span>
            </a>
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
            aria-hidden="true"
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
              SHIP
            </span>
          </motion.div>

          {/* Horizontal rule accent on mobile */}
          <motion.div 
            className="w-16 h-px bg-muted-foreground/15 mb-12 lg:hidden"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ transformOrigin: 'left' }}
            aria-hidden="true"
          />

          {/* Additional links */}
          <motion.div
            className="lg:pt-24"
            initial={fadeUp.initial}
            animate={isInView ? fadeUp.animate : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <span className="block text-[11px] tracking-[0.2em] uppercase text-muted-foreground/40 mb-6">
              Also on
            </span>
            <div className="flex flex-col gap-3">
              <a 
                href="https://www.kaggle.com/swastik2006"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground/60 hover:text-foreground transition-colors duration-200 w-fit
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
              >
                Kaggle
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Footer */}
      <motion.footer
        className="mt-20 pt-8 border-t border-muted-foreground/10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        <p className="text-[11px] text-muted-foreground/30 tracking-wide">
          © {new Date().getFullYear()} Swastik Mukherjee. Built with Next.js.
        </p>
      </motion.footer>
    </section>
  );
};

export default ContactSection;
