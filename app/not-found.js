import Link from '@/components/ui/Link'
import { notFoundContent } from '@/data/notFound'

export default function NotFound() {
  const { title, description, backLabel, backHref } = notFoundContent
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="mt-2 text-brand-text/80">{description}</p>
      <Link href={backHref} className="mt-6 text-brand-red font-semibold hover:underline transition-colors duration-200">{backLabel}</Link>
    </div>
  )
}
