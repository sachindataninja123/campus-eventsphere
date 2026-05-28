import React from "react";

const AdminDashboard = () => {
  const recentEvents = [
    {
      title: "Hackathon 2026",
      category: "Coding",
      registrations: 320,
      status: "Active",
    },
    {
      title: "AI Workshop",
      category: "Workshop",
      registrations: 180,
      status: "Upcoming",
    },
    {
      title: "Cultural Fest",
      category: "Fest",
      registrations: 500,
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-white to-indigo-50 flex overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-slate-200 shadow-sm p-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-indigo-600 to-blue-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
            E
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">EventSphere</h1>
            <p className="text-sm text-slate-500">Admin Panel</p>
          </div>
        </div>

        <nav className="space-y-3">
          <button className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl bg-linear-to-r from-indigo-600 to-blue-500 text-white font-medium shadow-lg shadow-indigo-200">
            Dashboard
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-slate-700 hover:bg-slate-100 transition">
            Manage Events
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-slate-700 hover:bg-slate-100 transition">
            Students
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-slate-700 hover:bg-slate-100 transition">
            Certificates
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-slate-700 hover:bg-slate-100 transition">
            Analytics
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-slate-700 hover:bg-slate-100 transition">
            Settings
          </button>
        </nav>

        <div className="mt-auto rounded-3xl bg-linear-to-r from-indigo-600 to-blue-500 p-5 text-white shadow-xl">
          <h2 className="text-lg font-semibold mb-2">Admin Access ⚡</h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Manage campus events and monitor student participation.
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-8 lg:p-10 overflow-y-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-10">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Admin Dashboard 🚀
            </h1>
            <p className="text-slate-500 mt-2 text-base">
              Monitor events, registrations, and student activities.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button className="px-6 py-3 rounded-2xl bg-linear-to-r from-indigo-600 to-blue-500 text-white font-medium shadow-lg shadow-indigo-200 hover:scale-[1.02] transition-all duration-300">
              + Create Event
            </button>

            <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-indigo-600 to-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
              A
            </div>
          </div>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
            <p className="text-slate-500 text-sm font-medium mb-3">
              Total Events
            </p>
            <h2 className="text-4xl font-bold text-slate-900">24</h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
            <p className="text-slate-500 text-sm font-medium mb-3">
              Total Students
            </p>
            <h2 className="text-4xl font-bold text-slate-900">2.4K</h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
            <p className="text-slate-500 text-sm font-medium mb-3">
              Active Events
            </p>
            <h2 className="text-4xl font-bold text-slate-900">8</h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
            <p className="text-slate-500 text-sm font-medium mb-3">
              Certificates Issued
            </p>
            <h2 className="text-4xl font-bold text-slate-900">640</h2>
          </div>
        </div>

        {/* Recent Events */}
        <div className="bg-white rounded-[32px] shadow-xl border border-slate-100 overflow-hidden">
          <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Recent Events
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Track registrations and event activity.
              </p>
            </div>

            <button className="text-indigo-600 font-medium hover:text-indigo-500 transition">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-slate-50 text-left">
                  <th className="px-8 py-4 text-sm font-semibold text-slate-600">
                    Event Name
                  </th>

                  <th className="px-8 py-4 text-sm font-semibold text-slate-600">
                    Category
                  </th>

                  <th className="px-8 py-4 text-sm font-semibold text-slate-600">
                    Registrations
                  </th>

                  <th className="px-8 py-4 text-sm font-semibold text-slate-600">
                    Status
                  </th>

                  <th className="px-8 py-4 text-sm font-semibold text-slate-600">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {recentEvents.map((event, index) => (
                  <tr
                    key={index}
                    className="border-t border-slate-100 hover:bg-slate-50 transition"
                  >
                    <td className="px-8 py-5 font-semibold text-slate-900">
                      {event.title}
                    </td>

                    <td className="px-8 py-5 text-slate-600">
                      {event.category}
                    </td>

                    <td className="px-8 py-5 text-slate-600">
                      {event.registrations}
                    </td>

                    <td className="px-8 py-5">
                      <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                        {event.status}
                      </span>
                    </td>

                    <td className="px-8 py-5">
                      <button className="px-5 py-2 rounded-xl bg-linear-to-r from-indigo-600 to-blue-500 text-white text-sm font-medium hover:scale-[1.02] transition-all duration-300 shadow-md shadow-indigo-200">
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
