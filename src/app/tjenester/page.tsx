import type { Metadata } from "next";
import Link from "next/link";
import { reader } from "@/lib/reader";

export const metadata: Metadata = {
  title: "Tjenester",
  description:
    "Se alle tjenestene vi tilbyr: tepperens, sofarens, stolrens, bilinteriørrens og bobil-rens i Namdalen.",
};

export default async function TjenesterPage() {
  const services = await reader.collections.services.all();
  const sorted = services.sort(
    (a, b) => (a.entry.sortOrder ?? 0) - (b.entry.sortOrder ?? 0)
  );

  return (
    <>
      {/* Page header */}
      <section className="bg-white pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-emerald-600" />
              <span className="text-sm font-medium tracking-widest uppercase text-emerald-700">Tjenester</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-4">V&aring;re tjenester</h1>
            <p className="text-xl text-slate-500">
              Profesjonell dyprengjøring av møbler, tepper og tekstiler.
              Vi kommer hjem til deg med alt utstyr.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16 lg:py-24 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sorted.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className={`grid lg:grid-cols-5 gap-10 items-start ${
                  index > 0 ? "pt-16 border-t border-slate-100" : ""
                }`}
              >
                <div className="lg:col-span-3">
                  <span className="inline-block text-xs font-medium tracking-widest uppercase text-emerald-600 mb-3">
                    0{index + 1}
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-slate-900 mb-4">
                    {service.entry.title}
                  </h2>
                  <p className="text-lg text-slate-500 mb-6 leading-relaxed">
                    {service.entry.shortDescription}
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white font-medium rounded-md hover:bg-emerald-800 transition-colors text-sm"
                  >
                    F&aring; tilbud
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
                <div className="lg:col-span-2 bg-slate-50 rounded-lg p-6 border border-slate-100">
                  <p className="text-sm font-medium text-slate-800 mb-3">Inkludert i tjenesten</p>
                  <ul className="space-y-2.5 text-sm text-slate-500">
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Pris oppgis p&aring; forh&aring;nd &mdash; ingen overraskelser
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Vi kommer hjem til deg med alt utstyr
                    </li>
                    <li className="flex items-start gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                      Tilpasset ditt behov og timeplan
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Usikker p&aring; hvilken tjeneste du trenger?</h2>
          <p className="text-lg text-emerald-200 mb-8">
            Ta kontakt &mdash; vi hjelper deg med &aring; finne den beste l&oslash;sningen.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center px-8 py-3.5 bg-white text-emerald-900 font-semibold rounded-md hover:bg-emerald-50 transition-colors"
          >
            Snakk med oss
          </Link>
        </div>
      </section>
    </>
  );
}
