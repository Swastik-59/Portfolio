'use client';

import ScrollReveal from '../ui/ScrollReveal'

const AboutSection = () => {
  return (
    <section
      id="about"
      className="section-panel flex items-center justify-center relative px-4 sm:px-6 md:px-8 pt-24 sm:pt-32 lg:pt-40 bg-transparent"
    >
      {/* Section divider - signals new chapter */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 sm:h-20 bg-gradient-to-b from-transparent via-muted-foreground/10 to-transparent" />

      <div className="max-w-6xl text-left md:text-left space-y-4 sm:space-y-6">
        {/* MAIN TEXT */}
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          blurStrength={16}
          baseRotation={1}
          rotationEnd="top center"
          wordAnimationEnd="center center"
        >
          I’m Swastik Mukherjee, a Full Stack and AI developer who builds intelligent, real-world applications at the intersection of software engineering and machine learning. I specialize in creating scalable products that move from idea to deployment.
        </ScrollReveal>

        {/* STATS */}
        <div className="mt-6 sm:mt-8 flex gap-4 sm:gap-6 md:gap-8 justify-center md:justify-start">
          <Stat value="10+" label="Projects" />
          <Divider />
          <Stat value="3" label="Year" />
          <Divider />
          <Stat value="∞" label="Learning" />
        </div>

      </div>
    </section>
  )
}

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <span className="text-2xl sm:text-3xl font-light text-primary">{value}</span>
    <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 tracking-wider uppercase">
      {label}
    </p>
  </div>
)

const Divider = () => <div className="w-px bg-border hidden sm:block" />

export default AboutSection
