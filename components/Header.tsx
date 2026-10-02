'use client';

import React, { useState } from 'react';
import { Menu, Leaf, MessageCircle } from 'lucide-react';
import { useDemoNotice } from '@/components/DemoNoticeModal';
import { MobileMenu } from '@/components/MobileMenu';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleWhatsAppClick, openDemoNotice } = useDemoNotice();

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-surface/85 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.03)] border-b border-outline-variant/30">
        <div className="h-16 lg:h-20 w-full px-6 lg:px-16 max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden w-11 h-11 -ml-2 flex items-center justify-center text-on-surface hover:text-secondary transition-colors"
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
            <span className="font-serif text-lg lg:text-[22px] tracking-[0.2em] uppercase text-primary font-medium group-hover:text-secondary transition-colors leading-none">
              LUMÉRA
            </span>
            <span className="font-sans text-[9px] lg:text-[10px] tracking-[0.24em] uppercase text-on-surface-variant font-semibold mt-1">
              Estética &amp; Bem-estar
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Navegação principal"
            className="hidden lg:flex items-center gap-9"
          >
            <a
              href="#inicio"
              className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-on-surface-variant hover:text-primary transition-colors"
            >
              Início
            </a>
            <a
              href="#tratamentos"
              className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-on-surface-variant hover:text-primary transition-colors"
            >
              Tratamentos
            </a>
            <a
              href="#sobre"
              className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-on-surface-variant hover:text-primary transition-colors"
            >
              Sobre
            </a>
            <a
              href="#experiencia"
              className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-on-surface-variant hover:text-primary transition-colors"
            >
              Experiência
            </a>
            <a
              href="#duvidas"
              className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-on-surface-variant hover:text-primary transition-colors"
            >
              Dúvidas
            </a>
            <a
              href="#contato"
              className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-on-surface-variant hover:text-primary transition-colors"
            >
              Contato
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Mobile WhatsApp Quick Action */}
            <button
              type="button"
              onClick={(e) => handleWhatsAppClick(e, 'Olá! Gostaria de agendar um horário na Luméra.')}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-secondary hover:text-on-secondary-container transition-colors"
              aria-label="Agendar via WhatsApp"
            >
              <MessageCircle className="w-5 h-5 stroke-[1.75]" />
            </button>

            {/* Desktop Highlight Button */}
            <button
              type="button"
              onClick={(e) => handleWhatsAppClick(e, 'Olá! Gostaria de agendar um horário na Luméra.')}
              className="hidden lg:inline-flex items-center justify-center bg-secondary hover:bg-on-secondary-container text-on-secondary font-sans text-[12px] uppercase tracking-[0.12em] font-semibold px-5 py-2.5 transition-colors shadow-sm cursor-pointer"
            >
              Agendar horário
            </button>

            {/* Decorative Brand Emblem Circle (replaces fake user account per instructions) */}
            <button
              type="button"
              onClick={() => openDemoNotice('Luméra Estética', 'Ambiente conceitual de estética sensorial e bem-estar. Todos os recursos visuais foram desenhados para uma experiência elegante e serena.')}
              className="w-8 h-8 rounded-full bg-primary hover:bg-secondary text-on-primary flex items-center justify-center transition-colors cursor-pointer"
              title="Luméra Estética"
              aria-label="Informações sobre a Luméra"
            >
              <Leaf className="w-4 h-4 text-on-primary stroke-[1.75]" />
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
