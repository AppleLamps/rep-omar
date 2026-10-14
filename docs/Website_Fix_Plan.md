# Final website repair plan

Prepared October 13, 2026 (America/New_York). Reviewed live homepage and `/updates`, all application source files, the attached investigation report, and the records cited below. Repository baseline: `562ba8431c22c550706626ecbb35d98ff4ce0f7b`.

This document specifies the implementation. Application code and production have not been changed during this review. Earlier research notes in `docs/` contain assumptions and superseded instructions; they must not override this verification ledger.

## 1. Decisions

Keep the site's explicitly conservative, partisan investigative focus and its red, slate and white identity. Headlines and analysis should make the critical argument forcefully, with documentary support. Put the transfer evidence, disclosure changes and documented court activity first. Correct the biographies, replace unsupported conclusions with specific documentary questions, and make each material statement easy to trace to its source.

The next release must include the missing **2023 amended disclosure**, not just the 2024 amendment. It must also fix the broken lint command and update the installed dependencies. The top notices already align correctly; preserve that work and the smaller legal notice.

Move the Ivanhoe material to a dated research appendix. Preserve its verified records and the advisor connection, while keeping ownership links and money flows distinct.

Unavailable bank records, an unavailable judgment-satisfaction document, and unavailable accounting attachments do not block the website repair. Claims that depend on them stay out of factual summaries.

## 2. Verified content and required changes

### Disclosures

The following is the complete business comparison to implement. Values are the entries reported for the spouse's assets. Income is partnership income. These are not exact enterprise valuations or a household net-worth calculation. Preserve the literal entry `None`.

| Calendar year / version | Filed | Filing | Rose Lake value | Rose Lake income | eStCru value | eStCru income |
| --- | --- | --- | --- | --- | --- | --- |
| 2022 annual | May 15, 2023 | [10053193][D22] | $1–$1,000 | None | $50,001–$100,000 | None |
| 2023 original | May 14, 2024 | [10060937][D23] | $1–$1,000 | $15,001–$50,000 | $15,001–$50,000 | $201–$1,000 |
| **2023 amended** | **March 26, 2026** | [10074577][D23A] | **None** | $15,001–$50,000 | **None** | **$2,501–$5,000** |
| 2024 original | May 14, 2025 | [10068415][D24] | $5,000,001–$25,000,000 | None | $1,000,001–$5,000,000 | $5,001–$15,000 |
| 2024 amended | March 26, 2026 | [10073338][D24A] | None | $100,001–$1,000,000 | None | $2,501–$5,000 |
| 2025 annual | May 13, 2026 | [10077400][D25] | None | None | None | $201–$1,000 |

The current nine-row table becomes twelve asset rows. Label both original 2023 rows as superseded. Add the omitted 2022 eStCru row. Add filing date, filing identifier and a source link to each row/card. Change the ambiguous `Type` column to `Income type`; the current code derives “Partnership” from income, not an independent determination of legal entity type.

Update the disclosure section, valuation comparison, summary cards and `/updates` together. Use one shared dataset so the amendment cannot disappear from one view. Include the additional spouse-wages entries in the 2023 form only if the site expands beyond its current partnership-income comparison; do not imply the displayed table covers every income schedule.

### People and entities

