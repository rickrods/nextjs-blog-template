import Footer from "@/app/_components/footer";
import { HOME_OG_IMAGE_URL, SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";
import { ThemeSwitcher } from "./_components/theme-switcher";
import Header from "./_components/header";
import Container from "./_components/container";
import Script from "next/script";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Blog template",
  description: "A blog template for Next.js 13 and Tailwind CSS.",
  keywords: ["blog", "template", "nextjs", "tailwindcss"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body
        className={cn(inter.className, "dark:bg-slate-900 dark:text-slate-400")}
      >
        <ThemeSwitcher />
        <Header />
        <div className="min-h-screen markdown-content">
          <Container>
            {/* Add some top margin to the main content */}
            <main className="mt-8 md:mt-12">{children}</main>
          </Container>
        </div>
        <Footer />
        <Script
          id="defer-css"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              const stylesheets = document.querySelectorAll('link[rel="stylesheet"][href*="_next/static/css"]');
              stylesheets.forEach(sheet => {
                sheet.media = 'print';
                sheet.onload = () => {
                  sheet.media = 'all';
                };
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
