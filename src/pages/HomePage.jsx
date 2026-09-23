import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Info } from 'lucide-react'
import CategoryCard from '../components/CategoryCard'
import GridBackground from '../components/GridBackground'
import Heading from '../components/Heading'
import Label from '../components/Label'
import Newsletter from '../components/Newsletter'
import PostCard from '../components/PostCard'
import Stats from '../components/Stats'
import { usePosts } from '../hooks/usePosts'

export default function HomePage() {
  const posts = usePosts()
  const featured = posts.filter((post) => post.featured).slice(0, 3)
  const latest = posts.filter((post) => !post.featured).slice(0, 3)
  const categories = useMemo(
    () =>
      [...new Set(posts.map((post) => post.category))].map((name) => ({
        name,
        count: posts.filter((post) => post.category === name).length,
      })),
    [posts],
  )

  return (
    <>
      <section className="relative grid min-h-[90vh] place-items-center overflow-hidden bg-[#0a0a0a] px-4 py-20 sm:px-6 lg:px-8">
        <GridBackground />
        <div className="relative mx-auto max-w-5xl text-center">
          <Label>مرحباً بك في عدسة</Label>
          <h1 className="my-7 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            اكتشف <em className="gradient-text not-italic">فن</em>
            <br />
            التصوير الفوتوغرافي
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-neutral-400 sm:text-xl md:text-2xl">انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link className="btn-primary group w-full justify-center gap-2 text-base sm:w-auto" to="/blog">
              استكشف المقالات <ArrowRight className="rotate-180 transition-transform group-hover:-translate-x-1" size={20} />
            </Link>
            <Link className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#333] px-8 py-4 text-base font-semibold text-white transition hover:border-orange-500 hover:text-orange-400 sm:w-auto" to="/about">
              <Info />
              اعرف المزيد
            </Link>
          </div>
          <Stats />
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a0a0a] px-8 py-24"><div className="mx-auto max-w-7xl">
          <Heading
            label="مميز"
            title="مقالات مختارة"
            description="محتوى منتقى لبدء رحلة تعلمك"
            action
          />
          <div className="space-y-8">
            {featured.map((post) => (
              <PostCard key={post.id} post={post} wide />
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-y border-[#262626] bg-[#111111] px-8 py-24"><div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <Label>التصنيفات</Label>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-6xl md:leading-tight">استكشف حسب الموضوع</h2>
            <p className="mt-2 text-neutral-400">اعثر على محتوى مصمم حسب اهتماماتك</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.name}
                category={category}
                icon={
                  ['fa-solid fa-sun', 'fa-solid fa-user', 'fa-solid fa-mountain-sun', 'fa-solid fa-sliders'][index % 4]
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0a0a0a] px-8 py-24"><div className="mx-auto max-w-7xl">
          <Heading label="الأحدث" title="أحدث المقالات" description="محتوى جديد طازج من المطبعة" action actionLabel="عرض جميع المقالات" />
          <div className="grid gap-6 md:grid-cols-3">
            {latest.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}
