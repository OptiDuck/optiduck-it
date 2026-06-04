import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "OptiDuck IT | KI-Workflows & Automationen für KMU in Münster",
  description:
    "OptiDuck IT unterstützt KMU in Münster und Umgebung bei KI-Workflows, Prozessautomatisierung und digitalen Assistenten. Praxisnah, verständlich und umsetzungsorientiert.",
  keywords: [
    "KI Beratung Münster",
    "KI Automationen Münster",
    "Prozessautomatisierung für KMU",
    "KI-Workflows für Unternehmen",
    "Automationen für kleine und mittlere Unternehmen",
  ],
  openGraph: {
    title: "OptiDuck IT | KI-Workflows & Automationen für KMU in Münster",
    description:
      "Praxisnahe KI-Workflows und Automationen für kleine und mittlere Unternehmen in Münster und Umgebung.",
    locale: "de_DE",
    type: "website",
    url: siteConfig.url,
    siteName: "OptiDuck IT",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "OptiDuck IT – KI-Workflows und Automationen für KMU in Münster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OptiDuck IT | KI-Workflows & Automationen für KMU in Münster",
    description: "Praxisnahe KI-Workflows und Automationen für KMU in Münster und Umgebung.",
    images: ["/opengraph-image.png"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
