'use client';

import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';
import { HiMapPin, HiEnvelope, HiPhone, HiClock } from 'react-icons/hi2';

const MAIN_HOURS = [
  { day: 'Monday', open: true, start: '10:00', end: '17:00' },
  { day: 'Tuesday', open: true, start: '10:00', end: '17:00' },
  { day: 'Wednesday', open: true, start: '10:00', end: '17:00' },
  { day: 'Thursday', open: true, start: '10:00', end: '17:00' },
  { day: 'Friday', open: true, start: '10:00', end: '17:00' },
  { day: 'Saturday', open: false },
  { day: 'Sunday', open: false },
];

const SPECIAL_HOURS = [
  { label: 'Saturdays', note: 'Pre-booked appointments only' },
  { label: 'Sundays', note: 'Available (Appointments Only)' },
];

const MAP_HEAD_OFFICE = 'https://maps.app.goo.gl/4NEbCUgv2xsFiP2T8'; // London
const MAP_FULHAM = 'https://maps.app.goo.gl/cb2WVmSebjhz7jY48';
const MAP_CAMDEN = 'https://maps.app.goo.gl/VnqDGF9CCkqg1k1q8';
const MAP_MILTON_KEYNES = 'https://maps.app.goo.gl/oMXq4sheufapRvkH6';

const HEAD_OFFICE = {
  title: 'Head Office',
  subtitle: 'London',
  address: '2 Sanders Parade, Greyhound Lane\nStreatham, London SW16 5NL',
  mapLink: MAP_HEAD_OFFICE,
  email: 'info@depotax.co.uk',
  phones: ['+44 20 3659 9254', '+44 739 2438 213'],
};

const BRANCHES = [
  {
    title: 'Fulham Office',
    address: 'New Kings Rd\nLondon SW6 4LZ',
    mapLink: MAP_FULHAM,
    email: 'info@depotax.co.uk',
    phones: ['+44 20 3659 9254'],
  },
  {
    title: 'Camden Office',
    address: '140 Camden St\nLondon NW1 9PF\nUnited Kingdom',
    mapLink: MAP_CAMDEN,
    email: 'info@depotax.co.uk',
    phones: ['+44 20 3659 9254', '+44 739 2438 213'],
  },
  {
    title: 'Milton Keynes Office',
    address: '119 Whaddon Wy\nBletchley\nMilton Keynes MK3 7DY',
    mapLink: MAP_MILTON_KEYNES,
    email: 'info@depotax.co.uk',
    phones: ['+44 20 3659 9254'],
  },
];

