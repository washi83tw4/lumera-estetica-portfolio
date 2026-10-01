'use client';

import React from 'react';
import Image from 'next/image';
import { Hourglass, Leaf } from 'lucide-react';

export function About() {
  return (
    <section
      id="sobre"
      className="w-full py-16 lg:py-28 overflow-hidden bg-surface"
    >
      <div className="px-6 lg:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Architectural Studio Image (6 cols on desktop) */}
          <div className="lg:col-span-6 relative">
            <div className="relative shadow-md overflow-hidden aspect-[4/3] lg:aspect-[16/11] bg-surface-container border border-outline-variant/30">
              <Image
                src="/images/lumera/ambiente-lumera.webp"
                alt="Arquitetura de interiores do estúdio Luméra com curvas minerais e balcão em travertino"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Architectural Caption */}
            <div className="mt-3.5 flex items-center justify-between text-on-surface-variant px-1">
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
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold mb-2 block">
              Conceito &amp; Filosofia
            </span>
            <h2 className="font-serif text-[28px] lg:text-[40px] text-primary tracking-tight mb-5 font-normal">
              Beleza também é sentir-se bem.
            </h2>
            <p className="font-sans text-[16px] lg:text-[17px] text-on-surface mb-5 leading-relaxed">
              Na Luméra, cada detalhe foi pensado para transformar o momento do tratamento em uma experiência de cuidado. Um ambiente acolhedor, atendimento atento e protocolos personalizados para quem valoriza beleza, bem-estar e naturalidade.
            </p>
            <p className="font-sans text-[14px] lg:text-[15px] text-on-surface-variant mb-7 leading-relaxed">
              Acreditamos que a estética autêntica não busca padronização, mas sim o realce sublime da singularidade. Em nosso espaço, você desacelera o ritmo acelerado da rotina diária para ser acolhido por aromas suaves, música sutil e cuidados dedicados.
            </p>

            {/* 2 concept highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full pt-6 bg-surface-container-low p-6 border border-outline-variant/30">
              <div className="flex flex-col">
                <span className="text-secondary mb-2">
                  <Hourglass className="w-6 h-6 stroke-[1.5]" />
                </span>
                <h4 className="font-serif text-[17px] text-primary mb-1 font-medium">
                  Ritmo Calmo
                </h4>
                <p className="font-sans text-[13px] text-on-surface-variant leading-relaxed">
                  Sem pressa ou atendimentos sobrepostos. O tempo do estúdio é exclusivamente seu.
                </p>
              </div>

              <div className="flex flex-col">
                <span className="text-secondary mb-2">
                  <Leaf className="w-6 h-6 stroke-[1.5]" />
                </span>
                <h4 className="font-serif text-[17px] text-primary mb-1 font-medium">
                  Cosmética Limpa
                </h4>
                <p className="font-sans text-[13px] text-on-surface-variant leading-relaxed">
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
