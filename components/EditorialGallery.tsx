'use client';

import React from 'react';
import Image from 'next/image';

export function EditorialGallery() {
  return (
    <section className="w-full py-16 lg:py-28 bg-[#f4efe8] text-[#121110] border-t border-[#ded5c7]">
      <div className="px-6 lg:px-16 max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-6 bg-[#8f6e48]" />
              <span className="font-sans text-[11px] uppercase tracking-[0.24em] text-[#8f6e48] font-semibold">
                Olhar Estético
              </span>
            </div>
            <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[42px] text-[#121110] tracking-tight font-normal">
              Texturas, minerais e calmaria.
            </h2>
          </div>
          <p className="font-sans text-[14px] lg:text-[15px] text-[#5c534a] max-w-sm mt-3 md:mt-0 leading-relaxed font-light">
            Elementos botânicos e atmosfera concebidos para despertar serenidade imediata em cada detalhe.
          </p>
        </div>

        {/* Asymmetrical Editorial Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Large Left Feature: Still life products & stone (7 cols) */}
          <div className="md:col-span-7 relative group shadow-lg overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-[#ede6dc] border border-[#ded5c7]">
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
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/85 via-[#0a0908]/25 to-transparent flex items-end p-6 lg:p-8">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#dfc299] font-semibold block mb-1">
                  Alquimia Botânica
                </span>
                <p className="font-serif text-[20px] lg:text-[24px] text-[#f7f4ee] font-medium">
                  Séruns de alta pureza e extração mineral
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Dual Stacked Elements (5 cols) */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            {/* Image Tile */}
            <div className="relative group shadow-md overflow-hidden aspect-[16/9] bg-[#ede6dc] border border-[#ded5c7]">
              <Image
                src="/images/lumera/tratamento-facial.webp"
                alt="Aplicação manual de cosméticos de alta precisão na pele"
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 540px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/70 via-transparent to-transparent flex items-end p-5">
                <span className="font-serif text-[18px] lg:text-[20px] text-[#f7f4ee] font-medium">
                  Cuidado Tátil Intencional
                </span>
              </div>
            </div>

            {/* Editorial Ritual Card */}
            <div className="bg-[#ebe4d8] p-6 lg:p-8 shadow-sm flex flex-col justify-center border border-[#ded5c7]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8f6e48]"></span>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#8f6e48] font-semibold">
                  Ritual de Cuidado
                </span>
              </div>
              <h3 className="font-serif text-[20px] lg:text-[24px] text-[#121110] mb-2.5 font-medium">
                Uma pausa para renovar.
              </h3>
              <p className="font-sans text-[13px] lg:text-[14px] text-[#5c534a] leading-relaxed font-light">
                Protocolos pensados para proporcionar conforto, cuidado genuíno e uma experiência tranquila de autocuidado e desaceleração.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
