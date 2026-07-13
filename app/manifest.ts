import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MBS Construction",
    short_name: "MBS",
    description:
      "Leading Pre-Engineered Buildings (PEB), Warehouse Construction, Industrial Sheds, Steel Fabrication and Roofing Solutions Company.",

    start_url: "/",

    display: "standalone",

    background_color: "#ffffff",

    theme_color: "#0B4EA2",

    orientation: "portrait",

    lang: "en",

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}