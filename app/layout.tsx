import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import OrganizationSchema from "@/components/seo/OrganizationSchema";
import WebsiteSchema from "@/components/seo/WebsiteSchema";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mbsconstruction.in"),

  title: {
    default:
      "MBS Construction | PEB, Warehouse & Industrial Construction Company",
    template: "%s | MBS Construction",
  },

  description:
    "MBS Construction is a leading Pre-Engineered Building (PEB), Warehouse Construction, Industrial Shed, Steel Fabrication and Roofing Solutions company in Karnataka.",

  keywords: [
    "PEB",
    "Warehouse Construction",
    "Industrial Shed",
    "Factory Building",
    "Steel Fabrication",
    "Roofing Contractor",
    "PEB Company Karnataka",
    "Industrial Construction",
    "MBS Construction",
  ],

  applicationName: "MBS Construction",

  authors: [
    {
      name: "MBS Construction",
    },
  ],

  creator: "MBS Construction",

  publisher: "MBS Construction",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mbsconstruction.in",
    siteName: "MBS Construction",

    title:
      "MBS Construction | PEB, Warehouse & Industrial Construction Company",

    description:
      "Leading PEB, Warehouse, Factory Building & Roofing Solutions company in Karnataka.",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MBS Construction",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "MBS Construction | PEB, Warehouse & Industrial Construction Company",

    description:
      "Leading Industrial Construction & PEB Company in Karnataka.",

    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <OrganizationSchema />
        <WebsiteSchema />

        <Navbar />

        {children}

        <Footer />
        </body>
    </html>
  );
}