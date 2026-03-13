import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from '@/components/ui/Link';

/**
 * Legal document page wrapper: ~900px centered content, clear typography, section dividers.
 * Optional anchor nav at top. No cards or marketing elements.
 */
export default function LegalDocumentLayout({ title, introduction, navAnchors, children }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-grayLight/50 py-10 sm:py-14">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-navy mb-6">
            {title}
          </h1>
          {introduction && (
            <p className="text-brand-text/90 leading-relaxed mb-8">
              {introduction}
            </p>
          )}
          {navAnchors && navAnchors.length > 0 && (
            <nav className="mb-8 pb-6 border-b border-brand-grayBorder" aria-label="Page sections">
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                {navAnchors.map(({ id, label }) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-brand-accent hover:underline">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
          <div className="space-y-10 text-brand-text/90 leading-relaxed">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-6">
      <h2 className="text-lg font-semibold text-brand-navy mb-3">
        {title}
      </h2>
      <div className="space-y-3">
        {children}
      </div>
      <div className="mt-6 pt-6 border-b border-brand-grayBorder" aria-hidden />
    </section>
  );
}

export function LegalContactBlock() {
  return (
    <div className="text-sm">
      <p className="font-semibold text-brand-navy">DepoTax Accountants & Tax Consultants</p>
      <p className="mt-1">
        Email: <a href="mailto:info@depotax.co.uk" className="text-brand-accent hover:underline">info@depotax.co.uk</a>
      </p>
      <p>
        Phone: <a href="tel:+442036599254" className="text-brand-accent hover:underline">+44 20 3659 9254</a>
      </p>
    </div>
  );
}
