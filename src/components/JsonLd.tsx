type Settings = {
  siteName: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  orgNumber: string;
  openingHoursWeekdays: string;
  openingHoursWeekend: string;
  facebookUrl?: string | null;
};

type Service = {
  title: string;
  shortDescription: string;
  slug: string;
};

type Testimonial = {
  name: string;
  text: string;
  rating: number;
};

interface Props {
  settings: Settings;
  services: Service[];
  testimonials: Testimonial[];
}

const SITE_URL = "https://rensespesialisten.no";

function normalizePhone(raw: string): string {
  const digits = raw.replace(/\s|-/g, "");
  return digits.startsWith("+") ? digits : `+47${digits}`;
}

export default function JsonLd({ settings, services, testimonials }: Props) {
  const phoneE164 = normalizePhone(settings.phone);
  const ratings = testimonials.map((t) => t.rating).filter((r) => r > 0);
  const avgRating =
    ratings.length > 0
      ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1)
      : null;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#business`,
    name: settings.siteName,
    description: settings.tagline,
    url: SITE_URL,
    telephone: phoneE164,
    email: settings.email,
    image: `${SITE_URL}/logo.png`,
    logo: `${SITE_URL}/logo.png`,
    priceRange: "kr",
    address: {
      "@type": "PostalAddress",
      addressLocality: settings.address || "Nærøysund",
      addressRegion: "Trøndelag",
      addressCountry: "NO",
    },
    areaServed: [
      { "@type": "City", name: "Nærøysund" },
      { "@type": "City", name: "Rørvik" },
      { "@type": "City", name: "Kolvereid" },
      { "@type": "AdministrativeArea", name: "Namdalen" },
      { "@type": "AdministrativeArea", name: "Trøndelag" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "16:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        description: "Etter avtale",
      },
    ],
    ...(settings.orgNumber && {
      identifier: {
        "@type": "PropertyValue",
        propertyID: "Organisasjonsnummer",
        value: settings.orgNumber,
      },
    }),
    ...(settings.facebookUrl && { sameAs: [settings.facebookUrl] }),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Rensetjenester",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.shortDescription,
          serviceType: s.title,
          provider: { "@id": `${SITE_URL}/#business` },
          areaServed: { "@type": "AdministrativeArea", name: "Namdalen" },
        },
      })),
    },
    ...(avgRating && testimonials.length > 0
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: avgRating,
            reviewCount: testimonials.length,
            bestRating: "5",
            worstRating: "1",
          },
          review: testimonials.map((t) => ({
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: t.rating,
              bestRating: "5",
            },
            author: { "@type": "Person", name: t.name },
            reviewBody: t.text,
          })),
        }
      : {}),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: settings.siteName,
    description: settings.tagline,
    inLanguage: "nb-NO",
    publisher: { "@id": `${SITE_URL}/#business` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
