import { ArrowLeft, Clock3, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatDate } from '../data/site'

export default function PostCard({ post, wide = false }) {
  return (
    <article className={`group overflow-hidden rounded-3xl border border-[#262626] bg-[#161616] transition-all duration-500 hover:border-orange-500/30 ${wide ? 'md:flex' : 'card'}`}>
      <Link className={wide ? 'flex w-full flex-col md:flex-row' : 'block'} to={`/blog/${post.slug}`}>
        <div className={`relative shrink-0 overflow-hidden ${wide ? 'h-64 md:h-[400px] md:w-1/2' : 'h-52'}`}>
          <img className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" src={post.image} alt={post.title} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {wide && <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 px-3 py-1.5 text-xs font-semibold text-white"><Sparkles size={14} fill="currentColor" />مميز</span>}
          {!wide && <span className="absolute right-4 top-4 rounded-full border border-[#333] bg-[#0a0a0a]/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">{post.category}</span>}
        </div>
        <div className={wide ? 'flex flex-1 flex-col justify-center bg-[#161616] p-5 sm:p-7 md:p-10' : 'p-5 sm:p-6'}>
          {wide ? (
            <>
              <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-neutral-500 sm:text-sm"><span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-2.5 py-1 text-[10px] font-semibold text-orange-500 sm:text-xs">{post.category}</span><span className="inline-flex items-center gap-1"><Clock3 size={16} />{post.readTime}</span></div>
              <h2 className="mb-4 text-xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-orange-500 sm:text-2xl md:text-3xl">{post.title}</h2>
              <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-neutral-400 sm:text-base">{post.excerpt}</p>
              <div className="mt-auto flex items-center justify-between gap-4"><span className="flex items-center gap-3"><span className="relative"><img className="h-10 w-10 rounded-full object-cover shadow-md ring-2 ring-[#262626] sm:h-12 sm:w-12" src={post.author.avatar} alt={post.author.name} /><i className="absolute -bottom-1 -left-1 h-4 w-4 rounded-full border-2 border-[#161616] bg-orange-500" /></span><b className="text-xs text-white sm:text-sm">{post.author.name}<small className="mt-1 block text-[10px] font-normal text-neutral-500 sm:text-xs">{formatDate(post.date)}</small></b></span><span className="inline-flex items-center gap-2 text-xs font-semibold text-orange-500 transition-all group-hover:gap-3 sm:text-sm">اقرأ المقال<ArrowLeft className="rotate-180" size={18} /></span></div>
            </>
          ) : (
            <>
              <div className="mb-3 flex items-center gap-3 text-[11px] text-neutral-500 sm:text-sm"><span className="inline-flex items-center gap-1"><Clock3 size={16} />{post.readTime}</span><i className="h-1 w-1 rounded-full bg-neutral-600" /><span>{formatDate(post.date)}</span></div>
              <h3 className="mb-3 line-clamp-2 text-lg font-bold leading-tight text-white transition-colors duration-300 group-hover:text-orange-500 sm:text-xl">{post.title}</h3>
              <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-neutral-400">{post.excerpt}</p>
              <div className="flex items-center justify-between border-t border-[#262626] pt-4"><span className="flex items-center gap-3"><img className="h-9 w-9 rounded-full object-cover ring-2 ring-[#262626]" src={post.author.avatar} alt="" /><b className="text-xs font-medium text-white sm:text-sm">{post.author.name}<small className="mt-1 block text-[10px] font-normal text-neutral-500 sm:text-xs">{post.author.role}</small></b></span><span className="grid h-8 w-8 place-items-center rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-500 transition-colors duration-300 group-hover:border-transparent group-hover:bg-orange-500 group-hover:text-white" aria-label="اقرأ المقال"><ArrowLeft className="rotate-180" size={16} /></span></div>
            </>
          )}
        </div>
      </Link>
    </article>
  )
}