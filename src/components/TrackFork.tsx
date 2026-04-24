import Link from "next/link";

/**
 * Ren, rolig privat/bedrift-velger. Ingen overlapp med hero — egen seksjon
 * med myk bakgrunn. To likeverdige kort, flat type, ankerlenker til #privat
 * og #bedrift lenger nede på siden.
 */
export default function TrackFork() {
  return (
    <section
      aria-label="Velg spor: privat eller bedrift"
      className="relative bg-cream-100 border-y border-forest-900/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-forest-700/70 mb-6">
          Hva passer for deg?
        </p>

        <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-forest-900/10 rounded-xl border border-forest-900/10 bg-cream-50 overflow-hidden">
          <Link
            href="#priser"
            className="group flex items-center gap-5 px-6 py-7 lg:px-8 lg:py-8 hover:bg-forest-50 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-forest-900/5 group-hover:bg-forest-700 group-hover:text-cream-50 text-forest-700 flex items-center justify-center shrink-0 transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M3 11.5L12 4l9 7.5" />
                <path d="M5 10v9.5h14V10" />
                <path d="M10 19.5v-5h4v5" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium uppercase tracking-widest text-forest-700/60 mb-1">
                Privat
              </p>
              <h3 className="font-serif text-lg lg:text-xl font-bold text-forest-950 leading-tight">
                Sofa, teppe, bil — hjemme hos deg
              </h3>
            </div>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-forest-700 group-hover:translate-x-1 transition-transform shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>

          <Link
            href="#bedrift"
            className="group flex items-center gap-5 px-6 py-7 lg:px-8 lg:py-8 hover:bg-amber-accent/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-amber-accent/15 group-hover:bg-amber-accent text-forest-700 group-hover:text-forest-950 flex items-center justify-center shrink-0 transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M3 21h18" />
                <path d="M5 21V7l7-3 7 3v14" />
                <path d="M9 21v-5h6v5" />
                <path d="M9 11h.01M12 11h.01M15 11h.01" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium uppercase tracking-widest text-amber-accent mb-1">
                Bedrift
              </p>
              <h3 className="font-serif text-lg lg:text-xl font-bold text-forest-950 leading-tight">
                Rammeavtale, AirBnB, kontor, hotell
              </h3>
            </div>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-forest-700 group-hover:translate-x-1 transition-transform shrink-0"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
