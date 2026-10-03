'use client';

import React from 'react';
import Image from 'next/image';
import { Hourglass, Leaf } from 'lucide-react';

export function About() {
  return (
    <section
      id="sobre"
      className="w-full py-16 lg:py-28 overflow-hidden bg-[#f7f4ee] text-[#121110] border-t border-[#e6ded4]"
    >
      <div className="px-6 lg:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Architectural Studio Image (6 cols on desktop) */}
          <div className="lg:col-span-6 relative">
            <div className="relative shadow-lg overflow-hidden aspect-[4/3] lg:aspect-[16/11] bg-[#ede6dc] border border-[#dcd3c7]">
              <Image
                src="/images/lumera/ambiente-lumera.webp"
                alt="Arquitetura de interiores do estúdio Luméra com curvas minerais e balcão em travertino"
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 650px"
                className="object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Architectural Caption */}
            <div className="mt-3.5 flex items-center justify-between text-[#6b6055] px-1">
              <span className="font-sans text-[10px] uppercase tracking-widest font-semibold">
                Santuário Luméra • Arquitetura Sensorial
              </span>
              <span className="font-sans text-[10px] uppercase tracking-widest font-semibold">
                01 / Ambientes Privativos
              </span>
            </div>
          </div>

          {/* Concept Narrative (6 cols on desktop) */}
          <div className="lg:col-span-6 lg:pl-4 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-6 bg-[#8f6e48]" />
              <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#8f6e48] font-semibold">
                Conceito &amp; Filosofia
              </span>
            </div>
            <h2 className="font-serif text-[30px] lg:text-[42px] text-[#121110] tracking-tight mb-5 font-normal">
              Beleza também é sentir-se bem.
            </h2>
            <p className="font-sans text-[16px] lg:text-[17px] text-[#24211e] mb-5 leading-relaxed font-normal">
              Na Luméra, cada detalhe foi pensado para transformar o momento do tratamento em uma experiência de cuidado. Um ambiente acolhedor, atendimento atento e protocolos personalizados para quem valoriza beleza, bem-estar e naturalidade.
            </p>
            <p className="font-sans text-[14px] lg:text-[15px] text-[#5c534a] mb-7 leading-relaxed font-light">
              Acreditamos que a estética autêntica não busca padronização, mas sim o realce sublime da singularidade. Em nosso espaço, você desacelera o ritmo acelerado da rotina diária para ser acolhido por aromas suaves, música sutil e cuidados dedicados.
            </p>

            {/* 2 concept highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full pt-6 bg-[#efebe1] p-6 border border-[#dcd3c7]">
              <div className="flex flex-col">
                <span className="text-[#8f6e48] mb-2">
                  <Hourglass className="w-6 h-6 stroke-[1.5]" />
                </span>
                <h4 className="font-serif text-[17px] text-[#121110] mb-1 font-medium">
                  Ritmo Calmo
                </h4>
                <p className="font-sans text-[13px] text-[#5c534a] leading-relaxed font-light">
                  Sem pressa ou atendimentos sobrepostos. O tempo do estúdio é exclusivamente seu.
                </p>
              </div>

              <div className="flex flex-col">
                <span className="text-[#8f6e48] mb-2">
                  <Leaf className="w-6 h-6 stroke-[1.5]" />
                </span>
                <h4 className="font-serif text-[17px] text-[#121110] mb-1 font-medium">
                  Cosmética Limpa
                </h4>
                <p className="font-sans text-[13px] text-[#5c534a] leading-relaxed font-light">
                  Seleção cuidadosa de texturas e ingredientes botânicos, priorizando uma experiência agradável e delicada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
