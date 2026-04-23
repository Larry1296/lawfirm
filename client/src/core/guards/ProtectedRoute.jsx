import AuthGuard from "./AuthGuard";
import RoleGuard from "./RoleGuard";

export default function ProtectedRoute({ children, allowedRoles }) {
  return (
    <AuthGuard>
      <RoleGuard allowedRoles={allowedRoles}>{children}</RoleGuard>
    </AuthGuard>
  );
}
