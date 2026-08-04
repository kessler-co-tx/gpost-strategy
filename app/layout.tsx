import type { Metadata } from "next";
import "./globals.css";
import "./brand-system.css";

export function generateMetadata(): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kessler-co-tx.github.io/gpost-strategy";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const image = `${siteUrl}${basePath && !siteUrl.endsWith(basePath) ? basePath : ""}/og.png`;
  const title = "GPOST Growth Strategy | Joe Kessler";
  const description = "A General Manager operating thesis for evolving trusted place-based communication into trusted action.";
  return {
    title, description,
    icons: { icon: `${basePath}/favicon.svg`, shortcut: `${basePath}/favicon.svg` },
    openGraph: { title, description, type: "website", images: [{ url: image, width: 1792, height: 896 }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('gpost-theme');document.documentElement.dataset.theme=(t==='light'||t==='dark')?t:'dark'}catch(e){}})()` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
