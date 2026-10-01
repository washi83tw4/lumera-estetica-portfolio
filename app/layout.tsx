import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { DemoProvider } from '@/components/DemoNoticeModal';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-playfair',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Luméra Estética — Projeto Conceitual de Portfólio',
  description: 'Landing page conceitual de estética e bem-estar desenvolvida como projeto de portfólio.',
  applicationName: 'Luméra Estética',
  authors: [{ name: 'Luméra Portfolio' }],
  robots: {
    index: false,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Luméra Estética — Projeto Conceitual de Portfólio',
    description: 'Landing page conceitual de estética e bem-estar desenvolvida como projeto de portfólio.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Luméra Estética',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luméra Estética — Projeto Conceitual de Portfólio',
    description: 'Landing page conceitual de estética e bem-estar desenvolvida como projeto de portfólio.',
  },
};

export const viewport: Viewport = {
  themeColor: '#fbf9f5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="bg-surface font-sans text-on-surface antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed" suppressHydrationWarning>
        <DemoProvider>
          {children}
        </DemoProvider>
      </body>
    </html>
  );
}
