'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  MapPin,
  Navigation,
  Layers,
  Plus,
  Minus,
  Maximize2,
  Search,
  Star,
  Clock,
  Car,
  Compass,
  Check,
  Share2,
  Bookmark,
  ExternalLink
} from 'lucide-react';
import { useDemoNotice } from '@/components/DemoNoticeModal';

export function LocationMap() {
  const { openDemoNotice, handleWhatsAppClick } = useDemoNotice();
  const [mapType, setMapType] = useState<'map' | 'satellite'>('map');
  const [zoomLevel, setZoomLevel] = useState<number>(15);
  const [showDirections, setShowDirections] = useState<boolean>(false);
  const [originAddress, setOriginAddress] = useState<string>('');
  const [routeCalculated, setRouteCalculated] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 1, 18));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 1, 12));

  const handleCalculateRoute = (e: React.FormEvent) => {
    e.preventDefault();
    if (!originAddress.trim()) return;
    setRouteCalculated(true);
  };

  return (
    <section id="localizacao" className="w-full py-16 lg:py-28 bg-[#0a0908] text-[#f7f4ee] px-4 sm:px-6 lg:px-16 max-w-[1440px] mx-auto border-t border-[#24211e]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-[#c5a880]" />
            <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.24em] text-[#c5a880] font-semibold">
              Localização · Santuário Luméra
            </span>
          </div>
          <h2 className="font-serif text-[30px] sm:text-[36px] lg:text-[44px] text-[#f7f4ee] tracking-tight font-normal">
            Venha viver a experiência no nosso espaço.
          </h2>
        </div>
        <p className="font-sans text-[14px] lg:text-[15px] text-[#c5b8a9] max-w-md mt-4 md:mt-0 leading-relaxed font-light">
          Ambiente privativo planejado para desacelerar o ritmo urbano, com conforto acústico e estacionamento com manobrista cortesia.
        </p>
      </div>

      {/* Main Google Maps Interactive Container */}
      <div className="relative w-full rounded-2xl lg:rounded-3xl overflow-hidden border border-[#2a2622] shadow-2xl bg-[#141311] min-h-[580px] lg:min-h-[640px] flex flex-col justify-between">
        {/* Top Google Maps Floating Search Bar */}
        <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
          {/* Search Card */}
          <div className="pointer-events-auto bg-[#141311]/95 backdrop-blur-md px-4 py-2.5 rounded-lg shadow-xl border border-[#2a2622] flex items-center gap-3 w-full sm:w-auto max-w-md">
            <div className="w-8 h-8 rounded-full bg-[#c5a880]/15 flex items-center justify-center text-[#c5a880] shrink-0">
              <MapPin className="w-4 h-4 text-[#c5a880] stroke-[2]" />
            </div>
            <div className="flex-1 min-w-0 pr-2">
              <p className="font-sans text-[13px] font-semibold text-[#f7f4ee] truncate">
                Luméra Estética &amp; Bem-estar
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-[#c5b8a9]">
                <span className="font-bold text-[#c5a880]">4.9</span>
                <div className="flex text-[#c5a880]">
                  <Star className="w-3 h-3 fill-[#c5a880]" />
                  <Star className="w-3 h-3 fill-[#c5a880]" />
                  <Star className="w-3 h-3 fill-[#c5a880]" />
                  <Star className="w-3 h-3 fill-[#c5a880]" />
                  <Star className="w-3 h-3 fill-[#c5a880]" />
                </div>
                <span>(128 avaliações)</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowDirections(!showDirections)}
              className="bg-[#c5a880] hover:bg-[#d4ba94] text-[#0a0908] text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
              title="Traçar rota"
            >
              <Navigation className="w-3 h-3" />
              <span>Rotas</span>
            </button>
          </div>

          {/* Quick Action Pills */}
          <div className="pointer-events-auto hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSaved(!saved)}
              className={`px-3 py-2 rounded-lg text-xs font-medium backdrop-blur-md shadow-sm border transition-colors flex items-center gap-1.5 cursor-pointer ${
                saved
                  ? 'bg-[#c5a880] text-[#0a0908] border-[#c5a880]'
                  : 'bg-[#141311]/95 text-[#f7f4ee] border-[#2a2622] hover:bg-[#1e1c18]'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>{saved ? 'Salvo no Maps' : 'Salvar'}</span>
            </button>
            <button
              type="button"
              onClick={() =>
                openDemoNotice(
                  'Compartilhar Localização',
                  'Link simulado para compartilhar as coordenadas do Santuário Luméra via WhatsApp ou GPS.'
                )
              }
              className="px-3 py-2 rounded-lg text-xs font-medium bg-[#141311]/95 text-[#f7f4ee] border border-[#2a2622] hover:bg-[#1e1c18] backdrop-blur-md shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Compartilhar</span>
            </button>
          </div>
        </div>

        {/* Map Canvas Background (Night Luxury Cartography Mode) */}
        <div className="absolute inset-0 z-0 overflow-hidden select-none">
          {mapType === 'map' ? (
            /* Vector Dark Minimalist Map Canvas (Stylized Jardins, SP) */
            <div
              className="w-full h-full relative transition-transform duration-500 bg-[#161412]"
              style={{
                transform: `scale(${1 + (zoomLevel - 15) * 0.08})`,
              }}
            >
              {/* Map Grid / City Blocks Pattern */}
              <svg
                className="w-full h-full opacity-80"
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
              >
                <defs>
                  <pattern
                    id="grid-roads-dark"
                    width="160"
                    height="160"
                    patternUnits="userSpaceOnUse"
                  >
                    {/* City Block Fill */}
                    <rect width="144" height="144" fill="#1d1a17" rx="4" />
                    {/* Primary Road Arteries */}
                    <path
                      d="M 0 152 L 160 152 M 152 0 L 152 160"
                      stroke="#2a2520"
                      strokeWidth="16"
                    />
                    {/* Secondary Avenues */}
                    <path
                      d="M 0 76 L 160 76 M 76 0 L 76 160"
                      stroke="#231f1a"
                      strokeWidth="8"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-roads-dark)" />

                {/* Diagonal Major Avenue (simulating Av. Paulista / Av. Rebouças) */}
                <path
                  d="M -100 650 L 1600 -100"
                  stroke="#38322b"
                  strokeWidth="24"
                  strokeLinecap="round"
                />
                <path
                  d="M -100 650 L 1600 -100"
                  stroke="#4a4239"
                  strokeWidth="14"
                  strokeLinecap="round"
                />
                <path
                  d="M -100 650 L 1600 -100"
                  stroke="#c5a880"
                  strokeWidth="4"
                  strokeDasharray="16 12"
                  opacity="0.6"
                />

                {/* Park / Green Reserve Area (Dark Botanic Garden) */}
                <rect
                  x="20%"
                  y="12%"
                  width="260"
                  height="160"
                  rx="12"
                  fill="#1b241c"
                  stroke="#2b3b2d"
                  strokeWidth="1.5"
                />
                <text
                  x="28%"
                  y="22%"
                  fill="#789679"
                  fontSize="12"
                  fontFamily="sans-serif"
                  fontWeight="600"
                >
                  Área Verde / Parque
                </text>

                {/* Avenue Street Names */}
                <text
                  x="48%"
                  y="46%"
                  fill="#a89a8b"
                  fontSize="11"
                  fontFamily="sans-serif"
                  fontWeight="600"
                  transform="rotate(-26, 680, 280)"
                >
                  Alameda Lorena
                </text>
                <text
                  x="30%"
                  y="58%"
                  fill="#a89a8b"
                  fontSize="11"
                  fontFamily="sans-serif"
                  fontWeight="600"
                >
                  Rua Oscar Freire
                </text>

                {/* Simulated Transit Route (when route calculated) */}
                {routeCalculated && (
                  <>
                    <path
                      d="M 120 480 Q 300 480 440 380 T 720 320"
                      stroke="#c5a880"
                      strokeWidth="8"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <path
                      d="M 120 480 Q 300 480 440 380 T 720 320"
                      stroke="#f7f4ee"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </>
                )}
              </svg>
            </div>
          ) : (
            /* Satellite Photo View Canvas */
            <div
              className="w-full h-full relative transition-transform duration-500 bg-[#121110]"
              style={{
                transform: `scale(${1 + (zoomLevel - 15) * 0.08})`,
              }}
            >
              <Image
                src="/images/lumera/ambiente-lumera.webp"
                alt="Visão aérea do complexo e arredores"
                fill
                className="object-cover opacity-60 filter saturate-60 brightness-60"
                sizes="100vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-[#0a0908]/40 backdrop-blur-[1px]" />
            </div>
          )}

          {/* Central Pulsing Luméra Location Pin */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-auto group cursor-pointer">
            {/* Animated Beacon Halo */}
            <div className="relative flex items-center justify-center">
              <span className="absolute w-16 h-16 rounded-full bg-[#c5a880]/20 animate-ping" />
              <span className="absolute w-10 h-10 rounded-full bg-[#c5a880]/30" />
              
              {/* Custom High-Fashion Pin Icon */}
              <div className="relative w-12 h-12 rounded-full bg-[#c5a880] text-[#0a0908] flex items-center justify-center shadow-2xl border-2 border-[#141311] transform transition-transform group-hover:scale-110">
                <MapPin className="w-6 h-6 text-[#0a0908] stroke-[2.5]" />
              </div>
            </div>

            {/* Pin Callout Badge */}
            <div className="mt-2 bg-[#141311]/95 text-[#f7f4ee] px-3.5 py-1.5 rounded-full shadow-2xl border border-[#c5a880]/40 text-center whitespace-nowrap backdrop-blur-md">
              <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#c5a880]">
                Luméra Estética
              </p>
              <p className="font-sans text-[9px] text-[#c5b8a9]">
                Alameda Lorena, 1420
              </p>
            </div>
          </div>
        </div>

        {/* Map Right-Side Floating Controls */}
        <div className="absolute bottom-16 right-4 z-20 flex flex-col gap-2 pointer-events-auto">
          {/* Map / Satellite Layer Switcher */}
          <button
            type="button"
            onClick={() => setMapType(mapType === 'map' ? 'satellite' : 'map')}
            className="p-2.5 rounded-lg bg-[#141311]/95 backdrop-blur-md shadow-xl border border-[#2a2622] hover:bg-[#1e1c18] text-[#f7f4ee] transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
            title="Alternar entre Mapa e Satélite"
          >
            <Layers className="w-4 h-4 text-[#c5a880]" />
            <span className="hidden sm:inline">
              {mapType === 'map' ? 'Satélite' : 'Mapa'}
            </span>
          </button>

          {/* Zoom In & Out */}
          <div className="bg-[#141311]/95 backdrop-blur-md rounded-lg shadow-xl border border-[#2a2622] overflow-hidden flex flex-col">
            <button
              type="button"
              onClick={handleZoomIn}
              disabled={zoomLevel >= 18}
              className="p-2.5 hover:bg-[#1e1c18] text-[#f7f4ee] disabled:opacity-30 transition-colors cursor-pointer border-b border-[#2a2622]"
              title="Aumentar zoom"
              aria-label="Aumentar zoom"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleZoomOut}
              disabled={zoomLevel <= 12}
              className="p-2.5 hover:bg-[#1e1c18] text-[#f7f4ee] disabled:opacity-30 transition-colors cursor-pointer"
              title="Diminuir zoom"
              aria-label="Diminuir zoom"
            >
              <Minus className="w-4 h-4" />
            </button>
          </div>

          {/* Recenter Button */}
          <button
            type="button"
            onClick={() => setZoomLevel(15)}
            className="p-2.5 rounded-lg bg-[#141311]/95 backdrop-blur-md shadow-xl border border-[#2a2622] hover:bg-[#1e1c18] text-[#f7f4ee] transition-colors cursor-pointer"
            title="Centralizar no Santuário Luméra"
            aria-label="Centralizar mapa"
          >
            <Compass className="w-4 h-4 text-[#c5a880]" />
          </button>
        </div>

        {/* Directions Floating Modal (when active) */}
        {showDirections && (
          <div className="absolute top-20 left-4 z-30 w-full max-w-sm bg-[#141311]/98 backdrop-blur-md p-5 rounded-xl shadow-2xl border border-[#c5a880]/30 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#2a2622]">
              <span className="font-sans text-[11px] uppercase tracking-wider font-semibold text-[#c5a880]">
                Traçar Rota até Luméra
              </span>
              <button
                type="button"
                onClick={() => setShowDirections(false)}
                className="text-[#c5b8a9] hover:text-[#f7f4ee] text-xs cursor-pointer"
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleCalculateRoute} className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium text-[#c5b8a9] mb-1">
                  Seu ponto de partida:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={originAddress}
                    onChange={(e) => setOriginAddress(e.target.value)}
                    placeholder="Ex: Av. Paulista, 1000 ou Aeroporto de Congonhas"
                    className="w-full bg-[#1e1c18] px-3 py-2 text-xs rounded-md border border-[#2a2622] text-[#f7f4ee] placeholder:text-[#c5b8a9]/50 focus:outline-none focus:ring-1 focus:ring-[#c5a880]"
                  />
                  <Search className="w-3.5 h-3.5 text-[#c5b8a9] absolute right-3 top-2.5" />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#c5a880] hover:bg-[#d4ba94] text-[#0a0908] py-2.5 rounded-md text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Car className="w-3.5 h-3.5" />
                <span>Calcular Rota Recomendada</span>
              </button>
            </form>

            {routeCalculated && (
              <div className="mt-3 pt-3 border-t border-[#2a2622] text-xs">
                <div className="flex items-center justify-between text-[#f7f4ee] font-medium mb-1">
                  <span>Rota mais rápida:</span>
                  <span className="text-[#c5a880] font-bold">14 min (4.2 km)</span>
                </div>
                <p className="text-[11px] text-[#c5b8a9]">
                  Trânsito fluido via Alameda Lorena. Manobrista disponível na entrada principal.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Bottom Location Info Card Overlay */}
        <div className="relative z-10 m-4 lg:m-6 self-start bg-[#141311]/96 backdrop-blur-md p-5 sm:p-6 rounded-xl shadow-2xl border border-[#2a2622] max-w-sm sm:max-w-md">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-lg overflow-hidden relative shrink-0 border border-[#2a2622] bg-[#0e0d0c]">
              <Image
                src="/images/lumera/ambiente-lumera.webp"
                alt="Ambiente Luméra Jardins"
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-[18px] text-[#f7f4ee] font-medium leading-snug">
                Santuário Luméra Jardins
              </h3>
              <p className="font-sans text-[12px] text-[#c5b8a9] mt-0.5">
                Alameda Lorena, 1420 — Jardins, São Paulo
              </p>
              <div className="flex items-center gap-1.5 mt-1 text-[11px] text-[#c5a880] font-medium">
                <Car className="w-3.5 h-3.5" />
                <span>Estacionamento com manobrista cortesia</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-[#2a2622] text-xs">
            <div className="flex items-start gap-2">
              <Clock className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#f7f4ee] block text-[11px]">Horários:</span>
                <span className="text-[#c5b8a9] text-[11px]">Seg a Sáb: 09h — 19h</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#f7f4ee] block text-[11px]">Privacidade:</span>
                <span className="text-[#c5b8a9] text-[11px]">Atendimento reservado</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 pt-2">
            <button
              type="button"
              onClick={(e) =>
                handleWhatsAppClick(
                  e,
                  'Olá! Gostaria de agendar uma visita e atendimento no Santuário Luméra Jardins.'
                )
              }
              className="flex-1 bg-[#c5a880] hover:bg-[#d4ba94] text-[#0a0908] text-center py-2.5 px-4 rounded-md font-sans text-[11px] uppercase tracking-wider font-semibold transition-colors cursor-pointer shadow-sm"
            >
              Agendar Visita
            </button>
            <button
              type="button"
              onClick={() => setShowDirections(true)}
              className="px-3.5 py-2.5 rounded-md bg-[#1e1c18] hover:bg-[#28241e] text-[#f7f4ee] font-sans text-[11px] font-semibold transition-colors border border-[#2a2622] flex items-center gap-1.5 cursor-pointer"
              title="Abrir rotas"
            >
              <Navigation className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Rotas</span>
            </button>
          </div>
        </div>

        {/* Fictional Google Maps Watermark & Attribution Bar */}
        <div className="relative z-10 w-full px-4 py-2.5 bg-[#0e0d0c] border-t border-[#24211e] flex flex-wrap items-center justify-between text-[10px] text-[#8f8578]">
          <div className="flex items-center gap-2">
            <span className="font-sans font-bold tracking-tight text-[#f7f4ee] text-[12px]">
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Mapa interativo conceitual para demonstração de portfólio</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Dados cartográficos © 2026 Luméra</span>
            <button
              type="button"
              onClick={() =>
                openDemoNotice(
                  'Componente Cartográfico',
                  'Interface cartográfica interativa desenvolvida com React, SVG vetorial e estilização sensorial para demonstração de habilidades frontend.'
                )
              }
              className="underline hover:text-[#c5a880] cursor-pointer"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
