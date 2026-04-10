const steps = [
  {
    number: "01",
    title: "Du booker",
    description:
      "Fyll ut skjemaet, send et bilde eller ring direkte. Vi svarer innen 2 timer på hverdager og gir deg et konkret prisanslag.",
    time: "2 min",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Vi kommer til deg",
    description:
      "På avtalt dag og klokkeslett ruller bilen opp i innkjørselen din — eller rett foran bedriften. Ingen transport, ingen frakt.",
    time: "Du velger tid",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9-9h12m-12 0a3 3 0 00-3 3v4.5a1.5 1.5 0 001.5 1.5h1.5m9-9V4.5a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v2.25m12 0h4.5l2.25 4.5v4.5h-1.5m-3 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Vi renser på stedet",
    description:
      "Profesjonelt ekstraksjonsutstyr trekker ut alt det du ikke ser. Skånsomt for materialet, brutalt mot skitten. Vi jobber rolig og grundig.",
    time: "1–3 timer",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Klar til bruk",
    description:
      "De fleste tekstiler er tørre og klare til bruk innen 2–4 timer. Du får dokumentasjon av før/etter og betaler med Vipps eller faktura.",
    time: "Samme dag",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 lg:py-32 bg-cream-100 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, var(--color-forest-900) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-forest-600" />
            <span className="text-sm font-medium tracking-widest uppercase text-forest-700">
              Slik funker det
            </span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-950 mb-5 leading-tight">
            Fra første melding til ferdig renset
          </h2>
          <p className="text-lg text-forest-800/70 leading-relaxed">
            Vi gjør det så enkelt som mulig. Ingen frakt, ingen venting på time
            om tre uker, ingen uklare priser. Bare en rein og grei prosess.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-forest-900/10 rounded-xl overflow-hidden border border-forest-900/10">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="bg-cream-50 p-8 lg:p-10 relative group hover:bg-forest-50 transition-colors duration-500"
            >
              {/* Stort nummer i bakgrunnen */}
              <span className="absolute top-4 right-5 font-serif text-7xl font-bold text-forest-900/5 select-none">
                {step.number}
              </span>

              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-forest-700 text-cream-50 flex items-center justify-center mb-5 shadow-lg shadow-forest-900/20 group-hover:scale-110 transition-transform duration-500">
                  {step.icon}
                </div>

                <div className="text-xs font-semibold tracking-widest uppercase text-amber-accent mb-2">
                  Steg {step.number}
                </div>

                <h3 className="font-serif text-2xl font-bold text-forest-950 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-forest-800/70 leading-relaxed mb-5">
                  {step.description}
                </p>

                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-forest-700 bg-forest-100 px-3 py-1.5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .2.08.39.22.53l3 3a.75.75 0 101.06-1.06L10.75 9.69V5z" clipRule="evenodd" />
                  </svg>
                  {step.time}
                </div>

                {/* Piler mellom steg (bare mellom, ikke etter siste) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-11 -right-3 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-forest-300 bg-cream-50 rounded-full">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
