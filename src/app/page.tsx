import type { Metadata } from "next";
import Link from "next/link";
import { reader } from "@/lib/reader";

export const metadata: Metadata = {
  title: "Profesjonell dyprengj\u00f8ring av m\u00f8bler og tekstiler i Namdalen",
  description:
    "Rensespesialisten gir nytt liv til m\u00f8bler og tekstiler. Sofarens, tepperens, bilinteri\u00f8rrens og mer \u2014 vi kommer hjem til deg.",
};

const serviceIcons: Record<string, React.ReactNode> = {
  sparkle: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5z" clipRule="evenodd" />
    </svg>
  ),
  home: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.689z" />
      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
    </svg>
  ),
  office: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H15a.75.75 0 000-1.5h-1.5zm-.75 3.75A.75.75 0 0113.5 12H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z" clipRule="evenodd" />
    </svg>
  ),
  window: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a.75.75 0 00.75.75H12v-9H4.5a1.5 1.5 0 00-1.5 1.5zm13.5-1.5H13.5v9h7.5a.75.75 0 00.75-.75v-7.5a1.5 1.5 0 00-1.5-1.5z" clipRule="evenodd" />
    </svg>
  ),
  calendar: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
      <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
    </svg>
  ),
  stairs: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 009 12h3.75v.75A.75.75 0 0013.5 13.5h.75a.75.75 0 000-1.5v-.003A3.75 3.75 0 0010.5 7.5H9z" clipRule="evenodd" />
    </svg>
  ),
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
      {/* Hero — dark overlay style */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Background pattern (placeholder for real hero image) */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/80 to-slate-800" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            {hero?.badge && (
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-blue-200 mb-6 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-300">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                {hero.badge}
              </div>
            )}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {hero?.heading ?? "Profesjonell dyprengj\u00f8ring av m\u00f8bler og tekstiler"}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {hero?.subheading ?? "Vi gir dine m\u00f8bler, tepper og bilinteri\u00f8r nytt liv. Sk\u00e5nsom og grundig rens med profesjonelt utstyr."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors text-lg shadow-lg shadow-blue-600/25"
              >
                {hero?.ctaPrimaryText ?? "Book en rens"}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-2">
                  <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link
                href="/tjenester"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-lg"
              >
                {hero?.ctaSecondaryText ?? "Se tjenester"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tjenester — 2x3 grid */}
      {featuredServices.length > 0 && (
        <section className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                V\u00e5re tjenester
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Vi tilbyr profesjonell dyprengj\u00f8ring av alle typer tekstiler og m\u00f8bler
              </p>
              <p className="text-blue-700 font-medium mt-2">For privat og bedrift</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/tjenester#${service.slug}`}
                  className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700 mb-4 group-hover:bg-blue-100 transition-colors">
                    {serviceIcons[service.entry.icon] ?? serviceIcons.sparkle}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    {service.entry.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.entry.shortDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* F\u00f8r & etter */}
      <section id="resultater" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              F\u00f8r & etter
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Vi kommer til deg &ndash; tjenesten utf\u00f8res der m\u00f8blene befinner seg.
            </p>
            <p className="text-blue-700 font-medium mt-2">Ingen stress med transport!</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-slate-200 rounded-2xl flex items-center justify-center border border-slate-200"
              >
                <div className="text-center text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-10 h-10 mx-auto mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 0 0 1.5-1.5V4.5a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v15a1.5 1.5 0 0 0 1.5 1.5Z" />
                  </svg>
                  <span className="text-sm">Bilde {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kundeomtaler */}
      {allTestimonials.length > 0 && (
        <section id="omtaler" className="py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Hva kundene sier
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Vi er stolte av v\u00e5re kundeomtaler fra Google Reviews
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {allTestimonials.map((t) => (
                <div key={t.slug} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.entry.rating ?? 5 }).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-400">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-700 italic mb-4 leading-relaxed text-sm">
                    &ldquo;{t.entry.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-slate-900">{t.entry.name}</p>
                    <p className="text-slate-500 text-sm">{t.entry.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Booking / Kontakt */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Book en rens
            </h2>
            <p className="text-lg text-slate-600">
              Fyll ut skjemaet under, eller ring oss direkte
            </p>
            {settings?.phone && (
              <a
                href={`tel:${settings.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 text-blue-700 font-semibold text-lg mt-3 hover:text-blue-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                {settings.phone}
              </a>
            )}
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 max-w-xl mx-auto">
            <HomeContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

function HomeContactForm() {
  return (
    <form action="https://formspree.io/f/placeholder" method="POST" className="space-y-5">
      <div>
        <label htmlFor="home-name" className="block text-sm font-medium text-slate-700 mb-1.5">
          Navn
        </label>
        <input
          id="home-name"
          name="name"
          type="text"
          required
          placeholder="Ditt navn"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>
      <div>
        <label htmlFor="home-email" className="block text-sm font-medium text-slate-700 mb-1.5">
          E-post
        </label>
        <input
          id="home-email"
          name="email"
          type="email"
          required
          placeholder="din@epost.no"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>
      <div>
        <label htmlFor="home-message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Hva \u00f8nsker du \u00e5 f\u00e5 renset?
        </label>
        <textarea
          id="home-message"
          name="message"
          required
          rows={4}
          placeholder="F.eks. sofa, tepper, bilseter..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-colors text-lg"
      >
        Send foresp\u00f8rsel
      </button>
    </form>
  );
}
