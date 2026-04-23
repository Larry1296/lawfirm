import { Navigate } from "react-router-dom";

export default function AuthGuard({ children }) {
  const access = localStorage.getItem("access");

  if (!access) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
