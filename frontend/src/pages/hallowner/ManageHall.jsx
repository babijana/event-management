import { useState } from "react";

const facilitiesList = [
  "Air Conditioning", "Parking", "WiFi", "Catering Kitchen", "Sound System",
  "Projector/Screen", "Stage", "Dressing Room", "Garden", "Swimming Pool",
];

export default function ManageHall() {
  const [form, setForm] = useState({
    name: "Grand Ballroom",
    location: "123 Galle Road, Colombo 03",
    district: "Colombo",
    capacity: "300",
    type: "Indoor",
    pricePerDay: "150000",
    pricePerHour: "15000",
    description: "A luxurious ballroom perfect for weddings and corporate events.",
    facilities: ["Air Conditioning", "Parking", "WiFi", "Sound System", "Stage"],
  });
  const [saved, setSaved] = useState(false);

  const toggleFacility = (f) => {
    setForm((prev) => ({
      ...prev,
      facilities: prev.facilities.includes(f) ? prev.facilities.filter((x) => x !== f) : [...prev.facilities, f],
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-5">
          <h2 className="text-white font-bold text-lg">Manage Hall Profile</h2>
          <p className="text-emerald-100 text-sm mt-1">Update your hall details and settings</p>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-6">
          {/* Basic Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Basic Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Hall Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Location / Address</label>
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">District</label>
                <select
                  value={form.district}
                  onChange={(e) => setForm({ ...form, district: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 bg-white"
                >
                  {["Colombo", "Gampaha", "Kandy", "Galle", "Matara"].map((d) => <option key={d}>{d}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Guest Capacity</label>
                <input
                  type="number"
                  value={form.capacity}
                  onChange={(e) => setForm({ ...form, capacity: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Type</label>
                <div className="flex gap-3">
                  {["Indoor", "Outdoor", "Both"].map((t) => (
                    <label key={t} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        value={t}
                        checked={form.type === t}
                        onChange={(e) => setForm({ ...form, type: e.target.value })}
                        className="accent-emerald-600"
                      />
                      <span className="text-sm text-gray-600">{t}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Facilities */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Facilities</h3>
            <div className="flex flex-wrap gap-2.5">
              {facilitiesList.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => toggleFacility(f)}
                  className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all ${
                    form.facilities.includes(f)
                      ? "bg-emerald-100 text-emerald-700 border border-emerald-300"
                      : "bg-gray-100 text-gray-500 border border-gray-200 hover:bg-gray-200"
                  }`}
                >
                  {form.facilities.includes(f) ? "✓ " : ""}{f}
                </button>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">Pricing</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Price Per Day (LKR)</label>
                <input
                  type="number"
                  value={form.pricePerDay}
                  onChange={(e) => setForm({ ...form, pricePerDay: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Price Per Hour (LKR)</label>
                <input
                  type="number"
                  value={form.pricePerHour}
                  onChange={(e) => setForm({ ...form, pricePerHour: e.target.value })}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1.5">Hall Description</label>
            <textarea
              rows={3}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-200 resize-none"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              className="flex-1 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50"
            >
              Discard Changes
            </button>
            <button
              type="submit"
              className="flex-1 bg-emerald-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 transition-colors"
            >
              {saved ? "✓ Saved!" : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}