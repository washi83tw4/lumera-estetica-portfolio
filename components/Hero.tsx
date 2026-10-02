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
      className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-16 max-w-[1440px] mx-auto pt-6 pb-14 lg:py-20"
    >
      {/* Unified Panoramic Banner Vessel */}
      <div className="relative w-full rounded-2xl lg:rounded-3xl bg-surface-container-low/70 border border-outline-variant/35 p-6 sm:p-8 lg:p-14 overflow-hidden shadow-xs">
        {/* Ambient subtle floating aura background */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -right-20 -top-20 w-[450px] lg:w-[650px] h-[450px] lg:h-[650px] rounded-full bg-secondary/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -left-20 -bottom-20 w-[400px] lg:w-[550px] h-[400px] lg:h-[550px] rounded-full bg-surface-tint/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
          {/* Left Column: Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Clean Editorial Kicker (Zero AI pills, zero facial mapping dots) */}
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
              <span className="h-[1px] w-6 bg-secondary/70"></span>
              <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.24em] text-secondary font-semibold">
                Estética facial · corporal · bem-estar
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[34px] sm:text-[42px] lg:text-[56px] lg:leading-[64px] text-primary tracking-tight mb-4 lg:mb-6 max-w-xl font-normal text-balance">
              Sua beleza, cuidada com intenção.
            </h1>

            {/* Subtitle */}
            <p className="font-sans text-[15px] sm:text-[16px] lg:text-[17px] text-on-surface-variant max-w-lg mb-7 lg:mb-9 leading-relaxed font-light">
              Tratamentos faciais e corporais pensados para valorizar sua beleza natural em uma experiência de cuidado, conforto e bem-estar.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8 lg:mb-10">
              <button
                type="button"
                onClick={(e) => handleWhatsAppClick(e, 'Olá! Gostaria de agendar uma avaliação na Luméra.')}
                className="inline-flex items-center justify-center bg-secondary hover:bg-on-secondary-container text-on-secondary font-sans text-[13px] uppercase tracking-[0.12em] font-semibold px-8 py-4 transition-all shadow-md group cursor-pointer"
              >
                <Calendar className="w-4 h-4 mr-2 lg:hidden stroke-[1.75]" />
                <span>Agendar avaliação</span>
                <ArrowRight className="hidden lg:inline-block ml-2 w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href="#tratamentos"
                className="inline-flex items-center justify-center bg-surface hover:bg-surface-container-high text-primary font-sans text-[13px] uppercase tracking-[0.12em] font-semibold px-8 py-4 transition-colors text-center border border-outline-variant/40"
              >
                <span>Conhecer tratamentos</span>
                <ArrowDown className="lg:hidden ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Micro-Pillars Strip (Desktop) */}
            <div className="hidden lg:grid pt-8 w-full grid-cols-3 gap-6 max-w-lg border-t border-outline-variant/35">
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
          </motion.div>

          {/* Right Column: Perfect Photography with Meditative Floating Animation */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            {/* Smooth Floating Container */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-full max-w-[420px]"
            >
              {/* Organic Backing Backdrop Tone (desktop arch) */}
              <div
                className="hidden lg:block absolute -inset-3.5 bg-surface-container rounded-t-[140px] rounded-b-none -z-10 translate-y-5 border border-outline-variant/30"
                aria-hidden="true"
              />

              {/* High-Resolution Portrait Container */}
              <div className="relative w-full overflow-hidden shadow-xl rounded-2xl lg:rounded-t-[130px] lg:rounded-b-none bg-surface-container-low aspect-[4/5] lg:aspect-[4/5.4] border border-outline-variant/40">
                <Image
                  src="/images/lumera/hero-estetica.webp"
                  alt="Retrato sereno de cliente em momento de cuidado estético facial na Luméra"
                  fill
                  priority
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle Scrim Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Editorial Badge (Desktop) */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.6,
                }}
                className="hidden lg:block absolute -bottom-5 -left-4 bg-surface/95 backdrop-blur-md p-4 sm:p-5 shadow-lg max-w-[230px] border border-outline-variant/40"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <Leaf className="w-3.5 h-3.5 text-secondary stroke-[1.75]" />
                  <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-secondary font-semibold">
                    Exclusividade
                  </span>
                </div>
                <p className="font-sans text-[13px] text-on-surface font-medium leading-snug">
                  Atendimento personalizado e exclusivo
                </p>
              </motion.div>

              {/* Floating Badge (Mobile) */}
              <div className="lg:hidden absolute -bottom-3 left-3 right-3 bg-surface/95 backdrop-blur-md px-4 py-2.5 shadow-md flex items-center gap-2.5 border border-outline-variant/40">
                <Leaf className="w-4 h-4 text-secondary shrink-0 stroke-[1.75]" />
                <p className="font-sans text-[11px] uppercase tracking-wider text-on-surface font-semibold truncate">
                  Atendimento personalizado e exclusivo
                </p>
              </div>
            </motion.div>

            {/* Mobile Metrics Ribbon */}
            <div className="grid lg:hidden grid-cols-3 gap-2 mt-8 pt-2 w-full">
              <div className="flex flex-col items-center text-center p-3 bg-surface border border-outline-variant/30">
                <User className="w-4 h-4 text-secondary mb-1" />
                <span className="font-serif text-[12px] sm:text-[13px] text-primary font-medium">
                  Atendimento individual
                </span>
                <span className="font-sans text-[10px] text-on-surface-variant mt-0.5 leading-snug">
                  cuidado pensado para cada pessoa
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-surface border border-outline-variant/30">
                <Clock className="w-4 h-4 text-secondary mb-1" />
                <span className="font-serif text-[12px] sm:text-[13px] text-primary font-medium">
                  Tempo dedicado
                </span>
                <span className="font-sans text-[10px] text-on-surface-variant mt-0.5 leading-snug">
                  no ritmo do seu momento
                </span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-surface border border-outline-variant/30">
                <ShieldCheck className="w-4 h-4 text-secondary mb-1" />
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
      </div>
    </section>
  );
}
