import { useNavigate } from "react-router";

const roles = [
  {
    id: "customer",
    title: "Customer",
    description: "Browse halls, create bookings, and manage your events",
    icon: "👤",
    color: "from-blue-500 to-blue-600",
    shadow: "shadow-blue-200",
    hover: "hover:shadow-blue-300",
    path: "/customer",
  },
  {
    id: "hallowner",
    title: "Hall Owner",
    description: "Manage your hall, view bookings, and track availability",
    icon: "🏢",
    color: "from-emerald-500 to-emerald-600",
    shadow: "shadow-emerald-200",
    hover: "hover:shadow-emerald-300",
    path: "/hallowner",
  },
  {
    id: "handler",
    title: "Event Handler",
    description: "Manage assigned events, update progress, and submit reports",
    icon: "🎯",
    color: "from-violet-500 to-violet-600",
    shadow: "shadow-violet-200",
    hover: "hover:shadow-violet-300",
    path: "/handler",
  },
  {
    id: "admin",
    title: "Admin",
    description: "Full system control — users, bookings, reports, and more",
    icon: "👑",
    color: "from-indigo-500 to-indigo-600",
    shadow: "shadow-indigo-200",
    hover: "hover:shadow-indigo-300",
    path: "/admin",
  },
];

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex flex-col items-center justify-center p-8">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg shadow-indigo-200">
          🎪
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">EventPro</h1>
        <p className="text-gray-500 text-lg">Event Management System</p>
        <p className="text-gray-400 mt-2">Select your role to access your dashboard</p>
      </div>

      {/* Role Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => navigate(role.path)}
            className={`group bg-white rounded-2xl p-6 text-left shadow-lg ${role.shadow} ${role.hover} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white`}
          >
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center text-2xl mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}
            >
              {role.icon}
            </div>
            <h2 className="text-gray-900 font-bold text-lg mb-2">{role.title}</h2>
            <p className="text-gray-500 text-sm leading-relaxed">{role.description}</p>
            <div className={`mt-4 flex items-center gap-1.5 text-sm font-medium bg-gradient-to-r ${role.color} bg-clip-text text-transparent`}>
              Enter Dashboard <span>→</span>
            </div>
          </button>
        ))}
      </div>

      <p className="mt-10 text-gray-400 text-sm">© 2026 EventPro. All rights reserved.</p>
    </div>
  );
}
{/*  map() loops through the roles array.So React creates one card for each role object. */}