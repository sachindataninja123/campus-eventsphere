import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
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
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-white to-slate-200 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl border border-slate-200 p-8 sm:p-10">
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>

          <p className="text-slate-500 mt-2 text-sm leading-relaxed max-w-xs">
            Login to access your campus events, workshops, hackathons and more.
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              College Email
            </label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="student@college.edu"
              className="w-full px-4 py-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-slate-700">
                Password
              </label>
            </div>

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 mt-5 rounded-lg bg-linear-to-r from-indigo-600 to-blue-500 text-white font-semibold text-base hover:scale-[1.01] transition-all duration-300 shadow-lg shadow-indigo-200"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-slate-500 text-sm mt-8">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 font-medium cursor-pointer hover:text-indigo-500 transition"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
