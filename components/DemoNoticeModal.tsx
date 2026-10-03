'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Info, X, ExternalLink, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, siteConfig } from '@/config/site';

interface DemoContextType {
  openDemoNotice: (title?: string, message?: string) => void;
  handleWhatsAppClick: (e: React.MouseEvent, customMessage?: string) => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState({
    title: 'Projeto Conceitual de Portfólio',
    message: 'Esta é uma página de demonstração para portfólio de desenvolvimento web. O canal de atendimento está em modo conceitual e não realiza agendamentos reais.',
  });

  const openDemoNotice = useCallback((title?: string, message?: string) => {
    setContent({
      title: title || 'Projeto Conceitual de Portfólio',
      message:
        message ||
        'Esta é uma landing page de demonstração criada para portfólio profissional de desenvolvimento frontend. Os canais de contato e agendamento são demonstrativos.',
    });
    setIsOpen(true);
  }, []);

  const handleWhatsAppClick = useCallback(
    (e: React.MouseEvent, customMessage?: string) => {
      e.preventDefault();
      const realUrl = getWhatsAppUrl(customMessage);
      if (realUrl) {
        window.open(realUrl, '_blank', 'noopener,noreferrer');
      } else {
        openDemoNotice(
          'Agendamento Demonstrativo',
          'Este projeto é um trabalho conceitual de portfólio. Não há número de WhatsApp ou clínica real vinculada. No arquivo de configuração (config/site.ts), basta informar um número real para ativar automaticamente todos os links da página.'
        );
      }
    },
    [openDemoNotice]
  );

  return (
    <DemoContext.Provider value={{ openDemoNotice, handleWhatsAppClick }}>
      {children}

      {/* Elegant Toast / Modal Notification */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-dialog-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-primary/40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-[#141311] border border-[#c5a880]/30 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-[#c5a880]/15 flex items-center justify-center text-[#c5a880]">
                  <Info className="w-4 h-4" />
                </span>
                <div>
                  <span className="font-sans uppercase tracking-[0.2em] text-[#c5a880] block text-[10px] font-semibold">
                    Aviso do Desenvolvedor
                  </span>
                  <h3 id="demo-dialog-title" className="font-serif text-lg font-medium text-[#f7f4ee]">
                    {content.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-[#c5b8a9] hover:text-[#f7f4ee] p-1 transition-colors cursor-pointer"
                aria-label="Fechar aviso"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="font-sans text-sm text-[#c5b8a9] leading-relaxed mb-6 font-light">
              {content.message}
            </p>

            <div className="p-3 bg-[#1a1815] border border-[#2a2622] text-xs text-[#c5b8a9] mb-6 space-y-1">
              <p className="font-medium text-[#f7f4ee] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]"></span>
                Ambiente de Produção Fictício
              </p>
              <p>
                Status atual no arquivo <code className="px-1 py-0.5 bg-[#0a0908] text-[#c5a880] font-mono text-[11px]">config/site.ts</code>: <span className="font-semibold text-[#c5a880]">isDemo = true</span>.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 bg-[#c5a880] hover:bg-[#d4ba94] text-[#0a0908] font-sans text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </DemoContext.Provider>
  );
}

export function useDemoNotice() {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemoNotice must be used within a DemoProvider');
  }
  return context;
}
