// src/routes/index.jsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

/* =========================================================
   GUARDS
========================================================= */
import ProtectedRoute from './ProtectedRoute';
import RoleRoute from '../core/guards/RoleRoute';

/* =========================================================
   LAYOUT WRAPPERS
========================================================= */
import PublicLayoutWrapper from '../layouts/public/PublicLayoutWrapper';
import AuthLayoutWrapper from '../layouts/public/AuthLayoutWrapper';

import AdminLayoutWrapper from '../layouts/admin/AdminLayoutWrapper';

import LawyerLayoutWrapper from '../layouts/staff/lawyer/LawyerLayoutWrapper';
import SecretaryLayoutWrapper from '../layouts/staff/secretary/SecretaryLayoutWrapper';

import ClientLayoutWrapper from '../layouts/client/ClientLayoutWrapper';
import PortalLayoutWrapper from '../layouts/portal/ClientLayoutWrapper';

/* =========================================================
   PUBLIC
========================================================= */
import HomePage from '../modules/public/HomePage';
import NotFound from '../modules/public/NotFound';

/* =========================================================
   AUTH
========================================================= */
import Login from '../modules/auth/Login';
import Register from '../modules/auth/Register';
import ForgotPassword from '../modules/auth/ForgotPassword';
import ResetPassword from '../modules/auth/ResetPassword';

/* =========================================================
   ADMIN
========================================================= */
import AdminDashboard from '../modules/admin/dashboard/pages/AdminDashboardPage';

import AdminCasesPage from '../modules/admin/cases/pages/AdminCasesPage';
import AdminCaseDetailsPage from '../modules/admin/cases/pages/AdminCaseDetailsPage';

import AdminClientsPage from '../modules/admin/clients/pages/AdminClientsPage';
import AdminClientDetailsPage from '../modules/admin/clients/pages/AdminClientDetailsPage';

import AdminStaffPage from '../modules/admin/staff/pages/AdminStaffPage';
import AdminStaffDetailsPage from '../modules/admin/staff/pages/AdminStaffDetailsPage';

import AdminCalendarPage from '../modules/admin/calendar/pages/AdminCalendarPage';

import AdminDocumentsPage from '../modules/admin/documents/pages/AdminDocumentsPage';

import AdminBillingPage from '../modules/admin/billing/pages/AdminBillingPage';
import AdminInvoicesPage from '../modules/admin/billing/pages/AdminInvoicesPage';
import AdminPaymentsPage from '../modules/admin/billing/pages/AdminPaymentsPage';

import AdminReportsPage from '../modules/admin/reports/pages/AdminReportsPage';

import AdminChatPage from '../modules/admin/communication/pages/AdminChatPage';

import AdminAuditLogsPage from '../modules/admin/compliance/pages/AdminAuditLogsPage';

import AdminSettingsPage from '../modules/admin/settings/pages/AdminSettingsPage';

/* =========================================================
   LAWYER
========================================================= */
import LawyerDashboard from '../modules/staff/lawyer/dashboard/pages/LawyerDashboardPage';

import LawyerAI from '../modules/staff/lawyer/ai/pages/LawyerAIPage';
import LawyerResearchAI from '../modules/staff/lawyer/ai/pages/LawyerResearchAIPage';

import LawyerCases from '../modules/staff/lawyer/cases/pages/LawyerCasesPage';
import LawyerCaseDetails from '../modules/staff/lawyer/cases/pages/LawyerCaseDetailsPage';
import LawyerCreateCase from '../modules/staff/lawyer/cases/pages/LawyerCreateCasePage';

import LawyerClients from '../modules/staff/lawyer/clients/pages/LawyerClientsPage';
import LawyerClientProfile from '../modules/staff/lawyer/clients/pages/LawyerClientDetailsPage';

import LawyerChat from '../modules/staff/lawyer/communication/pages/LawyerChatPage';
import LawyerNotifications from '../modules/staff/lawyer/communication/pages/LawyerNotificationsPage';

import LawyerHearings from '../modules/staff/lawyer/hearings/pages/LawyerHearingsPage';
import LawyerHearingDetails from '../modules/staff/lawyer/hearings/pages/LawyerHearingDetailsPage';

