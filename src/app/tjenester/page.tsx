import type { Metadata } from "next";
import Link from "next/link";
import { reader } from "@/lib/reader";

export const metadata: Metadata = {
  title: "Tjenester",
  description:
    "Se alle tjenestene vi tilbyr: tepperens, sofarens, stolrens, bilinteriørrens og bobil-rens i Namdalen.",
};

const serviceIcons: Record<string, React.ReactNode> = {
  home: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.689z" />
      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
    </svg>
  ),
  office: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
      <path fillRule="evenodd" d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H15a.75.75 0 000-1.5h-1.5zm-.75 3.75A.75.75 0 0113.5 12H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z" clipRule="evenodd" />
    </svg>
  ),
  sparkle: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
      <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5z" clipRule="evenodd" />
    </svg>
  ),
  window: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
      <path fillRule="evenodd" d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a.75.75 0 00.75.75H12v-9H4.5a1.5 1.5 0 00-1.5 1.5zm13.5-1.5H13.5v9h7.5a.75.75 0 00.75-.75v-7.5a1.5 1.5 0 00-1.5-1.5z" clipRule="evenodd" />
    </svg>
  ),
  stairs: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 009 12h3.75v.75A.75.75 0 0013.5 13.5h.75a.75.75 0 000-1.5v-.003A3.75 3.75 0 0010.5 7.5H9z" clipRule="evenodd" />
    </svg>
  ),
  calendar: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
      <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
    </svg>
  ),
};

export default async function TjenesterPage() {
  const services = await reader.collections.services.all();
  const sorted = services.sort(
    (a, b) => (a.entry.sortOrder ?? 0) - (b.entry.sortOrder ?? 0)
  );

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-3">Tjenester</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Våre tjenester</h1>
            <p className="text-xl text-blue-100">
              Profesjonell dyprengjøring av møbler, tepper og tekstiler.
              Vi kommer hjem til deg med alt utstyr.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sorted.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className={`grid lg:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-700 mb-6">
                    {serviceIcons[service.entry.icon] ?? serviceIcons.sparkle}
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
                    {service.entry.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {service.entry.shortDescription}
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors"
                  >
                    Få tilbud på {service.entry.title.toLowerCase()}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
                <div className={`bg-slate-50 rounded-2xl p-8 border border-slate-100 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-slate-800">Hva er inkludert?</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.entry.shortDescription}
                  </p>
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-500">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      Pris oppgis på forhånd — ingen overraskelser
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mt-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-500">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                      </svg>
                      Tilpasset ditt behov og timeplan
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="font-serif text-3xl font-bold mb-4">Usikker på hvilken tjeneste du trenger?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Ta kontakt — vi hjelper deg med å finne den beste løsningen.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-800 font-bold rounded-xl hover:bg-blue-50 transition-colors text-lg"
          >
            Snakk med oss
          </Link>
        </div>
      </section>
    </>
  );
}
