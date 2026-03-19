import { notFound } from 'next/navigation'

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from '@/components/ui/Link'

import LocationFaq from '@/components/locations/LocationFaq'
import {
  buildLocationHref,
  doesLocationExist,
  getAllAreas,
  getAreaBySlug,
  getAreaLinkText,
  normalizeLocationSlug,
} from '@/lib/locations'

import { isValidServiceSlug, getServiceBySlug } from '@/data/services/config'
import { BOOKING_URL } from '@/data/contact'
import { BASE_URL } from '@/data/site'

export const dynamicParams = false

function getPageTitle(area) {
  return area?.seo?.pageTitle || area?.hero?.headline || area?.areaName || 'Location'
}

function getMetaDescription(area) {
  return area?.seo?.metaDescription || area?.hero?.subheadline || undefined
}

function extractServiceSlug(serviceHref) {
  // Expected `/services/<slug>`
  if (!serviceHref || typeof serviceHref !== 'string') return ''
  const s = serviceHref.split('#')[0].split('?')[0]
  const parts = s.replace(/^\/+/, '').split('/')
  const idx = parts.indexOf('services')
  if (idx === -1) return ''
  return parts[idx + 1] || ''
}

function buildFaqJsonLd(area) {
  const faq = Array.isArray(area?.faq) ? area.faq : []
  if (faq.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }
}

function buildBreadcrumbJsonLd(area) {
  const locationSlug = normalizeLocationSlug(area?.slug)
  const pageTitle = getPageTitle(area)
  const canonicalUrl = `${BASE_URL}${buildLocationHref(locationSlug)}`

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${BASE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: `${BASE_URL}/contact`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: pageTitle,
        item: canonicalUrl,
      },
    ],
  }
}

export function generateStaticParams() {
  // Use normalized slugs so routing works cleanly with `/locations/[locationSlug]`.
  return getAllAreas()
    .map((a) => ({ locationSlug: normalizeLocationSlug(a?.slug) }))
    .filter((p) => Boolean(p.locationSlug))
}

export async function generateMetadata({ params }) {
  const { locationSlug: rawLocationSlug } = await params
  const locationSlug = normalizeLocationSlug(rawLocationSlug)
  const area = getAreaBySlug(locationSlug)

  if (!area) {
    return {
      title: 'Location Not Found',
      description: undefined,
    }
  }

  const pageTitle = getPageTitle(area)
  const locationName = area?.areaName || pageTitle
  const metaTitle = area?.seo?.metaTitle || `Accountants in ${locationName}`
  const metaDescription = getMetaDescription(area)
  const canonicalUrl = `${BASE_URL}${buildLocationHref(locationSlug)}`

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
    },
  }
}

