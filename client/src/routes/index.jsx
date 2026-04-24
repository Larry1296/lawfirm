import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../core/guards/ProtectedRoute";

/* LAYOUT */
import DashboardLayout from "../layout/DashboardLayout";

/* DASHBOARDS */
import LawyerDashboard from "../modules/admin/Dashboard";
import AssistantDashboard from "../modules/assistant/Dashboard";
import ClientDashboard from "../modules/client/Dashboard";

/* AUTH */
import Login from "../modules/auth/Login";
import Unauthorized from "../modules/auth/Unauthorized";

/* PUBLIC */
import HomePage from "../modules/public/HomePage";
import ClientSignup from "../modules/public/signup/ClientSignup";

export default function AppRoutes() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup/client" element={<ClientSignup />} />

      {/* LAWYER */}
      <Route
        path="/lawyer/dashboard"
        element={
          <ProtectedRoute allowedRoles={["LAWYER"]}>
            <DashboardLayout>
              <LawyerDashboard />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      {/* ASSISTANT */}
      <Route
        path="/assistant/dashboard"
        element={
          <ProtectedRoute allowedRoles={["ASSISTANT"]}>
            <DashboardLayout>
              <AssistantDashboard />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      {/* CLIENT */}
      <Route
        path="/client/dashboard"
        element={
          <ProtectedRoute allowedRoles={["CLIENT"]}>
            <DashboardLayout>
              <ClientDashboard />
            </DashboardLayout>
          </ProtectedRoute>
        }
      />

      {/* FALLBACK */}
      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  );
}
