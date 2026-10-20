import OpenGraphImage from "./opengraph-image";

// Keep metadata explicit so Next.js can discover every Twitter image attribute.
export const alt = "Follow The Money: Ilhan Omar, Tim Mynett and the Money Trail. Signed disclosures, sworn testimony and the separate $11.25 million Rose Lake Inc. wire account. An investigation by Apple Lamps.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return OpenGraphImage();
}
