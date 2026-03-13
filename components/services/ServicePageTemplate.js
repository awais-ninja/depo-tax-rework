'use client';

import Link from '@/components/ui/Link';
import ServicePageHero from './ServicePageHero';
import ServicePageOverview from './ServicePageOverview';
import ServicePageFeatures from './ServicePageFeatures';
import ServicePageWhoItsFor from './ServicePageWhoItsFor';
import ServicePageWhyChoose from './ServicePageWhyChoose';
import ServicePageLocalSeo from './ServicePageLocalSeo';
import ServicePageFaq from './ServicePageFaq';
import ServicePageFinalCTA from './ServicePageFinalCTA';

/**
 * Reusable individual service page template.
 * Renders all sections in order from the provided page data.
 * Optional sections (e.g. localSeoContent) render only when data is present.
 */
export default function ServicePageTemplate({ data }) {
  if (!data) return null;

  const {
    slug,
    title,
    hero,
    overview,
    features,
    whoItsFor,
    whyChoose,
    localSeoContent,
    faqs,
    cta,
  } = data;

  return (
    <div className="relative min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-brand-grayBorder/60 bg-brand-grayLight/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-brand-text/80" aria-label="Breadcrumb">
            <Link href="/services" className="hover:text-brand-accent transition-colors">
              Services
            </Link>
            <span className="mx-2" aria-hidden>/</span>
            <span className="text-brand-navy font-medium">{title}</span>
          </nav>
        </div>
      </div>

      <ServicePageHero data={hero} />
      <ServicePageOverview data={overview} />
      <ServicePageFeatures data={features} />
      <ServicePageWhoItsFor data={whoItsFor} />
      <ServicePageWhyChoose data={whyChoose} />
      {localSeoContent != null && localSeoContent !== '' && (
        <ServicePageLocalSeo content={localSeoContent} />
      )}
      <ServicePageFaq items={faqs} />
      <ServicePageFinalCTA data={cta} />
    </div>
  );
}
