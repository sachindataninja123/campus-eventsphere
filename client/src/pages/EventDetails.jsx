import React from "react";
import {
  ArrowLeft,
  Share2,
  Calendar,
  MapPin,
  Trophy,
  CreditCard,
  Clock,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const EventDetails = () => {
  const navigate = useNavigate();

  const event = {
    title: "National Collegiate Robotics Challenge",
    category: "Tech",
    date: "24 Oct 2026",
    time: "10:00 AM",
    location: "University Stadium",
    venue: "North Campus, Main Arena",
    fee: "Free",
    organizer: "CampusEventHub",
    poster:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a",

    description:
      "Prepare for the ultimate showdown of engineering prowess and tactical innovation. The National Collegiate Robotics Challenge brings together the brightest minds from across universities to compete in a series of high-stakes robotics battles and obstacle courses.",

    prizes: [
      "₹50,000 Research Grant",
      "₹25,000 Runner-Up Prize",
      "Innovation Award",
    ],

    eligibility: [
      "Open to all engineering students",
      "Team size: 2-5 members",
      "Valid College ID required",
    ],

    schedule: [
      {
        title: "Opening Ceremony",
        time: "10:00 AM",
      },
      {
        title: "Qualifying Round",
        time: "11:30 AM",
      },
      {
        title: "Technical Poster Session",
        time: "02:00 PM",
      },
      {
        title: "Final Round",
        time: "04:30 PM",
      },
    ],
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-28">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between">
        <button
          onClick={() => navigate(-1)}
          className="bg-white/80 backdrop-blur-md p-3 rounded-full shadow"
        >
          <ArrowLeft size={20} />
        </button>

        <button className="bg-white/80 backdrop-blur-md p-3 rounded-full shadow">
          <Share2 size={20} />
        </button>
      </header>

      {/* Hero */}
      <section className="relative h-100">
        <img
          src={event.poster}
          alt={event.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-t from-slate-50 via-slate-900/20 to-slate-900/50" />
      </section>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 -mt-24 relative z-10">
        {/* Event Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-6">
          <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm">
            {event.category}
          </span>

          <h1 className="text-4xl font-bold mt-4">{event.title}</h1>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            <div className="flex gap-3">
              <Calendar className="text-indigo-600" />
              <div>
                <p className="font-medium">{event.date}</p>
                <p className="text-slate-500">{event.time}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPin className="text-indigo-600" />
              <div>
                <p className="font-medium">{event.location}</p>
                <p className="text-slate-500">{event.venue}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <CreditCard className="text-indigo-600" />
              <div>
                <p className="font-medium">Registration Fee</p>
                <p className="text-green-600 font-semibold">{event.fee}</p>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <section className="bg-white mt-6 rounded-3xl p-6 shadow border">
          <h2 className="text-2xl font-bold mb-4">
            About Event
          </h2>

          <p className="text-slate-600 leading-relaxed">
            {event.description}
          </p>
        </section>

        {/* Prize + Eligibility */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white rounded-3xl p-6 shadow border">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="text-yellow-500" />
              <h3 className="text-xl font-bold">
                Prizes & Rewards
              </h3>
            </div>

            <ul className="space-y-3">
              {event.prizes.map((prize, index) => (
                <li
                  key={index}
                  className="bg-yellow-50 p-3 rounded-xl"
                >
                  {prize}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow border">
            <div className="flex items-center gap-2 mb-4">
              <Users className="text-indigo-600" />
              <h3 className="text-xl font-bold">
                Eligibility
              </h3>
            </div>

            <ul className="space-y-3">
              {event.eligibility.map((item, index) => (
                <li
                  key={index}
                  className="bg-indigo-50 p-3 rounded-xl"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline */}
        <section className="bg-white mt-6 rounded-3xl p-6 shadow border">
          <h2 className="text-2xl font-bold mb-6">
            Event Schedule
          </h2>

          <div className="relative border-l-2 border-indigo-200 ml-3">
            {event.schedule.map((item, index) => (
              <div key={index} className="mb-8 ml-6">
                <span className="absolute -left-2.25 w-4 h-4 bg-indigo-600 rounded-full" />

                <div className="bg-slate-50 p-4 rounded-xl">
                  <div className="flex justify-between">
                    <h4 className="font-semibold">
                      {item.title}
                    </h4>

                    <div className="flex items-center gap-1 text-indigo-600">
                      <Clock size={15} />
                      {item.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Organizer */}
        <section className="bg-white mt-6 rounded-3xl p-6 shadow border">
          <h2 className="text-2xl font-bold mb-4">
            Organizer
          </h2>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-xl">
              🎓
            </div>

            <div>
              <p className="font-semibold">
                {event.organizer}
              </p>

              <p className="text-slate-500">
                Organizing Campus Events Nationwide
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Fixed Register Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4">
        <div className="max-w-5xl mx-auto">
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-semibold text-lg transition">
            Register Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;