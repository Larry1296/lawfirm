import { Outlet } from "react-router-dom";
import ClientSidebar from "./client/ClientSidebar";
import ClientTopbar from "./client/ClientTopbar";
import Footer from "../components/Footer";

export default function ClientLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* SIDEBAR */}
      <ClientSidebar />

      {/* RIGHT SIDE */}
      <div className="flex flex-col flex-1">
        {/* TOPBAR */}
        <ClientTopbar />

        {/* MAIN */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
