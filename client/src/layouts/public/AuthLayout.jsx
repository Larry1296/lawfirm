import PublicNavbar from "./PublicNavbar";
import Footer from "../../components/shared/Footer";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900">
      <PublicNavbar variant="auth" />

      <main className="flex-1 flex">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
