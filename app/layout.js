import './globals.css'
import { Open_Sans } from 'next/font/google'
import BackToTop from '@/components/ui/BackToTop'
import Script from 'next/script'

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
    apple: '/open/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: BASE_URL,
    siteName: SITE_NAME,
    title: 'DepoTax | Expert Accountants & Tax Consultants UK',
    description: 'Expert accounting and tax services for businesses and individuals across the UK. Clear pricing, modern accounting.',
    images: [
      {
        url: '/open/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'DepoTax Accountants & Tax Consultants – clear pricing and expert support',
      },
      {
        url: '/open/social-square.png',
        width: 1080,
        height: 1080,
        alt: 'DepoTax Accountants & Tax Consultants – social profile image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DepoTax | Expert Accountants & Tax Consultants UK',
    description: 'Expert accounting and tax services for businesses and individuals across the UK.',
    images: ['/open/twitter-image.png'],
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
        <Script id="ld-json-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE_NAME,
            url: BASE_URL,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${BASE_URL}/search?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          })}
        </Script>
        <Script id="ld-json-sitenavigation" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: [
              {
                '@type': 'SiteNavigationElement',
                position: 1,
                name: 'Home',
                url: `${BASE_URL}/`,
              },
              {
                '@type': 'SiteNavigationElement',
                position: 2,
                name: 'Pricing',
                url: `${BASE_URL}/pricing`,
              },
              {
                '@type': 'SiteNavigationElement',
                position: 3,
                name: 'Services',
                url: `${BASE_URL}/services`,
              },
              {
                '@type': 'SiteNavigationElement',
                position: 4,
                name: 'Who We Serve',
                url: `${BASE_URL}/who-we-serve`,
              },
              {
                '@type': 'SiteNavigationElement',
                position: 5,
                name: 'Knowledge',
                url: `${BASE_URL}/knowledge`,
              },
              {
                '@type': 'SiteNavigationElement',
                position: 6,
                name: 'Contact',
                url: `${BASE_URL}/contact`,
              },
            ],
          })}
        </Script>
        {children}
        <BackToTop />
      </body>
    </html>
  )
}
