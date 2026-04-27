import { Bell } from "lucide-react";

export default function AdminTopbar() {
  return (
    <header className="h-16 bg-blue-900 text-white shadow flex items-center justify-between px-6">
      <h1 className="font-semibold text-lg">Admin Dashboard</h1>

      <div className="flex items-center gap-4">
        <button className="relative p-2 hover:bg-gray-100 rounded">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <span className="text-sm">Admin</span>
        </div>
      </div>
    </header>
  );
}
