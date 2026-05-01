import { Routes, Route, Navigate } from "react-router-dom";

/* ================= CLIENT ================= */
import ClientLayout from "../layouts/client/ClientLayout";
import ClientDashboard from "../modules/client/ClientDashboard";
import ClientCases from "../modules/client/ClientCases";
import ClientCaseTracking from "../modules/client/ClientCaseTracking";
import ClientCourtSession from "../modules/client/ClientCourtSession";
import ClientChat from "../modules/client/ClientChat";
import ClientNotifications from "../modules/client/ClientNotifications";
import ClientProfile from "../modules/client/ClientProfile";
import ClientSettings from "../modules/client/ClientSettings";

/* ================= ASSISTANT ================= */
import StaffLayout from "../layouts/staff/StaffLayout";
import StaffDashboard from "../modules/staff/StaffDashboard";
import StaffCases from "../modules/staff/StaffCases";
import StaffCaseDetails from "../modules/staff/StaffCaseDetails";
import StaffScheduling from "../modules/staff/StaffScheduling";
import StaffOnboarding from "../modules/staff/StaffOnboarding";

/* ================= ADMIN (FULL SYSTEM) ================= */
import AdminLayout from "../layouts/admin/AdminLayout";
import AdminHomePageCustomization from "../modules/admin/homepage/AdminHomPageCustomization";
import AdminDashboard from "../modules/admin/dashboard/AdminDashboard";
import CasesPage from "../modules/admin/cases/pages/CasesPage";
import CaseDetailsPage from "../modules/admin/cases/pages/CaseDetailsPage";
import AdminClients from "../modules/admin/clients/AdminClients";
import AdminStaff from "../modules/admin/staff/AdminStaff";
import AdminCalendar from "../modules/admin/calendar/AdminCalendar";
import AdminDocuments from "../modules/admin/documents/AdminDocuments";
import AdminBilling from "../modules/admin/billing/AdminBilling";
import AdminInvoices from "../modules/admin/billing/AdminInvoices";
import AdminPayments from "../modules/admin/billing/AdminPayments";
import AdminReports from "../modules/admin/reports/AdminReports";
import AdminChat from "../modules/admin/communication/AdminChat";
import AdminAuditLogs from "../modules/admin/compliance/AdminAuditLogs";
import AdminSettings from "../modules/admin/settings/AdminSettings";

/* SHARED CHAT */
import ChatPage from "../modules/chat/ChatPage";

import PublicLayout from "../layouts/public/PublicLayout";
import HomePage from "../modules/public/HomePage";

import AuthLayout from "../layouts/public/AuthLayout";
import Login from "../modules/public/pages/Login";
import Register from "../modules/public/pages/Register";
import ForgotPassword from "../modules/public/pages/ForgotPassword";
import ResetPassword from "../modules/public/pages/ResetPassword";
import AdminStaffDetails from "../modules/admin/staff/AdminStaffDetails";

/* ================= PROTECTED ROUTE (Role-based Guards) ================= */
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Route>

      {/* ================= CLIENT ================= */}
      <Route
        path="/client"
        element={
          <ProtectedRoute allowedRoles={["CLIENT"]}>
            <ClientLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<ClientDashboard />} />
        <Route path="cases" element={<ClientCases />} />
        <Route path="cases/tracking" element={<ClientCaseTracking />} />
        <Route path="cases/court-session" element={<ClientCourtSession />} />
        <Route path="cases/chat" element={<ChatPage />} />
        <Route path="cases/notifications" element={<ClientNotifications />} />
        <Route path="profile" element={<ClientProfile />} />
        <Route path="settings" element={<ClientSettings />} />
      </Route>

      {/* ================= ASSISTANT ================= */}
      <Route
        path="/assistant"
        element={
          <ProtectedRoute allowedRoles={["STAFF"]}>
            <StaffLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<StaffDashboard />} />
        <Route path="cases" element={<StaffCases />} />
        <Route path="cases/:caseId" element={<StaffCaseDetails />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="scheduling" element={<StaffScheduling />} />
        <Route path="onboarding" element={<StaffOnboarding />} />
      </Route>

      {/* ============================Admin =========================================== */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["LAWYER"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />
        {/* 1. Overview */}
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route
          path="homepagecustomization"
          element={<AdminHomePageCustomization />}
        />

        {/* 2. Cases */}
        <Route path="cases" element={<CasesPage />} />
        <Route path="cases/:caseId" element={<CaseDetailsPage />} />

        {/* 3. Clients */}
        <Route path="clients" element={<AdminClients />} />

        {/* 4. Staff */}
        <Route path="staff" element={<AdminStaff />} />
        <Route path="staff/:staffId" element={<AdminStaffDetails />} />

        {/* 5. Calendar */}
        <Route path="calendar" element={<AdminCalendar />} />

        {/* 6. Documents */}
        <Route path="documents" element={<AdminDocuments />} />

        {/* 7. Billing */}
        <Route path="billing" element={<AdminBilling />} />
        <Route path="billing/invoices" element={<AdminInvoices />} />
        <Route path="billing/payments" element={<AdminPayments />} />

        {/* 8. Reports */}
        <Route path="reports" element={<AdminReports />} />

        {/* 9. Communication */}
        <Route path="communication" element={<AdminChat />} />

        {/* 10. Compliance */}
        <Route path="compliance" element={<AdminAuditLogs />} />

        {/* 11. Settings */}
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </Routes>
  );
}
