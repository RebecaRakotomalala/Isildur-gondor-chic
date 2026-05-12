export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-ivory/40 bg-sand/95 py-12 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="space-y-4">
            <p className="font-display text-lg font-semibold tracking-[0.08em] text-charcoal">Greffe de la bibliothèque</p>
            <p className="max-w-md text-sm leading-relaxed text-stone">
              Citadelle — aile ouest, <span className="text-charcoal/90">2ᵉ galerie des parchemins</span>. Messagers et
              réservations : présence au comptoir aux heures du salon indiquées ci-contre.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone">
              <span className="rounded-full border border-ivory/60 bg-ivory/50 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-earth">
                Greffe
              </span>
              <a
                href="mailto:greffe@gondor-chic.invalid"
                className="border-b border-earth/25 pb-0.5 transition hover:border-earth hover:text-charcoal"
              >
                greffe@gondor-chic.invalid
              </a>
            </div>
          </div>
          <div className="rounded-[1.25rem] border border-ivory/45 bg-white/40 p-6 shadow-soft backdrop-blur-md lg:self-start">
            <p className="font-display text-xs uppercase tracking-[0.35em] text-earth/90">Permanences du gardien</p>
            <ul className="mt-4 space-y-3 text-sm text-stone">
              <li className="flex justify-between gap-4 border-b border-ivory/50 pb-3">
                <span className="text-charcoal/90">Lundi — vendredi</span>
                <span className="tabular-nums text-earth">9 h — 18 h</span>
              </li>
              <li className="flex justify-between gap-4 border-b border-ivory/50 pb-3">
                <span className="text-charcoal/90">Samedi</span>
                <span className="tabular-nums text-earth">10 h — 17 h</span>
              </li>
              <li className="flex justify-between gap-4 pt-1">
                <span className="text-charcoal/90">Dimanche &amp; fêtes</span>
                <span className="text-earth/80">Salon fermé</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-ivory/35 pt-8 text-sm text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Gondor Chic — Bibliothèque du royaume · gestion du fonds, circulation et
            lecteurs.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="transition hover:text-charcoal">
              Charte du fonds
            </a>
            <a href="#" className="transition hover:text-charcoal">
              Vie privée
            </a>
            <a href="#contact" className="transition hover:text-charcoal">
              Greffe du gardien
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
