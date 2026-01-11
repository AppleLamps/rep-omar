import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apple Lamps Research | Rose Lake Capital Investigation",
  description: "A comprehensive forensic due diligence investigation into Rose Lake Capital LLC, examining valuation anomalies, political connections, and corporate governance concerns.",
  keywords: ["Rose Lake Capital", "investigative journalism", "due diligence", "forensic analysis", "political finance"],
  authors: [{ name: "Apple Lamps Research Unit" }],
  openGraph: {
    title: "Apple Lamps Research | Rose Lake Capital Investigation",
    description: "A comprehensive forensic due diligence investigation into Rose Lake Capital LLC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
