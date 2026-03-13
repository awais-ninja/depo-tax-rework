'use client';

import Link from '@/components/ui/Link';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';
import { contactHero as heroData } from '@/data/contactPage';
import { BOOKING_URL } from '@/data/contact';

export default function ContactHero() {
  return (
    <section id="contact-hero" className="relative overflow-hidden bg-brand-grayLight/40" aria-labelledby="contact-hero-heading">
      <SectionBackgroundLabel label="CONTACT" position="right-top" size="lg" />
      <SectionAmbient />
      <div className="absolute inset-0 opacity-[0.03] bg-dot-pattern" aria-hidden />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 md:py-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-3">{heroData.eyebrow}</p>
        <h1 id="contact-hero-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy tracking-tight leading-tight mb-2">{heroData.title}</h1>
        <p className="text-base sm:text-lg text-brand-text/90 leading-relaxed max-w-2xl mb-8">{heroData.description}</p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-sm sm:text-base">
            {heroData.ctaBook}
          </Link>
          <Link href="#contact-form" className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl font-semibold border-2 border-brand-navy text-brand-navy bg-transparent hover:bg-brand-navy hover:text-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-navy focus-visible:ring-offset-2 text-sm sm:text-base">
            {heroData.ctaEnquiry}
          </Link>
        </div>
      </div>
    </section>
  );
}
