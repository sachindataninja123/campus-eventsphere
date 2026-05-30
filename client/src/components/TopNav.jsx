import React from "react";
import { Bell } from "lucide-react";

const TopNav = () => {
  return (
    <div>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🎓</span>

            <div>
              <h1 className="font-bold text-lg text-indigo-600">Campusphere</h1>

              <p className="text-xs text-slate-500">Student Dashboard</p>
            </div>
          </div>

          <button className="relative">
            <Bell size={22} />

            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default TopNav;
