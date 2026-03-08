import { Bell, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

function UserMenu({ userName, userAvatar }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-4">

      {/* Notification */}
      <button className="relative p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
        <Bell className="w-5 h-5 text-gray-600" />
        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>

      {/* User Menu */}
      <div className="relative" ref={menuRef}>

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
            {userAvatar}
          </div>

          <div className="text-sm leading-tight hidden md:block">
            <p className="font-medium">{userName}</p>
            <p className="text-gray-400 text-xs">Online</p>  {/* status can be dynamic based on user activity */}
          </div>

          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>

        {/* Dropdown */}
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
  );
}

export default UserMenu;