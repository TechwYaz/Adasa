import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CategoryCard({ category, icon }) {
  return (
    <Link className="group relative block min-h-[166px] overflow-hidden rounded-2xl border border-[#262626] bg-[#161616] p-6 text-white transition duration-500 hover:-translate-y-1 hover:border-orange-500/30" to={`/blog?category=${encodeURIComponent(category.name)}`}>
      <span className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
      <span className="relative z-10 mb-4 grid h-12 w-12 place-items-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-xl text-orange-500 transition-colors duration-300 group-hover:border-transparent group-hover:bg-white/20 group-hover:text-white"><i className={icon} /></span>
      <b className="relative z-10 block text-base leading-6">{category.name}</b>
      <small className="relative z-10 mt-1 block text-sm leading-5 text-neutral-400">{category.count} مقالة</small>
      <ArrowLeft className="absolute left-6 top-6 text-white opacity-0 transition group-hover:-translate-x-1 group-hover:opacity-100" size={17} />
    </Link>
  )
}
