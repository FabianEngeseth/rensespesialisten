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
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-3">Kontakt</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              {contactPage?.heading ?? "Ta kontakt"}
            </h1>
            <p className="text-xl text-blue-100">
              {contactPage?.subheading ?? "Vi svarer raskt og gir deg et konkret tilbud — uten forpliktelser."}
            </p>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Send oss en melding</h2>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Kontaktinfo</h2>
              <div className="space-y-6">
                {settings?.phone && (
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Telefon</p>
                      <a
                        href={`tel:${settings.phone.replace(/\s/g, "")}`}
                        className="text-blue-700 hover:text-blue-800 transition-colors font-medium"
                      >
                        {settings.phone}
                      </a>
                    </div>
                  </div>
                )}

                {settings?.email && (
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">E-post</p>
                      <a
                        href={`mailto:${settings.email}`}
                        className="text-blue-700 hover:text-blue-800 transition-colors font-medium break-all"
                      >
                        {settings.email}
                      </a>
                    </div>
                  </div>
                )}

                {settings?.address && (
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.003 3.5-4.697 3.5-8.327a8 8 0 10-16 0c0 3.63 1.556 6.326 3.5 8.327a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">Adresse</p>
                      <p className="text-slate-600">{settings.address}</p>
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Åpningstider</p>
                    {settings?.openingHoursWeekdays && (
                      <p className="text-slate-600">{settings.openingHoursWeekdays}</p>
                    )}
                    {settings?.openingHoursWeekend && (
                      <p className="text-slate-600">{settings.openingHoursWeekend}</p>
                    )}
                    <p className="text-slate-500 text-sm">Søn/helligdag: Stengt</p>
                  </div>
                </div>
              </div>

              {/* Response time badge */}
              <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600 shrink-0 mt-0.5">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-semibold text-green-800 text-sm">Rask svartid</p>
                  <p className="text-green-700 text-sm">Vi svarer normalt innen noen timer i arbeidstiden.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
