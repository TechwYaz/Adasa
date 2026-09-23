import { useEffect, useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const links = [
    ['الرئيسية', '/'],
    ['المدونة', '/blog'],
    ['من نحن', '/about'],
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl transition-all duration-500 ${scrolled ? 'border-b border-[#262626]' : 'border-b border-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between gap-4">
          <Link className="group flex items-center gap-3 text-white" to="/" aria-label="Photography Logo عدسة عالم التصوير الفوتوغرافي">
            <img src="https://adasa-psi.vercel.app/assets/logo-GdqARQRt.png" alt="Photography Logo" className="h-10 w-10 rounded-xl object-cover transition-all duration-300 group-hover:scale-105 sm:h-12 sm:w-12" />
            <span className="flex flex-col justify-center leading-none">
              <b className="bg-gradient-to-l from-white to-neutral-300 bg-clip-text text-lg font-bold text-transparent sm:text-xl">عدسة</b>
              <small className="mt-1 hidden text-[10px] tracking-wide text-orange-400/80 sm:block">عالم التصوير الفوتوغرافي</small>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-[#262626] bg-[#161616] p-1.5 md:flex">
            {links.map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-full px-5 py-2.5 text-sm transition ${
                    isActive
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                      : 'text-[#a3a3a3] hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2 text-[#a3a3a3] sm:gap-3">
            <button className="hidden rounded-xl border border-transparent p-3 text-neutral-500 transition-all duration-300 hover:border-[#262626] hover:bg-[#161616] hover:text-orange-500 md:grid" aria-label="بحث">
              <Search size={18} />
            </button>
            <Link
              className="hidden text-sm md:inline-flex md:items-center md:justify-center md:rounded-full md:bg-gradient-to-r md:from-orange-500 md:to-orange-600 md:px-5 md:py-2.5 md:font-semibold md:text-white"
              to="/blog"
            >
              ابدأ القراءة
            </Link>
            <button className="grid rounded-xl border border-transparent p-2.5 text-neutral-400 transition-all duration-300 hover:border-[#262626] hover:bg-[#161616] hover:text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-[#0a0a0a]/95 px-4 pt-5 backdrop-blur-sm md:hidden">
          <div className="mx-auto w-full max-w-[420px] rounded-[28px] border border-[#2a2a2a] bg-[#111111] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.8)]">
            <div className="mb-4 flex items-center justify-between">
              <button onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full border border-[#2a2a2a] bg-[#1a1a1a] text-white" aria-label="إغلاق القائمة">
                <X size={20} />
              </button>

              <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3 text-white">
                <img src="https://adasa-psi.vercel.app/assets/logo-GdqARQRt.png" alt="Photography Logo" className="h-10 w-10 rounded-xl object-cover" />
                <span className="text-xl font-bold text-orange-500">عدسة</span>
              </Link>

              <div className="w-10" />
            </div>

            <div className="space-y-3">
              {links.map(([label, path]) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block w-full rounded-2xl border px-4 py-3 text-center text-lg font-medium transition ${
                      isActive
                        ? 'border-orange-500 bg-orange-500/10 text-orange-400'
                        : 'border-[#2a2a2a] bg-[#1a1a1a] text-white'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
