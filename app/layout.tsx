import type { Metadata } from "next";
import "./globals.css";

export function generateMetadata(): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kessler-co-tx.github.io/gpost-strategy";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const image = `${siteUrl}${basePath && !siteUrl.endsWith(basePath) ? basePath : ""}/og.png`;
  const title = "GPOST | Product & Operating Strategy";
  const description = "Two perspectives on GPOST: the established place-based product and an operating strategy for the General Manager role.";
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    icons: { icon: `${basePath}/favicon.svg`, shortcut: `${basePath}/favicon.svg` },
    openGraph: { title, description, type: "website", url: siteUrl, images: [{ url: image, width: 1774, height: 887, alt: "GPOST product and General Manager strategy" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-view="gpost" suppressHydrationWarning><body>{children}</body></html>;
}
