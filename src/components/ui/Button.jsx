export default function Button({ children, variant = 'primary', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition'
  const styles = variant === 'secondary'
    ? 'bg-transparent border border-earth text-charcoal hover:border-ochre hover:bg-earth/10'
    : 'bg-earth text-ivory hover:bg-ochre'

  return (
    <button type="button" className={`${base} ${styles}`} {...props}>
      {children}
    </button>
  )
}
