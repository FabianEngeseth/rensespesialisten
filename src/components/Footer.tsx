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
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="font-bold text-xl text-white mb-3">{siteName}</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Profesjonell dyprengj&oslash;ring av m&oslash;bler og tekstiler.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Vi kommer til deg &ndash; tjenesten utf&oslash;res der m&oslash;blene befinner seg.
              Ingen stress med transport.
            </p>
            {facebookUrl && (
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm transition-colors mt-4"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
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
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-400 shrink-0">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  {phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-400 shrink-0">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
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
              <li className="text-slate-400">{openingHoursWeekdays}</li>
              <li className="text-slate-400">{openingHoursWeekend}</li>
              <li className="text-slate-500">Søn/helligdag: Stengt</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <p>
              &copy; {new Date().getFullYear()} {siteName}. Alle rettigheter forbeholdt.
            </p>
            {orgNumber && (
              <span className="text-slate-600">Org.nr: {orgNumber}</span>
            )}
          </div>
          <div className="flex items-center gap-4">
            <Link href="/tjenester" className="hover:text-slate-300 transition-colors">
              Tjenester
            </Link>
            <Link href="/kontakt" className="hover:text-slate-300 transition-colors">
              Kontakt
            </Link>
            <span className="text-slate-600">Bygget av Lapid AS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
