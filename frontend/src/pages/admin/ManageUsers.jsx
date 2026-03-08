import { useState } from "react";
import Badge from "../../components/Badge";

const initialUsers = [
  { id: "U-001", name: "Sarah Johnson", email: "sarah@email.com", role: "Customer", district: "Colombo", joined: "2025-11-15", status: "Active", bookings: 5 },
  { id: "U-002", name: "David Kim", email: "david@email.com", role: "Hall Owner", district: "Colombo", joined: "2025-09-20", status: "Active", bookings: 47 },
  { id: "U-003", name: "Alex Turner", email: "alex@email.com", role: "Event Handler", district: "Colombo", joined: "2025-10-05", status: "Active", bookings: 12 },
  { id: "U-004", name: "Emily Chen", email: "emily@email.com", role: "Customer", district: "Gampaha", joined: "2025-12-01", status: "Active", bookings: 2 },
  { id: "U-005", name: "Michael Ross", email: "michael@email.com", role: "Customer", district: "Kandy", joined: "2025-11-22", status: "Inactive", bookings: 1 },
  { id: "U-006", name: "Jessica Lee", email: "jessica@email.com", role: "Event Handler", district: "Gampaha", joined: "2025-08-14", status: "Active", bookings: 18 },
  { id: "U-007", name: "Thomas Hall", email: "thomas@email.com", role: "Hall Owner", district: "Galle", joined: "2025-07-30", status: "Active", bookings: 31 },
  { id: "U-008", name: "Lisa Park", email: "lisa@email.com", role: "Customer", district: "Matara", joined: "2026-01-10", status: "Active", bookings: 3 },
];

const roleColors = {
  Customer: "bg-blue-100 text-blue-700",
  "Hall Owner": "bg-emerald-100 text-emerald-700",
  "Event Handler": "bg-violet-100 text-violet-700",
  Admin: "bg-indigo-100 text-indigo-700",
};

export default function ManageUsers() {
  const [users, setUsers] = useState(initialUsers);
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [search, setSearch] = useState("");

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" }
          : u
      )
    );
  };

  const filtered = users.filter((u) => {
    const matchRole = roleFilter === "All Roles" || u.role === roleFilter;
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    return matchRole && matchSearch;
  });

  return (
    <div className="space-y-5">

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Users", value: users.length, color: "bg-indigo-50 text-indigo-700" },
          { label: "Customers", value: users.filter((u) => u.role === "Customer").length, color: "bg-blue-50 text-blue-700" },
          { label: "Hall Owners", value: users.filter((u) => u.role === "Hall Owner").length, color: "bg-emerald-50 text-emerald-700" },
          { label: "Handlers", value: users.filter((u) => u.role === "Event Handler").length, color: "bg-violet-50 text-violet-700" },
        ].map((s) => (
          <div key={s.label} className={`rounded-2xl p-5 text-center border border-gray-100 ${s.color}`}>
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filter & Search */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center gap-3 flex-wrap">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-48 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />

        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 focus:outline-none bg-white"
        >
          <option>All Roles</option>
          <option>Customer</option>
          <option>Hall Owner</option>
          <option>Event Handler</option>
          <option>Admin</option>
        </select>

        <select className="border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 focus:outline-none bg-white">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* User Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Users</h3>
          <span className="text-sm text-gray-400">{filtered.length} users</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-50">
              <tr>
                {["User ID", "Name", "Email", "Role", "District", "Joined", "Bookings", "Status", "Action"].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {filtered.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50 transition-colors">

                  <td className="px-5 py-4 text-sm font-medium text-indigo-600">{u.id}</td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center text-xs font-bold text-indigo-600">
                        {u.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <span className="text-sm font-medium text-gray-800">{u.name}</span>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-500">{u.email}</td>

                  <td className="px-5 py-4">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${roleColors[u.role] || "bg-gray-100 text-gray-600"}`}>
                      {u.role}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-500">{u.district}</td>

                  <td className="px-5 py-4 text-sm text-gray-500">{u.joined}</td>

                  <td className="px-5 py-4 text-sm text-gray-600">{u.bookings}</td>

                  <td className="px-5 py-4">
                    <Badge status={u.status} />
                  </td>

                  <td className="px-5 py-4">
                    <button
                      onClick={() => toggleStatus(u.id)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium ${
                        u.status === "Active"
                          ? "bg-red-50 text-red-600 hover:bg-red-100"
                          : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
                      }`}
                    >
                      {u.status === "Active" ? "Deactivate" : "Activate"}
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  );
}