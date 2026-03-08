import { useState } from "react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Mock booked, blocked dates for March 2026
const bookedDates = [5, 8, 12, 15, 20, 22, 25, 28];
const blockedDates = [10];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

export default function CalendarView() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 1)); // March 2026
  const [selectedDate, setSelectedDate] = useState(null);
  const [blocked, setBlocked] = useState(blockedDates);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const getDayStatus = (day) => {
    if (bookedDates.includes(day)) return "booked";
    if (blocked.includes(day)) return "blocked";
    if (new Date(year, month, day) < new Date(2026, 2, 3)) return "past";
    return "available";
  };

  const toggleBlock = (day) => {
    if (bookedDates.includes(day)) return;
    setBlocked((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="space-y-5 max-w-4xl">
      {/* Legend */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center gap-6 flex-wrap">
        {[
          { color: "bg-red-400", label: "Booked" },
          { color: "bg-emerald-400", label: "Available" },
          { color: "bg-gray-400", label: "Blocked" },
          { color: "bg-blue-200", label: "Selected" },
        ].map((l) => (
          <div key={l.label} className="flex items-center gap-2">
            <div className={`w-4 h-4 rounded-md ${l.color}`} />
            <span className="text-sm text-gray-600">{l.label}</span>
          </div>
        ))}
        <span className="text-xs text-gray-400 ml-auto">Click on available days to block/unblock</span>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
          <button onClick={prevMonth} className="w-8 h-8 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-600">
            ‹
          </button>
          <h3 className="font-semibold text-gray-900">{MONTHS[month]} {year}</h3>
          <button onClick={nextMonth} className="w-8 h-8 rounded-xl bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-gray-600">
            ›
          </button>
        </div>

        {/* Day Labels */}
        <div className="grid grid-cols-7 border-b border-gray-100">
          {DAYS.map((d) => (
            <div key={d} className="py-3 text-center text-xs font-semibold text-gray-400 uppercase tracking-wide">
              {d}
            </div>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7">
          {cells.map((day, idx) => {
            if (!day) return <div key={`empty-${idx}`} className="h-14" />;
            const status = getDayStatus(day);
            const isSelected = selectedDate === day;

            const statusStyles = {
              booked: "bg-red-100 text-red-700 hover:bg-red-200",
              blocked: "bg-gray-100 text-gray-500",
              available: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 cursor-pointer",
              past: "text-gray-300",
            };

            return (
              <div
                key={day}
                onClick={() => {
                  if (status === "available" || status === "blocked") {
                    setSelectedDate(day);
                    toggleBlock(day);
                  }
                }}
                className={`h-14 flex flex-col items-center justify-center border-b border-r border-gray-50 transition-all ${
                  isSelected ? "bg-blue-100 text-blue-700 ring-2 ring-blue-400" : statusStyles[status]
                }`}
              >
                <span className="text-sm font-medium">{day}</span>
                {status === "booked" && <span className="text-xs mt-0.5">Booked</span>}
                {status === "blocked" && <span className="text-xs mt-0.5">Blocked</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Block Info */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
        <h3 className="font-semibold text-gray-900 mb-3">Currently Blocked Dates</h3>
        <div className="flex flex-wrap gap-2">
          {blocked.length === 0 ? (
            <p className="text-sm text-gray-400">No dates blocked</p>
          ) : (
            blocked.map((d) => (
              <span key={d} className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-xl text-sm flex items-center gap-2">
                March {d}, {year}
                <button onClick={() => setBlocked((prev) => prev.filter((x) => x !== d))} className="text-gray-400 hover:text-gray-600 ml-1">×</button>
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}