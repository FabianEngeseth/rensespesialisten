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

export async function generateMetadata(): Promise<Metadata> {
  const settings = await reader.singletons.settings.read();
  return {
    title: {
      template: `%s | ${settings?.siteName ?? "Rensespesialisten"}`,
      default: `${settings?.siteName ?? "Rensespesialisten"} — ${settings?.tagline ?? "Profesjonell dyprengj\u00f8ring av m\u00f8bler og tekstiler"}`,
    },
    description:
      settings?.tagline ??
      "Profesjonell dyprengj\u00f8ring av m\u00f8bler og tekstiler i Namdalen.",
    openGraph: {
      siteName: settings?.siteName ?? "Rensespesialisten",
      locale: "nb_NO",
      type: "website",
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
