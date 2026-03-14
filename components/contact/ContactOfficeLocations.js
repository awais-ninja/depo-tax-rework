'use client';

import Link from '@/components/ui/Link';
import { IconMapPin, IconEnvelope, IconPhone } from '@/components/ui/Icons';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';

const OFFICES = [
  {
    id: 'london',
    title: 'Head Office',
    subtitle: 'London',
    address: '2 - Sanders Parade, Greyhound Lane,\nStreatham, London SW16 5NL',
    email: 'info@depotax.co.uk',
    phones: ['+44 20 3659 9254', '+44 739 2438 213'],
    mapEmbedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.9981011866766!2d-0.13265502312509336!3d51.42146151697752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487606854113d385%3A0x50f0368ad0f6a156!2sDepoTax%20Accountants%20and%20Tax%20Consultants!5e0!3m2!1sen!2suk!4v1773379447332!5m2!1sen!2suk',
  },
  {
    id: 'camden',
    title: 'Camden Branch',
    subtitle: 'Camden',
    address: '140 Camden St,\nNW1 9PF,\nLondon, United Kingdom',
    email: 'info@depotax.co.uk',
    phones: ['+44 20 3659 9254', '+44 739 2438 213'],
    mapEmbedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.470254559297!2d-0.14292442311940246!3d51.54127550822758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3abcee0fc7%3A0x976d5dd98a095b8d!2sDepoTax%20Accountants%20and%20Tax%20Consultants%20-%20Camden!5e0!3m2!1sen!2suk!4v1773379466782!5m2!1sen!2suk',
  },
  {
    id: 'milton-keynes',
    title: 'Milton Keynes Branch',
    subtitle: 'Milton Keynes',
    address: '119 Whaddon Wy,\nBletchley,\nMilton Keynes MK3 7DY',
    email: 'info@depotax.co.uk',
    phones: ['+44 20 3659 9254'],
    mapEmbedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.736384690349!2d-0.7642701230978781!3d51.993458275079234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876550f500facbb%3A0x4f1f01aa47f6f2bd!2sDepoTax%20Accountants%20and%20Tax%20Consultants%20-%20Milton%20Keynes!5e0!3m2!1sen!2suk!4v1773379510707!5m2!1sen!2suk',
  },
  {
    id: 'fulham',
    title: 'Fulham Branch',
    subtitle: 'Fulham',
    address: 'New Kings Rd,\nLondon SW6 4LZ',
    email: 'info@depotax.co.uk',
    phones: ['+44 20 3659 9254'],
    mapEmbedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.2827269471563!2d-0.20932572312274017!3d51.471324513337784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f7ee5ec701d%3A0x924ff4931883d528!2sDepoTax%20Accountants%20and%20Tax%20Consultants%20-%20Fulham!5e0!3m2!1sen!2suk!4v1773379540155!5m2!1sen!2suk',
  },
];

function telHref(num) {
  return `tel:${num.replace(/\s/g, '')}`;
}

export default function ContactOfficeLocations() {
  return (
    <section
      id="office-locations"
      className="relative overflow-hidden scroll-mt-24 bg-brand-grayLight/40 py-12 sm:py-14 border-t border-brand-grayBorder/60"
      aria-labelledby="offices-heading"
    >
      <SectionBackgroundLabel label="OFFICES" position="center-top" size="lg" />
      <SectionAmbient />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="offices-heading" className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight mb-10">
          Our Offices
        </h2>

        <div className="space-y-14 sm:space-y-16">
          {OFFICES.map((office) => (
            <article
              key={office.id}
              id={office.id}
              className="scroll-mt-24"
              aria-labelledby={`office-${office.id}-title`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 lg:gap-10 gap-8">
                <div className="lg:col-span-2">
                  <div className="rounded-2xl border border-brand-grayBorder bg-white p-6 shadow-[0_2px_12px_rgba(15,23,42,0.05)]">
                    <h3 id={`office-${office.id}-title`} className="text-lg font-bold text-brand-navy tracking-tight mb-1">
                      {office.title}
                    </h3>
                    {office.subtitle && (
                      <p className="text-sm text-brand-accent font-medium mb-4">{office.subtitle}</p>
                    )}
                    <div className="space-y-4 text-sm">
                      <div className="flex gap-3">
                        <IconMapPin className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden />
                        <p className="text-brand-text/90 whitespace-pre-line">{office.address}</p>
                      </div>
                      <div className="flex gap-3">
                        <IconEnvelope className="w-5 h-5 text-brand-accent flex-shrink-0" aria-hidden />
                        <Link
                          href={`mailto:${office.email}`}
                          className="text-brand-text/90 hover:text-brand-accent transition-colors"
                        >
                          {office.email}
                        </Link>
                      </div>
                      <div className="flex gap-3">
                        <IconPhone className="w-5 h-5 text-brand-accent flex-shrink-0" aria-hidden />
                        <div className="space-y-0.5">
                          {office.phones.map((num) => (
                            <Link
                              key={num}
                              href={telHref(num)}
                              className="min-h-12 py-2 inline-flex items-center text-brand-text/90 hover:text-brand-accent transition-colors"
                              aria-label={`Call ${num}`}
                            >
                              {num}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3 hidden sm:block">
                  <div className="rounded-2xl overflow-hidden border border-brand-grayBorder shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
                    <iframe
                      title={`Map: ${office.title} - ${office.subtitle || office.title}`}
                      src={office.mapEmbedSrc}
                      width="100%"
                      height="450"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full min-h-[280px] sm:min-h-[350px] lg:min-h-[450px] border-0"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
