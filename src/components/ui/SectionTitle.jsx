export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="max-w-3xl space-y-4">
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.35em] text-earth/90">
          {eyebrow}
        </p>
      )}
      <h1 className="font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-2xl text-base leading-8 text-stone sm:text-lg">
        {subtitle}
      </p>
    </div>
  )
}
