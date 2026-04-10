const primaryAreas = [
  "Rørvik",
  "Kolvereid",
  "Nærøysund",
  "Namsos",
  "Foldereid",
  "Leka",
  "Vikna",
  "Høylandet",
];

const extendedAreas = [
  "Grong",
  "Overhalla",
  "Flatanger",
  "Osen",
  "Bindal",
];

export default function CoverageMap() {
  return (
    <section id="omrade" className="py-24 lg:py-32 bg-forest-950 text-cream-50 relative overflow-hidden">
      {/* Topografiske linjer i bakgrunnen */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="topo" width="120" height="120" patternUnits="userSpaceOnUse">
            <path
              d="M0 60 Q 30 30, 60 60 T 120 60"
              fill="none"
              stroke="#dcedde"
              strokeWidth="1"
            />
            <path
              d="M0 80 Q 30 50, 60 80 T 120 80"
              fill="none"
              stroke="#dcedde"
              strokeWidth="1"
            />
            <path
              d="M0 40 Q 30 10, 60 40 T 120 40"
              fill="none"
              stroke="#dcedde"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo)" />
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Venstre: innhold */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-amber-accent" />
              <span className="text-sm font-medium tracking-widest uppercase text-amber-accent">
                Dekningsområde
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Vi ruller ut til hele <span className="italic text-forest-200">Namdalen</span>
            </h2>
            <p className="text-lg text-cream-100/70 leading-relaxed mb-10">
              Basen vår er i Nærøysund, og vi kjører gratis innenfor en
              times radius. Lenger unna? Ta kontakt — vi legger gjerne
              dagsturer med flere stopp i samme område.
            </p>

            <div className="mb-8">
              <p className="text-xs font-semibold tracking-widest uppercase text-amber-accent mb-4">
                Gratis utrykning
              </p>
              <div className="flex flex-wrap gap-2">
                {primaryAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 bg-forest-800/60 border border-forest-700 text-cream-50 text-sm px-4 py-2 rounded-full"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-forest-300" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-cream-200/50 mb-4">
                Etter avtale
              </p>
              <div className="flex flex-wrap gap-2">
                {extendedAreas.map((area) => (
                  <span
                    key={area}
                    className="text-sm text-cream-100/60 px-3 py-1"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Høyre: stilisert kart */}
          <div className="relative">
            <div className="aspect-square bg-forest-900/60 border border-forest-700 rounded-2xl p-8 relative overflow-hidden backdrop-blur">
              {/* Radius-ringer */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[85%] h-[85%] rounded-full border border-forest-700/60" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[60%] h-[60%] rounded-full border border-forest-600/70" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[35%] h-[35%] rounded-full border border-amber-accent/60 bg-amber-accent/5" />
              </div>

              {/* Pulsering på senter */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-4 h-4 rounded-full bg-amber-accent"
                  style={{ animation: "slow-pulse 4s ease-in-out infinite" }}
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-amber-accent ring-4 ring-amber-accent/30" />
              </div>

              {/* Stedsnavn på kartet — plassert fritt */}
              <span className="absolute top-[22%] left-[45%] text-xs font-semibold text-cream-50 bg-forest-950/80 px-2 py-1 rounded">
                Rørvik
              </span>
              <span className="absolute top-[38%] left-[30%] text-xs font-semibold text-cream-50 bg-forest-950/80 px-2 py-1 rounded">
                Kolvereid
              </span>
              <span className="absolute top-[55%] left-[52%] text-[10px] font-semibold text-cream-100/80 bg-forest-950/70 px-1.5 py-0.5 rounded">
                Nærøysund
              </span>
              <span className="absolute top-[72%] left-[38%] text-xs font-semibold text-cream-100 bg-forest-950/80 px-2 py-1 rounded">
                Namsos
              </span>
              <span className="absolute top-[15%] left-[20%] text-[10px] font-semibold text-cream-100/70 bg-forest-950/60 px-1.5 py-0.5 rounded">
                Leka
              </span>
              <span className="absolute top-[30%] right-[15%] text-[10px] font-semibold text-cream-100/70 bg-forest-950/60 px-1.5 py-0.5 rounded">
                Høylandet
              </span>

              {/* Kompass */}
              <div className="absolute bottom-5 right-5 w-10 h-10 rounded-full border border-forest-700 flex items-center justify-center bg-forest-950/60">
                <svg viewBox="0 0 20 20" className="w-6 h-6 text-amber-accent" fill="currentColor">
                  <path d="M10 2 L 12 10 L 10 9 L 8 10 Z" />
                  <path d="M10 18 L 8 10 L 10 11 L 12 10 Z" opacity="0.5" />
                </svg>
              </div>

              {/* Skala */}
              <div className="absolute bottom-5 left-5 flex items-center gap-2 text-[10px] text-cream-100/50 font-mono">
                <div className="w-12 h-px bg-cream-100/40" />
                <span>~50 km</span>
              </div>
            </div>

            {/* Info-badge under kartet */}
            <div className="mt-5 flex items-center gap-3 text-sm text-cream-100/60">
              <span className="w-2 h-2 rounded-full bg-amber-accent" />
              <span>Base: Nærøysund</span>
              <span className="text-cream-100/30">·</span>
              <span>Responstid: typisk 2–4 dager</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
