function StatCard({ title, value, subtitle, icon, color }) {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    indigo: "bg-indigo-50 text-indigo-600",
    purple: "bg-violet-50 text-violet-600",
    emerald: "bg-emerald-50 text-emerald-600",
    amber: "bg-amber-50 text-amber-600",
    rose: "bg-rose-50 text-rose-600",
    sky: "bg-sky-50 text-sky-600",
    teal: "bg-teal-50 text-teal-600",
  };

  const iconBg = colors[color] || colors.indigo;

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${iconBg}`}
      >
        {icon}
      </div>

      <div>
        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
          {title}
        </p>

        <p className="text-2xl font-bold text-gray-900 mt-0.5">{value}</p>

        {subtitle && (
          <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export default StatCard;