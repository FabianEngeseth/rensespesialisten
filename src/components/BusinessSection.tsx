import Link from "next/link";

const segments = [
  {
    title: "Hoteller & overnatting",
    description:
      "Faste avtaler på sofaer, stoler og tepper i fellesarealer. Vi jobber utenfor åpningstid og uten å forstyrre gjestene.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Kontor & møterom",
    description:
      "Flekkete kontorstoler, slitte møteroms-sofaer, konferanseteppe. Oppfriskning som gir inntrykk av en velholdt bedrift.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Bilforhandlere",
    description:
      "Innbytte-biler som trenger å se ut som nye. Rask gjennomrens av interiør som gir deg høyere salgspris.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9-9h12m-12 0a3 3 0 00-3 3v4.5a1.5 1.5 0 001.5 1.5h1.5m9-9V4.5a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v2.25m12 0h4.5l2.25 4.5v4.5h-1.5m-3 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0" />
      </svg>
    ),
  },
  {
    title: "Barnehager & skoler",
    description:
      "Dypvask av puter, madrasser, lekekroker og tepper. Allergivennlig og trygt for barn.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Frisør & velvære",
    description:
      "Salongstoler, sofaer i venterom og gulvtepper. Et rent miljø er det første kundene legger merke til.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Utleie & Airbnb",
    description:
      "Turnover mellom gjester, eller full rens etter et krevende opphold. Vi kommer raskt når du trenger det.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

export default function BusinessSection() {
  return (
    <section id="bedrift" className="py-24 lg:py-32 bg-cream-100 relative overflow-hidden">
      {/* Bakgrunn-aksenter */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forest-300/20 blur-3xl -translate-y-1/2 translate-x-1/4"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-amber-accent/10 blur-3xl translate-y-1/2 -translate-x-1/4"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-10 mb-14">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-amber-accent" />
              <span className="text-sm font-medium tracking-widest uppercase text-amber-accent">
                For bedrift
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-forest-950 mb-6 leading-[1.05]">
              Slitne møbler trekker ned <span className="italic text-forest-700">hele inntrykket</span>
            </h2>
            <p className="text-lg text-forest-800/70 leading-relaxed max-w-xl">
              Vi jobber med hoteller, kontorer, barnehager, bilforhandlere og
              utleie i hele Namdalen. Rammeavtaler, fakturering og arbeid
              utenfor åpningstid — vi tilpasser oss driften deres, ikke
              omvendt.
            </p>
          </div>

          <div className="lg:col-span-5 bg-forest-950 text-cream-50 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-amber-accent mb-4">
                Fordeler for bedrift
              </p>
              <ul className="space-y-3">
                {[
                  "Fakturering med 14 dagers forfall",
                  "Rammeavtale med faste intervaller",
                  "Arbeid utenfor åpningstid",
                  "Dokumentasjon og kvalitetsrapport",
                  "Egen kontaktperson",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-cream-100">
                    <svg className="w-4 h-4 text-amber-accent mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="#booking"
              className="inline-flex items-center justify-center gap-2 mt-8 px-6 py-3 bg-amber-accent text-forest-950 font-semibold rounded-full hover:bg-amber-accent/90 transition-colors"
            >
              Be om bedriftstilbud
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {segments.map((seg) => (
            <div
              key={seg.title}
              className="group bg-cream-50 border border-forest-900/10 rounded-xl p-7 hover:border-forest-600 hover:shadow-lg hover:shadow-forest-900/5 transition-all"
            >
              <div className="text-forest-700 mb-5 group-hover:scale-110 group-hover:text-forest-600 transition-all duration-300 origin-left">
                {seg.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-forest-950 mb-2">
                {seg.title}
              </h3>
              <p className="text-sm text-forest-800/70 leading-relaxed">
                {seg.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
