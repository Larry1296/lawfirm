// // src/routes/index.jsx

// import React from "react";
// import { Routes, Route } from "react-router-dom";

// /* =========================================================
//    GUARDS
// ========================================================= */
// import ProtectedRoute from "./ProtectedRoute";
// import RoleRoute from "../core/guards/RoleRoute";

// /* =========================================================
//    LAYOUT WRAPPERS
// ========================================================= */

// // Public
// import PublicLayoutWrapper from "../layouts/public/PublicLayoutWrapper";
// import AuthLayoutWrapper from "../layouts/public/AuthLayoutWrapper";

// // Admin
// import AdminLayoutWrapper from "../layouts/admin/AdminLayoutWrapper";

// // Lawyer
// import LawyerLayoutWrapper from "../layouts/staff/lawyer/LawyerLayoutWrapper";

// // Secretary
// import SecretaryLayoutWrapper from "../layouts/staff/secretary/SecretaryLayoutWrapper";

// // Client
// import ClientLayoutWrapper from "../layouts/client/ClientLayoutWrapper";

// /* =========================================================
//    PUBLIC PAGES
// ========================================================= */

// import HomePage from "../modules/public/HomePage";
// import NotFound from "../modules/public/NotFound";

// /* =========================================================
//    AUTH PAGES
// ========================================================= */

// import Login from "../modules/auth/Login";
// import Register from "../modules/auth/Register";
// import ForgotPassword from "../modules/auth/ForgotPassword";
// import ResetPassword from "../modules/auth/ResetPassword";

// /* =========================================================
//    ADMIN MODULES
// ========================================================= */

// // Dashboard
// import AdminDashboard from "../modules/admin/dashboard/AdminDashboard";

// // Homepage
// import AdminHomePageCustomization from "../modules/admin/homepage/AdminHomPageCustomization";
// import AdminContactPage from "../modules/admin/homepage/sections/AdminContactPage";

// // Cases
// import CasesPage from "../modules/admin/cases/pages/CasesPage";
// import CaseDetailsPage from "../modules/admin/cases/pages/CaseDetailsPage";

// // Clients
// import AdminClients from "../modules/admin/clients/AdminClients";
// import AdminClientDetails from "../modules/admin/clients/AdminClientDetails";

// // Staff
// import AdminStaff from "../modules/admin/staff/AdminStaff";
// import AdminStaffDetails from "../modules/admin/staff/AdminStaffDetails";

// // Calendar
// import AdminCalendar from "../modules/admin/calendar/AdminCalendar";

// // Documents
// import AdminDocuments from "../modules/admin/documents/AdminDocuments";

// // Billing
// import AdminBilling from "../modules/admin/billing/AdminBilling";
// import AdminInvoices from "../modules/admin/billing/AdminInvoices";
// import AdminPayments from "../modules/admin/billing/AdminPayments";

// // Reports
// import AdminReports from "../modules/admin/reports/AdminReports";

// // Communication
// import AdminChat from "../modules/admin/communication/AdminChat";

// // Compliance
// import AdminAuditLogs from "../modules/admin/compliance/AdminAuditLogs";

// // Settings
// import AdminSettings from "../modules/admin/settings/AdminSettings";

// /* =========================================================
//    LAWYER MODULES
// ========================================================= */

// // Dashboard
// import LawyerDashboard from "../modules/staff/lawyer/dashboard/LawyerDashboard";

// // AI
// import LawyerAI from "../modules/staff/lawyer/ai/LawyerAI";
// import LawyerKnowledgeBase from "../modules/staff/lawyer/ai/LawyerKnowledgeBase";

// // Cases
// import LawyerCases from "../modules/staff/lawyer/cases/LawyerCases";
// import LawyerCaseDetails from "../modules/staff/lawyer/cases/LawyerCaseDetails";
// import LawyerCreateCase from "../modules/staff/lawyer/cases/LawyerCreateCase";

// // Clients
// import LawyerClients from "../modules/staff/lawyer/clients/LawyerClients";
// import LawyerClientProfile from "../modules/staff/lawyer/clients/LawyerClientProfile";

// // Calendar
// import LawyerCourtCalendar from "../modules/staff/lawyer/calendar/LawyerCourtCalendar";

// // Documents
// import LawyerDocuments from "../modules/staff/lawyer/documents/LawyerDocuments";
// import LawyerDrafting from "../modules/staff/lawyer/documents/LawyerDrafting";
// import LawyerTemplates from "../modules/staff/lawyer/documents/LawyerTemplates";

