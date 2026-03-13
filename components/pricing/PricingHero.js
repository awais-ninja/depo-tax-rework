import Link from '@/components/ui/Link';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';

export default function PricingHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <SectionBackgroundLabel label="PRICING" position="right-top" size="lg" />
      <SectionAmbient />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-white to-brand-grayLight/40"
        aria-hidden
      />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 pb-8 sm:pb-10">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-text/70 mb-2">
          Pricing
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-navy mb-4">
          Simple, Transparent Pricing for Different Business Types
        </h1>
        <p className="max-w-2xl text-base sm:text-lg text-brand-text/80">
          Select your business type, choose the right turnover or property band, and instantly see
          DepoTax monthly packages or individual services that fit your situation. Our pricing
          experience is guided and designed to help you quickly find the support that matches your
          needs.
        </p>
        <div className="mt-4 h-px w-24 bg-brand-accent hero-accent-line" />

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="#guided-pricing"
            className="inline-flex items-center justify-center rounded-full bg-brand-accent text-white text-sm font-medium px-5 py-2.5 shadow-[0_12px_30px_rgba(154,0,0,0.40)] hover:bg-brand-accentDark transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent min-h-[44px]"
          >
            Start pricing
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-brand-grayBorder bg-white text-sm font-medium text-brand-navy px-5 py-2.5 hover:border-brand-navy/70 hover:bg-brand-grayLight/70 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent min-h-[44px]"
          >
            Book consultation
          </Link>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-grayBorder to-transparent" />
    </section>
  );
}

