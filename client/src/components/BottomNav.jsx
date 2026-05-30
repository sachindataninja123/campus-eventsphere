import { Home, Ticket, Calendar, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    name: "Home",
    icon: Home,
    path: "/dashboard",
  },
  {
    name: "Events",
    icon: Ticket,
    path: "/events",
  },
  {
    name: "My Events",
    icon: Calendar,
    path: "/my-events",
  },
  {
    name: "Profile",
    icon: User,
    path: "/profile",
  },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="max-w-md mx-auto px-2 py-2 grid grid-cols-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 py-2 rounded-2xl transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-slate-500 hover:bg-slate-100"
                }`
              }
            >
              <Icon size={20} />
              <span className="text-[11px] font-medium">{item.name}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
