# Cursor Prompt: Rep Omar Site — April 2026 Update

Copy the block below into Cursor (Composer or chat) with the repo open. It's written to be self-sufficient: Cursor should be able to find the right files, add the content, and wire up any new routes without back-and-forth.

---

## PROMPT TO PASTE INTO CURSOR

You are updating my Next.js opposition-research site, rep-omar.vercel.app. The site was originally published December 2025. We are now adding the **April 2026 Update** tranche: new primary-source exhibits, factual corrections, and one tonal shift (the Feb 5, 2026 House Oversight Committee letter must be framed as a post-publication update, not rewritten into the original narrative).

Before you write code, scan the repo and tell me:
1. The content format (MDX, TSX with strings, headless CMS, etc.)
2. Where the "Paper Tiger", "Players", and "Sources & Citations" sections live
3. Whether there is an existing Update/Changelog component or if I need one built

Then apply the five changes below. Each change lists placement, exact content, and the sources that must be footnoted. Preserve my existing tone (measured, allegation-vs-finding language, no hyperbole). Use `<Update>` or an equivalent visually-distinct callout for items flagged **POST-PUBLICATION UPDATE**. Date-stamp those callouts with "Updated: April 2026" so a reader can see the original site predated the development.

---

### CHANGE 1 — Add a site-wide "Updates" banner on the landing page

**Placement:** Top of home/landing view, below the hero, above Overview.

**Component behavior:** Dismissible banner or pinned notice. Links to a new `/updates` page (create it if it does not exist).

**Copy:**
> **April 2026 Update** — Since this site was first published in December 2025, the U.S. House Committee on Oversight and Government Reform opened an inquiry into Rep. Omar's financial disclosures, and new sworn testimony from Rose Lake's named advisor has entered the public record. [Read the update →](/updates)

---

### CHANGE 2 — New `/updates` page (or Changelog section)

**Route:** `/updates`

**Page title:** "Updates Since Publication"

**Intro paragraph:**
> This site was first published in December 2025. The developments below post-date original publication and are reported here as updates rather than rewritten into the original pages. All original text remains intact for transparency.

**Entry 1 (most prominent):**

**Headline:** House Oversight Committee Opens Inquiry — February 5, 2026

**Body:**
> On February 5, 2026, House Oversight and Government Reform Committee Chairman James Comer (R-KY) sent a letter to Rep. Ilhan Omar requesting records related to her husband's business interests in Rose Lake Capital and related entities. The letter references concerns that the valuation reported on her 2024 Financial Disclosure ($5,000,001–$25,000,000 for the Rose Lake stake) may not be substantiated by the underlying entities' publicly available financial activity.
>
> This is a committee inquiry, not a finding of wrongdoing. Rep. Omar's office has stated that the disclosures comply with House rules.

**Link:** Embed a PDF exhibit link titled "House Oversight Letter to Rep. Omar (Feb 5, 2026)" once I provide the PDF. For now, add a placeholder: `/exhibits/oversight-letter-2026-02-05.pdf` and a TODO comment so I can drop the file in later.

**Entry 2:**

**Headline:** Sworn Bankruptcy Testimony Contradicts Disclosure Valuation

**Body:**
> On November 21, 2024, E.J. Hailer — named on Rose Lake's website as the firm's principal operating partner — gave sworn testimony in the Voizzit Information Technology Chapter 11 proceeding (U.S. Bankruptcy Court, District of Delaware). Under examination, Hailer testified that Rose Lake had a combined bank balance of approximately $42.44 at the time of the examination, that the firm had "no AUM as a legal term of art," and that the combined asset base of the Rose Lake entities was under $1 million.
>
> This sworn testimony predates Rep. Omar's May 2025 Financial Disclosure, which reported her husband's Rose Lake stake at a value between $5 million and $25 million. The apparent contradiction is the subject of the House Oversight inquiry referenced above.

**Link:** Exhibit placeholder `/exhibits/hailer-341-transcript-2024-11-21.pdf`.

**Entry 3:**

**Headline:** Delaware and DC Entity Records — Status Check

**Body:**
> A review of Delaware Secretary of State ICIS filings confirms three Rose Lake entities:
> - **Rose Lake Holdings LLC** — DE File #6890594, formed June 30, 2022, agent VCORP Services, Good Standing
> - **Rose Lake Capital LLC** — DE File #6954979, formed August 5, 2022, agent VCORP Services, Good Standing in Delaware but currently listed on the District of Columbia Entity Revocation List (DC file #C00007470247)
> - **Rose Lake Inc.** — DE File #7246289, formed January 19, 2023, registered agent unassigned, status unknown
>
> Entity status is a matter of public record and does not by itself establish wrongdoing.

