'use client';

import { lazy, Suspense } from 'react';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import TechStackSection from '@/components/portfolio/TechStackSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ContactSection from '@/components/portfolio/ContactSection';

// Lazy load heavy background components
const LightRays = lazy(() => import('@/components/portfolio/AnimatedBackground'));
const SubtleBackground = lazy(() => import('@/components/portfolio/SubtleBackground'));

export default function Home() {
    return (
        <main className="relative bg-background">
            {/* SEO */}
            <h1 className="sr-only">Swastik Mukherjee - AI Engineer & Full Stack Developer</h1>

            {/* Grain Overlay for premium feel */}
            <div className="grain-overlay" aria-hidden="true" />

            {/* Grid Background - subdued for professional look */}
            <div 
                className="fixed inset-0 z-[1] pointer-events-none opacity-[0.06]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, currentColor 1px, transparent 1px),
                        linear-gradient(to bottom, currentColor 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 100%)'
                }}
                aria-hidden="true"
            />

            {/* Animated Background - Light Rays */}
            <Suspense fallback={null}>
                <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
                    <LightRays
                        raysOrigin="bottom-center"
                        raysColor="#38E8E1"
                        raysSpeed={0.35}
                        lightSpread={0.6}
                        rayLength={0.8}
                        followMouse={false}
                        mouseInfluence={0}
                        noiseAmount={0.04}
                        distortion={0.02}
                    />
                </div>
            </Suspense>

            {/* Subtle Background Animations */}
            <Suspense fallback={null}>
                <SubtleBackground />
            </Suspense>

            <div className="relative z-10">
                {/* Vertical rhythm guide - left edge anchor */}
                <div 
                    className="fixed left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-px z-20 pointer-events-none hidden md:block"
                    style={{
                        background: 'linear-gradient(to bottom, transparent 0%, hsl(180 70% 50% / 0.08) 15%, hsl(180 70% 50% / 0.08) 85%, transparent 100%)'
                    }}
                    aria-hidden="true"
                />
                
                <HeroSection />
                <AboutSection />
                <ProjectsSection />
                <TechStackSection />
                <ContactSection />
            </div>
        </main>
    );
}
