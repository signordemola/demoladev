import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  variable: "--font-archivo",
  subsets: ["latin"],
});

// Static metadata export
export const metadata: Metadata = {
  title: {
    default: "Demoladev | Web Solutions",
    template: "%s | Demoladev Web Solutions",
  },
  icons: {
    icon: "/favicon.svg",
  },
  description:
    "Custom websites for businesses, entrepreneurs, and individuals—designed to grow your brand, streamline operations, and boost revenue.",
  keywords: [
    "business website developer",
    "custom websites for companies",
    "enterprise web solutions",
    "website for small business",
    "professional web design",
  ],
  authors: [{ name: "Demoladev", url: "https://your-site.vercel.app" }],
  openGraph: {
    title: "Demoladev | Enterprise Web Solutions",
    description:
      "Tailored websites for companies and business owners—drive growth with a site built for your success.",
    url: "https://your-site.vercel.app",
    siteName: "Demoladev Web Solutions",
    images: [
      {
        url: "https://your-site.vercel.app/og-image.jpg", // Add later
        width: 1200,
        height: 630,
        alt: "Demoladev Web Solutions Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Demoladev | Enterprise Web Solutions",
    description:
      "Need a website that works for your business? I build custom solutions for companies and individuals.",
    creator: "@yourXhandle", // Swap with your X handle
    images: ["https://your-site.vercel.app/og-image.jpg"],
  },
  alternates: {
    canonical: "https://your-site.vercel.app", // Your Vercel URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} font-sans antialiased bg-stone-200 text-stone-900`}
      >
        {children}
      </body>
    </html>
  );
}
