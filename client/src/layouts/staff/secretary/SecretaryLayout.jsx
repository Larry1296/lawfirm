import { Outlet } from "react-router-dom";
import AssistantSidebar from "./StaffSidebar";
import AssistantTopbar from "./StaffTopbar";
import Footer from "../../components/Footer";

export default function AssistantLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* SIDEBAR */}
      <AssistantSidebar />

      {/* RIGHT SIDE */}
      <div className="flex flex-col flex-1">
        {/* TOPBAR */}
        <AssistantTopbar />

        {/* MAIN */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
