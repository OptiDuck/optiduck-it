import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: "monthly", priority: 1 },
    { url: `${siteConfig.url}/angebot/workflow-check`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/impressum`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${siteConfig.url}/datenschutz`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
