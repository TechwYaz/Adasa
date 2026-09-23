export default function Label({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-500">
      <span className="relative flex h-2 w-2">
        <i className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-500 opacity-75" />
        <i className="relative inline-flex h-2 w-2 rounded-full bg-orange-500" />
      </span>
      {children}
    </span>
  )
}
