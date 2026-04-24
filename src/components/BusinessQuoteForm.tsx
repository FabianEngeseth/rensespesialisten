"use client";

import { useState, FormEvent } from "react";

type Frequency =
  | "engangs"
  | "maanedlig"
  | "kvartal"
  | "halvaar"
  | "aarlig";

const frequencyOptions: { value: Frequency; label: string }[] = [
  { value: "engangs", label: "Engangsjobb" },
  { value: "maanedlig", label: "Månedlig" },
  { value: "kvartal", label: "Kvartalsvis" },
  { value: "halvaar", label: "Halvårlig" },
  { value: "aarlig", label: "Årlig" },
];

export default function BusinessQuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [frequency, setFrequency] = useState<Frequency>("engangs");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-forest-900 border border-amber-accent/30 rounded-2xl p-10 text-center">
        <div className="w-14 h-14 mx-auto rounded-full bg-amber-accent/15 flex items-center justify-center mb-5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7 text-amber-accent"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-bold text-cream-50 mb-3">
          Takk for forespørselen
        </h3>
        <p className="text-cream-100/80 leading-relaxed max-w-md mx-auto">
          Vi ser over rammene og sender dere et konkret tilbud innen én
          virkedag.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-forest-900 border border-forest-800 rounded-2xl p-8 lg:p-10 space-y-6"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Kontaktperson" name="kontaktperson" required />
        <Field label="Firmanavn" name="firma" required />
        <Field label="E-post" name="epost" type="email" required />
        <Field label="Telefon" name="telefon" type="tel" required />
        <Field label="Organisasjonsnummer" name="orgnr" optional />
        <Field
          label="Antall rom / enheter"
          name="enheter"
          type="number"
          placeholder="Ca. 12"
          optional
        />
      </div>

      <div>
        <label
          htmlFor="frekvens"
          className="block text-sm font-semibold text-cream-50 mb-2"
        >
          Ønsket frekvens
        </label>
        <div className="flex flex-wrap gap-2">
          {frequencyOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setFrequency(opt.value)}
              className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors border ${
                frequency === opt.value
                  ? "bg-amber-accent text-forest-950 border-amber-accent"
                  : "bg-forest-950/40 text-cream-100/80 border-forest-700 hover:border-amber-accent/60"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <input type="hidden" name="frekvens" value={frequency} />
      </div>

      <div>
        <label
          htmlFor="beskrivelse"
          className="block text-sm font-semibold text-cream-50 mb-2"
        >
          Hva skal renses?{" "}
          <span className="text-cream-100/50 font-normal">
            (sofaer, stoler, tepper, bilinteriør, AirBnB-enheter m.m.)
          </span>
        </label>
        <textarea
          id="beskrivelse"
          name="beskrivelse"
          rows={4}
          className="w-full px-4 py-3 rounded-lg bg-forest-950/40 border border-forest-700 text-cream-50 placeholder:text-cream-100/40 focus:border-amber-accent focus:outline-none focus:ring-2 focus:ring-amber-accent/30 transition-colors"
          placeholder="F.eks. 12 leiligheter (Airbnb), gjennomsnitt 1 sofa + 4 stoler pr. enhet. Turnover mellom gjester."
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-accent text-forest-950 font-semibold rounded-full hover:bg-amber-accent/90 transition-colors"
      >
        Send forespørsel
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <p className="text-xs text-cream-100/50 text-center">
        Vi svarer med et konkret tilbud innen én virkedag.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  optional = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-cream-50 mb-2"
      >
        {label}
        {optional && (
          <span className="text-cream-100/50 font-normal"> (valgfri)</span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-lg bg-forest-950/40 border border-forest-700 text-cream-50 placeholder:text-cream-100/40 focus:border-amber-accent focus:outline-none focus:ring-2 focus:ring-amber-accent/30 transition-colors"
      />
    </div>
  );
}
