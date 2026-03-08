import { useState } from "react";
import Badge from "../../components/Badge";

const initialTypes = [
  { id: 1, name: "Wedding", icon: "💍", description: "Full wedding ceremony and reception events", count: 185, active: true },
  { id: 2, name: "Corporate Event", icon: "💼", description: "Business meetings, conferences and seminars", count: 132, active: true },
  { id: 3, name: "Birthday Party", icon: "🎂", description: "Birthday celebrations for all ages", count: 98, active: true },
  { id: 4, name: "Engagement", icon: "💑", description: "Engagement ceremonies and receptions", count: 74, active: true },
  { id: 5, name: "Anniversary", icon: "🥂", description: "Wedding and other anniversary celebrations", count: 62, active: true },
  { id: 6, name: "Conference", icon: "🎙️", description: "Large-scale conferences and summits", count: 45, active: true },
  { id: 7, name: "Graduation", icon: "🎓", description: "Graduation ceremonies and parties", count: 38, active: false },
];

export default function ManageEventTypes() {
  const [types, setTypes] = useState(initialTypes);
  const [form, setForm] = useState({ name: "", icon: "", description: "" });
  const [editing, setEditing] = useState(null);

  const toggleActive = (id) => {
    setTypes((prev) => prev.map((t) => t.id === id ? { ...t, active: !t.active } : t));
  };

  const deleteType = (id) => {
    setTypes((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name) return;
    setTypes((prev) => [
      ...prev,
      { id: Date.now(), name: form.name, icon: form.icon || "🎪", description: form.description, count: 0, active: true },
    ]);
    setForm({ name: "", icon: "", description: "" });
  };

  return (
    <div className="space-y-5">
      {/* Add Form */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Add New Event Type</h3>
        <form onSubmit={handleAdd} className="flex items-end gap-3 flex-wrap">
          <div className="w-16">
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Icon</label>
            <input
              type="text"
              placeholder="🎪"
              value={form.icon}
              onChange={(e) => setForm({ ...form, icon: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-center focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="flex-1 min-w-40">
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Event Type Name *</label>
            <input
              type="text"
              required
              placeholder="e.g. Baby Shower"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div className="flex-[2] min-w-48">
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Description</label>
            <input
              type="text"
              placeholder="Brief description..."
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            + Add Type
          </button>
        </form>
      </div>

      {/* Event Types List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Event Types</h3>
          <span className="text-sm text-gray-400">{types.length} types</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                {["Icon", "Event Type", "Description", "Usage", "Status", "Action"].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {types.map((t) => (
                <tr key={t.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-4 text-2xl">{t.icon}</td>
                  <td className="px-5 py-4 text-sm font-medium text-gray-800">{t.name}</td>
                  <td className="px-5 py-4 text-sm text-gray-500 max-w-56">{t.description}</td>
                  <td className="px-5 py-4 text-sm text-gray-600">{t.count} events</td>
                  <td className="px-5 py-4">
                    <Badge status={t.active ? "Active" : "Inactive"} />
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => toggleActive(t.id)}
                        className={`text-xs px-3 py-1.5 rounded-lg font-medium ${
                          t.active ? "bg-amber-50 text-amber-600 hover:bg-amber-100" : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                        }`}
                      >
                        {t.active ? "Deactivate" : "Activate"}
                      </button>
                      <button
                        onClick={() => deleteType(t.id)}
                        className="text-xs bg-red-50 text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-100 font-medium"
                      >
                        Delete
                      </button>
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
