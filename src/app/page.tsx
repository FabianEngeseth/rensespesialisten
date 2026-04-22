import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { reader } from "@/lib/reader";
import HeroMedia from "@/components/HeroMedia";
import TrackFork from "@/components/TrackFork";
import Pricing from "@/components/Pricing";
import CoverageMap from "@/components/CoverageMap";
import FAQ from "@/components/FAQ";
import BookingWizard from "@/components/BookingWizard";
import BusinessQuoteForm from "@/components/BusinessQuoteForm";
import StickyBookButton from "@/components/StickyBookButton";

export const metadata: Metadata = {
  title: "Profesjonell dyprengjøring av møbler og tekstiler i Namdalen",
  description:
    "Rensespesialisten gir nytt liv til møbler og tekstiler. Sofarens, tepperens, bilinteriørrens og mer — vi kommer hjem til deg.",
};

const commonProblems = [
  "Hundelukt",
  "Urin",
  "Rødvin & kaffe",
  "Røyklukt",
  "Husstøvmidd",
  "Matsøl",
  "Etter flytting",
  "Fuktlukt i bobil",
];

export default async function HomePage() {
  const [hero, settings, allServices, allTestimonials] = await Promise.all([
    reader.singletons.hero.read(),
    reader.singletons.settings.read(),
    reader.collections.services.all(),
    reader.collections.testimonials.all(),
  ]);

  const featuredServices = allServices
    .filter((s) => s.entry.featured)
    .sort((a, b) => (a.entry.sortOrder ?? 0) - (b.entry.sortOrder ?? 0));

  return (
    <>
      {/* ── 1. HERO — split: tekst venstre, video høyre ──────── */}
      <section className="relative bg-cream-50 overflow-hidden">
        {/* Varm gradient som binder venstre tekst og høyre video */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-cream-50 via-cream-50 to-cream-100"
        />
        <div
          aria-hidden
          className="absolute -top-32 -left-40 w-[520px] h-[520px] rounded-full bg-forest-100/40 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-32 right-[15%] w-[420px] h-[420px] rounded-full bg-amber-accent/15 blur-3xl"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-center">
            {/* Venstre: tekst + CTA */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-amber-accent" />
                <span className="text-sm font-medium tracking-widest uppercase text-forest-700">
                  {hero?.badge ?? "Namdalen · Rensespesialisten"}
                </span>
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-[4.5rem] font-bold leading-[1.05] text-forest-950 mb-7">
                Vi kommer hjem til deg og gir møblene{" "}
                <span className="italic text-forest-700 relative inline-block">
                  nytt liv
                  <svg
                    aria-hidden
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M5 8 Q 50 2, 100 6 T 195 5"
                      fill="none"
                      stroke="var(--color-amber-accent)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-lg lg:text-xl text-forest-800/75 leading-relaxed mb-9 max-w-xl">
                Profesjonell dyprengjøring av sofa, teppe, stoler og bilinteriør
                — på stedet, hjemme hos deg.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link
                  href="#booking"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-forest-900 hover:bg-forest-800 text-cream-50 font-semibold rounded-full shadow-xl shadow-forest-950/20 transition-all"
                >
                  Book en rens
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
                {settings?.phone && (
                  <a
                    href={`tel:${settings.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 px-6 py-4 text-forest-900 font-semibold border border-forest-900/20 hover:border-forest-700 hover:bg-cream-100 rounded-full transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>
                    Ring {settings.phone}
                  </a>
                )}
              </div>

              {/* Trust-strip */}
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-forest-800/60">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-accent" />
                  Lokal i Namdalen
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-accent" />
                  Allergivennlige midler
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-accent" />
                  Fast pris før vi starter
                </span>
              </div>
            </div>

            {/* Høyre: portrett-video-ramme */}
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-forest-950 shadow-2xl shadow-forest-950/30 ring-1 ring-forest-950/10">
                <HeroMedia />
                {/* Subtil bunngradient for visuell ro */}
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-forest-950/40 to-transparent pointer-events-none"
                />
              </div>

              {/* Lite flytende kort med "5★" */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 lg:-left-8 items-center gap-3 bg-cream-50 border border-forest-900/10 rounded-2xl px-5 py-4 shadow-xl shadow-forest-950/10">
                <div className="flex gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-accent">
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <div className="text-xs leading-tight">
                  <p className="font-semibold text-forest-950">Lokale kunder</p>
                  <p className="text-forest-700/70">Anbefaler oss</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PRIVAT/BEDRIFT-VELGER (slim band) ──────────────── */}
      <TrackFork />

      {/* ── 2b. MØT DANIEL — lokal, registrert, kvalitet ──────── */}
      <section id="om-oss" className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-forest-950/15 ring-1 ring-forest-900/10">
                <Image
                  src="/mot-daniel.jpg"
                  alt="Daniel i Rensespesialisten-bilen — lokal i Namdalen"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                  priority={false}
                />
              </div>
              <div className="hidden sm:block absolute -bottom-5 -right-5 lg:-right-8 bg-forest-950 text-cream-50 rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-[10px] font-mono tracking-widest uppercase text-amber-accent mb-1">
                  Org.nr. registrert
                </p>
                <p className="text-xs text-cream-100/80 leading-snug max-w-[12rem]">
                  Lokalt firma i Namdalen — ikke et nasjonalt kjede-opplegg
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-amber-accent" />
                <span className="text-sm font-medium tracking-widest uppercase text-forest-700">
                  Møt Daniel
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-950 mb-5 leading-tight">
                Det er{" "}
                <span className="italic text-forest-700">meg</span> som kommer
                hjem til deg
              </h2>
              <p className="text-lg text-forest-800/75 leading-relaxed mb-6">
                Rensespesialisten er et lite, lokalt firma. Jeg kjenner
                nabolaget, snakker samme dialekt, og er tilbake hvis noe ikke
                sitter. Ingen underleverandører — det er jeg som står for jobben.
              </p>
              <ul className="space-y-3 text-sm text-forest-800 mb-8">
                {[
                  "Fast pris bekreftet før jeg starter — ingen overraskelser",
                  "Allergivennlige midler — trygt for barn og dyr",
                  "Jeg dokumenterer før og etter, og du får bildene",
                  "Du har alltid nummeret mitt — ring direkte",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-amber-accent mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-3 bg-forest-900 hover:bg-forest-800 text-cream-50 font-semibold rounded-full transition-colors"
              >
                Book en rens med Daniel
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. KUNDEOMTALER ────────────────────────────────────── */}
      {allTestimonials.length > 0 && (
        <section id="omtaler" className="py-20 lg:py-28 bg-cream-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-12 bg-forest-600" />
                <span className="text-sm font-medium tracking-widest uppercase text-forest-700">
                  Omtaler
                </span>
                <span className="h-px w-12 bg-forest-600" />
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-950 leading-tight">
                Hva kundene sier
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {allTestimonials.map((t) => {
                const initials = t.entry.name
                  .split(" ")
                  .map((p) => p[0])
                  .filter(Boolean)
                  .join("")
                  .slice(0, 2)
                  .toUpperCase();
                return (
                  <div
                    key={t.slug}
                    className="bg-cream-100 border border-forest-900/10 rounded-2xl p-7 flex flex-col hover:border-amber-accent/50 transition-colors"
                  >
                    <div className="flex gap-0.5 mb-4">
                      {Array.from({ length: t.entry.rating ?? 5 }).map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-amber-accent"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <p className="font-serif text-base text-forest-900 leading-relaxed mb-6 flex-1">
                      «{t.entry.text}»
                    </p>
                    <div className="pt-4 border-t border-forest-900/10 flex items-center gap-3">
                      {t.entry.photo ? (
                        <div className="relative h-11 w-11 rounded-full overflow-hidden border-2 border-amber-accent/40 shrink-0">
                          <Image
                            src={t.entry.photo}
                            alt={`Foto av ${t.entry.name}`}
                            fill
                            sizes="44px"
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="h-11 w-11 rounded-full bg-forest-100 flex items-center justify-center text-forest-800 font-semibold text-xs shrink-0">
                          {initials}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="font-semibold text-forest-950 text-sm truncate">
                          {t.entry.name}
                        </p>
                        {t.entry.location && (
                          <p className="text-xs text-forest-800/55 truncate">
                            {t.entry.location}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Messenger-omtale — ekte reaksjon, ikke redigert */}
            <div className="mt-10 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4 text-xs text-forest-800/55">
                <span className="h-px w-10 bg-forest-900/15" />
                <span className="tracking-widest uppercase">Rett fra innboksen</span>
                <span className="h-px w-10 bg-forest-900/15" />
              </div>
              <div className="bg-cream-100 border border-forest-900/10 rounded-2xl p-4 sm:p-6 shadow-sm">
                <Image
                  src="/omtale-messenger.jpg"
                  alt="Messenger-melding fra fornøyd kunde: «Tusen takk for jobben, deilig med rene sofaer og teppe»"
                  width={1200}
                  height={257}
                  sizes="(min-width: 1024px) 700px, 92vw"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 4. FØR & ETTER ────────────────────────────────────── */}
      <section id="resultater" className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-forest-600" />
                <span className="text-sm font-medium tracking-widest uppercase text-forest-700">
                  Resultater
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-950 mb-5 leading-tight">
                Før & etter — samme lenestol
              </h2>
              <p className="text-lg text-forest-800/70 leading-relaxed mb-6">
                Vi dokumenterer alltid resultatet. Du får alle bildene tilsendt
                etter at vi er ferdige — så du ser presist hva vi har gjort.
              </p>
              <ul className="space-y-3 text-sm text-forest-800">
                {[
                  "Flekker, lukt og partikler trekkes ut av polstringen",
                  "Allergivennlige midler — trygt for barn og dyr",
                  "Tørr og klar til bruk innen 2–4 timer",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-amber-accent mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-forest-900/10">
                <Image
                  src="/lenestol-for.jpg"
                  alt="Lenestol med synlige flekker før rens"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase bg-forest-950 text-cream-50 px-2.5 py-1 rounded">
                  Før
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden border border-forest-900/10">
                <Image
                  src="/lenestol-etter.jpg"
                  alt="Samme lenestol etter dyprengjøring — som ny"
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase bg-amber-accent text-forest-950 px-2.5 py-1 rounded">
                  Etter
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. DETTE RENSER VI (services + vanlige problemer) ── */}
      {featuredServices.length > 0 && (
        <section id="tjenester" className="py-20 lg:py-28 bg-cream-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-forest-600" />
                <span className="text-sm font-medium tracking-widest uppercase text-forest-700">
                  Dette renser vi
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-950 mb-5 leading-tight">
                Alt av <span className="italic text-forest-700">tekstiler og polstring</span>
              </h2>
              <p className="text-lg text-forest-800/70 leading-relaxed">
                Sofa, stoler, tepper, bilinteriør, bobil. Vi tar både hverdagsbruk
                og uhell — flekker, lukt og partikler du ikke ser.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-forest-900/10 rounded-xl overflow-hidden border border-forest-900/10 mb-10">
              {featuredServices.map((service, i) => (
                <Link
                  key={service.slug}
                  href={`/tjenester#${service.slug}`}
                  className="group bg-cream-100 p-8 hover:bg-forest-50 transition-colors relative"
                >
                  <span className="absolute top-4 right-5 text-xs font-mono font-bold text-forest-600/30 tracking-widest">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-forest-950 mb-2 group-hover:text-forest-700 transition-colors">
                    {service.entry.title}
                  </h3>
                  <p className="text-forest-800/70 text-sm leading-relaxed mb-4">
                    {service.entry.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700">
                    Les mer
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>

            {/* Vanlige problemer som inline-strip */}
            <div className="bg-cream-100 border border-forest-900/10 rounded-xl px-6 py-5 lg:px-8 lg:py-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
              <p className="text-xs font-semibold tracking-widest uppercase text-amber-accent shrink-0">
                Vanlige problemer vi løser
              </p>
              <div className="flex flex-wrap gap-2">
                {commonProblems.map((p) => (
                  <span
                    key={p}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-cream-50 border border-forest-900/10 text-forest-800"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 6. PRISER + DEKNINGSOMRÅDE (#privat-anchor) ──────── */}
      <section id="privat" className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-forest-600" />
                <span className="text-sm font-medium tracking-widest uppercase text-forest-700">
                  Priser & dekning
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-950 mb-5 leading-tight">
                Hva koster det, og kommer vi til{" "}
                <span className="italic text-forest-700">deg?</span>
              </h2>
              <p className="text-lg text-forest-800/70 leading-relaxed">
                Fra-priser inkl. mva. Fast pris bekreftes før vi starter — ingen
                overraskelser.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-forest-900 text-cream-50 px-5 py-4 rounded-xl max-w-sm shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-amber-accent shrink-0"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              <p className="text-sm leading-snug">
                Privatkunder: priser inkl. mva. Minimumsbestilling kr 890.
              </p>
            </div>
          </div>
        </div>

        <Pricing variant="private" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 lg:mt-20">
          <CoverageMap />
        </div>
      </section>

      {/* ── 7. BOOKING (mørk anker) ───────────────────────────── */}
      <section id="booking" className="bg-forest-950 text-cream-50 py-20 lg:py-28 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-forest-800/30 blur-3xl -translate-y-1/3 translate-x-1/3"
        />
        <div
          aria-hidden
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-amber-accent/5 blur-3xl translate-y-1/3 -translate-x-1/3"
        />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-amber-accent" />
              <span className="text-sm font-medium tracking-widest uppercase text-amber-accent">
                Book en rens
              </span>
              <span className="h-px w-12 bg-amber-accent" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-5 leading-tight">
              Bestill på 60 sekunder
            </h2>
            <p className="text-lg text-cream-100/70 max-w-xl mx-auto">
              Tre korte steg. Last opp bilder hvis du vil ha et konkret anslag
              før vi setter oss i bilen.
            </p>
            {settings?.phone && (
              <a
                href={`tel:${settings.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-amber-accent font-semibold mt-5 hover:text-amber-accent/80 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                eller ring {settings.phone}
              </a>
            )}
          </div>
          <BookingWizard />
        </div>
      </section>

      {/* ── 8. BEDRIFT (kompakt anker) ────────────────────────── */}
      <section id="bedrift" className="py-20 lg:py-28 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-amber-accent" />
                <span className="text-sm font-medium tracking-widest uppercase text-amber-accent">
                  For din bedrift
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-950 mb-5 leading-tight">
                Rammeavtaler & bedriftsoppdrag
              </h2>
              <p className="text-lg text-forest-800/70 leading-relaxed mb-6">
                Hoteller, kontor, AirBnB, barnehager, bilforhandlere. Vi
                tilpasser oss driften deres — faktura, fast intervall, arbeid
                utenfor åpningstid.
              </p>
              <ul className="space-y-3 text-sm text-forest-800">
                {[
                  "Faktura med 14 dagers forfall",
                  "Rammeavtale med faste intervaller — volumrabatt",
                  "Arbeid utenfor åpningstid",
                  "Egen kontaktperson",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-amber-accent mt-0.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div id="tilbud">
              <BusinessQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ────────────────────────────────────────────── */}
      <FAQ />

      {/* Sticky book-knapp for mobil */}
      <StickyBookButton phone={settings?.phone ?? ""} />
    </>
  );
}
