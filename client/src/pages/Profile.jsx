import {
  Camera,
  Mail,
  Phone,
  Building2,
  GraduationCap,
  Bell,
  Lock,
  Shield,
  ChevronRight,
  LogOut,
  Edit,
} from "lucide-react";
import BottomNav from "../components/BottomNav";

export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <div className="max-w-md mx-auto">
        {/* Cover */}
        <div className="relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1673177667569-e3321a8d8256?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="h-40 w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Profile Section */}
        <div className="relative px-4">
          <div className="-mt-16 flex flex-col items-center">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/200"
                alt=""
                className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
              />

              <button className="absolute bottom-2 right-2 w-9 h-9 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-md">
                <Camera size={18} />
              </button>
            </div>

            <h2 className="text-2xl font-bold mt-4">Sachin Kushwaha</h2>

            <p className="text-slate-500 text-sm">
              B.Tech CSE • KIET Group of Institutions
            </p>

            <button className="mt-3 flex items-center gap-2 bg-indigo-600 text-white px-5 py-2 rounded-xl">
              <Edit size={16} />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats */}
        <section className="p-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
              <h3 className="text-xl font-bold text-indigo-600">12</h3>
              <p className="text-xs text-slate-500">Events Joined</p>
            </div>

            <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
              <h3 className="text-xl font-bold text-green-600">5</h3>
              <p className="text-xs text-slate-500">Certificates</p>
            </div>

            <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
              <h3 className="text-xl font-bold text-orange-500">3</h3>
              <p className="text-xs text-slate-500">Wins</p>
            </div>
          </div>
        </section>

        {/* Personal Information */}
        <section className="px-4">
          <div className="bg-white rounded-3xl p-5 shadow-sm">
            <h3 className="font-bold text-lg mb-5">Personal Information</h3>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-500">Full Name</label>

                <div className="relative mt-1">
                  <input
                    defaultValue="Sachin Kushwaha"
                    className="w-full border rounded-xl pl-10 py-3"
                  />

                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500">Email</label>

                <div className="relative mt-1">
                  <input
                    defaultValue="sachin@gmail.com"
                    className="w-full border rounded-xl pl-10 py-3"
                  />

                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500">Phone Number</label>

                <div className="relative mt-1">
                  <input
                    defaultValue="+91 9876543210"
                    className="w-full border rounded-xl pl-10 py-3"
                  />

                  <Phone
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500">College</label>

                <div className="relative mt-1">
                  <input
                    defaultValue="KIET Group of Institutions"
                    className="w-full border rounded-xl pl-10 py-3"
                  />

                  <Building2
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-slate-500">Department</label>

                <div className="relative mt-1">
                  <input
                    defaultValue="Computer Science"
                    className="w-full border rounded-xl pl-10 py-3"
                  />

                  <GraduationCap
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                </div>
              </div>

              <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold">
                Save Changes
              </button>
            </div>
          </div>
        </section>

        {/* Notification Settings */}
        <section className="p-4">
          <div className="bg-white rounded-3xl p-5 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Notifications</h3>

            <div className="space-y-4">
              {["Event Reminders", "Campus Alerts", "Weekly Newsletter"].map(
                (item) => (
                  <div key={item} className="flex justify-between items-center">
                    <div className="flex gap-3 items-center">
                      <Bell size={18} />

                      <span>{item}</span>
                    </div>

                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-5 h-5 accent-indigo-600"
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Settings */}
        <section className="px-4">
          <div className="bg-white rounded-3xl p-5 shadow-sm">
            <h3 className="font-bold text-lg mb-4">Account Settings</h3>

            <div className="space-y-2">
              <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-100">
                <div className="flex gap-3 items-center">
                  <Lock size={18} />
                  Change Password
                </div>

                <ChevronRight size={18} />
              </button>

              <button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-100">
                <div className="flex gap-3 items-center">
                  <Shield size={18} />
                  Two Factor Authentication
                </div>

                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* Logout */}
        <section className="p-4">
          <button className="w-full border-2 border-red-500 text-red-500 py-3 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-red-50">
            <LogOut size={18} />
            Logout
          </button>
        </section>
        <BottomNav />
      </div>
    </div>
  );
}
