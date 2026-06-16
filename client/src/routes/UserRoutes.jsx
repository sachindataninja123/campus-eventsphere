import { jwtDecode } from "jwt-decode";
import React from "react";
import { Navigate } from "react-router-dom";

const UserRoutes = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }
  const decoded = jwtDecode(token);
  if (decoded.role === "user") {
    return <Navigate to="/" />;
  }
  return children;
};

export default UserRoutes;
