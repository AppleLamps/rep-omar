import type { MetadataRoute } from "next";
import { siteURL } from "@/lib/investigation";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", ...(process.env.VERCEL_ENV === "preview" ? { disallow: "/" } : { allow: "/" }) }, sitemap: siteURL + "/sitemap.xml" };
}
