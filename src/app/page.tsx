import type { Metadata } from "next";
import Link from "next/link";
import { reader } from "@/lib/reader";
import AnimatedVan from "@/components/AnimatedVan";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CoverageMap from "@/components/CoverageMap";
import BusinessSection from "@/components/BusinessSection";
import CommonProblems from "@/components/CommonProblems";
import ProcessVideo from "@/components/ProcessVideo";
import FAQ from "@/components/FAQ";
import BookingWizard from "@/components/BookingWizard";
import StickyBookButton from "@/components/StickyBookButton";

export const metadata: Metadata = {
  title: "Profesjonell dyprengjøring av møbler og tekstiler i Namdalen",
  description:
    "Rensespesialisten gir nytt liv til møbler og tekstiler. Sofarens, tepperens, bilinteriørrens og mer — vi kommer hjem til deg.",
};

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
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-cream-50 overflow-hidden">
        {/* Myk bakgrunn-glød */}
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-forest-200/40 blur-3xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-amber-accent/10 blur-3xl"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28 relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Venstre: tekst */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-forest-600" />
                <span className="text-sm font-medium tracking-widest uppercase text-forest-700">
                  {hero?.badge ?? "Nærøysund · Namdalen"}
                </span>
              </div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.03] text-forest-950 mb-7">
                Vi kommer hjem til deg og{" "}
                <span className="italic text-forest-700 relative inline-block">
                  gir møblene
                  <svg
                    aria-hidden
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M5 8 Q 75 2, 150 6 T 295 5"
                      fill="none"
                      stroke="var(--color-amber-accent)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                nytt liv
              </h1>
              <p className="text-xl text-forest-800/70 leading-relaxed mb-10 max-w-xl">
                Profesjonell dyprengjøring av sofa, teppe, stoler og
                bilinteriør. Du slipper å frakte noe — vi ruller opp i
                innkjørselen din med alt utstyret, når det måtte passe deg.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
                <Link
                  href="#booking"
                  className="group inline-flex items-center gap-2 px-8 py-4 shimmer-bg text-cream-50 font-semibold rounded-full shadow-xl shadow-forest-950/10 hover:shadow-2xl hover:shadow-forest-950/20 transition-all"
                >
                  Book en rens
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </Link>
                {settings?.phone && (
                  <a
                    href={`tel:${settings.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-2 px-6 py-4 text-forest-900 font-semibold hover:text-forest-700 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-forest-100 border border-forest-200 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-forest-700">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    Ring {settings.phone}
                  </a>
                )}
              </div>

              {/* Hero trust-linje */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-forest-800/60">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-amber-accent" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" />
                  </svg>
                  <span>500+ fornøyde kunder</span>
                </div>
                <span className="text-forest-900/20">·</span>
                <span>Forsikret og registrert</span>
                <span className="text-forest-900/20">·</span>
                <span>Vipps & faktura</span>
              </div>
            </div>

            {/* Høyre: animert bil */}
            <div className="lg:col-span-5">
              <AnimatedVan className="w-full max-w-lg mx-auto lg:max-w-none aspect-[16/10]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST MARQUEE ─────────────────────────────────────── */}
      <section className="border-y border-forest-900/10 bg-forest-950 text-cream-50 overflow-hidden py-5">
        <div className="marquee-track gap-16 px-8 text-sm font-medium tracking-wide">
          {[
            "Vi kommer hjem til deg",
            "Profesjonelt utstyr",
            "Fast pris før vi starter",
            "Allergivennlige midler",
            "500+ fornøyde kunder",
            "Fornøydhetsgaranti",
            "Lokal bedrift i Namdalen",
            "Trygt for barn og dyr",
          ]
            .concat([
              "Vi kommer hjem til deg",
              "Profesjonelt utstyr",
              "Fast pris før vi starter",
              "Allergivennlige midler",
              "500+ fornøyde kunder",
              "Fornøydhetsgaranti",
              "Lokal bedrift i Namdalen",
              "Trygt for barn og dyr",
            ])
            .map((item, i) => (
              <div key={i} className="flex items-center gap-4 shrink-0 text-cream-100/80">
                <svg className="w-4 h-4 text-amber-accent shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                {item}
              </div>
            ))}
        </div>
      </section>

      {/* ── SLIK FUNKER DET ───────────────────────────────────── */}
      <HowItWorks />

      {/* ── TJENESTER ─────────────────────────────────────────── */}
      {featuredServices.length > 0 && (
        <section id="tjenester" className="py-24 lg:py-32 bg-cream-50 relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="h-px w-12 bg-forest-600" />
                  <span className="text-sm font-medium tracking-widest uppercase text-forest-700">
                    Tjenester
                  </span>
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-950 leading-tight">
                  Hva vi <span className="italic text-forest-700">renser</span>
                </h2>
              </div>
              <p className="text-forest-800/70 max-w-md text-lg lg:text-right">
                Alt av tekstiler og polstring — for privat og bedrift
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-forest-900/10 rounded-xl overflow-hidden border border-forest-900/10">
              {featuredServices.map((service, i) => (
                <Link
                  key={service.slug}
                  href={`/tjenester#${service.slug}`}
                  className="group bg-cream-100 p-10 hover:bg-forest-50 transition-all duration-500 relative"
                >
                  <span className="absolute top-5 right-6 text-xs font-mono font-bold text-forest-600/30 tracking-widest">
                    0{i + 1}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-forest-950 mb-3 group-hover:text-forest-700 transition-colors">
                    {service.entry.title}
                  </h3>
                  <p className="text-forest-800/70 text-sm leading-relaxed mb-6">
                    {service.entry.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-forest-700">
                    Les mer
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FRA-PRISER ─────────────────────────────────────────── */}
      <Pricing />

      {/* ── FØR & ETTER ────────────────────────────────────────── */}
      <section id="resultater" className="py-24 lg:py-32 bg-cream-100 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-forest-600" />
              <span className="text-sm font-medium tracking-widest uppercase text-forest-700">
                Resultater
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-950 mb-5 leading-tight">
              Før & etter
            </h2>
            <p className="text-lg text-forest-800/70 leading-relaxed">
              Vi dokumenterer alltid resultatet — du får alle bildene tilsendt
              etter at vi er ferdige.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-[4/5] bg-cream-50 rounded-xl flex items-center justify-center border border-forest-900/10 relative overflow-hidden group hover:border-amber-accent transition-colors"
              >
                <div className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase bg-forest-950 text-cream-50 px-2 py-1 rounded">
                  Før
                </div>
                <div className="absolute top-3 right-3 text-[10px] font-bold tracking-widest uppercase bg-amber-accent text-forest-950 px-2 py-1 rounded">
                  Etter
                </div>
                <div className="text-center text-forest-700/30">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-12 h-12 mx-auto mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 0 0 1.5-1.5V4.5a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5Z" />
                  </svg>
                  <span className="text-xs">Bilde {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROSESSVIDEO ───────────────────────────────────────── */}
      <ProcessVideo />

      {/* ── VANLIGE UTFORDRINGER ───────────────────────────────── */}
      <CommonProblems />

      {/* ── DEKNINGSOMRÅDE ─────────────────────────────────────── */}
      <CoverageMap />

      {/* ── BEDRIFT ────────────────────────────────────────────── */}
      <BusinessSection />

      {/* ── KUNDEOMTALER ───────────────────────────────────────── */}
      {allTestimonials.length > 0 && (
        <section id="omtaler" className="py-24 lg:py-32 bg-cream-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-12 bg-forest-600" />
                <span className="text-sm font-medium tracking-widest uppercase text-forest-700">
                  Omtaler
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-forest-950 leading-tight">
                Hva kundene sier
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allTestimonials.map((t) => (
                <div
                  key={t.slug}
                  className="bg-cream-100 border border-forest-900/10 rounded-xl p-8 hover:border-amber-accent transition-colors"
                >
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: t.entry.rating ?? 5 }).map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-amber-accent" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-serif text-xl text-forest-900 leading-relaxed mb-6 italic">
                    &ldquo;{t.entry.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-5 border-t border-forest-900/10">
                    <div className="w-11 h-11 rounded-full bg-forest-700 flex items-center justify-center text-cream-50 font-bold">
                      {t.entry.name?.charAt(0) ?? "?"}
                    </div>
                    <div>
                      <p className="font-semibold text-forest-950">{t.entry.name}</p>
                      {t.entry.location && (
                        <p className="text-sm text-forest-800/50">{t.entry.location}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <FAQ />

      {/* ── BOOKING WIZARD ─────────────────────────────────────── */}
      <section id="booking" className="py-24 lg:py-32 bg-forest-950 text-cream-50 relative overflow-hidden">
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
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-[1.05]">
              Bestill på 60 sekunder
            </h2>
            <p className="text-lg text-cream-100/70 max-w-xl mx-auto">
              Tre korte steg. Last opp bilder hvis du vil ha et konkret
              anslag før vi setter oss i bilen.
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

      {/* Sticky book-knapp for mobil */}
      <StickyBookButton phone={settings?.phone ?? ""} />
    </>
  );
}
