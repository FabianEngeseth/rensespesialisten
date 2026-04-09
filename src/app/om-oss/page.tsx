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
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-3">Om oss</p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {about?.heading ?? "Om Rensespesialisten"}
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              {about?.intro ??
                "Vi er et lokalt rengjøringsselskap med base i Namdalen. Vår misjon er å levere topp kvalitet til hjemmet og arbeidsplassen din."}
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose prose-lg prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed text-lg">
                Rensespesialisten ble startet fordi vi så et behov: folk kaster sofaer,
                tepper og madrasser som fint kunne vært reddet med en skikkelig
                dyprengjøring. Vi kommer hjem til deg med profesjonelt utstyr og gjør
                jobben på stedet.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Vi jobber for både private og bedrifter i hele Namdalen og
                Nærøysund-regionen. Enten det er en flekkete sofa, et teppe som trenger
                oppfriskning eller bilinteriør som skal friskes opp — vi har utstyret
                og kunnskapen.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Som lokal bedrift er vi opptatt av å bygge langvarige relasjoner.
                Vi gir deg et konkret tilbud på forhånd, og du betaler ikke før du er
                fornøyd med resultatet.
              </p>
            </div>

            {/* Contact sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-slate-900 mb-4 text-lg">Ta kontakt</h3>
                <p className="text-slate-600 text-sm mb-6">
                  Har du spørsmål? Vi svarer raskt og gir deg et uforpliktende tilbud.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center w-full px-4 py-3 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors"
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
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Våre verdier</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {about.values.map((value, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-700 font-bold text-lg">{i + 1}</span>
                  </div>
                  <h3 className="font-bold text-xl text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Trenger møblene dine en oppfriskning?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Få et gratis og uforpliktende tilbud. Vi svarer raskt.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-800 font-bold rounded-xl hover:bg-blue-50 transition-colors text-lg"
          >
            Send oss en melding
          </Link>
        </div>
      </section>
    </>
  );
}
