import type { Metadata } from "next";
import { reader } from "@/lib/reader";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Ta kontakt med Rensespesialisten for et gratis og uforpliktende tilbud. Vi svarer raskt.",
};

export default async function KontaktPage() {
  const [contactPage, settings] = await Promise.all([
    reader.singletons.contactPage.read(),
    reader.singletons.settings.read(),
  ]);

  return (
    <>
      {/* Page header */}
      <section className="bg-white pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-emerald-600" />
              <span className="text-sm font-medium tracking-widest uppercase text-emerald-700">Kontakt</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              {contactPage?.heading ?? "Ta kontakt"}
            </h1>
            <p className="text-xl text-slate-500">
              {contactPage?.subheading ?? "Vi svarer raskt og gir deg et konkret tilbud — uten forpliktelser."}
            </p>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 lg:py-24 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Send oss en melding</h2>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Kontaktinfo</h2>
              <div className="space-y-6">
                {settings?.phone && (
                  <div>
                    <p className="text-sm font-medium text-slate-400 mb-1">Telefon</p>
                    <a
                      href={`tel:${settings.phone.replace(/\s/g, "")}`}
                      className="text-slate-900 font-semibold hover:text-emerald-700 transition-colors"
                    >
                      {settings.phone}
                    </a>
                  </div>
                )}

                {settings?.email && (
                  <div>
                    <p className="text-sm font-medium text-slate-400 mb-1">E-post</p>
                    <a
                      href={`mailto:${settings.email}`}
                      className="text-slate-900 font-semibold hover:text-emerald-700 transition-colors break-all"
                    >
                      {settings.email}
                    </a>
                  </div>
                )}

                {settings?.address && (
                  <div>
                    <p className="text-sm font-medium text-slate-400 mb-1">Omr&aring;de</p>
                    <p className="text-slate-900 font-semibold">{settings.address}</p>
                  </div>
                )}

                <div>
                  <p className="text-sm font-medium text-slate-400 mb-1">&Aring;pningstider</p>
                  {settings?.openingHoursWeekdays && (
                    <p className="text-slate-900 font-semibold">{settings.openingHoursWeekdays}</p>
                  )}
                  {settings?.openingHoursWeekend && (
                    <p className="text-slate-600 text-sm">{settings.openingHoursWeekend}</p>
                  )}
                  <p className="text-slate-400 text-sm">S&oslash;n/helligdag: Stengt</p>
                </div>
              </div>

              <div className="mt-8 bg-emerald-50 border border-emerald-100 rounded-lg p-5">
                <p className="font-medium text-emerald-800 text-sm">Rask svartid</p>
                <p className="text-emerald-700 text-sm mt-1">Vi svarer normalt innen noen timer i arbeidstiden.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
