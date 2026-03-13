'use client';

import Link from '@/components/ui/Link';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import { HiCheck } from 'react-icons/hi2';

const BOOK_CONSULTATION_URL = 'https://www.picktime.com/aazizandco';

const TRUST_BULLETS = [
  'Practical UK-focused guidance',
  'Resources for businesses and individuals',
  'Helpful tools and planning support',
];

export default function KnowledgeHero() {
  return (
    <section
      id="knowledge-hero"
      className="relative overflow-hidden bg-brand-grayLight/40"
      aria-labelledby="knowledge-hero-heading"
    >
      <div className="absolute inset-0 opacity-[0.03] bg-dot-pattern" aria-hidden />
      <SectionBackgroundLabel label="KNOWLEDGE" position="right-top" size="lg" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-3">
            Knowledge Centre
          </p>
          <h1
            id="knowledge-hero-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight leading-tight mb-5"
          >
            Practical Accounting, Tax, and Business Resources
          </h1>
          <p className="text-base sm:text-lg text-brand-text/90 leading-relaxed mb-8">
            DepoTax provides practical guides, tax planning tips, checklists, and useful resources to help individuals and businesses stay informed and organised. Explore our resource centre for UK-focused guidance you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
            <Link
              href="#resource-categories"
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-sm sm:text-base"
            >
              Explore Resources
            </Link>
            <Link
              href={BOOK_CONSULTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl font-semibold border-2 border-brand-navy text-brand-navy bg-transparent hover:bg-brand-navy hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 text-sm sm:text-base"
            >
              Book a Consultation
            </Link>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-brand-text/85" aria-label="Why use our resources">
            {TRUST_BULLETS.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <HiCheck className="w-4 h-4 text-brand-accent flex-shrink-0" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
