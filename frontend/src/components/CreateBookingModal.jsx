import { useState } from "react";

const eventTypes = [
  "Wedding",
  "Birthday",
  "Corporate Event",
  "Engagement",
  "Anniversary",
  "Baby Shower",
  "Graduation",
  "Conference",
];

const districts = [
  "Colombo",
  "Gampaha",
  "Kandy",
  "Galle",
  "Matara",
  "Kurunegala",
];

const halls = [
  "Grand Ballroom",
  "Crystal Hall",
  "Sky View Hall",
  "Garden Villa",
  "Royal Suite",
];

export default function CreateBookingModal({ close }) {
  const [form, setForm] = useState({
    eventType: "",
    district: "",
    date: "",
    guestCount: "",
    preference1: "",
    preference2: "",
    preference3: "",
    notes: "",
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl w-[650px] max-h-[90vh] overflow-hidden shadow-xl">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-5">
          <h2 className="text-white text-lg font-bold">
            Create New Booking
          </h2>
          <p className="text-blue-100 text-sm">
            Fill in the details to request a hall booking
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-5 overflow-y-auto max-h-[70vh]"
        >

          {/* Event Type */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Event Type *
            </label>

            <select
              required
              value={form.eventType}
              onChange={(e) =>
                handleChange("eventType", e.target.value)
              }
              className="w-full border border-gray-200 rounded-xl p-3"
            >
              <option value="">Select event type</option>

              {eventTypes.map((e) => (
                <option key={e}>{e}</option>
              ))}
            </select>
          </div>

          {/* District */}
          <div>
            <label className="block text-sm font-medium mb-1">
              District *
            </label>

            <select
              required
              value={form.district}
              onChange={(e) =>
                handleChange("district", e.target.value)
              }
              className="w-full border border-gray-200 rounded-xl p-3"
            >
              <option value="">Select district</option>

              {districts.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Event Date *
            </label>

            <input
              type="date"
              required
              value={form.date}
              onChange={(e) =>
                handleChange("date", e.target.value)
              }
              className="w-full border border-gray-200 rounded-xl p-3"
            />
          </div>

          {/* Guest Count */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Estimated Guest Count
            </label>

            <input
              type="number"
              placeholder="e.g. 200"
              value={form.guestCount}
              onChange={(e) =>
                handleChange("guestCount", e.target.value)
              }
              className="w-full border border-gray-200 rounded-xl p-3"
            />
          </div>

          {/* Hall Preferences */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Hall Preferences
            </label>

            <div className="space-y-3">

              <select
                value={form.preference1}
                onChange={(e) =>
                  handleChange("preference1", e.target.value)
                }
                className="w-full border border-gray-200 rounded-xl p-3"
              >
                <option>1st Preference</option>

                {halls.map((h) => (
                  <option key={h}>{h}</option>
                ))}
              </select>

              <select
                value={form.preference2}
                onChange={(e) =>
                  handleChange("preference2", e.target.value)
                }
                className="w-full border border-gray-200 rounded-xl p-3"
              >
                <option>2nd Preference</option>

                {halls.map((h) => (
                  <option key={h}>{h}</option>
                ))}
              </select>

              <select
                value={form.preference3}
                onChange={(e) =>
                  handleChange("preference3", e.target.value)
                }
                className="w-full border border-gray-200 rounded-xl p-3"
              >
                <option>3rd Preference</option>

                {halls.map((h) => (
                  <option key={h}>{h}</option>
                ))}
              </select>

            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Additional Notes
            </label>

            <textarea
              rows="3"
              placeholder="Any special requirements or notes..."
              value={form.notes}
              onChange={(e) =>
                handleChange("notes", e.target.value)
              }
              className="w-full border border-gray-200 rounded-xl p-3"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">

            <button
              type="button"
              onClick={close}
              className="flex-1 border border-gray-200 rounded-xl py-3 hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white rounded-xl py-3 hover:bg-blue-700"
            >
              Submit Booking Request
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}