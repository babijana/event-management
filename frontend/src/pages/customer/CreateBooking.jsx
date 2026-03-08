import { useState } from "react";
import { useNavigate } from "react-router";

const eventTypes = ["Wedding", "Birthday", "Corporate Event", "Engagement", "Anniversary", "Baby Shower", "Graduation", "Conference"];
const districts = ["Colombo", "Gampaha", "Kandy", "Galle", "Matara", "Kurunegala", "Ratnapura", "Anuradhapura"];
const halls = ["Grand Ballroom", "Crystal Hall", "Sky View Hall", "Garden Villa", "Royal Suite", "Ocean Terrace", "Heritage Hall", "Sunset Pavilion"];

export default function CreateBooking() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    eventType: "",
    district: "",
    date: "",
    preference1: "",
    preference2: "",
    preference3: "",
    guestCount: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => navigate("/customer/my-bookings"), 2000);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center bg-white rounded-2xl p-10 shadow-sm border border-gray-100 max-w-md w-full">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Booking Submitted!</h2>
          <p className="text-gray-500 text-sm">Your booking request has been submitted. Redirecting to My Bookings...</p>
          <div className="mt-4 w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-5">
          <h2 className="text-white font-bold text-lg">Create New Booking</h2>
          <p className="text-blue-100 text-sm mt-1">Fill in the details to request a hall booking</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Event Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Event Type *</label>
            <select
              required
              value={form.eventType}
              onChange={(e) => setForm({ ...form, eventType: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 bg-white"
            >
              <option value="">Select event type</option>
              {eventTypes.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>

          {/* District */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">District *</label>
            <select
              required
              value={form.district}
              onChange={(e) => setForm({ ...form, district: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 bg-white"
            >
              <option value="">Select district</option>
              {districts.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Event Date *</label>
            <input
              type="date"
              required
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
            />
          </div>

          {/* Guest Count */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Estimated Guest Count</label>
            <input
              type="number"
              placeholder="e.g. 200"
              value={form.guestCount}
              onChange={(e) => setForm({ ...form, guestCount: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
            />
          </div>

          {/* Hall Preferences */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Hall Preferences</label>
            <div className="space-y-2.5">
              {[
                { key: "preference1", label: "1st Preference" },
                { key: "preference2", label: "2nd Preference" },
                { key: "preference3", label: "3rd Preference" },
              ].map(({ key, label }) => (
                <div key={key} className="flex items-center gap-3">
                  <span className="text-xs text-gray-400 w-24 flex-shrink-0">{label}</span>
                  <select
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="flex-1 border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 bg-white"
                  >
                    <option value="">Select hall</option>
                    {halls.map((h) => <option key={h}>{h}</option>)}
                  </select>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Notes</label>
            <textarea
              rows={3}
              placeholder="Any special requirements or notes..."
              value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 resize-none"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigate("/customer")}
              className="flex-1 border border-gray-200 text-gray-600 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
            >
              Submit Booking Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}