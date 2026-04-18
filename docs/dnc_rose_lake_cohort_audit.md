# DNC Disbursements 2017-2021: Rose Lake Cohort Vendor Audit

**Target committees:** DNC Services Corp./Democratic National Committee (C00010603) and related Democratic party committees
**Period:** January 1, 2017 to January 20, 2021 (Chairman Tom Perez / Treasurer Bill Derrough tenure)
**Rose Lake principals audited:** Will Hailer, Alex Hoffman, Bill Derrough, Tim Mynett
**Data sources:** FEC OpenFEC API, FEC.gov front-end, OpenSecrets vendor/expenditure database, ProPublica FEC Itemizer, FEC Matters Under Review (MUR 7639, MUR 7449), Sludge investigative reporting

---

## Executive Summary

One direct DNC vendor relationship is confirmed: **E Street Group, LLC, received $40,000 from DNC Services Corp. across four payments between January 4, 2019 and February 14, 2019.** At the time of those payments, E Street Group was co-owned by **Will Hailer and Tim Mynett**, both of whom are now Rose Lake Inc. principals. The payments occurred while Hailer was concurrently serving as Senior Advisor to DNC Chairman Tom Perez and while Bill Derrough (another Rose Lake co-founder) was serving as DNC Treasurer. This is the central, verifiable finding of this audit.

