'use client';

import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';

const BOOK_CONSULTATION_URL = 'https://www.picktime.com/aazizandco';

const CTA_INTRO =
  'Whether you’re a business, self-employed individual, landlord, contractor, or startup—speak with DepoTax about your accounting and tax needs. We’ll help you find the right support and get you started.';

const TRUST_LINE =
  'Support tailored for businesses and individuals across the UK.';

export default function ServicesFinalCTA() {
  return (
    <section
      id="services-final-cta"
      className="relative py-14 sm:py-20 md:py-20 lg:py-24 overflow-hidden bg-white"
      aria-labelledby="services-final-cta-heading"
    >
      <SectionBackgroundLabel label="GET STARTED" position="center-mid" size="lg" />
      <SectionReveal>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="reveal-item reveal-item-delay-1 text-[11px] font-bold uppercase tracking-[0.15em] text-brand-accent mb-3">
            Get Started
          </p>
          <h2
            id="services-final-cta-heading"
            className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold tracking-tight mb-4"
          >
            <span className="text-[#2b4b6b]">Need Professional </span>
            <span className="text-[#9a0000]">Accounting or Tax Support?</span>
          </h2>
          <p className="reveal-item reveal-item-delay-2 mt-4 sm:mt-5 text-base text-brand-text/85 leading-relaxed">
            {CTA_INTRO}
          </p>
          <div className="reveal-item reveal-item-delay-3 mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
            <Link
              href={BOOK_CONSULTATION_URL}
              className="inline-flex items-center justify-center min-h-[44px] sm:min-h-[48px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-sm sm:text-base w-full sm:w-auto"
            >
              Book a Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-[44px] sm:min-h-[48px] px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold border-2 border-brand-navy text-brand-navy bg-white hover:bg-brand-navy hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 text-sm sm:text-base w-full sm:w-auto"
            >
              Contact Our Team
            </Link>
          </div>
          <p className="reveal-item reveal-item-delay-3 mt-6 text-sm text-brand-text/70 leading-relaxed">
            {TRUST_LINE}
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}
