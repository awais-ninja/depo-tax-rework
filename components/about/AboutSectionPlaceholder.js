'use client';

/**
 * Reusable section wrapper for About page sections.
 * Provides consistent spacing and layout; content to be added per section later.
 */
export default function AboutSectionPlaceholder({ id, ariaLabelledby, children, className = '' }) {
  return (
    <section
      id={id}
      className={`relative py-14 md:py-16 lg:py-20 overflow-hidden bg-white ${className}`}
      aria-labelledby={ariaLabelledby || undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
