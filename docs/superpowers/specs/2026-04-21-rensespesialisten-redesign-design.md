# Rensespesialisten — forside-redesign

**Dato:** 2026-04-21
**Status:** Design besluttet. Én åpen beslutning (CoverageMap-visual). Ikke startet implementasjon.

## Bakgrunn

Eksisterende forside (`src/app/page.tsx`) fungerer for privatkunder, men:

1. Bedrift-sporet ligger skjult i én enkelt seksjon langt nede (`BusinessSection`) — bedriftsbesøkende må scrolle gjennom privat-innhold før de ser noe relevant.
2. Hero bruker en animert SVG-bil som ikke gir troverdighet. Nytt ekte bilbilde finnes (`public/hero-bil.jpg`) men ble lagt inn "som bare et bilde" — trenger bedre integrasjon.
3. Flere elementer er visuelt svake eller ikke-troverdige:
   - Roterende "trust marquee" under hero (stygg, og inneholder oppdiktede tall)
   - "500+ fornøyde kunder" og lignende oppdiktet statistikk
   - `CoverageMap`-visualet (tre konsentriske sirkler på en stilisert boks) ser svakt ut

## Mål

- Besøkende forstår på første skjerm at siden dekker både privat og bedrift
- Bedriftsbesøkende kan hoppe rett til sitt spor uten å scrolle gjennom privat-innhold
- Bilbildet brukes som visuelt ankerpunkt i hero, ikke som dekorasjon
- Fjerne alt som er oppdiktet eller visuelt svakt

## Beslutninger tatt i brainstorm

### 1. Mekanisme for privat/bedrift-skille (valg C)

Universell hero + gaffel-seksjon rett under hero. Begge spor er synlige samtidig som to kort — ingen gate, ingen tab-toggle. Hver kort er en anker-lenke (`#privat`, `#bedrift`) til differensierte blokker lenger ned på samme side.

Forkastede alternativer:
- **A (valg i hero, en-av-to):** Føles som en tvungen gate. For kraftig for en lokal SMB.
- **B (sticky toggle):** JavaScript-avhengig, kan forvirre brukere som ikke ser toggle-en.

### 2. Visuell retning (valg V2)

Mørk grønn hero med bildet innebygd. Gaffelen under som to fargede bånd — forest-green for privat, amber for bedrift. Ikoner sitter på skjøten mellom hero og gaffel (delvis oppå begge) og knytter dem visuelt sammen.

Forkastet: V1 (rolige hvite kort på cream bakgrunn) — mindre identitet, mindre profesjonell følelse.

### 3. Side-struktur (valg S1)

Delt kjerne, differensiert slutt:

```
HERO + GAFFEL
↓
Slik funker det             (felles, gjelder begge)
Hva vi renser               (felles)
Før & etter                 (felles)
↓
PRIVAT-BLOKK (#privat)      — priser inkl. mva, booking-wizard
BEDRIFT-BLOKK (#bedrift)    — rammeavtaler, priser eks. mva, tilbudsskjema
↓
Omtaler + FAQ + kontakt     (felles bunn)
```

Forkastet:
- **S2 (parallelle blokker):** Duplisering av "slik funker det" og "hva vi renser" — unødvendig arbeid og vedlikehold.
- **S3 (tabs):** JavaScript-avhengig, dårligere SEO, bedriftsbesøkende kan gå glipp av sporet.

### 4. Hero-komposisjon (valg H1)

Bilbildet fyller hele hero-bakgrunnen (100% bredde og høyde). Mørk grønn gradient ligger over venstre ~45% der teksten er, og fader til klart bilde på høyre side. Visuell effekt: bilen "kjører ut av skyggen".

Tekstinnhold i hero:
- Eyebrow: `— NAMDALEN · RENSESPESIALISTEN` (amber)
- H1: `Vi kommer hjem til deg og gir møblene nytt liv` ("nytt liv" i amber italic)
- Underoverskrift: `Profesjonell dyprengjøring av sofa, teppe, stoler og bilinteriør — på stedet.`
- Primær-CTA: `Book en rens →` (amber button)
- Sekundær-CTA: `Ring [telefon]` (transparent, hvit outline)

Forkastet: H2 (polaroid-i-skjev-ramme) — mer personlig-charmig men mindre premium.

### 5. Bedrift-spor innhold

Bedrifts-blokka skal dekke:

1. **Fakturaavtaler** — månedlig fakturering i stedet for Vipps
2. **Rammeavtaler** — fast pris for løpende oppdrag (eks. fast kvartalsrens)
3. **AirBnB / utleie** — rask respons mellom gjester
4. **Hotell / overnatting** — større mengder, kveld/natt-arbeid tilgjengelig
5. **Priser vises eks. mva** (med klar tilleggsnotat om mva-sats)
6. **Tilbudsskjema** i stedet for booking-wizard — skjemaet ber om kontaktperson, org-nr, antall rom/enheter, ønsket frekvens
7. **Caser / referanser:** _utelates i første runde_ — Fabian har ikke real casematerialet ennå. Legges til senere.

