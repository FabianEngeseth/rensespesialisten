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
      const res = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
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
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-green-600">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-800 mb-2">Takk for henvendelsen!</h3>
        <p className="text-green-700">Vi tar kontakt med deg snarest.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
          Navn *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Ditt navn"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
          E-post *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="din@epost.no"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Hva ønsker du å få renset? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="F.eks. sofa med flekker, tepper som trenger oppfriskning, bilseter..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
        />
      </div>

      {state === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
          Noe gikk galt. Ring oss direkte eller prøv igjen.
        </div>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-lg"
      >
        {state === "loading" ? "Sender..." : "Send forespørsel"}
      </button>
    </form>
  );
}
