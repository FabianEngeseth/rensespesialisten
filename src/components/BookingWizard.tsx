"use client";

import { useState, useRef } from "react";

type Step = 1 | 2 | 3;
type ServiceKey =
  | "sofa"
  | "lenestol"
  | "spisestol"
  | "teppe"
  | "bilinterior"
  | "bobil"
  | "annet";

const serviceOptions: {
  key: ServiceKey;
  label: string;
  desc: string;
  icon: React.ReactNode;
}[] = [
  {
    key: "sofa",
    label: "Sofa",
    desc: "2/3/4-seter, hjørnesofa",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M4 11a3 3 0 013-3h10a3 3 0 013 3v2h.25a1.75 1.75 0 011.75 1.75v3.5a.75.75 0 01-1.5 0V17H3v1.25a.75.75 0 01-1.5 0v-3.5A1.75 1.75 0 013.25 13H4v-2zm3-1.5a1.5 1.5 0 00-1.5 1.5v2H8v-2a1.5 1.5 0 00-1-1.5zm11 1.5a1.5 1.5 0 00-1.5-1.5 1.5 1.5 0 00-1.5 1.5v2h3v-2zm-8.5-1.5v3.5h5V9.5a1.5 1.5 0 00-1.5-1.5h-2a1.5 1.5 0 00-1.5 1.5z" />
      </svg>
    ),
  },
  {
    key: "lenestol",
    label: "Lenestol",
    desc: "Komfort- og lesestol",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M6 8a2 2 0 012-2h8a2 2 0 012 2v5h.5a1.5 1.5 0 011.5 1.5v3.25a.75.75 0 01-1.5 0V17H5v.75a.75.75 0 01-1.5 0V14.5A1.5 1.5 0 015 13h.5V8zm2 0v5h8V8H8z" />
      </svg>
    ),
  },
  {
    key: "spisestol",
    label: "Spisestoler",
    desc: "Tekstiltrukne",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M7 3h10v9H7V3zm0 11h10v1.5a1.5 1.5 0 01-1.5 1.5H14v4h-1.5v-4h-1v4H10v-4H8.5A1.5 1.5 0 017 15.5V14z" />
      </svg>
    ),
  },
  {
    key: "teppe",
    label: "Teppe",
    desc: "Ull, syntet, tepper av alle slag",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7zm2 0v10h14V7H5zm2 2h2v6H7V9zm4 0h2v6h-2V9zm4 0h2v6h-2V9z" />
      </svg>
    ),
  },
  {
    key: "bilinterior",
    label: "Bilinteriør",
    desc: "Seter, gulv, taktrekk",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M3 14l1.5-5.5A2 2 0 016.43 7h11.14a2 2 0 011.93 1.5L21 14v4.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V18H6v.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V14zm3.05-4.5l-1 3.5h13.9l-1-3.5H6.05zM6 15a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z" />
      </svg>
    ),
  },
  {
    key: "bobil",
    label: "Bobil / campingvogn",
    desc: "Innvendig tekstilrens",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M3 8a2 2 0 012-2h11a2 2 0 012 2v1h2l2 4v4h-2a2 2 0 11-4 0H9a2 2 0 11-4 0H3V8zm5 10a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2zM5 8v6h11V8H5zm13 3v3h3l-1.5-3H18z" />
      </svg>
    ),
  },
  {
    key: "annet",
    label: "Noe annet",
    desc: "Beskriv i neste steg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 15a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm1.5-5.5a.75.75 0 01-1.5 0v-1.25a.75.75 0 01.6-.74 2 2 0 10-2.4-2.01.75.75 0 11-1.5 0 3.5 3.5 0 114.95 3.18v.82z" />
      </svg>
    ),
  },
];

