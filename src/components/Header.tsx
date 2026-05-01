"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface HeaderProps {
  phone: string;
  siteName: string;
}

const navLinks = [
  { href: "/#tjenester", label: "Tjenester" },
  { href: "/#omtaler", label: "Omtaler" },
  { href: "/#bedrift", label: "Bedrift" },
  { href: "/#om-oss", label: "Om oss" },
  { href: "/faq", label: "FAQ" },
];

export default function Header({ phone, siteName }: HeaderProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-cream-50/95 backdrop-blur border-b border-forest-900/10 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label={`${siteName} — gå til forsiden`}
          >
            <Image
              src="/logo.png"
              alt=""
              width={40}
              height={40}
              priority
              className="w-9 h-9 sm:w-10 sm:h-10 object-contain"
            />
            <span className="font-serif font-bold text-lg sm:text-xl text-forest-950 group-hover:text-forest-700 transition-colors">
              {siteName}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-forest-700"
                    : "text-forest-800/60 hover:text-forest-950"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="hidden sm:flex items-center gap-1.5 text-sm text-slate-500 hover:text-forest-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
              </svg>
              {phone}
            </a>
            <Link
              href="/#booking"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 bg-forest-900 text-cream-50 text-sm font-semibold rounded-full hover:bg-forest-800 transition-colors"
            >
              Book en rens
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 text-forest-800/60 hover:text-forest-950 transition-colors"
              aria-label="Meny"
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden pb-4 border-t border-forest-900/10 pt-3">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-2.5 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-forest-700"
                      : "text-forest-800/70 hover:text-forest-950"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#booking"
                onClick={() => setMenuOpen(false)}
                className="mx-3 mt-2 px-4 py-2.5 bg-forest-900 text-cream-50 text-sm font-semibold rounded-full text-center"
              >
                Book en rens
              </Link>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="px-3 py-2.5 text-sm font-medium text-forest-700"
              >
                Ring oss: {phone}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
