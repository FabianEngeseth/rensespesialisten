import Image from "next/image";
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
    <footer className="bg-forest-950 text-cream-100/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-cream-50 rounded-full p-1.5">
                <Image
                  src="/logo.png"
                  alt=""
                  width={48}
                  height={48}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <p className="font-serif font-bold text-2xl text-cream-50">{siteName}</p>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Profesjonell dyprengjøring av møbler og tekstiler.
              Vi kommer til deg — tjenesten utføres der møblene befinner seg.
            </p>
            {facebookUrl && (
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-accent hover:text-amber-accent/80 text-sm transition-colors mt-4"
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
            <h3 className="font-semibold text-cream-50 mb-4 text-sm uppercase tracking-wider">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-cream-50 transition-colors">
                  {phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="hover:text-cream-50 transition-colors">
                  {email}
                </a>
              </li>
            </ul>
          </div>

          {/* Åpningstider */}
          <div>
            <h3 className="font-semibold text-cream-50 mb-4 text-sm uppercase tracking-wider">
              Åpningstider
            </h3>
            <ul className="space-y-2 text-sm">
              <li>{openingHoursWeekdays}</li>
              <li>{openingHoursWeekend}</li>
              <li className="text-cream-100/45">Søn/helligdag: Stengt</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream-100/50">
          <div className="flex items-center gap-3">
            <p>&copy; {new Date().getFullYear()} {siteName}. Alle rettigheter forbeholdt.</p>
            {orgNumber && <span>Org.nr: {orgNumber}</span>}
          </div>
          <div className="flex items-center gap-6">
            <Link href="/#tjenester" className="hover:text-cream-50 transition-colors">Tjenester</Link>
            <Link href="/#booking" className="hover:text-cream-50 transition-colors">Book en rens</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
