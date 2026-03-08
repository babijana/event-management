function Badge({ status }) {
  const styles = {
    Confirmed: "bg-emerald-100 text-emerald-700",
    Pending: "bg-amber-100 text-amber-700",
    Completed: "bg-blue-100 text-blue-700",
    Cancelled: "bg-red-100 text-red-700",
    "In Progress": "bg-violet-100 text-violet-700",
    Active: "bg-emerald-100 text-emerald-700",
    Inactive: "bg-gray-100 text-gray-600",
    Approved: "bg-emerald-100 text-emerald-700",
    Rejected: "bg-red-100 text-red-700",
    Assigned: "bg-indigo-100 text-indigo-700",
    Available: "bg-green-100 text-green-700",
    Booked: "bg-red-100 text-red-700",
    Blocked: "bg-gray-100 text-gray-600",
    New: "bg-sky-100 text-sky-700",
    Open: "bg-orange-100 text-orange-700",
  };

  const cls = styles[status] || "bg-gray-100 text-gray-600";

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${cls}`}
    >
      {status}
    </span>
  );
}

export default Badge;