// // Communication
// import LawyerChat from "../modules/staff/lawyer/communication/LawyerChat";
// import LawyerMeetings from "../modules/staff/lawyer/communication/LawyerMeetings";
// import LawyerNotifications from "../modules/staff/lawyer/communication/LawyerNotifications";

// // Hearings
// import LawyerHearings from "../modules/staff/lawyer/hearings/LawyerHearings";
// import LawyerMentions from "../modules/staff/lawyer/hearings/LawyerMentions";

// // Billing
// import LawyerBilling from "../modules/staff/lawyer/billing/LawyerBilling";
// import LawyerInvoices from "../modules/staff/lawyer/billing/LawyerInvoices";
// import LawyerPayments from "../modules/staff/lawyer/billing/LawyerPayments";
// import LawyerTimeTracking from "../modules/staff/lawyer/billing/LawyerTimeTracking";

// // Reports
// import LawyerReports from "../modules/staff/lawyer/reports/LawyerReports";

// // Research
// import LawyerResearch from "../modules/staff/lawyer/research/LawyerResearch";
// import LawyerAuthorities from "../modules/staff/lawyer/research/LawyerAuthorities";

// // Tasks
// import LawyerTasks from "../modules/staff/lawyer/tasks/LawyerTasks";
// import LawyerApprovals from "../modules/staff/lawyer/tasks/LawyerApprovals";

// // Profile
// import LawyerProfile from "../modules/staff/lawyer/profile/LawyerProfile";

// // Security
// import LawyerSecurity from "../modules/staff/lawyer/security/LawyerSecurity";

// // Settings
// import LawyerSettings from "../modules/staff/lawyer/settings/LawyerSettings";

// // Compliance
// import LawyerCompliance from "../modules/staff/lawyer/compliance/LawyerCompliance";
// import LawyerAuditLogs from "../modules/staff/lawyer/compliance/LawyerAuditLogs";

// /* =========================================================
//    SECRETARY MODULES
// ========================================================= */

// import SecretaryDashboard from "../modules/client/dashboard/SecretaryDashboard";
// import SecretaryClients from "../modules/client/clients/SecretaryClients";
// import SecretaryChat from "../modules/client/communication/SecretaryChat";
// import ClientCalendar from "../modules/client/calendar/ClientCalendar";

// /* =========================================================
//    CLIENT MODULES
// ========================================================= */

// import ClientDocuments from "../modules/client/documents/ClientDocuments";
// import ClientDetails from "../modules/client/clients/ClientDetails";

// /* =========================================================
//    ROUTER
// ========================================================= */

// const AppRoutes = () => {
//   return (
//     <Routes>
//       {/* =====================================================
//           PUBLIC
//       ===================================================== */}
//       <Route element={<PublicLayoutWrapper />}>
//         <Route path="/" element={<HomePage />} />
//       </Route>

//       {/* =====================================================
//           AUTH
//       ===================================================== */}
//       <Route element={<AuthLayoutWrapper />}>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/forgot-password" element={<ForgotPassword />} />
//         <Route path="/reset-password/:token" element={<ResetPassword />} />
//       </Route>

//       {/* =====================================================
//           ADMIN
//       ===================================================== */}
//       <Route
//         path="/admin/*"
//         element={
//           <ProtectedRoute>
//             <RoleRoute allowedRoles={["admin"]}>
//               <AdminLayoutWrapper />
//             </RoleRoute>
//           </ProtectedRoute>
//         }
//       >
//         <Route path="dashboard" element={<AdminDashboard />} />

//         <Route
//           path="homepagecustomization"
//           element={<AdminHomePageCustomization />}
//         />
//         <Route path="contact" element={<AdminContactPage />} />

//         <Route path="cases" element={<CasesPage />} />
//         <Route path="cases/:id" element={<CaseDetailsPage />} />

//         <Route path="clients" element={<AdminClients />} />
//         <Route path="clients/:id" element={<AdminClientDetails />} />

//         <Route path="staff" element={<AdminStaff />} />
//         <Route path="staff/:id" element={<AdminStaffDetails />} />

//         <Route path="calendar" element={<AdminCalendar />} />

//         <Route path="documents" element={<AdminDocuments />} />

//         <Route path="billing" element={<AdminBilling />} />
//         <Route path="billing/invoices" element={<AdminInvoices />} />
//         <Route path="billing/payments" element={<AdminPayments />} />

//         <Route path="reports" element={<AdminReports />} />

//         <Route path="communication" element={<AdminChat />} />

//         <Route path="compliance" element={<AdminAuditLogs />} />

