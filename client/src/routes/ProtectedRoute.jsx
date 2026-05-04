import { Navigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

export default function ProtectedRoute({ allowedRoles, children }) {
  const { user, loading } = useAuthStore();

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ✅ USE user.role (OPTION A)
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
