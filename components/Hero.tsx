'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowDown, Calendar, User, Clock, Sparkles } from 'lucide-react';
import { useDemoNotice } from '@/components/DemoNoticeModal';

export function Hero() {
  const { handleWhatsAppClick } = useDemoNotice();

  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden px-6 lg:px-16 max-w-[1440px] mx-auto pt-8 pb-14 lg:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* Text Column (7 cols on desktop) */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Tagline Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-container mb-4 lg:mb-6 shadow-xs border border-outline-variant/30">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-semibold">
              Estética facial • corporal • bem-estar
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-[32px] sm:text-[38px] lg:text-[54px] lg:leading-[62px] text-primary tracking-tight mb-4 lg:mb-6 max-w-xl font-normal">
            Sua beleza, cuidada com intenção.
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-[15px] lg:text-[17px] text-on-surface-variant max-w-lg mb-6 lg:mb-8 leading-relaxed">
            Tratamentos faciais e corporais pensados para valorizar sua beleza natural em uma experiência de cuidado, conforto e bem-estar.
          </p>

          {/* CTA Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8 lg:mb-0">
            <button
              type="button"
              onClick={(e) => handleWhatsAppClick(e, 'Olá! Gostaria de agendar uma avaliação na Luméra.')}
              className="inline-flex items-center justify-center bg-secondary hover:bg-on-secondary-container text-on-secondary font-sans text-[13px] uppercase tracking-[0.12em] font-semibold px-7 lg:px-8 py-4 transition-all shadow-md group cursor-pointer"
            >
              <Calendar className="w-4 h-4 mr-2 lg:hidden stroke-[1.75]" />
              <span>Agendar avaliação</span>
              <ArrowRight className="hidden lg:inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#tratamentos"
              className="inline-flex items-center justify-center bg-surface-container-high hover:bg-surface-container-highest text-primary font-sans text-[13px] uppercase tracking-[0.12em] font-semibold px-7 lg:px-8 py-4 transition-colors text-center"
            >
              <span>Conhecer tratamentos</span>
              <ArrowDown className="lg:hidden ml-2 w-4 h-4" />
            </a>
          </div>

          {/* Desktop Micro-stats strip (hidden on mobile, shown on lg) */}
          <div className="hidden lg:grid mt-12 pt-8 w-full grid-cols-3 gap-6 max-w-lg border-t border-outline-variant/30">
            <div className="flex flex-col pr-4 border-r border-outline-variant/40">
              <span className="block font-serif text-[17px] text-primary mb-1 font-medium">
                Atendimento individual
              </span>
              <span className="font-sans text-[12px] text-on-surface-variant leading-snug">
                Cuidado pensado para cada pessoa
              </span>
            </div>
            <div className="flex flex-col px-4 border-r border-outline-variant/40">
              <span className="block font-serif text-[17px] text-primary mb-1 font-medium">
                Tempo dedicado
              </span>
              <span className="font-sans text-[12px] text-on-surface-variant leading-snug">
                Sessões no ritmo de cada tratamento
              </span>
            </div>
            <div className="flex flex-col pl-4">
              <span className="block font-serif text-[17px] text-primary mb-1 font-medium">
                Ambiente reservado
              </span>
              <span className="font-sans text-[12px] text-on-surface-variant leading-snug">
                Conforto acústico e tranquilidade
              </span>
            </div>
          </div>
        </div>

        {/* Editorial Image Presentation (5 cols on desktop, full width on mobile) */}
        <div className="lg:col-span-5 relative mt-2 lg:mt-0 flex flex-col items-center">
          {/* Desktop Arched Vessel */}
          <div className="relative w-full max-w-[420px]">
            {/* Organic Backing Backdrop Tone (desktop arch) */}
            <div className="hidden lg:block absolute -inset-4 bg-surface-container rounded-t-[140px] rounded-b-none -z-10 translate-y-6"></div>

            {/* Container: Arched on desktop, rectangular clean on mobile */}
            <div className="relative w-full overflow-hidden shadow-xl lg:rounded-t-[130px] lg:rounded-b-none bg-surface-container-low aspect-[4/5] lg:aspect-[4/5.4]">
              <Image
                src="/images/lumera/hero-estetica.webp"
                alt="Retrato sereno de cliente em momento de cuidado estético facial na Luméra"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Subtle Scrim Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Editorial Badge */}
            {/* Desktop badge */}
            <div className="hidden lg:block absolute -bottom-4 -left-2 sm:-left-6 bg-surface-container-lowest/95 backdrop-blur-sm p-4 sm:p-5 shadow-lg max-w-[220px] border border-outline-variant/30">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-secondary font-semibold">
                  Exclusividade
                </span>
              </div>
              <p className="font-sans text-[13px] text-on-surface font-medium leading-snug">
                Atendimento personalizado e exclusivo
              </p>
            </div>

            {/* Mobile floating badge */}
            <div className="lg:hidden absolute -bottom-3 left-4 right-4 bg-surface/95 backdrop-blur-md px-4 py-2.5 shadow-md flex items-center gap-2.5 border border-outline-variant/40">
              <Sparkles className="w-4 h-4 text-secondary shrink-0" />
              <p className="font-sans text-[11px] uppercase tracking-wider text-on-surface font-semibold truncate">
                Atendimento personalizado e exclusivo
              </p>
            </div>
          </div>

          {/* Mobile Metrics Ribbon (shown on mobile, hidden on lg) */}
          <div className="grid lg:hidden grid-cols-3 gap-2 mt-8 pt-2 w-full">
            <div className="flex flex-col items-center text-center p-3 bg-surface-container-low border border-outline-variant/20">
              <User className="w-4 h-4 text-secondary mb-1" />
              <span className="font-serif text-[12px] sm:text-[13px] text-primary font-medium">
                Atendimento individual
              </span>
              <span className="font-sans text-[10px] text-on-surface-variant mt-0.5 leading-snug">
                cuidado pensado para cada pessoa
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-3 bg-surface-container-low border border-outline-variant/20">
              <Clock className="w-4 h-4 text-secondary mb-1" />
              <span className="font-serif text-[12px] sm:text-[13px] text-primary font-medium">
                Tempo dedicado
              </span>
              <span className="font-sans text-[10px] text-on-surface-variant mt-0.5 leading-snug">
                no ritmo do seu momento
              </span>
            </div>
            <div className="flex flex-col items-center text-center p-3 bg-surface-container-low border border-outline-variant/20">
              <Sparkles className="w-4 h-4 text-secondary mb-1" />
              <span className="font-serif text-[12px] sm:text-[13px] text-primary font-medium">
                Ambiente reservado
              </span>
              <span className="font-sans text-[10px] text-on-surface-variant mt-0.5 leading-snug">
                conforto e tranquilidade
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
