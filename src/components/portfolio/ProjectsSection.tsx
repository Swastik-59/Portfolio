'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { PROJECTS, type Project } from './projects.data';

gsap.registerPlugin(ScrollTrigger);

// ============================================================================
// INDIVIDUAL PROJECT PANEL
// ============================================================================

interface ProjectPanelProps {
  project: Project;
  index: number;
  total: number;
}

const ProjectPanel: React.FC<ProjectPanelProps> = ({ project, index, total }) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(panelRef, { once: false, margin: '-40% 0px -40% 0px' });
  const [hasAnimated, setHasAnimated] = useState(false);

  // Parallax for the index number
  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ['start end', 'end start']
  });

  const indexY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const indexOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Animate the accent line on view
  useEffect(() => {
    if (isInView && lineRef.current && !hasAnimated) {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        { scaleX: 1, duration: 0.8, ease: 'power3.out' }
      );
      setHasAnimated(true );
    }
  }, [isInView, hasAnimated]);

  // GSAP entrance for content elements
  useEffect(() => {
    if (!contentRef.current || !panelRef.current) return;

    const elements = contentRef.current.querySelectorAll('.gsap-reveal');
    
    if (elements.length === 0) return;

    gsap.set(elements, { y: 60, opacity: 0 });
    
    const trigger = ScrollTrigger.create({
      trigger: panelRef.current,
      start: 'top 70%',
      onEnter: () => {
        gsap.to(elements, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: 'power3.out'
        });
      }
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div
      ref={panelRef}
      className="group relative min-h-[70vh] sm:min-h-[75vh] lg:min-h-[80vh] flex items-center py-12 sm:py-16 lg:py-24 xl:py-32"
    >
      {/* Subtle hover indicator - left border */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-0 bg-primary/40 transition-all duration-500 group-hover:h-32" />
      
      {/* Large background index number */}
      <motion.div
        style={{ y: indexY, opacity: indexOpacity }}
        className="absolute -left-2 sm:-left-4 lg:left-8 top-1/2 -translate-y-1/2 pointer-events-none select-none"
      >
        <span className="text-[25vw] sm:text-[22vw] lg:text-[15vw] font-bold text-white/[0.02] leading-none tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>
      </motion.div>

      {/* Content */}
      <div ref={contentRef} className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-start">
          
          {/* Left: Main Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6">
            {/* Project number badge */}
            <div className="gsap-reveal flex items-center gap-2 sm:gap-3 lg:gap-4 flex-wrap">
              <span className="text-[10px] sm:text-xs font-mono text-cyan-400/70 tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                Project {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-white/20">—</span>
              <span className="text-[10px] sm:text-xs font-mono text-white/30">
                {total} total
              </span>
            </div>

            {/* Title - Responsive sizing */}
            <h3 className="gsap-reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[0.95] sm:leading-[0.9]">
              {project.name}
            </h3>

            {/* Accent line + Position */}
            <div className="gsap-reveal flex items-center gap-3 sm:gap-4 lg:gap-5">
              <div 
                ref={lineRef}
                className="w-8 sm:w-10 lg:w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-cyan-400/0"
                style={{ transform: 'scaleX(0)' }}
              />
              <p className="text-sm sm:text-base lg:text-lg text-cyan-400/90 font-medium">
                {project.position}
              </p>
            </div>

            {/* Description */}
            <p className="gsap-reveal text-sm sm:text-base lg:text-lg text-white/50 leading-relaxed max-w-xl">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="gsap-reveal flex flex-wrap items-center gap-2 sm:gap-3 pt-1 sm:pt-2">
              {project.tech.map((tech, i) => (
                <span 
                  key={tech}
                  className="text-[10px] sm:text-xs font-mono text-white/40 tracking-wide"
                >
                  {tech}{i < project.tech.length - 1 && <span className="ml-2 sm:ml-3 text-white/20">·</span>}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="gsap-reveal flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-5 lg:pt-6">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                <Github size={14} />
                <span>Source</span>
                <ArrowUpRight 
                  size={12} 
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                />
              </a>

              {project.isDemo && project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-cyan-400/70 hover:text-cyan-400 transition-colors duration-200"
                >
                  <ExternalLink size={14} />
                  <span>Demo</span>
                  <ArrowUpRight 
                    size={12} 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Separator line */}
      {index < total - 1 && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent origin-center"
        />
      )}
    </div>
  );
};

// ============================================================================
// SECTION HEADER
// ============================================================================

const SectionHeader: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  // GSAP text reveal animation
  useEffect(() => {
    if (!headerRef.current || !titleRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the title characters
      gsap.fromTo(
        titleRef.current,
        { 
          y: 100,
          opacity: 0,
          rotateX: 45
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
          }
        }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={headerRef} className="relative py-16 sm:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8"
        >
          <div className="w-8 sm:w-10 lg:w-12 h-px bg-cyan-400" />
          <span className="text-[10px] sm:text-xs font-mono text-cyan-400 tracking-[0.2em] sm:tracking-[0.3em] uppercase">
            Selected Work
          </span>
        </motion.div>

        {/* Title */}
        <div className="overflow-hidden">
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white tracking-tighter"
            style={{ transformStyle: 'preserve-3d' }}
          >
            Projects
          </h2>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-4 sm:mt-6 lg:mt-8 text-sm sm:text-base lg:text-lg xl:text-xl text-white/40 max-w-sm sm:max-w-md lg:max-w-xl"
        >
          A selection of systems I&apos;ve architected and shipped.
        </motion.p>

        {/* Project count indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8 sm:mt-10 lg:mt-12 flex items-center gap-4 sm:gap-6"
        >
          <div className="flex items-baseline gap-1.5 sm:gap-2">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums">
              {PROJECTS.length}
            </span>
            <span className="text-xs sm:text-sm text-white/30 uppercase tracking-wider">
              Projects
            </span>
          </div>
          <div className="h-6 sm:h-8 w-px bg-white/10" />
        </motion.div>
      </div>

      {/* Decorative gradient orb - smaller on mobile */}
      <div className="absolute -right-1/2 sm:-right-1/3 lg:-right-1/4 top-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] rounded-full bg-cyan-400/5 blur-[80px] sm:blur-[100px] lg:blur-[120px] pointer-events-none" />
    </div>
  );
};

// ============================================================================
// MAIN PROJECTS SECTION
// ============================================================================

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Refresh ScrollTrigger after mount
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative">
      {/* Header */}
      <SectionHeader />

      {/* Projects */}
      <div className="relative">
        {PROJECTS.map((project, index) => (
          <ProjectPanel
            key={project.id}
            project={project}
            index={index}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;