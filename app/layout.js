import './globals.css'
import { Open_Sans } from 'next/font/google'
import BackToTop from '@/components/ui/BackToTop'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const SITE_NAME = 'DepoTax'
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.depotax.co.uk'

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `Specialist Accountants & Tax Consultants UK | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Clear pricing, expert tax advice, and modern accounting for self-employed, contractors, startups, landlords and SPVs across the UK. Book a free consultation.',
  keywords: ['accountants UK', 'tax consultants', 'self assessment', 'limited company accounting', 'landlord accounting', 'contractor accounting', 'DepoTax'],
  authors: [{ name: SITE_NAME, url: BASE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
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
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BASE_URL,
    siteName: SITE_NAME,
    title: 'DepoTax | Expert Accountants & Tax Consultants UK',
    description: 'Expert accounting and tax services for businesses and individuals across the UK. Clear pricing, modern accounting.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DepoTax - Specialist Accountants & Tax Consultants' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DepoTax | Expert Accountants & Tax Consultants UK',
    description: 'Expert accounting and tax services for businesses and individuals across the UK.',
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    // Optional: add when you have them from Google / Bing
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={openSans.variable}>
      <body className="min-h-screen bg-brand-white font-sans antialiased text-brand-text" suppressHydrationWarning>
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
