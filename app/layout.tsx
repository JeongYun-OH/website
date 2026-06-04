import type { Metadata, Viewport } from "next";
import { site } from "@/lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "fullfunnel-growth-marketer-jeo",
  description: site.description,
  keywords: ["풀퍼널", "GTM", "그로스 마케팅", "퍼스널 브랜딩", site.name],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: site.url,
    title: "fullfunnel-growth-marketer-jeo",
    description: site.description,
    siteName: site.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "fullfunnel-growth-marketer-jeo",
    description: site.description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
