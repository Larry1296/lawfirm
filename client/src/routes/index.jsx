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

/* ================= STAFF (LAWYER / SECRETARY) ================= */
import StaffLayout from "../layouts/staff/StaffLayout";
import StaffDashboard from "../modules/staff/StaffDashboard";
import StaffCases from "../modules/staff/StaffCases";
import StaffCaseDetails from "../modules/staff/StaffCaseDetails";
import StaffScheduling from "../modules/staff/StaffScheduling";
import StaffOnboarding from "../modules/staff/StaffOnboarding";

/* ================= ADMIN ================= */
import AdminLayout from "../layouts/admin/AdminLayout";
import AdminDashboard from "../modules/admin/dashboard/AdminDashboard";
import CasesPage from "../modules/admin/cases/pages/CasesPage";
import CaseDetailsPage from "../modules/admin/cases/pages/CaseDetailsPage";
import AdminClients from "../modules/admin/clients/AdminClients";
import AdminStaff from "../modules/admin/staff/AdminStaff";
import AdminStaffDetails from "../modules/admin/staff/AdminStaffDetails";
import AdminCalendar from "../modules/admin/calendar/AdminCalendar";
import AdminDocuments from "../modules/admin/documents/AdminDocuments";
import AdminBilling from "../modules/admin/billing/AdminBilling";
import AdminInvoices from "../modules/admin/billing/AdminInvoices";
import AdminPayments from "../modules/admin/billing/AdminPayments";
import AdminReports from "../modules/admin/reports/AdminReports";
import AdminChat from "../modules/admin/communication/AdminChat";
import AdminAuditLogs from "../modules/admin/compliance/AdminAuditLogs";
import AdminSettings from "../modules/admin/settings/AdminSettings";
import AdminHomePageCustomization from "../modules/admin/homepage/AdminHomPageCustomization";

/* ================= PUBLIC ================= */
import PublicLayout from "../layouts/public/PublicLayout";
import HomePage from "../modules/public/HomePage";

import AuthLayout from "../layouts/public/AuthLayout";
import Login from "../modules/auth/Login";
import Register from "../modules/auth/Register";
import ForgotPassword from "../modules/auth/ForgotPassword";
import ResetPassword from "../modules/auth/ResetPassword";

/* ================= SHARED ================= */
import ChatPage from "../modules/chat/ChatPage";

/* ================= GUARDS ================= */
import ProtectedRoute from "./ProtectedRoute";
import useAuth from "../core/hooks/useAuth";

export default function AppRoutes() {
  const { firmRole } = useAuth();

  return (
    <Routes>
      {/* ================= PUBLIC ================= */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* ================= AUTH ================= */}
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
        <Route path="chat" element={<ClientChat />} />
        <Route path="notifications" element={<ClientNotifications />} />
        <Route path="profile" element={<ClientProfile />} />
        <Route path="settings" element={<ClientSettings />} />
      </Route>

      {/* ================= STAFF (IMPORTANT FIX) ================= */}
      <Route
        path="/staff"
        element={
          <ProtectedRoute allowedRoles={["STAFF"]}>
            <StaffLayout />
          </ProtectedRoute>
        }
      >
        {/* redirect based on firm role */}
        <Route
          index
          element={
            firmRole === "LAWYER" ? (
              <Navigate to="lawyer/dashboard" replace />
            ) : (
              <Navigate to="secretary/dashboard" replace />
            )
          }
        />

        {/* LAWYER */}
        <Route path="lawyer/dashboard" element={<StaffDashboard />} />
        <Route path="lawyer/cases" element={<StaffCases />} />
        <Route path="lawyer/cases/:caseId" element={<StaffCaseDetails />} />
        <Route path="lawyer/chat" element={<ChatPage />} />
        <Route path="lawyer/scheduling" element={<StaffScheduling />} />

        {/* SECRETARY */}
        <Route path="secretary/dashboard" element={<StaffDashboard />} />
        <Route path="secretary/cases" element={<StaffCases />} />
        <Route path="secretary/onboarding" element={<StaffOnboarding />} />
        <Route path="secretary/chat" element={<ChatPage />} />
      </Route>

      {/* ================= ADMIN ================= */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["ADMIN"]}>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="homepage" element={<AdminHomePageCustomization />} />

        <Route path="cases" element={<CasesPage />} />
        <Route path="cases/:caseId" element={<CaseDetailsPage />} />

        <Route path="clients" element={<AdminClients />} />

        <Route path="staff" element={<AdminStaff />} />
        <Route path="staff/:staffId" element={<AdminStaffDetails />} />

        <Route path="calendar" element={<AdminCalendar />} />

        <Route path="documents" element={<AdminDocuments />} />

        <Route path="billing" element={<AdminBilling />} />
        <Route path="billing/invoices" element={<AdminInvoices />} />
        <Route path="billing/payments" element={<AdminPayments />} />

        <Route path="reports" element={<AdminReports />} />
        <Route path="communication" element={<AdminChat />} />
        <Route path="compliance" element={<AdminAuditLogs />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>

      {/* ================= FALLBACK ================= */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
