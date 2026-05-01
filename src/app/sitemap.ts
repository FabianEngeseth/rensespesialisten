import type { MetadataRoute } from "next";

const SITE_URL = "https://rensespesialisten.no";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/om-oss`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
