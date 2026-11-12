import { ImageResponse } from "next/og";
import { loadFonts, markElement } from "@/lib/brand-images.mjs";

export const runtime = "nodejs";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return new ImageResponse(markElement(size.width), {
    ...size,
    fonts: await loadFonts(),
  });
}
