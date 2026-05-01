"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });
      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center">
        <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 text-emerald-600">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-emerald-800 mb-2">Takk for henvendelsen!</h3>
        <p className="text-emerald-700">Vi tar kontakt med deg snarest.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] w-px h-px opacity-0 pointer-events-none"
      />
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
          Navn
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Ditt fulle navn"
          className="w-full px-4 py-3 rounded-md border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
          E-post
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="din@epost.no"
          className="w-full px-4 py-3 rounded-md border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          Hva ønsker du å få renset?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Beskriv hva du ønsker å få renset, f.eks. type møbel, antall, farge og eventuelle flekker..."
          className="w-full px-4 py-3 rounded-md border border-slate-300 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none"
        />
      </div>

      {state === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 text-sm text-red-700">
          Noe gikk galt. Ring oss direkte eller prøv igjen.
        </div>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full py-3.5 bg-emerald-700 text-white font-semibold rounded-md hover:bg-emerald-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {state === "loading" ? "Sender..." : "Send forespørsel"}
      </button>
    </form>
  );
}
