// src/routes/index.jsx

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

/* =========================================================
   GUARDS
========================================================= */
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "../core/guards/RoleRoute";

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

// Firm Client
import ClientLayoutWrapper from "../layouts/client/ClientLayoutWrapper";

// Portal Client (Self Registered)
import PortalLayoutWrapper from "../layouts/portal/ClientLayoutWrapper";

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

import AdminDashboard from "../modules/admin/dashboard/AdminDashboard";
import AdminHomePageCustomization from "../modules/admin/homepage/AdminHomPageCustomization";
import AdminContactPage from "../modules/admin/homepage/sections/AdminContactPage";

import CasesPage from "../modules/admin/cases/pages/CasesPage";
import CaseDetailsPage from "../modules/admin/cases/pages/CaseDetailsPage";

import AdminClients from "../modules/admin/clients/AdminClients";
import AdminClientDetails from "../modules/admin/clients/AdminClientDetails";

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

/* =========================================================
   LAWYER MODULES
========================================================= */

import LawyerDashboard from "../modules/staff/lawyer/dashboard/LawyerDashboard";

import LawyerAI from "../modules/staff/lawyer/ai/LawyerAI";
import LawyerKnowledgeBase from "../modules/staff/lawyer/ai/LawyerKnowledgeBase";

import LawyerCases from "../modules/staff/lawyer/cases/LawyerCases";
import LawyerCaseDetails from "../modules/staff/lawyer/cases/LawyerCaseDetails";
import LawyerCreateCase from "../modules/staff/lawyer/cases/LawyerCreateCase";

import LawyerClients from "../modules/staff/lawyer/clients/LawyerClients";
import LawyerClientProfile from "../modules/staff/lawyer/clients/LawyerClientProfile";

import LawyerCourtCalendar from "../modules/staff/lawyer/calendar/LawyerCourtCalendar";

import LawyerDocuments from "../modules/staff/lawyer/documents/LawyerDocuments";
import LawyerDrafting from "../modules/staff/lawyer/documents/LawyerDrafting";
import LawyerTemplates from "../modules/staff/lawyer/documents/LawyerTemplates";

import LawyerChat from "../modules/staff/lawyer/communication/LawyerChat";
import LawyerMeetings from "../modules/staff/lawyer/communication/LawyerMeetings";
import LawyerNotifications from "../modules/staff/lawyer/communication/LawyerNotifications";

import LawyerHearings from "../modules/staff/lawyer/hearings/LawyerHearings";
import LawyerMentions from "../modules/staff/lawyer/hearings/LawyerMentions";

import LawyerBilling from "../modules/staff/lawyer/billing/LawyerBilling";
import LawyerInvoices from "../modules/staff/lawyer/billing/LawyerInvoices";
import LawyerPayments from "../modules/staff/lawyer/billing/LawyerPayments";
import LawyerTimeTracking from "../modules/staff/lawyer/billing/LawyerTimeTracking";

import LawyerReports from "../modules/staff/lawyer/reports/LawyerReports";

import LawyerResearch from "../modules/staff/lawyer/research/LawyerResearch";
import LawyerAuthorities from "../modules/staff/lawyer/research/LawyerAuthorities";

import LawyerTasks from "../modules/staff/lawyer/tasks/LawyerTasks";
import LawyerApprovals from "../modules/staff/lawyer/tasks/LawyerApprovals";

import LawyerProfile from "../modules/staff/lawyer/profile/LawyerProfile";

import LawyerSecurity from "../modules/staff/lawyer/security/LawyerSecurity";

import LawyerSettings from "../modules/staff/lawyer/settings/LawyerSettings";

import LawyerCompliance from "../modules/staff/lawyer/compliance/LawyerCompliance";
import LawyerAuditLogs from "../modules/staff/lawyer/compliance/LawyerAuditLogs";

/* =========================================================
   SECRETARY MODULES
========================================================= */

import SecretaryDashboard from "../modules/staff/secretary/dashboard/SecretaryDashboard";
import SecretaryClients from "../modules/staff/secretary/clients/SecretaryClients";
import SecretaryChat from "../modules/staff/secretary/communication/SecretaryChat";
import SecretaryCalendar from "../modules/staff/secretary/calendar/SecretaryCalendar";

/* =========================================================
   FIRM CLIENT MODULES
========================================================= */

import ClientDocuments from "../modules/client/documents/ClientDocuments";
import ClientDetails from "../modules/client/profile/ClientProfile";
import ClientDashboard from "../modules/client/dashboard/ClientDashboard";

