import { Send } from 'lucide-react'
import GridBackground from '../components/GridBackground'
import Label from '../components/Label'
import { siteInfo } from '../data/site'
import { usePosts } from '../hooks/usePosts'

const stats = [
  { value: '+2مليون', label: 'قارئ شهرياً' },
  { value: '+500', label: 'مقالة منشورة' },
  { value: '+50', label: 'كاتب خبير' },
  { value: '+15', label: 'تصنيف' },
]

const values = [
  {
    title: 'الجودة أولاً',
    text: 'محتوى مدروس ومكتوب بخبرة',
    icon: 'fa-solid fa-star',
  },
  {
    title: 'تركيز عملي',
    text: 'أمثلة واقعية يمكنك تطبيقها اليوم',
    icon: 'fa-solid fa-bolt',
  },
  {
    title: 'المجتمع',
    text: 'تعلم مع آلاف المصورين',
    icon: 'fa-solid fa-handshake',
  },
  {
    title: 'دائماً محدث',
    text: 'أحدث الاتجاهات وأفضل الممارسات',
    icon: 'fa-solid fa-arrows-rotate',
  },
]

const team = [
  { name: 'سالم أحمد', role: 'مصور محترف', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'محمد علي', role: 'مصور بورتريه', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'إبراهيم حسن', role: 'مصور طبيعة', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'داود خالد', role: 'مدرب تصوير', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'ليث محمود', role: 'فنان بصري', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'جمال عبدالله', role: 'مصور ومراجع تقني', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'خالد الفيصل', role: 'مصور فلكي', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'نادر سعيد', role: 'مصور شوارع', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'هاني الشمري', role: 'مصور طعام', image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'عمر الراشد', role: 'مصور حياة برية', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'فارس العلي', role: 'فنان فوتوغرافي', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'سامي الحربي', role: 'خبير تعديل صور', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'رامي الخطيب', role: 'مصور ماكرو', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'باسم المصري', role: 'مصور فني', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'منصور الزهراني', role: 'مصور زفاف', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'فيصل الدوسري', role: 'مصور جوي', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'لؤي الصالح', role: 'مصور تجاري', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'طارق النعيمي', role: 'مصور معماري', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'أحمد الشهري', role: 'مصور رياضي', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'ماجد القحطاني', role: 'مصور استوديو', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'ياسر العتيبي', role: 'مصور رحالة', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'دحام الحسيني', role: 'فنان بصري', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'نايف المطيري', role: 'مصور مواليد', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'عبدالله الغامدي', role: 'مصور عقارات', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'كريم الفهد', role: 'خبير تقني', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'سلطان الراجحي', role: 'فنان تصوير', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'فهد السبيعي', role: 'مراجع معدات', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
  { name: 'راشد الجاسر', role: 'فنان بصري', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=faces', social: ['Instagram', 'Linkedin', 'Dribbble'] },
]

const socialIconMap = {
  Instagram: 'fa-brands fa-x-twitter',
  Linkedin: 'fa-brands fa-github',
  Dribbble: 'fa-brands fa-linkedin-in',
}

export default function AboutPage() {
  const posts = usePosts()
  const authorAvatars = [...new Map(posts.map((post) => [post.author.name, post.author])).values()]
  return (
    <main className="bg-[#0a0a0a]">
      <section className="relative overflow-hidden px-4 py-24 text-center sm:px-6 lg:px-8">
        <GridBackground />
        <div className="relative mx-auto max-w-6xl">
          <Label>من نحن</Label>
          <h1 className="mb-6 mt-7 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            مهمتنا هي <em className="gradient-text not-italic">الإعلام والإلهام</em>
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-neutral-400">{siteInfo.description} نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.</p>
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map(({ value, label }, index) => (
              <div key={label} className="glass-card p-6 text-center">
                <i className={`${['fa-solid fa-users', 'fa-solid fa-newspaper', 'fa-solid fa-pen-nib', 'fa-solid fa-folder-open'][index]} mb-2 block text-2xl text-orange-500`} />
                <strong className="gradient-text block text-3xl font-bold">{value}</strong>
                <span className="mt-1 block text-sm text-neutral-500">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#262626] bg-[#111111] px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="flex items-center justify-center gap-3 text-3xl font-bold text-white md:text-4xl"><span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-orange-500 to-yellow-500" />قيمنا<span className="h-8 w-1.5 rounded-full bg-gradient-to-b from-yellow-500 to-orange-500" /></h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-400">المبادئ التي توجه كل ما نقوم بإنشائه</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ title, text, icon }) => (
              <article key={title} className="group relative overflow-hidden rounded-2xl border border-[#262626] bg-[#161616] p-6 text-center transition-all duration-300 hover:border-orange-500/30">
                <span className="absolute inset-0 bg-gradient-to-br from-orange-600 to-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
                <div className="relative">
                  <i className={`${icon} mb-4 block text-4xl text-orange-500`} />
                  <h3 className="text-lg font-bold text-white transition-colors group-hover:text-orange-500">{title}</h3>
                  <p className="mt-2 text-sm text-neutral-400">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <Label>فريقنا</Label>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">تعرف على كتابنا</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-400">فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <article key={member.name} className="group rounded-2xl border border-[#262626] bg-[#161616] p-6 text-center transition-all duration-300 hover:border-orange-500/30">
                <div className="relative mb-4 inline-block">
                  <img className="h-24 w-24 rounded-full object-cover ring-4 ring-[#262626] transition-all group-hover:ring-orange-500/30" src={authorAvatars[index]?.avatar || member.image} alt={member.name} />
                  <div className="absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full border-2 border-[#161616] bg-orange-500 text-xs text-white">✓</div>
                </div>
                <h3 className="text-lg font-bold text-white">{member.name}</h3>
                <p className="mb-4 mt-1 text-sm font-medium text-orange-500">{member.role}</p>
                <div className="flex justify-center gap-3">
                  {member.social.map((name) => {
                    const icon = socialIconMap[name]
                    return (
                      <a className="grid h-9 w-9 place-items-center rounded-lg bg-[#262626] text-neutral-500 transition-colors hover:bg-orange-500 hover:text-white" key={name} href="#" aria-label={name}>
                        <i className={`${icon} text-sm`} />
                      </a>
                    )
                  })}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="absolute right-10 top-10 h-64 w-64 rounded-full bg-white/20 blur-[100px]" />
        <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-white/20 blur-[80px]" />
        <div className="relative mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-white md:text-4xl">لديك أسئلة؟ دعنا نتحدث!</h2>
          <p className="mx-auto mb-8 mt-6 max-w-2xl text-lg text-white/80">نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية، لا تتردد في التواصل.</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0a0a0a] px-7 py-3 font-semibold text-white transition hover:bg-[#161616]" href={`mailto:${siteInfo.email}`}><Send size={18} />تواصل معنا</a>
            <a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white/10" href="/blog">تصفح المقالات</a>
          </div>
        </div>
      </section>
    </main>
  )
}
