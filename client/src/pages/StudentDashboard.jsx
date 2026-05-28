import React from "react";

const StudentDashboard = () => {
  const upcomingEvents = [
    {
      title: "Hackathon 2026",
      date: "12 June 2026",
      category: "Coding",
    },
    {
      title: "AI Workshop",
      date: "15 June 2026",
      category: "Workshop",
    },
    {
      title: "Cultural Fest",
      date: "20 June 2026",
      category: "Fest",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-white to-indigo-50 flex">
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-slate-200 shadow-sm p-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-indigo-600 to-blue-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
            E
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">EventSphere</h1>
            <p className="text-sm text-slate-500">Student Dashboard</p>
          </div>
        </div>

        <nav className="space-y-3">
          <button className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl bg-linear-to-r from-indigo-600 to-blue-500 text-white font-medium shadow-lg shadow-indigo-200">
            Dashboard
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-slate-700 hover:bg-slate-100 transition">
            Explore Events
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-slate-700 hover:bg-slate-100 transition">
            Registered Events
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-slate-700 hover:bg-slate-100 transition">
            Certificates
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-4 rounded-2xl text-slate-700 hover:bg-slate-100 transition">
            Profile
          </button>
        </nav>

        <div className="mt-auto bg-linear-to-r from-indigo-600 to-blue-500 rounded-3xl p-5 text-white">
          <h2 className="font-semibold text-lg mb-2">Stay Active 🚀</h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Participate in events and build your campus profile.
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-8 lg:p-10 overflow-y-auto">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Welcome Back 👋
            </h1>
            <p className="text-slate-500 mt-2 text-base">
              Explore upcoming events happening in your campus.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search events..."
              className="px-5 py-3 rounded-2xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full md:w-80"
            />

            <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-indigo-600 to-blue-500 text-white flex items-center justify-center font-bold text-lg shadow-lg">
              S
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <h3 className="text-slate-500 text-sm font-medium mb-3">
              Events Joined
            </h3>
            <h2 className="text-4xl font-bold text-slate-900">12</h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <h3 className="text-slate-500 text-sm font-medium mb-3">
              Upcoming Events
            </h3>
            <h2 className="text-4xl font-bold text-slate-900">5</h2>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
            <h3 className="text-slate-500 text-sm font-medium mb-3">
              Certificates Earned
            </h3>
            <h2 className="text-4xl font-bold text-slate-900">8</h2>
          </div>
        </div>

        {/* Events Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Upcoming Events</h2>

          <button className="text-indigo-600 font-medium hover:text-indigo-500 transition">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {upcomingEvents.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                  {event.category}
                </span>

                <span className="text-sm text-slate-500">{event.date}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {event.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Join exciting campus activities and connect with students.
              </p>

              <button className="w-full py-3 rounded-2xl bg-linear-to-r from-indigo-600 to-blue-500 text-white font-medium hover:scale-[1.02] transition-all duration-300 shadow-md shadow-indigo-200">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;
