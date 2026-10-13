import { sources } from "@/lib/investigation";

export default function ConnectionMap() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white" id="connection">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-center">The Connection Map</h2>
        <p className="text-slate-300 text-center mb-10">Documented family and business relationships, with the two Rose Lake entities distinguished.</p>
        <div className="max-w-lg mx-auto space-y-4 text-center">
          <div className="bg-red-700 rounded-2xl p-6"><h3 className="text-xl font-bold mb-2">Rep. Ilhan Omar</h3><p className="text-red-100 text-sm">Current committees: Education and the Workforce; Budget</p></div>
          <p className="text-red-300 text-sm">Married to ↓</p>
          <div className="bg-slate-800 border border-red-400 rounded-2xl p-6"><h3 className="text-xl font-bold mb-2">Tim Mynett</h3><p className="text-slate-300 text-sm">E Street Group co-founder and Rose Lake Capital co-founder</p></div>
          <p className="text-red-300 text-sm">Business partnership with ↓</p>
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6"><h3 className="text-xl font-bold mb-2">William R. Hailer</h3><p className="text-slate-300 text-sm">Rose Lake co-founder; identifies himself as Rose Lake Inc. CEO in docket 314</p></div>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-8">
          <div className="rounded-xl border border-slate-700 bg-slate-800 p-6"><h3 className="text-xl font-semibold mb-3">Rose Lake Capital LLC</h3><p className="text-slate-300 text-sm">Named in Omar&apos;s financial disclosure. Amended 2024 asset value: None. Spouse partnership income: $100,001–$1,000,000.</p><a href={sources.amendment.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-red-300 underline text-sm">Disclosure record</a></div>
          <div className="rounded-xl border border-slate-700 bg-slate-800 p-6"><h3 className="text-xl font-semibold mb-3">Rose Lake Inc.</h3><p className="text-slate-300 text-sm">Named in Hailer&apos;s declaration as the recipient of $11.25 million in wires from OCI Limited through Barclays. Intercompany movements have not been established.</p><a href={sources.declaration.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-red-300 underline text-sm">Sworn declaration</a></div>
        </div>
        <p className="mt-6 text-slate-300 text-sm text-center">Ivanhoe Atlantic remains an unverified ownership lead. Shared advisors do not establish a Rose Lake shareholding.</p>
      </div>
    </section>
  );
}
