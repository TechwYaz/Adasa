import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Label from './Label'

export default function Heading({ label, title, description, action, actionLabel = 'عرض الكل' }) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <Label>{label}</Label>
        <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl md:leading-tight">{title}</h2>
        <p className="mt-2 text-neutral-400">{description}</p>
      </div>
      {action && (
        <Link className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition hover:text-orange-300" to="/blog">
          {actionLabel}
          <ArrowLeft size={16} />
        </Link>
      )}
    </div>
  )
}
