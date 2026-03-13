import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

/**
 * Shared layout for all Services routes: /services and /services/[slug].
 * Reuses Header and Footer; child pages render inside <main>.
 */
export default function ServicesLayout({ children }) {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
