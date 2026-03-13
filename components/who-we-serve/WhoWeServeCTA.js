'use client';

import Link from '@/components/ui/Link';

const BOOK_CONSULTATION_URL = 'https://www.picktime.com/aazizandco';

export default function WhoWeServeCTA() {
  return (
    <section
      id="who-we-serve-cta"
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-white border-t border-brand-grayBorder/60"
      aria-labelledby="who-we-serve-cta-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-brand-accent uppercase tracking-wider mb-2">
          Get in Touch
        </p>
        <h2
          id="who-we-serve-cta-heading"
          className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight mb-4"
        >
          Looking for an Accountant Who Understands Your Situation?
        </h2>
        <p className="text-base text-brand-text/85 leading-relaxed mb-8">
          DepoTax supports individuals, startups, businesses, landlords, and property investors across the UK with tailored accounting and tax services.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <Link
            href={BOOK_CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-sm sm:text-base w-full sm:w-auto"
          >
            Book a Consultation
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl font-semibold border-2 border-brand-navy text-brand-navy bg-white hover:bg-brand-navy hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 text-sm sm:text-base w-full sm:w-auto"
          >
            Contact Our Team
          </Link>
        </div>
        <p className="mt-6 text-sm text-brand-text/70">
          Professional support tailored to different client types across the UK.
        </p>
      </div>
    </section>
  );
}
