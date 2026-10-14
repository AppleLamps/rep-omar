# Follow The Money

An investigation by Apple Lamps into Ilhan Omar, Tim Mynett and the Rose Lake business network. The site follows campaign payments, revised financial disclosures, Hailer’s sworn transfer account and the lenders’ court activity.

## Content

The homepage leads with the disclosure reversal and twelve-row business-disclosure comparison, followed by the separate $11.25 million transfer account, political-business network and procedural status. `/updates` records developments and corrections. `/research/ivanhoe` contains the separate, dated mining-policy appendix.

Facts, sworn statements, allegations, reporting and the author’s analysis are identified and cited. Do not infer a money flow from a shared advisor or treat an original disclosure as current after an amendment.

## Development

Next.js 16, React 19, TypeScript and Tailwind CSS 3. Install the locked dependencies with `npm ci`; run `npm run dev` for development.

Before release, run `npm run lint`, `npm run typecheck`, `npm run build` and `npm audit --omit=dev`.

## Source of truth

`src/lib/investigation.ts` holds sources, disclosure versions, rosters and timeline data. Static report sections render on the server; `SiteFrame` handles navigation, scrolling and print disclosure expansion. Source links must remain beside the associated claim.

See [the repair and verification plan](docs/Website_Fix_Plan.md) for the checked figures, unresolved records and acceptance criteria. Earlier research notes are historical and may contain superseded assumptions.

## Deployment

Vercel’s existing Git integration publishes `main` to https://rep-omar.vercel.app/ and creates previews for feature branches. Preview deployments are marked noindex. Canonical metadata and the sitemap use the production URL.

The editorial review date is explicit. Change it when the records are reviewed, not automatically whenever code is deployed.
