import { useState } from "react";
import Badge from "../../components/Badge";

const handlers = [
  "Alex Turner",
  "Jessica Lee",
  "Michael Brown",
  "Sarah Kim",
  "David Wilson",
];

const initialRequests = [
  { id: "BK-051", customer: "Emily Chen", type: "Wedding", district: "Colombo", date: "2026-04-12", guests: 200, pref1: "Grand Ballroom", status: "Pending", handler: "" },
  { id: "BK-050", customer: "Michael Ross", type: "Corporate", district: "Gampaha", date: "2026-04-08", guests: 120, pref1: "Crystal Hall", status: "Pending", handler: "" },
  { id: "BK-049", customer: "Lisa Park", type: "Birthday", district: "Kandy", date: "2026-04-05", guests: 50, pref1: "Garden Villa", status: "Pending", handler: "" },
  { id: "BK-048", customer: "James Wilson", type: "Engagement", district: "Galle", date: "2026-03-30", guests: 80, pref1: "Sky View Hall", status: "Pending", handler: "" },
  { id: "BK-047", customer: "Anna Torres", type: "Anniversary", district: "Matara", date: "2026-03-28", guests: 60, pref1: "Royal Suite", status: "Pending", handler: "" },
];

export default function PendingRequests() {
  const [requests, setRequests] = useState(initialRequests);

  const approve = (id) =>
    setRequests((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, status: "Confirmed" } : r
      )
    );

  const reject = (id) =>
    setRequests((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, status: "Cancelled" } : r
      )
    );

  const assignHandler = (id, handler) =>
    setRequests((prev) =>
      prev.map((r) =>
        r.id === id ? { ...r, handler } : r
      )
    );

  const pending = requests.filter((r) => r.status === "Pending");

  return (
    <div className="space-y-5">

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Requests", value: requests.length, color: "bg-indigo-50 text-indigo-700" },
          { label: "Pending", value: pending.length, color: "bg-amber-50 text-amber-700" },
          { label: "Processed", value: requests.length - pending.length, color: "bg-emerald-50 text-emerald-700" },
        ].map((s) => (
          <div key={s.label} className={`rounded-2xl p-5 text-center border border-gray-100 ${s.color}`}>
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">Booking Requests</h3>

          <select className="border border-gray-200 rounded-xl px-3 py-1.5 text-sm text-gray-600 focus:outline-none bg-white">
            <option>All Status</option>
            <option>Pending</option>
            <option>Confirmed</option>
            <option>Cancelled</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-50">
              <tr>
                {[
                  "Booking ID",
                  "Customer",
                  "Type",
                  "District",
                  "Date",
                  "Guests",
                  "Pref. Hall",
                  "Assign Handler",
                  "Status",
                  "Action",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {requests.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50 transition-colors">

                  <td className="px-4 py-4 text-sm font-medium text-indigo-600">{r.id}</td>

                  <td className="px-4 py-4 text-sm text-gray-800 font-medium">{r.customer}</td>

                  <td className="px-4 py-4 text-sm text-gray-600">{r.type}</td>

                  <td className="px-4 py-4 text-sm text-gray-500">{r.district}</td>

                  <td className="px-4 py-4 text-sm text-gray-500">{r.date}</td>

                  <td className="px-4 py-4 text-sm text-gray-500">{r.guests}</td>

                  <td className="px-4 py-4 text-sm text-gray-600">{r.pref1}</td>

                  <td className="px-4 py-4">
                    <select
                      value={r.handler}
                      onChange={(e) => assignHandler(r.id, e.target.value)}
                      disabled={r.status !== "Pending"}
                      className="border border-gray-200 rounded-lg px-2 py-1.5 text-xs text-gray-600 focus:outline-none bg-white disabled:opacity-50 w-36"
                    >
                      <option value="">Assign handler</option>
                      {handlers.map((h) => (
                        <option key={h}>{h}</option>
                      ))}
                    </select>
                  </td>

                  <td className="px-4 py-4">
                    <Badge status={r.status} />
                  </td>

                  <td className="px-4 py-4">
                    {r.status === "Pending" ? (
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => approve(r.id)}
                          className="text-xs bg-emerald-50 text-emerald-600 px-2.5 py-1.5 rounded-lg hover:bg-emerald-100 font-medium"
                        >
                          ✓ Approve
                        </button>

                        <button
                          onClick={() => reject(r.id)}
                          className="text-xs bg-red-50 text-red-600 px-2.5 py-1.5 rounded-lg hover:bg-red-100 font-medium"
                        >
                          ✗ Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-400">—</span>
                    )}
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