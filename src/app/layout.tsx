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
  description: "Omar revised millions in reported business values and added substantial Rose Lake income. The disclosures, political network and separate $11.25 million wire account.",
  authors: [{ name: "Apple Lamps", url: "https://x.com/lamps_apple" }],
  alternates: { canonical: "/" },
  robots: { index: process.env.VERCEL_ENV !== "preview", follow: true },
  openGraph: { title: "Ilhan Omar, Tim Mynett & the Money Trail", description: "Omar’s revised business valuations, newly reported Rose Lake income and her husband’s political-business network.", type: "website", url: "/", siteName: "Follow The Money", locale: "en_US" },
  twitter: { card: "summary_large_image", creator: "@lamps_apple", title: "Ilhan Omar, Tim Mynett & the Money Trail", description: "The disclosure reversal, the political-business network and Hailer’s sworn account of $11.25 million in wires." },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-scroll-behavior="smooth"><body className={inter.variable + " " + display.variable + " antialiased"}><SiteFrame>{children}<Footer /></SiteFrame></body></html>;
}
