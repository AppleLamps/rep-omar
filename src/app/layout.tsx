import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import SiteFrame from "@/components/SiteFrame";
import Footer from "@/components/Footer";
import { siteURL } from "@/lib/investigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700", "800"], display: "swap", variable: "--font-inter" });
const display = Playfair_Display({ subsets: ["latin"], weight: "700", display: "swap", variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(siteURL),
  title: { default: "Ilhan Omar, Tim Mynett & the Money Trail | Follow The Money", template: "%s | Follow The Money" },
  description: "A conservative investigation into Omar and Mynett’s business network, rewritten disclosures, campaign payments and the $11.25 million Rose Lake transfer account.",
  authors: [{ name: "Apple Lamps", url: "https://x.com/lamps_apple" }],
  alternates: { canonical: "/" },
  robots: { index: process.env.VERCEL_ENV !== "preview", follow: true },
  openGraph: { title: "Ilhan Omar, Tim Mynett & the Money Trail", description: "Rewritten disclosures. Political connections. $11.25 million in wires. Follow the records with Apple Lamps.", type: "website", url: "/", siteName: "Follow The Money", locale: "en_US" },
  twitter: { card: "summary_large_image", creator: "@lamps_apple", title: "Ilhan Omar, Tim Mynett & the Money Trail", description: "A conservative investigation with primary records and documented responses." },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-scroll-behavior="smooth"><body className={inter.variable + " " + display.variable + " antialiased"}><SiteFrame>{children}<Footer /></SiteFrame></body></html>;
}
