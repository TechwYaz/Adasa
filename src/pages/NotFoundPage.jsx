import { Link } from 'react-router-dom'
import GridBackground from '../components/GridBackground'

export default function NotFoundPage() {
  return (
    <section className="relative grid min-h-[600px] place-items-center overflow-hidden bg-[#0a0a0a] px-8 text-center">
      <GridBackground />
      <div className="relative">
        <b className="block text-8xl font-black text-orange-500">404</b>
        <h1 className="mt-5 text-3xl font-bold text-white">عفواً! الصفحة غير موجودة</h1>
        <p className="mt-3 text-neutral-400">الصفحة التي تبحث عنها غير موجودة أو تم نقلها.</p>
        <Link to="/" className="mt-8 inline-flex rounded-full bg-orange-500 px-7 py-3 font-semibold text-white">
          الذهاب للرئيسية
        </Link>
      </div>
    </section>
  )
}
