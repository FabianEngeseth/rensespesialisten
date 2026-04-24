import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { reader } from "@/lib/reader";
import HeroMedia from "@/components/HeroMedia";
import TrackFork from "@/components/TrackFork";
import Pricing from "@/components/Pricing";
import CoverageMap from "@/components/CoverageMap";
import BookingWizard from "@/components/BookingWizard";
import BusinessQuoteForm from "@/components/BusinessQuoteForm";
import StickyBookButton from "@/components/StickyBookButton";

export const metadata: Metadata = {
  title: "Profesjonell dyprengjøring av møbler og tekstiler i Namdalen",
  description:
    "Rensespesialisten gir nytt liv til møbler og tekstiler. Sofarens, tepperens, bilinteriørrens og mer — vi kommer hjem til deg.",
};

export default async function HomePage() {
  const [settings, allServices, allTestimonials] = await Promise.all([
    reader.singletons.settings.read(),
    reader.collections.services.all(),
    reader.collections.testimonials.all(),
  ]);

  const featuredServices = allServices
    .filter((s) => s.entry.featured)
    .sort((a, b) => (a.entry.sortOrder ?? 0) - (b.entry.sortOrder ?? 0));

  return (
    <>
      {/* ── 1. HERO — tekst venstre, mykt feathered media på høyre side ── */}
      <section className="relative bg-cream-50 overflow-hidden">
        {/* Feathered media: mykt innfelt høyre side, smelter inn i cream via radial maske */}
        <div
          aria-hidden
          className="hidden lg:block pointer-events-none absolute inset-y-0 right-0 w-[48%]"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 70% at 68% 50%, black 22%, rgba(0,0,0,0.45) 52%, transparent 82%)",
            maskImage:
              "radial-gradient(ellipse 65% 70% at 68% 50%, black 22%, rgba(0,0,0,0.45) 52%, transparent 82%)",
          }}
        >
          <HeroMedia />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:pt-10 sm:pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24">
          <div className="lg:hidden mx-auto mb-8 h-48 w-48 sm:h-56 sm:w-56 rounded-full overflow-hidden ring-1 ring-forest-900/10 shadow-xl shadow-forest-950/20 relative">
            <HeroMedia />
          </div>
          <div className="max-w-xl lg:max-w-[34rem]">
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
            <p className="text-lg lg:text-xl text-forest-800/80 leading-relaxed mb-9 max-w-xl">
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
                  className="inline-flex items-center gap-2 px-6 py-4 text-forest-900 font-semibold border border-forest-900/20 hover:border-forest-700 hover:bg-cream-100/80 rounded-full backdrop-blur-sm bg-cream-50/40 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  Ring {settings.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PRIVAT/BEDRIFT-VELGER (slim band) ──────────────── */}
      <TrackFork />

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
                      <div className="h-11 w-11 rounded-full bg-forest-100 flex items-center justify-center text-forest-800 font-semibold text-xs shrink-0">
                        {initials}
                      </div>
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
          </div>
        </section>
      )}

      {/* ── 4. BOOKING (mørk anker) ───────────────────────────── */}
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

      {/* ── 5. FØR & ETTER ────────────────────────────────────── */}
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
                  className="object-cover scale-125 object-center"
                />
                <div className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase bg-amber-accent text-forest-950 px-2.5 py-1 rounded">
                  Etter
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. DETTE RENSER VI ───────────────────────────────── */}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-forest-900/10 rounded-xl overflow-hidden border border-forest-900/10">
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
          </div>
        </section>
      )}

      {/* ── 7. PRISER + DEKNINGSOMRÅDE ──────────────────────── */}
      <section id="priser" className="py-20 lg:py-28 bg-cream-100">
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
                Fra-priser{" "}
                <span className="italic text-forest-700">du kan planlegge etter</span>
              </h2>
              <p className="text-lg text-forest-800/70 leading-relaxed">
                Inkl. mva. Fast pris bekreftes før vi starter — ingen
                overraskelser. Se dekningsområdet under.
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

      {/* ── 8. BEDRIFT ────────────────────────────────────────── */}
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

      {/* ── 9. OM OSS — Møt Daniel (flyttet til slutten) ──────── */}
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
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-amber-accent" />
                <span className="text-sm font-medium tracking-widest uppercase text-forest-700">
                  Om oss
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-950 mb-5 leading-tight">
                Det er{" "}
                <span className="italic text-forest-700">meg</span> som kommer
                hjem til deg
              </h2>
              <p className="text-lg text-forest-800/75 leading-relaxed mb-6">
                Rensespesialisten er et lite, lokalt firma. Jeg er tilbake hvis
                noe ikke sitter. Ingen underleverandører — det er jeg som står
                for jobben.
              </p>
              <ul className="space-y-3 text-sm text-forest-800 mb-8">
                {[
                  "Fast pris bekreftet før jeg starter — ingen overraskelser",
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

      {/* Sticky book-knapp for mobil */}
      <StickyBookButton phone={settings?.phone ?? ""} />
    </>
  );
}
