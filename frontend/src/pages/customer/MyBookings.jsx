import { useNavigate } from "react-router";
import Badge from "../../components/Badge";

const bookings = [
  { id: "BK-001", type: "Wedding", hall: "Grand Ballroom", district: "Colombo", date: "2026-03-15", guests: 250, status: "Confirmed" },
  { id: "BK-002", type: "Birthday", hall: "Crystal Hall", district: "Gampaha", date: "2026-03-22", guests: 80, status: "Pending" },
  { id: "BK-003", type: "Corporate Event", hall: "Sky View Hall", district: "Kandy", date: "2026-04-05", guests: 120, status: "Confirmed" },
  { id: "BK-004", type: "Engagement", hall: "Garden Villa", district: "Galle", date: "2026-02-28", guests: 100, status: "Completed" },
  { id: "BK-005", type: "Anniversary", hall: "Royal Suite", district: "Colombo", date: "2026-04-18", guests: 60, status: "Pending" },
  { id: "BK-006", type: "Conference", hall: "Heritage Hall", district: "Matara", date: "2026-01-20", guests: 200, status: "Completed" },
  { id: "BK-007", type: "Graduation", hall: "Sunset Pavilion", district: "Kurunegala", date: "2026-05-10", guests: 150, status: "Confirmed" },
];

export default function MyBookings() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      {/* Filter bar */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center gap-3 flex-wrap">
        <input
          type="text"
          placeholder="Search bookings..."
          className="flex-1 min-w-48 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
        />

        <select className="border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 focus:outline-none bg-white">
          <option>All Status</option>
          <option>Confirmed</option>
          <option>Pending</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>

        <select className="border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 focus:outline-none bg-white">
          <option>All Event Types</option>
          <option>Wedding</option>
          <option>Birthday</option>
          <option>Corporate Event</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">All Bookings</h3>
          <span className="text-sm text-gray-500">{bookings.length} total</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {["Booking ID","Event Type","Hall","District","Date","Guests","Status","Action"].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {bookings.map((b) => (
                <tr key={b.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4 text-sm font-medium text-indigo-600">{b.id}</td>
                  <td className="px-5 py-4 text-sm text-gray-700">{b.type}</td>
                  <td className="px-5 py-4 text-sm text-gray-600">{b.hall}</td>
                  <td className="px-5 py-4 text-sm text-gray-500">{b.district}</td>
                  <td className="px-5 py-4 text-sm text-gray-500">{b.date}</td>
                  <td className="px-5 py-4 text-sm text-gray-500">{b.guests}</td>
                  <td className="px-5 py-4">
                    <Badge status={b.status} />
                  </td>
                  <td className="px-5 py-4">
                    <button
                      onClick={() => navigate(`/customer/booking-details/${b.id}`)}
                      className="text-xs bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors font-medium"
                    >
                      View Details
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