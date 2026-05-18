import { Menu, Bell, Search } from "lucide-react";

export default function AssistantTopbar() {
  return (
    <header className="h-16 bg-blue-900 text-green-200 shadow flex items-center justify-between px-6">
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        {/* MENU (for future mobile toggle) */}
        <button className="p-2 rounded hover:bg-gray-100">
          <Menu size={20} />
        </button>

        {/* PAGE TITLE */}
        <h1 className="text-lg font-semibold">Assistant Dashboard</h1>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        {/* SEARCH */}
        <div className="hidden md:flex items-center border rounded px-2 py-1">
          <Search size={16} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="outline-none px-2 text-sm"
          />
        </div>

        {/* NOTIFICATIONS */}
        <button className="relative p-2 rounded hover:bg-gray-100">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* USER */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-black font-bold">
            A
          </div>
          <span className="text-sm font-medium hidden sm:block">Assistant</span>
        </div>
      </div>
    </header>
  );
}