//         <Route path="settings" element={<AdminSettings />} />
//       </Route>

//       {/* =====================================================
//           LAWYER
//       ===================================================== */}
//       <Route
//         path="/lawyer/*"
//         element={
//           <ProtectedRoute>
//             <RoleRoute allowedRoles={["lawyer"]}>
//               <LawyerLayoutWrapper />
//             </RoleRoute>
//           </ProtectedRoute>
//         }
//       >
//         <Route path="dashboard" element={<LawyerDashboard />} />

//         <Route path="ai" element={<LawyerAI />} />
//         <Route path="knowledge-base" element={<LawyerKnowledgeBase />} />

//         <Route path="cases" element={<LawyerCases />} />
//         <Route path="cases/create" element={<LawyerCreateCase />} />
//         <Route path="cases/:id" element={<LawyerCaseDetails />} />

//         <Route path="clients" element={<LawyerClients />} />
//         <Route path="clients/:id" element={<LawyerClientProfile />} />

//         <Route path="calendar" element={<LawyerCourtCalendar />} />

//         <Route path="documents" element={<LawyerDocuments />} />
//         <Route path="documents/drafting" element={<LawyerDrafting />} />
//         <Route path="documents/templates" element={<LawyerTemplates />} />

//         <Route path="chat" element={<LawyerChat />} />
//         <Route path="meetings" element={<LawyerMeetings />} />
//         <Route path="notifications" element={<LawyerNotifications />} />

//         <Route path="hearings" element={<LawyerHearings />} />
//         <Route path="mentions" element={<LawyerMentions />} />

//         <Route path="billing" element={<LawyerBilling />} />
//         <Route path="billing/invoices" element={<LawyerInvoices />} />
//         <Route path="billing/payments" element={<LawyerPayments />} />
//         <Route path="billing/time-tracking" element={<LawyerTimeTracking />} />

//         <Route path="reports" element={<LawyerReports />} />

//         <Route path="research" element={<LawyerResearch />} />
//         <Route path="authorities" element={<LawyerAuthorities />} />

//         <Route path="tasks" element={<LawyerTasks />} />
//         <Route path="approvals" element={<LawyerApprovals />} />

//         <Route path="profile" element={<LawyerProfile />} />

//         <Route path="security" element={<LawyerSecurity />} />

//         <Route path="compliance" element={<LawyerCompliance />} />
//         <Route path="audit-logs" element={<LawyerAuditLogs />} />

//         <Route path="settings" element={<LawyerSettings />} />
//       </Route>

//       {/* =====================================================
//           SECRETARY
//       ===================================================== */}
//       <Route
//         path="/secretary/*"
//         element={
//           <ProtectedRoute>
//             <RoleRoute allowedRoles={["secretary"]}>
//               <SecretaryLayoutWrapper />
//             </RoleRoute>
//           </ProtectedRoute>
//         }
//       >
//         <Route path="dashboard" element={<SecretaryDashboard />} />
//         <Route path="clients" element={<SecretaryClients />} />
//         <Route path="calendar" element={<ClientCalendar />} />
//         <Route path="chat" element={<SecretaryChat />} />
//       </Route>

//       {/* =====================================================
//           CLIENT
//       ===================================================== */}
//       <Route
//         path="/client/*"
//         element={
//           <ProtectedRoute>
//             <RoleRoute allowedRoles={["client"]}>
//               <ClientLayoutWrapper />
//             </RoleRoute>
//           </ProtectedRoute>
//         }
//       >
//         <Route path="documents" element={<ClientDocuments />} />
//         <Route path="profile" element={<ClientDetails />} />
//       </Route>

//       {/* =====================================================
//           404
//       ===================================================== */}
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default AppRoutes;

// src/routes/index.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";

/* =========================================================
   GUARDS (TEMPORARILY DISABLED)
========================================================= */
// import ProtectedRoute from "./ProtectedRoute";
// import RoleRoute from "../core/guards/RoleRoute";

/* =========================================================
   LAYOUT WRAPPERS
========================================================= */

// Public
import PublicLayoutWrapper from "../layouts/public/PublicLayoutWrapper";
import AuthLayoutWrapper from "../layouts/public/AuthLayoutWrapper";

// Admin
import AdminLayoutWrapper from "../layouts/admin/AdminLayoutWrapper";

// Lawyer
import LawyerLayoutWrapper from "../layouts/staff/lawyer/LawyerLayoutWrapper";

// Secretary
import SecretaryLayoutWrapper from "../layouts/staff/secretary/SecretaryLayoutWrapper";