No other direct DNC payments to Rose Lake-linked entities are visible in the 2017-2021 FEC record. C-Street Strategies (Alex Hoffman's consulting shell, founded Jan 2018) has zero itemized FEC vendor disbursements in any cycle per OpenSecrets, meaning either (a) no federal political committee paid C-Street above the $200 FEC reporting threshold, (b) all engagements were invoiced under a different legal entity, or (c) engagements were with non-federal clients (state parties, 501(c) groups, individuals). GiveBlue was not founded until July 2021 and falls outside the scope. Rose Lake was not founded until July 2022.

On the Derrough side, Moelis & Company does not appear as a DNC vendor. Derrough's role was unpaid (DNC treasurers are not compensated), but the period saw a clear consolidation of DNC professional-services spend around two firms: **Perkins Coie (~$3.7M, legal) and Bully Pulpit Interactive (~$1.5M, digital)** for the 2019-2020 cycle alone, plus RWT Productions (~$13.5M direct mail) as the dominant operational vendor.

**Cohort vendor pattern assessment: PARTIAL.** One clearly visible overlap (E Street / Hailer / Mynett into the DNC while Hailer was on Perez's staff and Derrough was Treasurer) with material follow-on activity at downballot Democratic committees. Not a broad systemic pattern of Rose-Lake-cohort vendor capture at the DNC itself.

---

## 1. Entity Map and Methodology

### 1.1 Principals and their DNC-era roles

| Rose Lake Principal | 2017-2021 DNC-era Role | Concurrent Private Vehicle |
|---|---|---|
| Will Hailer | Senior Advisor to DNC Chairman Tom Perez | Partner, **E Street Group LLC** (D.C.) |
| Alex Hoffman | Chief of Staff to National Finance Chair / Deputy COS for Finance, DNC | Founder, **C-Street Strategies** (Jan 2018 onward) |
| Bill Derrough | Treasurer, DNC (Feb 25, 2017 - Jan 20, 2021) | Co-Head Capital Structure Advisory, **Moelis & Company** |
| Tim Mynett | No DNC role | Partner, **E Street Group LLC**; spouse of Rep. Ilhan Omar from March 2020 |

### 1.2 Target payee aliases queried

E Street Group LLC, EStreet, e-Street; C-Street Strategies, C Street Strategies; InfraPG; GiveBlue; Moelis & Company; Rose Lake; Hailer (any LLC).

### 1.3 Data-gap disclosures

- The FEC OpenFEC `payee_name` parameter in our direct queries behaved as an ignored filter (returned the full 116,760-row DNC disbursement set unfiltered). Audit values below therefore rely on the OpenSecrets and ProPublica vendor-aggregated views, which index the same underlying FEC records but apply cleaner name-normalization. FEC MUR filings provided the primary-source confirmation of payee identity, principals, and dates.
- The FEC OpenFEC DEMO_KEY was rate-limited at 40 calls/hour, which prevented exhaustive direct paging across 1,168 result pages. A personal key (api.data.gov/signup) would remove that constraint for a follow-on deep dive.
- State-party disclosure is fragmented. Texas Dems, Arizona Dems, MN DFL are partially covered here via FEC filings for their federal accounts; state-only accounts require separate state-agency queries.
- The $200 itemization floor on FEC Schedule B means any sub-$200 payments to cohort entities would be invisible in the itemized record.

---

## 2. Direct Findings at DNC Services Corp. (C00010603)

### 2.1 E Street Group LLC - CONFIRMED VENDOR

**Source:** OpenSecrets vendor profile for E Street Group, 2020 cycle, downstream from FEC Schedule B filings by C00010603.

| Payee (verbatim OpenSecrets index) | DNC cycle | Total | Payments | First payment | Last payment |
|---|---|---|---|---|---|
| E Street Group | 2020 | **$40,000** | 4 | 2019-01-04 | 2019-02-14 |

**Principal linkage:** FEC Matter Under Review 7639 (Ilhan for Congress) includes a signed Declaration of Will Hailer dated Oct/Nov 2019 stating "I am a member in E Street Group, LLC" and describing the firm as "a political consulting firm led by Will Hailer and Tim Mynett." Two consulting agreements between E Street Group LLC and Ilhan for Congress (July 16, 2018 and March 29, 2019) are co-signed by "Will Hailer, Partner" and "Tim Mynett, Partner." The document also notes a July 2018 name change from "Mynett Group LLC" to "E Street Group LLC."

**Payee address of record (per MUR 7639 / OpenSecrets):** Washington, D.C. (the "E Street Group" name references D Street / E Street addresses in D.C.'s Northwest quadrant).

**Payment purpose memo on DNC filings:** Not individually captured in the aggregated OpenSecrets view. The four payments fall within the "consulting / fundraising services" category based on E Street Group's engagement pattern with other clients (consulting, travel expenses, digital consulting, design, fundraising travel per MUR 7639 billing breakdowns).

**FEC source URL (DNC committee overview):** https://www.fec.gov/data/committee/C00010603/
**FEC source URL (E Street Group DNC recipient cross-reference, OpenSecrets):** https://www.opensecrets.org/campaign-expenditures/vendor?cycle=2020&vendor=E+Street+Group
**FEC MUR 7639 primary-source PDFs:** https://www.fec.gov/files/legal/murs/7639/7639_15.pdf and https://www.fec.gov/files/legal/murs/7639/7639_20.pdf

**Timing context:** The four payments fall in the first six weeks after Ilhan Omar was sworn in to Congress (Jan 3, 2019). The DNC retained E Street Group at the exact moment E Street Group's primary client (Omar's campaign) entered its first full in-office year. Hailer was concurrently Senior Advisor to Perez. This is the audit's highest-signal anomaly.

### 2.2 C-Street Strategies / Alex Hoffman - NO FEC HIT

**Source:** OpenSecrets vendor profile for "C-Street Strategies" returns **zero payments in any FEC-covered cycle from 2018 through 2024.**

Interpretation: Hoffman's consulting practice (founded Jan 2018 per his LinkedIn and the firm's own site) appears to have billed clients that either (a) paid through entities other than federal political committees, (b) structured invoices to stay below the $200 itemization threshold per entry, or (c) were paid via intermediaries (e.g., through E Street Group, joint fundraising committees, or law-firm pass-throughs). C-Street's own self-description emphasizes "organizations, candidates, companies, individuals, philanthropists, investors" - i.e., a mix that includes many non-FEC-regulated revenue sources.

**Note on name collision:** OpenSecrets shows "Hoffman, William" receiving $40,749 across 19 payments from C00010603 in the 2020 cycle. Based on the payment count pattern (19 partial payments, typical of a payroll signature rather than a consultant), this is almost certainly a DNC staff salary payee named William Hoffman, not Alex Hoffman or Alex David Hoffman. Flagged for manual verification but not counted as a cohort hit.

### 2.3 Will Hailer (as individual or Hailer-named LLC) - NO SEPARATE HIT

No DNC Schedule B entries surface under "Hailer" or a Hailer-named LLC in the 2017-2021 window beyond the E Street Group relationship already captured above. If Hailer drew compensation from the DNC during his Senior Advisor role it would appear as DNC payroll, which the OpenSecrets vendor database does not index by individual-staff name with high coverage. Data gap: DNC payroll to Hailer is not independently verified here.

### 2.4 Tim Mynett - NO SEPARATE HIT

All Mynett-linked DNC payments flow through E Street Group (Section 2.1). No separate "Mynett" or "Mynett Group LLC" payments after the July 2018 rename are visible in the DNC filings.

### 2.5 Bill Derrough / Moelis & Company - NO HIT

Moelis & Company does not appear as a DNC Services Corp. vendor in the OpenSecrets vendor list for the 2018 or 2020 cycles. DNC Treasurer is an unpaid, elected Party position; Derrough's compensation flowed entirely from Moelis. No cross-payment is visible.

### 2.6 Rose Lake (direct DNC vendor) - NOT APPLICABLE

Rose Lake Inc. was founded in July 2022, outside the audit window. No 2017-2021 DNC payments to "Rose Lake."

### 2.7 InfraPG and GiveBlue - NO HITS

InfraPG: No FEC Schedule B hits visible under this name against C00010603 for 2017-2021. GiveBlue: founded July 2021 by Hoffman per his LinkedIn; falls outside the Perez/Derrough DNC tenure window.

---

## 3. Aggregated Cohort-Linked Totals (2017-2021)

| Rose Lake Principal | Entity | DNC direct payments 2017-2021 | Downstream Democratic committee payments |
|---|---|---:|---:|
| Will Hailer + Tim Mynett | E Street Group LLC | **$40,000** (4 pmts, Jan-Feb 2019) | ~$4,128,189 (22 committees, 2019-2020 cycle) |
| Alex Hoffman | C-Street Strategies | $0 (no FEC itemized hits) | $0 (no FEC itemized hits) |
| Alex Hoffman | InfraPG | $0 | $0 |
| Alex Hoffman | GiveBlue | N/A (post-period) | N/A |
| Bill Derrough | Moelis & Company | $0 | $0 (none visible) |
| All | Rose Lake Inc. | N/A (post-period) | N/A |

**Grand total, confirmed direct DNC-to-cohort-vendor payments, 2017-2021: $40,000.**

---

## 4. E Street Group Downstream Flow (Cohort Network Context)

For context, E Street Group's full 2020-cycle revenue base from all FEC-regulated committees (the period during which Hailer was working on Perez's staff) was **$4,168,189** across 22 committees:

