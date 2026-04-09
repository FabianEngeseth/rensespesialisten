import type { Metadata } from "next";
import Link from "next/link";
import { reader } from "@/lib/reader";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    "Lær mer om Rensespesialisten — spesialister på profesjonell møbelrens og tekstilvask i Namdalen.",
};

export default async function OmOssPage() {
  const about = await reader.singletons.about.read();

  return (
    <>
      {/* Page header */}
      <section className="bg-white pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-emerald-600" />
              <span className="text-sm font-medium tracking-widest uppercase text-emerald-700">Om oss</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              {about?.heading ?? "Om Rensespesialisten"}
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              {about?.intro ??
                "Vi er et lokalt rengjøringsselskap med base i Namdalen. Vår misjon er å levere topp kvalitet til hjemmet og arbeidsplassen din."}
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-slate-600 leading-relaxed text-lg">
                Rensespesialisten ble startet fordi vi s&aring; et behov: folk kaster sofaer,
                tepper og madrasser som fint kunne v&aelig;rt reddet med en skikkelig
                dyprengjøring. Vi kommer hjem til deg med profesjonelt utstyr og gjør
                jobben p&aring; stedet.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Vi jobber for b&aring;de private og bedrifter i hele Namdalen og
                N&aelig;r&oslash;ysund-regionen. Enten det er en flekkete sofa, et teppe som trenger
                oppfriskning eller bilinteriør som skal friskes opp &mdash; vi har utstyret
                og kunnskapen.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Som lokal bedrift er vi opptatt av &aring; bygge langvarige relasjoner.
                Vi gir deg et konkret tilbud p&aring; forh&aring;nd, og du betaler ikke f&oslash;r du er
                forn&oslash;yd med resultatet.
              </p>
            </div>

            <div>
              <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-100">
                <h3 className="font-semibold text-slate-900 mb-3">Ta kontakt</h3>
                <p className="text-slate-500 text-sm mb-5">
                  Har du sp&oslash;rsm&aring;l? Vi svarer raskt og gir deg et uforpliktende tilbud.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-emerald-700 text-white font-medium rounded-md hover:bg-emerald-800 transition-colors text-sm"
                >
                  Kontakt oss
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verdier */}
      {about?.values && about.values.length > 0 && (
        <section className="py-16 lg:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12 bg-emerald-600" />
              <span className="text-sm font-medium tracking-widest uppercase text-emerald-700">Verdier</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mb-12">V&aring;re verdier</h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {about.values.map((value, i) => (
                <div key={i}>
                  <span className="text-emerald-600 font-bold text-sm">0{i + 1}</span>
                  <h3 className="font-bold text-xl text-slate-900 mt-2 mb-3">{value.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-emerald-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">Trenger m&oslash;blene dine en oppfriskning?</h2>
          <p className="text-lg text-emerald-200 mb-8">
            F&aring; et gratis og uforpliktende tilbud. Vi svarer raskt.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center px-8 py-3.5 bg-white text-emerald-900 font-semibold rounded-md hover:bg-emerald-50 transition-colors"
          >
            Send oss en melding
          </Link>
        </div>
      </section>
    </>
  );
}
