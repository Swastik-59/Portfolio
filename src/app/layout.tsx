import type { Metadata } from 'next';
import { Space_Grotesk, Cormorant_Garamond, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import Providers from './providers';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  preload: true,
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-cormorant',
  display: 'swap',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains',
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  title: 'Swastik Mukherjee | AI Engineer & Full-Stack Developer',
  description: 'Building AI systems and full-stack applications. Shipped 10+ projects including multi-agent orchestration, real-time ML pipelines, and production web apps. Open to internships.',
  keywords: [
    // Identity
    "Swastik Mukherjee",
    "Swastik",
    "Mukherjee",
    "swastikm.is-a.dev",
    "Swastik portfolio",
    "Swastik resume",

    // Roles
    "AI engineer",
    "full stack developer",
    "software engineer",
    "machine learning engineer",
    "AI developer",
    "full stack AI developer",
    "software developer intern",
    "AI internship",
    "ML internship",

    // Core stack
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Node.js",
    "PostgreSQL",
    "Docker",
    "React",
    "MERN",
    "Databases",
    "Express.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "PyTorch",
    "TensorFlow",
    "Keras",
    "scikit-learn",
    "machine learning",
    "deep learning",
    "computer vision",
    "natural language processing",
    "NLP",
    "RAG",
    "LLM applications",
    "AI systems",

    // What you actually build
    "AI web applications",
    "full stack web applications",
    "ML pipelines",
    "multi agent systems",
    "real time systems",
    "orchestration systems",
    "intelligent applications",
    "Application development",

    // Region
    "India",
    "asia",
    "Europe",
    "Indian developer",
  ],
  authors: [{ name: 'Swastik Mukherjee' }],
  creator: 'Swastik Mukherjee',
  robots: 'index, follow',
  metadataBase: new URL('https://swastikm.is-a.dev/'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Swastik Mukherjee | AI Engineer & Full-Stack Developer',
    description: 'Building AI systems and full-stack applications. Shipped 10+ projects. Open to internships.',
    url: 'https://swastikm.is-a.dev/',
    siteName: 'Swastik Mukherjee Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swastik Mukherjee | AI Engineer & Full-Stack Developer',
    description: 'Building AI systems and full-stack apps. Open to internships.',
    creator: '@swastik_dev',
  },
  other: {
    'application-ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Swastik Mukherjee',
      url: 'https://swastikm.is-a.dev/',
      jobTitle: 'AI Engineer & Full-Stack Developer',
      sameAs: [
        'https://github.com/Swastik-59',
        'https://www.linkedin.com/in/swastik-mukherjee-851979315',
        'https://www.kaggle.com/swastik2006',
      ],
    }),
  },
};
import CustomCursor from '@/components/ui/CustomCursor';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${cormorantGaramond.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Providers>
          <TooltipProvider>
            <CustomCursor />
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
