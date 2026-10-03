'use client';

import React, { useState, useEffect } from 'react';
import { Menu, Leaf, MessageCircle } from 'lucide-react';
import { useDemoNotice } from '@/components/DemoNoticeModal';
import { MobileMenu } from '@/components/MobileMenu';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { handleWhatsAppClick, openDemoNotice } = useDemoNotice();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0a0908]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.6)] border-b border-[#c5a880]/20'
            : 'bg-gradient-to-b from-[#0a0908]/70 to-transparent border-b border-transparent'
        }`}
      >
        <div className="h-16 lg:h-20 w-full px-6 lg:px-16 max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden w-11 h-11 -ml-2 flex items-center justify-center text-[#f7f4ee] hover:text-[#c5a880] transition-colors"
            aria-label="Abrir menu principal"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6 stroke-[1.75]" />
          </button>

          {/* Brand Wordmark */}
          <a
            href="#inicio"
            className="flex flex-col items-center lg:items-start group transition-opacity hover:opacity-90"
          >
            <span className="font-serif text-lg lg:text-[22px] tracking-[0.2em] uppercase text-[#f7f4ee] font-medium group-hover:text-[#c5a880] transition-colors leading-none">
              LUMÉRA
            </span>
            <span className="font-sans text-[9px] lg:text-[10px] tracking-[0.24em] uppercase text-[#c5a880] font-semibold mt-1">
              Estética &amp; Bem-estar
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-8"
          >
            {[
              { href: '#inicio', label: 'Início' },
              { href: '#tratamentos', label: 'Tratamentos' },
              { href: '#sobre', label: 'Sobre' },
              { href: '#experiencia', label: 'Experiência' },
              { href: '#duvidas', label: 'Dúvidas' },
              { href: '#localizacao', label: 'Localização' },
              { href: '#contato', label: 'Contato' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] text-[#c5b8a9] hover:text-[#c5a880] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3">
            {/* Quick WhatsApp Action (Mobile) */}
            <button
              type="button"
              onClick={(e) => handleWhatsAppClick(e, 'Olá! Gostaria de agendar um horário na Luméra.')}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[#c5a880] hover:text-[#f7f4ee] transition-colors"
              title="Agendar via WhatsApp"
              aria-label="Agendar via WhatsApp"
            >
              <MessageCircle className="w-5 h-5 stroke-[1.75]" />
            </button>

            {/* Desktop Highlight Button: Champagne / Gold */}
            <button
              type="button"
              onClick={(e) => handleWhatsAppClick(e, 'Olá! Gostaria de agendar um horário na Luméra.')}
              className="hidden lg:inline-flex items-center justify-center bg-[#c5a880] hover:bg-[#d4ba94] text-[#0a0908] font-sans text-[11px] uppercase tracking-[0.14em] font-semibold px-5 py-2.5 transition-all shadow-sm cursor-pointer"
            >
              Agendar horário
            </button>

            {/* Decorative Brand Emblem Circle */}
            <button
              type="button"
              onClick={() => openDemoNotice('Luméra Estética', 'Ambiente conceitual de estética sensorial e bem-estar. Todos os recursos visuais foram desenhados para uma experiência elegante e serena.')}
              className="w-8 h-8 rounded-full bg-[#1c1a18] hover:bg-[#c5a880] text-[#c5a880] hover:text-[#0a0908] border border-[#c5a880]/30 flex items-center justify-center transition-colors cursor-pointer"
              title="Luméra Estética"
              aria-label="Informações sobre a Luméra"
            >
              <Leaf className="w-3.5 h-3.5 stroke-[1.75]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