import LawyerBilling from '../modules/staff/lawyer/billing/pages/LawyerBillingPage';
import LawyerInvoices from '../modules/staff/lawyer/billing/pages/LawyerInvoicesPage';

import LawyerReports from '../modules/staff/lawyer/reports/pages/LawyerReportsPage';

import LawyerResearch from '../modules/staff/lawyer/research/pages/LawyerResearchPage';
import LawyerAuthorities from '../modules/staff/lawyer/research/pages/LawyerAuthoritiesPage';

import LawyerTasks from '../modules/staff/lawyer/tasks/pages/LawyerTasksPage';
import LawyerApprovals from '../modules/staff/lawyer/tasks/pages/LawyerApprovalsPage';

import LawyerProfile from '../modules/staff/lawyer/profile/pages/LawyerProfilePage';

import LawyerSecurity from '../modules/staff/lawyer/security/pages/LawyerSecurityPage';

/* =========================================================
   SECRETARY
========================================================= */
import SecretaryDashboard from '../modules/staff/secretary/dashboard/pages/SecretaryDashboard';

import SecretaryClients from '../modules/staff/secretary/clients/pages/SecretaryClients';
import SecretaryClientDetails from '../modules/staff/secretary/clients/pages/SecretaryClientDetails';

import SecretaryChat from '../modules/staff/secretary/communication/pages/SecretaryChat';

import SecretaryCalendar from '../modules/staff/secretary/calendar/pages/SecretaryCalendar';

/* =========================================================
   CLIENT (FIRM)
========================================================= */
import ClientDashboard from '../modules/client/dashboard/pages/ClientDashboardPage';
import ClientDocuments from '../modules/client/documents/pages/ClientDocumentsPage';
import ClientProfile from '../modules/client/profile/pages/ClientProfilePage';

/* =========================================================
   PORTAL
========================================================= */
import PortalDashboard from '../modules/portal/dashboard/PortalDashboard';

import PortalConsultations from '../modules/portal/consultations/PortalConsultations';
import BookConsultation from '../modules/portal/consultations/BookConsultation';
import ConsultationDetails from '../modules/portal/consultations/ConsultationDetails';

import PortalMessages from '../modules/portal/communications/PortalMessages';
import PortalSupport from '../modules/portal/communications/PortalSupport';

import PortalDocuments from '../modules/portal/documents/PortalDocuments';
import UploadDocuments from '../modules/portal/documents/UploadDocuments';

import IntakeForms from '../modules/portal/intake/IntakeForms';
import IntakeStatus from '../modules/portal/intake/IntakeStatus';
import NewIntakeForm from '../modules/portal/intake/NewIntakeForm';

import PortalNotifications from '../modules/portal/notifications/PortalNotifications';

import BecomeClient from '../modules/portal/onboarding/BecomeClient';
import FirmMembershipStatus from '../modules/portal/onboarding/FirmMembershipStatus';

import PortalProfile from '../modules/portal/profile/PortalProfile';

