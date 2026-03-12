'use client';

import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';
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

const OFFICES = [
  {
    title: 'Head Office – Streatham, London',
    address: '2 Sanders Parade, Greyhound Lane\nStreatham, London SW16 5NL',
    email: 'info@depotax.co.uk',
    phones: ['+44 20 3659 9254', '+44 739 2438 213'],
  },
  {
    title: 'Fulham Office',
    address: 'New Kings Rd\nLondon SW6 4LZ',
    email: 'info@depotax.co.uk',
    phones: ['+44 20 3659 9254'],
  },
  {
    title: 'Camden Office',
    address: '140 Camden St\nLondon NW1 9PF\nUnited Kingdom',
    email: 'info@depotax.co.uk',
    phones: ['+44 20 3659 9254', '+44 739 2438 213'],
  },
  {
    title: 'Milton Keynes Office',
    address: '119 Whaddon Wy\nBletchley\nMilton Keynes MK3 7DY',
    email: 'info@depotax.co.uk',
    phones: ['+44 20 3659 9254'],
  },
];

function OfficeCard({ office, delayClass }) {
  const telHref = (num) => `tel:${num.replace(/\s/g, '')}`;
  return (
    <article
      className={`reveal-item ${delayClass} group rounded-xl border border-brand-grayBorder bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.08)] transition-all duration-200 md:hover:-translate-y-1 md:hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] md:hover:border-[#9a0000]/30`}
    >
      <h3 className="text-lg font-semibold text-brand-navy mb-4">
        {office.title}
      </h3>
      <div className="space-y-3">
        <div className="flex gap-3">
          <span className="shrink-0 w-9 h-9 rounded-full bg-[#9a0000]/10 flex items-center justify-center text-[#9a0000]">
            <HiMapPin className="w-4 h-4" aria-hidden />
          </span>
          <p className="text-sm text-brand-text/85 whitespace-pre-line">
            {office.address}
          </p>
        </div>
        <div className="flex gap-3">
          <span className="shrink-0 w-9 h-9 rounded-full bg-[#9a0000]/10 flex items-center justify-center text-[#9a0000]">
            <HiEnvelope className="w-4 h-4" aria-hidden />
          </span>
          <a
            href={`mailto:${office.email}`}
            className="text-sm text-brand-text/85 hover:text-[#9a0000] transition-colors"
          >
            {office.email}
          </a>
        </div>
        <div className="flex gap-3">
          <span className="shrink-0 w-9 h-9 rounded-full bg-[#9a0000]/10 flex items-center justify-center text-[#9a0000]">
            <HiPhone className="w-4 h-4" aria-hidden />
          </span>
          <div className="text-sm text-brand-text/85 space-y-0.5">
            {office.phones.map((num) => (
              <a
                key={num}
                href={telHref(num)}
                className="block hover:text-[#9a0000] transition-colors"
              >
                {num}
              </a>
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
      <SectionReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2
              id="offices-heading"
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
            >
              Our Locations
            </h2>
            <p className="reveal-item reveal-item-delay-2 text-sm sm:text-base text-brand-text/85 mb-2">
              Visit our offices across London and the UK. DepoTax supports
              businesses, contractors, landlords and self-employed
              professionals with professional accounting, tax returns,
              bookkeeping and business support.
            </p>
          </div>

          {/* Opening hours – row layout like reference */}
          <div className="reveal-item reveal-item-delay-2 mb-10 max-w-2xl mx-auto">
            <div className="rounded-2xl border border-brand-grayBorder bg-white shadow-[0_8px_28px_rgba(15,23,42,0.08)] overflow-hidden">
              <div className="flex items-center gap-3 px-5 sm:px-6 py-4 border-b border-brand-grayBorder/60 bg-brand-grayLight/30">
                <span className="w-10 h-10 rounded-full bg-[#9a0000]/10 flex items-center justify-center text-[#9a0000] shrink-0">
                  <HiClock className="w-5 h-5" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-brand-navy">
                  Opening hours
                </h3>
              </div>
              <div className="p-5 sm:px-6 sm:py-4">
                <ul className="divide-y divide-brand-grayBorder/70">
                  {MAIN_HOURS.map(({ day, open: isOpen, start, end }) => (
                    <li
                      key={day}
                      className="flex flex-wrap items-center gap-2 sm:gap-3 py-3 first:pt-0 last:pb-0"
                    >
                      <span
                        className={`shrink-0 w-2.5 h-2.5 rounded-sm mt-0.5 ${isOpen ? 'bg-emerald-500' : 'bg-[#9a0000]'}`}
                        aria-hidden
                      />
                      <span className="w-20 sm:w-28 text-sm font-medium text-brand-navy shrink-0">
                        {day}
                      </span>
                      <span className="flex items-center gap-1 sm:gap-1.5 text-sm min-w-0">
                        {isOpen ? (
                          <>
                            <span className="px-2 sm:px-3 py-1.5 rounded-lg bg-brand-grayLight/80 border border-brand-grayBorder/80 text-brand-text/90 tabular-nums font-medium text-xs sm:text-sm">
                              {start}
                            </span>
                            <span className="text-brand-text/50 shrink-0">–</span>
                            <span className="px-2 sm:px-3 py-1.5 rounded-lg bg-brand-grayLight/80 border border-brand-grayBorder/80 text-brand-text/90 tabular-nums font-medium text-xs sm:text-sm">
                              {end}
                            </span>
                          </>
                        ) : (
                          <span className="px-2 sm:px-3 py-1.5 rounded-lg bg-brand-grayLight/60 border border-brand-grayBorder/80 text-brand-text/50 italic text-xs sm:text-sm">
                            — : —
                          </span>
                        )}
                      </span>
                      <span
                        className={`ml-auto text-xs sm:text-sm font-medium px-2.5 sm:px-3 py-1.5 rounded-lg border shrink-0 ${
                          isOpen
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                            : 'bg-red-50 border-red-200 text-[#9a0000]'
                        }`}
                      >
                        {isOpen ? 'Open' : 'Closed'}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-brand-grayBorder/60">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-text/60 mb-2">
                    Special availability
                  </p>
                  <ul className="space-y-1.5 text-sm text-brand-text/85">
                    {SPECIAL_HOURS.map(({ label, note }) => (
                      <li key={label}>
                        <span className="font-medium text-brand-navy">{label}:</span>{' '}
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {OFFICES.map((office, i) => (
              <OfficeCard
                key={office.title}
                office={office}
                delayClass={
                  i < 2
                    ? i === 0
                      ? 'reveal-item-delay-3'
                      : 'reveal-item-delay-4'
                    : i === 2
                      ? 'reveal-item-delay-5'
                      : 'reveal-item-delay-6'
                }
              />
            ))}
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
                href="/book-consultation"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white bg-[#9a0000] hover:bg-[#7a0000] transition-colors duration-200"
              >
                Book Consultation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold border-2 border-[#9a0000] text-[#9a0000] hover:bg-[#9a0000] hover:text-white transition-colors duration-200"
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
