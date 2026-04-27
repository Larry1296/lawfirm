import { Routes, Route, Navigate } from "react-router-dom";

import ClientLayout from "../layouts/ClientLayout";

// CLIENT PAGES
import ClientDashboard from "../modules/client/ClientDashboard";
import ClientCases from "../modules/client/ClientCases";
import ClientCaseTracking from "../modules/client/ClientCaseTracking";
import ClientCourtSession from "../modules/client/ClientCourtSession";
import ClientChat from "../modules/client/ClientChat";
import ClientNotifications from "../modules/client/ClientNotifications";
import ClientProfile from "../modules/client/ClientProfile";
import ClientSettings from "../modules/client/ClientSettings";

export default function AppRoutes() {
  return (
    <Routes>
      {/* DEFAULT */}
      <Route path="/" element={<Navigate to="/client/dashboard" />} />

      {/* CLIENT */}
      <Route path="/client" element={<ClientLayout />}>
        <Route path="dashboard" element={<ClientDashboard />} />

        <Route path="cases" element={<ClientCases />} />
        <Route path="cases/tracking" element={<ClientCaseTracking />} />
        <Route path="cases/court-session" element={<ClientCourtSession />} />
        <Route path="cases/chat" element={<ClientChat />} />
        <Route path="cases/notifications" element={<ClientNotifications />} />

        <Route path="profile" element={<ClientProfile />} />
        <Route path="settings" element={<ClientSettings />} />
      </Route>
    </Routes>
  );
}
