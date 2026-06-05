import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://varenyam.com"),
  title: {
    default: `${site.name} — Coaching for Classes 6–12 in Indore`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  keywords: ["coaching Indore", "CBSE coaching", "ICSE", "Class 10 board", "Class 12 board", "Science Commerce coaching", "Varenyam"],
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    siteName: site.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Distinctive premium type — Clash Display (headlines) + Satoshi (body) */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700,800&f[]=satoshi@400,500,700&display=swap"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-white font-sans antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
