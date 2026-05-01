"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("Alle");

  const categories = ["Alle", ...Array.from(new Set(faqs.map((f) => f.category)))];
  const filtered =
    activeCategory === "Alle" ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-cream-50 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-forest-600" />
            <span className="text-sm font-medium tracking-widest uppercase text-forest-700">
              Spørsmål og svar
            </span>
            <span className="h-px w-12 bg-forest-600" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest-950 mb-5 leading-tight">
            Det du lurer på
          </h1>
          <p className="text-lg text-forest-800/70 max-w-xl mx-auto">
            De vanligste spørsmålene vi får. Finner du ikke svaret — ring
            oss direkte eller send en melding.
          </p>
        </div>

        {/* Kategori-filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-forest-900 text-cream-50"
                  : "bg-cream-50 text-forest-700 border border-forest-900/10 hover:border-forest-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Akkordion */}
        <div className="space-y-3">
          {filtered.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={`${activeCategory}-${i}`}
                className={`bg-cream-50 border rounded-xl overflow-hidden transition-all ${
                  isOpen ? "border-forest-600 shadow-lg shadow-forest-900/5" : "border-forest-900/10"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 min-w-0">
                    <span className="block text-[11px] font-semibold tracking-widest uppercase text-amber-accent mb-1.5">
                      {faq.category}
                    </span>
                    <span className="block font-serif text-lg font-semibold text-forest-950 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      isOpen ? "bg-forest-900 text-cream-50 rotate-180" : "bg-cream-100 text-forest-700"
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <p className="text-forest-800/70 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
