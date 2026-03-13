import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

/**
 * Shared layout for Knowledge hub and all Knowledge sub-routes.
 * Reuses Header and Footer; child pages render inside <main>.
 */
export default function KnowledgeLayout({ children }) {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
