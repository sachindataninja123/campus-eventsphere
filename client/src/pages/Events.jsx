import { useState } from "react";
import { Bell, Search, MapPin, Calendar, ChevronRight } from "lucide-react";

import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";

export default function Events() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Hackathons",
    "Sports",
    "Cultural",
    "Workshop",
    "Music",
  ];

  const featuredEvents = [
    {
      title: "National Hackathon 2026",
      date: "12 July",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    },
    {
      title: "TechFest IIT Delhi",
      date: "18 July",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
    },
  ];

  const events = [
    {
      title: "Hackathon 2026",
      college: "KIET Group of Institutions",
      category: "Hackathons",
      date: "12 July 2026",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    },
    {
      title: "Inter College Football",
      college: "AKGEC",
      category: "Sports",
      date: "14 July 2026",
      image:
        "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1200",
    },
    {
      title: "Cultural Night",
      college: "IIT Delhi",
      category: "Cultural",
      date: "18 July 2026",
      image:
        "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-md mx-auto pb-24">
        {/* Header */}
        <TopNav />

        {/* Search */}
        <section className="p-4">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              placeholder="Search events..."
              className="w-full bg-white border border-slate-200 rounded-2xl py-3 pl-11 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </section>

        {/* Featured */}
        <section className="px-4">
          <h2 className="font-bold text-lg mb-3">Featured Events</h2>

          <div className="flex gap-4 overflow-x-auto no-scrollbar">
            {featuredEvents.map((event, index) => (
              <div
                key={index}
                className="relative min-w-70 h-44 rounded-3xl overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs bg-indigo-600 px-3 py-1 rounded-full inline-block mb-2">
                    Featured
                  </p>

                  <h3 className="font-bold text-lg">{event.title}</h3>

                  <p className="text-sm opacity-90">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mt-6">
          <div className="px-4 flex justify-between items-center mb-3">
            <h2 className="font-bold text-lg">Categories</h2>

            <button className="text-indigo-600 text-sm">View All</button>
          </div>

          <div className="flex gap-3 overflow-x-auto px-4 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-3 rounded-2xl whitespace-nowrap font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-white border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Events */}
        <section className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-lg">Upcoming Events</h2>

            <ChevronRight size={20} />
          </div>

          <div className="space-y-4">
            {events.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-44 w-full object-cover"
                />

                <div className="p-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium mb-3">
                    {event.category}
                  </span>

                  <h3 className="font-bold text-lg">{event.title}</h3>

                  <div className="flex items-center gap-2 text-slate-500 text-sm mt-3">
                    <MapPin size={15} />
                    {event.college}
                  </div>

                  <div className="flex items-center gap-2 text-slate-500 text-sm mt-2">
                    <Calendar size={15} />
                    {event.date}
                  </div>

                  <button className="w-full mt-4 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <BottomNav />
    </div>
  );
}
