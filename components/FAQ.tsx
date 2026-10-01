'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
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
      'A avaliação ajuda a entender necessidades, preferências e o tipo de cuidado mais adequado para cada pessoa, respeitando as características individuais da pele.',
  },
  {
    id: 'faq-2',
    question: 'Como escolher o tratamento ideal?',
    answer:
      'O tratamento pode ser definido após uma conversa sobre seus objetivos e necessidades, considerando seu momento e a resposta da sua pele.',
  },
  {
    id: 'faq-3',
    question: 'Como faço para agendar?',
    answer:
      'O agendamento poderá ser realizado pelo canal de contato configurado para o projeto, de forma rápida e acolhedora.',
  },
  {
    id: 'faq-4',
    question: 'Posso remarcar meu horário?',
    answer:
      'As regras de cancelamento e reagendamento devem ser definidas pelo estabelecimento responsável, sempre buscando o melhor atendimento mútuo.',
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
      className="w-full bg-surface-container-low py-16 lg:py-24"
    >
      <div className="px-6 lg:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Title Column (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold mb-2 block">
              Dúvidas Frequentes
            </span>
            <h2 className="font-serif text-[28px] lg:text-[40px] text-primary tracking-tight mb-4 font-normal">
              Perguntas &amp; Respostas
            </h2>
            <p className="font-sans text-[14px] lg:text-[15px] text-on-surface-variant mb-6 leading-relaxed">
              Transparência e clareza fazem parte do nosso atendimento. Caso sua dúvida não esteja listada, nossa equipe está sempre pronta para responder pelo WhatsApp.
            </p>
            <button
              type="button"
              onClick={(e) =>
                handleWhatsAppClick(e, 'Olá! Gostaria de tirar algumas dúvidas sobre os tratamentos da Luméra.')
              }
              className="inline-flex items-center gap-2 font-sans text-[12px] uppercase tracking-wider text-primary font-semibold hover:text-secondary transition-colors underline underline-offset-4 decoration-1 cursor-pointer"
            >
              Fale conosco diretamente
            </button>
          </div>

          {/* Right Accordion Column (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-surface shadow-xs border border-outline-variant/30 transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    id={`faq-btn-${item.id}`}
                    className="w-full flex items-center justify-between p-5 lg:p-6 text-left cursor-pointer select-none focus:outline-hidden focus-visible:ring-1 focus-visible:ring-secondary gap-4"
                  >
                    <span className="font-serif text-[17px] lg:text-[19px] text-primary font-medium">
                      {item.question}
                    </span>
                    <span className="text-secondary shrink-0">
                      {isOpen ? (
                        <Minus className="w-5 h-5 stroke-[1.75]" />
                      ) : (
                        <Plus className="w-5 h-5 stroke-[1.75]" />
                      )}
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${item.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${item.id}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100 px-5 lg:px-6 pb-6 pt-0'
                        : 'grid-rows-[0fr] opacity-0 px-5 lg:px-6 pb-0 pt-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="font-sans text-[14px] text-on-surface-variant leading-relaxed">
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
