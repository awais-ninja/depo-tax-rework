import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import PricingIntroduction from "@/components/pricing/PricingIntroduction";
import PricingExperience from "@/components/pricing/PricingExperience";
import PackageComparison from "@/components/pricing/PackageComparison";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import PricingCTA from "@/components/pricing/PricingCTA";
import { PRICING_MODES } from '@/data/pricing';
import AboutFinalCTA from "@/components/about/AboutFinalCTA";

export const metadata = {
  title: "Pricing | DepoTax",
  description:
    "DepoTax accounting and tax pricing. Clear packages for individuals and businesses.",
};

function mapBusinessType(queryValue) {
  if (!queryValue) return null;
  const map = {
    contractors: "contractor-ltd",
    "limited-companies": "startups-ltds",
    landlords: "landlords",
    "non-resident-landlords": "non-resident-landlords",
    "spv-residential": "spvs",
    "self-employed": "self-employed",
  };
  return map[queryValue] ?? null;
}

function mapMode(modeParam) {
  if (modeParam === PRICING_MODES.SINGLE_SERVICES)
    return PRICING_MODES.SINGLE_SERVICES;
  return PRICING_MODES.PACKAGES;
}

function mapPackageType(packageType) {
  if (!packageType) return null;
  const normalized = packageType.toLowerCase();
  if (normalized === "compliance") return "Compliance";
  if (normalized === "core") return "Core";
  if (normalized === "growth") return "Growth";
  return null;
}

export default async function PricingPage({ searchParams }) {
  const params = await searchParams;

  const mode = mapMode(params?.mode);
  const businessTypeId = mapBusinessType(params?.businessType);
  const initialSelectedServiceKeys =
    mode === PRICING_MODES.SINGLE_SERVICES && params?.service
      ? [params.service]
      : [];
  const initialPackageTier = mapPackageType(params?.packageType);

  return (
    <>
      <Header />
      <main className="overflow-x-hidden min-h-screen bg-white">
        <PricingHero />
        <PricingIntroduction />
        <PricingExperience
          initialMode={mode}
          initialBusinessTypeId={businessTypeId}
          initialPackageTier={initialPackageTier}
          initialSelectedServiceKeys={initialSelectedServiceKeys}
        />
        <PackageComparison />
        <PricingFAQ />
        <AboutFinalCTA />
      </main>
      <Footer />
    </>
  );
}
