'use client';

import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';

export default function FinalCTA() {
  return (
    <section className="py-16 lg:py-24 bg-brand-navy text-brand-white">
      <SectionReveal>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold mb-4">
            Ready to simplify your accounting and tax?
          </h2>
          <p className="reveal-item reveal-item-delay-2 text-brand-grayLight/90 text-lg mb-8">
            Speak to our team for expert advice, transparent pricing, and tailored support for your business or personal tax needs.
          </p>
          <div className="reveal-item reveal-item-delay-3 flex flex-wrap justify-center gap-4">
          <Link
            href="/book-consultation"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-brand-navy bg-brand-white hover:bg-brand-grayLight transition-colors duration-200"
          >
            Book Consultation
          </Link>
          <Link
            href="/quick-quote"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold border-2 border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-navy transition-colors duration-200"
          >
            Get a Quick Quote
          </Link>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
