export interface SiteConfig {
  siteName: string;
  tagline: string;
  whatsappNumber: string; // If empty or isDemo is true, triggers demo feedback
  instagram: string;
  instagramUrl: string;
  address: {
    street: string;
    neighborhood: string;
    cityState: string;
    zipCode: string;
    details: string;
  };
  openingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  isDemo: boolean;
  defaultWhatsAppMessage: string;
}

export const siteConfig: SiteConfig = {
  siteName: 'Luméra',
  tagline: 'Estética & Bem-estar',
  // Demonstrative state: Keep empty string for conceptual portfolio demo
  whatsappNumber: '',
  instagram: '@lumera.exemplo',
  instagramUrl: 'https://instagram.com',
  address: {
    street: 'Rua Exemplo, 000',
    neighborhood: 'Bairro Nobre',
    cityState: 'Cidade — UF',
    zipCode: '00000-000',
    details: 'Estacionamento com manobrista no local',
  },
  openingHours: {
    weekdays: 'Seg a Sex: 09h às 19h',
    saturday: 'Sáb: 09h às 14h',
    sunday: 'Fechado aos domingos',
  },
  isDemo: true,
  defaultWhatsAppMessage: 'Olá! Gostaria de saber mais sobre os tratamentos da Luméra.',
};

/**
 * Returns a valid WhatsApp click action URL if configured, or null for demo handling
 */
export function getWhatsAppUrl(customMessage?: string): string | null {
  if (siteConfig.isDemo || !siteConfig.whatsappNumber.trim()) {
    return null;
  }
  const cleanNumber = siteConfig.whatsappNumber.replace(/\D/g, '');
  const message = encodeURIComponent(customMessage || siteConfig.defaultWhatsAppMessage);
  return `https://wa.me/${cleanNumber}?text=${message}`;
}
