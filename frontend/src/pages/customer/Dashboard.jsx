import { useNavigate } from "react-router";
import { useState } from "react";
import StatCard from "../../components/StatCard";
import Badge from "../../components/Badge";
import CreateBookingModal from "../../components/CreateBookingModal";

const recentBookings = [
  { id: "BK-001", type: "Wedding", hall: "Grand Ballroom", date: "2026-03-15", status: "Confirmed" },
  { id: "BK-002", type: "Birthday", hall: "Crystal Hall", date: "2026-03-22", status: "Pending" },
  { id: "BK-003", type: "Corporate", hall: "Sky View Hall", date: "2026-04-05", status: "Confirmed" },
  { id: "BK-004", type: "Engagement", hall: "Garden Villa", date: "2026-02-28", status: "Completed" },
  { id: "BK-005", type: "Anniversary", hall: "Royal Suite", date: "2026-04-18", status: "Pending" },
];

export default function CustomerDashboard() {
  const navigate = useNavigate();

  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showAllBookings, setShowAllBookings] = useState(false);

  const bookingsToShow = showAllBookings
    ? recentBookings
    : recentBookings.slice(0, 3);

  return (
    <div className="space-y-6">

      {/* Welcome */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-6 text-white flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold mb-1">
            Welcome back, Sarah! 👋
          </h2>
          <p className="text-blue-100 text-sm">
            You have 2 upcoming events this month.
          </p>
        </div>

        <button
          onClick={() => setShowBookingModal(true)}
          className="bg-white text-blue-600 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors shadow-sm flex items-center gap-2"
        >
          ➕ Create Booking
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          title="Upcoming Events"
          value="3"
          subtitle="Next: Mar 15"
          icon="📅"
          color="blue"
        />

        <StatCard
          title="Pending Requests"
          value="2"
          subtitle="Awaiting approval"
          icon="⏳"
          color="amber"
        />

        <StatCard
          title="Completed Events"
          value="8"
          subtitle="This year"
          icon="✅"
          color="emerald"
        />
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">
            Recent Bookings
          </h3>

          <button
            onClick={() => setShowAllBookings(!showAllBookings)}
            className="text-blue-600 text-sm font-medium hover:text-blue-700"
          >
            {showAllBookings ? "Show Less" : "View All →"}
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-50">
              <tr>
                {[
                  "Booking ID",
                  "Event Type",
                  "Hall",
                  "Date",
                  "Status",
                  "Action",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">

              {bookingsToShow.map((b) => (
                <tr
                  key={b.id}
                  className="hover:bg-gray-50 transition-colors"
                >

                  <td className="px-6 py-4 text-sm font-medium text-indigo-600">
                    {b.id}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    {b.type}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    {b.hall}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-500">
                    {b.date}
                  </td>

                  <td className="px-6 py-4">
                    <Badge status={b.status} />
                  </td>

                  <td className="px-6 py-4">
                    <button
                      onClick={() =>
                        navigate(`/customer/booking-details/${b.id}`)
                      }
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

      {/* Booking Modal */}
      {showBookingModal && (
        <CreateBookingModal
          close={() => setShowBookingModal(false)}
        />
      )}

    </div>
  );
}