'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useDemoNotice } from '@/components/DemoNoticeModal';

export function FinalCTA() {
  const { handleWhatsAppClick } = useDemoNotice();

  return (
    <section
      id="contato"
      className="w-full bg-[#0a0908] text-[#f7f4ee] py-20 lg:py-32 relative overflow-hidden border-t border-[#24211e]"
    >
      {/* Subtle Ambient Champagne Glows */}
      <div
        className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-[#c5a880]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-[#8f6e48]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="px-6 lg:px-16 max-w-[1440px] mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-[1px] w-6 bg-[#c5a880]" />
            <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-semibold">
              Inicie seu ritual
            </span>
            <span className="h-[1px] w-6 bg-[#c5a880]" />
          </div>

          <h2 className="font-serif text-[32px] sm:text-[42px] lg:text-[56px] lg:leading-[64px] text-[#f7f4ee] tracking-tight mb-5 font-normal">
            Seu momento de cuidado pode começar aqui.
          </h2>

          <p className="font-sans text-[15px] lg:text-[17px] text-[#c5b8a9] max-w-xl mb-10 leading-relaxed font-light">
            Entre em contato e descubra qual tratamento combina melhor com o que você procura. Estamos prontos para acolher você.
          </p>

          {/* Large Highlight Action */}
          <button
            type="button"
            onClick={(e) =>
              handleWhatsAppClick(e, 'Olá! Gostaria de iniciar meu ritual de cuidados na Luméra.')
            }
            className="inline-flex items-center justify-center bg-[#c5a880] hover:bg-[#d4ba94] text-[#0a0908] font-sans text-[12px] uppercase tracking-[0.16em] font-semibold px-10 py-4 lg:py-5 shadow-2xl transition-all duration-300 hover:scale-[1.02] gap-3 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 stroke-[2]" />
            <span>Agendar pelo WhatsApp</span>
          </button>

          {/* Number & Notice */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs">
            <span className="font-sans text-sm text-[#f7f4ee] font-medium tracking-wide">
              +55 (00) 90000-0000
            </span>
            <span className="hidden sm:inline text-[#c5a880]">•</span>
            <span className="font-sans text-[11px] uppercase tracking-wider text-[#c5b8a9] font-light">
              Horários sob consulta prévia para garantir sua privacidade e tranquilidade.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
