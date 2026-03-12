import './globals.css'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const SITE_NAME = 'DepoTax'

export const metadata = {
  title: {
    default: `Specialist Accountants & Tax Consultants UK | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Clear pricing, expert tax advice, and modern accounting for self-employed, contractors, startups, landlords and SPVs across the UK. Book a free consultation.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'DepoTax | Expert Accountants & Tax Consultants',
    description: 'Expert accounting and tax services for businesses and individuals across the UK.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={openSans.variable}>
      <body className="min-h-screen bg-brand-white font-sans antialiased text-brand-text" suppressHydrationWarning>{children}</body>
    </html>
  )
}
