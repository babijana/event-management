import { Bell, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

function Header({ title, userName, userAvatar, accentColor }) {

  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const ringColors = {
    blue: "ring-blue-300",
    purple: "ring-violet-300",
    indigo: "ring-indigo-300",
    emerald: "ring-emerald-300",
  };

  const ring = ringColors[accentColor] || ringColors.indigo;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-6 sticky top-0 z-10 shadow-sm">
      
      <h1 className="text-gray-900 font-semibold text-lg">{title}</h1>

      <div className="flex items-center gap-4">

        {/* Notification */}
        <button className="relative p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User */}
        <div className="relative" ref={menuRef}>

          <div
            className="flex items-center gap-2.5 cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <div
              className={`w-9 h-9 rounded-xl bg-indigo-100 flex items-center justify-center ring-2 ${ring} text-sm font-bold text-indigo-700`}
            >
              {userAvatar}
            </div>

            <div className="hidden md:block">
              <p className="text-sm font-medium text-gray-800">{userName}</p>
              <p className="text-xs text-gray-400">Online</p>
            </div>

            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>

          {open && (
            <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-100 rounded-xl shadow-lg overflow-hidden">
              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                Profile
              </button>

              <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50">
                Account Settings
              </button>

              <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                Logout
              </button>
            </div>
          )}

        </div>

      </div>
    </header>
  );
}

export default Header;