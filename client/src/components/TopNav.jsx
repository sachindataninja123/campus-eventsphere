import React from "react";
import { Bell } from "lucide-react";
import { RiMenu3Line } from "react-icons/ri";
import { User, LogOut } from "lucide-react";
import { useState } from "react";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🎓</span>

            <div>
              <h1 className="font-bold text-xl text-indigo-600">Campusphere</h1>

              <p className="text-xs text-slate-500">Student Dashboard</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-5">
            <button className="relative">
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500" />
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center transition-all duration-300 justify-center rounded-xl hover:bg-slate-100 cursor-pointer"
            >
              <RiMenu3Line size={26} className="stroke-[1.5] text-slate-800" />
            </button>

            {/* Dropdown */}

            {open && (
              <div className="absolute right-2 p-2 transition-all duration-200 top-14 z-50 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl">
                <div className="px-4 py-2">
                  <h3 className="font-semibold text-slate-900">
                    Sachin Kushwaha
                  </h3>

                  <p className="text-sm text-slate-500">sachin@gmail.com</p>
                </div>

                <div>
                  <Link
                    to="/login"
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-md font-semibold transition-all cursor-pointer  hover:bg-gray-200"
                  >
                    <MdLogin size={18} />
                    Login
                  </Link>
                  <Link
                    to="/profile"
                    className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-md font-semibold transition-all cursor-pointer hover:bg-gray-200"
                  >
                    <User size={18} />
                    Profile
                  </Link>

                  <hr className="my-2" />

                  <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-md font-semibold text-red-500 cursor-pointer transition-all hover:bg-red-100">
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default TopNav;
