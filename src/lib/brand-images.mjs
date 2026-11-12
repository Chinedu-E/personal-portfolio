import { readFile } from "node:fs/promises";
import path from "node:path";
import { createElement as h } from "react";

export const ink = "#10110f";
export const inkMuted = "#2a2a26";
export const paper = "#eceae4";
export const paperMuted = "#9a968c";

export const ogSize = { width: 1200, height: 630 };

const fontDir = path.join(process.cwd(), "src/fonts");

let fontsPromise;

export function loadFonts() {
  if (!fontsPromise) {
    fontsPromise = Promise.all([
      readFile(path.join(fontDir, "InstrumentSerif-Regular.ttf")),
      readFile(path.join(fontDir, "JetBrainsMono-Regular.ttf")),
      readFile(path.join(fontDir, "Inter-Regular.woff")),
    ]).then(([serif, mono, sans]) => [
      { name: "Instrument Serif", data: serif, weight: 400, style: "normal" },
      { name: "JetBrains Mono", data: mono, weight: 400, style: "normal" },
      { name: "Inter", data: sans, weight: 400, style: "normal" },
    ]);
  }
  return fontsPromise;
}

export function markElement(size) {
  const fontSize = Math.round(size * 0.68);

  return h(
    "div",
    {
      style: {
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: ink,
      },
    },
    h(
      "div",
      {
        style: {
          fontFamily: "Instrument Serif",
          fontSize,
          color: paper,
          lineHeight: 1,
          paddingBottom: Math.round(size * 0.08),
        },
      },
      "N",
    ),
  );
}

export function ogElement({ name, location, title, host }) {
  const { width, height } = ogSize;

  return h(
    "div",
    {
      style: {
        width,
        height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: ink,
        padding: "76px 84px 56px",
      },
    },
    h(
      "div",
      { style: { display: "flex", flexDirection: "column" } },
      h(
        "div",
        {
          style: {
            fontFamily: "JetBrains Mono",
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: paperMuted,
          },
        },
        location,
      ),
      h(
        "div",
        {
          style: {
            marginTop: 28,
            fontFamily: "Instrument Serif",
            fontSize: 92,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            color: paper,
          },
        },
        name,
      ),
      h(
        "div",
        {
          style: {
            marginTop: 22,
            fontFamily: "Inter",
            fontSize: 30,
            lineHeight: 1.35,
            color: paperMuted,
          },
        },
        title,
      ),
    ),
    h(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          borderTop: `1px solid ${inkMuted}`,
          paddingTop: 28,
          fontFamily: "JetBrains Mono",
          fontSize: 18,
          letterSpacing: "0.04em",
          color: paperMuted,
        },
      },
      host,
    ),
  );
}
