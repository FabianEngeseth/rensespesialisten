import Link from "next/link";

interface FooterProps {
  siteName: string;
  phone: string;
  email: string;
  address: string;
  orgNumber?: string;
  openingHoursWeekdays: string;
  openingHoursWeekend: string;
  facebookUrl?: string | null;
}

export default function Footer({
  siteName,
  phone,
  email,
  orgNumber,
  openingHoursWeekdays,
  openingHoursWeekend,
  facebookUrl,
}: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-serif font-bold text-2xl text-white mb-4">{siteName}</p>
            <p className="text-sm leading-relaxed max-w-sm">
              Profesjonell dyprengjøring av møbler og tekstiler.
              Vi kommer til deg — tjenesten utføres der møblene befinner seg.
            </p>
            {facebookUrl && (
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm transition-colors mt-4"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </a>
            )}
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-white transition-colors">
                  {phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                  {email}
                </a>
              </li>
            </ul>
          </div>

          {/* Åpningstider */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Åpningstider
            </h3>
            <ul className="space-y-2 text-sm">
              <li>{openingHoursWeekdays}</li>
              <li>{openingHoursWeekend}</li>
              <li className="text-slate-500">Søn/helligdag: Stengt</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <p>&copy; {new Date().getFullYear()} {siteName}. Alle rettigheter forbeholdt.</p>
            {orgNumber && <span>Org.nr: {orgNumber}</span>}
          </div>
          <div className="flex items-center gap-6">
            <Link href="/tjenester" className="hover:text-slate-300 transition-colors">Tjenester</Link>
            <Link href="/kontakt" className="hover:text-slate-300 transition-colors">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
