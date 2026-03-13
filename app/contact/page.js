import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactMeetingInfo from '@/components/contact/ContactMeetingInfo';
import ContactOptions from '@/components/contact/ContactOptions';
import ContactForm from '@/components/contact/ContactForm';
import ContactOfficeLocations from '@/components/contact/ContactOfficeLocations';
import ContactFinalCTA from '@/components/contact/ContactFinalCTA';

export const metadata = {
  title: 'Contact DepoTax | Accountants and Tax Consultants',
  description:
    'Contact DepoTax Accountants and Tax Consultants. Speak to our team, book a consultation, or visit one of our offices in London or Milton Keynes.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden min-h-screen">
        <ContactHero />
        <ContactMeetingInfo />
        <ContactOptions />
        <ContactForm />
        <ContactOfficeLocations />
        <ContactFinalCTA />
      </main>
      <Footer />
    </>
  );
}
