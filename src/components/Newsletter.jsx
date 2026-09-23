import { Mail } from 'lucide-react'

export default function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-4 py-24 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="rounded-3xl border border-[#262626] bg-[#161616] p-8 text-center md:p-12 lg:p-16">
          <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white"><Mail size={32} strokeWidth={1.5} /></div>
          <h2 className="text-4xl font-bold text-white">
            اشترك في <em className="gradient-text not-italic">نشرتنا الإخبارية</em>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-neutral-400">احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني</p>

          <form className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <input className="min-w-0 flex-1 rounded-xl border border-[#262626] bg-[#0a0a0a] px-5 py-4 text-white outline-none placeholder:text-neutral-500 transition-colors focus:border-orange-500/50" type="email" placeholder="أدخل بريدك الإلكتروني" />
            <button className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-sm font-semibold text-white transition hover:from-orange-600 hover:to-orange-700 sm:w-auto" type="submit">
              اشترك الآن
            </button>
          </form>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-500">
            <div className="flex -space-x-2 rtl:space-x-reverse">
              <img className="h-8 w-8 rounded-full border-2 border-[#161616]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" alt="" />
              <img className="h-8 w-8 rounded-full border-2 border-[#161616]" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face" alt="" />
              <img className="h-8 w-8 rounded-full border-2 border-[#161616]" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" alt="" />
            </div>
            <span>
              انضم لـ <b>+10,000</b> مصور
            </span>
            <span>•</span>
            <span>بدون إزعاج</span>
            <span>•</span>
            <span>إلغاء الاشتراك في أي وقت</span>
          </div>
        </div>
      </div>
    </section>
  )
}
