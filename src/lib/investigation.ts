export const reviewedDate = "October 13, 2026";

export const sources = {
  original: { label: "House Clerk: original 2024 disclosure, filed May 14, 2025 (PDF)", href: "https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2024/10068415.pdf" },
  amendment: { label: "House Clerk: 2024 amendment, filed March 26, 2026 (PDF)", href: "https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2024/10073338.pdf" },
  annual: { label: "House Clerk: 2025 annual disclosure, filed May 13, 2026 (PDF)", href: "https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2025/10077400.pdf" },
  declaration: { label: "William R. Hailer declaration: Epic! Creations, case 24-11161-BLS, docket 314, November 20, 2024 (PDF; hosted by Washington Free Beacon)", href: "https://freebeacon.com/wp-content/uploads/2026/05/Declaration-of-Will-Hailer.pdf" },
  oversight: { label: "House Oversight: letter to Timothy Mynett, February 5, 2026 (PDF)", href: "https://oversight.house.gov/wp-content/uploads/2026/02/Letter-to-Timothy-Mynett-.pdf" },
  committees: { label: "Rep. Omar: current committees and caucuses", href: "https://omar.house.gov/about/committees-and-caucuses" },
  watchdog: { label: "Wall Street Journal: OCC recommendation, September 9, 2026", href: "https://www.wsj.com/politics/ilhan-omar-cleared-of-wrongdoing-after-overstating-assets-by-millions-963eb6cf" },
  watchdogVote: { label: "Star Tribune: OCC board voted 5–1 to recommend dismissal, September 9, 2026", href: "https://www.startribune.com/report-congressional-watchdog-clears-ilhan-omar-over-financial-disclosure-errors/601887629" },
  federal: { label: "Axios: Pirro announces financial-disclosure investigation, October 13, 2026", href: "https://www.axios.com/2026/10/13/ilhan-omar-investigation-finances-pirro" },
  winery: { label: "Washington Free Beacon: eStCru termination filing, April 22, 2026", href: "https://freebeacon.com/democrats/fall-from-grapes-winery-owned-by-ilhan-omars-husband-folds-one-year-after-omar-said-it-was-worth-up-to-5-million/" },
  settlements: { label: "Minnesota Reformer: $1.2 million cannabis settlement, August 1, 2024", href: "https://minnesotareformer.com/2024/08/01/former-democratic-operative-settles-1-2-million-debt-with-south-dakota-cannabis-growers/" },
  followup: { label: "Washington Free Beacon: Rose Lake transfers and litigation follow-up, May 29, 2026", href: "https://freebeacon.com/democrats/us-anti-terror-agency-froze-funds-of-ilhan-omars-husband-during-biden-administration-partner-says-biden-doj-would-later-probe-omars-foreign-ties/" },
  oci: { label: "OCI: company statement on settlement and release, February 15, 2026", href: "https://oci-group.co.uk/legal" },
  ipo: { label: "MINING.COM: Ivanhoe Atlantic considers U.S. IPO, January 23, 2026", href: "https://www.mining.com/ivanhoe-atlantic-pivots-to-us-ipo-after-rail-deal-win/" },
};

export const financialData = [
  { year: "2022", asset: "Rose Lake Capital", value: "$1–$1,000", income: "None", type: "Partnership", analysis: "Historical annual disclosure", highlight: false },
  { year: "2023", asset: "Rose Lake Capital", value: "$1–$1,000", income: "$15,001–$50,000", type: "Partnership", analysis: "Historical annual disclosure", highlight: false },
  { year: "2024 · original", asset: "Rose Lake Capital", value: "$5,000,001–$25,000,000", income: "None", type: "Partnership", analysis: "Filed May 14, 2025; superseded by March 2026 amendment", highlight: true },
  { year: "2024 · amended", asset: "Rose Lake Capital", value: "None", income: "$100,001–$1,000,000", type: "Partnership", analysis: "Filed March 26, 2026; asset value reduced and income added", highlight: true },
  { year: "2025", asset: "Rose Lake Capital", value: "None", income: "None", type: "Partnership", analysis: "Filed May 13, 2026; latest annual disclosure reviewed", highlight: false },
  { year: "2023", asset: "eStCru LLC", value: "$15,001–$50,000", income: "$201–$1,000", type: "Partnership", analysis: "Historical annual disclosure", highlight: false },
  { year: "2024 · original", asset: "eStCru LLC", value: "$1,000,001–$5,000,000", income: "$5,001–$15,000", type: "Partnership", analysis: "Filed May 14, 2025; superseded by March 2026 amendment", highlight: true },
  { year: "2024 · amended", asset: "eStCru LLC", value: "None", income: "$2,501–$5,000", type: "Partnership", analysis: "Filed March 26, 2026", highlight: true },
  { year: "2025", asset: "eStCru LLC", value: "None", income: "$201–$1,000", type: "Partnership", analysis: "Filed May 13, 2026; termination filed April 4, 2026, per reporting", highlight: false },
];
