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
  title: 'Swastik Mukherjee | AI Engineer & Full Stack Developer',
  description: 'A cinematic portfolio showcasing creative engineering, modern web development, and AI/ML expertise. Based in Chennai, India.',
  keywords: ['developer', 'portfolio', 'engineer', 'web development', 'AI', 'ML', 'Chennai', 'Swastik Mukherjee'],
  authors: [{ name: 'Swastik Mukherjee' }],
  robots: 'index, follow',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Swastik Mukherjee | AI Engineer & Full Stack Developer',
    description: 'A cinematic portfolio showcasing creative engineering and modern web development.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
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
