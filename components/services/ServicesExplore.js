'use client';

import { useEffect, useRef } from 'react';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import ServiceCard from './ServiceCard';

/**
 * Unified services explore: one section with category tabs (smooth scroll to blocks)
 * and stacked category blocks. Hero anchor links (#accounting-compliance etc.) work natively.
 */
export default function ServicesExplore({ sections }) {
  const panelRefs = useRef({});

  const scrollToPanel = (id) => {
    const el = panelRefs.current[id] ?? document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // On load, if hash is set scroll to that panel
  useEffect(() => {
    const id = typeof window !== 'undefined' ? window.location.hash.slice(1) : '';
    if (id && sections?.some((s) => s.id === id)) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, [sections]);

  if (!sections?.length) return null;

  return (
    <section
      id="services-explore"
      className="relative overflow-hidden bg-brand-grayLight/40 py-16 sm:py-20 md:py-24 lg:py-28 scroll-mt-24"
      aria-labelledby="services-explore-heading"
    >
      <SectionBackgroundLabel label="SERVICES" position="right-top" size="lg" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-3">
            What we offer
          </p>
          <h2
            id="services-explore-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight leading-tight mb-4"
          >
            Explore our services by area
          </h2>
          <p className="text-base text-brand-text/85 leading-relaxed">
            Choose a category below or scroll to see all services. Each service has its own page with full details.
          </p>
        </header>

        {/* Category tabs — scroll to block on click */}
        <nav
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14 sm:mb-16"
          aria-label="Jump to service category"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollToPanel(section.id)}
              className="
                px-5 py-2.5 rounded-full text-sm font-semibold
                bg-white text-brand-navy border border-brand-grayBorder
                hover:border-brand-accent/40 hover:text-brand-accent
                shadow-[0_2px_8px_rgba(15,23,42,0.04)]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2
                transition-all duration-200
              "
              aria-label={`Jump to ${section.label}`}
            >
              {section.label}
            </button>
          ))}
        </nav>

        {/* Category blocks — stacked, each in a subtle card for clarity */}
        <div className="space-y-10 sm:space-y-12">
          {sections.map((section) => (
            <article
              key={section.id}
              ref={(el) => { panelRefs.current[section.id] = el; }}
              id={section.id}
              className="scroll-mt-32 rounded-2xl border border-brand-grayBorder/80 bg-white p-6 sm:p-8 lg:p-10 shadow-[0_2px_16px_rgba(15,23,42,0.04)]"
            >
              {/* Category block: accent bar + heading + intro */}
              <div className="flex gap-4 sm:gap-6 mb-10">
                <span
                  className="flex-shrink-0 w-1 sm:w-1.5 rounded-full bg-brand-accent"
                  aria-hidden
                />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-accent mb-2">
                    {section.label}
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy tracking-tight leading-tight mb-4">
                    {section.heading}
                  </h3>
                  <p className="text-base text-brand-text/85 leading-relaxed max-w-2xl">
                    {section.intro}
                  </p>
                </div>
              </div>

              {/* Service cards — 2 cols sm, 3 cols lg */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 pl-5 sm:pl-7">
                {section.services.map((service) => (
                  <ServiceCard
                    key={service.slug}
                    slug={service.slug}
                    label={service.label}
                    description={service.description}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
