import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from '@/components/ui/Link'
import LocationFaq from '@/components/locations/LocationFaq'
import { BASE_URL } from '@/data/site'
import { BOOKING_URL } from '@/data/contact'
import { isValidServiceSlug, getServiceBySlug } from '@/data/services/config'
import { getWhoWeServePageBySlug, whoWeServeSlugs } from '@/data/whoWeServe'
import { doesLocationExist } from '@/lib/locations'

export const dynamicParams = false

export function generateStaticParams() {
  return whoWeServeSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const page = getWhoWeServePageBySlug(slug)

  if (!page) {
    return { title: 'Page Not Found' }
  }

  const canonical = `${BASE_URL}/who-we-serve/${page.slug}`

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: canonical,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDescription,
    },
  }
}

function buildProfessionalServiceJsonLd(page) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: page.pageTitle || page.title,
    description: page.metaDescription,
    areaServed: 'United Kingdom',
    serviceType: 'Accounting Services',
    url: `${BASE_URL}/who-we-serve/${page.slug}`,
  }
}

export default async function WhoWeServeDetailPage({ params }) {
  const { slug } = await params
  const page = getWhoWeServePageBySlug(slug)
  if (!page) notFound()

  const relatedServices = (Array.isArray(page.relatedServices) ? page.relatedServices : [])
    .map((serviceSlug) => {
      if (!isValidServiceSlug(serviceSlug)) return null
      const service = getServiceBySlug(serviceSlug)
      if (!service) return null
      return {
        href: `/services/${serviceSlug}`,
        label: service.label,
      }
    })
    .filter(Boolean)
    .slice(0, 3)

  const relatedLocations = (Array.isArray(page.relatedLocations) ? page.relatedLocations : [])
    .filter((href) => typeof href === 'string' && doesLocationExist(href))
    .slice(0, 3)

  const jsonLd = buildProfessionalServiceJsonLd(page)

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <div className="border-b border-brand-grayBorder/60 bg-brand-grayLight/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <nav className="text-sm text-brand-text/80 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
              <span className="mx-2" aria-hidden>/</span>
              <Link href="/who-we-serve" className="hover:text-brand-accent transition-colors">Who We Serve</Link>
              <span className="mx-2" aria-hidden>/</span>
              <span className="text-brand-navy font-medium" aria-current="page">{page.pageTitle || page.title}</span>
            </nav>

            <p className="text-brand-accent font-semibold uppercase tracking-wider text-sm mb-3">
              {page.hero?.eyebrow || 'Who we support'}
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy">
              {page.hero?.headline || page.pageTitle || page.title}
            </h1>
            {page.hero?.subheadline ? (
              <p className="mt-4 text-base sm:text-lg text-brand-text/85 leading-relaxed max-w-3xl">
                {page.hero.subheadline}
              </p>
            ) : null}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-2.5 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto"
              >
                Speak to an accountant
              </Link>
              <Link
                href="/who-we-serve"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-2.5 rounded-xl font-semibold border-2 border-brand-navy text-brand-navy bg-white hover:bg-brand-navy hover:text-white transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto"
              >
                Back to Who We Serve
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="max-w-3xl">
            {(Array.isArray(page.intro) ? page.intro : []).slice(0, 2).map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? 'text-lg text-brand-text/90 leading-relaxed mb-5' : 'text-base text-brand-text/85 leading-relaxed mb-5'}>
                {paragraph}
              </p>
            ))}
          </div>

          {Array.isArray(page.keyChallenges) && page.keyChallenges.length > 0 ? (
            <section className="mt-10 bg-brand-grayLight/20 border border-brand-grayBorder rounded-2xl p-6 sm:p-7">
              <h2 className="text-xl font-bold text-brand-navy mb-4">Key Challenges</h2>
              <ul className="space-y-3">
                {page.keyChallenges.map((item, idx) => (
                  <li key={`${item}-${idx}`} className="flex items-start gap-3 text-brand-text/85 leading-relaxed">
                    <span className="mt-1 w-2.5 h-2.5 rounded-full bg-brand-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="mt-10 space-y-8">
            {(Array.isArray(page.sections) ? page.sections : []).slice(0, 3).map((section, idx) => (
              <section key={`${section?.title || 'section'}-${idx}`} className="bg-white border border-brand-grayBorder rounded-2xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(15,23,42,0.03)]">
                {section?.title ? <h2 className="text-xl font-bold text-brand-navy mb-3">{section.title}</h2> : null}
                {section?.content ? <p className="text-base text-brand-text/85 leading-relaxed">{section.content}</p> : null}
              </section>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <section className="bg-white border border-brand-grayBorder rounded-2xl p-6 sm:p-7">
              <h2 className="text-xl font-bold text-brand-navy mb-4">Services</h2>
              <div className="flex flex-wrap gap-3">
                {(Array.isArray(page.services) ? page.services : []).map((service, idx) => (
                  <span key={`${service}-${idx}`} className="px-3 py-2 rounded-xl bg-brand-accent/5 border border-brand-accent/15 text-sm font-medium text-brand-navy">
                    {service}
                  </span>
                ))}
              </div>
            </section>
            <section className="bg-white border border-brand-grayBorder rounded-2xl p-6 sm:p-7">
              <h2 className="text-xl font-bold text-brand-navy mb-4">Why Choose Us</h2>
              <ul className="space-y-3">
                {(Array.isArray(page.whyChooseUs) ? page.whyChooseUs : []).map((line, idx) => (
                  <li key={`${line}-${idx}`} className="flex items-start gap-3 text-brand-text/85 leading-relaxed">
                    <span className="mt-1 w-2.5 h-2.5 rounded-full bg-brand-accent" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {(relatedServices.length > 0 || relatedLocations.length > 0) ? (
            <section className="mt-10">
              <h2 className="text-xl font-bold text-brand-navy mb-4">Related links</h2>
              {relatedServices.length > 0 ? (
                <div className="mb-6">
                  <h3 className="text-base font-semibold text-brand-navy mb-3">Related services</h3>
                  <div className="flex flex-wrap gap-3">
                    {relatedServices.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="inline-flex items-center justify-center min-h-[44px] px-4 rounded-xl border border-brand-grayBorder bg-white text-sm font-medium text-brand-text hover:text-brand-accent transition-colors duration-200 hover:border-brand-accent/30 hover:bg-brand-accent/5"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
              {relatedLocations.length > 0 ? (
                <div>
                  <h3 className="text-base font-semibold text-brand-navy mb-3">Related locations</h3>
                  <div className="flex flex-wrap gap-3">
                    {relatedLocations.map((href) => (
                      <Link
                        key={href}
                        href={href}
                        className="inline-flex items-center justify-center min-h-[44px] px-4 rounded-xl border border-brand-grayBorder bg-white text-sm font-medium text-brand-text hover:text-brand-accent transition-colors duration-200 hover:border-brand-accent/30 hover:bg-brand-accent/5"
                      >
                        {href.replace('/locations/accountants-in-', 'Accountants in ').replaceAll('-', ' ')}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </section>
          ) : null}

          <div className="mt-10">
            <LocationFaq items={page.faq} />
          </div>
        </div>

        <section className="relative py-14 sm:py-16 md:py-20 border-t border-brand-grayBorder/60 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-medium text-brand-accent uppercase tracking-wider mb-2">
              {page.cta?.title || 'Speak with our team'}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-navy mb-4">
              {page.cta?.text || 'Get practical accounting support for your business.'}
            </h2>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-2.5 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200 text-sm sm:text-base w-full sm:w-auto"
              >
                {page.cta?.button || 'Contact us'}
              </Link>
            </div>
          </div>
        </section>

        <script
          id={`ld-json-who-we-serve-${page.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>
      <Footer />
    </>
  )
}

