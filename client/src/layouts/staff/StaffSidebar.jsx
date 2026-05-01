import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  Calendar,
  UserPlus,
  LogOut,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    path: "/assistant/dashboard",
    icon: <LayoutDashboard size={18} />,
    end: true,
  },
  {
    name: "Assigned Cases",
    path: "/assistant/cases",
    icon: <Briefcase size={18} />,
    end: true,
  },
  {
    name: "Client Chats",
    path: "/assistant/chat",
    icon: <MessageSquare size={18} />,
  },
  {
    name: "Scheduling",
    path: "/assistant/scheduling",
    icon: <Calendar size={18} />,
  },
  {
    name: "Onboarding",
    path: "/assistant/onboarding",
    icon: <UserPlus size={18} />,
  },
];

export default function AssistantSidebar() {
  return (
    <aside className="w-64 min-w-[16rem] bg-blue-900 text-white flex flex-col h-screen">
      {/* LOGO */}
      <div className="p-5 border-b border-green-700">
        <h1 className="text-xl font-bold tracking-wide">LawFirm</h1>
        <p className="text-xs text-green-300">Assistant Panel</p>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end={link.end || false}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition-all duration-200 ${
                isActive
                  ? "bg-green-400 text-black font-semibold"
                  : "hover:bg-green-700 text-white"
              }`
            }
          >
            {link.icon}
            <span className="text-sm">{link.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* FOOTER / USER */}
      <div className="p-4 border-t border-green-700 space-y-3">
        {/* USER INFO */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-black font-bold">
            A
          </div>
          <div>
            <p className="text-sm font-semibold">Assistant</p>
            <p className="text-xs text-green-300">Active</p>
          </div>
        </div>

        {/* LOGOUT */}
        <button className="w-full flex items-center justify-center gap-2 bg-green-400 hover:bg-green-300 text-black py-2 rounded-md font-medium transition">
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
}
