export default function ParchmentNote({ title, children, className = '' }) {
  return (
    <aside
      className={`rounded-[1.25rem] border border-ochre/25 bg-[linear-gradient(145deg,rgba(249,244,236,0.92)_0%,rgba(243,231,217,0.75)_100%)] p-6 shadow-soft ${className}`}
    >
      {title ? (
        <p className="font-display mb-3 text-xs uppercase tracking-[0.35em] text-earth">{title}</p>
      ) : null}
      <div className="font-serif text-[1.05rem] italic leading-relaxed text-charcoal/95">{children}</div>
    </aside>
  )
}
