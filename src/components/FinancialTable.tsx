const financialData = [
  { year: "2022", asset: "Rose Lake Capital", value: "$1 - $1,000", income: "None", analysis: "Dormant/Shell status", highlight: false },
  { year: "2023", asset: "Rose Lake Capital", value: "$1 - $1,000", income: "$15k - $50k", analysis: "Modest consulting fees", highlight: false },
  { year: "2024", asset: "Rose Lake Capital", value: "$5M - $25M", income: "None", analysis: "REVALUATION EVENT", highlight: true },
  { year: "2023", asset: "eStCru LLC", value: "$15k - $50k", income: "$201 - $1,000", analysis: "Struggling micro-business", highlight: false },
  { year: "2024", asset: "eStCru LLC", value: "$1M - $5M", income: "None", analysis: "Suspicious markup", highlight: true },
];

export default function FinancialTable() {
  return (
    <>
      {/* Mobile-friendly card view for small screens */}
      <div className="sm:hidden space-y-4">
        {financialData.map((row, idx) => (
          <div key={idx} className={`rounded-xl p-4 border ${row.highlight ? "bg-red-50 border-red-200" : "bg-white border-slate-200"}`}>
            <div className="flex justify-between items-start mb-2">
              <span className="font-semibold text-slate-900">{row.asset}</span>
              <span className="text-slate-500 text-sm">{row.year}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-slate-500">Value: </span>
                <span className={row.highlight ? "font-bold text-red-600" : "text-slate-700"}>{row.value}</span>
              </div>
              <div>
                <span className="text-slate-500">Income: </span>
                <span className="text-slate-700">{row.income}</span>
              </div>
            </div>
            <p className={`text-sm mt-2 ${row.highlight ? "font-semibold text-red-600" : "text-slate-500 italic"}`}>{row.analysis}</p>
          </div>
        ))}
      </div>

      {/* Desktop table view */}
      <div className="hidden sm:block overflow-x-auto rounded-xl border border-slate-200">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th scope="col" className="px-6 py-4 text-left text-sm font-semibold">Year</th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-semibold">Asset</th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-semibold">Value Range</th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-semibold">Income</th>
              <th scope="col" className="px-6 py-4 text-left text-sm font-semibold">Analysis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {financialData.map((row, idx) => (
              <tr key={idx} className={row.highlight ? "bg-red-50" : idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="px-6 py-4 text-sm text-slate-600">{row.year}</td>
                <td className="px-6 py-4 text-sm text-slate-900 font-medium">{row.asset}</td>
                <td className={`px-6 py-4 text-sm ${row.highlight ? "font-bold text-red-600" : "text-slate-600"}`}>{row.value}</td>
                <td className="px-6 py-4 text-sm text-slate-600">{row.income}</td>
                <td className={`px-6 py-4 text-sm ${row.highlight ? "font-semibold text-red-600" : "text-slate-500 italic"}`}>{row.analysis}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