| Current problem | Verification | Implementation |
| --- | --- | --- |
| Alex Hoffman described as a Perkins Coie attorney | [Archived biography][AH] identifies C-Street Strategies, GiveBlue and former DNC finance leadership. It does not support that attorney description. | Remove the attorney claim. Show archived co-founder/partner role and sourced political background. |
| Justin Pratt described as Senate staff and founder of Pratt Policy | [Archived biography][JP] identifies a Nebraska legislative aide, law degree and work at Schwab, LinkedIn and Berkshire Hathaway. | Remove the federal Senate and Pratt Policy claims, including the “upper-chamber access” conclusion. |
| Sheila Healy described as Rahall's chief of staff | [Archived biography][SH] identifies Arizona Democratic Party leadership, Obama campaign work and advising Sanders. | Replace the Rahall claim and its related explanation. |
| Bill Derrough's Moelis job presented as current | [Jefferies' February 24, 2026 announcement][BD] and [professional directory][BDDIR] identify his current Jefferies role. | Label Moelis as the job listed in the 2024 archive; use Jefferies for current employment. |
| Partners mixed into an advisor list | [October 29, 2024 team archive][TEAM] lists five founders/partners and five advisors. | Separate those groups. Add J. Adam Ereli, currently omitted. Date every roster. |
| Peterson and Knuth treated as undated associations | [February 2023 reporting][AE] supports historical listings. They are absent from the October 2024 team archive. | Retain in a historical roster with the earlier date; do not imply current service. |
| Pham's current title is incomplete | [Ivanhoe Atlantic's current board page][IA] lists Executive Chairman & Interim CEO. | Distinguish his current company title from his historical Rose Lake listing. |
| Hailer's Rose Lake title lacks entity precision | [Declaration][HAILER] names him CEO of Rose Lake Inc.; [archived biography][WH] supplies historical political roles. | Name Inc. where supported. Remove the uncited Al Franken detail unless a specific source is supplied. |
| Baucus listing implies an active agreement | [Follow-up reporting][FBFOLLOW] describes his account of a proposed deal that did not materialize. | Say the archived site listed him; link the reported response. Do not claim a paid or active arrangement. |
| Mynett's “Africa trips” assertion lacks a specific trip | No dated itinerary documenting that particular assertion was recovered. | Remove that line. Restore only with a dated trip record establishing his presence. |
| Entity table omits the wire recipient | Declaration and disclosures distinguish Inc. from Capital LLC. | Add Rose Lake Inc. and separate it from the disclosed LLC. |
| Business location is called a jurisdiction; LLC called a holding company | House forms say Washington, DC and “Venture Capital Management.” | Separate formation jurisdiction, reported location and business description. Leave unsupported fields blank or explicitly unverified. |

Replace generic descriptions about “Washington weight,” “green positioning,” and implied legislative access with dated roles and their specific relevance. Remove the five pending-verification TODO comments after correcting the records. The archived biographies establish what the firm represented at that time, not independent proof of every promotional achievement.

### Payments, court records and procedural status

