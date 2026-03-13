import SectionBackgroundLabel from '@/components/ui/SectionBackgroundLabel';
import SectionAmbient from '@/components/ui/SectionAmbient';

export default function PricingIntroduction() {
  const steps = [
    {
      title: 'Choose your business type',
      description:
        'Select whether you are self-employed, a contractor, a limited company, or a landlord.',
    },
    {
      title: 'Select your size',
      description: 'Choose the turnover band or property size that matches your situation.',
    },
    {
      title: 'Pick your package or services',
      description:
        'View monthly packages or select individual services depending on your needs.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-brand-grayLight/40">
      <SectionBackgroundLabel label="HOW IT WORKS" position="left-top" size="md" />
      <SectionAmbient />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <header className="max-w-2xl mb-6 sm:mb-8">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-text/70 mb-2">
            How it works
          </p>
          <h2 className="text-xl sm:text-2xl font-semibold text-brand-navy mb-2">
            How our pricing works
          </h2>
          <p className="text-sm sm:text-base text-brand-text/80">
            Our pricing system is designed to be simple and transparent. Follow the steps below to
            see the services and packages that best match your business.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-brand-grayBorder/80 bg-white shadow-[0_4px_18px_rgba(15,23,42,0.05)] px-4 py-5 sm:px-5 sm:py-6 space-y-2"
            >
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-brand-accent">
                Step {index + 1}
              </p>
              <h3 className="text-sm sm:text-base font-semibold text-brand-navy">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-text/80">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

