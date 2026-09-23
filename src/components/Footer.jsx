import { Link } from 'react-router-dom'
import { siteInfo } from '../data/site'

const socialLinks = [
  { href: 'https://twitter.com/adasah', label: 'twitter', icon: 'fa-brands fa-x-twitter' },
  { href: 'https://github.com/adasah', label: 'github', icon: 'fa-brands fa-github' },
  { href: 'https://linkedin.com/company/adasah', label: 'linkedin', icon: 'fa-brands fa-linkedin-in' },
  { href: 'https://youtube.com/@adasah', label: 'youtube', icon: 'fa-brands fa-youtube' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#262626] bg-[#0a0a0a] text-neutral-300">
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-orange-500/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link className="flex items-center gap-3 text-white" to="/">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-xl font-bold text-white shadow-[0_4px_20px_rgba(249,115,22,0.3)]">ع</span>
            <span className="text-xl font-bold">عدسة</span>
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7">{siteInfo.description}</p>
          <div className="mt-5 flex gap-2">
            {socialLinks.map(({ href, label, icon }) => (
              <a className="grid h-10 w-10 place-items-center rounded-xl border border-[#262626] bg-[#161616] text-neutral-500 transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white" key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <i className={`${icon} text-base`} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-bold text-white">
            استكشف
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/">الرئيسية</Link>
            </li>
            <li>
              <Link to="/blog">المدونة</Link>
            </li>
            <li>
              <Link to="/about">من نحن</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-bold text-white">
            التصنيفات
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/blog?category=إضاءة">إضاءة</Link>
            </li>
            <li>
              <Link to="/blog?category=بورتريه">بورتريه</Link>
            </li>
            <li>
              <Link to="/blog?category=مناظر طبيعية">مناظر طبيعية</Link>
            </li>
            <li>
              <Link to="/blog?category=تقنيات">تقنيات</Link>
            </li>
            <li>
              <Link to="/blog?category=معدات">معدات</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-bold text-white">
            ابقى على اطلاع
          </h3>
          <p className="text-sm leading-7">اشترك للحصول على أحدث المقالات والتحديثات.</p>
          <form className="mt-4 space-y-3">
            <input className="w-full rounded-xl border border-[#262626] bg-[#161616] px-4 py-3 text-sm text-white outline-none placeholder-neutral-600 focus:border-orange-500 focus:ring-1 focus:ring-orange-500" type="email" placeholder="أدخل بريدك الإلكتروني" />
            <button className="btn-primary w-full text-sm" type="submit">اشترك</button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-8 py-5">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 text-xs sm:flex-row">
          <p>
            © 2026 عدسة. صنع بكل <span className="heart">❤</span> جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4">
            <Link to="/privacy">سياسة الخصوصية</Link>
            <Link to="/terms">شروط الخدمة</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
