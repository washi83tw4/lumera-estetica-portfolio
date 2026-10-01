'use client';

import React from 'react';
import { useDemoNotice } from '@/components/DemoNoticeModal';

export function Footer() {
  const { openDemoNotice, handleWhatsAppClick } = useDemoNotice();

  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-14 lg:pt-20 pb-20 lg:pb-12 border-t border-outline-variant/30">
      <div className="w-full px-6 lg:px-16 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12 lg:mb-16">
          {/* Brand Col (4 cols on desktop) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex flex-col mb-3">
              <span className="font-serif text-[20px] tracking-[0.2em] uppercase text-primary font-medium">
                LUMÉRA
              </span>
              <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-on-surface-variant font-semibold">
                Estética &amp; Bem-estar
              </span>
            </div>
            <p className="font-sans text-[13px] text-on-surface-variant max-w-sm mt-1 leading-relaxed">
              Um refúgio sensorial dedicado ao equilíbrio da derme, rejuvenescimento celular e rituais integrativos de bem-estar corporal.
            </p>
          </div>

          {/* Navigation Col (2 cols on desktop) */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="font-sans text-[11px] uppercase tracking-[0.16em] text-primary font-semibold mb-4">
              Navegação
            </h3>
            <nav className="flex flex-col space-y-2.5 font-sans text-[13px]" aria-label="Links do rodapé">
              <a
                href="#inicio"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Início
              </a>
              <a
                href="#tratamentos"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Tratamentos
              </a>
              <a
                href="#sobre"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Sobre Nós
              </a>
              <a
                href="#experiencia"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Experiência
              </a>
              <a
                href="#duvidas"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Dúvidas Frequentes
              </a>
              <a
                href="#contato"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* Contact Col (3 cols on desktop) */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="font-sans text-[11px] uppercase tracking-[0.16em] text-primary font-semibold mb-4">
              Atendimento &amp; Contato
            </h3>
            <div className="flex flex-col gap-3 font-sans text-[13px] text-on-surface-variant">
              <div>
                <span className="block font-sans text-[10px] uppercase text-on-surface-variant tracking-wider font-semibold">
                  WhatsApp
                </span>
                <button
                  type="button"
                  onClick={(e) => handleWhatsAppClick(e)}
                  className="hover:text-primary transition-colors text-on-surface font-medium underline underline-offset-2 decoration-outline-variant text-left cursor-pointer"
                >
                  WhatsApp demonstrativo
                </button>
              </div>

              <div>
                <span className="block font-sans text-[10px] uppercase text-on-surface-variant tracking-wider font-semibold">
                  Instagram
                </span>
                <button
                  type="button"
                  onClick={() =>
                    openDemoNotice(
                      'Instagram Conceitual',
                      'Perfil demonstrativo do projeto de portfólio. Não há conta em rede social associada.'
                    )
                  }
                  className="hover:text-primary transition-colors text-on-surface text-left cursor-pointer"
                >
                  @lumera.exemplo
                </button>
              </div>

              <div>
                <span className="block font-sans text-[10px] uppercase text-on-surface-variant tracking-wider font-semibold">
                  Horário
                </span>
                <p className="text-on-surface">
                  Seg a Sex: 09h às 19h
                  <br />
                  Sáb: 09h às 14h
                </p>
              </div>
            </div>
          </div>

          {/* Address Col (3 cols on desktop) */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="font-sans text-[11px] uppercase tracking-[0.16em] text-primary font-semibold mb-4">
              Endereço
            </h3>
            <div className="font-sans text-[13px] text-on-surface-variant">
              <p className="text-on-surface mb-3 leading-relaxed">
                Rua Exemplo, 000 — Bairro Nobre
                <br />
                Cidade - UF • CEP 00000-000
              </p>
              <span className="font-sans text-[11px] uppercase tracking-wider text-secondary font-semibold">
                Estacionamento com manobrista no local
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-sans text-[12px] text-on-surface-variant">
            Projeto conceitual para portfólio de desenvolvimento web. © Luméra Estética.
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() =>
                openDemoNotice(
                  'Política de Privacidade',
                  'Este site é uma peça de portfólio que não utiliza cookies de rastreamento, publicidade ou armazenamento de dados de usuários.'
                )
              }
              className="font-sans text-[11px] uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              Privacidade
            </button>
            <span className="text-outline-variant">•</span>
            <button
              type="button"
              onClick={() =>
                openDemoNotice(
                  'Termos de Uso',
                  'Interface conceitual e ilustrativa desenvolvida como demonstração técnica de frontend para portfólio de desenvolvimento web.'
                )
              }
              className="font-sans text-[11px] uppercase tracking-wider text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
