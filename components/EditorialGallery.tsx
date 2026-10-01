'use client';

import React from 'react';
import Image from 'next/image';

export function EditorialGallery() {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface">
      <div className="px-6 lg:px-16 max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-12">
          <div>
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-secondary font-semibold mb-2 block">
              Olhar Estético
            </span>
            <h2 className="font-serif text-[28px] lg:text-[40px] text-primary tracking-tight font-normal">
              Texturas, minerais e calmaria.
            </h2>
          </div>
          <p className="font-sans text-[13px] lg:text-[14px] text-on-surface-variant max-w-sm mt-3 md:mt-0 leading-relaxed">
            Elementos botânicos e atmosfera concebidos para despertar serenidade imediata em cada detalhe.
          </p>
        </div>

        {/* Asymmetrical Editorial Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large Left Feature: Still life products & stone (7 cols) */}
          <div className="md:col-span-7 relative group shadow-sm overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-surface-container border border-outline-variant/30">
            <Image
              src="/images/lumera/seruns-botanicos.webp"
              alt="Frascos de sérum e elixir botânico sobre pedra travertino rústica"
              fill
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 760px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Scrim Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/75 via-primary/20 to-transparent flex items-end p-6 lg:p-8">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-on-primary/80 font-semibold block mb-1">
                  Alquimia Botânica
                </span>
                <p className="font-serif text-[20px] lg:text-[24px] text-on-primary font-medium">
                  Séruns de alta pureza e extração mineral
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Dual Stacked Elements (5 cols) */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            {/* Image Tile */}
            <div className="relative group shadow-sm overflow-hidden aspect-[16/9] bg-surface-container border border-outline-variant/30">
              <Image
                src="/images/lumera/tratamento-facial.webp"
                alt="Aplicação manual de cosméticos de alta precisão na pele"
                fill
                quality={88}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 540px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent flex items-end p-5">
                <span className="font-serif text-[18px] lg:text-[20px] text-on-primary font-medium">
                  Cuidado Tátil Intencional
                </span>
              </div>
            </div>

            {/* Editorial Ritual Card */}
            <div className="bg-surface-container-high p-6 lg:p-8 shadow-xs flex flex-col justify-center border border-outline-variant/30">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold">
                  Ritual de Cuidado
                </span>
              </div>
              <h3 className="font-serif text-[20px] lg:text-[24px] text-primary mb-2.5 font-medium">
                Uma pausa para renovar.
              </h3>
              <p className="font-sans text-[13px] lg:text-[14px] text-on-surface-variant leading-relaxed">
                Protocolos pensados para proporcionar conforto, cuidado genuíno e uma experiência tranquila de autocuidado e desaceleração.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