// Client
import ClientLayoutWrapper from "../layouts/client/ClientLayoutWrapper";

/* =========================================================
   PUBLIC PAGES
========================================================= */

import HomePage from "../modules/public/HomePage";
import NotFound from "../modules/public/NotFound";

/* =========================================================
   AUTH PAGES
========================================================= */

import Login from "../modules/auth/Login";
import Register from "../modules/auth/Register";
import ForgotPassword from "../modules/auth/ForgotPassword";
import ResetPassword from "../modules/auth/ResetPassword";

/* =========================================================
   ADMIN MODULES
========================================================= */

// Dashboard
import AdminDashboard from "../modules/admin/dashboard/AdminDashboard";

// Homepage
import AdminHomePageCustomization from "../modules/admin/homepage/AdminHomPageCustomization";
import AdminContactPage from "../modules/admin/homepage/sections/AdminContactPage";

// Cases
import CasesPage from "../modules/admin/cases/pages/CasesPage";
import CaseDetailsPage from "../modules/admin/cases/pages/CaseDetailsPage";

// Clients
import AdminClients from "../modules/admin/clients/AdminClients";
import AdminClientDetails from "../modules/admin/clients/AdminClientDetails";

// Staff
import AdminStaff from "../modules/admin/staff/AdminStaff";
import AdminStaffDetails from "../modules/admin/staff/AdminStaffDetails";

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

/* =========================================================
   LAWYER MODULES
========================================================= */

// Dashboard
import LawyerDashboard from "../modules/staff/lawyer/dashboard/LawyerDashboard";

// AI
import LawyerAI from "../modules/staff/lawyer/ai/LawyerAI";
import LawyerKnowledgeBase from "../modules/staff/lawyer/ai/LawyerKnowledgeBase";

// Cases
import LawyerCases from "../modules/staff/lawyer/cases/LawyerCases";
import LawyerCaseDetails from "../modules/staff/lawyer/cases/LawyerCaseDetails";
import LawyerCreateCase from "../modules/staff/lawyer/cases/LawyerCreateCase";

// Clients
import LawyerClients from "../modules/staff/lawyer/clients/LawyerClients";
import LawyerClientProfile from "../modules/staff/lawyer/clients/LawyerClientProfile";

// Calendar
import LawyerCourtCalendar from "../modules/staff/lawyer/calendar/LawyerCourtCalendar";

// Documents
import LawyerDocuments from "../modules/staff/lawyer/documents/LawyerDocuments";
import LawyerDrafting from "../modules/staff/lawyer/documents/LawyerDrafting";
import LawyerTemplates from "../modules/staff/lawyer/documents/LawyerTemplates";

// Communication
import LawyerChat from "../modules/staff/lawyer/communication/LawyerChat";
import LawyerMeetings from "../modules/staff/lawyer/communication/LawyerMeetings";
import LawyerNotifications from "../modules/staff/lawyer/communication/LawyerNotifications";

// Hearings
import LawyerHearings from "../modules/staff/lawyer/hearings/LawyerHearings";
import LawyerMentions from "../modules/staff/lawyer/hearings/LawyerMentions";

// Billing
import LawyerBilling from "../modules/staff/lawyer/billing/LawyerBilling";
import LawyerInvoices from "../modules/staff/lawyer/billing/LawyerInvoices";
import LawyerPayments from "../modules/staff/lawyer/billing/LawyerPayments";
import LawyerTimeTracking from "../modules/staff/lawyer/billing/LawyerTimeTracking";

// Reports
import LawyerReports from "../modules/staff/lawyer/reports/LawyerReports";

// Research
import LawyerResearch from "../modules/staff/lawyer/research/LawyerResearch";
import LawyerAuthorities from "../modules/staff/lawyer/research/LawyerAuthorities";

// Tasks
import LawyerTasks from "../modules/staff/lawyer/tasks/LawyerTasks";
import LawyerApprovals from "../modules/staff/lawyer/tasks/LawyerApprovals";

// Profile
import LawyerProfile from "../modules/staff/lawyer/profile/LawyerProfile";

// Security
import LawyerSecurity from "../modules/staff/lawyer/security/LawyerSecurity";

// Settings
import LawyerSettings from "../modules/staff/lawyer/settings/LawyerSettings";

// Compliance
import LawyerCompliance from "../modules/staff/lawyer/compliance/LawyerCompliance";
import LawyerAuditLogs from "../modules/staff/lawyer/compliance/LawyerAuditLogs";

