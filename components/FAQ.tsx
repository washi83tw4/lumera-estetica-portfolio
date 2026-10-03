'use client';

import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { useDemoNotice } from '@/components/DemoNoticeModal';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Preciso fazer uma avaliação antes do tratamento?',
    answer:
      'A avaliação ajuda a entender necessidades, preferências e o tipo de cuidado mais adequado para cada pessoa, respeitando as características individuais da sua pele e momento de vida.',
  },
  {
    id: 'faq-2',
    question: 'Como escolher o tratamento ideal?',
    answer:
      'O tratamento pode ser definido após uma conversa atenta sobre seus objetivos e expectativas, mapeando seu histórico cutâneo para uma indicação precisa e personalizada.',
  },
  {
    id: 'faq-3',
    question: 'Como faço para agendar um horário?',
    answer:
      'O agendamento é realizado diretamente pelo WhatsApp com nossa equipe de conciergerie, escolhendo o dia e o horário que melhor se adaptam à sua rotina.',
  },
  {
    id: 'faq-4',
    question: 'Posso remarcar meu horário?',
    answer:
      'Sim. Pedimos apenas uma antecedência mínima de 24 horas para que possamos reorganizar a agenda exclusiva e disponibilizar a suíte de atendimento com serenidade.',
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const { handleWhatsAppClick } = useDemoNotice();

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="duvidas"
      className="w-full bg-[#0e0d0c] text-[#f7f4ee] py-16 lg:py-28 border-t border-[#24211e]"
    >
      <div className="px-6 lg:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Left Title Column (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-6 bg-[#c5a880]" />
              <span className="font-sans text-[11px] uppercase tracking-[0.24em] text-[#c5a880] font-semibold">
                Dúvidas Frequentes
              </span>
            </div>
            <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[42px] text-[#f7f4ee] tracking-tight mb-4 font-normal">
              Informações para o seu momento de cuidado.
            </h2>
            <p className="font-sans text-[15px] text-[#c5b8a9] leading-relaxed mb-8 font-light">
              Separamos as principais respostas sobre nossos rituais, ambiente e agendamento. Se preferir, nossa equipe está à disposição para atendimento personalizado.
            </p>

            <div className="bg-[#141311] p-6 border border-[#2a2622] w-full max-w-md shadow-md">
              <span className="font-serif text-[17px] text-[#f7f4ee] block mb-2 font-medium">
                Ainda tem alguma dúvida?
              </span>
              <p className="font-sans text-[13px] text-[#c5b8a9] mb-4 leading-relaxed font-light">
                Fale conosco pelo WhatsApp. Responderemos com atenção e discrição todas as suas perguntas.
              </p>
              <button
                type="button"
                onClick={(e) =>
                  handleWhatsAppClick(e, 'Olá! Gostaria de tirar algumas dúvidas sobre os tratamentos da Luméra.')
                }
                className="inline-flex items-center justify-center gap-2 bg-[#c5a880] hover:bg-[#d4ba94] text-[#0a0908] font-sans text-[11px] uppercase tracking-[0.14em] font-semibold px-6 py-3 transition-colors shadow-xs cursor-pointer w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp</span>
              </button>
            </div>
          </div>

          {/* Right Accordion Column (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-[#141311] border border-[#2a2622] hover:border-[#c5a880]/40 transition-colors shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-btn-${item.id}`}
                    className="w-full p-5 lg:p-6 flex items-center justify-between text-left group cursor-pointer focus:outline-hidden focus-visible:ring-1 focus-visible:ring-[#c5a880]"
                  >
                    <span className="font-serif text-[17px] lg:text-[19px] text-[#f7f4ee] group-hover:text-[#c5a880] transition-colors font-medium pr-4">
                      {item.question}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#1e1c19] text-[#c5a880] flex items-center justify-center shrink-0 border border-[#2a2622]">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className={`grid transition-all duration-300 ease-in-out px-5 lg:px-6 ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 pb-5 pt-1 border-t border-[#24211e]'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-sans text-[14px] text-[#c5b8a9] leading-relaxed font-light">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