export default async function LocationPage({ params }) {
  const { locationSlug: rawLocationSlug } = await params
  const locationSlug = normalizeLocationSlug(rawLocationSlug)
  const area = getAreaBySlug(locationSlug)
  if (!area) notFound()

  const pageTitle = getPageTitle(area)

  const nearbyAreas = Array.isArray(area?.internalLinks?.nearbyAreas)
    ? area.internalLinks.nearbyAreas
        .slice(0, 3)
        .map((href) => {
          if (!href || typeof href !== 'string') return null
          if (!doesLocationExist(href)) return null
          const nearbyArea = getAreaBySlug(href)
          if (!nearbyArea) return null
          return {
            href: buildLocationHref(nearbyArea.slug),
            title: getAreaLinkText(nearbyArea),
          }
        })
        .filter(Boolean)
    : []

  const serviceLinks = Array.isArray(area?.internalLinks?.servicePages)
    ? area.internalLinks.servicePages
        .slice(0, 3)
        .map((href) => {
          const serviceSlug = extractServiceSlug(href)
          if (!serviceSlug || !isValidServiceSlug(serviceSlug)) return null
          const service = getServiceBySlug(serviceSlug)
          if (!service) return null
          return {
            href: `/services/${serviceSlug}`,
            title: service.label,
          }
        })
        .filter(Boolean)
    : []

  const regionalPage = null

  const faqJsonLd = buildFaqJsonLd(area)
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(area)

  const hero = area?.hero || {}
  const cta = area?.cta || {}

  const primaryCtaLabel = hero?.ctaPrimary || 'Speak to an accountant'
  const secondaryCtaLabel = hero?.ctaSecondary || 'Contact our team'

  const ctaButtonLabel = cta?.button || 'Contact us'
  const ctaButtonHref = '/contact'

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <div className="border-b border-brand-grayBorder/60 bg-brand-grayLight/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <nav className="text-sm text-brand-text/80 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-accent transition-colors">
                Home
              </Link>
              <span className="mx-2" aria-hidden>
                /
              </span>
              <Link href="/contact" className="hover:text-brand-accent transition-colors">
                Contact
              </Link>
              <span className="mx-2" aria-hidden>
                /
              </span>
              <span className="text-brand-navy font-medium" aria-current="page">
                {pageTitle}
              </span>
            </nav>

            <p className="text-brand-accent font-semibold uppercase tracking-wider text-sm mb-3">
              {hero?.eyebrow || area?.region || 'Local accounting support'}
            </p>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy">
              {area?.seo?.pageTitle || hero?.headline || pageTitle}
            </h1>

            {hero?.subheadline && (
              <p className="mt-4 text-base sm:text-lg text-brand-text/85 leading-relaxed max-w-3xl">
                {hero.subheadline}
              </p>
            )}

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-2.5 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-sm sm:text-base w-full sm:w-auto"
              >
                {primaryCtaLabel}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-2.5 rounded-xl font-semibold border-2 border-brand-navy text-brand-navy bg-white hover:bg-brand-navy hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 text-sm sm:text-base w-full sm:w-auto"
              >
                {secondaryCtaLabel}
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="max-w-3xl">
            {(Array.isArray(area?.intro) ? area.intro : []).slice(0, 2).map((p, idx) => (
              <p key={idx} className={idx === 0 ? 'text-lg text-brand-text/90 leading-relaxed mb-5' : 'text-base text-brand-text/85 leading-relaxed mb-5'}>
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 space-y-8">
            {(Array.isArray(area?.sections) ? area.sections : []).map((s, idx) => (
              <section key={`${s?.title || 'section'}-${idx}`} className="bg-white border border-brand-grayBorder rounded-2xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
                {s?.title && <h2 className="text-xl font-bold text-brand-navy mb-3">{s.title}</h2>}
                {s?.content && <p className="text-base text-brand-text/85 leading-relaxed">{s.content}</p>}
              </section>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <section className="bg-white border border-brand-grayBorder rounded-2xl p-6 sm:p-7">
              <h2 className="text-xl font-bold text-brand-navy mb-4">Services</h2>
              <div className="flex flex-wrap gap-3">
                {(Array.isArray(area?.services) ? area.services : []).map((srv, idx) => (
                  <span key={`${srv}-${idx}`} className="px-3 py-2 rounded-xl bg-brand-accent/5 border border-brand-accent/15 text-sm font-medium text-brand-navy">
                    {srv}
                  </span>
                ))}
              </div>
            </section>

            <section className="bg-white border border-brand-grayBorder rounded-2xl p-6 sm:p-7">
              <h2 className="text-xl font-bold text-brand-navy mb-4">Target client types</h2>
              <div className="flex flex-wrap gap-3">
                {(Array.isArray(area?.targetClientTypes) ? area.targetClientTypes : []).map((t, idx) => (
                  <span key={`${t}-${idx}`} className="px-3 py-2 rounded-xl bg-brand-grayLight/60 border border-brand-grayBorder/70 text-sm font-medium text-brand-navy">
                    {t}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {Array.isArray(area?.whyChooseUs) && area.whyChooseUs.length > 0 && (
            <section className="mt-10 bg-brand-grayLight/20 border border-brand-grayBorder rounded-2xl p-6 sm:p-7">
              <h2 className="text-xl font-bold text-brand-navy mb-4">Why choose us</h2>
              <ul className="space-y-3">
                {area.whyChooseUs.map((line, idx) => (
                  <li key={`${line}-${idx}`} className="flex items-start gap-3 text-brand-text/85 leading-relaxed">
                    <span className="mt-1 w-2.5 h-2.5 rounded-full bg-brand-accent" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {nearbyAreas.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-bold text-brand-navy mb-4">Nearby areas</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {nearbyAreas.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    className="group inline-flex items-center justify-center min-h-[44px] px-3 rounded-xl border border-brand-grayBorder bg-white text-sm font-medium text-brand-text hover:text-brand-accent transition-colors duration-200 hover:border-brand-accent/30 hover:bg-brand-accent/5"
                  >
                    <span className="group-hover:underline underline-offset-4 decoration-transparent group-hover:decoration-brand-accent transition-[text-decoration-color]">
                      {n.title}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {regionalPage && (
            <section className="mt-10">
              <h2 className="text-xl font-bold text-brand-navy mb-4">Across {area.region || 'the region'}</h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={regionalPage}
                  className="inline-flex items-center justify-center min-h-[44px] px-4 rounded-xl border border-brand-grayBorder bg-white text-sm font-medium text-brand-text hover:text-brand-accent transition-colors duration-200 hover:border-brand-accent/30 hover:bg-brand-accent/5"
                >
                  View {area.region || 'regional'} coverage
                </Link>
              </div>
            </section>
          )}

          {serviceLinks.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-bold text-brand-navy mb-4">Related services</h2>
              <div className="flex flex-wrap gap-3">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="inline-flex items-center justify-center min-h-[44px] px-4 rounded-xl border border-brand-grayBorder bg-white text-sm font-medium text-brand-text hover:text-brand-accent transition-colors duration-200 hover:border-brand-accent/30 hover:bg-brand-accent/5"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-10">
            <LocationFaq items={area?.faq} />
          </div>
        </div>

        <section className="relative py-14 sm:py-16 md:py-20 border-t border-brand-grayBorder/60 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-medium text-brand-accent uppercase tracking-wider mb-2">
              {cta?.title || 'Speak with our team'}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-navy mb-4">
              {cta?.text || 'Get practical accounting support for your business.'}
            </h2>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              <Link
                href={ctaButtonHref}
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-2.5 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-sm sm:text-base w-full sm:w-auto"
              >
                {ctaButtonLabel}
              </Link>
            </div>
          </div>
        </section>

        {faqJsonLd && (
          <script
            id={`ld-json-faq-${locationSlug}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        )}
        {breadcrumbJsonLd && (
          <script
            id={`ld-json-breadcrumb-${locationSlug}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
          />
        )}
      </main>
      <Footer />
    </>
  )
}