---

### CHANGE 3 — Update the "Paper Tiger" section

**Placement:** Inside the existing Paper Tiger section, add a callout box or sidebar immediately after the current valuation paragraph. Use a visually-distinct container (border, shaded background, a label reading "Post-Publication Update • April 2026").

**Callout content — "Sworn Testimony vs. Disclosure Filing":**

Two-column layout if your styling supports it, otherwise stacked:

**Left column / top:** _Sworn testimony, November 21, 2024_
- "Approximately $42.44" combined bank balance across Rose Lake entities
- "No AUM as a legal term of art"
- Combined assets under $1 million
- Source: U.S. Bankruptcy Court D. Del., Voizzit Chapter 11 Section 341 examination transcript of E.J. Hailer

**Right column / bottom:** _Financial Disclosure, May 2025_
- Spouse's Rose Lake stake valued at $5,000,001–$25,000,000
- Signed under penalty of false-statement statutes
- Source: U.S. House Clerk, Rep. Omar 2024 Annual Financial Disclosure

**Caption under the callout:**
> Both figures are from public records. The discrepancy between the two is the factual basis of the February 2026 House Oversight inquiry. Reconciliation is a matter for the committee process.

---

### CHANGE 4 — Correct advisor names in the "Players" and "Connection Map" sections

Do a careful find-and-replace across the content layer. Do **not** replace blindly across the whole repo (risk of hitting props or route names). Limit to content files (MDX, TSX content strings, data JSON).

| Current (incorrect) | Replace with |
|---|---|
| Mark Hoffman | Alex Hoffman |
| Kent Mestrich | Keith Mestrich |
| John Phil Pham, John Pham | J. Peter Pham |
| Carter Pratt | Justin Pratt |
| Rich Healy | Sheila Healy |
| Philippe Derrough | William "Bill" Derrough |

For each corrected name, add a short credential line from public sources if one is not already present:
- **Alex Hoffman** — Former counsel and campaign finance attorney, Perkins Coie; DNC-adjacent work
- **Keith Mestrich** — Former President and CEO, Amalgamated Bank (2014–2020)
- **J. Peter Pham** — Former U.S. Special Envoy for the Sahel Region (2020–2021) and Great Lakes Region of Africa (2018–2020), U.S. Department of State
- **Justin Pratt** — Former Senate staff; founder, Pratt Policy
- **Sheila Healy** — Former Chief of Staff to Rep. Nick Joe Rahall II (D-WV)
- **William "Bill" Derrough** — Former Treasurer, Democratic National Committee (2017–2021); Co-Head of Recapitalization and Restructuring, Moelis & Company

Leave a TODO comment at each corrected entry noting "credential line pending verification" so I can re-check before publish.

---

### CHANGE 5 — Expand the Sources & Citations section

Add the following sources to the existing citations block, grouped under a new subheading **"April 2026 Update Sources"**:

- U.S. House Committee on Oversight and Government Reform, Letter from Chairman James Comer to Rep. Ilhan Omar, February 5, 2026 [exhibit pending upload]
- U.S. Bankruptcy Court, District of Delaware, In re Voizzit Information Technology LLC, Chapter 11 Section 341 examination of E.J. Hailer, November 21, 2024 [exhibit pending upload]
- Delaware Secretary of State, Division of Corporations, Entity Search (icis.corp.delaware.gov), file numbers 6890594, 6954979, 7246289
- District of Columbia Department of Licensing and Consumer Protection, Entity Revocation List, file C00007470247
- U.S. House Clerk, Rep. Ilhan Omar Annual Financial Disclosure (filed May 2025)

---

### OUT OF SCOPE — do not change

- Do not edit the "China Connection" section (separate thread, not part of this update)
- Do not modify the legal disclaimer block
- Do not change copyright or author attribution
- Do not alter any allegation-vs-finding language in the existing Overview
- Do not rewrite original December 2025 content to fold the April 2026 developments into the past tense… they must be clearly time-stamped as updates

---

### DELIVERABLES

When you finish, report back with:
1. A diff summary (files touched, lines added/removed)
2. Any new components you created
3. The list of TODO comments you left, so I can triage them
4. A single command I can run locally to preview the updates page (e.g., `npm run dev`)

Ask me before pushing to the main branch. Open a PR or a new branch named `april-2026-update` for review.

---

## END OF CURSOR PROMPT
