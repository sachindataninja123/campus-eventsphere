import React, { useState } from "react";
import {
  User,
  Mail,
  Building2,
  GraduationCap,
  Lock,
  Eye,
  EyeOff,
  Phone,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    role: "student",
    department: "",
    college: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);

    // API Call Here
    /*
    try {
      const res = await axios.post(
        "/api/v1/auth/register",
        formData
      );

      toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
    */
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="max-w-7xl mx-auto w-full px-6 py-5 flex justify-center items-center">
        {/* Logo */}
        <div className="text-center mb-2">
          <div className="inline-flex items-center justify-center p-4 rounded-xl bg-indigo-600 text-white shadow-lg hover:scale-105 transition duration-300">
            <span className="text-3xl">🎓</span>
          </div>

          <h1 className="text-3xl font-bold mt-3 text-slate-900">
            CampusEventHub
          </h1>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-3 pb-6">
        <div className="max-w-md w-full">
          {/* Right Side Form */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-lg">
            <div className="mb-5">
              <h2 className="text-[22px] font-bold">Join the Community</h2>

              <p className="text-slate-500 text-sm mt-1">
                Create your account and start exploring campus events.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 gap-4">
                {/* Name */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Sachin Kushwaha"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="student@university.edu"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                {/* College */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    College
                  </label>

                  <div className="relative">
                    <Building2
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                      placeholder="Lingayas Vidy..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 outline-none"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Phone Number
                  </label>

                  <div className="relative">
                    <Phone
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="987867...."
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                {/* Department */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Department
                  </label>

                  <div className="relative">
                    <GraduationCap
                      size={18}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="text"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      placeholder="CSE"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 outline-none"
                    />
                  </div>
                </div>

                {/* Role */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Select Role
                  </label>

                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full py-3 px-2 rounded-xl text-slate-500 border border-slate-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 outline-none bg-white"
                  >
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-12 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-600 outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>


              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-4 bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 transition"
              >
                Create Account
              </button>

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

          {/* Login */}
          <p className="text-center mt-5 text-slate-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-600 font-semibold cursor-pointer hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;
