'use client';

import { useRef, useState } from 'react';
import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';
import TestimonialsBackground from '@/components/ui/TestimonialsBackground';

const REVIEWS = [
  { quote: "It's been over 8 years since Depo Tax Accountants and Tax Consultants have been helping me in my tax matters. Great Service. Really advised to anyone who is looking for accountants. Brilliant!!!", name: 'Emanuel Correia', initials: 'EC', reviewUrl: 'https://share.google/qOfv4rDKFMtrYB43N' },
  { quote: "I have worked with DepoTax for the past 3 years now, starting with one business which is based on lettings. The Team are fantastic to work with. Very polite, knowledgeable and thorough. They offer the best advice for my situations at hand. DepoTax are very responsive to my requirements and needs, excellent in regular reminders to submit documents with a devotion to completing in timely manners. This leaves me stress free. A virtual office address service which is charged at a very reasonable price is also an option. I am extremely happy with the quality of work received from DepoTax. I now have another business based on developments which I seek the same services I do for my first business.", name: 'Key2Success Lets', initials: 'K2', reviewUrl: 'https://share.google/LDqLg0lYl29ZXXXOb' },
  { quote: "I have been with DepoTax (and predecessor) for 8 years, both for my self-assessments and with my Management Consulting business Intelad. They are knowledgeable, kind, professional, very thorough and diligent. Always very timely in reaching out for key deadlines, hyper reactive—e.g. for urgent queries, they will go the extra mile even in situations where I wasn't the most reactive myself. I highly recommend.", name: 'Khaled Diaw', initials: 'KD', reviewUrl: 'https://share.google/3nvbHWWMTBfM2zcAT' },
  { quote: "Working with my accountant has been nothing short of exceptional. Their professionalism, reliability, and genuine friendliness reflect a rare balance of precision and human warmth. They bring clarity where others bring confusion, and deliver solutions with both speed and integrity. It's refreshing to work with someone who not only understands the technical intricacies of financial strategy, but also operates with a level of honour, calm authority, and grace that makes every interaction effortless. This is not just an accountant—this is a trusted partner in growth.", name: 'M A Wahid', initials: 'MW', reviewUrl: 'https://share.google/D8GKGxFwAIFr1LGay' },
  { quote: "Professional and qualified accountants with experience! I would say a very helpful and quick response from the Team! Well recommend to everyone who needs help with their business and accounts!", name: 'Arkadiusz Paliwoda', initials: 'AP', reviewUrl: 'https://share.google/dzS0A0iK8Ig7J711K' },
  { quote: "I have used DepoTax's services for just over a year and I'm happy to say I'm very impressed. They helped me to set up a limited company and continue to provide a thorough service. Always on hand for an in-person meeting when useful, with a very calm and knowledgeable demeanour.", name: 'Joe Terry', initials: 'JT', reviewUrl: 'https://share.google/GJcbCdug8aaxMguFh' },
  { quote: "I've been using Depo Tax as my accountants for nearly 5 years now. I am pleased with their service and have had no issues filing my personal self assessment with them—they are quick, and even under pressure they're always answering to me. I recommend using them for the nice range of services they provide. Especially as sometimes I needed to ask questions, it's easy booking virtual or in-person consultations. This is what matters the most for me.", name: 'Joe Terry', initials: 'JT', reviewUrl: 'https://share.google/GJcbCdug8aaxMguFh' },
  { quote: "DepoTax provide an excellent professional service, knowledgeable, and always responsive. DepoTax makes managing my food safety company over the last 4 years so simple and easy. Couldn't ask for a better accountancy and team. Would thoroughly recommend.", name: 'Damiano Rizzo', initials: 'DR', reviewUrl: 'https://share.google/z3afC7w8o7R1LqIK3' },
  { quote: "DepoTax has broad expertise in all tax-related matters and in navigating both HMRC and Companies House. They provide a reliable and professional service. I know I made the right decision to engage DepoTax for my companies. I confidently rate them 5 STARS.", name: 'John Ramdeen', initials: 'JR', reviewUrl: 'https://share.google/SFWjODVGUGprbhy6P' },
  { quote: "I have been with Depo Tax since 2022. They have been exceptional as an accountant firm. They are always ready to assist me with my queries. I highly recommend Depo Tax's services.", name: 'Gabriel Jara Espinoza', initials: 'GJ', reviewUrl: 'https://share.google/K0R3o4z25QboLn23w' },
];

