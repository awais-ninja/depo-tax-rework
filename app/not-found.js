import Link from '@/components/ui/Link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold">Page not found</h1>
      <p className="mt-2 text-brand-text/80">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 text-brand-red font-semibold hover:underline transition-colors duration-200">Back to home</Link>
    </div>
  )
}
