import Link from "next/link";

const priceItems = [
  {
    category: "Sofa",
    items: [
      { label: "2-seter", from: 990 },
      { label: "3-seter", from: 1290 },
      { label: "4-seter / hjørnesofa", from: 1790 },
    ],
    note: "Stoff, mikrofiber, ull. Skinn etter forespørsel.",
  },
  {
    category: "Stoler",
    items: [
      { label: "Lenestol", from: 590 },
      { label: "Spisestol (pr. stk)", from: 149 },
      { label: "Kontorstol", from: 490 },
    ],
    note: "Rabatt ved 6+ stoler i samme rens.",
  },
  {
    category: "Tepper",
    items: [
      { label: "Under 4 m²", from: 690 },
      { label: "4–8 m²", from: 1190 },
      { label: "Over 8 m² (pr. m²)", from: 149 },
    ],
    note: "Ull, syntet og blandinger. Prisen avhenger av tilstand.",
  },
  {
    category: "Bil & bobil",
    items: [
      { label: "Bilinteriør (personbil)", from: 1490 },
      { label: "Varebil / SUV", from: 1890 },
      { label: "Bobil / campingvogn", from: 2990 },
    ],
    note: "Seter, dørpaneler, gulvtepper og taktrekk.",
  },
];

export default function Pricing() {
  return (
    <section id="priser" className="py-24 lg:py-32 bg-cream-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-forest-600" />
              <span className="text-sm font-medium tracking-widest uppercase text-forest-700">
                Fra-priser
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-950 mb-4 leading-tight">
              Ærlige priser, <span className="italic text-forest-700">ingen overraskelser</span>
            </h2>
            <p className="text-lg text-forest-800/70 leading-relaxed">
              Du skal vite hva det koster før vi ruller ut av innkjørselen.
              Send oss et bilde — så får du et konkret anslag før vi setter
              oss i bilen.
            </p>
          </div>
          <div className="flex items-center gap-3 bg-forest-900 text-cream-50 px-5 py-4 rounded-xl max-w-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-accent shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
            <p className="text-sm leading-snug">
              Alle priser er inkl. mva. Minimumsbestilling kr 890.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {priceItems.map((group) => (
            <div
              key={group.category}
              className="bg-cream-100 border border-forest-900/10 rounded-xl p-6 hover:shadow-xl hover:shadow-forest-900/5 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-serif text-2xl font-bold text-forest-950">
                  {group.category}
                </h3>
                <span className="w-2 h-2 rounded-full bg-amber-accent" />
              </div>

              <ul className="space-y-3 mb-5 flex-1">
                {group.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-baseline justify-between gap-3 pb-3 border-b border-forest-900/10 last:border-0"
                  >
                    <span className="text-sm text-forest-800/80">{item.label}</span>
                    <span className="font-serif text-lg font-bold text-forest-900 whitespace-nowrap">
                      <span className="text-xs font-sans font-medium text-forest-600/60 mr-1">fra</span>
                      {item.from.toLocaleString("nb-NO")} kr
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-forest-700/60 italic leading-relaxed">
                {group.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-4 shimmer-bg text-cream-50 font-semibold rounded-full hover:shadow-xl hover:shadow-forest-900/20 transition-all"
          >
            Få et konkret anslag
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
