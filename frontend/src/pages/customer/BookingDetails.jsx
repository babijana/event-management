import { useNavigate, useParams } from "react-router";
import Badge from "../../components/Badge";
const timeline = [
  { step: "Booking Submitted", date: "2026-02-20 10:30", done: true },
  { step: "Admin Review", date: "2026-02-21 14:00", done: true },
  { step: "Hall Confirmed", date: "2026-02-22 09:15", done: true },
  { step: "Handler Assigned", date: "2026-02-23 11:00", done: false },
  { step: "Event Completed", date: "—", done: false },
];

const services = [
  { name: "Catering Service", price: "LKR 150,000" },
  { name: "Decoration Package", price: "LKR 75,000" },
  { name: "Sound System", price: "LKR 25,000" },
  { name: "Photography", price: "LKR 60,000" },
];

export default function BookingDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="space-y-5 max-w-5xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => navigate("/customer/my-bookings")}
          className="flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm font-medium"
        >
          ← Back to My Bookings
        </button>
        <Badge status="Confirmed" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Main Details */}
        <div className="lg:col-span-2 space-y-5">
          {/* Booking Info */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Booking Information</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Booking ID", value: id || "BK-001" },
                { label: "Event Type", value: "Wedding" },
                { label: "Hall", value: "Grand Ballroom" },
                { label: "District", value: "Colombo" },
                { label: "Event Date", value: "March 15, 2026" },
                { label: "Guest Count", value: "250" },
                { label: "1st Preference", value: "Grand Ballroom" },
                { label: "2nd Preference", value: "Crystal Hall" },
                { label: "3rd Preference", value: "Royal Suite" },
                { label: "Booking Date", value: "Feb 20, 2026" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{item.label}</p>
                  <p className="text-sm text-gray-800 font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Services */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Selected Services</h3>
            <div className="space-y-3">
              {services.map((s) => (
                <div key={s.name} className="flex items-center justify-between py-2.5 border-b border-gray-50 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-sm">✓</div>
                    <span className="text-sm text-gray-700">{s.name}</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{s.price}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-2">
                <span className="font-semibold text-gray-900">Total Estimated</span>
                <span className="font-bold text-blue-600 text-lg">LKR 310,000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Timeline */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Status Timeline</h3>
            <div className="space-y-1">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                        item.done ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      {item.done ? "✓" : idx + 1}
                    </div>
                    {idx < timeline.length - 1 && (
                      <div className={`w-0.5 h-8 mt-1 ${item.done ? "bg-blue-200" : "bg-gray-100"}`} />
                    )}
                  </div>
                  <div className="pt-0.5 pb-4">
                    <p className={`text-sm font-medium ${item.done ? "text-gray-800" : "text-gray-400"}`}>{item.step}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assigned Handler */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Assigned Handler</h3>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center font-bold text-violet-600">AT</div>
              <div>
                <p className="text-sm font-medium text-gray-800">Alex Turner</p>
                <p className="text-xs text-gray-400">Event Handler</p>
                <p className="text-xs text-blue-500 mt-0.5">alex.turner@eventpro.com</p>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>📞</span> +94 77 123 4567
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>📍</span> Colombo District
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}