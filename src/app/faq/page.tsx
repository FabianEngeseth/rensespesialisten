import type { Metadata } from "next";
import Link from "next/link";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Spørsmål og svar — Rensespesialisten",
  description:
    "Alle svar på det du lurer på om møbelrens, tepperens og bilinteriørrens fra Rensespesialisten i Namdalen.",
};

export default function FAQPage() {
  return (
    <>
      <FAQ />

      <section className="bg-forest-950 text-cream-50 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Klar for å booke?
          </h2>
          <p className="text-lg text-cream-100/70 mb-8 max-w-lg mx-auto">
            Tre korte steg og vi er i gang. Last opp bilder hvis du vil ha et
            konkret anslag først.
          </p>
          <Link
            href="/#booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-amber-accent hover:bg-amber-accent/90 text-forest-950 font-semibold rounded-full transition-colors"
          >
            Book en rens
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
