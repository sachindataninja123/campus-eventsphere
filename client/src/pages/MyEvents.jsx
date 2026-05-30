import { Calendar, MapPin, Ticket, Clock, CheckCircle } from "lucide-react";
import TopNav from "../components/TopNav";
import BottomNav from "../components/BottomNav";

export default function MyEvents() {
  const upcomingEvents = [
    {
      id: 1,
      title: "National Hackathon 2026",
      college: "KIET Group of Institutions",
      date: "12 July 2026",
      time: "10:00 AM",
      status: "Approved",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    },
    {
      id: 2,
      title: "Tech Fest Delhi",
      college: "IIT Delhi",
      date: "18 July 2026",
      time: "09:00 AM",
      status: "Registered",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Coding Contest",
      college: "AKGEC",
      date: "10 June 2026",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <div className="max-w-md mx-auto">
        {/* Header */}

        <TopNav />

        <div className="sticky top-0 z-20 bg-white">
          <div className="p-4">
            <h1 className="text-2xl text-slate-600 font-semibold">My Events</h1>
            <p className="text-sm text-slate-500">
              Manage your registered events
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 p-4">
          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-indigo-600">
              {upcomingEvents.length}
            </h3>
            <p className="text-xs text-slate-500">Upcoming</p>
          </div>

          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-green-600">12</h3>
            <p className="text-xs text-slate-500">Registered</p>
          </div>

          <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-orange-500">
              {pastEvents.length}
            </h3>
            <p className="text-xs text-slate-500">Completed</p>
          </div>
        </div>

        {/* Upcoming Events */}
        <section className="px-4">
          <h2 className="font-bold text-lg mb-4">Upcoming Events</h2>

          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-40 w-full object-cover"
                />

                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg">{event.title}</h3>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : "bg-indigo-100 text-indigo-700"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>

                  <div className="space-y-2 mt-3 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <MapPin size={15} />
                      {event.college}
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar size={15} />
                      {event.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock size={15} />
                      {event.time}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-5">
                    <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-xl font-medium">
                      <Ticket size={18} />
                      Ticket
                    </button>

                    <button className="border border-slate-300 py-3 rounded-xl font-medium">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section className="p-4 mt-4">
          <h2 className="font-bold text-lg mb-4">Past Events</h2>

          <div className="space-y-3">
            {pastEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl p-4 border shadow-sm"
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold">{event.title}</h3>

                    <p className="text-sm text-slate-500 mt-1">
                      {event.college}
                    </p>

                    <p className="text-xs text-slate-400 mt-1">{event.date}</p>
                  </div>

                  <div className="flex items-center gap-1 text-green-600">
                    <CheckCircle size={18} />
                    <span className="text-sm">Completed</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Empty State Example */}
        {false && (
          <div className="flex flex-col items-center justify-center py-20">
            <Ticket size={60} className="text-slate-300" />

            <h3 className="font-bold text-lg mt-4">No Events Yet</h3>

            <p className="text-slate-500 text-center mt-2">
              Register for events and they'll appear here.
            </p>

            <Link to="/events" className="mt-5 bg-indigo-600 text-white px-6 py-3 rounded-xl">
              Explore Events
            </Link>
          </div>
        )}

        <BottomNav />

      </div>
    </div>
  );
}
