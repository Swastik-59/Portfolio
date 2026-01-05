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

      <div className="max-w-4xl text-center md:text-left space-y-4 sm:space-y-6">
        {/* MAIN TEXT */}
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          blurStrength={14}
          baseRotation={4}
          rotationEnd="top center"
          wordAnimationEnd="center center"
        >
          I build systems that work. Second-year engineering student focused on
          AI systems, real-time ML pipelines, and production-grade full-stack
          applications. I design, ship, and maintain software.
        </ScrollReveal>

        <p className="text-sm text-muted-foreground/40 font-mono mt-6 sm:mt-8">
          Good engineering is reducing complexity until only the necessary remains.
        </p>


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