export default function BookingWizard() {
  const [step, setStep] = useState<Step>(1);
  const [selected, setSelected] = useState<Set<ServiceKey>>(new Set());
  const [urgency, setUrgency] = useState<string>("flexible");
  const [address, setAddress] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleService = (key: ServiceKey) => {
    const next = new Set(selected);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    setSelected(next);
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const arr = Array.from(files).slice(0, 5 - images.length);
    const newImages = [...images, ...arr];
    setImages(newImages);
    setPreviews(newImages.map((f) => URL.createObjectURL(f)));
  };

  const removeImage = (i: number) => {
    const newImages = images.filter((_, idx) => idx !== i);
    setImages(newImages);
    setPreviews(newImages.map((f) => URL.createObjectURL(f)));
  };

  const canProceed1 = selected.size > 0;
  const canProceed2 = address.trim().length > 3;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("tjenester", Array.from(selected).join(", "));
    data.append("hastverk", urgency);
    data.append("adresse", address);
    images.forEach((img, i) => data.append(`bilde-${i + 1}`, img));

    try {
      const res = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="bg-cream-50 rounded-2xl p-10 text-center border border-forest-600">
        <div className="w-16 h-16 bg-forest-600 rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-cream-50" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="font-serif text-3xl font-bold text-forest-950 mb-3">
          Takk for forespørselen!
        </h3>
        <p className="text-forest-800/70 text-lg mb-2">
          Vi har mottatt meldingen din og tar kontakt innen 2 timer på hverdager.
        </p>
        <p className="text-sm text-forest-700/60">
          Sjekk spam-mappen hvis du ikke hører noe.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-cream-50 rounded-2xl overflow-hidden border border-forest-900/10 shadow-2xl shadow-forest-950/10">
      {/* Progress-bar */}
      <div className="bg-forest-950 text-cream-50 px-6 sm:px-10 py-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold tracking-widest uppercase text-amber-accent">
            Steg {step} av 3
          </p>
          <p className="text-xs text-cream-100/60">
            {step === 1 && "Hva skal renses?"}
            {step === 2 && "Hvor og når?"}
            {step === 3 && "Kontakt og bilder"}
          </p>
        </div>
        <div className="h-1 bg-forest-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-accent transition-all duration-500 ease-out"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-10">
        {/* Steg 1: Velg tjeneste */}
        {step === 1 && (
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mb-2">
              Hva skal vi rense for deg?
            </h3>
            <p className="text-forest-800/60 mb-7">
              Velg alt som er aktuelt. Du kan velge flere.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {serviceOptions.map((opt) => {
                const isActive = selected.has(opt.key);
                return (
                  <button
                    type="button"
                    key={opt.key}
                    onClick={() => toggleService(opt.key)}
                    className={`group text-left p-5 rounded-xl border-2 transition-all ${
                      isActive
                        ? "border-forest-600 bg-forest-50 shadow-lg shadow-forest-900/10"
                        : "border-forest-900/10 bg-cream-100 hover:border-forest-400"
                    }`}
                  >
                    <div
                      className={`mb-3 transition-colors ${
                        isActive ? "text-forest-700" : "text-forest-800/60 group-hover:text-forest-700"
                      }`}
                    >
                      {opt.icon}
                    </div>
                    <p
                      className={`font-semibold mb-0.5 ${
                        isActive ? "text-forest-950" : "text-forest-900"
                      }`}
                    >
                      {opt.label}
                    </p>
                    <p className="text-xs text-forest-800/60">{opt.desc}</p>
                    {isActive && (
                      <div className="absolute top-2 right-2">
                        <div className="w-5 h-5 bg-forest-600 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-cream-50" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                disabled={!canProceed1}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-forest-700 text-cream-50 font-semibold rounded-full hover:bg-forest-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Neste
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Steg 2: Hvor og når */}
        {step === 2 && (
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mb-2">
              Hvor og når?
            </h3>
            <p className="text-forest-800/60 mb-7">
              Vi kommer til deg — så vi trenger bare adressen og når det passer.
            </p>
            <div className="space-y-5 mb-8">
              <div>
                <label htmlFor="adresse" className="block text-sm font-semibold text-forest-900 mb-2">
                  Adresse eller sted
                </label>
                <input
                  id="adresse"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="F.eks. Fjordveien 12, Rørvik"
                  className="w-full px-5 py-3.5 rounded-lg border-2 border-forest-900/10 bg-cream-100 text-forest-950 placeholder:text-forest-800/40 focus:outline-none focus:border-forest-600 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-forest-900 mb-3">
                  Når passer det?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { val: "urgent", label: "Så raskt som mulig", desc: "Innen 2–3 dager" },
                    { val: "week", label: "Denne uka", desc: "Fleksibel på dag" },
                    { val: "flexible", label: "Fleksibel", desc: "Neste 2–3 uker" },
                  ].map((opt) => (
                    <button
                      type="button"
                      key={opt.val}
                      onClick={() => setUrgency(opt.val)}
                      className={`p-4 rounded-lg border-2 text-left transition-all ${
                        urgency === opt.val
                          ? "border-forest-600 bg-forest-50"
                          : "border-forest-900/10 bg-cream-100 hover:border-forest-400"
                      }`}
                    >
                      <p className="font-semibold text-forest-950 text-sm">{opt.label}</p>
                      <p className="text-xs text-forest-800/60 mt-1">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-forest-700 font-medium hover:text-forest-900 transition-colors"
              >
                ← Tilbake
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                disabled={!canProceed2}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-forest-700 text-cream-50 font-semibold rounded-full hover:bg-forest-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Neste
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Steg 3: Kontakt og bilder */}
        {step === 3 && (
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-forest-950 mb-2">
              Siste stegget
            </h3>
            <p className="text-forest-800/60 mb-7">
              Last gjerne opp bilder — det gir oss et konkret anslag med én gang.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-forest-900 mb-2">
                  Navn
                </label>
                <input
                  id="name"
                  name="navn"
                  type="text"
                  required
                  className="w-full px-5 py-3.5 rounded-lg border-2 border-forest-900/10 bg-cream-100 text-forest-950 focus:outline-none focus:border-forest-600 transition"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-forest-900 mb-2">
                  Telefon
                </label>
                <input
                  id="phone"
                  name="telefon"
                  type="tel"
                  required
                  className="w-full px-5 py-3.5 rounded-lg border-2 border-forest-900/10 bg-cream-100 text-forest-950 focus:outline-none focus:border-forest-600 transition"
                />
              </div>
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-semibold text-forest-900 mb-2">
                E-post
              </label>
              <input
                id="email"
                name="epost"
                type="email"
                required
                className="w-full px-5 py-3.5 rounded-lg border-2 border-forest-900/10 bg-cream-100 text-forest-950 focus:outline-none focus:border-forest-600 transition"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className="block text-sm font-semibold text-forest-900 mb-2">
                Kort beskrivelse <span className="text-forest-700/50 font-normal">(valgfritt)</span>
              </label>
              <textarea
                id="message"
                name="melding"
                rows={3}
                placeholder="F.eks. Kaffesøl på 3-seteren, hundelukt i bilen…"
                className="w-full px-5 py-3.5 rounded-lg border-2 border-forest-900/10 bg-cream-100 text-forest-950 focus:outline-none focus:border-forest-600 transition resize-none"
              />
            </div>

            {/* Bildeopplasting */}
            <div className="mb-7">
              <label className="block text-sm font-semibold text-forest-900 mb-2">
                Last opp bilder <span className="text-forest-700/50 font-normal">(inntil 5)</span>
              </label>
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  handleFiles(e.dataTransfer.files);
                }}
                className="border-2 border-dashed border-forest-900/20 rounded-lg p-6 text-center cursor-pointer hover:border-forest-600 hover:bg-forest-50 transition-all"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={(e) => handleFiles(e.target.files)}
                />
                <svg className="w-10 h-10 text-forest-700/50 mx-auto mb-3" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                <p className="text-sm font-semibold text-forest-900">Klikk eller dra inn bilder</p>
                <p className="text-xs text-forest-800/50 mt-1">
                  JPEG, PNG · Helt frivillig, men gir raskere svar
                </p>
              </div>
              {previews.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mt-4">
                  {previews.map((src, i) => (
                    <div key={i} className="relative aspect-square rounded-lg overflow-hidden bg-forest-900/10 group">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={src} alt={`Opplastet ${i + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeImage(i)}
                        className="absolute top-1 right-1 w-6 h-6 bg-forest-950/80 text-cream-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                        aria-label="Fjern bilde"
                      >
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {formState === "error" && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-5 text-sm text-red-700">
                Noe gikk galt. Ring oss direkte eller prøv igjen.
              </div>
            )}

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-forest-700 font-medium hover:text-forest-900 transition-colors"
              >
                ← Tilbake
              </button>
              <button
                type="submit"
                disabled={formState === "loading"}
                className="inline-flex items-center gap-2 px-8 py-4 shimmer-bg text-cream-50 font-semibold rounded-full hover:shadow-xl hover:shadow-forest-900/20 disabled:opacity-60 transition-all"
              >
                {formState === "loading" ? "Sender…" : "Send bestilling"}
                {formState !== "loading" && (
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