| Item | Verified result | Website action |
| --- | --- | --- |
| E Street payment share | [Original reporting][ESTREET] measures political payments, not total revenue. | Correct the denominator or omit the percentage. |
| FEC disposition | [MUR 7639 certification][FEC] records a December 2, 2021 6–0 decision: no reason to believe personal conversion or improper payee reporting; dismiss purpose allegation; amend purpose reporting as needed; close file. | Replace the vague dismissal sentence with the actual disposition and date. |
| “Structuring legislation” quotation | [May 6, 2024 archive][HOMEARCH] says: “Our expertise includes structuring deals, legislation, mergers and acquisitions, debt restructuring and capital raising.” | Restore exact wording. Remove unsupported removal timing and the asserted proof of intent. |
| Incoming wires | [Hailer declaration][HAILER], pp. 4–6, describes $10 million June 21 and $1.25 million July 25, 2024, to Rose Lake Inc. from OCI through Barclays. | Retain prominently as sworn testimony; use PDF page links. |
| Requested return | Same declaration, pp. 13–14, describes an instruction to return the money through Divya Gokulnath's account. | Keep the instruction distinct from an executed transfer. |
| Bank subpoenas | [Notice and subpoenas][BANKS] dated March 21, 2025 request records from twelve banks and include Rose Lake and Hailer search terms. Reproduced in an April 23 filing. | Add dated court activity and a direct source. Separate notice date from filing date. |
| Lenders' theory | [OCI complaint][OCICOMPLAINT], paragraphs 105–107, discusses the Rose Lake transfers and possible Alpha-funds financing. | Attribute the theory to the complaint. Do not present it as completed tracing or a court finding. |
| Reserved claims | [Confirmed Alpha plan][PLAN], definition 58, includes Hailer as excluded party 69 and preserves claims. | Add the October 29, 2025 plan's treatment. This is not a judgment against him or evidence that a lawsuit was filed. |
| OCI's accounting | [Chapman declaration][CHAPMAN], scanned final three pages, accounts for approximately $505.9 million; paragraph 8 is undated and does not name Rose Lake. | Add a brief sourced account of the gap. Do not assign the 2024 wires to that bucket. |
| OCI settlement | Settlement motion proposes releasing OCI and Chapman; it keeps claims against Banker pending. [OCI statement][OCI] claims approval January 23, 2026. | Cite motion and company statement separately. Independent approval order was not recovered. Do not treat a settlement as a merits judgment. |
| Cannabis litigation | [Minnesota complaint][CANNABIS] establishes case 27-CV-22-18279. [June][REFJUNE] and [August 2024][REFAUG] reporting describe an earlier settlement/default and a later collection resolution. | Separate the 2023 settlement/judgment from the 2024 payoff reporting. Do not call the original settlement a 2024 event. |
| Cannabis payoff timing | Follow-up reporting puts payment in July 2024; August 1 is publication date. Exact July 15 satisfaction document remains unavailable. | Remove “timing follows the wires.” Keep month-level reporting until Index #21 is obtained. |
| Wine litigation outcome | [Follow-up reporting][FBFOLLOW] attributes a November 2024 settlement/payment to Mohd's attorney. | Attach the source directly. Show allegation, reported settlement and outcome together. |
| eStCru cancellation | [Reproduced California filing][CANCEL] has file BA20260753835, April 4, 2026, Hailer's signature and approval by all members. | Link the filing itself, alongside coverage. |
| Federal inquiry | [Pirro interview page][PIRRO] and [Axios reporting][AXIOS] support the October 13 announcement. | Keep in a prominent dated status panel. Keep the separate home-search matter separate. |
| OCC action | [Star Tribune reporting][OCC] says 5–1 recommendation to dismiss. | Preserve as reported watchdog action. A current final House Ethics disposition was not located; do not substitute the unrelated 2022 matter. |
| Oversight letter | [February 5 letter][OVERSIGHT] is addressed to Mynett and sets February 19 deadline. | Retain correct recipient/date and add to court/congressional timeline. Do not claim production or noncompliance without a record. |

Rename the Money Trail subtitle to cover payments, disclosures and transfers. “Investment returns” currently implies a flow the reviewed records do not demonstrate.

## 3. Disposition of the attached report's thirteen findings

| Finding | Verification status and publication decision |
| --- | --- |
| 1. Two incoming wires | Confirmed as Hailer's sworn account in docket 314; retain attributed. |
| 2. Barclays account received Alpha money in 2022 | [Revere complaint][REVERE] alleges the account transfers; Chapman supplies receipt amounts. A 2022 receipt does not identify the source of the 2024 wires. |
| 3. Return instruction | Confirmed as sworn account. Execution remains unestablished. |
| 4. July 15 judgment satisfaction | Not independently verified. Report cites Minnesota Index #21 without attaching it. Search located the complaint and earlier judgment reference, not satisfaction. Exclude the exact date for this release. |
| 5. Wires funded the payoff | Not established. February balances and later timing do not trace a July payment. Publish as a documentary question, not a finding. |
| 6. Twelve-bank subpoenas | Directly verified in the notice and search-term attachments. Add. |
| 7. Lenders' Alpha-funds theory | Directly verified as an allegation in paragraphs 105–107. Add attributed. |
| 8. Plan preserves claims | Directly verified in the confirmed plan. Add with the plan date and procedural meaning. |
| 9. No federal lawsuit against specified parties | Report's search is not an exhaustive docket determination. Omit the universal negative and the speculative explanation for absence of suit. |
| 10. Chapman outflows | Verified visually from the signed declaration. Its amounts reconcile to within five cents. It does not trace Rose Lake, and paragraph 8 has no transaction date. The “only place they fit” conclusion is unsupported. |
| 11. $213,200 distributions | No accessible original accounting attachment or article establishing this exact figure was recovered. Exclude the exact figure; use the official disclosed range. |
| 12. LLC “underneath” Inc. | Official claims-agent search excerpt supports that phrase. Full transcript retrieval failed (502); the cited RECAP copy returned 404. Require full transcript before adding a formal ownership edge. |
| 13. November shutdown testimony | Full transcript was not recovered. Cancellation filing is verified independently. Keep the filing; withhold the asserted testimony/disclosure contradiction until transcript pages are available. |

