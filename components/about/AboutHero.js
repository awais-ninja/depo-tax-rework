'use client';

import Link from '@/components/ui/Link';
import Image from 'next/image';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import { HiCheck } from 'react-icons/hi2';

const BOOK_CONSULTATION_URL = 'https://www.picktime.com/aazizandco';

const ABOUT_HERO_BG = '/aboutus/aboutus-hero-bg.png';

const TRUST_POINTS = [
  'Experienced UK accountants',
  'Trusted by businesses and landlords',
  'Cloud accounting specialists',
];

export default function AboutHero() {
  return (
    <section
      id="about-hero"
      className="relative min-h-[55vh] sm:min-h-[65vh] md:min-h-[75vh] lg:min-h-[82vh] flex items-end sm:items-center justify-center overflow-hidden bg-brand-navy"
      aria-labelledby="about-hero-heading"
    >
      {/* Background image — full bleed, responsive on all screens including mobile */}
      <div className="absolute inset-0 w-full h-full min-h-full">
        <Image
          src={ABOUT_HERO_BG}
          alt=""
          fill
          className="object-cover object-top w-full h-full"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          priority
        />
      </div>

      {/* Subtle overlay for text readability only */}
      <div className="absolute inset-0 bg-black/30" aria-hidden />

      <SectionBackgroundLabel label="ABOUT" position="right-top" size="md" />

      {/* Content — bottom-aligned on mobile, centered on desktop */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-24 sm:py-16 md:py-20 text-center">
        {/* Glass-style content block for clarity */}
        <div className="rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12 max-w-3xl mx-auto shadow-xl">
          <p className="text-white text-xs sm:text-sm font-medium uppercase tracking-[0.2em] mb-3">
            About DepoTax
          </p>
          <span className="block w-12 h-0.5 bg-white rounded-full mx-auto mb-4 sm:mb-5" aria-hidden />
          <h1
            id="about-hero-heading"
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-4 sm:mb-5"
          >
            You Can Rely on Expert Accounting & Tax
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-5 sm:mb-6">
            Trusted support for businesses, contractors, and individuals across the UK — accounting, tax, payroll, and advisory with a practical, client-focused approach.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 mb-6 sm:mb-8 text-white/95 text-xs sm:text-sm" aria-label="Why trust DepoTax">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <HiCheck className="w-4 h-4 text-white flex-shrink-0" aria-hidden />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href={BOOK_CONSULTATION_URL}
              className="inline-flex items-center justify-center min-h-12 px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold text-white border-2 border-white/90 hover:bg-white/15 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent text-sm sm:text-base w-full sm:w-auto"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
