export default function GridBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="blob absolute left-[7%] top-[14%] h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="blob absolute bottom-[8%] right-[7%] h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl [animation-delay:-2s]" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-3xl" />
    </>
  )
}
