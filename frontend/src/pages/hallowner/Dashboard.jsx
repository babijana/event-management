import { useNavigate } from "react-router";
import StatCard from "../../components/StatCard";
import Badge from "../../components/Badge";

const upcomingEvents = [
  { id: "EV-101", event: "Wedding - Johnson Family", date: "2026-03-15", guests: 250, status: "Confirmed" },
  { id: "EV-102", event: "Corporate Meet - TechCorp", date: "2026-03-20", guests: 80, status: "Confirmed" },
  { id: "EV-103", event: "Birthday - Smith Party", date: "2026-03-28", guests: 60, status: "Pending" },
  { id: "EV-104", event: "Engagement - Lee & Park", date: "2026-04-05", guests: 100, status: "Confirmed" },
];

export default function HallDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl p-6 text-white flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold mb-1">Grand Ballroom Hall 🏢</h2>
          <p className="text-emerald-100 text-sm">Colombo District · Capacity: 300 guests</p>
        </div>
        <button
          onClick={() => navigate("/hallowner/manage-hall")}
          className="bg-white text-emerald-600 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-emerald-50 transition-colors shadow-sm"
        >
          ✏️ Edit Profile
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Bookings" value="47" subtitle="This year" icon="📋" color="emerald" />
        <StatCard title="Upcoming Events" value="8" subtitle="Next 30 days" icon="📅" color="blue" />
        <StatCard title="Available Days" value="18" subtitle="This month" icon="✅" color="teal" />
        <StatCard title="Revenue" value="LKR 2.4M" subtitle="This month" icon="💰" color="amber" />
      </div>

      {/* Availability Quick View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900">Upcoming Events</h3>
            <button onClick={() => navigate("/hallowner/calendar")} className="text-emerald-600 text-sm font-medium hover:text-emerald-700">
              View Calendar →
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  {["Event ID", "Event Name", "Date", "Guests", "Status"].map((h) => (
                    <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {upcomingEvents.map((e) => (
                  <tr key={e.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-3.5 text-sm font-medium text-emerald-600">{e.id}</td>
                    <td className="px-5 py-3.5 text-sm text-gray-700">{e.event}</td>
                    <td className="px-5 py-3.5 text-sm text-gray-500">{e.date}</td>
                    <td className="px-5 py-3.5 text-sm text-gray-500">{e.guests}</td>
                    <td className="px-5 py-3.5"><Badge status={e.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Hall Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Hall Availability</h3>
          <div className="space-y-3">
            {[
              { label: "Booked Days", count: 12, color: "bg-red-100 text-red-600" },
              { label: "Available Days", count: 18, color: "bg-green-100 text-green-600" },
              { label: "Blocked Days", count: 1, color: "bg-gray-100 text-gray-600" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between p-3 rounded-xl bg-gray-50">
                <span className="text-sm text-gray-600">{item.label}</span>
                <span className={`text-sm font-bold px-2.5 py-0.5 rounded-lg ${item.color}`}>{item.count}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex justify-between text-xs text-gray-400 mb-1.5">
              <span>Monthly Occupancy</span>
              <span>77%</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: "77%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}