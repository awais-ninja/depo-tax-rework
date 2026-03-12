import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from '@/components/ui/Link'

export const metadata = {
  title: 'Work in Progress | DepoTax',
  description: 'This page is currently under construction.',
}

export default function WorkInProgressPage() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-md w-full text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-brand-accent mb-2">
            Work in Progress
          </h1>
          <p className="text-brand-text/80 mb-6">
            This page is currently being built. Please check back soon or return to the homepage.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold text-white bg-brand-accent hover:bg-brand-accentDark transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
