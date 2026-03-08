import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const navItems = [
  { path: "/admin", end: true, icon: "🏠", label: "Dashboard" },
  { path: "/admin/pending-requests", icon: "⏳", label: "Pending Requests" },
  { path: "/admin/assign-handler", icon: "👤", label: "Assign Handler" },
  { path: "/admin/event-reports", icon: "📊", label: "Event Reports" },
  { path: "/admin/revenue-reports", icon: "💰", label: "Revenue Reports" },
  { path: "/admin/manage-event-types", icon: "🎭", label: "Manage Event Types" },
  { path: "/admin/manage-users", icon: "👥", label: "Manage Users" },
];

const pageTitles = {
  "/admin": "Admin Dashboard",
  "/admin/pending-requests": "Pending Requests",
  "/admin/assign-handler": "Assign Handler",
  "/admin/event-reports": "Event Reports",
  "/admin/revenue-reports": "Revenue Reports",
  "/admin/manage-event-types": "Manage Event Types",
  "/admin/manage-users": "Manage Users",
};

function AdminLayout() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "Admin";

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role="Admin" navItems={navItems} accentColor="indigo" />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          title={title}
          userName="Admin User"
          userAvatar="AU"
          accentColor="indigo"
        />

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;