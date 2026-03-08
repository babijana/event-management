import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const eventTypeData = [
  { name: "Wedding", count: 185, fill: "#6366f1" },
  { name: "Corporate", count: 132, fill: "#22c55e" },
  { name: "Birthday", count: 98, fill: "#f59e0b" },
  { name: "Engagement", count: 74, fill: "#ec4899" },
  { name: "Anniversary", count: 62, fill: "#14b8a6" },
  { name: "Conference", count: 45, fill: "#8b5cf6" },
  { name: "Other", count: 38, fill: "#94a3b8" },
];

const monthlyEventData = [
  { month: "Oct", events: 52 },
  { month: "Nov", events: 68 },
  { month: "Dec", events: 95 },
  { month: "Jan", events: 58 },
  { month: "Feb", events: 72 },
  { month: "Mar", events: 65 },
];

const districtData = [
  { district: "Colombo", events: 210 },
  { district: "Gampaha", events: 145 },
  { district: "Kandy", events: 120 },
  { district: "Galle", events: 88 },
  { district: "Matara", events: 72 },
  { district: "Kurunegala", events: 59 },
];

export default function EventReports() {
  return (
    <div className="space-y-5">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Events", value: "634", icon: "🎪", color: "bg-indigo-50 text-indigo-600" },
          { label: "Completed", value: "521", icon: "✅", color: "bg-emerald-50 text-emerald-600" },
          { label: "In Progress", value: "68", icon: "🔄", color: "bg-amber-50 text-amber-600" },
          { label: "Cancelled", value: "45", icon: "❌", color: "bg-red-50 text-red-600" },
        ].map((s) => (
          <div key={s.label} className={`rounded-2xl p-5 border border-gray-100 ${s.color}`}>
            <p className="text-2xl mb-1">{s.icon}</p>
            <p className="text-2xl font-bold">{s.value}</p>
            <p className="text-sm mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* Monthly Events */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Monthly Events</h3>

          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlyEventData} barSize={32}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#9ca3af" }} axisLine={false} tickLine={false}/>
              <YAxis tick={{ fontSize: 12, fill: "#9ca3af" }} axisLine={false} tickLine={false}/>
              <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e5e7eb" }}/>
              <Bar dataKey="events" fill="#6366f1" radius={[6,6,0,0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Event Types */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Popular Event Types</h3>

          <div className="flex items-center gap-4">

            <ResponsiveContainer width="50%" height={200}>
              <PieChart>
                <Pie data={eventTypeData} dataKey="count" nameKey="name" cx="50%" cy="50%" innerRadius={50} outerRadius={80}>
                  {eventTypeData.map((entry, index) => (
                    <Cell key={index} fill={entry.fill}/>
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid #e5e7eb" }}/>
              </PieChart>
            </ResponsiveContainer>

            <div className="flex-1 space-y-2">
              {eventTypeData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }}/>
                    <span className="text-xs text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-xs font-medium text-gray-800">{item.count}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* District Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="font-semibold text-gray-900">Events by District</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-50">
              <tr>
                {["District","Total Events","Share","Progress"].map((h)=>(
                  <th key={h} className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              {districtData.map((d)=>{
                const total = districtData.reduce((sum,x)=>sum+x.events,0);
                const pct = Math.round((d.events/total)*100);

                return(
                  <tr key={d.district} className="hover:bg-gray-50">

                    <td className="px-6 py-4 text-sm font-medium text-gray-800">{d.district}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{d.events}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{pct}%</td>

                    <td className="px-6 py-4 w-48">
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500 rounded-full" style={{width:`${pct}%`}}/>
                      </div>
                    </td>

                  </tr>
                )
              })}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}