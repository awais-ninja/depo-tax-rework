'use client';

export default function SectionReveal({ children, className = '' }) {
  // Simplified: no IntersectionObserver or extra wrapper.
  // Keeps markup minimal and avoids client layout work.
  return <div className={className}>{children}</div>;
}
