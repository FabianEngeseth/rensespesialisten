import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { reader } from "@/lib/reader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await reader.singletons.settings.read();
  return {
    title: {
      template: `%s | ${settings?.siteName ?? "Rensespesialisten"}`,
      default: `${settings?.siteName ?? "Rensespesialisten"} — ${settings?.tagline ?? "Profesjonell rengjøring i Namdalen"}`,
    },
    description:
      settings?.tagline ??
      "Profesjonell rengjøring til private og bedrifter i Namdalen. Pålitelig, grundig og til rett pris.",
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
    <html lang="nb" className={`${geistSans.variable} h-full antialiased`}>
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
          openingHoursWeekdays={settings?.openingHoursWeekdays ?? ""}
          openingHoursWeekend={settings?.openingHoursWeekend ?? ""}
          facebookUrl={settings?.facebookUrl}
        />
      </body>
    </html>
  );
}
