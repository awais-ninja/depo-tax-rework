'use client';

import KnowledgeBreadcrumb from './KnowledgeBreadcrumb';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';

/**
 * Hero for Knowledge category pages: breadcrumb, optional label, H1, supporting paragraph.
 */
export default function KnowledgeCategoryHero({ sectionLabel, label, heading, paragraph }) {
  return (
    <section
      className="relative overflow-hidden bg-brand-grayLight/40 border-b border-brand-grayBorder/60"
      aria-labelledby="knowledge-category-hero-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1F4E79 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden
      />
      <SectionBackgroundLabel label={sectionLabel?.replace(/\s/g, '').toUpperCase() || 'KNOWLEDGE'} position="right-top" size="md" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <KnowledgeBreadcrumb sectionLabel={sectionLabel} />
        {label && (
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-3">
            {label}
          </p>
        )}
        <h1
          id="knowledge-category-hero-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight leading-tight mb-4"
        >
          {heading}
        </h1>
        {paragraph && (
          <p className="text-base sm:text-lg text-brand-text/90 leading-relaxed max-w-3xl">
            {paragraph}
          </p>
        )}
      </div>
    </section>
  );
}
