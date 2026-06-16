import React, { useState } from "react";
import {
  Menu,
  Bell,
  Plus,
  TrendingUp,
  Calendar,
  MessageCircle,
} from "lucide-react";

const AdminDashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const stats = [
    {
      title: "Total Registrations",
      value: "1,284",
      growth: "+12%",
      icon: <TrendingUp size={18} />,
      color: "border-green-500",
    },
    {
      title: "Active Events",
      value: "24",
      growth: "8 Today",
      icon: <Calendar size={18} />,
      color: "border-indigo-500",
    },
    {
      title: "New Inquiries",
      value: "15",
      growth: "Pending",
      icon: <MessageCircle size={18} />,
      color: "border-pink-500",
    },
  ];

  const events = [
    {
      title: "Annual Tech Symposium 2024",
      category: "TECH",
      registrations: "450/500",
      location: "Auditorium A",
      date: "Oct 24, 10:00 AM",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
    {
      title: "Sunset Yoga Flow",
      category: "HEALTH",
      registrations: "82/100",
      location: "Central Lawn",
      date: "Oct 25, 07:00 AM",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    },
    {
      title: "Fall Music Festival",
      category: "CULTURE",
      registrations: "1200",
      location: "South Plaza",
      date: "Oct 28, 08:00 PM",
      image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a",
    },
  ];

  const [eventData, setEventData] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    category: "",
    college: "",
    location: "",
    prizes: "",
    eligibility: "",
    entryFee: "",
  });

  const [poster, setPoster] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setEventData({
      ...eventData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(eventData);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}

      <header className="fixed top-0 w-full z-50 bg-white border-b">
        <div className="h-16 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Menu className="text-indigo-600" />

            <h1 className="text-2xl font-bold text-indigo-600">Admin Portal</h1>
          </div>

          <div className="flex items-center gap-4">
            <Bell className="text-indigo-600" />

            <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center font-bold text-indigo-700">
              JD
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 px-6 max-w-7xl mx-auto">
        {/* Heading */}

        <div className="mb-8">
          <h2 className="text-4xl font-bold">Welcome back, Admin 👋</h2>

          <p className="text-slate-500 mt-2">
            Here's what's happening on campus today.
          </p>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 border-l-4 ${item.color} shadow-sm`}
            >
              <div className="flex justify-between">
                <span className="text-slate-500 text-sm uppercase">
                  {item.title}
                </span>

                {item.icon}
              </div>

              <h3 className="text-4xl font-bold mt-3">{item.value}</h3>

              <p className="text-green-600 mt-3 text-sm">{item.growth}</p>
            </div>
          ))}
        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Events */}

          <div className="lg:col-span-2">
            <div className="flex justify-between mb-5">
              <h3 className="text-2xl font-bold">Manage Events</h3>

              <button className="text-indigo-600 font-semibold">
                View All
              </button>
            </div>

            <div className="space-y-5">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 border hover:border-indigo-500 transition"
                >
                  <div className="flex flex-col md:flex-row gap-5">
                    <img
                      src={event.image}
                      alt=""
                      className="w-24 h-24 rounded-xl object-cover"
                    />

                    <div className="flex-1">
                      <span className="px-3 py-1 rounded-full text-xs bg-indigo-100 text-indigo-600 font-semibold">
                        {event.category}
                      </span>

                      <h4 className="text-xl font-bold mt-2">{event.title}</h4>

                      <p className="text-slate-500 mt-1">{event.location}</p>

                      <p className="text-sm text-slate-400">
                        {event.registrations} Registered
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button className="px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700">
                        Edit
                      </button>

                      <button className="px-4 py-2 rounded-lg border border-indigo-500 text-indigo-600">
                        Attendees
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activity */}

          <div>
            <h3 className="text-2xl font-bold mb-5">Recent Activity</h3>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {[
                "Alex registered for Tech Symposium",
                "New inquiry received",
                "Venue updated for Yoga Event",
                "AI Workshop reached capacity",
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 border-b last:border-none hover:bg-slate-50"
                >
                  <p className="font-medium">{item}</p>

                  <span className="text-sm text-slate-500">2 mins ago</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Floating Create Event Button */}

      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-indigo-600 text-white shadow-xl flex items-center justify-center"
      >
        <Plus size={30} />
      </button>

      {/* Modal */}

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
          <form>
            <div className="bg-white w-full max-w-2xl rounded-2xl p-5 max-h-[90vh] overflow-y-auto">
              <h2 className="text-xl md:text-2xl font-bold mb-5">
                Create Event
              </h2>

              <div className="space-y-4">
                <input
                  name="name"
                  value={eventData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Event Title"
                  className="w-full border rounded-xl p-3"
                />

                <textarea
                  name="description"
                  value={eventData.description}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Event Description"
                  className="w-full border rounded-xl p-3"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="date" className="border rounded-xl p-3" />

                  <input
                    type="text"
                    name="time"
                    value={eventData.time}
                    onChange={handleChange}
                    placeholder="Time (10:00 AM)"
                    className="border rounded-xl p-3"
                  />
                </div>

                <input
                  type="text"
                  name="category"
                  value={eventData.category}
                  onChange={handleChange}
                  placeholder="Category"
                  className="w-full border rounded-xl p-3"
                />

                <input
                  type="text"
                  name="college"
                  value={eventData.college}
                  onChange={handleChange}
                  placeholder="College Name"
                  className="w-full border rounded-xl p-3"
                />

                <input
                  type="text"
                  name="location"
                  value={eventData.location}
                  onChange={handleChange}
                  placeholder="Location"
                  className="w-full border rounded-xl p-3"
                />

                <input
                  type="text"
                  name="prizes"
                  value={eventData.prizes}
                  onChange={handleChange}
                  placeholder="Prizes"
                  className="w-full border rounded-xl p-3"
                />

                <input
                  type="text"
                  name="eligibility"
                  value={eventData.eligibility}
                  onChange={handleChange}
                  placeholder="Eligibility"
                  className="w-full border rounded-xl p-3"
                />

                <input
                  type="number"
                  name="entryFee"
                  value={eventData.entryFee}
                  onChange={handleChange}
                  placeholder="Entry Fee"
                  className="w-full border rounded-xl p-3"
                />

                <div>
                  <label className="block mb-2 font-medium">Event Poster</label>

                  <input
                    type="file"
                    value={poster}
                    onChange={(e) => setPoster(e.target.files[0])}
                    accept="image/*"
                    className="w-full border rounded-xl p-3"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 border py-3 rounded-xl"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex-1 bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700"
                >
                  Create Event
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