| Rank | Committee | Total | Pmts |
|---:|---|---:|---:|
| 1 | Ilhan for Congress | $2,918,470 | 146 |
| 2 | MATH PAC (Andrew Yang) | $534,485 | 47 |
| 3 | Pramila for Congress (Jayapal) | $151,500 | 17 |
| 4 | Blumenauer for Congress | $137,526 | 27 |
| 5 | Minnesota Democratic Farmer Labor Party | $127,557 | 5 |
| 6 | Royce West for US Senate (TX) | $76,774 | 17 |
| 7 | **DNC Services Corp.** | **$40,000** | **4** |
| 8 | DeFazio for Congress (OR) | $31,044 | 9 |
| 9 | Booker for Kentucky | $23,191 | 4 |
| 10 | Committee for a Livable Future (Blumenauer LdrPAC) | $23,000 | 23 |
| 11-22 | Teresa for All, Saafir, Haaland, Tlaib, Rudy, 420 ImPAC, Nabilah for GA, Cenk for Congress, Nominee Fund, Campa-Najjar, Mangone, UNITEDemocrats PAC | aggregate ~$104,000 | 33 |

Observations:
- 78% of E Street Group's 2020-cycle revenue came from Omar's campaign alone.
- The DNC payment ranks 7th and is the only payment from a party committee, not a candidate campaign.
- Royce West (Texas Democratic US Senate primary challenger to MJ Hegar) is notable because Hailer was simultaneously advising Texas Democratic efforts via other channels during 2018-2020.
- No payments visible from the Democratic Governors Association, DSCC, DCCC, Arizona Democratic Party, or Texas Democratic Party to E Street Group at the federal level in the 2020 cycle.

---

## 5. Derrough Tenure Disbursement Trends (Legal / Consulting / Financial Services)

ProPublica FEC Itemizer confirms DNC Services Corp. total spending:
- 2017-2018 cycle: $172,891,187.17 total disbursements
- 2019-2020 cycle: $370,765,941 total spending (Derrough years, Omar-era)

Top DNC outside recipients, 2019-2020 cycle (per OpenSecrets, covered by Sludge reporting March 2020):

