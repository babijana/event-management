import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const monthlyRevenue = [
  { month: "Jan", revenue: 2800000 },
  { month: "Feb", revenue: 3200000 },
  { month: "Mar", revenue: 4100000 },
  { month: "Apr", revenue: 3800000 },
  { month: "May", revenue: 4500000 },
  { month: "Jun", revenue: 5200000 },
  { month: "Jul", revenue: 4800000 },
  { month: "Aug", revenue: 5500000 },
  { month: "Sep", revenue: 4900000 },
  { month: "Oct", revenue: 5800000 },
  { month: "Nov", revenue: 6200000 },
  { month: "Dec", revenue: 7500000 },
];

const districtRevenue = [
  { district: "Colombo", revenue: "LKR 18.4M", events: 210, growth: "+12%", color: "text-emerald-600" },
  { district: "Gampaha", revenue: "LKR 11.2M", events: 145, growth: "+8%", color: "text-emerald-600" },
  { district: "Kandy", revenue: "LKR 9.8M", events: 120, growth: "+15%", color: "text-emerald-600" },
  { district: "Galle", revenue: "LKR 7.1M", events: 88, growth: "-2%", color: "text-red-500" },
  { district: "Matara", revenue: "LKR 5.8M", events: 72, growth: "+5%", color: "text-emerald-600" },
  { district: "Kurunegala", revenue: "LKR 4.2M", events: 59, growth: "+18%", color: "text-emerald-600" },
];

const fmt = (v) => `LKR ${(v / 1000000).toFixed(1)}M`;

export default function RevenueReports() {
  return (
    <div className="space-y-5">
      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Revenue", value: "LKR 56.5M", subtitle: "This year", icon: "💰", color: "bg-emerald-50 text-emerald-700" },
          { label: "This Month", value: "LKR 4.1M", subtitle: "↑ 12% vs last", icon: "📈", color: "bg-indigo-50 text-indigo-700" },
          { label: "Avg per Event", value: "LKR 89K", subtitle: "Per booking", icon: "📊", color: "bg-blue-50 text-blue-700" },
          { label: "Outstanding", value: "LKR 2.3M", subtitle: "Pending payments", icon: "⏳", color: "bg-amber-50 text-amber-700" },
        ].map((s) => (
          <div key={s.label} className={`rounded-2xl p-5 border border-gray-100 ${s.color}`}>
            <p className="text-2xl mb-1">{s.icon}</p>
            <p className="text-xl font-bold">{s.value}</p>
            <p className="text-xs mt-0.5 opacity-80">{s.label}</p>
            <p className="text-xs mt-0.5 opacity-60">{s.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Monthly Revenue Chart */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-900">Monthly Revenue (2026)</h3>
          <span className="text-xs bg-emerald-50 text-emerald-600 px-3 py-1 rounded-lg font-medium">Full Year</span>
        </div>
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={monthlyRevenue}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
            <YAxis tickFormatter={fmt} tick={{ fontSize: 11, fill: "#9ca3af" }} axisLine={false} tickLine={false} />
            <Tooltip formatter={(v) => [fmt(v), "Revenue"]} contentStyle={{ borderRadius: 12, border: "1px solid #e5e7eb" }} />
            <Line type="monotone" dataKey="revenue" stroke="#6366f1" strokeWidth={2.5} dot={{ fill: "#6366f1", r: 4 }} activeDot={{ r: 6 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* District Revenue Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Revenue by District</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {["District", "Total Revenue", "Events", "Growth", "Revenue Share"].map((h) => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {districtRevenue.map((d, idx) => {
                const pct = [33, 20, 17, 13, 10, 7][idx];
                return (
                  <tr key={d.district} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{d.district}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{d.revenue}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{d.events}</td>
                    <td className={`px-6 py-4 text-sm font-medium ${d.color}`}>{d.growth}</td>
                    <td className="px-6 py-4 w-52">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="text-xs text-gray-500 w-8">{pct}%</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
