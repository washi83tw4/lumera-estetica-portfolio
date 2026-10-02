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
    title: 'Cuidados Corporais',
    category: 'Modelagem Consciente & Desintoxicação',
    description:
      'Protocolos personalizados de cuidado corporal definidos conforme objetivos e preferências individuais, priorizando leveza, conforto e equilíbrio.',
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
      className="w-full bg-surface-container-low py-16 lg:py-24"
    >
      <div className="px-6 lg:px-16 max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 lg:mb-16">
          <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold mb-2 block">
            Rituais &amp; Cuidados
          </span>
          <h2 className="font-serif text-[28px] lg:text-[40px] text-primary tracking-tight mb-3 lg:mb-4 font-normal">
            Cuidados pensados para você
          </h2>
          <p className="font-sans text-[15px] lg:text-[17px] text-on-surface-variant leading-relaxed">
            Cada tratamento começa entendendo sua pele, seus objetivos e o tipo de cuidado que faz sentido para você.
          </p>
        </div>

        {/* Asymmetrical Layout: Accordion List + Feature Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          {/* Accordion List (7 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {treatments.map((treatment) => {
              const isOpen = openId === treatment.id;

              return (
                <div
                  key={treatment.id}
                  className="bg-surface p-5 lg:p-7 shadow-xs border border-outline-variant/30 transition-all hover:shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleTreatment(treatment.id)}
                    aria-expanded={isOpen}
                    aria-controls={`panel-${treatment.id}`}
                    id={`btn-${treatment.id}`}
                    className="w-full flex items-start justify-between text-left group cursor-pointer focus:outline-hidden focus-visible:ring-1 focus-visible:ring-secondary"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-serif text-2xl lg:text-3xl text-secondary/70 font-light select-none">
                        {treatment.number}
                      </span>
                      <div>
                        <h3 className="font-serif text-[18px] lg:text-[22px] text-primary group-hover:text-secondary transition-colors font-medium">
                          {treatment.title}
                        </h3>
                        <span className="font-sans text-[10px] uppercase tracking-wider text-on-surface-variant font-medium mt-0.5 block">
                          {treatment.category}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-on-surface-variant transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-secondary' : ''
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
                        ? 'grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-outline-variant/20'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-on-surface-variant font-sans text-[14px] leading-relaxed">
                        {treatment.description}
                      </p>
                      <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3 text-xs">
                        <span className="font-sans text-[10px] uppercase text-secondary tracking-widest font-semibold">
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
                          className="font-sans text-[10px] uppercase text-primary font-semibold hover:text-secondary underline decoration-1 underline-offset-4 cursor-pointer"
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
                className="inline-flex items-center gap-2 font-sans text-[12px] uppercase tracking-wider text-secondary hover:text-on-secondary-container font-semibold transition-colors group cursor-pointer text-left"
              >
                <span>Conversar sobre o tratamento ideal via WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Visual Context Card (5 columns on desktop) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative bg-surface shadow-xs overflow-hidden p-3 pb-6 border border-outline-variant/30">
              <div className="aspect-[4/3] sm:aspect-[4/3.5] lg:aspect-[4/5] w-full overflow-hidden bg-surface-container mb-5 relative">
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
                <span className="font-sans text-[10px] uppercase tracking-[0.16em] text-secondary font-semibold block mb-1">
                  Toque Curativo
                </span>
                <p className="font-serif text-[20px] text-primary mb-2 font-medium">
                  A precisão do toque consciente.
                </p>
                <p className="font-sans text-[13px] text-on-surface-variant leading-relaxed">
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