const GOOGLE_REVIEWS_URL = 'https://tinyurl.com/2axkc3eo';

function GoogleGIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.querySelector('[data-review-card]')?.offsetWidth || 380;
    scrollRef.current.scrollBy({ left: (cardWidth + 24) * dir, behavior: 'smooth' });
  };

  return (
    <section
      id="reviews"
      className="relative pt-16 pb-20 lg:pt-20 lg:pb-28 bg-white overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      <TestimonialsBackground />
      <SectionReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Decorative quote mark – md+ only */}
          <div className="hidden md:block absolute top-20 left-8 text-[#9a0000] opacity-[0.06] font-serif text-[8rem] leading-none pointer-events-none select-none" aria-hidden>
            "
          </div>

          <div className="text-center mb-10">
            <h2
              id="reviews-heading"
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
            >
              Testimonials
            </h2>
            {/* Large rating summary badge */}
            <Link
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-item reveal-item-delay-2 inline-flex flex-col items-center rounded-2xl border border-brand-grayBorder bg-white px-10 py-6 shadow-[0_14px_40px_rgba(15,23,42,0.12)] transition-all duration-300 hover:shadow-[0_18px_55px_rgba(15,23,42,0.18)] hover:border-brand-accent/20"
            >
              <span className="flex items-center gap-2 text-2xl sm:text-3xl font-bold text-brand-navy">
                <span className="tabular-nums">4.9</span>
                <span className="text-amber-500" aria-hidden>★★★★★</span>
              </span>
              <span className="text-sm sm:text-base text-brand-text/80 mt-1">
                Based on 192 Google reviews
              </span>
              <span className="inline-flex items-center gap-1.5 mt-2 text-xs font-medium text-brand-text/70">
                <GoogleGIcon className="w-4 h-4" />
                Google
              </span>
            </Link>
            {/* Verified chip */}
            <p className="reveal-item reveal-item-delay-3 mt-3 text-xs font-medium text-brand-text/60">
              Verified Google Review
            </p>
          </div>

          <div className="relative">
            {/* Arrow controls – premium rounded, nudge on hover */}
            <button
              type="button"
              onClick={() => scroll(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-brand-grayBorder shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center text-brand-navy transition-all duration-200 hover:bg-brand-accent hover:text-white hover:border-brand-accent hover:shadow-md -translate-x-2 lg:-translate-x-4 group"
              aria-label="Previous reviews"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-brand-grayBorder shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center text-brand-navy transition-all duration-200 hover:bg-brand-accent hover:text-white hover:border-brand-accent hover:shadow-md translate-x-2 lg:translate-x-4 group"
              aria-label="Next reviews"
            >
              <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide py-2 snap-x snap-mandatory"
            >
              {REVIEWS.map((review, index) => {
                const isExpanded = expandedIndex === index;
                return (
                  <article
                    key={`${review.name}-${index}`}
                    data-review-card
                    className="group relative flex-none w-[min(100%,320px)] sm:w-[360px] snap-center rounded-xl bg-white border border-brand-grayBorder p-6 sm:p-7 shadow-[0_4px_22px_rgba(15,23,42,0.10)] flex flex-col min-h-[220px] lg:min-h-[240px] card-hover transition-all duration-200"
                  >
                    <div className="absolute top-4 right-4 text-brand-text/40 transition-opacity duration-200 md:group-hover:opacity-70">
                      <GoogleGIcon className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-brand-navy/10 flex items-center justify-center text-brand-navy font-semibold text-sm shrink-0 transition-colors duration-200 hover:bg-brand-navy/15">
                        {review.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-brand-navy">{review.name}</p>
                      </div>
                    </div>
                    <div className="flex gap-0.5 text-amber-500 mb-3" aria-hidden>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <span key={i} className="text-sm">★</span>
                      ))}
                    </div>
                    <p className={`text-brand-text/90 text-sm leading-relaxed flex-1 ${isExpanded ? '' : 'line-clamp-4'}`}>
                      {review.quote}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setExpandedIndex(isExpanded ? null : index)}
                        className="text-sm font-semibold text-brand-accent hover:text-brand-accentDark transition-colors duration-200"
                      >
                        {isExpanded ? 'See less' : 'See more'}
                      </button>
                      {isExpanded && review.reviewUrl && (
                        <Link
                          href={review.reviewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:text-brand-accentDark transition-colors duration-200"
                        >
                          See review on Google
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
