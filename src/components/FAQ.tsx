"use client";

import { useState } from "react";

const faqs = [
  {
    category: "Prosess",
    question: "Hvor lang tid tar en rens?",
    answer:
      "En vanlig sofa eller bilinteriør tar 1–2 timer. Større oppdrag som hjørnesofa, stort teppe eller bobil kan ta 2–4 timer. Vi gir deg et konkret tidsanslag når du booker.",
  },
  {
    category: "Prosess",
    question: "Når kan jeg bruke sofaen igjen?",
    answer:
      "De fleste tekstiler er tørre og klare til bruk innen 2–4 timer etter rens. Tykke ulltepper kan trenge opptil 6–8 timer. Vi forteller alltid hva du kan forvente for akkurat dine møbler.",
  },
  {
    category: "Kjemikalier",
    question: "Er midlene dere bruker trygge for barn og dyr?",
    answer:
      "Ja. Vi bruker profesjonelle, allergivennlige midler som er godkjent for hjemmebruk. De er trygge for barn, gravide og kjæledyr så snart overflaten er tørr. Vi har også svanemerkede alternativer på forespørsel.",
  },
  {
    category: "Kjemikalier",
    question: "Kommer det sterk lukt etterpå?",
    answer:
      "Nei. Til forskjell fra gammeldags sjampoering gir vår dyprens en mild, nøytral lukt som forsvinner når tekstilet er tørt. Mange sier rommet lukter friskere enn før.",
  },
  {
    category: "Klargjøring",
    question: "Må jeg flytte møblene før dere kommer?",
    answer:
      "Nei — vi renser møblene der de står. Vi trenger bare 1 meter fri plass rundt objektet, og en stikkontakt i nærheten. Det hjelper om du fjerner løse gjenstander og støvsuger lett på forhånd, men det er ikke nødvendig.",
  },
  {
    category: "Klargjøring",
    question: "Hva om jeg har kjæledyr?",
    answer:
      "Helt greit. Vi ber deg bare holde hund eller katt i et annet rom mens vi jobber — mest for å unngå at de blir stresset av støyen fra maskinen. De kan bruke møblene igjen så snart overflaten er tørr.",
  },
  {
    category: "Garanti",
    question: "Hva om flekken ikke går bort?",
    answer:
      "Vi er ærlige før vi starter. Hvis vi ser at en flekk sannsynligvis ikke lar seg fjerne (for eksempel bleking eller permanente fargeflekker), sier vi det med én gang. Går det likevel ikke som forventet, kommer vi tilbake gratis og prøver på nytt.",
  },
  {
    category: "Garanti",
    question: "Er dere forsikret?",
    answer:
      "Ja. Rensespesialisten er registrert i Brønnøysund og har full ansvarsforsikring. I det usannsynlige tilfellet at noe skulle skje, er du dekket.",
  },
  {
    category: "Betaling",
    question: "Hvordan betaler jeg?",
    answer:
      "Privatkunder betaler med Vipps eller bankkort direkte etter endt oppdrag. Bedrifter får faktura med 14 dagers forfall. Alle priser er inkl. mva.",
  },
  {
    category: "Betaling",
    question: "Koster det noe å få et tilbud?",
    answer:
      "Nei, aldri. Et prisanslag basert på bilder eller telefon er alltid gratis og uforpliktende. Vi gir deg et konkret tall før vi setter oss i bilen.",
  },
  {
    category: "Dekningsområde",
    question: "Kjører dere til meg?",
    answer:
      "Vi dekker hele Nærøysund, Rørvik, Kolvereid, Namsos og omegn gratis. Lenger ut (Grong, Overhalla, Flatanger, Bindal) kjører vi gjerne etter avtale — da legger vi ofte dagsturer med flere stopp.",
  },
  {
    category: "Dekningsområde",
    question: "Hvor raskt kan dere komme?",
    answer:
      "Typisk 2–4 dager fra første kontakt. Har du et akuttbehov (lekkasje, utleie, skade) — ring oss direkte, så prioriterer vi.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("Alle");

  const categories = ["Alle", ...Array.from(new Set(faqs.map((f) => f.category)))];
  const filtered =
    activeCategory === "Alle" ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-cream-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-forest-600" />
            <span className="text-sm font-medium tracking-widest uppercase text-forest-700">
              Spørsmål og svar
            </span>
            <span className="h-px w-12 bg-forest-600" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-950 mb-5 leading-tight">
            Det du lurer på
          </h2>
          <p className="text-lg text-forest-800/70 max-w-xl mx-auto">
            De vanligste spørsmålene vi får. Finner du ikke svaret — ring
            oss direkte eller send en melding.
          </p>
        </div>

        {/* Kategori-filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-forest-900 text-cream-50"
                  : "bg-cream-50 text-forest-700 border border-forest-900/10 hover:border-forest-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Akkordion */}
        <div className="space-y-3">
          {filtered.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={`${activeCategory}-${i}`}
                className={`bg-cream-50 border rounded-xl overflow-hidden transition-all ${
                  isOpen ? "border-forest-600 shadow-lg shadow-forest-900/5" : "border-forest-900/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <span className="text-xs font-semibold tracking-widest uppercase text-amber-accent mt-1 shrink-0 w-20">
                      {faq.category}
                    </span>
                    <span className="font-serif text-lg font-semibold text-forest-950 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen ? "bg-forest-900 text-cream-50 rotate-180" : "bg-cream-100 text-forest-700"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pl-[7.5rem]">
                      <p className="text-forest-800/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
