'use client';

import React from 'react';
import { SlidersHorizontal, SunMedium, Sparkles } from 'lucide-react';

export function Experience() {
  return (
    <section
      id="experiencia"
      className="w-full bg-surface-container py-16 lg:py-24"
    >
      <div className="px-6 lg:px-16 max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 lg:mb-16">
          <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold mb-2 block">
            Experiência Luméra
          </span>
          <h2 className="font-serif text-[28px] lg:text-[40px] text-primary tracking-tight font-normal">
            A base do nosso método
          </h2>
        </div>

        {/* Asymmetrical Triptych Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Pilar 01 - Featured large card (5 cols on desktop) */}
          <div className="lg:col-span-5 bg-surface p-7 sm:p-8 lg:p-12 shadow-xs flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow border-t-2 border-secondary">
            <div className="flex items-start justify-between mb-6 lg:mb-8">
              <span className="font-serif text-5xl lg:text-7xl text-secondary/30 leading-none select-none font-light">
                01
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold pt-2">
                Pilar Fundamental
              </span>
            </div>

            <div className="my-auto">
              <h3 className="font-serif text-[22px] lg:text-[28px] text-primary mb-3 lg:mb-4 font-medium">
                Cuidado personalizado
              </h3>
              <p className="font-sans text-[14px] lg:text-[15px] text-on-surface-variant leading-relaxed mb-6">
                Cada atendimento considera necessidades e objetivos individuais. Ouvimos sua história, mapeamos as particularidades da sua pele e traçamos um plano harmônico sob medida.
              </p>
            </div>

            <div className="pt-6 border-t border-outline-variant/30 flex items-center justify-between">
              <span className="font-sans text-[10px] uppercase text-secondary tracking-wider font-semibold">
                Diagnóstico Individual
              </span>
              <SlidersHorizontal className="w-5 h-5 text-secondary stroke-[1.5]" />
            </div>
          </div>

          {/* Pilares 02 & 03 - Stacked cards (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Pilar 02 */}
            <div className="bg-surface p-7 sm:p-8 lg:p-10 shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow border-l-2 border-outline-variant/40">
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-2xl lg:text-3xl text-secondary/40 leading-none font-light">
                      02
                    </span>
                    <h3 className="font-serif text-[19px] lg:text-[22px] text-primary font-medium">
                      Ambiente acolhedor
                    </h3>
                  </div>
                  <SunMedium className="w-5 h-5 text-secondary stroke-[1.5] shrink-0" />
                </div>
                <p className="font-sans text-[14px] lg:text-[15px] text-on-surface-variant leading-relaxed sm:pl-10">
                  Uma experiência tranquila, confortável e cuidadosamente preparada. Da iluminação indireta à temperatura do leito, criamos um refúgio do agito metropolitano.
                </p>
              </div>
              <div className="mt-4 pt-4 sm:pl-10 flex items-center">
                <span className="font-sans text-[10px] uppercase text-secondary tracking-wider font-semibold">
                  Acústica &amp; Iluminação
                </span>
              </div>
            </div>

            {/* Pilar 03 */}
            <div className="bg-surface p-7 sm:p-8 lg:p-10 shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow border-l-2 border-outline-variant/40">
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-2xl lg:text-3xl text-secondary/40 leading-none font-light">
                      03
                    </span>
                    <h3 className="font-serif text-[19px] lg:text-[22px] text-primary font-medium">
                      Beleza natural
                    </h3>
                  </div>
                  <Sparkles className="w-5 h-5 text-secondary stroke-[1.5] shrink-0" />
                </div>
                <p className="font-sans text-[14px] lg:text-[15px] text-on-surface-variant leading-relaxed sm:pl-10">
                  Tratamentos pensados para valorizar características individuais sem excessos. Priorizamos o brilho espontâneo e a regeneração celular sustentável a longo prazo.
                </p>
              </div>
              <div className="mt-4 pt-4 sm:pl-10 flex items-center">
                <span className="font-sans text-[10px] uppercase text-secondary tracking-wider font-semibold">
                  Respeito à Fisiologia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
