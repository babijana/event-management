import { useNavigate } from "react-router-dom";
import StatCard from "../../components/StatCard";
import Badge from "../../components/Badge";

const upcomingEvents = [
  { id: "EV-201", name: "Wedding - Johnson Family", hall: "Grand Ballroom", date: "2026-03-15", status: "Confirmed" },
  { id: "EV-202", name: "Corporate Meet - TechCorp", hall: "Crystal Hall", date: "2026-03-20", status: "In Progress" },
  { id: "EV-203", name: "Birthday Party - Smith", hall: "Garden Villa", date: "2026-03-28", status: "Pending" },
];

const tasks = [
  { id: 1, title: "Contact catering team for EV-201", priority: "High", due: "Mar 10" },
  { id: 2, title: "Send venue checklist to EV-202 client", priority: "Medium", due: "Mar 12" },
  { id: 3, title: "Submit progress report for EV-198", priority: "High", due: "Mar 08" },
  { id: 4, title: "Confirm decoration setup time", priority: "Low", due: "Mar 14" },
];

export default function HandlerDashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div className="bg-gradient-to-r from-violet-600 to-violet-500 rounded-2xl p-6 text-white flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold mb-1">Welcome back, Alex! 🎯</h2>
          <p className="text-violet-100 text-sm">
            You have {tasks.length} pending tasks that need attention.
          </p>
        </div>

        <button
          onClick={() => navigate("/handler/assigned-events")}
          className="bg-white text-violet-600 px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-violet-50 transition-colors shadow-sm"
        >
          📌 View Assigned Events
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          title="Assigned Events"
          value={upcomingEvents.length}
          subtitle="Upcoming events"
          icon="📌"
          color="purple"
        />

        <StatCard
          title="Pending Tasks"
          value={tasks.length}
          subtitle="Action required"
          icon="⚠️"
          color="amber"
        />

        <StatCard
          title="Upcoming Events"
          value={upcomingEvents.length}
          subtitle="Next 30 days"
          icon="📅"
          color="blue"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Upcoming Events */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h3 className="font-semibold text-gray-900">Upcoming Events</h3>

            <button
              onClick={() => navigate("/handler/assigned-events")}
              className="text-violet-600 text-sm font-medium hover:text-violet-700"
            >
              View All →
            </button>
          </div>

          <div className="divide-y divide-gray-50">
            {upcomingEvents.map((e) => (
              <div
                key={e.id}
                className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div>
                  <p className="text-sm font-medium text-gray-800">{e.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {e.hall} · {e.date}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Badge status={e.status} />

                  <button
                    onClick={() => navigate(`/handler/update-progress/${e.id}`)}
                    className="text-xs bg-violet-50 text-violet-600 px-3 py-1.5 rounded-lg hover:bg-violet-100 font-medium"
                  >
                    Update
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Pending Tasks</h3>

          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                className="p-3 rounded-xl bg-gray-50 border border-gray-100"
              >
                <p className="text-sm text-gray-700 font-medium">
                  {task.title}
                </p>

                <div className="flex items-center justify-between mt-1.5">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      task.priority === "High"
                        ? "bg-red-100 text-red-600"
                        : task.priority === "Medium"
                        ? "bg-amber-100 text-amber-600"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {task.priority}
                  </span>

                  <span className="text-xs text-gray-400">
                    Due: {task.due}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}