type Area = {
  name: string;
  km: number;
  minutes: number;
  base?: boolean;
};

const primaryAreas: Area[] = [
  { name: "Nærøysund", km: 0, minutes: 0, base: true },
  { name: "Vikna / Rørvik", km: 12, minutes: 12 },
  { name: "Kolvereid", km: 18, minutes: 18 },
  { name: "Foldereid", km: 38, minutes: 32 },
];

const extendedAreas = [
  { name: "Leka", km: 40 },
  { name: "Høylandet", km: 55 },
  { name: "Namsos", km: 65 },
  { name: "Bindal", km: 55 },
  { name: "Flatanger", km: 80 },
  { name: "Overhalla", km: 80 },
  { name: "Osen", km: 90 },
  { name: "Grong", km: 100 },
];

function formatMinutes(m: number): string {
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const rest = m % 60;
  return rest === 0 ? `${h} t` : `${h}t ${rest}min`;
}

/**
 * Lys-tema-versjon: ment å plasseres som indre kort i en lys cream-50-seksjon.
 * Ingen egen <section> — kaller komponenten kontrollerer plassering.
 */
export default function CoverageMap() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-7 items-stretch">
      {/* Venstre: Google Maps i mørk ramme */}
      <div className="relative rounded-2xl overflow-hidden border border-forest-900/15 shadow-xl shadow-forest-900/10 h-[380px] lg:h-auto min-h-[440px] lg:w-[58%] lg:shrink-0">
        <iframe
          title="Kart over dekningsområdet i Namdalen"
          src="https://www.google.com/maps?q=N%C3%A6r%C3%B8ysund,Norway&z=8&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
          allowFullScreen
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-forest-950/10"
        />
        <div className="absolute top-4 left-4 bg-cream-50/95 backdrop-blur border border-amber-accent rounded-full px-4 py-2 flex items-center gap-2 shadow-lg shadow-forest-950/10">
          <span className="relative flex w-2.5 h-2.5">
            <span className="absolute inset-0 rounded-full bg-amber-accent animate-ping opacity-70" />
            <span className="relative w-2.5 h-2.5 rounded-full bg-amber-accent" />
          </span>
          <span className="text-xs font-semibold tracking-wide text-forest-950">
            Base · Nærøysund
          </span>
        </div>
      </div>

      {/* Høyre: reiseliste */}
      <div className="bg-cream-100 border border-forest-900/15 rounded-2xl p-6 lg:p-7 flex-1">
        <div className="flex items-baseline justify-between mb-5 pb-4 border-b border-forest-900/10">
          <p className="text-xs font-semibold tracking-widest uppercase text-forest-700">
            Gratis utrykning
          </p>
          <p className="text-[11px] font-mono tracking-widest text-forest-700/40">
            64°N · 11°Ø
          </p>
        </div>

        <ul className="space-y-2.5">
          {primaryAreas.map((area) => (
            <li key={area.name} className="flex items-baseline gap-3">
              <span
                className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                  area.base ? "bg-amber-accent" : "bg-forest-700/50"
                }`}
              />
              <span
                className={`flex-1 ${
                  area.base
                    ? "text-forest-950 font-semibold"
                    : "text-forest-900"
                }`}
              >
                {area.name}
                {area.base && (
                  <span className="ml-2 text-[10px] font-mono tracking-widest uppercase text-amber-accent">
                    Base
                  </span>
                )}
              </span>
              <span className="font-mono text-sm tabular-nums text-forest-800/70">
                {area.km === 0 ? "—" : `~${area.km} km`}
              </span>
              <span className="font-mono text-xs tabular-nums text-forest-800/50 w-14 text-right">
                {area.minutes === 0 ? "" : formatMinutes(area.minutes)}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6 pt-5 border-t border-forest-900/10">
          <p className="text-xs font-semibold tracking-widest uppercase text-forest-700/60 mb-3">
            Etter avtale
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {extendedAreas.map((a) => (
              <span
                key={a.name}
                className="text-sm text-forest-800/70 flex items-baseline gap-1.5"
              >
                {a.name}
                <span className="font-mono text-[11px] text-forest-700/40">
                  ~{a.km}km
                </span>
              </span>
            ))}
          </div>
        </div>

        <p className="mt-6 text-xs text-forest-800/60 leading-relaxed">
          Responstid typisk 2–4 dager. Dagsturer planlegges når vi har flere
          oppdrag i samme område — da kan vi nå lenger.
        </p>
      </div>
    </div>
  );
}
