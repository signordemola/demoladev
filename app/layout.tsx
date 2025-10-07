import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Demoladev | Web Solutions",
    template: "%s | Demoladev",
  },
  description:
    "Custom websites for Nigerian businesses, entrepreneurs, and startups — designed to grow your brand, streamline operations, and boost revenue.",
  keywords: [
    "web developer Lagos",
    "web design Nigeria",
    "custom business websites",
    "affordable website development",
    "ecommerce web developer Nigeria",
    "SEO-optimized websites",
    "startup web solutions",
    "Lagos freelance web developer",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  authors: [{ name: "Demoladev", url: "https://demoladevop.com/" }],
  openGraph: {
    title: "Demoladev | Enterprise Web Solutions",
    description:
      "Professional web development and design services for Nigerian businesses and entrepreneurs. Build your brand online with Demoladev Web Solutions.",
    url: "https://demoladevop.com/",
    siteName: "Demoladev Web Solutions",
    images: [
      {
        url: "https://demoladevop.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Demoladev Web Solutions Preview",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Demoladev | Web Solutions for Nigerian Businesses",
    description:
      "Need a website that works for your business? Demoladev builds custom web solutions for Nigerian companies and startups.",
    creator: "@demoladevop",
    images: ["https://demoladevop.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://demoladevop.com",
  },
  metadataBase: new URL("https://demoladevop.com"),
  category: "Technology & Web Development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} bg-gradient antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>

        <Script
          id="ld-json"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Demoladev Web Solutions",
              url: "https://demoladevop.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://demoladevop.com/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
