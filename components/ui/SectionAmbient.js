'use client';

/**
 * Subtle animated blur circles for section background. Md+ only.
 */
export default function SectionAmbient() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden hidden md:block z-0"
      aria-hidden
    >
      <div className="absolute top-20 -right-20 w-72 h-72 rounded-full bg-brand-accent/5 blur-3xl animate-float-slow" />
      <div className="absolute bottom-20 -left-20 w-56 h-56 rounded-full bg-brand-navy/5 blur-3xl animate-drift-slow" />
    </div>
  );
}
