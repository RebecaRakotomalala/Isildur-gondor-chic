import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="relative z-20 border-b border-ivory/40 bg-sand/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:px-10 lg:px-16">
        <Link to="/" className="group flex min-w-0 flex-col gap-0.5 transition">
          <span className="font-display text-xl font-semibold uppercase tracking-[0.35em] text-charcoal group-hover:text-earth">
            Gondor Chic
          </span>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.32em] text-stone/90 sm:block">
            Bibliothèque du royaume
          </span>
        </Link>
        <div className="hidden flex-wrap items-center justify-end gap-x-6 gap-y-2 lg:flex">
          <Link to="/" className="text-sm font-medium uppercase tracking-[0.25em] text-stone transition hover:text-charcoal">
            Accueil
          </Link>
          <a href="#catalogue" className="text-sm font-medium uppercase tracking-[0.25em] text-stone transition hover:text-charcoal">
            Catalogue
          </a>
          <a href="#circulation" className="text-sm font-medium uppercase tracking-[0.25em] text-stone transition hover:text-charcoal">
            Circulation
          </a>
          <a href="#horaires" className="text-sm font-medium uppercase tracking-[0.25em] text-stone transition hover:text-charcoal">
            Salon
          </a>
          <a href="#contact" className="text-sm font-medium uppercase tracking-[0.25em] text-stone transition hover:text-charcoal">
            Contact
          </a>
        </div>
        <button
          type="button"
          className="hidden shrink-0 rounded-full border border-earth/30 bg-earth px-5 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-ivory shadow-soft transition hover:border-transparent hover:bg-ochre lg:inline-flex"
        >
          Bureau du gardien
        </button>
      </div>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-ivory/25 px-6 pb-4 pt-3 text-[0.7rem] uppercase tracking-[0.28em] text-stone sm:justify-start sm:px-10 lg:hidden lg:px-16">
        <Link to="/" className="transition hover:text-charcoal">
          Accueil
        </Link>
        <span className="text-earth/30" aria-hidden="true">
          ·
        </span>
        <a href="#catalogue" className="transition hover:text-charcoal">
          Catalogue
        </a>
        <span className="text-earth/30" aria-hidden="true">
          ·
        </span>
        <a href="#circulation" className="transition hover:text-charcoal">
          Circulation
        </a>
        <span className="text-earth/30" aria-hidden="true">
          ·
        </span>
        <a href="#horaires" className="transition hover:text-charcoal">
          Salon
        </a>
        <span className="text-earth/30" aria-hidden="true">
          ·
        </span>
        <a href="#contact" className="transition hover:text-charcoal">
          Contact
        </a>
      </div>
    </nav>
  )
}
