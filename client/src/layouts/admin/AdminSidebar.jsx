import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  BarChart,
  LogOut,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard size={18} />,
    end: true,
  },
  {
    name: "Cases",
    path: "/admin/cases",
    icon: <Briefcase size={18} />,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: <Users size={18} />,
  },
  {
    name: "Reports",
    path: "/admin/reports",
    icon: <BarChart size={18} />,
  },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 min-w-[16rem] bg-blue-900 text-white flex flex-col">
      {/* LOGO */}
      <div className="p-5 border-b border-gray-700">
        <h1 className="text-xl font-bold">LawFirm</h1>
        <p className="text-xs text-gray-400">Admin Panel</p>
      </div>

      {/* NAV */}
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end={link.end || false}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded ${
                isActive
                  ? "bg-gray-200 text-black font-semibold"
                  : "hover:bg-gray-700"
              }`
            }
          >
            {link.icon}
            <span className="text-sm">{link.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* FOOTER */}
      <div className="p-4 border-t border-gray-700">
        <button className="w-full flex items-center justify-center gap-2 bg-gray-200 text-black py-2 rounded">
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
}
