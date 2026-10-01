import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Treatments } from '@/components/Treatments';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { EditorialGallery } from '@/components/EditorialGallery';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function HomePage() {
  return (
    <>
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-on-primary focus:font-sans focus:text-xs focus:uppercase focus:tracking-wider focus:outline-hidden"
      >
        Pular para o conteúdo principal
      </a>

      {/* Header */}
      <Header />

      {/* Main Content Sections */}
      <main id="main-content" className="w-full pt-16 lg:pt-20 bg-surface">
        <Hero />
        <Treatments />
        <About />
        <Experience />
        <EditorialGallery />
        <FAQ />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Bottom Bar */}
      <MobileBottomNav />

      {/* Desktop Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </>
  );
}
