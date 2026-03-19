import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactMeetingInfo from '@/components/contact/ContactMeetingInfo';
import ContactOptions from '@/components/contact/ContactOptions';
import ContactForm from '@/components/contact/ContactForm';
import ContactOfficeLocations from '@/components/contact/ContactOfficeLocations';
import ContactFinalCTA from '@/components/contact/ContactFinalCTA';
import AreasProgressiveByRegion from '@/components/locations/AreasProgressiveByRegion';
import { getSimplifiedAreasGroupedByRegion } from '@/lib/locations/getLocations';

export const metadata = {
  title: 'Contact DepoTax | Accountants and Tax Consultants',
  description:
    'Contact DepoTax Accountants and Tax Consultants. Speak to our team, book a consultation, or visit one of our offices in London or Milton Keynes.',
};

export default function ContactPage() {
  const regions = getSimplifiedAreasGroupedByRegion()

  return (
    <>
      <Header />
      <main className="overflow-x-hidden min-h-screen">
        <ContactHero />
        <ContactMeetingInfo />
        <ContactOptions />
        <ContactForm />
        <ContactOfficeLocations />
        <section className="relative py-14 sm:py-16 md:py-20 border-t border-brand-grayBorder/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 id="areas-we-cover-heading" className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight mb-3">
                Areas We Cover
              </h2>
              <p className="text-base text-brand-text/85 leading-relaxed">
                We provide accounting services across England. Browse locations by main area below.
              </p>
            </div>
            <AreasProgressiveByRegion
              regions={regions}
              initialCount={5}
              step={20}
              ariaLabelledBy="areas-we-cover-heading"
            />
          </div>
        </section>
        <ContactFinalCTA />
      </main>
      <Footer />
    </>
  );
}
