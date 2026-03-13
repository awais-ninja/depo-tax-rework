import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhoWeServeHero from '@/components/who-we-serve/WhoWeServeHero';
import ClientTypesGrid from '@/components/who-we-serve/ClientTypesGrid';
import AudienceDetailSection from '@/components/who-we-serve/AudienceDetailSection';
import { AUDIENCE_DETAIL_SECTIONS } from '@/data/who-we-serve';
import IndustriesSupport from '@/components/who-we-serve/IndustriesSupport';
import WhyClientsChoose from '@/components/who-we-serve/WhyClientsChoose';
import ClientJourney from '@/components/who-we-serve/ClientJourney';
import Testimonials from '@/components/home/Testimonials';
import WhoWeServeCTA from '@/components/who-we-serve/WhoWeServeCTA';

export const metadata = {
  title: 'Who We Serve | Accountants for Individuals, Businesses & Landlords | DepoTax',
  description:
    'DepoTax provides accounting and tax services for individuals, startups, limited companies, landlords, and property investors across the UK.',
};

export default function WhoWeServePage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <WhoWeServeHero />
        <ClientTypesGrid />
        {AUDIENCE_DETAIL_SECTIONS.map((section) => (
          <AudienceDetailSection
            key={section.id}
            id={section.id}
            label={section.label}
            heading={section.heading}
            paragraph={section.paragraph}
            supportPoints={section.supportPoints}
            serviceLinks={section.serviceLinks}
            ctaLabel={section.ctaLabel}
            ctaHref={section.ctaHref}
            layout={section.layout}
            variant={section.variant}
          />
        ))}
        <IndustriesSupport />
        <WhyClientsChoose />
        <ClientJourney />
        <Testimonials
          title="Trusted by Clients Across the UK"
          sectionId="who-we-serve-reviews"
          maxReviews={4}
          sectionLabel="Client Reviews"
          introParagraph="Feedback from clients who trust DepoTax for practical and dependable accounting support."
        />
        <WhoWeServeCTA />
      </main>
      <Footer />
    </>
  );
}
