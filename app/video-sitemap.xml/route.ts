
import { NextResponse } from "next/server";

const siteUrl = "https://mbsconstructions.com";

export function GET() {
  const videos = [
    {
      page: "/videos/construction",
      title: "Industrial Construction & Project Execution",
      description:
        "Watch industrial construction work and project execution by MBS Constructions.",
      thumbnail: "/images/video-thumbnails/construction.jpg",
      content: "/videos/home-slider/construction.mp4",
    },
    {
      page: "/videos/roofing",
      title: "Industrial Roofing Solutions",
      description:
        "Watch industrial roofing solutions and project work by MBS Constructions.",
      thumbnail: "/images/video-thumbnails/roofing.jpg",
      content: "/videos/home-slider/roofing.mp4",
    },
  ];

  const escapeXml = (value: string) =>
    value.replace(/[<>&"']/g, (char) => {
      const entities: Record<string, string> = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
      };

      return entities[char];
    });

  const entries = videos
    .map(
      (video) => `
  <url>
    <loc>${escapeXml(siteUrl + video.page)}</loc>
    <video:video>
      <video:thumbnail_loc>${escapeXml(siteUrl + video.thumbnail)}</video:thumbnail_loc>
      <video:title>${escapeXml(video.title)}</video:title>
      <video:description>${escapeXml(video.description)}</video:description>
      <video:content_loc>${escapeXml(siteUrl + video.content)}</video:content_loc>
    </video:video>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${entries}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
