// src/routes/index.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

/* ================= WRAPPERS ================= */
import PublicLayoutWrapper from "../layouts/public/PublicLayoutWrapper";
import AuthLayoutWrapper from "../layouts/public/AuthLayoutWrapper";
import AdminLayoutWrapper from "../layouts/admin/AdminLayoutWrapper";

/* ================= PUBLIC ================= */
import HomePage from "../modules/public/HomePage";

/* ================= AUTH ================= */
import Login from "../modules/auth/Login";
import Register from "../modules/auth/Register";
import ForgotPassword from "../modules/auth/ForgotPassword";

/* ================= ADMIN DASHBOARD ================= */
import AdminDashboard from "../modules/admin/dashboard/AdminDashboard";

/* ================= ADMIN MODULES ================= */

// Clients & Staff
import AdminClients from "../modules/admin/clients/AdminClients";
import AdminClientDetails from "../modules/admin/clients/AdminClientDetails";
import AdminStaff from "../modules/admin/staff/AdminStaff";
import AdminStaffDetails from "../modules/admin/staff/AdminStaffDetails";

// Cases
import CasesPage from "../modules/admin/cases/pages/CasesPage";
import CaseDetailsPage from "../modules/admin/cases/pages/CaseDetailsPage";

// Calendar
import AdminCalendar from "../modules/admin/calendar/AdminCalendar";

// Documents
import AdminDocuments from "../modules/admin/documents/AdminDocuments";

// Billing
import AdminBilling from "../modules/admin/billing/AdminBilling";
import AdminInvoices from "../modules/admin/billing/AdminInvoices";
import AdminPayments from "../modules/admin/billing/AdminPayments";

// Reports
import AdminReports from "../modules/admin/reports/AdminReports";

// Communication
import AdminChat from "../modules/admin/communication/AdminChat";

// Compliance
import AdminAuditLogs from "../modules/admin/compliance/AdminAuditLogs";

// Settings
import AdminSettings from "../modules/admin/settings/AdminSettings";

// Homepage customization
import AdminHomePageCustomization from "../modules/admin/homepage/AdminHomPageCustomization";
import AdminContactPage from "../modules/admin/homepage/sections/AdminContactPage";

/* ================= 404 ================= */
const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
    404 - Page Not Found
  </div>
);

/* ================= ROUTES ================= */
const AppRoutes = () => {
  return (
    <Routes>
      {/* ================= PUBLIC ================= */}
      <Route element={<PublicLayoutWrapper />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* ================= AUTH ================= */}
      <Route element={<AuthLayoutWrapper />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* ================= ADMIN ================= */}
      <Route path="/admin/*" element={<AdminLayoutWrapper />}>
        {/* Dashboard */}
        <Route path="dashboard" element={<AdminDashboard />} />

        {/* Homepage customization */}
        <Route
          path="homepagecustomization"
          element={<AdminHomePageCustomization />}
        />
        <Route path="contact" element={<AdminContactPage />} />

        {/* Cases */}
        <Route path="cases" element={<CasesPage />} />
        <Route path="cases/:id" element={<CaseDetailsPage />} />

        {/* Clients */}
        <Route path="clients" element={<AdminClients />} />
        <Route path="clients/:id" element={<AdminClientDetails />} />

        {/* Staff */}
        <Route path="staff" element={<AdminStaff />} />
        <Route path="staff/:id" element={<AdminStaffDetails />} />

        {/* Calendar */}
        <Route path="calendar" element={<AdminCalendar />} />

        {/* Documents */}
        <Route path="documents" element={<AdminDocuments />} />

        {/* Billing */}
        <Route path="billing" element={<AdminBilling />} />
        <Route path="billing/invoices" element={<AdminInvoices />} />
        <Route path="billing/payments" element={<AdminPayments />} />

        {/* Reports */}
        <Route path="reports" element={<AdminReports />} />

        {/* Communication */}
        <Route path="communication" element={<AdminChat />} />

        {/* Compliance */}
        <Route path="compliance" element={<AdminAuditLogs />} />

        {/* Settings */}
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      {/* ================= 404 ================= */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
