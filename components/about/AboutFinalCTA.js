'use client';

import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';

const BOOK_CONSULTATION_URL = 'https://www.picktime.com/aazizandco';

const CTA_INTRO =
  'Get reliable accounting support from experienced professionals. We help businesses and individuals across the UK with tax, payroll, bookkeeping, and advisory—so you can stay compliant and make confident decisions.';

const TRUST_LINE =
  'Professional support for businesses, contractors, landlords, and self-employed individuals.';

export default function AboutFinalCTA() {
  return (
    <section
      id="about-final-cta"
      className="relative py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden bg-brand-grayLight/50"
      aria-labelledby="about-final-cta-heading"
    >
      <SectionBackgroundLabel label="GET IN TOUCH" position="center-mid" size="lg" />
      <SectionReveal>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="about-final-cta-heading"
            className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
          >
            <span className="text-[#2b4b6b]">Speak With Our </span>
            <span className="text-[#9a0000]">Accounting Team</span>
          </h2>
          <p className="reveal-item reveal-item-delay-2 mt-4 sm:mt-5 text-base text-brand-text/85 leading-relaxed">
            {CTA_INTRO}
          </p>
          <div className="reveal-item reveal-item-delay-3 mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href={BOOK_CONSULTATION_URL}
              className="inline-flex items-center justify-center min-h-12 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-sm sm:text-base w-full sm:w-auto"
            >
              Book a Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center min-h-12 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold border-2 border-brand-navy text-brand-navy bg-white hover:bg-brand-navy hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 text-sm sm:text-base w-full sm:w-auto"
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
