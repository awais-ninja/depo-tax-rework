import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import PricingIntroduction from "@/components/pricing/PricingIntroduction";
import PricingExperienceFromSearchParams from "@/components/pricing/PricingExperienceFromSearchParams";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { BASE_URL } from "@/data/site";

const PackageComparison = dynamic(() => import("@/components/pricing/PackageComparison"));
const PricingFAQ = dynamic(() => import("@/components/pricing/PricingFAQ"));
const AboutFinalCTA = dynamic(() => import("@/components/about/AboutFinalCTA"));

export const metadata = {
  title: "Pricing",
  description:
    "DepoTax accounting and tax pricing. Clear packages for individuals and businesses.",
  alternates: {
    canonical: `${BASE_URL}/pricing`,
  },
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden min-h-screen bg-white">
        <PricingHero />
        <PricingIntroduction />
        <Suspense fallback={null}>
          <PricingExperienceFromSearchParams />
        </Suspense>
        <PackageComparison />
        <PricingFAQ />
        <AboutFinalCTA />
      </main>
      <Footer />
    </>
  );
}
