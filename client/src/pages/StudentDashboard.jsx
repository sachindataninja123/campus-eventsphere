import {
  Search,
  Bell,
  Calendar,
  Trophy,
  Users,
  MapPin,
  Home,
  Ticket,
  User,
} from "lucide-react";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import { Link } from "react-router-dom";

export default function StudentDashboard() {
  const categories = [
    {
      name: "Hackathons",
      icon: "💻",
      count: "42 Events",
      color: "from-indigo-500 to-violet-500",
    },
    {
      name: "Sports",
      icon: "⚽",
      count: "28 Events",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Cultural",
      icon: "🎭",
      count: "35 Events",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Workshops",
      icon: "🎤",
      count: "19 Events",
      color: "from-orange-500 to-amber-500",
    },
  ];

  const events = [
    {
      title: "National Hackathon 2026",
      college: "KIET Group of Institutions",
      date: "12 July 2026",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000",
    },
    {
      title: "Tech Fest 2026",
      college: "IIT Delhi",
      date: "18 July 2026",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-md mx-auto pb-24">
        <TopNav />

        {/* Hero */}
        <section className="p-4">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 via-indigo-700 to-violet-700 p-6 text-white">
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-white/10" />
            <div className="absolute bottom-0 left-0 h-20 w-20 rounded-full bg-white/10" />

            <p className="text-indigo-100 text-sm">Welcome Back 👋</p>

            <h2 className="mt-2 text-3xl font-bold leading-tight">
              Discover Amazing
              <span className="block">Campus Events</span>
            </h2>

            <p className="mt-3 text-indigo-100">
              Join hackathons, sports tournaments, workshops and cultural fests.
            </p>

            <div className="mt-5">
              <Link
                to="/events"
                className="rounded-xl bg-white px-5 py-3 font-semibold text-indigo-600"
              >
                Explore Events
              </Link>
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="px-4">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search events..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 outline-none focus:border-indigo-500"
            />
          </div>
        </section>

        {/* Categories */}
        <section className="mt-6 px-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold">Explore Categories</h2>

            <button className="text-sm font-medium text-indigo-600">
              See All
            </button>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className={`min-w-37.5 rounded-3xl bg-linear-to-br ${cat.color} p-4 text-white shadow-lg`}
              >
                <div className="mb-3 text-4xl">{cat.icon}</div>

                <h3 className="font-bold">{cat.name}</h3>

                <p className="mt-1 text-sm text-white/80">{cat.count}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Events */}
        <section className="mt-6 px-4">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold">Trending Events</h2>

            <button className="text-sm font-medium text-indigo-600">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {events.map((event, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-md"
              >
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-44 w-full object-cover"
                  />

                  <div className="absolute left-3 top-3 rounded-full bg-indigo-600 px-3 py-1 text-xs text-white">
                    Trending
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-slate-900">{event.title}</h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={14} />
                    {event.college}
                  </div>

                  <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
                    <Calendar size={14} />
                    {event.date}
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <button className="rounded-xl bg-indigo-600 px-4 py-2 text-white">
                      Register
                    </button>

                    <button className="font-medium text-indigo-600">
                      Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mt-6 px-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
              <Trophy className="mx-auto mb-2" />
              <h3 className="font-bold">500+</h3>
              <p className="text-xs text-slate-500">Events</p>
            </div>

            <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
              <Users className="mx-auto mb-2" />
              <h3 className="font-bold">100+</h3>
              <p className="text-xs text-slate-500">Colleges</p>
            </div>

            <div className="rounded-2xl bg-white p-4 text-center shadow-sm">
              <Calendar className="mx-auto mb-2" />
              <h3 className="font-bold">50K+</h3>
              <p className="text-xs text-slate-500">Students</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p-4">
          <div className="rounded-3xl bg-indigo-600 p-6 text-center text-white">
            <h2 className="text-xl font-bold">Want to Host an Event?</h2>

            <p className="mt-2 text-indigo-100">
              Create and manage your campus events with ease.
            </p>

            <button className="mt-4 rounded-xl bg-white px-5 py-3 font-semibold text-indigo-600">
              Create Event
            </button>
          </div>
        </section>
      </div>
      <BottomNav />
    </div>
  );
}