/* =========================================================
   PORTAL CLIENT MODULES
========================================================= */

import PortalDashboard from "../modules/portal/dashboard/PortalDashboard";

/* CONSULTATIONS */
import PortalConsultations from "../modules/portal/consultations/PortalConsultations";
import BookConsultation from "../modules/portal/consultations/BookConsultation";
import ConsultationDetails from "../modules/portal/consultations/ConsultationDetails";

/* COMMUNICATION */
import PortalMessages from "../modules/portal/communications/PortalMessages";
import PortalSupport from "../modules/portal/communications/PortalSupport";

/* DOCUMENTS */
import PortalDocuments from "../modules/portal/documents/PortalDocuments";
import UploadDocuments from "../modules/portal/documents/UploadDocuments";

/* INTAKE */
import IntakeForms from "../modules/portal/intake/IntakeForms";
import IntakeStatus from "../modules/portal/intake/IntakeStatus";
import NewIntakeForm from "../modules/portal/intake/NewIntakeForm";

/* NOTIFICATIONS */
import PortalNotifications from "../modules/portal/notifications/PortalNotifications";

/* ONBOARDING */
import BecomeClient from "../modules/portal/onboarding/BecomeClient";
import FirmMembershipStatus from "../modules/portal/onboarding/FirmMembershipStatus";

/* PROFILE */
import PortalProfile from "../modules/portal/profile/PortalProfile";

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
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["ADMIN"]}>
              <AdminLayoutWrapper />
            </RoleRoute>
          </ProtectedRoute>
        }
      >
        <Route path="" element={<Navigate to="dashboard" replace />} />

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
      <Route
        path="/lawyer/*"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["LAWYER"]}>
              <LawyerLayoutWrapper />
            </RoleRoute>
          </ProtectedRoute>
        }
      >
        <Route path="" element={<Navigate to="dashboard" replace />} />

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
      <Route
        path="/secretary/*"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["SECRETARY"]}>
              <SecretaryLayoutWrapper />
            </RoleRoute>
          </ProtectedRoute>
        }
      >
        <Route path="" element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<SecretaryDashboard />} />

        <Route path="clients" element={<SecretaryClients />} />

        <Route path="calendar" element={<SecretaryCalendar />} />

        <Route path="chat" element={<SecretaryChat />} />
      </Route>

      {/* =====================================================
          FIRM CLIENT
          (firm_role === "CLIENT")
      ===================================================== */}
      <Route
        path="/client/*"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["CLIENT"]}>
              <ClientLayoutWrapper />
            </RoleRoute>
          </ProtectedRoute>
        }
      >
        <Route path="" element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<ClientDashboard />} />

        <Route path="documents" element={<ClientDocuments />} />

        <Route path="profile" element={<ClientDetails />} />
      </Route>

      {/* =====================================================
          PORTAL CLIENT
          (firm_role === null)
      ===================================================== */}
      <Route
        path="/portal/*"
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={["CLIENT"]}>
              <PortalLayoutWrapper />
            </RoleRoute>
          </ProtectedRoute>
        }
      >
        <Route path="" element={<Navigate to="dashboard" replace />} />

        {/* DASHBOARD */}
        <Route path="dashboard" element={<PortalDashboard />} />

        {/* CONSULTATIONS */}
        <Route path="consultations" element={<PortalConsultations />} />

        <Route path="consultations/book" element={<BookConsultation />} />

        <Route path="consultations/:id" element={<ConsultationDetails />} />

        {/* COMMUNICATION */}
        <Route path="messages" element={<PortalMessages />} />

        <Route path="support" element={<PortalSupport />} />

        {/* DOCUMENTS */}
        <Route path="documents" element={<PortalDocuments />} />

        <Route path="documents/upload" element={<UploadDocuments />} />

        {/* INTAKE */}
        <Route path="intake/forms" element={<IntakeForms />} />

        <Route path="intake/status" element={<IntakeStatus />} />

        <Route path="intake/new" element={<NewIntakeForm />} />

        {/* NOTIFICATIONS */}
        <Route path="notifications" element={<PortalNotifications />} />

        {/* ONBOARDING */}
        <Route path="become-client" element={<BecomeClient />} />

        <Route path="membership-status" element={<FirmMembershipStatus />} />

        {/* PROFILE */}
        <Route path="profile" element={<PortalProfile />} />
      </Route>

      {/* =====================================================
          404
      ===================================================== */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
