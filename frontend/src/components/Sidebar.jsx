import { NavLink, useNavigate } from "react-router-dom";

function Sidebar({ role, navItems, accentColor }) {
  const navigate = useNavigate();

  const colors = {
    blue: {
      bg: "bg-blue-600",
      hover: "hover:bg-blue-700",
      active: "bg-blue-800",
      text: "text-blue-100",
      badge: "bg-blue-500",
      logo: "bg-blue-700",
    },
    purple: {
      bg: "bg-violet-600",
      hover: "hover:bg-violet-700",
      active: "bg-violet-800",
      text: "text-violet-100",
      badge: "bg-violet-500",
      logo: "bg-violet-700",
    },
    indigo: {
      bg: "bg-indigo-600",
      hover: "hover:bg-indigo-700",
      active: "bg-indigo-800",
      text: "text-indigo-100",
      badge: "bg-indigo-500",
      logo: "bg-indigo-700",
    },
    emerald: {
      bg: "bg-emerald-600",
      hover: "hover:bg-emerald-700",
      active: "bg-emerald-800",
      text: "text-emerald-100",
      badge: "bg-emerald-500",
      logo: "bg-emerald-700",
    },
  };

  const c = colors[accentColor] || colors.indigo;

  return (
    <div className={`w-64 min-h-screen ${c.bg} flex flex-col`}>
      {/* Logo */}
      <div className={`${c.logo} px-6 py-5 flex items-center gap-3`}>
        <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center">
          <span className="text-lg">🎪</span>
        </div>
        <div>
          <p className="text-white font-bold text-sm leading-tight">EventPro</p>
          <p className={`${c.text} text-xs opacity-80`}>{role}</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all text-sm font-medium ${
                isActive
                  ? `${c.active} text-white shadow-sm`
                  : `text-white opacity-80 ${c.hover} hover:opacity-100`
              }`
            }
          >
            <span className="text-base">{item.icon}</span>
            {item.label}i
          </NavLink>
        ))}
      </nav>

      {/* Switch Role */}
      <div className="px-4 pb-6">
        <button
          onClick={() => navigate("/")}
          className="w-full flex items-center gap-2 px-4 py-2.5 rounded-xl text-white opacity-70 hover:opacity-100 hover:bg-white/10 transition-all text-sm"
        >
          <span>↩</span>
          Switch Role
        </button>
      </div>
    </div>
  );
}

export default Sidebar;