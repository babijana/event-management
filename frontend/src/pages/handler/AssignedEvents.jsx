import { useNavigate } from "react-router";
import Badge from "../../components/Badge";

const events = [
  { id: "EV-201", booking: "BK-041", name: "Wedding - Johnson Family", hall: "Grand Ballroom", district: "Colombo", date: "2026-03-15", status: "Confirmed" },
  { id: "EV-202", booking: "BK-039", name: "Corporate Meet - TechCorp", hall: "Crystal Hall", district: "Gampaha", date: "2026-03-20", status: "In Progress" },
  { id: "EV-203", booking: "BK-037", name: "Birthday Party - Smith", hall: "Garden Villa", district: "Kandy", date: "2026-03-28", status: "Pending" },
  { id: "EV-198", booking: "BK-033", name: "Engagement - Lee & Park", hall: "Sky View Hall", district: "Galle", date: "2026-03-05", status: "Completed" },
  { id: "EV-195", booking: "BK-028", name: "Anniversary - Brown", hall: "Royal Suite", district: "Matara", date: "2026-02-28", status: "Completed" },
  { id: "EV-204", booking: "BK-043", name: "Conference - StartupX", hall: "Heritage Hall", district: "Colombo", date: "2026-04-05", status: "Assigned" },
];

export default function AssignedEvents() {
  const navigate = useNavigate();

  return (
    <div className="space-y-5">
      {/* Filter */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center gap-3 flex-wrap">
        <input
          type="text"
          placeholder="Search events..."
          className="flex-1 min-w-48 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-200"
        />
        <select className="border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 focus:outline-none bg-white">
          <option>All Status</option>
          <option>Assigned</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <select className="border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 focus:outline-none bg-white">
          <option>All Districts</option>
          <option>Colombo</option>
          <option>Gampaha</option>
          <option>Kandy</option>
        </select>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">All Assigned Events</h3>
          <span className="text-sm text-gray-400">{events.length} events</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {["Event ID", "Booking ID", "Event Name", "Hall", "District", "Date", "Status", "Action"].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {events.map((e) => (
                <tr key={e.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4 text-sm font-medium text-violet-600">{e.id}</td>
                  <td className="px-5 py-4 text-sm text-indigo-600 font-medium">{e.booking}</td>
                  <td className="px-5 py-4 text-sm text-gray-800 font-medium">{e.name}</td>
                  <td className="px-5 py-4 text-sm text-gray-600">{e.hall}</td>
                  <td className="px-5 py-4 text-sm text-gray-500">{e.district}</td>
                  <td className="px-5 py-4 text-sm text-gray-500">{e.date}</td>
                  <td className="px-5 py-4">
                    <Badge status={e.status} />
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate("/handler/update-progress")}
                        className="text-xs bg-violet-50 text-violet-600 px-3 py-1.5 rounded-lg hover:bg-violet-100 font-medium"
                      >
                        Update
                      </button>
                      {e.status === "In Progress" || e.status === "Completed" ? (
                        <button
                          onClick={() => navigate("/handler/submit-report")}
                          className="text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-100 font-medium"
                        >
                          Report
                        </button>
                      ) : null}
                    </div>
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
