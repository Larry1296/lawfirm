import PublicNavbar from "./PublicNavbar";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-900">
      {/* SAME NAVBAR SIZE AS HOME */}
      <PublicNavbar variant="auth" />

      {/* PAGE CONTENT */}
      <main className="min-h-screen flex flex-col">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
