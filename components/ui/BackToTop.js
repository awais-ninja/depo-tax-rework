'use client';

import { useState, useEffect } from 'react';

const SCROLL_THRESHOLD = 400;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-accent text-white shadow-lg hover:bg-brand-accentDark focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 flex items-center justify-center transition-all duration-200 hover:scale-105"
      aria-label="Back to top"
    >
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}
