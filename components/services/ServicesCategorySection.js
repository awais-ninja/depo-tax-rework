'use client';

import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import ServiceCard from './ServiceCard';

/**
 * One category block: label, heading, intro, then grid of service cards.
 * Section id matches hero category nav for scroll targeting.
 */
export default function ServicesCategorySection({
  sectionId,
  label,
  heading,
  intro,
  services,
  variant = 'default',
  backgroundLabel,
  backgroundPosition = 'right-mid',
}) {
  const isAlt = variant === 'alt';
  const sectionBg = isAlt ? 'bg-brand-grayLight/30' : 'bg-white';

  return (
    <section
      id={sectionId}
      className={`relative overflow-hidden ${sectionBg} py-14 sm:py-20 md:py-20 lg:py-24 scroll-mt-24`}
      aria-labelledby={`${sectionId}-heading`}
    >
      {backgroundLabel && (
        <SectionBackgroundLabel
          label={backgroundLabel}
          position={backgroundPosition}
          size="md"
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="max-w-3xl mb-10 sm:mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-accent mb-3">
            {label}
          </p>
          <h2
            id={`${sectionId}-heading`}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy tracking-tight leading-tight mb-4"
          >
            {heading}
          </h2>
          <p className="text-base text-brand-text/85 leading-relaxed">
            {intro}
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service) => (
            <ServiceCard
              key={service.slug}
              slug={service.slug}
              label={service.label}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
