import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans'
});

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
});

export const metadata: Metadata = {
  title: 'MWN CORE | Sistema Inteligente para Restaurantes',
  description: 'Revolucione seu restaurante com QR Code interativo e Cozinha Inteligente. Pedidos digitais, gestao em tempo real e eficiencia operacional incomparavel.',
  keywords: ['restaurante', 'qr code', 'cardapio digital', 'cozinha inteligente', 'gestao de restaurante', 'pedidos digitais'],
  authors: [{ name: 'MWN CORE' }],
  creator: 'MWN CORE',
  openGraph: {
    title: 'MWN CORE | Sistema Inteligente para Restaurantes',
    description: 'Revolucione seu restaurante com QR Code interativo e Cozinha Inteligente.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MWN CORE | Sistema Inteligente para Restaurantes',
    description: 'Revolucione seu restaurante com QR Code interativo e Cozinha Inteligente.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0E17',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#0A0E17] text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