/* =========================================================
   ROUTER
========================================================= */
const AppRoutes = () => {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route element={<PublicLayoutWrapper />}>
        <Route path='/' element={<HomePage />} />
      </Route>

      {/* AUTH */}
      <Route element={<AuthLayoutWrapper />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password/:token' element={<ResetPassword />} />
      </Route>

      {/* ADMIN */}
      <Route
        path='/admin/*'
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={['ADMIN']}>
              <AdminLayoutWrapper />
            </RoleRoute>
          </ProtectedRoute>
        }
      >
        <Route path='' element={<Navigate to='dashboard' replace />} />
        <Route path='dashboard' element={<AdminDashboard />} />
        <Route path='cases' element={<AdminCasesPage />} />
        <Route path='cases/:id' element={<AdminCaseDetailsPage />} />
        <Route path='clients' element={<AdminClientsPage />} />
        <Route path='clients/:id' element={<AdminClientDetailsPage />} />
        <Route path='staff' element={<AdminStaffPage />} />
        <Route path='staff/:id' element={<AdminStaffDetailsPage />} />
        <Route path='calendar' element={<AdminCalendarPage />} />
        <Route path='documents' element={<AdminDocumentsPage />} />
        <Route path='billing' element={<AdminBillingPage />} />
        <Route path='billing/invoices' element={<AdminInvoicesPage />} />
        <Route path='billing/payments' element={<AdminPaymentsPage />} />
        <Route path='reports' element={<AdminReportsPage />} />
        <Route path='communication' element={<AdminChatPage />} />
        <Route path='compliance' element={<AdminAuditLogsPage />} />
        <Route path='settings' element={<AdminSettingsPage />} />
      </Route>

      {/* LAWYER */}
      <Route
        path='/lawyer/*'
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={['LAWYER']}>
              <LawyerLayoutWrapper />
            </RoleRoute>
          </ProtectedRoute>
        }
      >
        <Route path='' element={<Navigate to='dashboard' replace />} />
        <Route path='dashboard' element={<LawyerDashboard />} />
        <Route path='ai' element={<LawyerAI />} />
        <Route path='research-ai' element={<LawyerResearchAI />} />
        <Route path='cases' element={<LawyerCases />} />
        <Route path='cases/create' element={<LawyerCreateCase />} />
        <Route path='cases/:id' element={<LawyerCaseDetails />} />
        <Route path='clients' element={<LawyerClients />} />
        <Route path='clients/:id' element={<LawyerClientProfile />} />
        <Route path='chat' element={<LawyerChat />} />
        <Route path='notifications' element={<LawyerNotifications />} />
        <Route path='hearings' element={<LawyerHearings />} />
        <Route path='hearings/:id' element={<LawyerHearingDetails />} />
        <Route path='billing' element={<LawyerBilling />} />
        <Route path='billing/invoices' element={<LawyerInvoices />} />
        <Route path='reports' element={<LawyerReports />} />
        <Route path='research' element={<LawyerResearch />} />
        <Route path='authorities' element={<LawyerAuthorities />} />
        <Route path='tasks' element={<LawyerTasks />} />
        <Route path='approvals' element={<LawyerApprovals />} />
        <Route path='profile' element={<LawyerProfile />} />
        <Route path='security' element={<LawyerSecurity />} />
      </Route>

      {/* SECRETARY */}
      <Route
        path='/secretary/*'
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={['SECRETARY']}>
              <SecretaryLayoutWrapper />
            </RoleRoute>
          </ProtectedRoute>
        }
      >
        <Route path='' element={<Navigate to='dashboard' replace />} />
        <Route path='dashboard' element={<SecretaryDashboard />} />
        <Route path='clients' element={<SecretaryClients />} />
        <Route path='clients/:id' element={<SecretaryClientDetails />} />
        <Route path='calendar' element={<SecretaryCalendar />} />
        <Route path='chat' element={<SecretaryChat />} />
      </Route>

      {/* CLIENT */}
      <Route
        path='/client/*'
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={['CLIENT']}>
              <ClientLayoutWrapper />
            </RoleRoute>
          </ProtectedRoute>
        }
      >
        <Route path='' element={<Navigate to='dashboard' replace />} />
        <Route path='dashboard' element={<ClientDashboard />} />
        <Route path='documents' element={<ClientDocuments />} />
        <Route path='profile' element={<ClientProfile />} />
      </Route>

      {/* PORTAL */}
      <Route
        path='/portal/*'
        element={
          <ProtectedRoute>
            <RoleRoute allowedRoles={['CLIENT']}>
              <PortalLayoutWrapper />
            </RoleRoute>
          </ProtectedRoute>
        }
      >
        <Route path='' element={<Navigate to='dashboard' replace />} />
        <Route path='dashboard' element={<PortalDashboard />} />
        <Route path='consultations' element={<PortalConsultations />} />
        <Route path='consultations/book' element={<BookConsultation />} />
        <Route path='consultations/:id' element={<ConsultationDetails />} />
        <Route path='messages' element={<PortalMessages />} />
        <Route path='support' element={<PortalSupport />} />
        <Route path='documents' element={<PortalDocuments />} />
        <Route path='documents/upload' element={<UploadDocuments />} />
        <Route path='intake/forms' element={<IntakeForms />} />
        <Route path='intake/status' element={<IntakeStatus />} />
        <Route path='intake/new' element={<NewIntakeForm />} />
        <Route path='notifications' element={<PortalNotifications />} />
        <Route path='become-client' element={<BecomeClient />} />
        <Route path='membership-status' element={<FirmMembershipStatus />} />
        <Route path='profile' element={<PortalProfile />} />
      </Route>

      {/* 404 */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
