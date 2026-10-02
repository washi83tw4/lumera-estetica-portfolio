'use client';

import React, { useEffect, useRef } from 'react';
import { X, ArrowRight, MessageCircle } from 'lucide-react';
import { useDemoNotice } from '@/components/DemoNoticeModal';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { handleWhatsAppClick } = useDemoNotice();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu de Navegação"
      className="fixed inset-0 z-[90] lg:hidden flex"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-primary/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={menuRef}
        className="relative w-[85%] max-w-sm bg-surface h-full shadow-2xl flex flex-col justify-between p-6 sm:p-8 z-10 animate-in slide-in-from-left duration-250 border-r border-outline-variant/40"
      >
        <div>
          {/* Top Brand & Close */}
          <div className="flex items-center justify-between pb-6 border-b border-outline-variant/40">
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-[0.2em] uppercase text-primary font-medium">
                LUMÉRA
              </span>
              <span className="font-sans text-[9px] tracking-[0.24em] uppercase text-on-surface-variant font-semibold">
                Estética &amp; Bem-estar
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 -mr-2 flex items-center justify-center text-on-surface hover:text-secondary transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col py-6 space-y-1" aria-label="Links de navegação">
            {[
              { label: 'Início', href: '#inicio' },
              { label: 'Tratamentos', href: '#tratamentos' },
              { label: 'Sobre Nós', href: '#sobre' },
              { label: 'Experiência', href: '#experiencia' },
              { label: 'Dúvidas Frequentes', href: '#duvidas' },
              { label: 'Contato', href: '#contato' },
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="group flex items-center justify-between py-3.5 px-2 text-on-surface hover:text-secondary transition-colors border-b border-outline-variant/20"
              >
                <span className="font-serif text-lg tracking-wide font-normal">
                  {item.label}
                </span>
                <ArrowRight className="w-4 h-4 text-outline-variant group-hover:text-secondary group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="pt-6 border-t border-outline-variant/40 space-y-3">
          <button
            type="button"
            onClick={(e) => {
              onClose();
              handleWhatsAppClick(e, 'Olá! Gostaria de agendar uma avaliação na Luméra.');
            }}
            className="w-full flex items-center justify-center gap-2.5 bg-secondary hover:bg-on-secondary-container text-on-secondary py-3.5 px-4 font-sans text-xs uppercase tracking-wider font-semibold shadow-sm transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Agendar Horário</span>
          </button>

          <p className="text-[11px] text-center text-on-surface-variant font-sans tracking-wide">
            Projeto conceitual de portfólio
          </p>
        </div>
      </div>
    </div>
  );
}
