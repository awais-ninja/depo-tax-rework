'use client';

/**
 * Testimonials section ambient background. Md+ only; hidden on mobile.
 */
export default function TestimonialsBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block z-0"
      aria-hidden
    >
      {/* Soft circular glow – right side */}
      <div
        className="ambient-shape absolute top-1/2 -translate-y-1/2 -right-32 w-96 h-96 rounded-full bg-[#9a0000] opacity-[0.09] animate-float-slow"
        style={{ animationDelay: '1s' }}
      />
      {/* Small abstract shape – behind section title area */}
      <div
        className="ambient-shape absolute top-12 left-1/4 w-24 h-24 rounded-full bg-[#1F4E79] opacity-[0.09] animate-float-soft"
        style={{ animationDelay: '2s' }}
      />
    </div>
  );
}
