import type { MetadataRoute } from "next";
import { siteURL, reviewedISODate } from "@/lib/investigation";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/updates", "/research/ivanhoe"].map(path => ({ url: siteURL + (path === "/" ? "" : path), lastModified: reviewedISODate, changeFrequency: "monthly" as const, priority: path === "/" ? 1 : 0.7 }));
}
