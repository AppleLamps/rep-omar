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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
