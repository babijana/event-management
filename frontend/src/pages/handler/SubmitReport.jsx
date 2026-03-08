import { useState, useRef } from "react";
import { useNavigate } from "react-router";

export default function SubmitReport() {
  const navigate = useNavigate();
  const fileRef = useRef(null);
  const [photos, setPhotos] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    eventId: "EV-202",
    eventName: "Corporate Meet - TechCorp",
    date: "2026-03-20",
    hall: "Crystal Hall",
    guestCount: "80",
    summary: "",
    issues: "",
    rating: "5",
  });

  const handleFiles = (files) => {
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotos((prev) => [...prev, { id: Date.now() + Math.random(), name: file.name, url: e.target.result }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <div className="text-center bg-white rounded-2xl p-10 shadow-sm border border-gray-100 max-w-md w-full">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Report Submitted!</h2>
          <p className="text-gray-500 text-sm">Your event report has been submitted to the admin for review.</p>
          <button
            onClick={() => navigate("/handler/assigned-events")}
            className="mt-6 bg-violet-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-violet-700 transition-colors"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-violet-600 to-violet-500 px-6 py-5">
          <h2 className="text-white font-bold text-lg">Submit Event Report</h2>
          <p className="text-violet-100 text-sm mt-1">Provide a completion report for the event</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Event Summary (read-only info) */}
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Event Summary</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Event ID", value: form.eventId },
                { label: "Event Name", value: form.eventName },
                { label: "Date", value: form.date },
                { label: "Venue", value: form.hall },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-gray-400">{item.label}</p>
                  <p className="text-sm font-medium text-gray-800">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Actual Guest Count */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Actual Guest Count</label>
            <input
              type="number"
              value={form.guestCount}
              onChange={(e) => setForm({ ...form, guestCount: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-200"
            />
          </div>

          {/* Event Summary */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Event Summary *</label>
            <textarea
              rows={4}
              required
              placeholder="Describe how the event went, key highlights, what was achieved..."
              value={form.summary}
              onChange={(e) => setForm({ ...form, summary: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-200 resize-none"
            />
          </div>

          {/* Issues */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Issues / Incidents (if any)</label>
            <textarea
              rows={3}
              placeholder="Describe any problems or incidents that occurred..."
              value={form.issues}
              onChange={(e) => setForm({ ...form, issues: e.target.value })}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-200 resize-none"
            />
          </div>

          {/* Event Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Event Success Rating</label>
            <div className="flex items-center gap-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setForm({ ...form, rating: String(star) })}
                  className={`text-2xl transition-transform hover:scale-110 ${
                    parseInt(form.rating) >= star ? "text-amber-400" : "text-gray-200"
                  }`}
                >
                  ★
                </button>
              ))}
              <span className="text-sm text-gray-500 ml-2">{form.rating}/5</span>
            </div>
          </div>

          {/* Photo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Upload Completion Photos</label>
            <div
              onClick={() => fileRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files); }}
              className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center cursor-pointer hover:bg-gray-50 hover:border-violet-300 transition-all"
            >
              <p className="text-2xl mb-2">📷</p>
              <p className="text-sm text-gray-600 font-medium">Drag & drop or click to upload</p>
              <p className="text-xs text-gray-400 mt-1">JPG, PNG · Max 10MB each</p>
              <input ref={fileRef} type="file" accept="image/*" multiple className="hidden" onChange={(e) => handleFiles(e.target.files)} />
            </div>

            {photos.length > 0 && (
              <div className="grid grid-cols-3 gap-3 mt-3">
                {photos.map((p) => (
                  <div key={p.id} className="relative rounded-xl overflow-hidden aspect-square border border-gray-100">
                    <img src={p.url} alt={p.name} className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setPhotos((prev) => prev.filter((x) => x.id !== p.id))}
                      className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-600"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
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
              className="flex-1 bg-violet-600 text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-violet-700 transition-colors shadow-sm"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 