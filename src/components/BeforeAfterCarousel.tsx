"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = {
  label: string;
  before: string;
  after: string;
  aspect: "portrait" | "landscape";
};

const slides: Slide[] = [
  {
    label: "Stol",
    before: "/stol-for.jpg",
    after: "/stol-etter.jpg",
    aspect: "portrait",
  },
  {
    label: "Sofa",
    before: "/sofa-for.jpg",
    after: "/sofa-etter.jpg",
    aspect: "portrait",
  },
  {
    label: "Bilinteriør",
    before: "/bil-for.jpg",
    after: "/bil-etter.jpg",
    aspect: "portrait",
  },
  {
    label: "Teppe",
    before: "/teppe-for.jpg",
    after: "/teppe-etter.jpg",
    aspect: "landscape",
  },
];

export default function BeforeAfterCarousel() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  function go(next: number) {
    const total = slides.length;
    const i = ((next % total) + total) % total;
    setIndex(i);
    const track = trackRef.current;
    if (track) {
      const slide = track.children[i] as HTMLElement | undefined;
      slide?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const slideWidth = track.clientWidth;
        const i = Math.round(track.scrollLeft / slideWidth);
        if (i !== index && i >= 0 && i < slides.length) setIndex(i);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [index]);

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Slidertrack — én slide per skjermbredde, scroll-snap for swipe */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8"
        aria-roledescription="karusell"
        aria-label="Før og etter — eksempler på rens"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.label}
            className="snap-start shrink-0 w-full pr-4 sm:pr-6 lg:pr-8 last:pr-0"
            aria-roledescription="lysbilde"
            aria-label={`${i + 1} av ${slides.length}: ${slide.label}`}
            aria-hidden={i !== index}
          >
            <div className="relative bg-cream-50 rounded-2xl border border-forest-900/10 overflow-hidden shadow-lg shadow-forest-950/5">
              {/* Før + etter side ved side, kun én tynn divider mellom */}
              <div className="grid grid-cols-2">
                <PairImage
                  src={slide.before}
                  alt={`${slide.label} før dyprengjøring — synlige flekker og slitasje`}
                  badge="Før"
                  aspect={slide.aspect}
                  priority={i === 0}
                />
                <div className="absolute inset-y-0 left-1/2 w-px bg-cream-50/80 z-10" />
                <PairImage
                  src={slide.after}
                  alt={`${slide.label} etter dyprengjøring fra Rensespesialisten — som ny`}
                  badge="Etter"
                  aspect={slide.aspect}
                  priority={i === 0}
                />
              </div>
              <div className="px-5 py-3 sm:px-6 sm:py-4 border-t border-forest-900/10 flex items-center justify-between bg-cream-50">
                <p className="font-serif text-base sm:text-lg font-bold text-forest-950">
                  {slide.label}
                </p>
                <p className="text-xs text-forest-700/60 font-mono tracking-wider">
                  {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Prev/Next-knapper — store, alltid tilgjengelige */}
      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Forrige"
        className="absolute top-1/2 left-2 sm:-left-4 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cream-50 border border-forest-900/15 shadow-md shadow-forest-950/10 flex items-center justify-center text-forest-900 hover:bg-cream-100 hover:text-forest-700 transition-colors z-20"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path
            fillRule="evenodd"
            d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Neste"
        className="absolute top-1/2 right-2 sm:-right-4 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cream-50 border border-forest-900/15 shadow-md shadow-forest-950/10 flex items-center justify-center text-forest-900 hover:bg-cream-100 hover:text-forest-700 transition-colors z-20"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((s, i) => (
          <button
            key={s.label}
            type="button"
            onClick={() => go(i)}
            aria-label={`Gå til ${s.label}`}
            aria-current={i === index ? "true" : "false"}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-8 bg-forest-700"
                : "w-2 bg-forest-900/25 hover:bg-forest-900/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function PairImage({
  src,
  alt,
  badge,
  aspect,
  priority,
}: {
  src: string;
  alt: string;
  badge: string;
  aspect: "portrait" | "landscape";
  priority: boolean;
}) {
  const aspectClass =
    aspect === "portrait" ? "aspect-[4/5]" : "aspect-[5/4]";
  return (
    <div className={`relative ${aspectClass} bg-cream-50`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 384px, 50vw"
        className="object-contain object-center"
        priority={priority}
      />
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[10px] sm:text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full bg-forest-950/85 text-cream-50 backdrop-blur-sm">
        {badge}
      </div>
    </div>
  );
}
