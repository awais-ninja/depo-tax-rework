'use client';

import { useState } from 'react';
import Link from '@/components/ui/Link';
import SectionReveal from '@/components/ui/SectionReveal';
import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import { ABOUT_REVIEWS_INTRO, ABOUT_REVIEWS } from './aboutReviewsData';

const MOBILE_VISIBLE_COUNT = 3;

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

function ReviewCard({ review, delayClass }) {
  return (
    <article
      className={`reveal-item ${delayClass} relative flex flex-col rounded-2xl border border-brand-grayBorder bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-all duration-200 md:hover:shadow-[0_8px_28px_rgba(15,23,42,0.08)] md:hover:border-brand-accent/10 min-h-[220px] sm:min-h-[240px]`}
      aria-labelledby={`review-name-${review.id}`}
    >
      <div className="absolute top-4 right-4 text-brand-text/40">
        <GoogleGIcon className="w-5 h-5" />
      </div>
      <div className="flex items-center gap-3 mb-3 pr-8">
        <div className="w-10 h-10 rounded-full bg-brand-navy/10 flex items-center justify-center text-brand-navy font-semibold text-sm shrink-0">
          {review.initials}
        </div>
        <p id={`review-name-${review.id}`} className="font-semibold text-brand-navy">
          {review.name}
        </p>
      </div>
      <div className="flex gap-0.5 text-amber-500 mb-3" aria-hidden>
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="text-sm">★</span>
        ))}
      </div>
      <p className="text-brand-text/90 text-sm sm:text-base leading-relaxed flex-1 line-clamp-5">
        {review.quote}
      </p>
      {review.reviewUrl && (
        <Link
          href={review.reviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-brand-accent hover:text-brand-accentDark transition-colors duration-200"
        >
          View on Google
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </Link>
      )}
    </article>
  );
}

export default function AboutClientReviews() {
  const [expanded, setExpanded] = useState(false);
  const hasMore = ABOUT_REVIEWS.length > MOBILE_VISIBLE_COUNT;

  return (
    <section
      id="client-reviews"
      className="relative py-12 sm:py-14 md:py-16 lg:py-20 overflow-hidden bg-white"
      aria-labelledby="client-reviews-heading"
    >
      <SectionBackgroundLabel label="REVIEWS" position="left-top" size="md" />
      <SectionReveal>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h2
              id="client-reviews-heading"
              className="reveal-item reveal-item-delay-1 text-2xl sm:text-3xl font-bold uppercase tracking-tight mb-4"
            >
              <span className="text-[#2b4b6b]">Client </span>
              <span className="text-[#9a0000]">Reviews</span>
            </h2>
            <p className="reveal-item reveal-item-delay-2 mt-4 text-base text-brand-text/85 leading-relaxed">
              {ABOUT_REVIEWS_INTRO}
            </p>
          </div>

          {/* Google review summary — trust signal above cards */}
          <div className="reveal-item reveal-item-delay-3 flex flex-col items-center justify-center gap-1 mb-8 sm:mb-10">
            <div className="flex items-center gap-1.5 text-amber-500" aria-hidden>
              <span className="text-lg sm:text-xl">★</span>
              <span className="text-lg sm:text-xl font-bold text-brand-navy">4.9</span>
              <span className="text-brand-text/60">/ 5</span>
            </div>
            <p className="text-sm text-brand-text/75">
              Based on 120+ client reviews
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {ABOUT_REVIEWS.map((review, i) => (
              <div
                key={review.id}
                className={
                  hasMore && i >= MOBILE_VISIBLE_COUNT && !expanded
                    ? 'hidden md:block'
                    : ''
                }
              >
                <ReviewCard
                  review={review}
                  delayClass={
                    i < 3 ? `reveal-item-delay-${i + 3}` : 'reveal-item-delay-6'
                  }
                />
              </div>
            ))}
          </div>

          {/* See more / See less — mobile only */}
          {hasMore && (
            <div className="md:hidden flex justify-center mt-6">
              <button
                type="button"
                onClick={() => setExpanded((e) => !e)}
                className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark active:bg-brand-accentDark/90 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 text-sm"
                aria-expanded={expanded}
              >
                {expanded ? 'See less' : 'See more reviews'}
              </button>
            </div>
          )}

          <p className="reveal-item reveal-item-delay-6 text-center mt-8">
            <Link
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accentDark transition-colors duration-200"
            >
              <GoogleGIcon className="w-4 h-4" />
              Read more reviews on Google
            </Link>
          </p>
        </div>
      </SectionReveal>
    </section>
  );
}
