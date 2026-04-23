import React, { useState } from "react";
import { Outlet } from "react-router-dom";

/* SHARED UI */
import Sidebar from "../components/shared/Sidebar";
import Topbar from "../components/shared/Topbar";
import Footer from "../components/shared/Footer";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-darkbrand-base">
      {/* ================= SIDEBAR ================= */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* ================= MAIN AREA ================= */}
      <div className="flex flex-col flex-1">
        {/* ================= TOPBAR ================= */}
        <Topbar onToggleSidebar={() => setCollapsed(!collapsed)} />

        {/* ================= PAGE CONTENT ================= */}
        <main className="flex-1 p-4 md:p-6 max-w-dashboard mx-auto w-full">
          <div className="animate-fadeIn">
            <Outlet />
          </div>
        </main>

        {/* ================= FOOTER ================= */}
        <Footer />
      </div>
    </div>
  );
}
