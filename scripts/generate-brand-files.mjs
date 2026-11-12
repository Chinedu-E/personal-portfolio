import { writeFile } from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { loadFonts, markElement } from "../src/lib/brand-images.mjs";

const { ImageResponse } = createRequire(import.meta.url)("next/og.js");
const root = process.cwd();
const fonts = await loadFonts();

async function png(size) {
  const response = new ImageResponse(markElement(size), {
    width: size,
    height: size,
    fonts,
  });
  return Buffer.from(await response.arrayBuffer());
}

function toIco(images) {
  const count = images.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const directory = Buffer.alloc(16 * count);
  let offset = 6 + 16 * count;
  for (const [index, image] of images.entries()) {
    const entry = index * 16;
    const dimension = image.size >= 256 ? 0 : image.size;
    directory.writeUInt8(dimension, entry);
    directory.writeUInt8(dimension, entry + 1);
    directory.writeUInt16LE(1, entry + 4);
    directory.writeUInt16LE(32, entry + 6);
    directory.writeUInt32LE(image.buffer.length, entry + 8);
    directory.writeUInt32LE(offset, entry + 12);
    offset += image.buffer.length;
  }

  return Buffer.concat([
    header,
    directory,
    ...images.map((image) => image.buffer),
  ]);
}

const sizes = [16, 32, 48];
const icons = [];
for (const size of sizes) {
  icons.push({ size, buffer: await png(size) });
}

await writeFile(path.join(root, "src/app/favicon.ico"), toIco(icons));
await writeFile(
  path.join(root, "public/android-chrome-192x192.png"),
  await png(192),
);
await writeFile(
  path.join(root, "public/android-chrome-512x512.png"),
  await png(512),
);

console.log("wrote favicon.ico and android chrome icons");
