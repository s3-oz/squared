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
  title: 'Squared² — The power of Square, squared',
  description: 'Custom Square-powered websites for Australian businesses already running on Square. Built by a human, with serious AI leverage.',
  keywords: 'Square website, Square integration, Australian small business, custom website, Square Appointments',
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
    title: 'Squared² — The power of Square, squared',
    description: 'Custom Square-powered websites for Australian businesses already running on Square.',
    images: [
      {
        url: 'https://squared.com.au/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Squared — Square-powered websites for AU businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Squared² — The power of Square, squared',
    description: 'Custom Square-powered websites for Australian businesses already running on Square.',
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