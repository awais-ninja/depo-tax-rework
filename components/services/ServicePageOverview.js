'use client';

export default function ServicePageOverview({ data }) {
  const { paragraphs } = data;
  if (!paragraphs || paragraphs.length === 0) return null;

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 bg-brand-grayLight/30"
      aria-labelledby="service-overview-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="service-overview-heading"
          className="text-lg sm:text-xl font-bold text-brand-navy tracking-tight mb-6"
        >
          Service Overview
        </h2>
        <div className="space-y-5 text-brand-text/85 leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-base sm:text-lg">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
