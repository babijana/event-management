import { useState } from "react";
import { useNavigate } from "react-router";

const progressOptions = [
  "Not Started",
  "Planning Phase",
  "Venue Confirmed",
  "Vendors Contacted",
  "Setup in Progress",
  "In Progress",
  "Almost Complete",
  "Completed",
];

const events = [
  { id: "EV-201", name: "Wedding - Johnson Family", date: "2026-03-15" },
  { id: "EV-202", name: "Corporate Meet - TechCorp", date: "2026-03-20" },
  { id: "EV-203", name: "Birthday Party - Smith", date: "2026-03-28" },
];

export default function UpdateProgress() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    eventId: "EV-201",
    status: "Venue Confirmed",
    percentage: "40",
    notes: "",
    nextSteps: "",
  });
  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const pct = parseInt(form.percentage) || 0;

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      {/* Event selector */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <h3 className="font-semibold text-gray-900 mb-3">Select Event</h3>
        <div className="space-y-2">
          {events.map((e) => (
            <label
              key={e.id}
              className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer border transition-all ${
                form.eventId === e.id ? "border-violet-300 bg-violet-50" : "border-gray-100 bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <input
                type="radio"
                name="event"
                value={e.id}
                checked={form.eventId === e.id}
                onChange={(ev) => setForm({ ...form, eventId: ev.target.value })}
                className="accent-violet-600"
              />
              <div>
                <p className="text-sm font-medium text-gray-800">{e.name}</p>
                <p className="text-xs text-gray-400">{e.id} · {e.date}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Update Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-5">
          <h2 className="text-white font-bold text-lg">Update Event Progress</h2>
          <p className="text-violet-100 text-sm mt-1">Track and report the current event status</p>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-5">
          {/* Status Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Progress Status *</label>
            <select
              required
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-200 bg-white"
            >
              {progressOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>

          {/* Progress Percentage */}
          <div>
            <div className="flex justify-between mb-1.5">
              <label className="text-sm font-medium text-gray-700">Completion Percentage</label>
              <span className="text-sm font-bold text-violet-600">{pct}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={form.percentage}
              onChange={(e) => setForm({ ...form, percentage: e.target.value })}
              className="w-full accent-violet-600"
            />
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mt-2">
              <div
                className="h-full bg-gradient-to-r from-violet-500 to-violet-600 rounded-full transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Progress Notes *</label>
            <textarea
              rows={4}
              required
              placeholder="Describe the current progress, completed tasks, and any issues encountered..."
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-200 resize-none"
            />
          </div>

          {/* Next Steps */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Next Steps</label>
            <textarea
              rows={3}
              placeholder="What are the planned next steps?"
              value={form.nextSteps}
              onChange={(e) => setForm({ ...form, nextSteps: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-200 resize-none"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigate("/handler/assigned-events")}
              className="flex-1 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-colors shadow-sm ${
                saved ? "bg-emerald-600 text-white" : "bg-violet-600 text-white hover:bg-violet-700"
              }`}
            >
              {saved ? "✓ Progress Saved!" : "Save Progress"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}