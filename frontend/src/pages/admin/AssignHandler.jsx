import { useState } from "react";
import Badge from "../../components/Badge";

const districts = [
  "All Districts",
  "Colombo",
  "Gampaha",
  "Kandy",
  "Galle",
  "Matara",
  "Kurunegala",
];

const handlers = [
  { id: "H-001", name: "Alex Turner", district: "Colombo", events: 5, available: true, rating: 4.8 },
  { id: "H-002", name: "Jessica Lee", district: "Gampaha", events: 3, available: true, rating: 4.6 },
  { id: "H-003", name: "Michael Brown", district: "Kandy", events: 7, available: false, rating: 4.9 },
  { id: "H-004", name: "Sarah Kim", district: "Galle", events: 2, available: true, rating: 4.5 },
  { id: "H-005", name: "David Wilson", district: "Matara", events: 4, available: true, rating: 4.7 },
  { id: "H-006", name: "Emma Davis", district: "Colombo", events: 6, available: false, rating: 4.8 },
];

const unassignedEvents = [
  { id: "EV-210", booking: "BK-051", name: "Wedding - Chen Family", district: "Colombo", date: "2026-04-12" },
  { id: "EV-211", booking: "BK-050", name: "Corporate - TechCorp", district: "Gampaha", date: "2026-04-08" },
  { id: "EV-212", booking: "BK-049", name: "Birthday - Park", district: "Kandy", date: "2026-04-05" },
];

export default function AssignHandler() {
  const [filter, setFilter] = useState("All Districts");
  const [assignments, setAssignments] = useState({});
  const [assigned, setAssigned] = useState({});

  const filteredHandlers = handlers.filter(
    (h) => filter === "All Districts" || h.district === filter
  );

  const doAssign = (eventId) => {
    if (assignments[eventId]) {
      setAssigned((prev) => ({
        ...prev,
        [eventId]: assignments[eventId],
      }));
    }
  };

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* Unassigned Events */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900">
              Events Awaiting Assignment
            </h3>
          </div>

          <div className="divide-y divide-gray-50">
            {unassignedEvents.map((e) => (
              <div key={e.id} className="px-6 py-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{e.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {e.id} · {e.district} · {e.date}
                    </p>
                  </div>

                  {assigned[e.id] ? (
                    <span className="text-xs bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-lg font-medium">
                      ✓ Assigned
                    </span>
                  ) : (
                    <span className="text-xs bg-amber-50 text-amber-600 px-2.5 py-1 rounded-lg font-medium">
                      Unassigned
                    </span>
                  )}
                </div>

                {assigned[e.id] ? (
                  <p className="text-xs text-gray-500">
                    Assigned to:{" "}
                    <span className="font-medium text-indigo-600">
                      {assigned[e.id]}
                    </span>
                  </p>
                ) : (
                  <div className="flex gap-2">
                    <select
                      value={assignments[e.id] || ""}
                      onChange={(ev) =>
                        setAssignments((prev) => ({
                          ...prev,
                          [e.id]: ev.target.value,
                        }))
                      }
                      className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-600 focus:outline-none bg-white"
                    >
                      <option value="">Select handler</option>

                      {handlers
                        .filter((h) => h.available)
                        .map((h) => (
                          <option key={h.id}>
                            {h.name} ({h.district})
                          </option>
                        ))}
                    </select>

                    <button
                      onClick={() => doAssign(e.id)}
                      disabled={!assignments[e.id]}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors disabled:opacity-50"
                    >
                      Assign
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Handler List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">Event Handlers</h3>

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-200 rounded-xl px-3 py-1.5 text-sm text-gray-600 focus:outline-none bg-white"
            >
              {districts.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>

          <div className="divide-y divide-gray-50">
            {filteredHandlers.map((h) => (
              <div
                key={h.id}
                className="px-6 py-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                      h.available
                        ? "bg-indigo-100 text-indigo-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {h.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {h.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {h.district} · {h.events} active events
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1">
                  <Badge status={h.available ? "Available" : "Booked"} />
                  <span className="text-xs text-amber-500">★ {h.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}