function OfficeCard({ office, delayClass }) {
  const telHref = (num) => `tel:${num.replace(/\s/g, '')}`;
  return (
    <article
      className={`reveal-item ${delayClass} group rounded-xl border border-brand-grayBorder bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.08)] transition-all duration-200 md:hover:-translate-y-1 md:hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] md:hover:border-[#9a0000]/30 w-full max-w-sm sm:max-w-none text-center sm:text-left`}
    >
      <h3 className="text-lg font-semibold text-brand-navy mb-4">
        {office.title}
      </h3>
      <div className="space-y-3">
        <div className="flex gap-3 justify-center sm:justify-start">
          <span className="shrink-0 w-9 h-9 rounded-full bg-[#9a0000]/10 flex items-center justify-center text-[#9a0000]">
            <HiMapPin className="w-4 h-4" aria-hidden />
          </span>
          {office.mapLink ? (
            <Link
              href={office.mapLink}
              className="text-sm text-brand-text/85 hover:text-[#9a0000] transition-colors whitespace-pre-line"
            >
              {office.address}
            </Link>
          ) : (
            <p className="text-sm text-brand-text/85 whitespace-pre-line">
              {office.address}
            </p>
          )}
        </div>
        <div className="flex gap-3 justify-center sm:justify-start">
          <span className="shrink-0 w-9 h-9 rounded-full bg-[#9a0000]/10 flex items-center justify-center text-[#9a0000]">
            <HiEnvelope className="w-4 h-4" aria-hidden />
          </span>
          <Link
            href={`mailto:${office.email}`}
            className="text-sm text-brand-text/85 hover:text-[#9a0000] transition-colors"
          >
            {office.email}
          </Link>
        </div>
        <div className="flex gap-3 justify-center sm:justify-start">
          <span className="shrink-0 w-9 h-9 rounded-full bg-[#9a0000]/10 flex items-center justify-center text-[#9a0000]">
            <HiPhone className="w-4 h-4" aria-hidden />
          </span>
          <div className="text-sm text-brand-text/85 space-y-0.5">
            {office.phones.map((num) => (
              <Link
                key={num}
                href={telHref(num)}
                className="min-h-[44px] py-2 inline-flex items-center hover:text-[#9a0000] transition-colors"
                aria-label={`Call ${num}`}
              >
                {num}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function OfficeLocations() {
  return (
    <section
      className="relative py-16 lg:py-24 bg-brand-grayLight/50 overflow-hidden"
      aria-labelledby="offices-heading"
    >
      <SectionBackgroundLabel label="LOCATIONS" position="center-top" />
      <SectionAmbient />
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2
              id="offices-heading"
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
            >
              <span className="text-[#2b4b6b]">Our </span>
              <span className="text-[#9a0000]">Locations</span>
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-sm sm:text-base text-brand-text/85 mb-2">
              Visit our offices across London and the UK. DepoTax supports
              businesses, contractors, landlords and self-employed
              professionals with professional accounting, tax returns,
              bookkeeping and business support.
            </p>
          </div>

          {/* Opening Hours – unique layout: status strip + hours + CTA */}
          <div className="reveal-item reveal-item-delay-2 mb-12 lg:mb-14">
            <div className="max-w-4xl mx-auto rounded-2xl border border-brand-grayBorder bg-white overflow-hidden shadow-[0_4px_24px_rgba(15,23,42,0.06)]">
              {/* Status strip – same on mobile and desktop */}
              <div className="flex flex-wrap items-center gap-3 px-4 py-4 sm:px-6 sm:py-4 bg-brand-navy text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" aria-hidden />
                <span className="text-sm font-semibold">
                  Open Monday – Friday · 10:00 – 17:00
                </span>
                <span className="text-white/70 text-xs sm:text-sm ml-auto">
                  Weekends by appointment
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr,minmax(260px,320px)] min-h-0">
                {/* Left: Full hours list */}
                <div className="p-5 sm:p-6 lg:p-8 lg:border-r border-brand-grayBorder">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 rounded-lg bg-brand-grayLight flex items-center justify-center text-brand-accent shrink-0" aria-hidden>
                      <HiClock className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-brand-navy">
                        Office hours
                      </h3>
                      <p className="text-xs text-brand-text/70 mt-0.5">
                        Full schedule
                      </p>
                    </div>
                  </div>
                  <dl className="grid grid-cols-2 sm:flex sm:flex-col gap-0">
                    {MAIN_HOURS.map(({ day, open: isOpen, start, end }) => (
                      <div
                        key={day}
                        className="flex items-baseline justify-between gap-2 py-2 sm:py-2.5 border-b border-brand-grayBorder/50 last:border-0 sm:flex-row"
                      >
                        <dt className="text-sm font-medium text-brand-navy shrink-0 w-24">
                          {day}
                        </dt>
                        <dd className="text-sm text-brand-text/90 tabular-nums">
                          {isOpen ? `${start} – ${end}` : 'Closed'}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-4 pt-4 border-t-2 border-brand-accent/30 bg-brand-accent/5 rounded-lg px-4 py-3 sm:px-4 sm:py-3">
                    <p className="text-sm font-bold uppercase tracking-wider text-brand-accent mb-2">
                      Special availability
                    </p>
                    <ul className="space-y-2 text-sm sm:text-base">
                      {SPECIAL_HOURS.map(({ label, note }) => (
                        <li key={label} className="flex flex-wrap gap-x-1.5 items-baseline">
                          <span className="font-semibold text-brand-navy">{label}:</span>
                          <span className="text-brand-text/90 font-medium">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Right: Contact message + location + CTA */}
                <div className="p-5 sm:p-6 lg:p-8 bg-brand-grayLight/40 flex flex-col justify-center border-t lg:border-t-0 lg:border-l-0 border-brand-grayBorder">
                  <p className="text-sm text-brand-text/90 leading-relaxed mb-5">
                    Need assistance? Contact our team during office hours.
                  </p>
                  <Link
                    href="https://www.picktime.com/aazizandco"
                    className="inline-flex items-center justify-center w-full sm:w-auto min-h-[44px] px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200"
                  >
                    Book an appointment
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Head Office – prominent first, with map beside it */}
          <div className="reveal-item reveal-item-delay-3 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
              <article className="rounded-2xl border-2 border-brand-accent/20 bg-white p-6 sm:p-8 shadow-[0_8px_28px_rgba(15,23,42,0.08)] text-center sm:text-left flex flex-col justify-center">
                <div className="flex flex-wrap items-baseline gap-2 mb-5 justify-center sm:justify-start">
                  <h3 className="text-xl font-bold text-brand-navy">{HEAD_OFFICE.title}</h3>
                  <span className="text-brand-accent font-semibold">{HEAD_OFFICE.subtitle}</span>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3 justify-center sm:justify-start">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                      <HiMapPin className="w-4 h-4" aria-hidden />
                    </span>
                    <Link href={HEAD_OFFICE.mapLink} className="text-sm text-brand-text/85 hover:text-brand-accent transition-colors whitespace-pre-line min-h-[44px] py-2 inline-flex items-start" aria-label="View head office on map">
                      {HEAD_OFFICE.address}
                    </Link>
                  </div>
                  <div className="flex gap-3 justify-center sm:justify-start">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                      <HiEnvelope className="w-4 h-4" aria-hidden />
                    </span>
                    <Link href={`mailto:${HEAD_OFFICE.email}`} className="text-sm text-brand-text/85 hover:text-brand-accent transition-colors min-h-[44px] py-2 inline-flex items-center" aria-label="Email head office">
                      {HEAD_OFFICE.email}
                    </Link>
                  </div>
                  <div className="flex gap-3 justify-center sm:justify-start">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                      <HiPhone className="w-4 h-4" aria-hidden />
                    </span>
                    <div className="text-sm text-brand-text/85 space-y-0.5">
                      {HEAD_OFFICE.phones.map((num) => (
                        <Link key={num} href={`tel:${num.replace(/\s/g, '')}`} className="min-h-[44px] py-2 inline-flex items-center hover:text-brand-accent transition-colors" aria-label={`Call ${num}`}>
                          {num}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
              <div className="rounded-2xl overflow-hidden border-2 border-brand-accent/20 bg-white shadow-[0_8px_28px_rgba(15,23,42,0.08)] min-h-[280px] lg:min-h-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.9981011866766!2d-0.13265502312508187!3d51.42146151697752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487606854113d385%3A0x50f0368ad0f6a156!2sDepoTax%20Accountants%20and%20Tax%20Consultants!5e0!3m2!1sen!2suk!4v1773362277280!5m2!1sen!2suk"
                  title="DepoTax head office – 2 Sanders Parade, Greyhound Lane, Streatham, London SW16 5NL"
                  className="w-full h-full min-h-[280px] lg:min-h-[320px] border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Branches */}
          <div className="reveal-item reveal-item-delay-4 mb-12 text-center sm:text-left">
            <h3 className="text-lg font-bold text-brand-navy mb-4">Branches</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center sm:justify-items-stretch">
              {BRANCHES.map((office, i) => (
                <OfficeCard
                  key={office.title}
                  office={office}
                  delayClass="reveal-item-delay-5"
                />
              ))}
            </div>
          </div>

          <div className="reveal-item reveal-item-delay-6 text-center rounded-2xl border border-brand-grayBorder bg-white px-6 py-8 sm:p-10 shadow-[0_4px_20px_rgba(15,23,42,0.06)]">
            <h3 className="text-lg font-semibold text-brand-navy mb-2">
              Speak With a DepoTax Accountant Today
            </h3>
            <p className="text-sm text-brand-text/85 max-w-xl mx-auto mb-6">
              Book a consultation with our experienced accountants and get
              expert support for bookkeeping, tax returns, payroll and business
              accounting.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="https://www.picktime.com/aazizandco"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-xl font-semibold text-white bg-[#9a0000] hover:bg-[#7a0000] transition-colors duration-200"
                aria-label="Book a consultation (locations section)"
              >
                Book Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-xl font-semibold border-2 border-[#9a0000] text-[#9a0000] hover:bg-[#9a0000] hover:text-white transition-colors duration-200"
                aria-label="Contact DepoTax (locations section)"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
