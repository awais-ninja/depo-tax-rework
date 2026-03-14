'use client';

import Link from '@/components/ui/Link';
import { IconPhone, IconEnvelope, IconBuildingOffice2 } from '@/components/ui/Icons';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';

const PHONE_PRIMARY = '+44 20 3659 9254';
const PHONE_SECONDARY = '+44 739 2438 213';
const EMAIL = 'info@depotax.co.uk';

const OPTIONS = [
  {
    title: 'Call Our Team',
    content: [PHONE_PRIMARY, PHONE_SECONDARY],
    ctaLabel: 'Call Now',
    href: `tel:${PHONE_PRIMARY.replace(/\s/g, '')}`,
    Icon: IconPhone,
  },
  {
    title: 'Send an Email',
    content: [EMAIL],
    ctaLabel: 'Email Us',
    href: `mailto:${EMAIL}`,
    Icon: IconEnvelope,
  },
  {
    title: 'Visit Our Offices',
    content: ['We have offices across London and Milton Keynes where you can meet our team.'],
    ctaLabel: 'View Locations',
    href: '#office-locations',
    Icon: IconBuildingOffice2,
  },
];

export default function ContactOptions() {
  return (
    <section
      className="relative overflow-hidden bg-brand-grayLight/40 py-12 sm:py-14 border-t border-brand-grayBorder/60"
      aria-labelledby="contact-options-heading"
    >
      <SectionBackgroundLabel label="OPTIONS" position="right-mid" size="md" />
      <SectionAmbient />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="contact-options-heading" className="sr-only">
          Quick contact options
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {OPTIONS.map((option) => (
            <div
              key={option.title}
              className="rounded-2xl border border-brand-grayBorder bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.05)] hover:shadow-[0_8px_28px_rgba(15,23,42,0.08)] transition-shadow duration-200"
            >
              <span className="flex w-11 h-11 rounded-xl bg-brand-accent/10 items-center justify-center text-brand-accent mb-4">
                <option.Icon className="w-6 h-6" aria-hidden />
              </span>
              <h3 className="text-lg font-bold text-brand-navy tracking-tight mb-3">
                {option.title}
              </h3>
              <div className="space-y-1 mb-5 text-sm text-brand-text/90">
                {option.content.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <Link
                href={option.href}
                target={option.href.startsWith('#') || option.href.startsWith('tel:') || option.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={option.href.startsWith('mailto:') || option.href.startsWith('tel:') ? undefined : 'noopener noreferrer'}
                className="inline-flex items-center justify-center min-h-12 px-5 py-2.5 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
              >
                {option.ctaLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
