import { useState } from 'react'
import { ChevronLeft, ChevronRight, Grid2X2, List, Search } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import GridBackground from '../components/GridBackground'
import Label from '../components/Label'
import PostCard from '../components/PostCard'
import { usePosts } from '../hooks/usePosts'

export default function BlogPage() {
  const posts = usePosts()
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [view, setView] = useState('grid')
  const [page, setPage] = useState(1)

  const category = params.get('category') || 'all'
  const categories = [...new Set(posts.map((post) => post.category))]
  const matches = posts.filter(
    (post) =>
      (category === 'all' || post.category === category) &&
      `${post.title} ${post.excerpt} ${post.author.name} ${post.tags?.join(' ') ?? ''}`.includes(query.trim()),
  )
  const pages = Math.max(1, Math.ceil(matches.length / 6))
  const current = matches.slice((page - 1) * 6, page * 6)

  if (!posts.length) {
    return <div className="grid min-h-[60vh] place-items-center bg-[#0a0a0a] text-neutral-400">جارٍ تحميل المقالات...</div>
  }

  const setCategory = (value) => {
    setParams(value === 'all' ? {} : { category: value })
    setPage(1)
  }

  return (
    <>
      <section className="relative overflow-hidden bg-[#0a0a0a] px-4 py-20 text-center sm:px-6 lg:px-8">
        <GridBackground />
        <div className="relative mx-auto max-w-5xl">
          <div className="mb-6"><Label>مدونتنا</Label></div>
          <h1 className="mb-6 mt-0 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            استكشف <em className="gradient-text not-italic">مقالاتنا</em>
          </h1>
          <p className="text-2xl leading-relaxed text-neutral-400">اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث</p>
        </div>
      </section>

      <section className="sticky top-20 z-40 border-y border-[#262626] bg-[#0a0a0a]/90 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <label className="relative block w-full md:w-80">
              <input className="w-full rounded-xl border border-[#262626] bg-[#161616] py-3 pr-5 pl-12 text-sm text-white outline-none placeholder:text-neutral-500 transition focus:border-orange-500"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value)
                  setPage(1)
                }}
                placeholder="ابحث في المقالات..."
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={20} />
            </label>

            <div className="flex flex-wrap gap-2">
              <button
                  className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-300 ${category === 'all' ? 'border-transparent bg-gradient-to-r from-orange-500 to-orange-600 text-white' : 'border-[#262626] bg-[#161616] text-neutral-400 hover:border-orange-500/30'}`}
                onClick={() => setCategory('all')}
              >
                جميع المقالات
              </button>
              {categories.map((item) => (
                <button
                  key={item}
                    className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-300 ${category === item ? 'border-transparent bg-gradient-to-r from-orange-500 to-orange-600 text-white' : 'border-[#262626] bg-[#161616] text-neutral-400 hover:border-orange-500/30'}`}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <p>
            عرض <b>{matches.length}</b> مقالات
          </p>
          <div className="flex items-center gap-1 rounded-xl border border-[#262626] bg-[#161616] p-1">
            <button
              aria-label="عرض شبكي"
              className={`grid h-9 w-9 place-items-center rounded-lg ${view === 'grid' ? 'bg-orange-500 text-white' : 'text-neutral-400 hover:text-white'}`}
              onClick={() => setView('grid')}
            >
              <Grid2X2 size={18} />
            </button>
            <button
              aria-label="عرض قائمة"
              className={`grid h-9 w-9 place-items-center rounded-lg ${view === 'list' ? 'bg-orange-500 text-white' : 'text-neutral-400 hover:text-white'}`}
              onClick={() => setView('list')}
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {current.length ? (
          <div className={view === 'grid' ? 'grid gap-6 md:grid-cols-3' : 'grid gap-5'}>
            {current.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-16 text-center">
            <h2 className="text-xl font-bold text-white">لا توجد نتائج مطابقة</h2>
            <p className="mt-2 text-neutral-400">جرّب كلمة بحث أخرى أو اختر تصنيفاً مختلفاً.</p>
          </div>
        )}

        {pages > 1 && (
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="flex justify-center gap-2">
              <button className="grid h-[46px] w-[46px] place-items-center rounded-xl border border-white/10 text-white disabled:opacity-30" disabled={page === 1} onClick={() => setPage(page - 1)}>
                <ChevronRight />
              </button>
              {Array.from({ length: pages }, (_, index) => (
                <button
                  className={`h-[46px] w-[46px] rounded-xl border text-sm ${page === index + 1 ? 'border-orange-500 bg-orange-500 text-white' : 'border-white/10 text-neutral-400'}`}
                  onClick={() => setPage(index + 1)}
                  key={index}
                >
                  {index + 1}
                </button>
              ))}
              <button className="grid h-[46px] w-[46px] place-items-center rounded-xl border border-white/10 text-white disabled:opacity-30" disabled={page === pages} onClick={() => setPage(page + 1)}>
                <ChevronLeft />
              </button>
            </div>
            <p className="text-sm text-neutral-500">صفحة {page} من {pages}</p>
          </div>
        )}
      </section>
    </>
  )
}
