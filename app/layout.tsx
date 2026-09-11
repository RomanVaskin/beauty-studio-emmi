import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Manrope } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Beauty Studio Emmi — салон красоты',
  description:
    'Премиальная студия красоты Emmi: парикмахерский зал, ногтевой сервис, макияж, брови и ресницы. Онлайн-запись, опытные мастера, забота о вашей красоте.',
  generator: 'v0.app',
  keywords: [
    'салон красоты',
    'Beauty Studio Emmi',
    'парикмахерская',
    'маникюр',
    'окрашивание волос',
    'макияж',
    'брови',
  ],
  openGraph: {
    title: 'Beauty Studio Emmi — салон красоты',
    description:
      'Премиальная студия красоты. Волосы, ногти, макияж, брови. Онлайн-запись.',
    locale: 'ru_RU',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f4ede2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${manrope.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