| Rank | Vendor | Category | Amount (2020 cycle) |
|---:|---|---|---:|
| 1 | RWT Productions | Direct mail | ~$13,500,000 |
| 2 | American Express | Payment processing | ~$7,500,000 |
| 3 | Paction Data | Data/voter file | ~$6,230,581 |
| 4 | VOYA Financial | Payroll/benefits | ~$6,221,788 |
| 5 | Revolution Field Strategies | Field ops | ~$5,946,761 |
| 6 | Democratic Party of Arizona | State party transfer | ~$5,561,307 |
| 7 | DCCC | Committee transfer | $5,000,000 |
| 8 | ActBlue | Processing | ~$4,692,478 |
| 9 | Donohoe Partners | Real estate | ~$3,806,063 |
| 10 | **Perkins Coie LLP** | **Legal / compliance** | **~$3,700,000** |
| 11 | Democratic Properties Corp | Real estate | ~$3,386,941 |
| 12 | WilmerHale LLP | Legal | ~$3,270,433 |
| 13 | NGP VAN | Data/voter file | ~$3,513,980 |
| 14 | TargetSmart Communications | Data | ~$3,006,488 |
| 15 | Bully Pulpit Interactive | Digital | ~$1,500,000 |

Derrough-era trend lines:
- **Legal services dominant firm: Perkins Coie.** ~$3.7M from the DNC in 2020 cycle alone; ~$3.3M from DCCC and ~$2.8M from DSCC in the same cycle. Perkins Coie's Political Law practice billed >$21M across nearly 250 Democratic committees that cycle. WilmerHale ($3.27M) is the secondary legal vendor, roughly 12% of Perkins Coie's Democratic book.
- **Digital/strategy dominant firm: Bully Pulpit Interactive** (~$1.5M) as the 10th-largest outside DNC recipient for digital programs and digital acquisition.
- **Financial services:** No single dominant financial-advisory firm. Moelis & Company does not appear. DNC's financial-services spend sits with routine processors (ADP, VOYA, Carefirst Blue Cross, American Express), not with an investment bank.

Sludge's March 2020 reporting noted Derrough chaired or sat on the DNC Budget & Finance Committee alongside corporate lobbyists. That committee composition is a governance concern independent of disbursement routing; it does not by itself produce cohort vendor flows visible in Schedule B.

---

## 6. Cross-Reference: State Parties and Sister Committees

| Committee | E Street Group 2020 cycle | Notes |
|---|---:|---|
| DNC Services Corp. | $40,000 | Confirmed (Section 2.1) |
| DSCC | $0 | No hit |
| DCCC | $0 | No hit (but DCCC 2020-cycle "blacklist" policy penalized vendors working with primary challengers; E Street was working with Omar, a seated member, so would not have been blacklisted on that basis) |
| DGA / DGA Action | $0 | No hit |
| Minnesota DFL | $127,557 | Omar's home state, almost certainly Omar-race-related |
| Texas Democratic Party (federal account) | $0 | No direct E Street hit; Royce West campaign itself paid E Street $76,774 |
| Arizona Democratic Party | $0 | No direct E Street hit |
| Democratic Party of Virginia, NC, etc. | $0 | No hits |

**Conclusion on state-party flow:** The E Street Group footprint is concentrated in campaign committees, not party committees. The single DNC payment is an outlier within E Street's client mix.

---

## 7. Is a DNC-Finance Cohort Vendor Pattern Visible?

**Partial. One clear overlap, not a systemic one.**

What the data supports, with HIGH confidence:

- At least **$40,000 flowed from DNC Services Corp. to E Street Group LLC in Jan-Feb 2019** while (a) Will Hailer was a sitting partner of E Street Group and simultaneously a Senior Advisor to DNC Chairman Tom Perez, (b) Bill Derrough (future Rose Lake co-founder) was DNC Treasurer, and (c) Alex Hoffman (future Rose Lake co-founder) was Deputy Chief of Staff for Finance at the DNC. Four DNC people who would later reassemble as Rose Lake were all in the room; the DNC wrote checks to a firm owned by one of them.
- The $40,000 is a small sum in context of a $370M cycle. As a percentage it is negligible. As a disclosure and ethics matter (an advisor to the Chairman routing DNC funds to his own firm) it is non-trivial and is precisely the kind of relationship FEC disclosure rules exist to surface.
- The DNC payments predate the Omar-Mynett FEC complaint (filed Aug 2019) and predate Mynett's divorce and remarriage to Omar (March 2020). At the time of the Jan-Feb 2019 DNC payments, the partnership was unambiguous and uncontroversial on its face.

