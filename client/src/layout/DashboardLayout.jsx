import Sidebar from "../components/shared/Sidebar";
import Topbar from "../components/shared/Topbar";
import Footer from "../components/shared/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-gray-50 dark:bg-darkbrand-base">
      {/* Topbar */}
      <Topbar />

      {/* Middle section */}
      <div className="flex min-h-0">
        <aside className="w-64 border-r border-ui-border">
          <Sidebar />
        </aside>

        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}
