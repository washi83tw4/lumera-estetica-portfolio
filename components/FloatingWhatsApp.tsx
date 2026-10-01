'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useDemoNotice } from '@/components/DemoNoticeModal';

export function FloatingWhatsApp() {
  const { handleWhatsAppClick } = useDemoNotice();

  return (
    <aside className="hidden lg:flex fixed bottom-8 right-8 z-40 group items-center justify-end">
      {/* Hover pill tooltip */}
      <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-3 px-3 py-1.5 bg-primary text-on-primary font-sans text-[11px] uppercase tracking-wider font-semibold shadow-md whitespace-nowrap">
        Agende via WhatsApp
      </div>

      {/* Button */}
      <button
        type="button"
        onClick={(e) =>
          handleWhatsAppClick(e, 'Olá! Gostaria de agendar um horário via WhatsApp.')
        }
        aria-label="Agende via WhatsApp"
        className="w-12 h-12 flex items-center justify-center bg-secondary hover:bg-on-secondary-container text-on-secondary shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer"
      >
        <MessageCircle className="w-6 h-6 stroke-[1.75]" />
      </button>
    </aside>
  );
}
