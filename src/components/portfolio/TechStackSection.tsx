'use client';

import { useRef, useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

// Three-tier classification: primary (core), secondary (familiar), tertiary (exposure)
export const STACK = [
  {
    key: "languages",
    title: "Languages",
    description: "Core programming languages across full-stack, systems, and ML.",
    primary: ["TypeScript", "Python", "Java"],
    secondary: ["JavaScript", "C++", "SQL", "Go","C", "Bash"],
    tertiary: [],
  },
  {
    key: "fullstack",
    title: "Full-Stack",
    description: "Frameworks and runtimes for production web applications.",
    primary: ["Next.js", "React", "Node.js", "PostgreSQL"],
    secondary: ["Express", "FastAPI", "MongoDB", "Tailwind CSS","Electron", "Framer Motion", "Zustand"],
    tertiary: [],
  },
  {
    key: "aiml",
    title: "AI / ML",
    description: "Libraries and tooling for training, inference, and deployment.",
    primary: ["PyTorch", "TensorFlow", "Transformers", "LangChain"],
    secondary: ["Scikit-learn", "Keras", "XGBoost", "RAG Frameworks","Ollama", "Qdrant", "ONNX", "Whisper", "Sentence-Transformers"],
    tertiary: [],
  },
  {
    key: "tools",
    title: "Tools & Infra",
    description: "Dev tooling, deployment, and infrastructure components.",
    primary: ["Docker", "GitHub", "Linux", "Vercel"],
    secondary: ["Redis", "Supabase", "GitHub Actions", "Render","Grafana", "Prometheus", "Qdrant", "Postman", "VS Code"],
    tertiary: [],
  },
];

const TechStackSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stickyY, setStickyY] = useState(0);
  const desktopSectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", () => {
    if (!containerRef.current || !leftContentRef.current) return;

    const container = containerRef.current;
    const leftContent = leftContentRef.current;
    const containerRect = container.getBoundingClientRect();
    const leftContentHeight = leftContent.offsetHeight;
    const topOffset = 112;
    const containerHeight = container.offsetHeight;
    const scrolledIntoContainer = topOffset - containerRect.top;
    const maxScroll = containerHeight - leftContentHeight;

    if (scrolledIntoContainer <= 0) {
      setStickyY(0);
    } else if (scrolledIntoContainer >= maxScroll) {
      setStickyY(maxScroll);
    } else {
      setStickyY(scrolledIntoContainer);
    }

    const threshold = window.innerHeight * 0.35;
    for (let i = desktopSectionRefs.current.length - 1; i >= 0; i--) {
      const ref = desktopSectionRefs.current[i];
      if (!ref) continue;
      if (ref.getBoundingClientRect().top <= threshold) {
        setActiveIndex(i);
        return;
      }
    }
    setActiveIndex(0);
  });

  useEffect(() => {
    const handleResize = () => scrollY.set(window.scrollY);
    window.addEventListener("resize", handleResize);
    setTimeout(() => scrollY.set(window.scrollY), 100);
    return () => window.removeEventListener("resize", handleResize);
  }, [scrollY]);

  const currentStack = STACK[activeIndex];

  return (
    <section className="py-16 sm:py-24 lg:py-32 relative" id="tech" aria-labelledby="tech-heading">
      <div ref={containerRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:flex-row lg:gap-16 xl:gap-20">

          {/* Left Column - Sticky */}
          <div className="w-[280px] flex-shrink-0 relative">
            <div
              ref={leftContentRef}
              style={{ transform: `translateY(${stickyY}px)` }}
              className="motion-reduce:transform-none"
            >
              <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 font-medium block mb-5">
                Technical Stack
              </span>

              <h2 id="tech-heading" className="text-3xl font-medium text-zinc-100 leading-tight tracking-tight mb-3">
                {currentStack.title}
              </h2>

              <p className="text-sm text-zinc-500 leading-relaxed">
                {currentStack.description}
              </p>

              {/* Progress indicator */}
              <nav className="mt-10 flex items-center gap-2" aria-label="Section progress">
                <span className="text-xs font-mono text-zinc-600 tabular-nums">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <div className="flex gap-1" role="list">
                  {STACK.map((s, idx) => (
                    <div
                      key={idx}
                      role="listitem"
                      aria-current={idx === activeIndex ? "step" : undefined}
                      className={`h-px transition-all duration-200 motion-reduce:transition-none ${
                        idx === activeIndex ? "bg-zinc-400 w-5" : "bg-zinc-800 w-3"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs font-mono text-zinc-700 tabular-nums">
                  {String(STACK.length).padStart(2, "0")}
                </span>
              </nav>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 max-w-xl">
            {STACK.map((section, sectionIndex) => (
              <div
                key={section.key}
                ref={(el) => { desktopSectionRefs.current[sectionIndex] = el; }}
                className="mb-20 last:mb-0 min-h-[45vh]"
                role="region"
                aria-label={`${section.title} skills`}
              >
                {/* Section header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-600 font-medium">
                    {section.title}
                  </span>
                  <div className="flex-1 h-px bg-zinc-800/40" aria-hidden="true" />
                </div>

                {/* Three-tier chip layout */}
                <div className="space-y-3" role="list" aria-label={`${section.title} technologies`}>
                  {/* Primary tier - Core tools */}
                  <div className="flex flex-wrap gap-x-2 gap-y-2">
                    {section.primary.map((item) => (
                      <Chip key={item} label={item} tier="primary" />
                    ))}
                  </div>

                  {/* Secondary tier - Familiar */}
                  <div className="flex flex-wrap gap-x-2 gap-y-2">
                    {section.secondary.map((item) => (
                      <Chip key={item} label={item} tier="secondary" />
                    ))}
                  </div>

                  {/* Tertiary tier - Exposure */}
                  <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1">
                    {section.tertiary.map((item) => (
                      <Chip key={item} label={item} tier="tertiary" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <span className="text-[10px] tracking-[0.25em] uppercase text-zinc-500 font-medium block mb-8">
            Technical Stack
          </span>

          <div className="space-y-10">
            {STACK.map((section) => (
              <div key={section.key} role="region" aria-label={`${section.title} skills`}>
                <h3 className="text-xl font-medium text-zinc-100 mb-1.5 tracking-tight">
                  {section.title}
                </h3>
                <p className="text-xs text-zinc-500 leading-relaxed mb-4 max-w-sm">
                  {section.description}
                </p>

                <div className="space-y-2" role="list">
                  <div className="flex flex-wrap gap-2">
                    {section.primary.map((item) => (
                      <Chip key={item} label={item} tier="primary" />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {section.secondary.map((item) => (
                      <Chip key={item} label={item} tier="secondary" />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1">
                    {section.tertiary.map((item) => (
                      <Chip key={item} label={item} tier="tertiary" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ============================================================================
// CHIP COMPONENT - Three visual tiers
// ============================================================================

interface ChipProps {
  label: string;
  tier: 'primary' | 'secondary' | 'tertiary';
}

const Chip = ({ label, tier }: ChipProps) => {
  if (tier === 'tertiary') {
    // Plain text, no container
    return (
      <span
        role="listitem"
        className="text-sm text-zinc-500 motion-reduce:transition-none"
      >
        {label}
      </span>
    );
  }

  if (tier === 'secondary') {
    // Lower prominence - dashed border
    return (
      <span
        role="listitem"
        className="
          inline-flex items-center px-2.5 py-1 text-sm font-mono
          rounded border border-dashed border-zinc-700/50 text-zinc-400
          transition-colors duration-150 motion-reduce:transition-none
          hover:border-zinc-600 hover:text-zinc-300
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:ring-offset-1 focus-visible:ring-offset-background
        "
        tabIndex={0}
        aria-label={`${label}, familiar`}
      >
        {label}
      </span>
    );
  }

  // Primary - core tools, most prominent
  return (
    <span
      role="listitem"
      className="
        inline-flex items-center px-3 py-1 text-sm font-mono font-medium
        rounded border-2 border-zinc-500 text-zinc-200 bg-zinc-800/50
        transition-colors duration-150 motion-reduce:transition-none
        hover:border-zinc-400 hover:bg-zinc-800/80
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/20 focus-visible:ring-offset-1 focus-visible:ring-offset-background
      "
      tabIndex={0}
      aria-label={`${label}, core skill`}
    >
      {label}
    </span>
  );
};

export default TechStackSection;
