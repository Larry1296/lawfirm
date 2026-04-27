import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminTopbar from "./AdminTopbar";
import Footer from "../../components/Footer";

export default function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex flex-col flex-1">
        <AdminTopbar />

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
