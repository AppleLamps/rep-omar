const stats = [
  { value: "$2.9M", label: "Campaign Funds to Husband's Firm" },
  { value: "3,500%", label: "Spouse's Wealth Increase" },
  { value: "$30M", label: "Household Net Worth" },
  { value: "Africa", label: "Committee With Direct Conflict" },
];

export default function StatCards() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50" id="overview">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card rounded-2xl p-4 sm:p-6 text-center card-hover">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-400 mb-2">{stat.value}</div>
              <div className="text-slate-400 text-xs sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
