'use client';

export default function ServicePageLocalSeo({ content }) {
  if (!content || typeof content !== 'string') return null;

  const paragraphs = content.trim().split(/\n\n+/).filter(Boolean);

  return (
    <section
      className="relative py-12 sm:py-16 md:py-20 bg-brand-grayLight/30"
      aria-labelledby="service-local-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="service-local-heading"
          className="text-lg sm:text-xl font-bold text-brand-navy tracking-tight mb-6"
        >
          Local and Industry Support
        </h2>
        <div className="space-y-4 text-brand-text/85 leading-relaxed">
          {paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
