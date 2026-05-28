import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [college, setCollege] = useState("");
  const [role, setRole] = useState("Student");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(name, email, password, department, college, role);

    setName("");
    setEmail("");
    setCollege("");
    setDepartment("");
    setPassword("");
    setRole("");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-white to-slate-200 flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-slate-200 p-8 sm:p-10">
        <div className="flex flex-col items-center text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-900">Create Account</h1>

          <p className="text-slate-500 mt-2 text-sm leading-relaxed max-w-md">
            Join EventSphere to explore campus events, hackathons, workshops and
            student communities.
          </p>
        </div>

        <form className="space-y-5" onSubmit={(e) => submitHandler(e)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name
              </label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                College Email
              </label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="student@college.edu"
                className="w-full px-4 py-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Create password"
                className="w-full px-4 py-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Role
              </label>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-2 py-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              >
                <option>Student</option>
                <option>Organizer</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Department
              </label>

              <input
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                type="text"
                placeholder="CSE / IT / ECE"
                className="w-full px-4 py-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                College Name
              </label>

              <input
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                type="text"
                placeholder="Enter college name"
                className="w-full px-4 py-4 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
          </div>

          <div className="flex items-start gap-3 text-sm text-slate-600 pt-1">
            <input type="checkbox" className="mt-1 accent-indigo-600" />
            <p>
              I agree to the Terms & Conditions and Privacy Policy of
              EventSphere.
            </p>
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-lg bg-linear-to-r from-indigo-600 to-blue-500 text-white font-semibold text-base hover:scale-[1.01] transition-all duration-300 shadow-lg shadow-indigo-200 mt-3"
          >
            Create Account
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>

          <div className="relative flex justify-center text-xs uppercase tracking-wider">
            <span className="bg-white px-4 text-slate-400">Continue With</span>
          </div>
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-600 font-medium cursor-pointer hover:text-indigo-500 transition"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
