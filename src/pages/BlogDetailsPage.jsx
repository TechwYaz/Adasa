import { ArrowLeft, Camera, CalendarDays, Check, Clock3, Copy, Globe, LinkIcon, Mail, Share2, Tag } from 'lucide-react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatDate } from '../data/site'
import { usePosts } from '../hooks/usePosts'

export default function BlogDetailsPage() {
  const { postId } = useParams()
  const [copied, setCopied] = useState(false)
  const posts = usePosts()
  // Supports both the numeric id requested in the route and readable slug links.
  const post = posts.find((item) => String(item.id) === postId || item.slug === postId)

  if (!posts.length) {
    return <div className="grid min-h-screen place-items-center bg-[#0a0a0a] text-neutral-400">جارٍ تحميل المقال...</div>
  }

  if (!post) {
    return <div className="grid min-h-screen place-items-center bg-[#0a0a0a] px-8 text-center text-neutral-400"><div><strong className="block text-7xl font-black text-orange-500">404</strong><p className="mt-4 text-xl text-white">المقال غير موجود</p><Link className="mt-6 inline-flex rounded-full bg-orange-500 px-6 py-3 font-semibold text-white" to="/blog">العودة إلى المدونة</Link></div></div>
  }

  const blocks = post.content.split('\n\n')
  const sections = blocks.filter((block) => block.startsWith('## ')).map((block) => block.slice(3))
  const related = posts.filter((item) => item.slug !== post.slug && item.category === post.category).slice(0, 3)

  const copyArticleLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }
  return (
    <article>
      <header className="relative isolate flex min-h-[410px] items-end overflow-hidden bg-[#0a0a0a] px-4 pb-14 pt-20 sm:px-6 lg:px-8">
        <img className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-60" src={post.image} alt={post.title} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-[#0a0a0a]/20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#0a0a0a]/65 via-transparent to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl">
          <nav className="mb-7 flex items-center gap-2 text-xs text-neutral-400"><Link to="/">الرئيسية</Link><span>‹</span><Link to="/blog">المدونة</Link><span>‹</span><span className="text-orange-400">{post.category}</span></nav>
          <Link className="inline-flex rounded-full bg-orange-500 px-3 py-1 text-xs text-white" to={`/blog?category=${encodeURIComponent(post.category)}`}>{post.category}</Link>
          <p className="mt-4 flex items-center gap-3 text-sm text-neutral-300"><CalendarDays size={15} />{formatDate(post.date)}<Clock3 size={15} />{post.readTime}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.35] text-white sm:text-5xl lg:text-6xl">{post.title}</h1>
          <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-[#161616]/80 p-2.5 pl-5 backdrop-blur"><img className="h-12 w-12 rounded-full border-2 border-orange-500/60 object-cover" src={post.author.avatar} alt={post.author.name} /><b className="text-white">{post.author.name}<small className="mt-1 block text-xs font-normal text-neutral-400">{post.author.role}</small></b></div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12 lg:py-12">
        <main className="min-w-0">
          <blockquote className="rounded-xl border border-orange-500/20 bg-orange-500/[0.08] px-6 py-5 text-base italic leading-8 text-neutral-300 sm:text-lg">“{post.excerpt}”</blockquote>
          <div className="mt-7 space-y-7 text-[15px] leading-8 text-neutral-300 sm:text-base">
          {blocks.map((block, index) => block.startsWith('## ') ? <h2 className="scroll-mt-28 flex items-center gap-3 pt-3 text-2xl font-bold leading-snug text-white sm:text-3xl" id={`section-${sections.indexOf(block.slice(3))}`} key={index}><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-orange-500"><Camera size={20} /></span>{block.slice(3)}</h2> : <p key={index}>{block}</p>)}
          </div>
          <section className="mt-10 space-y-4">
            <h3 className="text-lg font-bold text-white">الوسوم</h3>
            <div className="mt-4 flex flex-wrap gap-2">{(post.tags ?? [post.category]).map((tag) => <Link className="rounded-full border border-white/10 px-3 py-1 text-sm text-orange-300" key={tag} to={`/blog?category=${encodeURIComponent(post.category)}`}>#{tag}</Link>)}</div>
            <h3 className="mt-8 text-lg font-bold text-white">شارك المقال</h3>
            <div className="mt-4 flex gap-2">{[Globe, Mail, LinkIcon, Copy].map((Icon, index) => <button className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-neutral-400 hover:border-orange-500 hover:text-orange-400" key={index} aria-label="مشاركة المقال"><Icon size={16} /></button>)}</div>
            <div className="mt-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-neutral-900 p-5"><img className="h-14 w-14 rounded-full object-cover" src={post.author.avatar} alt={post.author.name} /><div><span className="text-xs text-neutral-500">كاتب المقال</span><h3 className="font-bold text-white">{post.author.name}</h3><p className="text-sm text-neutral-400">{post.author.role}</p></div></div>
          </section>
        </main>

        <aside className="h-fit space-y-4 text-neutral-400 lg:sticky lg:top-28">
          <div className="rounded-xl border border-white/10 bg-[#111111] p-5"><h3 className="font-bold text-white">☷　محتويات المقال</h3>
          <nav className="mt-5 space-y-2">{sections.map((section, index) => <a className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm transition hover:bg-white/[0.03] hover:text-orange-400" href={`#section-${index}`} key={section}><span className="grid h-6 w-6 place-items-center rounded-md bg-[#1b1b1b] text-xs text-orange-400">{index + 1}</span>{section}</a>)}</nav></div>
          <div className="grid grid-cols-2 gap-3 rounded-xl border border-white/10 bg-[#111111] p-4 text-sm"><div className="rounded-lg bg-[#0a0a0a] p-3"><Clock3 className="mb-2 text-orange-400" size={18} /><b className="block text-white">{post.readTime}</b><small>وقت القراءة</small></div><div className="rounded-lg bg-[#0a0a0a] p-3"><CalendarDays className="mb-2 text-orange-400" size={18} /><b className="block text-white">{formatDate(post.date)}</b><small>تاريخ النشر</small></div></div>
          <div className="rounded-xl border border-orange-500/20 bg-orange-500/[0.08] p-5 text-center"><h3 className="font-bold text-white">لا تفوّت جديدنا</h3><p className="mt-2 text-sm">اشترك للحصول على أحدث المقالات</p><Link className="mt-4 flex items-center justify-center rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white" to="/blog">تصفح المزيد　←</Link></div>
        </aside>
      </div>

      {related.length > 0 && <section className="border-t border-white/10 px-8 py-16"><div className="mx-auto max-w-6xl"><h2 className="text-3xl font-bold text-white">مقالات قد تعجبك</h2><p className="mt-2 text-neutral-400">استكشف المزيد من المحتوى المميز</p><div className="mt-8 grid gap-6 md:grid-cols-3">{related.map((item) => <Link className="overflow-hidden rounded-2xl border border-white/10 bg-neutral-900" key={item.id} to={`/blog/${item.slug}`}><img className="aspect-video w-full object-cover" src={item.image} alt={item.title} /><div className="p-4"><h3 className="font-bold text-white">{item.title}</h3><p className="mt-2 text-sm text-neutral-500">{item.author.name} · {item.readTime}</p></div></Link>)}</div></div></section>}
    </article>
  )
}
