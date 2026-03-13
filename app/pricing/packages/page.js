import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PackagesOverview from '@/components/pricing/PackagesOverview';

export const metadata = {
  title: 'Package Guide | DepoTax',
  description:
    'Full overview of DepoTax accounting, tax, landlord and contractor packages by business type and size band.',
};

export default function PackagesPage() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden min-h-screen bg-white">
        <PackagesOverview />
      </main>
      <Footer />
    </>
  );
}

