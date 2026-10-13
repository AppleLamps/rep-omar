const stats = [
  { value: "$2.9M", label: "Historical campaign payments to E Street Group (approx.)" },
  { value: "$11.25M", label: "Incoming wires to Rose Lake Inc., per sworn declaration" },
  { value: "None", label: "Amended 2024 asset values for both businesses" },
  { value: "$100k–1M", label: "Amended 2024 Rose Lake partnership income range" },
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
