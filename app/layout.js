import './globals.css'
import { Open_Sans } from 'next/font/google'
import BackToTop from '@/components/ui/BackToTop'
import CookieConsentBanner from '@/components/ui/CookieConsentBanner'
import Script from 'next/script'
import { headers } from 'next/headers'
import { connection } from 'next/server'
import { SITE_NAME, BASE_URL, defaultMetadata, structuredDataNav } from '@/data/site'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

/** Viewport/theme-color: separate export (Next 14+). Do not add these to metadata. */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `Specialist Accountants & Tax Consultants UK | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: defaultMetadata.description,
  keywords: defaultMetadata.keywords,
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
    title: defaultMetadata.openGraph.title,
    description: defaultMetadata.openGraph.description,
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
    title: defaultMetadata.twitter.title,
    description: defaultMetadata.twitter.description,
    images: ['/open/twitter-image.png'],
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {},
}

export default async function RootLayout({ children }) {
  await connection()
  const headersList = await headers()
  const nonce = headersList.get('x-nonce') || undefined

  return (
    <html lang="en-GB" className={openSans.variable}>
      <head>
        <link rel="preload" href="/logo.svg" as="image" />
      </head>
      <body className="min-h-screen bg-brand-white font-sans antialiased text-brand-text" suppressHydrationWarning>
        <Script id="ld-json-website" type="application/ld+json" strategy="lazyOnload" nonce={nonce}>
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
        <Script id="ld-json-sitenavigation" type="application/ld+json" strategy="lazyOnload" nonce={nonce}>
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: structuredDataNav.map((item, i) => ({
              '@type': 'SiteNavigationElement',
              position: i + 1,
              name: item.name,
              url: `${BASE_URL}${item.url}`,
            })),
          })}
        </Script>
        {children}
        <BackToTop />
        <CookieConsentBanner />
      </body>
    </html>
  )
}
