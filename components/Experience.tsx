'use client';

import React from 'react';
import { SlidersHorizontal, SunMedium, Leaf } from 'lucide-react';

export function Experience() {
  return (
    <section
      id="experiencia"
      className="w-full bg-[#0c0b0a] text-[#f7f4ee] py-16 lg:py-28 border-t border-[#24211e]"
    >
      <div className="px-6 lg:px-16 max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-[#c5a880]" />
            <span className="font-sans text-[11px] uppercase tracking-[0.24em] text-[#c5a880] font-semibold">
              Experiência Luméra
            </span>
            <span className="h-[1px] w-6 bg-[#c5a880]" />
          </div>
          <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[44px] text-[#f7f4ee] tracking-tight font-normal">
            A base do nosso método
          </h2>
        </div>

        {/* Asymmetrical Triptych Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Pilar 01 - Featured large card (5 cols on desktop) */}
          <div className="lg:col-span-5 bg-[#141311] p-7 sm:p-8 lg:p-12 border-t-2 border-[#c5a880] border-x border-b border-[#24211e] flex flex-col justify-between relative overflow-hidden group hover:border-[#c5a880]/60 transition-all shadow-md">
            <div className="flex items-start justify-between mb-6 lg:mb-8">
              <span className="font-serif text-5xl lg:text-7xl text-[#c5a880]/30 leading-none select-none font-light">
                01
              </span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#c5a880] font-semibold pt-2">
                Pilar Fundamental
              </span>
            </div>

            <div className="my-auto">
              <h3 className="font-serif text-[22px] lg:text-[28px] text-[#f7f4ee] mb-3 lg:mb-4 font-medium">
                Cuidado personalizado
              </h3>
              <p className="font-sans text-[14px] lg:text-[15px] text-[#c5b8a9] leading-relaxed mb-6 font-light">
                Cada atendimento considera necessidades e objetivos individuais. Ouvimos sua história, mapeamos as particularidades da sua pele e traçamos um plano harmônico sob medida.
              </p>
            </div>

            <div className="pt-6 border-t border-[#24211e] flex items-center justify-between">
              <span className="font-sans text-[10px] uppercase text-[#c5a880] tracking-wider font-semibold">
                Diagnóstico Individual
              </span>
              <SlidersHorizontal className="w-5 h-5 text-[#c5a880] stroke-[1.5]" />
            </div>
          </div>

          {/* Pilares 02 & 03 - Stacked cards (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Pilar 02 */}
            <div className="bg-[#141311] p-7 sm:p-8 lg:p-10 border-l-2 border-[#c5a880] border-y border-r border-[#24211e] flex flex-col justify-between group hover:border-[#c5a880]/60 transition-all shadow-md">
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-2xl lg:text-3xl text-[#c5a880]/50 leading-none font-light">
                      02
                    </span>
                    <h3 className="font-serif text-[19px] lg:text-[22px] text-[#f7f4ee] font-medium">
                      Ambiente sereno
                    </h3>
                  </div>
                  <SunMedium className="w-5 h-5 text-[#c5a880] stroke-[1.5] shrink-0" />
                </div>
                <p className="font-sans text-[14px] lg:text-[15px] text-[#c5b8a9] leading-relaxed sm:pl-10 font-light">
                  Espaço reservado, iluminação suave e temperatura agradável para o seu conforto. Criamos uma atmosfera sensorial onde o estresse da cidade dá lugar a uma pausa regeneradora.
                </p>
              </div>
              <div className="mt-4 pt-4 sm:pl-10 flex items-center border-t border-[#24211e]">
                <span className="font-sans text-[10px] uppercase text-[#c5a880] tracking-wider font-semibold">
                  Conforto &amp; Calma
                </span>
              </div>
            </div>

            {/* Pilar 03 */}
            <div className="bg-[#141311] p-7 sm:p-8 lg:p-10 border-l-2 border-[#c5a880] border-y border-r border-[#24211e] flex flex-col justify-between group hover:border-[#c5a880]/60 transition-all shadow-md">
              <div>
                <div className="flex items-baseline justify-between mb-3">
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-2xl lg:text-3xl text-[#c5a880]/50 leading-none font-light">
                      03
                    </span>
                    <h3 className="font-serif text-[19px] lg:text-[22px] text-[#f7f4ee] font-medium">
                      Beleza natural
                    </h3>
                  </div>
                  <Leaf className="w-5 h-5 text-[#c5a880] stroke-[1.5] shrink-0" />
                </div>
                <p className="font-sans text-[14px] lg:text-[15px] text-[#c5b8a9] leading-relaxed sm:pl-10 font-light">
                  Tratamentos pensados para valorizar características individuais sem excessos. Priorizamos o brilho espontâneo e a regeneração celular sustentável a longo prazo.
                </p>
              </div>
              <div className="mt-4 pt-4 sm:pl-10 flex items-center border-t border-[#24211e]">
                <span className="font-sans text-[10px] uppercase text-[#c5a880] tracking-wider font-semibold">
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
