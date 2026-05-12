export default function OrnamentalDivider({ label, className = '' }) {
  const diamond = (
    <span className="relative flex h-2 w-2 shrink-0 rotate-45 border border-earth/35 bg-ivory/80 shadow-[0_0_0_3px_rgba(249,244,236,0.6)]" />
  )

  return (
    <div className={`flex items-center justify-center gap-5 py-8 ${className}`} role="presentation" aria-hidden="true">
      <span className="h-px max-w-[140px] flex-1 bg-gradient-to-r from-transparent via-earth/45 to-earth/30" />
      {label ? (
        <>
          {diamond}
          <span className="font-display whitespace-nowrap text-[0.65rem] uppercase tracking-[0.45em] text-earth/85">
            {label}
          </span>
          {diamond}
        </>
      ) : (
        diamond
      )}
      <span className="h-px max-w-[140px] flex-1 bg-gradient-to-l from-transparent via-earth/45 to-earth/30" />
    </div>
  )
}
