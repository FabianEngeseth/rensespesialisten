# Implementeringsplan — Rensespesialisten

Status pr. 21.04.2026.

## Asset-oversikt

### Videoer (`pictures/`)
| Fil | Bruk |
|-----|------|
| `IMG_4217.mov` (20 s, 1080p) | **Hero** — bilen kjører inn |
| `IMG_4218.mov` (10 s, 1080p) | "Møt Fabian"-seksjon |

### Bilder (`pictures/`)
| Fil | Bruk |
|-----|------|
| `før.jpeg` / `etter.jpeg` | Før/etter-galleri (lenestol) |
| `IMG_4197/4198/4204.jpeg` | Møt Fabian-portretter |
| `4fb84b5c-...jpeg` | (allerede hero-bil.jpg — beholdes som poster/fallback) |
| `cae7367f-...jpeg` | Messenger-omtale (sosial proof) |
| `7c82bede-...jpeg` | (allerede omtale-rita.jpg) |

## Sekvens

### 1. Hero-video (IMG_4217)
- Komprimere MOV → MP4 (H.264, CRF 23, ~2 MB) + WebM (VP9)
- Trimme til ~10 s der bilen kjører inn fra venstre
- Generere poster-frame (still fra "high impact"-moment)
- `<video autoplay muted loop playsinline>` med `prefers-reduced-motion`-fallback
- Beholde 4:5-portrett-rammen, eller endre til landscape — avgjøres av hvordan croppen ser ut

### 2. Før/etter-galleri (ekte bilder)
- Komprimere `før.jpeg` + `etter.jpeg` → 1200px webp
- Bytte placeholder-grid med faktisk før/etter-par
- Slider eller delt visning i én stor moduel + plass for 2-3 flere par senere

### 3. Rita-testimonial wire-up
- Legge `photo`-felt på testimonial-skjema i `keystatic.config.ts`
- Sette `photo: "/omtale-rita.jpg"` på Rita
- Oppdatere testimonial-kort: vis foto når det finnes, ellers initialer

### 4. "Møt Fabian"-seksjon (ny)
- Velge beste portrett av IMG_4197/4198/4204
- IMG_4218-video som sekundær visuelt anker
- Korttekst: lokal, registrert, kvalitet → tillit

### 5. Sosial proof-seksjon (ny)
- Vise Messenger-screenshot (cae7367f) som ekte tilbakemelding
- Mønster: kollasj av faktiske kundereaksjoner

### 6. Privat/bedrift-fork (fra brainstorm 20.04)
- Under hero: to kort — "Jeg er privat" / "Jeg er bedrift"
- Anker-lenker som scroller til relevante seksjoner

### 7. Dekningsområde-redesign (fra brainstorm 20.04)
- Forenkle visualisering — beholde stedsnavn

### 8. Cleanup + commit
- Slette ubrukt `AnimatedVan.tsx`
- Commit i logiske steg

## Tekniske notater

- Next.js 16.2.3 + React 19 — sjekk `node_modules/next/dist/docs/` ved usikkerhet
- Bilder via `next/image`, video som rå `<video>` (ingen Next-video-komponent)
- Tailwind v4 + Keystatic for innhold
