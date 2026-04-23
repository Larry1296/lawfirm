import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export default function RoleRoute({ children, allowedRoles }) {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const hasAccess = allowedRoles.includes(user.role);

  if (!hasAccess) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
