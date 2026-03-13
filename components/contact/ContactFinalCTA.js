'use client';

import Link from '@/components/ui/Link';

const BOOK_CONSULTATION_URL = 'https://www.picktime.com/aazizandco';

export default function ContactFinalCTA() {
  return (
    <section
      className="bg-brand-grayLight/40 py-14 sm:py-16 md:py-20 border-t border-brand-grayBorder/60"
      aria-labelledby="contact-final-cta-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          id="contact-final-cta-heading"
          className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight mb-4"
        >
          Speak With Our Team Today
        </h2>
        <p className="text-base text-brand-text/85 leading-relaxed mb-8">
          Whether you need help with accounting, tax planning, payroll, or business advisory, our team is ready to assist you.
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
            href="#contact-form"
            className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl font-semibold border-2 border-brand-navy text-brand-navy bg-white hover:bg-brand-navy hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 text-sm sm:text-base w-full sm:w-auto"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