/* =========================================================
   SECRETARY MODULES
========================================================= */

import SecretaryDashboard from "../modules/client/dashboard/SecretaryDashboard";
import SecretaryClients from "../modules/client/clients/SecretaryClients";
import SecretaryChat from "../modules/client/communication/SecretaryChat";
import ClientCalendar from "../modules/client/calendar/ClientCalendar";

/* =========================================================
   CLIENT MODULES
========================================================= */

import ClientDocuments from "../modules/client/documents/ClientDocuments";
import ClientDetails from "../modules/client/clients/ClientDetails";

/* =========================================================
   ROUTER
========================================================= */

const AppRoutes = () => {
  return (
    <Routes>
      {/* =====================================================
          PUBLIC
      ===================================================== */}
      <Route element={<PublicLayoutWrapper />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      {/* =====================================================
          AUTH
      ===================================================== */}
      <Route element={<AuthLayoutWrapper />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Route>

      {/* =====================================================
          ADMIN
      ===================================================== */}
      <Route path="/admin/*" element={<AdminLayoutWrapper />}>
        <Route path="dashboard" element={<AdminDashboard />} />

        <Route
          path="homepagecustomization"
          element={<AdminHomePageCustomization />}
        />
        <Route path="contact" element={<AdminContactPage />} />

        <Route path="cases" element={<CasesPage />} />
        <Route path="cases/:id" element={<CaseDetailsPage />} />

        <Route path="clients" element={<AdminClients />} />
        <Route path="clients/:id" element={<AdminClientDetails />} />

        <Route path="staff" element={<AdminStaff />} />
        <Route path="staff/:id" element={<AdminStaffDetails />} />

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

      {/* =====================================================
          LAWYER
      ===================================================== */}
      <Route path="/lawyer/*" element={<LawyerLayoutWrapper />}>
        <Route path="dashboard" element={<LawyerDashboard />} />

        <Route path="ai" element={<LawyerAI />} />
        <Route path="knowledge-base" element={<LawyerKnowledgeBase />} />

        <Route path="cases" element={<LawyerCases />} />
        <Route path="cases/create" element={<LawyerCreateCase />} />
        <Route path="cases/:id" element={<LawyerCaseDetails />} />

        <Route path="clients" element={<LawyerClients />} />
        <Route path="clients/:id" element={<LawyerClientProfile />} />

        <Route path="calendar" element={<LawyerCourtCalendar />} />

        <Route path="documents" element={<LawyerDocuments />} />
        <Route path="documents/drafting" element={<LawyerDrafting />} />
        <Route path="documents/templates" element={<LawyerTemplates />} />

        <Route path="chat" element={<LawyerChat />} />
        <Route path="meetings" element={<LawyerMeetings />} />
        <Route path="notifications" element={<LawyerNotifications />} />

        <Route path="hearings" element={<LawyerHearings />} />
        <Route path="mentions" element={<LawyerMentions />} />

        <Route path="billing" element={<LawyerBilling />} />
        <Route path="billing/invoices" element={<LawyerInvoices />} />
        <Route path="billing/payments" element={<LawyerPayments />} />
        <Route path="billing/time-tracking" element={<LawyerTimeTracking />} />

        <Route path="reports" element={<LawyerReports />} />

        <Route path="research" element={<LawyerResearch />} />
        <Route path="authorities" element={<LawyerAuthorities />} />

        <Route path="tasks" element={<LawyerTasks />} />
        <Route path="approvals" element={<LawyerApprovals />} />

        <Route path="profile" element={<LawyerProfile />} />

        <Route path="security" element={<LawyerSecurity />} />

        <Route path="compliance" element={<LawyerCompliance />} />
        <Route path="audit-logs" element={<LawyerAuditLogs />} />

        <Route path="settings" element={<LawyerSettings />} />
      </Route>

      {/* =====================================================
          SECRETARY
      ===================================================== */}
      <Route path="/secretary/*" element={<SecretaryLayoutWrapper />}>
        <Route path="dashboard" element={<SecretaryDashboard />} />
        <Route path="clients" element={<SecretaryClients />} />
        <Route path="calendar" element={<ClientCalendar />} />
        <Route path="chat" element={<SecretaryChat />} />
      </Route>

      {/* =====================================================
          CLIENT
      ===================================================== */}
      <Route path="/client/*" element={<ClientLayoutWrapper />}>
        <Route path="documents" element={<ClientDocuments />} />
        <Route path="profile" element={<ClientDetails />} />
      </Route>

      {/* =====================================================
          404
      ===================================================== */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
