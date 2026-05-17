// src/routes/index.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "../layouts/public/PublicLayout";
import AuthLayout from "../layouts/public/AuthLayout";

// Public pages
import HomePage from "../modules/public/HomePage";

// Auth pages
import Login from "../modules/auth/Login";
import Register from "../modules/auth/Register";
import ForgotPassword from "../modules/auth/ForgotPassword";

// Optional 404 page
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
    404 - Page Not Found
  </div>
);

const AppRoutes = () => {
  return (
    <Routes>
      {/* ================= PUBLIC ROUTES ================= */}
      <Route element={<PublicLayout />}>
        {/* Homepage with all sections */}
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* ================= AUTH ROUTES ================= */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* ================= CATCH-ALL / 404 ================= */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
