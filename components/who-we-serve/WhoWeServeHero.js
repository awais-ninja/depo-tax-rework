'use client';

import Link from '@/components/ui/Link';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import { HiUser, HiBuildingOffice2, HiHome, HiSparkles } from 'react-icons/hi2';

const BOOK_CONSULTATION_URL = 'https://www.picktime.com/aazizandco';

const CLIENT_TYPE_ICONS = [
  { Icon: HiUser, label: 'Individuals' },
  { Icon: HiBuildingOffice2, label: 'Businesses' },
  { Icon: HiHome, label: 'Property Clients' },
  { Icon: HiSparkles, label: 'Specialist Professionals' },
];

export default function WhoWeServeHero() {
  return (
    <section
      id="who-we-serve-hero"
      className="relative overflow-hidden bg-brand-grayLight/50"
      aria-labelledby="who-we-serve-hero-heading"
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-dot-pattern" aria-hidden />
      <SectionBackgroundLabel label="CLIENT TYPES" position="right-top" size="lg" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12 xl:gap-16 lg:items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-accent mb-4">
              Client Types
            </p>
            <h1
              id="who-we-serve-hero-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-brand-navy tracking-tight leading-tight mb-6"
            >
              Who We Work With
            </h1>
            <p className="text-lg sm:text-xl text-brand-navy/90 font-medium leading-snug mb-4">
              Supporting Individuals, Businesses, and Property Investors Across the UK
            </p>
            <p className="text-base text-brand-text/85 leading-relaxed max-w-xl mb-8">
              At DepoTax, we work with a wide range of clients — from self-employed professionals and startups to established companies and property investors. Our services are tailored to the unique financial and compliance needs of each client type.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-sm sm:text-base"
              >
                Explore Services
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
          </div>

          {/* Right: Abstract accounting visual */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Layered circles / shapes - brand colours */}
              <div className="absolute inset-0 rounded-3xl bg-brand-navy/5" aria-hidden />
              <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-brand-accent/10 blur-2xl animate-float-slow" aria-hidden />
              <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full bg-brand-navy/10 blur-2xl animate-drift-slow" aria-hidden />
              <div className="absolute inset-4 sm:inset-8 rounded-2xl border border-brand-grayBorder/60 flex items-center justify-center bg-white/80 backdrop-blur-sm shadow-[0_8px_32px_rgba(15,23,42,0.08)]">
                <div className="grid grid-cols-2 gap-4 p-5">
                  {CLIENT_TYPE_ICONS.map(({ Icon, label }) => (
                    <div
                      key={label}
                      className="aspect-square rounded-xl bg-brand-accent/10 border border-brand-grayBorder/60 flex items-center justify-center text-brand-accent"
                      aria-hidden
                    >
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
