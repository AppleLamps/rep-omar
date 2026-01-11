# Follow The Money

A public accountability website documenting potential conflicts of interest between Rep. Ilhan Omar's congressional committee positions and her husband Tim Mynett's investment firm, Rose Lake Capital LLC.

## Overview

This website presents publicly available information regarding:

- **The Committee-Investment Connection**: Rep. Omar's position on the House Foreign Affairs Committee's Subcommittee on Africa and her husband's investments in African mining projects
- **The Money Trail**: Campaign fund disbursements to E Street Group, Rose Lake Capital's formation, and investments in Ivanhoe Atlantic
- **The China Connection**: Congressional investigation into Ivanhoe Atlantic's ties to Chinese state-linked entities (CITIC Group, Zijin Mining)
- **Financial Disclosures**: Analysis of congressional financial disclosure filings showing dramatic wealth increases

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with fonts
│   └── page.tsx        # Main page with all sections
└── components/
    ├── BackToTop.tsx   # Scroll-to-top button
    ├── ConnectionMap.tsx # Visual influence/money flow diagram
    ├── FinancialTable.tsx # Congressional disclosure data table
    ├── Footer.tsx      # Site footer
    ├── Hero.tsx        # Hero section
    ├── Navigation.tsx  # Fixed navigation with scroll progress
    ├── StatCards.tsx   # Key statistics cards
    └── index.ts        # Component exports
```

## Sources

All information is sourced from:
- Congressional financial disclosures (House.gov)
- FEC campaign finance records
- Court filings and litigation records
- News reports from multiple outlets
- House Select Committee on China communications
- Corporate filings and SEC records

## Deployment

The site is configured for Vercel deployment. Set the **Root Directory** to the project root in Vercel settings.

## Disclaimer

This website is provided for informational purposes only and does not constitute legal or financial advice. All information is based on publicly available records and reports.
