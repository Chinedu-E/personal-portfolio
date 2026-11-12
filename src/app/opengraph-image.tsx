import { ImageResponse } from "next/og";
import { site } from "@/data/site";
import { loadFonts, ogElement, ogSize } from "@/lib/brand-images.mjs";

export const runtime = "nodejs";
export const alt =
  "Nedu Ekeruche, software engineer, quantitative developer, and fintech";
export const size = ogSize;
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    ogElement({
      name: site.name,
      location: site.location,
      title: site.title,
      host: "neduekeruche.me",
    }),
    {
      ...ogSize,
      fonts: await loadFonts(),
    },
  );
}
