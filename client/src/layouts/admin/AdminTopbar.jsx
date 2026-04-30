import { Bell, Menu } from "lucide-react";

export default function AdminTopbar({ onMenuClick }) {
  return (
    <header className="h-16 bg-blue-900 text-white shadow flex items-center justify-between px-4 sm:px-6">
      {/* HAMBURGER (mobile only) */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded hover:bg-white/10"
      >
        <Menu size={22} />
      </button>

      <h1 className="font-semibold text-base sm:text-lg">Admin Dashboard</h1>

      <div className="flex items-center gap-3 sm:gap-4">
        {/* NOTIFICATIONS */}
        <button className="relative p-2 hover:bg-white/10 rounded">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* PROFILE */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
          <span className="text-sm hidden sm:block">Admin</span>
        </div>
      </div>
    </header>
  );
}