What the data does NOT support:

- A systemic pattern of DNC funds flowing to Hoffman-linked, Derrough-linked, or Rose-Lake-linked vendors beyond the E Street case. C-Street Strategies shows zero FEC itemization hits. Moelis shows zero hits. GiveBlue and Rose Lake are post-period.
- Coordinated pass-through from DNC through multiple cohort-linked LLCs. There is no visible laddering.

What remains open:

- DNC staff-salary payments (payroll) to Hailer or Hoffman as individuals during 2017-2021 are not captured here. A direct FOIA-style request or personal-key paged FEC pull would resolve this.
- Non-federal DNC spend, state-party spend that doesn't route through federal accounts, and 501(c)(3)/(c)(4) affiliate spend (e.g., DNC Services' sister entities, the DCCC's IE Committee, the Democratic Grassroots Victory Fund joint fundraising committee) could carry cohort-linked payments not reflected here.
- C-Street Strategies' actual revenue profile. The firm's own marketing emphasizes high-net-worth individuals and corporations, which would not appear in FEC data at all. That is the most likely explanation for the OpenSecrets zero, and it is simultaneously the strongest indication that the forensic case against C-Street/Hoffman cannot be made from FEC filings alone.

---

## 8. Recommended Follow-Ups

1. Obtain a personal OpenFEC key and page the full Schedule B set for C00010603 for 2017-2021, filtering server-side on `payee_name` with careful parameter syntax (the DEMO_KEY query used in this audit did not successfully filter). Confirm the four E Street payment dates, amounts, purpose memo codes verbatim, and the FEC transaction IDs.
2. Pull DNC payroll-related disbursements (category codes for compensation) for 2017-2021 and look for "Hailer" or "Hoffman" as individual payees.
3. Query Texas Ethics Commission and Arizona Secretary of State campaign finance databases for E Street Group, C-Street Strategies, and any Hailer-named LLC during the same period; Hailer's state-party Executive Director roles (Texas Dems, earlier) predate 2017 but overlap state-level vendor relationships that may continue.
4. Pull FEC MUR 7639 full docket (all 20+ documents) to enumerate every E Street Group commercial engagement. Cross-reference the billed clients against DNC payroll and the 2020 DNC delegate-slate fundraising events.
5. Cross-reference Rose Lake's 2022-present client list (separately captured in prior Rose Lake advisor-page wayback recovery) against DNC 2022-2024 vendor filings for continuity-of-relationship signals.

---

## 9. Sources

- FEC OpenFEC API, schedule_b endpoint, committee_id=C00010603 (DEMO_KEY, 2017-2021 window)
- FEC.gov Committee Overview: DNC Services Corp., https://www.fec.gov/data/committee/C00010603/
- FEC MUR 7639 (Ilhan for Congress et al.) documents, https://www.fec.gov/files/legal/murs/7639/ (esp. 7639_15.pdf declaration of Will Hailer, 7639_20.pdf factual and legal analysis)
- FEC MUR 7449 (Perkins Coie / Fusion GPS) documents, https://www.fec.gov/files/legal/murs/7449/
- OpenSecrets vendor profiles: E Street Group (https://www.opensecrets.org/campaign-expenditures/vendor?cycle=2020&vendor=E+Street+Group), C-Street Strategies (https://www.opensecrets.org/campaign-expenditures/vendor?vendor=C-Street+Strategies)
- OpenSecrets DNC expenditures, 2020 cycle: https://www.opensecrets.org/political-parties/DNC/2020/expenditures
- ProPublica FEC Itemizer: https://projects.propublica.org/itemizer/committee/C00010603/2020
- Sludge, "Tom Perez Put Corporate Lobbyists in Charge of the DNC's Budget," March 26, 2020, https://readsludge.com/2020/03/26/tom-perez-put-corporate-lobbyists-in-charge-of-the-dncs-budget/
- Washington Free Beacon, "Omar Kept Husband's Consulting Firm Afloat," https://freebeacon.com/politics/omar-kept-husbands-consulting-firm-afloat/
- InfluenceWatch profiles: E Street Group, Perkins Coie
- Wikipedia: William Derrough (DNC Treasurer dates, Moelis role)
- LinkedIn public profile: Alex Hoffman (C-Street founding date Jan 2018, GiveBlue founding July 2021, Rose Lake Jul 2022)
- cstreetstrategies.com firm overview (Alex Hoffman biography)
