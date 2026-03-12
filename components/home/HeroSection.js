'use client';

import { useEffect, useState } from 'react';
import Link from "@/components/ui/Link";
import AmbientBackground from "@/components/ui/AmbientBackground";
import {
  HiBolt,
  HiDocumentText,
  HiCalculator,
  HiLightBulb,
  HiChevronRight,
  HiCheck,
} from "react-icons/hi2";

const TRUST_POINTS = [
  "Since 2010",
  "Fixed Fee Packages",
  "HMRC Support",
  "Cloud Accounting",
];

const QUICK_SERVICES = [
  { title: "Tax Planning & Returns", href: "/services/tax-planning", Icon: HiDocumentText, popular: true },
  { title: "Bookkeeping & Payroll", href: "/services/bookkeeping", Icon: HiCalculator, popular: false },
  { title: "Business Advice & Compliance", href: "/services/financial-strategy", Icon: HiLightBulb, popular: false },
];

const GOOGLE_REVIEWS_URL = "https://tinyurl.com/2axkc3eo";

function GoogleGIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export default function HeroSection() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setTimeout(setReady, 50, true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section
      className="relative bg-brand-grayLight overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-brand-grayLight/40" aria-hidden />
      <div className="absolute inset-0 bg-white/90 z-[1]" aria-hidden />
      <div className="absolute inset-0 z-[2]">
        <AmbientBackground />
      </div>

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 ${ready ? 'hero-ready' : ''}`}>
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Content - first on mobile/medium, first on desktop */}
          <div className="order-1">
            <Link
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-reveal hero-reveal-delay-1 inline-flex items-center gap-3 rounded-full bg-white text-brand-navy px-4 py-2.5 mb-5 shadow-[0_14px_40px_rgba(15,23,42,0.14)] border border-brand-grayBorder/80 transition-all duration-200 md:hover:-translate-y-0.5 md:hover:shadow-[0_18px_55px_rgba(15,23,42,0.18)]"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#9a0000]/10">
                <GoogleGIcon className="w-4 h-4" />
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-[1.7rem] font-extrabold tabular-nums leading-none">
                  4.9
                </span>
                <span className="text-amber-400 text-base sm:text-lg tracking-wider" aria-hidden>
                  ★★★★★
                </span>
              </div>
              <div className="flex flex-col gap-0.5 text-xs sm:text-sm font-medium text-brand-text/80 text-left">
                <span>Based on 192 Google reviews</span>
                <span className="text-[11px] uppercase tracking-[0.18em] text-brand-text/60">
                  Verified Google Rating
                </span>
              </div>
            </Link>

            <div className="hero-reveal hero-reveal-delay-2 mb-2.5">
              <p className="text-lg font-bold text-brand-accent tracking-wide">Welcome to DepoTax</p>
              <span className="hero-accent-line mt-1 block h-0.5 w-24 bg-[#9a0000] origin-left" aria-hidden />
            </div>
            <h1
              id="hero-heading"
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.5rem] font-bold leading-[1.18] tracking-tight max-w-xl mt-1"
            >
              <span className="hero-reveal hero-reveal-delay-2 block">Specialist Accountants & Tax Consultants</span>
              <span className="hero-reveal hero-reveal-delay-3 block">for Contractors, Companies</span>
              <span className="hero-reveal hero-reveal-delay-3 block">and Growing Businesses</span>
            </h1>
            <p className="hero-reveal hero-reveal-delay-4 mt-4 text-base text-brand-text/88 max-w-xl leading-relaxed">
              Expert tax planning, bookkeeping, payroll and accounting services for contractors, limited companies, self employed professionals, landlords and SPVs across the UK.
            </p>

            <div className="hero-reveal hero-reveal-delay-5 mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-all duration-200 md:hover:-translate-y-0.5"
              >
                View Pricing
              </Link>
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold border-2 border-brand-accent text-brand-accent bg-white hover:bg-brand-accent hover:text-white transition-all duration-200 md:hover:-translate-y-0.5"
              >
                Book Free Consultation
              </Link>
            </div>

            <ul
              className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-sm font-medium text-brand-text/75"
              aria-label="Trust points"
            >
              {TRUST_POINTS.map((point, i) => (
                <li key={point} className={`hero-reveal ${i < 2 ? 'hero-reveal-delay-5' : i < 4 ? 'hero-reveal-delay-6' : 'hero-reveal-delay-7'} flex items-center gap-2`}>
                  <HiCheck className="w-4 h-4 text-brand-accent shrink-0" aria-hidden />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Card - second on mobile/medium (below heading), second on desktop */}
          <div className="order-2 flex items-center justify-center relative">
            <div className="hero-reveal hero-reveal-delay-4 w-full max-w-md mx-auto lg:max-w-none rounded-2xl bg-white border border-brand-grayBorder/80 shadow-[0_16px_45px_rgba(15,23,42,0.14)] overflow-hidden transition-all duration-300 md:hover:shadow-[0_22px_60px_rgba(15,23,42,0.18)] md:hover:-translate-y-0.5 relative z-10">
              <div className="relative p-6 sm:p-7">
                <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full bg-brand-accent/8" aria-hidden />
                <Link
                  href="/quick-quote"
                  className="relative inline-flex items-center gap-1.5 rounded-full bg-brand-accent/10 text-brand-accent px-3 py-1.5 text-xs font-semibold hover:bg-brand-accent/15 transition-colors duration-200 mb-4"
                >
                  <HiBolt className="w-3.5 h-3.5" />
                  Instant Quote
                </Link>
                <h2 className="relative text-xl sm:text-2xl font-bold leading-tight text-center mb-2">
                  Choose the support you need
                </h2>
                <p className="relative text-center text-sm text-brand-text/70 mb-5">
                  Quickly explore the services most businesses need.
                </p>
                <ul className="relative space-y-2.5">
                  {QUICK_SERVICES.map(({ title, href, Icon, popular }, i) => (
                    <li key={title} className={`hero-reveal ${i === 0 ? 'hero-reveal-delay-5' : i === 1 ? 'hero-reveal-delay-6' : 'hero-reveal-delay-7'}`}>
                      <Link
                        href={href}
                        className={`group flex items-center gap-4 p-4 rounded-xl border bg-white transition-all duration-200 md:hover:-translate-y-0.5 ${
                          popular
                            ? "border-brand-accent/25 bg-brand-accent/5 shadow-sm hover:border-brand-accent/35 hover:bg-brand-accent/[0.07] hover:shadow-md"
                            : "border-brand-grayBorder shadow-sm hover:border-brand-accent/30 hover:bg-brand-grayLight/40 hover:shadow-md"
                        }`}
                      >
                        <span className="shrink-0 w-11 h-11 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-colors duration-200">
                          <Icon className="w-5 h-5" />
                        </span>
                        <p className="flex-1 min-w-0 font-semibold text-brand-navy text-sm leading-snug">
                          {title}
                          {popular && (
                            <span className="ml-2 text-xs font-medium text-brand-accent">
                              Popular
                            </span>
                          )}
                        </p>
                        <HiChevronRight className="w-5 h-5 text-brand-accent/80 shrink-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