### 6. Ryddejobb

- Fjern `trust-marquee`-seksjonen (det roterende båndet under hero)
- Fjern "500+ fornøyde kunder" fra hero trust-linja og fra marquee-innholdet
- Fjern alt annet oppdiktet tall (verifisér før sletting: ingen andre i hero eller pricing)
- Slett `src/components/AnimatedVan.tsx` (ikke lenger brukt etter hero-redesign)

### 7. CoverageMap-redesign

Behold all tekst, steds-piller og "gratis utrykning / etter avtale"-inndelingen. Bytt ut den visuelle boksen med sirkler.

**🔴 ÅPEN BESLUTNING:** C1 vs C2

- **C1 — Stilisert Namdalskyst:** SVG-tegnet kystlinje som ligner den faktiske geografien. Øygrupper som prikker. Pin-markører for hvert sted. Pulserende base-pin på Nærøysund. Stiplet linje viser typisk kjørerute. Risiko: lokale kan reagere på unøyaktig geografi.
- **C2 — Typografisk reiseliste:** Ikke noe kart. Elegant liste over steder med avstand fra basen (monospace-tall). Koordinat-label øverst ("64° NORD · NAMDALEN · 11° ØST"). Trygt, minimalt, editorial.

_Fabian: velg C1 eller C2 før implementasjon starter._

## Teknisk tilnærming

### Komponenter som må lages/endres

| Komponent | Handling |
|-----------|----------|
| `src/app/page.tsx` | Stor ombygging: ny hero, fjern marquee, legg inn gaffel, flytt sticky book-knapp-logikk |
| `src/components/AnimatedVan.tsx` | **Slett** |
| `src/components/Hero.tsx` | **Ny** — ekstrahert hero-komponent med ekte bilde + tekst |
| `src/components/TrackFork.tsx` | **Ny** — gaffel-seksjonen under hero |
| `src/components/PrivateTrack.tsx` | **Ny** — privat-blokk (#privat) med pricing + booking-wizard |
| `src/components/BusinessTrack.tsx` | **Ny** — bedrift-blokk (#bedrift) med rammeavtaler + tilbudsskjema |
| `src/components/BusinessSection.tsx` | Vurdér å erstatte med `BusinessTrack`. Hvis mye gjenbruk: rename og utvid |
| `src/components/Pricing.tsx` | Del i to varianter: `PricingPrivate` (inkl. mva) og `PricingBusiness` (eks. mva) |
| `src/components/BookingWizard.tsx` | Beholdes, vises kun i privat-blokk |
| `src/components/BusinessQuoteForm.tsx` | **Ny** — tilbudsskjema for bedrift |
| `src/components/CoverageMap.tsx` | Redesigne visuell side (C1 eller C2). Tekst beholdes. |

### Keystatic-endringer

Vurdér å legge til en `businessServices`-collection eller en `track`-tagg på eksisterende `services` for å skille privat/bedrift-tjenester. Minimum: marker hvilke tjenester som er relevante for hvert spor. Detaljer avklares når implementasjonsplan skrives.

### Designtokens

Ingen nye tokens trengs. Bruk eksisterende:
- `forest-950 / 900 / 800 / 700` — mørk hero-bunn
- `amber-accent` — CTA, eyebrow, bedrifts-aksent
- `cream-50 / 100` — bakgrunn felles-seksjoner
- `forest-200 / 300` — soft accents
- `sage-91` (`#8abf91`) — sekundæraksent (referert som `forest-200`)

### Responsivt

- Hero: på mobil stables tekst over bilde. Bildet blir 16:9, mørk gradient over bunnen.
- Gaffel: to kort stables vertikalt på mobil, side om side fra `md:` og opp.
- CoverageMap: visualen skaleres ned til kvadrat på mobil under teksten.

## Ikke-mål (for denne iterasjonen)

- Kundecaser / referanser for bedrift (utsettes til Fabian har materiale)
- Ny testimonial-collection for bedrift (bruker samme collection)
- Logo-redesign eller brand-endringer
- Språkregel-diskusjon (KI i kundetekst) — gjelder ikke denne siden
- SEO-metadata utover eksisterende `metadata` i page.tsx

## Neste steg

1. **Fabian:** Velg C1 eller C2 for CoverageMap
2. Skriv implementasjonsplan (`superpowers:writing-plans`)
3. Implementér i bestemte steg med verifisering underveis

## Brainstorm-artefakter

Bevares i `.superpowers/brainstorm/6972-1776694036/` for referanse:
- `segmentation-approach.html` — mekanisme (A/B/C)
- `fork-design-v1.html` — visuell retning (V1/V2)
- `page-structure.html` — side-struktur (S1/S2/S3)
- `hero-integration.html` — hero-komposisjon (H1/H2)
- `coverage-redesign.html` — dekningsområde (C1/C2) — **åpen**
