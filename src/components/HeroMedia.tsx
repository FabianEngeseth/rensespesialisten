"use client";

import { useState, useRef, useEffect } from "react";

/**
 * Plasseres inne i en portrett-aspect-container (f.eks. aspect-[3/4]).
 * Spiller én gang, fader så over til /hero-bil.jpg (3:4) som blir værende.
 */
export default function HeroMedia() {
  const [ended, setEnded] = useState(false);
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => setFailed(true));
  }, []);

  const hideVideo = ended || failed;

  return (
    <>
      <img
        src="/hero-bil.jpg"
        alt="Rensespesialisten-bilen med Daniel og hund i Namdalen"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => setEnded(true)}
        onError={() => setFailed(true)}
        className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden transition-opacity duration-[1200ms] ease-in-out"
        style={{ opacity: hideVideo ? 0 : 1 }}
        aria-hidden={hideVideo}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
    </>
  );
}
