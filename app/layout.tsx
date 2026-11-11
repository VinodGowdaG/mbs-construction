
import type { Metadata } from "next";
import "./globals.css";

import WhatsAppButton from "@/components/WhatsAppButton";
import MBSChatbot from "@/components/MBSChatbot";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


import OrganizationSchema from "@/components/seo/OrganizationSchema";
import WebsiteSchema from "@/components/seo/WebsiteSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://mbsconstructions.com"),

  title: {
    default:
      "MBS Constructions | PEB & Industrial Construction in Bengaluru",
    template: "%s | MBS Constructions",
  },

  description:
    "MBS Constructions provides PEB buildings, warehouse construction, industrial sheds, steel fabrication and roofing solutions in Bengaluru and across Karnataka.",

  applicationName: "MBS Constructions",
  authors: [{ name: "MBS Constructions" }],
  creator: "MBS Constructions",
  publisher: "MBS Constructions",

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

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "MBS Constructions",
    title:
      "MBS Constructions | PEB & Industrial Construction in Bengaluru",
    description:
      "Explore PEB buildings, warehouse construction, industrial sheds, steel fabrication and roofing solutions from MBS Constructions.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MBS Constructions - PEB and Industrial Construction",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "MBS Constructions | PEB & Industrial Construction in Bengaluru",
    description:
      "PEB buildings, warehouse construction, industrial sheds and roofing solutions across Karnataka.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
  icon: [
    {
      url: "/favicon.ico",
      sizes: "48x48",
      type: "image/x-icon",
    },
    {
      url: "/icon.png",
      type: "image/png",
    },
  ],
  shortcut: "/favicon.ico",
  apple: "/apple-icon.png",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <OrganizationSchema />
        <WebsiteSchema />
        <Navbar />
        {children}
        <MBSChatbot />
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
