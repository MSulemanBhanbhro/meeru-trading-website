import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { Footer } from '@/components/layout/Footer'
import { FloatingWhatsAppButton } from '@/components/ui/FloatingWhatsAppButton'

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: 'Meeru-72-fx - Professional Binary & Forex Trading',
  description: 'Premium binary and forex trading signals, mentoring & community. Professional trading services for aspiring and pro traders.',
  keywords: 'binary trading, forex trading, trading signals, forex signals, trading mentor, trading education',
  authors: [{ name: 'Meeru-72-fx' }],
  creator: 'Meeru-72-fx',
  publisher: 'Meeru-72-fx',
  openGraph: {
    title: 'Meeru-72-fx - Professional Binary & Forex Trading',
    description: 'Premium binary and forex trading signals, mentoring & community. Professional trading services for aspiring and pro traders.',
    url: 'https://meeru-72-fx.com',
    siteName: 'Meeru-72-fx',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Meeru-72-fx - Professional Binary & Forex Trading',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meeru-72-fx - Professional Binary & Forex Trading',
    description: 'Premium binary and forex trading signals, mentoring & community. Professional trading services for aspiring and pro traders.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://meeru-72-fx.com',
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsAppButton />
    </main>
  )
}