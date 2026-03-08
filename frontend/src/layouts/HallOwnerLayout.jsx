import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const navItems = [
  { path: "/hallowner", end: true, icon: "🏠", label: "Dashboard" },
  { path: "/hallowner/manage-hall", icon: "🏢", label: "Manage Hall Profile" },
  { path: "/hallowner/calendar", icon: "📅", label: "Calendar View" },
  { path: "/hallowner/damage-reports", icon: "⚠️", label: "Damage Reports" },
  { path: "/hallowner/upload-photos", icon: "📷", label: "Upload Photos" },
];

const pageTitles = {
  "/hallowner": "Hall Owner Dashboard",
  "/hallowner/manage-hall": "Manage Hall Profile",
  "/hallowner/calendar": "Calendar View",
  "/hallowner/damage-reports": "Damage Reports",
  "/hallowner/upload-photos": "Upload Photos",
};

function HallOwnerLayout() {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "Hall Owner";

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar role="Hall Owner" navItems={navItems} accentColor="emerald" />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          title={title}
          userName="David Kim"
          userAvatar="DK"
          accentColor="emerald"
        />

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default HallOwnerLayout;