export default function Stats() {
  const items = [
    ['fa-solid fa-newspaper', '+50', 'مقالة'],
    ['fa-solid fa-users', '+10 ألف', 'قارئ'],
    ['fa-solid fa-folder-open', '4', 'تصنيفات'],
    ['fa-solid fa-pen-nib', '6', 'كاتب'],
  ]

  return (
    <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:gap-4 md:mt-16 md:grid-cols-4">
      {items.map(([icon, value, label]) => (
        <div key={label} className="glass-card grid place-items-center p-4 text-white transition duration-300 hover:scale-105">
          <i className={`${icon} mb-1 text-xl text-orange-500 sm:text-2xl`} />
          <b className="gradient-text text-xl sm:text-2xl md:text-3xl">{value}</b>
          <span className="text-xs text-neutral-400 sm:text-sm">{label}</span>
        </div>
      ))}
    </div>
  )
}
