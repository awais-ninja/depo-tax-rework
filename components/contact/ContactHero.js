'use client';

import Link from '@/components/ui/Link';

const BOOK_CONSULTATION_URL = 'https://www.picktime.com/aazizandco';

export default function ContactHero() {
  return (
    <section
      id="contact-hero"
      className="relative overflow-hidden bg-brand-grayLight/40"
      aria-labelledby="contact-hero-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #1F4E79 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
        aria-hidden
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-3">
          Contact DepoTax
        </p>
        <h1
          id="contact-hero-heading"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight leading-tight mb-2"
        >
          Contact Us
        </h1>
        <p className="text-base sm:text-lg text-brand-text/90 leading-relaxed max-w-2xl mb-8">
          Get in touch with our team. If you have a question about accounting, tax, payroll, or business matters, we are here to help. You can contact us directly, book a consultation, or visit one of our offices.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href={BOOK_CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-sm sm:text-base"
          >
            Book a Consultation
          </Link>
          <Link
            href="#contact-form"
            className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl font-semibold border-2 border-brand-navy text-brand-navy bg-transparent hover:bg-brand-navy hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 text-sm sm:text-base"
          >
            Send an Enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}
