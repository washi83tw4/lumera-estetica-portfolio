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
            className="relative w-full max-w-md bg-surface border border-outline-variant/60 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
                  <Info className="w-4 h-4" />
                </span>
                <div>
                  <span className="font-label-sm uppercase tracking-[0.2em] text-secondary block text-[10px]">
                    Aviso do Desenvolvedor
                  </span>
                  <h3 id="demo-dialog-title" className="font-serif text-lg font-medium text-primary">
                    {content.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-on-surface-variant hover:text-primary p-1 transition-colors"
                aria-label="Fechar aviso"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-6">
              {content.message}
            </p>

            <div className="p-3 bg-surface-container-low border border-outline-variant/30 text-xs text-on-surface-variant mb-6 space-y-1">
              <p className="font-medium text-primary flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                Ambiente de Produção Fictício
              </p>
              <p>
                Status atual no arquivo <code className="px-1 py-0.5 bg-surface text-primary rounded-none font-mono text-[11px]">config/site.ts</code>: <span className="font-semibold text-secondary">isDemo = true</span>.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 bg-primary text-on-primary hover:bg-primary/90 font-sans text-xs uppercase tracking-wider font-medium transition-colors"
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
