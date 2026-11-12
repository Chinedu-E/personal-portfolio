import { ImageResponse } from "next/og";
import { loadFonts, markElement } from "@/lib/brand-images.mjs";

export const runtime = "nodejs";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  return new ImageResponse(markElement(size.width), {
    ...size,
    fonts: await loadFonts(),
  });
}
