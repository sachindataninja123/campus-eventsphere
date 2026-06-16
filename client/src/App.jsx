import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Profile from "./pages/Profile";
import MyEvents from "./pages/MyEvents";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <UserRoutes>
              <StudentDashboard />
            </UserRoutes>
          }
        />
        <Route path="/events" element={<Events />} />
        <Route path="/my-events" element={<MyEvents />} />
        <Route path="/my-events/:id" element={<EventDetails />} />
        <Route path="/profile" element={<Profile />} />

        <Route
          path="/admin"
          element={
            <AdminRoutes>
              <AdminDashboard />
            </AdminRoutes>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
