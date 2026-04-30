import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Calendar,
  FileText,
  CreditCard,
  BarChart,
  MessageSquare,
  ShieldCheck,
  Settings,
  UserCog,
  LogOut,
  X,
} from "lucide-react";

const links = [
  {
    name: "Overview",
    path: "/admin/dashboard",
    icon: <LayoutDashboard size={18} />,
    end: true,
  },
  {
    name: "Home Customization",
    path: "/admin/homepagecustomization",
    icon: <LayoutDashboard size={18} />,
  },
  { name: "Cases", path: "/admin/cases", icon: <Briefcase size={18} /> },
  { name: "Clients", path: "/admin/clients", icon: <Users size={18} /> },
  { name: "Staff", path: "/admin/staff", icon: <UserCog size={18} /> },
  { name: "Calendar", path: "/admin/calendar", icon: <Calendar size={18} /> },
  { name: "Documents", path: "/admin/documents", icon: <FileText size={18} /> },
  { name: "Billing", path: "/admin/billing", icon: <CreditCard size={18} /> },
  { name: "Reports", path: "/admin/reports", icon: <BarChart size={18} /> },
  {
    name: "Communication",
    path: "/admin/communication",
    icon: <MessageSquare size={18} />,
  },
  {
    name: "Compliance",
    path: "/admin/compliance",
    icon: <ShieldCheck size={18} />,
  },
  { name: "Settings", path: "/admin/settings", icon: <Settings size={18} /> },
];

export default function AdminSidebar({ onClose }) {
  return (
    <aside className="w-64 h-full bg-blue-900 text-white flex flex-col shadow-2xl">
      {/* HEADER */}
      <div className="p-5 border-b border-white/10 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">LawFirm</h1>
          <p className="text-xs text-white/60">Admin Panel</p>
        </div>

        {/* CLOSE BUTTON (mobile only) */}
        <button
          onClick={onClose}
          className="lg:hidden p-2 rounded hover:bg-white/10"
        >
          <X size={20} />
        </button>
      </div>

      {/* NAV */}
      <nav className="flex-1 p-3 sm:p-4 space-y-1 sm:space-y-2 overflow-y-auto">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            end={link.end || false}
            onClick={onClose} // ✅ CLOSE SIDEBAR ON CLICK
            className={({ isActive }) =>
              `
        flex items-center gap-3 px-3 sm:px-4 py-2 rounded-xl
        transition-all duration-200 text-sm sm:text-base

        ${
          isActive
            ? "bg-white text-blue-900 shadow-[0_6px_0_rgba(0,0,0,0.2)] translate-y-[-2px]"
            : "text-white/80 hover:bg-white/10"
        }
        `
            }
          >
            {link.icon}
            <span className="font-medium">{link.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* FOOTER */}
      <div className="p-4 border-t border-white/10">
        <button className="w-full flex items-center justify-center gap-2 bg-yellow-500 text-green-900 py-2 rounded-xl font-semibold hover:translate-y-[-2px] transition">
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </aside>
  );
}
