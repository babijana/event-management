import { useNavigate } from "react-router-dom";
import StatCard from "../../components/StatCard";
import Badge from "../../components/Badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const bookingData = [
  { month: "Oct", bookings: 38 },
  { month: "Nov", bookings: 52 },
  { month: "Dec", bookings: 75 },
  { month: "Jan", bookings: 44 },
  { month: "Feb", bookings: 61 },
  { month: "Mar", bookings: 58 },
];

const recentRequests = [
  { id: "BK-051", customer: "Emily Chen", type: "Wedding", date: "2026-04-12", status: "Pending" },
  { id: "BK-050", customer: "Michael Ross", type: "Corporate", date: "2026-04-08", status: "Pending" },
  { id: "BK-049", customer: "Lisa Park", type: "Birthday", date: "2026-04-05", status: "Confirmed" },
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">

      {/* Welcome */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-2xl p-6 text-white">
        <h2 className="text-xl font-bold mb-1">Admin Overview 👑</h2>
        <p className="text-indigo-100 text-sm">
          Here's what's happening in your system today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Users" value="1,284" subtitle="↑ 12% this month" icon="👥" color="indigo" />
        <StatCard title="Total Bookings" value="847" subtitle="↑ 8% this month" icon="📋" color="blue" />
        <StatCard title="Revenue" value="LKR 18.4M" subtitle="This month" icon="💰" color="emerald" />
        <StatCard title="Pending Approvals" value="9" subtitle="Action needed" icon="⏳" color="amber" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Monthly Bookings</h3>
            <span className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg font-medium">
              Last 6 months
            </span>
          </div>

          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={bookingData} barSize={32}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="month"
                tick={{ fontSize: 12, fill: "#9ca3af" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "#9ca3af" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={{
                  borderRadius: 12,
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                }}
              />
              <Bar dataKey="bookings" fill="#6366f1" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>

          <div className="space-y-2.5">
            {[
              { label: "Review Pending Requests", icon: "⏳", path: "/admin/pending-requests", color: "bg-amber-50 text-amber-600 hover:bg-amber-100" },
              { label: "Assign Event Handlers", icon: "👤", path: "/admin/assign-handler", color: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100" },
              { label: "View Event Reports", icon: "📊", path: "/admin/event-reports", color: "bg-blue-50 text-blue-600 hover:bg-blue-100" },
              { label: "Revenue Reports", icon: "💰", path: "/admin/revenue-reports", color: "bg-emerald-50 text-emerald-600 hover:bg-emerald-100" },
              { label: "Manage Users", icon: "👥", path: "/admin/manage-users", color: "bg-violet-50 text-violet-600 hover:bg-violet-100" },
            ].map((a) => (
              <button
                key={a.path}
                onClick={() => navigate(a.path)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${a.color}`}
              >
                <span>{a.icon}</span>
                {a.label}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Recent Requests */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">
            Recent Booking Requests
          </h3>

          <button
            onClick={() => navigate("/admin/pending-requests")}
            className="text-indigo-600 text-sm font-medium hover:text-indigo-700"
          >
            View All →
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-50">
              <tr>
                {["Booking ID", "Customer", "Event Type", "Date", "Status", "Action"].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {recentRequests.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50 transition-colors">

                  <td className="px-5 py-4 text-sm font-medium text-indigo-600">
                    {r.id}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-800">
                    {r.customer}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {r.type}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-500">
                    {r.date}
                  </td>

                  <td className="px-5 py-4">
                    <Badge status={r.status} />
                  </td>

                  <td className="px-5 py-4">
                    <button
                      onClick={() => navigate("/admin/pending-requests")}
                      className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-lg hover:bg-indigo-100 font-medium"
                    >
                      Review
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}