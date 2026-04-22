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

type Variant = "private" | "business";

const copy: Record<Variant, {
  ctaHref: string;
  ctaLabel: string;
  priceTransform: (kr: number) => number;
}> = {
  private: {
    ctaHref: "#booking",
    ctaLabel: "Få et konkret anslag",
    priceTransform: (kr) => kr,
  },
  business: {
    ctaHref: "#tilbud",
    ctaLabel: "Be om tilbud",
    priceTransform: (kr) => Math.round(kr / 1.25 / 10) * 10,
  },
};

export default function Pricing({
  variant = "private",
}: {
  variant?: Variant;
}) {
  const c = copy[variant];
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <span className="text-sm text-forest-800/80">
                    {item.label}
                  </span>
                  <span className="font-serif text-lg font-bold text-forest-900 whitespace-nowrap">
                    <span className="text-xs font-sans font-medium text-forest-600/60 mr-1">
                      fra
                    </span>
                    {c.priceTransform(item.from).toLocaleString("nb-NO")} kr
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
          href={c.ctaHref}
          className="inline-flex items-center gap-2 px-8 py-4 shimmer-bg text-cream-50 font-semibold rounded-full hover:shadow-xl hover:shadow-forest-900/20 transition-all"
        >
          {c.ctaLabel}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
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
  );
}
