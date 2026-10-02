/**
 * Configuration and metadata for Luméra Estética image optimization.
 * 
 * Every image is calibrated to provide at least 2x the maximum CSS display resolution,
 * matching Retina and high-DPI displays without blurring or distortion.
 */

export interface LumeraImageConfig {
  id: string;
  filename: string;
  alt: string;
  maxDisplayWidthDesktop: number;
  maxDisplayWidthMobile: number;
  min2xWidth: number;
  nativeWidth: number;
  nativeHeight: number;
  aspectRatio: string;
  sizes: string;
  quality: number;
}

export const LUMERA_IMAGES: Record<string, LumeraImageConfig> = {
  hero: {
    id: 'hero',
    filename: 'hero-estetica.webp',
    alt: 'Retrato sereno de cliente em momento de cuidado estético facial na Luméra',
    maxDisplayWidthDesktop: 440,
    maxDisplayWidthMobile: 382,
    min2xWidth: 880,
    nativeWidth: 1080,
    nativeHeight: 1446,
    aspectRatio: '4 / 5.4',
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px',
    quality: 90,
  },
  treatment: {
    id: 'treatment',
    filename: 'tratamento-facial.webp',
    alt: 'Aplicação delicada de sérum facial botânico com mãos especializadas na Luméra',
    maxDisplayWidthDesktop: 540,
    maxDisplayWidthMobile: 382,
    min2xWidth: 1080,
    nativeWidth: 1200,
    nativeHeight: 1200,
    aspectRatio: '1 / 1',
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 480px',
    quality: 90,
  },
  about: {
    id: 'about',
    filename: 'ambiente-lumera.webp',
    alt: 'Arquitetura de interiores do estúdio Luméra com curvas minerais e balcão em travertino',
    maxDisplayWidthDesktop: 650,
    maxDisplayWidthMobile: 382,
    min2xWidth: 1300,
    nativeWidth: 1440,
    nativeHeight: 1075,
    aspectRatio: '16 / 11',
    sizes: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 650px',
    quality: 90,
  },
  gallerySerums: {
    id: 'gallerySerums',
    filename: 'seruns-botanicos.webp',
    alt: 'Frascos de sérum e elixir botânico sobre pedra travertino rústica',
    maxDisplayWidthDesktop: 760,
    maxDisplayWidthMobile: 382,
    min2xWidth: 1520,
    nativeWidth: 1600,
    nativeHeight: 2143,
    aspectRatio: '16 / 10',
    sizes: '(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 760px',
    quality: 90,
  },
};
