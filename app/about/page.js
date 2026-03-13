import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionDivider from "@/components/ui/SectionDivider";
import AboutHero from "@/components/about/AboutHero";
import AboutTrustMetrics from "@/components/about/AboutTrustMetrics";
import AboutOurStory from "@/components/about/AboutOurStory";
import AboutWhyChoose from "@/components/about/AboutWhyChoose";
import AboutMeetTheTeam from "@/components/about/AboutMeetTheTeam";
import AboutTechnology from "@/components/about/AboutTechnology";
import AboutOurProcess from "@/components/about/AboutOurProcess";
import AboutClientReviews from "@/components/about/AboutClientReviews";
import AboutCaseStudies from "@/components/about/AboutCaseStudies";
import AboutCareers from "@/components/about/AboutCareers";
import AboutFinalCTA from "@/components/about/AboutFinalCTA";

export const metadata = {
  title: "About Us",
  description:
    "Learn about DepoTax — our story, team, process, and why businesses choose us for accounting, tax, and advisory services across the UK.",
};

const SECTION_IDS = {
  hero: "about-hero",
  ourStory: "our-story",
  whyChoose: "why-choose-depotax",
  meetTeam: "meet-the-team",
  technology: "technology-we-use",
  process: "our-process",
  reviews: "client-reviews",
  caseStudies: "case-studies",
  careers: "careers",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <AboutHero />
        <SectionDivider />

        <AboutTrustMetrics />
        <SectionDivider />

        <AboutOurStory />
        <SectionDivider />

        <AboutWhyChoose />
        <SectionDivider />

        <AboutMeetTheTeam />
        <SectionDivider />

        <AboutTechnology />
        <SectionDivider />

        <AboutOurProcess />
        <SectionDivider />

        <AboutClientReviews />
        <SectionDivider />

        <AboutCaseStudies />
        <SectionDivider />

        <AboutCareers />
        <SectionDivider />

        <AboutFinalCTA />
      </main>
      <Footer />
    </>
  );
}
