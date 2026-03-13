import Link from '@/components/ui/Link';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';

export default function PricingCTA() {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      <SectionBackgroundLabel label="NEXT STEPS" position="left-mid" size="md" />
      <SectionAmbient />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16 text-center text-white">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
          Not sure which option is right for you?
        </h2>
        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto mb-8">
          Speak with our team and we&apos;ll help you choose the right accounting support for your
          situation.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-accent text-white text-sm font-medium px-6 py-2.5 shadow-[0_16px_45px_rgba(0,0,0,0.35)] hover:bg-brand-accentDark transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy focus-visible:ring-brand-accent min-h-12"
          >
            Book a free consultation
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/70 text-sm font-medium text-white px-6 py-2.5 hover:bg-white hover:text-brand-navy transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy focus-visible:ring-white min-h-12"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}

