import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/ui/ScrollProgress'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
}

export const metadata: Metadata = {
  title: 'Squared - The Power of Square, Squared',
  description: 'Expert Square API consulting, custom integrations, and technical solutions for Australian businesses. Maximize your Square investment with our specialized expertise.',
  keywords: 'Square API, Square consulting, API integration, payment processing, Australian business, POS integration',
  authors: [{ name: 'Squared' }],
  creator: 'Squared',
  publisher: 'Squared',
  robots: 'index, follow',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-icon.png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180' }
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://squared.com.au',
    siteName: 'Squared',
    title: 'Squared - The Power of Square, Squared',
    description: 'Expert Square API consulting and integration services for Australian businesses',
    images: [
      {
        url: 'https://squared.com.au/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Squared - Square API Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squared - The Power of Square, Squared',
    description: 'Expert Square API consulting and integration services for Australian businesses',
    images: ['https://squared.com.au/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://squared.com.au',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU" className={inter.className}>
      <body className="flex min-h-screen flex-col">
        <ScrollProgress />
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}