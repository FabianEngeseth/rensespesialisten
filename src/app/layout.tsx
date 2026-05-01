import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { reader } from "@/lib/reader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://rensespesialisten.no";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await reader.singletons.settings.read();
  const siteName = settings?.siteName ?? "Rensespesialisten";
  const tagline =
    settings?.tagline ?? "Profesjonell dyprengjøring av møbler og tekstiler";
  const description = `${tagline} i Namdalen. Vi kommer hjem til deg og renser sofa, teppe, lenestoler, bilinteriør, bobil og campingvogn — på stedet, uten flytting. Klar til bruk samme dag.`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      template: `%s | ${siteName}`,
      default: `${siteName} — ${tagline} i Namdalen`,
    },
    description,
    keywords: [
      "møbelrens",
      "sofarens",
      "tepperens",
      "stolrens",
      "bilinteriørrens",
      "bobilrens",
      "rensespesialisten",
      "Namdalen",
      "Nærøysund",
      "Rørvik",
      "Kolvereid",
      "dyprengjøring",
      "tekstilrens",
    ],
    alternates: {
      canonical: "/",
    },
    openGraph: {
      siteName,
      locale: "nb_NO",
      type: "website",
      url: SITE_URL,
      title: `${siteName} — ${tagline} i Namdalen`,
      description,
      images: [
        {
          url: "/hero-bil-hus.jpg",
          width: 2400,
          height: 1800,
          alt: `${siteName} — vi kommer hjem til deg i Namdalen`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteName} — ${tagline}`,
      description,
      images: ["/hero-bil-hus.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [{ url: "/icon.png", type: "image/png" }],
      apple: "/apple-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await reader.singletons.settings.read();

  return (
    <html lang="nb" className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header
          siteName={settings?.siteName ?? "Rensespesialisten"}
          phone={settings?.phone ?? ""}
        />
        <main className="flex-1">{children}</main>
        <Footer
          siteName={settings?.siteName ?? "Rensespesialisten"}
          phone={settings?.phone ?? ""}
          email={settings?.email ?? ""}
          address={settings?.address ?? ""}
          orgNumber={settings?.orgNumber ?? ""}
          openingHoursWeekdays={settings?.openingHoursWeekdays ?? ""}
          openingHoursWeekend={settings?.openingHoursWeekend ?? ""}
          facebookUrl={settings?.facebookUrl}
        />
      </body>
    </html>
  );
}