Other report details to hold: exact February bank balances as independently checked court facts; Delaware forfeiture dates and tax amounts; shareholder percentages of the two Rose Lake entities; accounting valuations and ownership fractions derived from unseen attachments. These can remain research leads, with sources and access limits, rather than become new headline facts.

Do not publish the report's proposed correction that Nebraska was *only* the notarization location. Both Reformer reports and the follow-up describe Nebraska collection proceedings. A Minnesota judgment satisfaction would not disprove a separate Nebraska resolution.

The trustee reply reproduces a credibility quotation with a bracketed insertion mentioning Hailer. It does not establish that the judge adjudicated the transfer allegations. Leave that proposed credibility argument out of the summary.

## 4. Ivanhoe appendix

Create `/research/ivanhoe` and replace the long homepage China section with a short, sourced link explaining the historical advisor connection.

| Issue | Verified record and action |
| --- | --- |
| Common leadership and majority shareholder | [Ivanhoe Atlantic][IA] identifies I-Pulse as majority shareholder and Friedland as its chairman. Show corporate identities separately. |
| Undated approximately 33% ownership figure | [2024 Ivanhoe Mines proxy][PROXY], printed p. 12, lists CITIC Metal Africa Investments at 24.78% and Zijin affiliate Gold Mountains at 13.03%, totaling 37.81%. This is a dated 2024 figure, not a current 2026 percentage. Replace the undated claim. |
| Congressional description | [Moolenaar's December 9, 2025 letter][MOOLENAAR] uses roughly 40% and cites that earlier proxy. Attribute the letter's concerns. Use the actual shareholder entity names from the proxy; do not reproduce its CITIC Bank description as independently verified ownership. |
| FCC designation | [Covered List][FCC] names Pacific Networks and its wholly owned subsidiary ComNet's international services, added September 20, 2022. Name those services/entities precisely. |
| Zijin listing | [Federal Register][UFLPA] and [current DHS list][DHS] confirm Zijin Mining Group Co., Ltd., January 15, 2025. Retain this substantiated item with exact name/date. |
| Project and response | Keep the letter's dated rail/mining concern and link the company's response/description. Avoid implying the separate Ivanhoe companies share the same ownership. |
| Connection to Omar's reported holdings | No shareholder register or agreement establishes a Rose Lake stake. Do not draw a money or ownership arrow from Rose Lake to Ivanhoe. |

Remove the obsolete ASX IPO articles from the core source list. If retained in this appendix, label them historical and do not describe their forecasts as current plans.

## 5. Page structure and UI implementation

The current desktop homepage is approximately 14,223 pixels tall at a 1363 × 936 viewport. The people section alone occupies approximately 2,327 pixels before readers reach the transfers. The footer occupies approximately 1,139 pixels. `/updates` lacks a shared footer and author identity.

| Area | Final behavior |
| --- | --- |
| Opening | Short hero, small update/legal notices, sourced summary and current status. Show the transfer section before the long roster. |
| Main sequence | Overview/status; transfers and dated timeline; disclosure comparison; people/entities; campaign payments and litigation outcomes; open questions; sources. |
| Navigation | Reduce competing anchors, include status, retain Updates and appendix links. Preserve old hash targets or add aliases so shared links survive. |
| Notices | Preserve common container, text alignment and icon grid. Legal notice stays visually smaller. Match horizontal alignment, not heights. Preserve dismissal and disclosure accessibility. |
| People | Three core profiles; compact dated founders/partners and advisor groups. Extra biographies may use native disclosures. Keep names and roles visible when collapsed. |
| Entity relationships | Show documented relationships, wire statements and proposed connections with explicit labels. Never use one unlabeled arrow style for marriage, ownership, employment and cash. |
| Disclosures | Readable twelve-row desktop table and matching mobile cards. Source links, calendar year and version travel with every entry. |
| Timeline | Separate event date, filing date, reporting date and publication addition date. Never use the report's incorporation date as the event date. |
| Sources | One deduplicated index grouped into disclosures, court/FEC records, archives, company responses and reporting. Direct citations beside claims. Show page/paragraph and evidence type when useful. |
| Footer | One compact collapsed disclaimer and author/correction link shared by every page. Target under 280px collapsed on desktop; full text remains readable when opened. |
| Repetition | Consolidate overlapping transfer summaries and open questions. Remove editorial placeholder instructions to readers about material that should already be sourced. |
| Typography and spacing | One main content container and consistent card spacing. Keep readable paragraph measure. Remove decorative ellipses and inconsistent surname/initial treatments. |
| Interaction | Remove hover movement from noninteractive statistic cards or make their source action explicit. Preserve visible focus, reduced motion, menu Escape/outside-click closure and back-to-top behavior. |
| Print | Use readable dark text on light backgrounds, permit long sections/tables to paginate, retain author/date and printable citations. Current blanket section/table break avoidance and dark panels need repair. |
| Sharing/discovery | Add favicon, Open Graph/Twitter preview, canonical metadata, sitemap and robots file. Align homepage/update/appendix titles and descriptions with actual content. |

Remove the footer's SEC-filings claim unless an actual SEC record is incorporated. Replace the Don Samuels press release as evidence with the original Reformer reporting. Preserve clearly attributed political responses only when they contribute something distinct.

## 6. Code and dependency repairs

| Repair | Evidence / scope |
| --- | --- |
| Restore lint | `npm run lint` currently invokes removed `next lint` and exits 1. Use ESLint CLI with matching Next configuration, as specified by [Next documentation][NEXTDOCS]. |
| Update production dependency chain | `npm audit --omit=dev` reports six affected packages: Next, Sharp, PostCSS, nanoid, source-map-js and baseline-browser-mapping; severity totals 1 critical, 4 high, 1 moderate. These are package flags, not six proven site exploits. |
| Version targets | Registry check returned Next 16.4.0, React/react-dom 19.3.0, PostCSS 8.5.30 and Autoprefixer 10.6.1. Recheck before installing; update the lockfile and test the compatible set. |
| Avoid unrelated migrations | Keep Tailwind 3 and TypeScript 5 for this repair. Their newest major versions are not necessary to fix the demonstrated problems. |
| Assess feature applicability | Repo has no middleware, rewrites, Server Actions or next/image usage. Do not claim every advisory is exploitable. Next's shared runtime still warrants updating. One [recent advisory][NEXTADVISORY] requires a root catch-all route, absent here. |
| Rendering | Move static report content out of the homepage-wide client component. Keep scroll/menu/notice controls in a small client shell. |
| Data | Shared typed sources, people, entities, disclosure versions and timeline events. Source IDs and review dates must resolve consistently in every view. |
| Dates | One explicit editorial review date used throughout; do not automatically advance the review date with deployment or today's clock. |
| Old research instructions | Mark earlier punchlists/prompts as historical or superseded. They currently contain wrong transcript identity, bank-balance comparisons and unsupported entity assumptions. Preserve provenance. |
| Fonts/browser metadata | Load only necessary font weights with a resilient fallback; refresh stale browser support data with the dependency update. |

## 7. Implementation order

| Phase | Deliverable | Completion requirement |
| --- | --- | --- |
| 1. Runtime and checks | Dependency/lockfile update and working lint/typecheck scripts | Clean install, build, typecheck, lint and production audit; investigate any remaining flag. |
| 2. Content corrections | Complete disclosure dataset, corrected people, exact FEC result, transfer timeline and court sources | Every retained material claim maps to the ledger; unavailable-record claims are excluded or clearly attributed research questions. |
| 3. UI and structure | Reordered homepage, compact shared footer, consistent updates page and source index | Complete desktop/mobile/keyboard review; notices retain their alignment and smaller legal treatment. |
| 4. Appendix and discovery | Dated Ivanhoe appendix, metadata, icons, social preview, sitemap/robots and print styles | All routes, metadata and export presentation verified. |
| 5. Release verification | Reviewable diff and preview, followed by production check during implementation | Validate final deployed content and interactions against the same acceptance criteria. Keep deployment and review dates distinct. |

## 8. Acceptance checks

**Content:** All twelve disclosure rows exactly match the six linked House reports. The 2023 and 2024 amendments appear on the main page and Updates. Exact lower bounds remain available in detailed views. Inc. and LLC remain distinct. Every named role has an as-of date and source. No unsupported attorney, Senate, Rahall, payment-tracing or current ownership assertion survives. FEC outcomes and reported settlements appear next to the original allegations. No placeholder exhibit or missing-file citation is introduced.

**UI:** Check 320, 375, 390, 768, 1024, 1280 and 1440px widths, plus short landscape and 200% zoom. No page-wide horizontal scrolling; table scrolling stays inside named regions. Notice text aligns; titles/actions do not overlap. Mobile menu, Escape, outside click, resize closure, dismiss and expanded legal text work with keyboard and touch. Focus remains visible. Anchor headings clear the fixed navigation; active state updates on load, scrolling and history navigation. Sources remain reachable after dismissing notices. Every page has author identity and a compact footer.

**Technical:** Run `npm ci`, build, typecheck, working lint and production audit. Verify new routes, hash aliases, internal links, sitemap/robots/icon and social image. Review real mobile rendering and print output. Record site errors separately from browser-extension errors. Do not describe automated-request 403 responses as broken links.

**Baseline actually checked:** Build and `tsc --noEmit` pass; lint fails. All current hash targets exist, with no duplicate IDs. Transfer navigation lands at 132px with a 114px fixed-header bottom and the correct active item. Homepage/Updates navigation works. Of 26 current unique external links, 19 returned 200 and seven returned 403; no 404 was observed among those links. The expected `/robots.txt`, `/sitemap.xml` and `/favicon.ico` endpoints each returned 404. Actual mobile/print rendering was not measured in this review and is required during implementation.

## 9. Remaining evidence requirements

| Record | Current limit | Decision for this release |
| --- | --- | --- |
| Minnesota satisfaction Index #21 | Not attached; no public copy recovered. MCRO requires accepting terms before interactive search. | Exclude July 15/16 and the “24 days” calculation until the document is obtained. |
| Full November 21 hearing transcript | Official indexed excerpt found, but full retrieval returned 502; supplied RECAP path returned 404. | Withhold detailed AUM, shutdown and formal ownership conclusions. |
| Bank statements/SWIFT returns | Subpoenas are public; underlying complete bank tracing was not recovered. | No asserted payoff funding, return execution or Mynett receipt. |
| OCI approval order | Motion and company statement available; separate approval order not recovered. | Attribute approval date to OCI. |
| Delaware/DC current entity status and tax records | Report gives secondary figures without original records; independently checked certificates unavailable. | Exclude exact forfeiture/tax claims. |
| Accountant email, K-1s and OCC attachments | Underlying documents unavailable. | Keep official income brackets; exclude exact distributions and speculative ownership arithmetic. |

The plan is complete with these publication decisions. Further document acquisition can expand the investigation without holding up the demonstrated website fixes.

## Sources checked

[D22]: https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2022/10053193.pdf
[D23]: https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2023/10060937.pdf
[D23A]: https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2023/10074577.pdf
[D24]: https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2024/10068415.pdf
[D24A]: https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2024/10073338.pdf
[D25]: https://disclosures-clerk.house.gov/public_disc/financial-pdfs/2025/10077400.pdf
[AH]: https://web.archive.org/web/20241029092132/https://www.roselakecap.com/hoffman
[JP]: https://web.archive.org/web/20241029092132/https://www.roselakecap.com/pratt
[SH]: https://web.archive.org/web/20241029092132/https://www.roselakecap.com/healy
[WH]: https://web.archive.org/web/20241029092132/https://www.roselakecap.com/willhailer
[TEAM]: https://web.archive.org/web/20241029092132/https://www.roselakecap.com/team
[BD]: https://www.linkedin.com/posts/jefferies_welcometojef-activity-7432061746640695296-4_oT
[BDDIR]: https://www.americancollegeofbankruptcy.com/directory/william-q-derrough-663/
[AE]: https://www.americanexperiment.org/ilhan-omars-current-husband-linked-to-south-dakota-weed-lawsuit/
[HOMEARCH]: https://web.archive.org/web/20240506011810/https://www.roselakecap.com/
[ESTREET]: https://www.foxnews.com/politics/consulting-firm-ilhan-omar-husband-payments-campaign
[FEC]: https://www.fec.gov/files/legal/murs/7639/7639_18.pdf
[HAILER]: https://freebeacon.com/wp-content/uploads/2026/05/Declaration-of-Will-Hailer.pdf
[BANKS]: https://storage.courtlistener.com/recap/gov.uscourts.deb.192047/gov.uscourts.deb.192047.413.3.pdf
[PLAN]: https://storage.courtlistener.com/recap/gov.uscourts.deb.192034/gov.uscourts.deb.192034.517.1.pdf
[OCICOMPLAINT]: https://storage.courtlistener.com/recap/gov.uscourts.deb.200811/gov.uscourts.deb.200811.8.3.pdf
[CHAPMAN]: https://storage.courtlistener.com/recap/gov.uscourts.deb.200811/gov.uscourts.deb.200811.1.3.pdf
[REVERE]: https://storage.courtlistener.com/recap/gov.uscourts.deb.200811/gov.uscourts.deb.200811.1.0.pdf
[OCI]: https://oci-group.co.uk/legal
[CANNABIS]: https://freebeacon.com/wp-content/uploads/2025/08/Badlands-Cannabis-Lawsuit.pdf
[REFJUNE]: https://minnesotareformer.com/2024/06/05/rep-ilhan-omars-husband-accused-of-swindling-investor-in-their-california-winery/
[REFAUG]: https://minnesotareformer.com/2024/08/01/former-democratic-operative-settles-1-2-million-debt-with-south-dakota-cannabis-growers/
[FBFOLLOW]: https://freebeacon.com/democrats/us-anti-terror-agency-froze-funds-of-ilhan-omars-husband-during-biden-administration-partner-says-biden-doj-would-later-probe-omars-foreign-ties/
[CANCEL]: https://freebeacon.com/wp-content/uploads/2026/04/B4563-5607.pdf
[OVERSIGHT]: https://oversight.house.gov/wp-content/uploads/2026/02/Letter-to-Timothy-Mynett-.pdf
[PIRRO]: https://www.foxnews.com/video/6406773980112
[AXIOS]: https://www.axios.com/2026/10/13/ilhan-omar-investigation-finances-pirro
[OCC]: https://www.startribune.com/report-congressional-watchdog-clears-ilhan-omar-over-financial-disclosure-errors/601887629
[IA]: https://ivanhoeatlantic.com/about-us/
[PROXY]: https://www.ivanhoemines.com/wp-content/uploads/2024_mngt_proxy_circular.pdf
[MOOLENAAR]: https://chinaselectcommittee.house.gov/sites/evo-subsites/selectcommitteeontheccp.house.gov/files/evo-media-document/scc-letter-to-secretary-rubio-on-ivanhoe_120925.pdf
[FCC]: https://www.fcc.gov/supplychain/coveredlist
[UFLPA]: https://www.govinfo.gov/content/pkg/FR-2025-01-15/html/2025-00901.htm
[DHS]: https://www.dhs.gov/uflpa-entity-list
[NEXTDOCS]: https://nextjs.org/docs/app/guides/upgrading/version-16
[NEXTADVISORY]: https://github.com/advisories/GHSA-mcj8-r9mp-w47p
