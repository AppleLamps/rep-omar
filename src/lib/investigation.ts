export const reviewedDate = "October 13, 2026";
export const reviewedISODate = "2026-10-13";
export const siteURL = "https://rep-omar.vercel.app";
export const socialImage = { url: "/opengraph-image", width: 1200, height: 630, alt: "Follow The Money: Ilhan Omar, Tim Mynett and the Money Trail, by Apple Lamps" };

export type SourceGroup = "Disclosures" | "Court and campaign records" | "Archived team" | "Reporting and responses" | "Mining appendix";
export interface Source { label: string; href: string; kind: string; group: SourceGroup; date?: string }
export const sources = {
  "annual2022": {
    "label": "2022 annual disclosure · 10053193",
    "href": "https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2022/10053193.pdf",
    "kind": "House disclosure",
    "group": "Disclosures",
    "date": "May 15, 2023"
  },
  "annual2023": {
    "label": "2023 original disclosure · 10060937",
    "href": "https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2023/10060937.pdf",
    "kind": "House disclosure",
    "group": "Disclosures",
    "date": "May 14, 2024"
  },
  "amendment2023": {
    "label": "2023 amended disclosure · 10074577",
    "href": "https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2023/10074577.pdf",
    "kind": "House disclosure",
    "group": "Disclosures",
    "date": "March 26, 2026"
  },
  "original": {
    "label": "2024 original disclosure · 10068415",
    "href": "https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2024/10068415.pdf",
    "kind": "House disclosure",
    "group": "Disclosures",
    "date": "May 14, 2025"
  },
  "amendment": {
    "label": "2024 amended disclosure · 10073338",
    "href": "https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2024/10073338.pdf",
    "kind": "House disclosure",
    "group": "Disclosures",
    "date": "March 26, 2026"
  },
  "annual": {
    "label": "2025 annual disclosure · 10077400",
    "href": "https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2025/10077400.pdf",
    "kind": "House disclosure",
    "group": "Disclosures",
    "date": "May 13, 2026"
  },
  "declaration": {
    "label": "Hailer declaration · Epic! docket 314",
    "href": "https://freebeacon.com/wp-content/uploads/2026/05/Declaration-of-Will-Hailer.pdf",
    "kind": "Sworn statement",
    "group": "Court and campaign records",
    "date": "November 20, 2024"
  },
  "subpoenas": {
    "label": "Twelve-bank subpoenas · docket 413-3",
    "href": "https://storage.courtlistener.com/recap/gov.uscourts.deb.192047/gov.uscourts.deb.192047.413.3.pdf",
    "kind": "Court filing",
    "group": "Court and campaign records",
    "date": "Notice: March 21, 2025; filed April 23"
  },
  "ociComplaint": {
    "label": "OCI complaint · paragraphs 105–107",
    "href": "https://storage.courtlistener.com/recap/gov.uscourts.deb.200811/gov.uscourts.deb.200811.8.3.pdf",
    "kind": "Court allegations",
    "group": "Court and campaign records",
    "date": "May 5, 2025; reproduced April 28, 2026"
  },
  "plan": {
    "label": "Confirmed Byju’s Alpha plan · definition 58",
    "href": "https://storage.courtlistener.com/recap/gov.uscourts.deb.192034/gov.uscourts.deb.192034.517.1.pdf",
    "kind": "Confirmed plan",
    "group": "Court and campaign records",
    "date": "October 29, 2025"
  },
  "chapman": {
    "label": "OCI settlement motion and Chapman declaration",
    "href": "https://storage.courtlistener.com/recap/gov.uscourts.deb.200811/gov.uscourts.deb.200811.1.3.pdf",
    "kind": "Motion and sworn statement",
    "group": "Court and campaign records",
    "date": "November 15, 2025; reproduced March 13, 2026"
  },
  "cannabis": {
    "label": "Dakota Natural Growers complaint · 27-CV-22-18279",
    "href": "https://freebeacon.com/wp-content/uploads/2025/08/Badlands-Cannabis-Lawsuit.pdf",
    "kind": "Court allegations",
    "group": "Court and campaign records",
    "date": "December 12, 2022"
  },
  "fec": {
    "label": "FEC MUR 7639 · final certification",
    "href": "https://www.fec.gov/files/legal/murs/7639/7639_18.pdf",
    "kind": "FEC disposition",
    "group": "Court and campaign records",
    "date": "Decision: December 2, 2021"
  },
  "winery": {
    "label": "eStCru cancellation · BA20260753835",
    "href": "https://freebeacon.com/wp-content/uploads/2026/04/B4563-5607.pdf",
    "kind": "California filing",
    "group": "Court and campaign records",
    "date": "April 4, 2026"
  },
  "oversight": {
    "label": "Comer’s letter to Timothy Mynett",
    "href": "https://oversight.house.gov/wp-content/uploads/2026/02/Letter-to-Timothy-Mynett-.pdf",
    "kind": "Congressional letter",
    "group": "Court and campaign records",
    "date": "February 5, 2026"
  },
  "team": {
    "label": "Rose Lake team page · archived October 29, 2024",
    "href": "https://web.archive.org/web/20241029092132/https://www.roselakecap.com/team",
    "kind": "Archived firm website",
    "group": "Archived team"
  },
  "hailerBio": {
    "label": "Will Hailer · archived biography",
    "href": "https://web.archive.org/web/20241029092132/https://www.roselakecap.com/willhailer",
    "kind": "Archived firm website",
    "group": "Archived team"
  },
  "hoffman": {
    "label": "Alex Hoffman · archived biography",
    "href": "https://web.archive.org/web/20241029092132/https://www.roselakecap.com/hoffman",
    "kind": "Archived firm website",
    "group": "Archived team"
  },
  "pratt": {
    "label": "Justin Pratt · archived biography",
    "href": "https://web.archive.org/web/20241029092132/https://www.roselakecap.com/pratt",
    "kind": "Archived firm website",
    "group": "Archived team"
  },
  "healy": {
    "label": "Sheila Healy · archived biography",
    "href": "https://web.archive.org/web/20241029092132/https://www.roselakecap.com/healy",
    "kind": "Archived firm website",
    "group": "Archived team"
  },
  "legislation": {
    "label": "Rose Lake’s advertised expertise · May 6, 2024 archive",
    "href": "https://web.archive.org/web/20240506011810/https://www.roselakecap.com/",
    "kind": "Archived firm website",
    "group": "Archived team"
  },
  "derrough": {
    "label": "Jefferies announces Bill Derrough’s return",
    "href": "https://www.linkedin.com/posts/jefferies_welcometojef-activity-7432061746640695296-4_oT",
    "kind": "Employer statement",
    "group": "Reporting and responses",
    "date": "February 24, 2026"
  },
  "campaign": {
    "label": "E Street Group political payments · Fox News",
    "href": "https://www.foxnews.com/politics/consulting-firm-ilhan-omar-husband-payments-campaign",
    "kind": "Reporting",
    "group": "Reporting and responses",
    "date": "February 6, 2021"
  },
  "watchdog": {
    "label": "OCC recommendation · Wall Street Journal",
    "href": "https://www.wsj.com/politics/policy/ilhan-omar-cleared-of-wrongdoing-after-overstating-assets-by-millions-963eb6cf",
    "kind": "Reporting on confidential findings",
    "group": "Reporting and responses",
    "date": "September 9, 2026"
  },
  "watchdogVote": {
    "label": "OCC’s 5–1 vote · Minnesota Star Tribune",
    "href": "https://www.startribune.com/report-congressional-watchdog-clears-ilhan-omar-over-financial-disclosure-errors/601887629",
    "kind": "Reporting",
    "group": "Reporting and responses",
    "date": "September 9, 2026"
  },
  "federal": {
    "label": "Pirro’s disclosure investigation · Axios",
    "href": "https://www.axios.com/2026/10/13/ilhan-omar-investigation-finances-pirro",
    "kind": "Reporting",
    "group": "Reporting and responses",
    "date": "October 13, 2026"
  },
  "pirro": {
    "label": "Pirro’s public interview · America Reports",
    "href": "https://www.foxnews.com/video/6406773980112",
    "kind": "Interview",
    "group": "Reporting and responses",
    "date": "October 13, 2026"
  },
  "reformer": {
    "label": "Wine and cannabis disputes · Minnesota Reformer",
    "href": "https://minnesotareformer.com/2024/06/05/rep-ilhan-omars-husband-accused-of-swindling-investor-in-their-california-winery/",
    "kind": "Reporting",
    "group": "Reporting and responses",
    "date": "June 5, 2024"
  },
  "settlements": {
    "label": "Cannabis payoff · Minnesota Reformer",
    "href": "https://minnesotareformer.com/2024/08/01/former-democratic-operative-settles-1-2-million-debt-with-south-dakota-cannabis-growers/",
    "kind": "Reporting",
    "group": "Reporting and responses",
    "date": "August 1, 2024"
  },
  "followup": {
    "label": "Transfers, settlements and adviser responses · Free Beacon",
    "href": "https://freebeacon.com/democrats/us-anti-terror-agency-froze-funds-of-ilhan-omars-husband-during-biden-administration-partner-says-biden-doj-would-later-probe-omars-foreign-ties/",
    "kind": "Reporting",
    "group": "Reporting and responses",
    "date": "May 29, 2026"
  },
  "historicalTeam": {
    "label": "Peterson and Knuth’s historical listings · American Experiment",
    "href": "https://www.americanexperiment.org/ilhan-omars-current-husband-linked-to-south-dakota-weed-lawsuit/",
    "kind": "Historical reporting",
    "group": "Reporting and responses",
    "date": "February 24, 2023"
  },
  "oci": {
    "label": "OCI’s settlement and release statement",
    "href": "https://oci-group.co.uk/legal",
    "kind": "Company response",
    "group": "Reporting and responses",
    "date": "February 15, 2026"
  },
  "ivanhoe": {
    "label": "Ivanhoe Atlantic · shareholder and board overview",
    "href": "https://ivanhoeatlantic.com/about-us/",
    "kind": "Company statement",
    "group": "Mining appendix"
  },
  "proxy": {
    "label": "Ivanhoe Mines · 2024 management proxy",
    "href": "https://www.ivanhoemines.com/wp-content/uploads/2024_mngt_proxy_circular.pdf",
    "kind": "Company filing",
    "group": "Mining appendix",
    "date": "April 29, 2024"
  },
  "moolenaar": {
    "label": "Moolenaar’s letter to Secretary Rubio",
    "href": "https://chinaselectcommittee.house.gov/sites/evo-subsites/selectcommitteeontheccp.house.gov/files/evo-media-document/scc-letter-to-secretary-rubio-on-ivanhoe_120925.pdf",
    "kind": "Congressional letter",
    "group": "Mining appendix",
    "date": "December 9, 2025"
  },
  "fcc": {
    "label": "FCC · Covered List",
    "href": "https://www.fcc.gov/supplychain/coveredlist",
    "kind": "Agency record",
    "group": "Mining appendix"
  },
  "uflpa": {
    "label": "Zijin addition · Federal Register",
    "href": "https://www.govinfo.gov/content/pkg/FR-2025-01-15/html/2025-00901.htm",
    "kind": "Agency notice",
    "group": "Mining appendix",
    "date": "January 15, 2025"
  },
  "dhs": {
    "label": "DHS · current UFLPA Entity List",
    "href": "https://www.dhs.gov/uflpa-entity-list",
    "kind": "Agency record",
    "group": "Mining appendix"
  },
  "mynettBio": {
    "label": "Tim Mynett · archived biography",
    "href": "https://web.archive.org/web/20241029092132/https://www.roselakecap.com/mynett",
    "kind": "Archived firm website",
    "group": "Archived team"
  },
  "mestrich": {
    "label": "Keith Mestrich · archived biography",
    "href": "https://web.archive.org/web/20241029092132/https://www.roselakecap.com/mestrich",
    "kind": "Archived firm website",
    "group": "Archived team"
  },
  "ereli": {
    "label": "J. Adam Ereli · archived biography",
    "href": "https://web.archive.org/web/20241029092132/https://www.roselakecap.com/ereli",
    "kind": "Archived firm website",
    "group": "Archived team"
  },
  "committees": {
    "label": "Omar’s current committee assignments",
    "href": "https://omar.house.gov/about/committees-and-caucuses",
    "kind": "Official biography",
    "group": "Reporting and responses"
  },
  "workingGroup": {
    "label": "U.S.-Africa Policy Working Group",
    "href": "https://omar.house.gov/issues/us-africa-policy-working-group",
    "kind": "Official congressional page",
    "group": "Reporting and responses"
  }
} as const satisfies Record<string, Source>;
export type SourceId = keyof typeof sources;
export const sourceGroups: SourceGroup[] = ["Disclosures", "Court and campaign records", "Archived team", "Reporting and responses", "Mining appendix"];
export const sections = [
  {
    "id": "overview",
    "label": "Overview"
  },
  {
    "id": "papertiger",
    "label": "Disclosures"
  },
  {
    "id": "transfers",
    "label": "$11.25M Wires"
  },
  {
    "id": "players",
    "label": "The Network"
  },
  {
    "id": "money",
    "label": "Campaign Money"
  },
  {
    "id": "redflags",
    "label": "Litigation"
  },
  {
    "id": "status",
    "label": "Status"
  },
  {
    "id": "conflict",
    "label": "Questions"
  },
  {
    "id": "sources",
    "label": "Sources"
  }
];
export interface Disclosure { id: string; year: string; asset: string; value: string; income: string; filed: string; sourceId: SourceId; status: "Historical" | "Superseded" | "Amended" | "Latest annual" }
export const financialData: Disclosure[] = [
  {
    "id": "annual2022-0",
    "year": "2022",
    "filed": "May 15, 2023",
    "sourceId": "annual2022",
    "status": "Historical",
    "asset": "Rose Lake Capital LLC",
    "value": "$1–$1,000",
    "income": "None"
  },
  {
    "id": "annual2022-1",
    "year": "2022",
    "filed": "May 15, 2023",
    "sourceId": "annual2022",
    "status": "Historical",
    "asset": "eStCru LLC",
    "value": "$50,001–$100,000",
    "income": "None"
  },
  {
    "id": "annual2023-0",
    "year": "2023 · original",
    "filed": "May 14, 2024",
    "sourceId": "annual2023",
    "status": "Superseded",
    "asset": "Rose Lake Capital LLC",
    "value": "$1–$1,000",
    "income": "$15,001–$50,000"
  },
  {
    "id": "annual2023-1",
    "year": "2023 · original",
    "filed": "May 14, 2024",
    "sourceId": "annual2023",
    "status": "Superseded",
    "asset": "eStCru LLC",
    "value": "$15,001–$50,000",
    "income": "$201–$1,000"
  },
  {
    "id": "amendment2023-0",
    "year": "2023 · amended",
    "filed": "March 26, 2026",
    "sourceId": "amendment2023",
    "status": "Amended",
    "asset": "Rose Lake Capital LLC",
    "value": "None",
    "income": "$15,001–$50,000"
  },
  {
    "id": "amendment2023-1",
    "year": "2023 · amended",
    "filed": "March 26, 2026",
    "sourceId": "amendment2023",
    "status": "Amended",
    "asset": "eStCru LLC",
    "value": "None",
    "income": "$2,501–$5,000"
  },
  {
    "id": "original-0",
    "year": "2024 · original",
    "filed": "May 14, 2025",
    "sourceId": "original",
    "status": "Superseded",
    "asset": "Rose Lake Capital LLC",
    "value": "$5,000,001–$25,000,000",
    "income": "None"
  },
  {
    "id": "original-1",
    "year": "2024 · original",
    "filed": "May 14, 2025",
    "sourceId": "original",
    "status": "Superseded",
    "asset": "eStCru LLC",
    "value": "$1,000,001–$5,000,000",
    "income": "$5,001–$15,000"
  },
  {
    "id": "amendment-0",
    "year": "2024 · amended",
    "filed": "March 26, 2026",
    "sourceId": "amendment",
    "status": "Amended",
    "asset": "Rose Lake Capital LLC",
    "value": "None",
    "income": "$100,001–$1,000,000"
  },
  {
    "id": "amendment-1",
    "year": "2024 · amended",
    "filed": "March 26, 2026",
    "sourceId": "amendment",
    "status": "Amended",
    "asset": "eStCru LLC",
    "value": "None",
    "income": "$2,501–$5,000"
  },
  {
    "id": "annual-0",
    "year": "2025",
    "filed": "May 13, 2026",
    "sourceId": "annual",
    "status": "Latest annual",
    "asset": "Rose Lake Capital LLC",
    "value": "None",
    "income": "None"
  },
  {
    "id": "annual-1",
    "year": "2025",
    "filed": "May 13, 2026",
    "sourceId": "annual",
    "status": "Latest annual",
    "asset": "eStCru LLC",
    "value": "None",
    "income": "$201–$1,000"
  }
];
export interface Person { name: string; role: string; description: string; sourceIds: SourceId[] }
export const partners: Person[] = [
  {
    "name": "Will Hailer",
    "role": "Co-founder, CEO & partner",
    "description": "Former senior adviser to the DNC chairman and executive director of the Texas Democratic Party. His court declaration identifies him as Rose Lake Inc.’s CEO.",
    "sourceIds": [
      "hailerBio",
      "declaration"
    ]
  },
  {
    "name": "Tim Mynett",
    "role": "Co-founder & partner",
    "description": "Omar’s spouse and former E Street Group partner. Her disclosures list his Rose Lake Capital LLC interest and partnership income.",
    "sourceIds": [
      "mynettBio",
      "amendment"
    ]
  },
  {
    "name": "Alex Hoffman",
    "role": "Co-founder & partner",
    "description": "Founder of C-Street Strategies; formerly DNC chief of staff to the National Finance Chair and deputy chief of staff for finance.",
    "sourceIds": [
      "hoffman"
    ]
  },
  {
    "name": "Justin Pratt",
    "role": "Partner",
    "description": "Nebraska legislative aide with a law degree and a background at Charles Schwab, LinkedIn and Berkshire Hathaway, according to the archived biography.",
    "sourceIds": [
      "pratt"
    ]
  },
  {
    "name": "Sheila Healy",
    "role": "Partner",
    "description": "Former Arizona Democratic Party executive director, Obama campaign operative and adviser to Bernie Sanders, according to the archived biography.",
    "sourceIds": [
      "healy"
    ]
  }
];
export const advisors: Person[] = [
  {
    "name": "Keith Mestrich",
    "role": "Advisory chairman",
    "description": "Former CEO of Amalgamated Bank, listed as Rose Lake’s advisory chairman in the 2024 archive.",
    "sourceIds": [
      "mestrich"
    ]
  },
  {
    "name": "Bill Quesada Derrough",
    "role": "Advisor",
    "description": "Listed with Moelis in the 2024 archive. Jefferies announced his return as Managing Director and Chairman of Global Debt Advisory & Restructuring in February 2026.",
    "sourceIds": [
      "team",
      "derrough"
    ]
  },
  {
    "name": "J. Adam Ereli",
    "role": "Advisor",
    "description": "Former U.S. ambassador to Bahrain. His archived biography also lists international lobbying work at Mercury Public Affairs.",
    "sourceIds": [
      "ereli"
    ]
  },
  {
    "name": "Max Baucus",
    "role": "Listed advisor",
    "description": "Former senator, Senate Finance chairman and ambassador to China. He later described a proposed storage-unit deal with Hailer that did not materialize, according to reporting.",
    "sourceIds": [
      "team",
      "followup"
    ]
  },
  {
    "name": "J. Peter Pham",
    "role": "Advisor",
    "description": "Former U.S. special envoy for Africa’s Great Lakes and Sahel regions. Ivanhoe Atlantic now lists him as Executive Chairman & Interim CEO.",
    "sourceIds": [
      "team",
      "ivanhoe"
    ]
  }
];
export const timeline: { date: string; title: string; text: string; sourceId: SourceId }[] = [
  {
    "date": "June 21, 2024",
    "title": "$10 million arrives",
    "text": "OCI Limited wired $10 million from its Barclays account in the UK to Rose Lake Inc., according to Hailer’s sworn declaration.",
    "sourceId": "declaration"
  },
  {
    "date": "July 25, 2024",
    "title": "Another $1.25 million",
    "text": "Hailer describes a second OCI wire to Rose Lake Inc., bringing the total to $11.25 million.",
    "sourceId": "declaration"
  },
  {
    "date": "Mid-October 2024",
    "title": "Return instruction",
    "text": "Hailer says Byju Raveendran instructed him to return $11.25 million through Divya Gokulnath’s account. His declaration does not confirm a completed repayment.",
    "sourceId": "declaration"
  },
  {
    "date": "March 21, 2025",
    "title": "Twelve banks targeted",
    "text": "The lenders’ subpoena notice sought transaction records using Rose Lake and Hailer among its search terms. The notice was reproduced in an April 23 filing.",
    "sourceId": "subpoenas"
  },
  {
    "date": "May 5, 2025",
    "title": "Lenders challenge the transfers",
    "text": "Paragraphs 105–107 of the OCI complaint allege that the wires may have financed a loan buyback with Alpha funds.",
    "sourceId": "ociComplaint"
  },
  {
    "date": "October 29, 2025",
    "title": "Claims preserved",
    "text": "The confirmed Alpha plan lists Hailer as excluded party 69, preserving claims against him without deciding liability.",
    "sourceId": "plan"
  }
];
export const updates: { date: string; isoDate: string; title: string; kind: string; text: string; sourceIds: SourceId[] }[] = [
  {
    "date": "October 13, 2026",
    "isoDate": "2026-10-13",
    "title": "Pirro announces financial-disclosure investigation",
    "kind": "Public announcement",
    "text": "U.S. Attorney Jeanine Pirro announced that her office was investigating Omar’s financial disclosures. The announcement follows the March amendments and the congressional watchdog’s September recommendation to dismiss the disclosure allegations. The home search reported on October 12 concerned a separate matter.",
    "sourceIds": [
      "pirro",
      "federal"
    ]
  },
  {
    "date": "September 9, 2026",
    "isoDate": "2026-09-09",
    "title": "OCC recommends dismissal in a 5–1 vote",
    "kind": "Reported watchdog action",
    "text": "The Office of Congressional Conduct voted 5–1 to recommend dismissal of the disclosure allegations, according to the Minnesota Star Tribune. The Wall Street Journal reported reviewing the watchdog’s confidential findings. The reported action was an OCC recommendation to the House Ethics Committee.",
    "sourceIds": [
      "watchdogVote",
      "watchdog"
    ]
  },
  {
    "date": "May 13, 2026",
    "isoDate": "2026-05-13",
    "title": "2025 annual filing lists both business values as None",
    "kind": "House disclosure",
    "text": "Omar’s 2025 annual report lists both business asset values as “None,” no Rose Lake partnership income and $201–$1,000 from eStCru. The filing covers calendar year 2025.",
    "sourceIds": [
      "annual"
    ]
  },
  {
    "date": "April 4, 2026",
    "isoDate": "2026-04-04",
    "title": "eStCru files its certificate of cancellation",
    "kind": "California filing",
    "text": "eStCru filed its California cancellation certificate, BA20260753835, nine days after Omar amended the disclosures. William R. Hailer signed the certificate, which states that all members approved dissolution.",
    "sourceIds": [
      "winery"
    ]
  },
  {
    "date": "March 26, 2026",
    "isoDate": "2026-03-26",
    "title": "Two years of business disclosures amended",
    "kind": "House disclosures",
    "text": "Omar amended her 2023 and 2024 reports to list both business values as “None.” The 2024 amendment replaced the original Rose Lake income entry of “None” with $100,001–$1,000,000. The amended 2023 eStCru income rose from $201–$1,000 to $2,501–$5,000.",
    "sourceIds": [
      "annual2023",
      "amendment2023",
      "original",
      "amendment"
    ]
  },
  {
    "date": "February 5, 2026",
    "isoDate": "2026-02-05",
    "title": "Comer demands Mynett’s company records",
    "kind": "Congressional letter",
    "text": "House Oversight Chairman James Comer demanded audited financial statements, regulatory filings and business-travel records from Timothy Mynett. The letter covered travel involving the UAE, Somalia and Kenya and set a February 19 deadline.",
    "sourceIds": [
      "oversight"
    ]
  },
  {
    "date": "November 20, 2024",
    "isoDate": "2024-11-20",
    "title": "Hailer swears to the Rose Lake transfer account",
    "kind": "Historical sworn statement",
    "text": "Hailer’s declaration in the Epic! Creations bankruptcy described OCI’s two wires to Rose Lake Inc., totaling $11.25 million, and a later instruction to return the money through Divya Gokulnath’s account. The declaration did not confirm a completed repayment.",
    "sourceIds": [
      "declaration",
      "subpoenas",
      "plan"
    ]
  }
];
