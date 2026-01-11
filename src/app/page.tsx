"use client";

import { useState, useEffect } from "react";
import { Navigation, BackToTop, Hero, StatCards, FinancialTable, Footer } from "@/components";

export default function Home() {
  const [activeSection, setActiveSection] = useState("overview");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Track scroll progress and active section
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
          setScrollProgress(progress);
          setShowBackToTop(window.scrollY > 500);

          const sections = ["overview", "findings", "structure", "leadership", "timeline", "litigation", "details", "forensics", "conclusions", "sources"];
          const reversedSections = sections.slice().reverse();
          for (const section of reversedSections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= 150) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} scrollProgress={scrollProgress} />
      <BackToTop show={showBackToTop} />
      <Hero />
      <StatCards />

      {/* Executive Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="findings">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Executive Intelligence Summary
          </h2>

          <div className="space-y-8">
            <div className="highlight-box rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                Investigative Mandate
              </h3>
              <p className="text-slate-600 leading-relaxed">
                This investigation was initiated following the identification of significant statistical anomalies in congressional financial disclosures. The mandate is to deconstruct the corporate opacity surrounding Rose Lake Capital to reveal its true operational nature&mdash;a potential <strong>political arbitrage vehicle</strong> designed to monetize legislative influence and geopolitical access.
              </p>
            </div>

            <div className="highlight-box rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                Core Finding: The Valuation Anomaly
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Rose Lake Capital experienced a <strong>3,500% increase in asset value</strong> over a single reporting cycle&mdash;from less than $1,000 in 2023 to $5-25 million in 2024. Crucially, the disclosure lists <strong>&quot;None&quot; under income</strong>. In forensic accounting terms, high asset value combined with zero income is the signature of <strong>unrealized capital gains</strong> in an illiquid asset.
              </p>
            </div>

            <div className="highlight-box rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                The Political-Commercial Pipeline
              </h3>
              <p className="text-slate-600 leading-relaxed">
                The firm&apos;s leadership possesses negligible track records in institutional asset management. Instead, their expertise lies in <strong>campaign finance, political consulting, and network leverage</strong>. The firm&apos;s website explicitly listed <strong>&quot;structuring legislation&quot;</strong> as a service&mdash;a flagrant admission of influence peddling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Structure */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900" id="structure">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Corporate Entity Network
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: "Rose Lake Capital LLC", location: "Washington, D.C.", tag: "Primary Holding", tagColor: "red", iconBg: "red", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { name: "eSt Ventures", location: "Delaware", tag: "Cannabis Sector", tagColor: "amber", iconBg: "green", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
              { name: "eStCru LLC", location: "California", tag: "Viticulture", tagColor: "purple", iconBg: "purple", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              { name: "Badlands Fund", location: "Delaware", tag: "Under Litigation", tagColor: "red", iconBg: "blue", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            ].map((entity) => (
              <div key={entity.name} className="bg-slate-800 rounded-xl p-6 border border-slate-700 card-hover">
                <div className={`w-12 h-12 rounded-lg bg-${entity.iconBg}-500/20 flex items-center justify-center mb-4`}>
                  <svg className={`w-6 h-6 text-${entity.iconBg}-400`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={entity.icon} />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{entity.name}</h3>
                <p className="text-slate-400 text-sm mb-3">{entity.location}</p>
                <span className={`inline-block px-3 py-1 rounded-full bg-${entity.tagColor}-500/20 text-${entity.tagColor}-300 text-xs`}>{entity.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="leadership">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Executive Leadership Profile
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {[
              {
                initials: "TM",
                name: "Timothy Mynett",
                role: "Partner & Co-Founder",
                points: [
                  { icon: "info", color: "red", text: "Former partner at E Street Group, receiving ~$2.9M in campaign disbursements during 2020 cycle" },
                  { icon: "trend", color: "red", text: "Personal net worth increased from <$1,000 (2023) to $6-30 million (2025)" },
                  { icon: "warning", color: "amber", text: "Wealth is entirely illiquid, tied to Rose Lake and eStCru valuations" },
                ]
              },
              {
                initials: "WH",
                name: "Will Hailer",
                role: "CEO & Co-Founder",
                points: [
                  { icon: "info", color: "red", text: "Former Executive Director of Texas Democratic Party" },
                  { icon: "warning", color: "red", text: "Primary target of multiple fraud allegations across jurisdictions" },
                  { icon: "question", color: "amber", text: "Allegedly used OFAC excuse to explain disappearance of investor funds" },
                ]
              }
            ].map((person) => (
              <div key={person.initials} className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 card-hover">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                    {person.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">{person.name}</h3>
                    <p className="text-slate-500">{person.role}</p>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  {person.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg className={`w-5 h-5 text-${point.color}-500 mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                          point.icon === "info" ? "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" :
                          point.icon === "trend" ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" :
                          point.icon === "warning" ? "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" :
                          "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        } />
                      </svg>
                      <p className="text-slate-600">{point.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">
            The Advisory Board
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Influence Laundering: The advisors lend the firm &quot;statutory gravity&quot; required to operate in complex international jurisdictions.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { initials: "JP", name: "Dr. J. Peter Pham", role: "Former U.S. Special Envoy for Sahel & Great Lakes Regions", color: "red", critical: true, text: "Chairman of Ivanhoe Atlantic. Bridges Rose Lake to its most valuable investment. Provides diplomatic cover for mining deals in Guinea/Liberia." },
              { initials: "MB", name: "Max Baucus", role: "Former U.S. Senator (MT); Former U.S. Ambassador to China", color: "blue", critical: false, text: "Provides high-level access to Beijing and Washington. Essential for navigating U.S.-China rivalry in critical minerals. Legitimizes firm to institutional investors." },
              { initials: "CP", name: "Collin Peterson", role: "Former U.S. Representative (MN); Chair of House Ag Committee", color: "green", critical: false, text: "Provides deep regulatory knowledge of the USDA and farm bills. Likely instrumental in firm's hemp/cannabis strategy in the Midwest." },
              { initials: "KK", name: "Kate Knuth", role: "Former MN State Rep; Minneapolis Mayoral Candidate", color: "purple", critical: false, text: "Reinforces the firm's \"progressive\" and \"green\" branding. Maintains local political networks in Minnesota." },
            ].map((advisor) => (
              <div key={advisor.initials} className="bg-white rounded-xl p-6 border border-slate-200 card-hover">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full bg-${advisor.color}-100 flex items-center justify-center flex-shrink-0`}>
                    <span className={`text-${advisor.color}-600 font-bold`}>{advisor.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{advisor.name}</h3>
                    <p className="text-slate-500 text-sm mb-3">{advisor.role}</p>
                    {advisor.critical ? (
                      <div className="bg-red-50 rounded-lg p-3 border border-red-100">
                        <p className="text-red-700 text-xs font-medium">CRITICAL ASSET</p>
                        <p className="text-slate-600 text-sm mt-1">{advisor.text}</p>
                      </div>
                    ) : (
                      <p className="text-slate-600 text-sm">{advisor.text}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ivanhoe Connection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-red-950" id="timeline">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
            The Capital Nexus
          </h2>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Ivanhoe Atlantic &amp; The Iron Ore Play
          </p>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-10">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-10">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">The Asset: Kon Kweni</h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  {["Ultra-high grade iron ore deposit in Guinea's Nimba Mountains", "Essential for \"green steel\" production (Direct Reduced Iron)", "Previously stranded for decades due to logistical complexity", "Requires cross-border rail access through Liberia"].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">The Strategic Unlock</h3>
                <ul className="space-y-3 text-slate-300 text-sm">
                  {[
                    { text: "Concession & Access Agreement with Government of Liberia (2024-2025)", color: "green" },
                    { text: "Broke ArcelorMittal's rail monopoly", color: "green" },
                    { text: "Dr. J. Peter Pham uniquely positioned to facilitate", color: "green" },
                    { text: "IPO targeting A$200-300M on Australian Securities Exchange", color: "amber" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full bg-${item.color}-400 mt-2 flex-shrink-0`}></span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">The China Risk</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                While Ivanhoe Atlantic markets itself as &quot;U.S.-aligned,&quot; the majority shareholder is <strong>I-Pulse Inc.</strong>, chaired by Robert Friedland. Friedland also chairs <strong>Ivanhoe Mines</strong>, of which ~33% is owned by Chinese state-linked entities including CITIC Group and Zijin Mining. This creates a potential vector for Chinese influence in U.S. critical minerals policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Litigation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="litigation">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Active Litigation &amp; Legal Exposure
          </h2>

          <div className="space-y-6">
            {[
              { title: "Mohd v. eStCru (California Superior Court)", description: "D.C. restaurateur invested $300,000 with a contractual guarantee of 200% return ($900,000 total) within 18 months. Firm repaid principal but failed to pay $600k profit.", note: "Forensic Note: A guaranteed 200% return is a hallmark of financial distress or fraudulent inducement.", severity: "red" },
              { title: "Badlands Fund Litigation (Hennepin County, MN)", description: "Investors allege Hailer raised $3.5 million for South Dakota cannabis operations but failed to deploy or return funds.", note: "The OFAC Excuse: Hailer allegedly claimed funds were frozen by OFAC—an implausible claim for a domestic cannabis fund.", severity: "red" },
              { title: "Voizzit Bankruptcy Contempt (U.S. Bankruptcy Court, Delaware)", description: "Chapter 11 Trustee filed motion holding \"Voizzit Defendants\" in contempt, describing them as \"arrogantly defiant\" and accusing them of attempting to \"fleece the Estate.\"", note: "Both Hailer and Mynett are on the witness list, linking financial mismanagement across portfolios.", severity: "amber" },
            ].map((litigation) => (
              <div key={litigation.title} className={`bg-${litigation.severity}-50 rounded-xl p-5 sm:p-6 border border-${litigation.severity}-100`}>
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full bg-${litigation.severity}-600 text-white flex items-center justify-center flex-shrink-0`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={litigation.severity === "amber" ? "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" : "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"} />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-slate-900 mb-2">{litigation.title}</h3>
                    <p className="text-slate-600 text-sm mb-3">{litigation.description}</p>
                    <p className={`text-${litigation.severity}-700 text-sm font-medium`}>{litigation.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Political Economy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" id="details">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            The Political Economy
          </h2>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="p-6 sm:p-10 border-b border-slate-100">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">The Commodification of Office</h3>
              <p className="text-slate-600 mb-6">
                The central ethical tension is the overlap between private equity interests and legislative powers. Archived versions of the Rose Lake website explicitly listed <strong>&quot;structuring legislation&quot;</strong> as a service offered to clients&mdash;a flagrant admission of influence peddling.
              </p>
              <div className="bg-slate-900 rounded-lg p-5 sm:p-6">
                <p className="text-slate-300 text-sm italic">
                  &quot;In the context of a firm owned by a congressional spouse, this is a flagrant admission of influence peddling. It implies that the firm can write favorable laws&mdash;or block unfavorable ones&mdash;on behalf of its portfolio companies.&quot;
                </p>
              </div>
            </div>

            <div className="p-6 sm:p-10">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">The Africa Committee Conflict</h3>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  "Service on House Foreign Affairs Committee & Subcommittee on Africa",
                  "Spouse's primary asset depends on U.S. diplomatic support in Guinea and Liberia",
                  "Formation of U.S.-Africa Policy Working Group following Rose Lake establishment",
                  "Any advocacy for \"Lobito Corridor\" initiatives directly benefits household net worth"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-slate-600 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Forensics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="forensics">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Financial Forensic Audit
          </h2>

          <FinancialTable />

          <div className="mt-10 bg-amber-50 rounded-xl p-5 sm:p-6 border border-amber-200">
            <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              The $60 Billion AUM Claim
            </h3>
            <p className="text-slate-700 text-sm">
              Rose Lake claims to have <strong>$60 billion</strong> in assets under management. This is a fabrication. There is no evidence of SEC registration as an investment adviser managing this volume. The firm likely aggregates the Total Project Value of infrastructure deals they touch. This is a deceptive marketing tactic designed to inflate the firm&apos;s gravity for unsophisticated investors.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900" id="conclusions">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Risk Assessment &amp; Conclusions
          </h2>

          <div className="space-y-6">
            {[
              { num: 1, title: "Valuation is Speculative", text: "The $25 million valuation is a \"paper tiger,\" dependent entirely on the successful IPO of Ivanhoe Atlantic. If that IPO fails or is blocked by regulators due to Chinese ownership concerns, the value of Rose Lake could revert to zero." },
              { num: 2, title: "Litigation Risk is Existential", text: "The principals face active fraud allegations in multiple courts. The \"OFAC excuse\" used in the Badlands case suggests a willingness to deceive investors." },
              { num: 3, title: "Ethical Conflicts are Systemic", text: "The firm's business model creates an intractable conflict of interest with committee roles on House Foreign Affairs. The firm is effectively monetizing U.S. foreign policy in West Africa." },
            ].map((item) => (
              <div key={item.num} className="bg-red-500/10 rounded-xl p-5 sm:p-6 border border-red-500/20">
                <h3 className="text-lg font-semibold text-red-400 mb-3">{item.num}. {item.title}</h3>
                <p className="text-slate-300 text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/5 rounded-xl p-6 sm:p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-6">Recommendations for Due Diligence</h3>
            <ul className="space-y-4">
              {[
                { title: "Enhanced Due Diligence (EDD)", desc: "Required on all principals. Focus on status of Badlands and Mohd litigation." },
                { title: "Verification of Assets", desc: "Demand independent verification of the $60B AUM claim and Ivanhoe Atlantic equity valuation methodology." },
                { title: "Political Exposure Review", desc: "Analyze all legislative actions related to Guinea, Liberia, and critical minerals to identify potential quid pro quo patterns." },
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{idx + 1}</div>
                  <div>
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" id="sources">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Sources &amp; Citations
          </h2>

          <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              {[
                "The Spectator - Did Ilhan Omar marry her brother?",
                "Fox News - Ilhan Omar's net worth jumps to $30 million",
                "Evrim Ağacı - Ilhan Omar Faces Scrutiny After Net Worth Soars",
                "St. Louis American - Don Samuels responds to Minnesota Reformer article",
                "Wine-Searcher - Congresswoman's Husband in Alleged Wine Fraud",
                "American Experiment - Omar's husband linked to South Dakota weed lawsuit",
                "House.gov - 2024 Financial Disclosure",
                "People.com - Who Is Ilhan Omar's Husband?",
                "Ivanhoe Atlantic - About Us",
                "House.gov - 2023 Financial Disclosure",
                "Mining Technology - Ivanhoe Atlantic targets up to $190.8m in Australian IPO",
                "Fastmarkets - International Iron Ore and Green Steel Summit 2025",
                "Sharecafe - Ivanhoe Atlantic Secures Key Railway Approval",
                "Australian Mining Review - Ivanhoe delays ASX IPO",
                "Ivanhoe Atlantic Official Website",
                "Mining Weekly - US lawmaker raises concerns about Ivanhoe Atlantic's ties with China",
                "WNFL Sports - US lawmaker raises concerns about miner Ivanhoe Atlantic",
                "Discovery Alert - Congressional Scrutiny Grows Over Ivanhoe Atlantic",
                "Verita Global - Voizzit Bankruptcy Filings",
                "Verita Global - Voizzit Witness List",
                "WTTW News - Johnson Warns Chicago is Headed for Shutdown",
                "House.gov - 2022 Financial Disclosure",
              ].map((source, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2 rounded hover:bg-slate-50">
                  <span className="text-red-600 font-mono text-xs mt-0.5">[{idx + 1}]</span>
                  <span className="text-slate-600">{source}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
