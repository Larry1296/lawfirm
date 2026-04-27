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
import AssistantLayout from "../layouts/assistant/AssistantLayout";

import AssistantDashboard from "../modules/assistant/AssistantDashboard";
import AssistantCases from "../modules/assistant/AssistantCases";
import AssistantCaseDetails from "../modules/assistant/AssistantCaseDetails";
import AssistantScheduling from "../modules/assistant/AssistantScheduling";
import AssistantOnboarding from "../modules/assistant/AssistantOnboarding";

/* ================= ADMIN ================= */
import AdminLayout from "../layouts/admin/AdminLayout";

import AdminDashboard from "../modules/admin/AdminDashboard";
import AdminCases from "../modules/admin/AdminCases";
import AdminUsers from "../modules/admin/AdminUsers";
import AdminReports from "../modules/admin/AdminReports";
import AdminCaseDetails from "../modules/admin/AdminCaseDetails";

/* SHARED CHAT */
import ChatPage from "../modules/chat/ChatPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* DEFAULT */}
      <Route path="/" element={<Navigate to="/client/dashboard" />} />

      {/* ================= CLIENT ================= */}
      <Route path="/client" element={<ClientLayout />}>
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
      <Route path="/assistant" element={<AssistantLayout />}>
        <Route path="dashboard" element={<AssistantDashboard />} />

        <Route path="cases" element={<AssistantCases />} />
        <Route path="cases/:caseId" element={<AssistantCaseDetails />} />

        {/* SHARED CHAT */}
        <Route path="chat" element={<ChatPage />} />

        <Route path="scheduling" element={<AssistantScheduling />} />
        <Route path="onboarding" element={<AssistantOnboarding />} />
      </Route>

      {/* ============================Admin =========================================== */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />

        <Route path="cases" element={<AdminCases />} />
        <Route path="cases/:caseId" element={<AdminCaseDetails />} />

        <Route path="users" element={<AdminUsers />} />
        <Route path="reports" element={<AdminReports />} />
      </Route>
    </Routes>
  );
}
