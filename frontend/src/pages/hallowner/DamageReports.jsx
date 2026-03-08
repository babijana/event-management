import { useState } from "react";
import Badge from "../../components/Badge";

const initialReports = [
  { id: "DR-001", booking: "BK-041", event: "Wedding Reception", date: "2026-02-15", description: "Scratches on the main stage flooring", amount: "LKR 25,000", status: "Open" },
  { id: "DR-002", booking: "BK-038", event: "Corporate Event", date: "2026-02-10", description: "Broken chair legs (3 chairs)", amount: "LKR 12,000", status: "Approved" },
  { id: "DR-003", booking: "BK-035", event: "Birthday Party", date: "2026-02-05", description: "Stain on the carpet in dining area", amount: "LKR 8,500", status: "Rejected" },
  { id: "DR-004", booking: "BK-030", event: "Engagement", date: "2026-01-28", description: "Damaged LED panel", amount: "LKR 45,000", status: "Open" },
];

export default function DamageReports() {
  const [reports, setReports] = useState(initialReports);

  const updateStatus = (id, status) => {
    setReports((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
  };

  return (
    <div className="space-y-5">
      {/* Summary */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Total Reports", value: reports.length, color: "bg-gray-50 text-gray-700" },
          { label: "Open", value: reports.filter((r) => r.status === "Open").length, color: "bg-orange-50 text-orange-600" },
          { label: "Approved", value: reports.filter((r) => r.status === "Approved").length, color: "bg-emerald-50 text-emerald-600" },
        ].map((s) => (
          <div key={s.label} className={`rounded-2xl p-5 text-center ${s.color} border border-gray-100`}>
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Damage Reports</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {["Report ID", "Booking", "Event", "Date", "Description", "Amount", "Status", "Action"].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {reports.map((r) => (
                <tr key={r.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4 text-sm font-medium text-emerald-600">{r.id}</td>
                  <td className="px-5 py-4 text-sm text-indigo-600 font-medium">{r.booking}</td>
                  <td className="px-5 py-4 text-sm text-gray-700">{r.event}</td>
                  <td className="px-5 py-4 text-sm text-gray-500">{r.date}</td>
                  <td className="px-5 py-4 text-sm text-gray-600 max-w-48 truncate">{r.description}</td>
                  <td className="px-5 py-4 text-sm font-medium text-gray-800">{r.amount}</td>
                  <td className="px-5 py-4">
                    <Badge status={r.status} />
                  </td>
                  <td className="px-5 py-4">
                    {r.status === "Open" ? (
                      <div className="flex gap-2">
                        <button
                          onClick={() => updateStatus(r.id, "Approved")}
                          className="text-xs bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg hover:bg-emerald-100 font-medium"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => updateStatus(r.id, "Rejected")}
                          className="text-xs bg-red-50 text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-100 font-medium"
                        >
                          Reject
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs text-gray-400">No action</span>
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