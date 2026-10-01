'use client';

import React from 'react';
import { Sparkles, Flower2, HelpCircle, MessageCircle } from 'lucide-react';

export function MobileBottomNav() {
  return (
    <nav
      aria-label="Navegação móvel inferior"
      className="fixed bottom-0 left-0 w-full z-40 lg:hidden pb-safe bg-surface/92 backdrop-blur-xl border-t border-outline-variant/40 shadow-[0_-2px_12px_rgba(0,0,0,0.04)]"
    >
      <div className="flex justify-around items-center h-14 px-2">
        <a
          href="#inicio"
          className="flex flex-col items-center justify-center w-16 h-11 gap-1 text-primary transition-colors"
        >
          <Flower2 className="w-[18px] h-[18px] stroke-[1.75]" />
          <span className="font-sans text-[10px] uppercase tracking-wider font-semibold">
            Início
          </span>
        </a>

        <a
          href="#tratamentos"
          className="flex flex-col items-center justify-center w-16 h-11 gap-1 text-on-surface-variant hover:text-primary transition-colors"
        >
          <Sparkles className="w-[18px] h-[18px] stroke-[1.75]" />
          <span className="font-sans text-[10px] uppercase tracking-wider font-semibold">
            Rituais
          </span>
        </a>

        <a
          href="#duvidas"
          className="flex flex-col items-center justify-center w-16 h-11 gap-1 text-on-surface-variant hover:text-primary transition-colors"
        >
          <HelpCircle className="w-[18px] h-[18px] stroke-[1.75]" />
          <span className="font-sans text-[10px] uppercase tracking-wider font-semibold">
            Dúvidas
          </span>
        </a>

        <a
          href="#contato"
          className="flex flex-col items-center justify-center w-16 h-11 gap-1 text-on-surface-variant hover:text-primary transition-colors"
        >
          <MessageCircle className="w-[18px] h-[18px] stroke-[1.75]" />
          <span className="font-sans text-[10px] uppercase tracking-wider font-semibold">
            Contato
          </span>
        </a>
      </div>
    </nav>
  );
}
