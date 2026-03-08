import { Outlet, NavLink } from "react-router-dom";
import UserMenu from "../components/UserMenu";

const mockUser = {
  name: "Sarah Johnson",
  avatar: "SJ",
};

function CustomerLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-lg text-indigo-600">
          🎪 EventPro
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 text-sm font-medium">

          <NavLink
            to="/customer"
            end
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/customer/venues"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-600"
            }
          >
            Venues
          </NavLink>

          <NavLink
            to="/customer/gallery"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-600"
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/customer/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 font-semibold"
                : "text-gray-600 hover:text-indigo-600"
            }
          >
            My Bookings
          </NavLink>

        </div>

        {/* User Menu */}
        <UserMenu
          userName={mockUser.name}
          userAvatar={mockUser.avatar}
        />

      </nav>

      {/* Page Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

    </div>
  );
}

export default CustomerLayout;