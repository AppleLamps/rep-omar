# Website repair validation

Verified October 14, 2026. The site remains an explicitly conservative, partisan investigation by Apple Lamps.

## Published change

[Repair pull request #8](https://github.com/AppleLamps/rep-omar/pull/8) was merged as `dea7579f33ce069dee4cf83ad158b4f5d14dad79`. Vercel production deployment `dpl_EuDrNogt9aFGVNaNvkWSrw8pb8mu` reached READY and was aliased to https://rep-omar.vercel.app/.

## Checks completed

- Clean npm ci, production build, ESLint, TypeScript and git diff --check passed.
- Production npm audit: zero reported vulnerabilities.
- Rendered routes have unique IDs, resolving internal routes and anchors, distinct canonical/social metadata and one shared footer.
- All 12 disclosure rows render, including both 2023 and 2024 amendments. Historical/original entries remain visible with superseded labels.
- Vercel preview returned HTTP 200 for the report, Updates, mining appendix, robots and sitemap; preview pages use noindex.
- Public browser checks covered the three pages, cross-page disclosure navigation, fixed-header anchor offsets, active navigation, update dismissal, legal expansion and the transfer timeline.
- At the 1363 × 936 browser viewport, the notices had identical x=130 and width=1088. Update height was 174px; collapsed legal height was 90px. The shared collapsed footer was 197px. No horizontal page overflow was observed on any of the three pages.
- Social preview image was rendered and visually inspected.
- Browser warnings came from the browser extension and the earlier Vercel sign-in page, rather than the website's application scripts.

## Follow-up navigation repair

During public browser verification, global smooth scrolling made page changes animate from the prior scroll position. The root html element now declares `data-scroll-behavior="smooth"`, using the installed Next.js 16 migration guidance to restore instant route navigation while retaining smooth section scrolling. The follow-up passes build, lint and type checking.

## Verification limits

This browser did not expose viewport resizing or print emulation. Mobile breakpoints, menu close behavior and print expansion were reviewed in source; actual mobile and print rendering were not exercised. Protected previews were checked through authenticated Vercel fetches; public visual verification used production.
