'use client';

import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { useDemoNotice } from '@/components/DemoNoticeModal';

export function FinalCTA() {
  const { handleWhatsAppClick } = useDemoNotice();

  return (
    <section
      id="contato"
      className="w-full bg-primary text-on-primary py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Subtle Ambient Glows */}
      <div
        className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-surface-tint/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="px-6 lg:px-16 max-w-[1440px] mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-secondary-fixed mb-3 font-semibold">
            Inicie seu ritual
          </span>

          <h2 className="font-serif text-[30px] sm:text-[38px] lg:text-[54px] lg:leading-[62px] text-on-primary tracking-tight mb-5 font-normal">
            Seu momento de cuidado pode começar aqui.
          </h2>

          <p className="font-sans text-[15px] lg:text-[17px] text-on-primary-container max-w-xl mb-10 leading-relaxed font-light">
            Entre em contato e descubra qual tratamento combina melhor com o que você procura. Estamos prontos para acolher você.
          </p>

          {/* Large Highlight Action */}
          <button
            type="button"
            onClick={(e) =>
              handleWhatsAppClick(e, 'Olá! Gostaria de iniciar meu ritual de cuidados na Luméra.')
            }
            className="inline-flex items-center justify-center bg-secondary hover:bg-on-secondary-container text-on-secondary font-sans text-[13px] uppercase tracking-[0.14em] font-semibold px-9 py-4 lg:py-5 shadow-xl transition-all hover:scale-[1.02] gap-3 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 stroke-[1.75]" />
            <span>Agendar pelo WhatsApp</span>
          </button>

          {/* Number & Notice */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-on-primary-container text-xs">
            <span className="font-sans text-sm text-on-primary font-medium tracking-wide">
              +55 (00) 90000-0000
            </span>
            <span className="hidden sm:inline text-outline">•</span>
            <span className="font-sans text-[11px] uppercase tracking-wider text-outline-variant font-medium">
              Horários sob consulta prévia para garantir sua privacidade e tranquilidade.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
