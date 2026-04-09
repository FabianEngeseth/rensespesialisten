import type { Metadata } from "next";
import Link from "next/link";
import { reader } from "@/lib/reader";

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
      {/* Hero — typographic, minimal */}
      <section className="relative bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-12 bg-emerald-600" />
              <span className="text-sm font-medium tracking-widest uppercase text-emerald-700">
                N&aelig;r&oslash;ysund
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-slate-900 mb-8">
              {hero?.heading ?? "Profesjonell dyprengjøring av møbler og tekstiler"}
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
              {hero?.subheading ?? "Vi gir dine møbler, tepper og bilinteriør nytt liv. Skånsom og grundig rens med profesjonelt utstyr."}
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center px-7 py-3.5 bg-emerald-700 text-white font-semibold rounded-md hover:bg-emerald-800 transition-colors"
              >
                {hero?.ctaPrimaryText ?? "Book en rens"}
              </Link>
              {settings?.phone && (
                <a
                  href={`tel:${settings.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-slate-700 font-medium hover:text-emerald-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-emerald-600">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  Ring {settings.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-emerald-600">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              Vi kommer hjem til deg
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-emerald-600">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              Profesjonelt utstyr
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-emerald-600">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              Fast pris uten overraskelser
            </div>
          </div>
        </div>
      </section>

      {/* Tjenester */}
      {featuredServices.length > 0 && (
        <section className="py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-emerald-600" />
              <span className="text-sm font-medium tracking-widest uppercase text-emerald-700">Tjenester</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">
                Hva vi gj&oslash;r
              </h2>
              <p className="text-slate-500 max-w-md lg:text-right">
                Profesjonell dyprengjøring av alle typer tekstiler og møbler — for privat og bedrift
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 rounded-lg overflow-hidden">
              {featuredServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/tjenester#${service.slug}`}
                  className="group bg-white p-8 hover:bg-emerald-50/50 transition-colors"
                >
                  <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                    {service.entry.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {service.entry.shortDescription}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity">
                    Les mer
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Før & etter */}
      <section id="resultater" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-emerald-600" />
            <span className="text-sm font-medium tracking-widest uppercase text-emerald-700">Resultater</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900">
              F&oslash;r & etter
            </h2>
            <p className="text-slate-500 max-w-md lg:text-right">
              Se forskjellen profesjonell rens gj&oslash;r. Vi dokumenterer alltid resultatet.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-white rounded-lg flex items-center justify-center border border-slate-200"
              >
                <div className="text-center text-slate-300">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={0.75} stroke="currentColor" className="w-10 h-10 mx-auto mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 0 0 1.5-1.5V4.5a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5Z" />
                  </svg>
                  <span className="text-xs">Bilde {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kundeomtaler */}
      {allTestimonials.length > 0 && (
        <section id="omtaler" className="py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-emerald-600" />
              <span className="text-sm font-medium tracking-widest uppercase text-emerald-700">Omtaler</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-14">
              Hva kundene sier
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {allTestimonials.map((t) => (
                <div key={t.slug} className="bg-white border border-slate-200 rounded-lg p-8">
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: t.entry.rating ?? 5 }).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-400">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    &ldquo;{t.entry.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
                      {t.entry.name?.charAt(0) ?? "?"}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{t.entry.name}</p>
                      {t.entry.location && <p className="text-slate-400 text-xs">{t.entry.location}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Booking CTA */}
      <section className="py-20 lg:py-28 bg-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              Book en rens
            </h2>
            <p className="text-emerald-200 text-lg">
              Fyll ut skjemaet under, eller ring oss direkte
            </p>
            {settings?.phone && (
              <a
                href={`tel:${settings.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-white font-semibold text-lg mt-3 hover:text-emerald-200 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                {settings.phone}
              </a>
            )}
          </div>
          <div className="bg-white rounded-lg p-6 sm:p-8 max-w-lg mx-auto">
            <HomeContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function HomeContactForm() {
  return (
    <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-4">
      <div>
        <label htmlFor="home-name" className="block text-sm font-medium text-slate-700 mb-1">
          Navn
        </label>
        <input
          id="home-name"
          name="name"
          type="text"
          required
          placeholder="Ditt fulle navn"
          className="w-full px-4 py-3 rounded-md border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
        />
      </div>
      <div>
        <label htmlFor="home-email" className="block text-sm font-medium text-slate-700 mb-1">
          E-post
        </label>
        <input
          id="home-email"
          name="email"
          type="email"
          required
          placeholder="din@epost.no"
          className="w-full px-4 py-3 rounded-md border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
        />
      </div>
      <div>
        <label htmlFor="home-message" className="block text-sm font-medium text-slate-700 mb-1">
          Hva &oslash;nsker du &aring; f&aring; renset?
        </label>
        <textarea
          id="home-message"
          name="message"
          required
          rows={4}
          placeholder="Beskriv hva du ønsker å få renset, f.eks. type møbel, antall, farge og eventuelle flekker..."
          className="w-full px-4 py-3 rounded-md border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3.5 bg-emerald-700 text-white font-semibold rounded-md hover:bg-emerald-800 transition-colors"
      >
        Send foresp&oslash;rsel
      </button>
    </form>
  );
}
