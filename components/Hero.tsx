'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight, ArrowDown, Calendar, User, Clock, ShieldCheck, Leaf } from 'lucide-react';
import { useDemoNotice } from '@/components/DemoNoticeModal';

export function Hero() {
  const { handleWhatsAppClick } = useDemoNotice();

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden bg-[#0a0908] min-h-[680px] lg:min-h-[820px] lg:h-[90vh] flex items-center"
    >
      {/* 1. Full-Width Panoramic Background Image Asset */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none overflow-hidden">
        <Image
          src="/images/lumera/hero-banner.webp"
          alt="Mulher serena em sessão de cuidados faciais na Luméra Estética de luxo"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[78%_center] sm:object-[82%_center] lg:object-[86%_center] filter brightness-[0.98] contrast-[1.03]"
          referrerPolicy="no-referrer"
        />

        {/* Ambient Dark Gradient Overlays for High-Contrast Readability */}
        {/* Desktop Left-to-Right Scrim: Guarantees deep dark luxury canvas behind the left text block */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0a0908] via-[#0a0908]/90 via-42% to-transparent w-[64%]" />
        
        {/* Mobile Vertical Gradient: Soft fade from bottom so text is crystal clear while face at top-right is preserved */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/90 via-55% to-[#0a0908]/35" />

        {/* Subtle Luxury Golden Vignette along Top and Bottom edges */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0a0908]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0a0908] via-[#0a0908]/90 to-transparent" />
      </div>

      {/* 2. Text Content Block positioned with 8% to 12% lateral margin on Desktop */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:pl-[10%] lg:pr-8 max-w-[1520px] mx-auto py-24 sm:py-28 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xl lg:max-w-[580px] flex flex-col items-start"
        >
          {/* Eyebrow Highlight / Kicker */}
          <div className="inline-flex items-center gap-3 mb-5 lg:mb-6">
            <span className="h-[1px] w-8 bg-[#c5a880]" />
            <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.26em] text-[#c5a880] font-semibold">
              Estética facial · corporal · bem-estar
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-[36px] sm:text-[46px] lg:text-[60px] lg:leading-[68px] text-[#f7f4ee] tracking-tight mb-5 lg:mb-6 font-normal text-balance">
            Sua beleza, cuidada com intenção.
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-[15px] sm:text-[16px] lg:text-[17px] text-[#c5b8a9] max-w-lg mb-8 lg:mb-10 leading-relaxed font-light">
            Tratamentos faciais e corporais pensados para valorizar sua beleza natural em uma experiência de cuidado, conforto e bem-estar.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10 lg:mb-12">
            {/* Primary Button: Champagne / Gold background, dark text */}
            <button
              type="button"
              onClick={(e) => handleWhatsAppClick(e, 'Olá! Gostaria de agendar uma avaliação na Luméra.')}
              className="inline-flex items-center justify-center bg-[#c5a880] hover:bg-[#d4ba94] text-[#0a0908] font-sans text-[12px] uppercase tracking-[0.16em] font-semibold px-8 py-4 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#c5a880]/15 group cursor-pointer"
            >
              <Calendar className="w-4 h-4 mr-2 lg:hidden stroke-[2]" />
              <span>Agendar avaliação</span>
              <ArrowRight className="hidden lg:inline-block ml-2.5 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>

            {/* Secondary Button: Transparent, gold outline, light text */}
            <a
              href="#tratamentos"
              className="inline-flex items-center justify-center bg-transparent hover:bg-[#c5a880]/10 text-[#f7f4ee] font-sans text-[12px] uppercase tracking-[0.16em] font-semibold px-8 py-4 transition-all duration-300 border border-[#c5a880]/50 hover:border-[#c5a880] text-center"
            >
              <span>Conhecer tratamentos</span>
              <ArrowDown className="lg:hidden ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Desktop Micro-Pillars Strip */}
          <div className="hidden lg:grid pt-8 w-full grid-cols-3 gap-6 max-w-lg border-t border-[#332e29]">
            <div className="flex flex-col pr-4 border-r border-[#332e29]">
              <span className="block font-serif text-[17px] text-[#f7f4ee] mb-1 font-medium">
                Atendimento individual
              </span>
              <span className="font-sans text-[12px] text-[#c5b8a9] leading-snug font-light">
                Cuidado pensado para cada pessoa
              </span>
            </div>
            <div className="flex flex-col px-4 border-r border-[#332e29]">
              <span className="block font-serif text-[17px] text-[#f7f4ee] mb-1 font-medium">
                Tempo dedicado
              </span>
              <span className="font-sans text-[12px] text-[#c5b8a9] leading-snug font-light">
                Sessões no ritmo de cada tratamento
              </span>
            </div>
            <div className="flex flex-col pl-4">
              <span className="block font-serif text-[17px] text-[#f7f4ee] mb-1 font-medium">
                Ambiente reservado
              </span>
              <span className="font-sans text-[12px] text-[#c5b8a9] leading-snug font-light">
                Conforto acústico e tranquilidade
              </span>
            </div>
          </div>

          {/* Mobile Metrics Ribbon */}
          <div className="grid lg:hidden grid-cols-3 gap-2 w-full pt-2">
            <div className="flex flex-col items-center text-center p-3 bg-[#141311]/80 backdrop-blur-xs border border-[#332e29]/70 rounded-xs">
              <User className="w-3.5 h-3.5 text-[#c5a880] mb-1" />
              <span className="font-serif text-[11px] sm:text-[12px] text-[#f7f4ee] font-medium">
                Individual
              </span>
              <span className="font-sans text-[9px] text-[#c5b8a9] mt-0.5 leading-snug">
                personalizado
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-3 bg-[#141311]/80 backdrop-blur-xs border border-[#332e29]/70 rounded-xs">
              <Clock className="w-3.5 h-3.5 text-[#c5a880] mb-1" />
              <span className="font-serif text-[11px] sm:text-[12px] text-[#f7f4ee] font-medium">
                Dedicado
              </span>
              <span className="font-sans text-[9px] text-[#c5b8a9] mt-0.5 leading-snug">
                no seu ritmo
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-3 bg-[#141311]/80 backdrop-blur-xs border border-[#332e29]/70 rounded-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880] mb-1" />
              <span className="font-serif text-[11px] sm:text-[12px] text-[#f7f4ee] font-medium">
                Reservado
              </span>
              <span className="font-sans text-[9px] text-[#c5b8a9] mt-0.5 leading-snug">
                tranquilidade
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Exclusivity Badge (Desktop Bottom-Right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1, delay: 0.5 },
        }}
        className="hidden xl:flex items-center gap-3 absolute bottom-10 right-12 z-10 bg-[#0e0d0c]/85 backdrop-blur-md px-5 py-3.5 border border-[#c5a880]/30 shadow-2xl"
      >
        <span className="w-8 h-8 rounded-full bg-[#c5a880]/15 flex items-center justify-center text-[#c5a880] shrink-0">
          <Leaf className="w-4 h-4 stroke-[1.75]" />
        </span>
        <div>
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#c5a880] font-semibold block">
            Exclusividade Luméra
          </span>
          <p className="font-serif text-[13px] text-[#f7f4ee] font-normal">
            Atendimento sensorial e privativo
          </p>
        </div>
      </motion.div>
    </section>
  );
}
