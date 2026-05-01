"use client";

import { useState, useRef, useEffect } from "react";

export default function HeroMedia() {
  const [failed, setFailed] = useState(false);
  const [ended, setEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => setFailed(true));
  }, []);

  const hideVideo = failed || ended;

  return (
    <>
      <img
        src="/hero-bil-hus.jpg"
        alt="Rensespesialisten-bilen parkert foran kundens hus i Namdalen — vi kommer hjem til deg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="metadata"
        onError={() => setFailed(true)}
        onEnded={() => setEnded(true)}
        className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden transition-opacity duration-700"
        style={{ opacity: hideVideo ? 0 : 1 }}
        aria-hidden={hideVideo}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
    </>
  );
}
