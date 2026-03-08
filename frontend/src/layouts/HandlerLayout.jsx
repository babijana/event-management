import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const navItems = [
  { path: "/handler", end: true, icon: "🏠", label: "Dashboard" },
  { path: "/handler/assigned-events", icon: "📌", label: "Assigned Events" },
  { path: "/handler/update-progress", icon: "🔄", label: "Update Progress" },
  { path: "/handler/submit-report", icon: "📝", label: "Submit Report" },
];

const pageTitles = {
  "/handler": "Handler Dashboard",
  "/handler/assigned-events": "Assigned Events",
  "/handler/update-progress": "Update Progress",
  "/handler/submit-report": "Submit Report",
};

function HandlerLayout() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "Event Handler";

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role="Event Handler" navItems={navItems} accentColor="purple" />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          title={title}
          userName="Alex Turner"
          userAvatar="AT"
          accentColor="purple"
        />

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default HandlerLayout;