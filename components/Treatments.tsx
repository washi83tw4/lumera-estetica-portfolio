'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, ArrowRight, MessageCircle } from 'lucide-react';
import { useDemoNotice } from '@/components/DemoNoticeModal';

interface Treatment {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  value: string;
}

const treatments: Treatment[] = [
  {
    id: 'treatment-1',
    number: '01',
    title: 'Limpeza de Pele',
    category: 'Purificação Celular & Revitalização',
    description:
      'Cuidado voltado à limpeza, hidratação e sensação de pele renovada, adaptado às necessidades de cada pessoa. Inclui higienização suave, extração delicada e máscara calmante.',
    duration: 'Conforme o protocolo',
    value: 'Sob consulta',
  },
  {
    id: 'treatment-2',
    number: '02',
    title: 'Revitalização Facial',
    category: 'Luminosidade & Equilíbrio Hidrolipídico',
    description:
      'Protocolo de cuidado e hidratação pensado para favorecer uma aparência saudável e luminosa. Aplicação de bioativos botânicos puros e manobras delicadas de drenagem.',
    duration: 'Conforme o protocolo',
    value: 'Sob consulta',
  },
  {
    id: 'treatment-3',
    number: '03',
    title: 'Massagem Relaxante',
    category: 'Alívio Muscular & Calmaria Mental',
    description:
      'Uma experiência de cuidado com movimentos suaves e ambiente tranquilo, pensada para proporcionar relaxamento e bem-estar em um ritmo sereno.',
    duration: 'Conforme o protocolo',
    value: 'Sob consulta',
  },
  {
    id: 'treatment-4',
    number: '04',
    title: 'Drenagem Linfática',
    category: 'Estímulo Circulatório & Descompressão',
    description:
      'Movimentos precisos e ritmados para reduzir a retenção de líquidos, ativar a circulação e promover uma sensação profunda de leveza.',
    duration: 'Conforme o protocolo',
    value: 'Sob consulta',
  },
  {
    id: 'treatment-5',
    number: '05',
    title: 'Cuidados Corporais',
    category: 'Remodelagem Tátil & Nutrição Cutânea',
    description:
      'Protocolos sob medida que combinam esfoliação mineral, hidratação intensiva e toques modeladores para uma pele macia e tonificada.',
    duration: 'Conforme o protocolo',
    value: 'Sob consulta',
  },
];

export function Treatments() {
  const [openId, setOpenId] = useState<string>('treatment-1');
  const { handleWhatsAppClick } = useDemoNotice();

  const toggleTreatment = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section
      id="tratamentos"
      className="w-full py-16 lg:py-24 bg-[#11100e] text-[#f7f4ee] border-t border-[#24211e]"
    >
      <div className="w-full px-6 lg:px-16 max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-[#c5a880]" />
            <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.24em] text-[#c5a880] font-semibold">
              Rituais &amp; Procedimentos
            </span>
          </div>
          <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[44px] text-[#f7f4ee] tracking-tight mb-4 font-normal">
            Cuidados pensados para você
          </h2>
          <p className="font-sans text-[15px] lg:text-[17px] text-[#c5b8a9] leading-relaxed font-light">
            Cada tratamento começa entendendo sua pele, seus objetivos e o tipo de cuidado que faz sentido para você.
          </p>
        </div>

        {/* Asymmetrical Layout: Accordion List + Feature Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Accordion List (7 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {treatments.map((treatment) => {
              const isOpen = openId === treatment.id;

              return (
                <div
                  key={treatment.id}
                  className="bg-[#161513] p-5 lg:p-7 border border-[#2a2622] hover:border-[#c5a880]/40 transition-all shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleTreatment(treatment.id)}
                    aria-expanded={isOpen}
                    aria-controls={`panel-${treatment.id}`}
                    id={`btn-${treatment.id}`}
                    className="w-full flex items-start justify-between text-left group cursor-pointer focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#c5a880]"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-serif text-2xl lg:text-3xl text-[#c5a880]/75 font-light select-none">
                        {treatment.number}
                      </span>
                      <div>
                        <h3 className="font-serif text-[18px] lg:text-[22px] text-[#f7f4ee] group-hover:text-[#c5a880] transition-colors font-medium">
                          {treatment.title}
                        </h3>
                        <span className="font-sans text-[10px] uppercase tracking-wider text-[#c5b8a9] font-medium mt-0.5 block">
                          {treatment.category}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-[#c5b8a9] transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#c5a880]' : ''
                      }`}
                    />
                  </button>

                  {/* Collapsible Panel */}
                  <div
                    id={`panel-${treatment.id}`}
                    role="region"
                    aria-labelledby={`btn-${treatment.id}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-[#2a2622]'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[#c5b8a9] font-sans text-[14px] leading-relaxed font-light">
                        {treatment.description}
                      </p>
                      <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <span className="font-sans text-[10px] uppercase text-[#c5a880] tracking-widest font-semibold">
                          Duração: {treatment.duration}
                        </span>
                        <button
                          type="button"
                          onClick={(e) =>
                            handleWhatsAppClick(
                              e,
                              `Olá! Gostaria de consultar a disponibilidade do tratamento: ${treatment.title}`
                            )
                          }
                          className="font-sans text-[11px] uppercase text-[#c5a880] font-semibold hover:text-[#d4ba94] underline decoration-1 underline-offset-4 cursor-pointer"
                        >
                          Consultar disponibilidade
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Sub-action link */}
            <div className="pt-2">
              <button
                type="button"
                onClick={(e) =>
                  handleWhatsAppClick(e, 'Olá! Gostaria de conversar sobre o tratamento ideal para mim.')
                }
                className="inline-flex items-center gap-2 font-sans text-[12px] uppercase tracking-wider text-[#c5a880] hover:text-[#d4ba94] font-semibold transition-colors group cursor-pointer text-left"
              >
                <span>Conversar sobre o tratamento ideal via WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Visual Context Card (5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative bg-[#161513] shadow-md overflow-hidden p-3.5 pb-6 border border-[#2a2622]">
              <div className="aspect-[4/3] sm:aspect-[4/3.5] lg:aspect-[4/5] w-full overflow-hidden bg-[#0e0d0c] mb-5 relative">
                <Image
                  src="/images/lumera/tratamento-facial.webp"
                  alt="Aplicação delicada de sérum facial botânico com mãos especializadas na Luméra"
                  fill
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 480px"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="px-3">
                <span className="font-sans text-[10px] uppercase tracking-[0.18em] text-[#c5a880] font-semibold block mb-1">
                  Toque Curativo
                </span>
                <p className="font-serif text-[20px] text-[#f7f4ee] mb-2 font-medium">
                  A precisão do toque consciente.
                </p>
                <p className="font-sans text-[13px] text-[#c5b8a9] leading-relaxed font-light">
                  Cada formulação e manipulação manual respeita a barreira cutânea, promovendo relaxamento e restauração biológica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
