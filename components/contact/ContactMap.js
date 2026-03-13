'use client';

import Link from '@/components/ui/Link';

// Head Office: 2 - Sanders Parade, Greyhound Lane, Streatham, London SW16 5NL
const MAP_QUERY = '2+Sanders+Parade+Greyhound+Lane+Streatham+London+SW16+5NL';
const MAP_EMBED_URL = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const MAP_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('2 Sanders Parade, Greyhound Lane, Streatham, London SW16 5NL')}`;

export default function ContactMap() {
  return (
    <section
      className="bg-white py-12 sm:py-14 border-t border-brand-grayBorder/60"
      aria-labelledby="map-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 id="map-heading" className="text-xl sm:text-2xl font-bold text-brand-navy tracking-tight">
            Find Us
          </h2>
          <Link
            href={MAP_LINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-brand-accent hover:underline inline-flex items-center gap-1"
          >
            Open in Google Maps
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
        <div className="rounded-2xl overflow-hidden border border-brand-grayBorder shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
          <iframe
            title="DepoTax Head Office location - Streatham, London"
            src={MAP_EMBED_URL}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full min-h-[280px] sm:min-h-[350px]"
          />
        </div>
      </div>
    </section>
  );
}
