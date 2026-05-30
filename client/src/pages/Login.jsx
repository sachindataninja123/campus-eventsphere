import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, LogIn } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-[-10%] left-[-5%] h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-5%] h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-4 rounded-xl bg-indigo-600 text-white shadow-lg hover:scale-105 transition duration-300">
              <span className="text-4xl">🎓</span>
            </div>

            <h1 className="text-4xl font-bold mt-4 text-slate-900">
              CampusEventHub
            </h1>

            <p className="text-slate-500 mt-2">Connect, Compete, Celebrate.</p>
          </div>

          {/* Login Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg hover:shadow-xl transition-all">
            <form onSubmit={(e) => handleSubmit(e)} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="student@university.edu"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-slate-600">
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-indigo-600 text-sm hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition active:scale-95"
              >
                Sign In
                <LogIn size={18} />
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 py-2">
                <div className="flex-1 border-t border-slate-300" />

                <span className="text-sm text-slate-400">Or sign in with</span>

                <div className="flex-1 border-t border-slate-300" />
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center gap-3 border border-slate-300 rounded-lg py-3 hover:bg-slate-50 transition"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  Google
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-3 border border-slate-300 rounded-lg py-3 hover:bg-slate-50 transition"
                >
                  <FaGithub size={21} />
                  Github
                </button>
              </div>
            </form>
          </div>

          {/* Register */}
          <div className="mt-6 text-center">
            <p className="text-slate-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-indigo-600 font-semibold hover:underline"
              >
                Register
              </Link>
            </p>
          </div>

          {/* Banner Image */}
          <div className="mt-10">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Students"
              className="h-32 w-full object-cover rounded-2xl opacity-70 hover:opacity-100 transition"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-slate-500">
          <p>© 2026 CampusEventHub. All rights reserved.</p>

          <div className="flex gap-6">
            <button className="hover:text-indigo-600">Privacy Policy</button>

            <button className="hover:text-indigo-600">Terms of Service</button>

            <button className="hover:text-indigo-600">Help Center</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
