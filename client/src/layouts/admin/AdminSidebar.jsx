import {
  X,
  LayoutDashboard,
  HomeIcon,
  Briefcase,
  Users,
  UserCog,
  Calendar,
  FileText,
  CreditCard,
  BarChart,
  MessageSquare,
  ShieldCheck,
  Settings,
  FolderKanban,
  Activity,
  Bell,
} from "lucide-react";

import { useContext } from "react";
import ThemeContext from "../../core/store/ThemeContext";
import LogoutButton from "../../components/ui/LogoutButton";
import SidebarNavLink from "../../components/ui/SidebarNavLink";
import Brand from "../../components/ui/Brand";

/* ================= ADMIN NAVIGATION ================= */
const links = [
  // CORE
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard size={18} />,
    end: true,
  },

  // BUSINESS
  { name: "Cases", path: "/admin/cases", icon: <Briefcase size={18} /> },
  { name: "Clients", path: "/admin/clients", icon: <Users size={18} /> },
  { name: "Staff", path: "/admin/staff", icon: <UserCog size={18} /> },
  { name: "Calendar", path: "/admin/calendar", icon: <Calendar size={18} /> },

  // DOCUMENTS & WORK
  { name: "Documents", path: "/admin/documents", icon: <FileText size={18} /> },
  { name: "Tasks", path: "/admin/tasks", icon: <FolderKanban size={18} /> },

  // FINANCE
  { name: "Billing", path: "/admin/billing", icon: <CreditCard size={18} /> },
  { name: "Reports", path: "/admin/reports", icon: <BarChart size={18} /> },

  // COMMUNICATION
  {
    name: "Communication",
    path: "/admin/communication",
    icon: <MessageSquare size={18} />,
  },

  // COMPLIANCE & SYSTEM
  {
    name: "Compliance",
    path: "/admin/compliance",
    icon: <ShieldCheck size={18} />,
  },
  {
    name: "Notifications",
    path: "/admin/notifications",
    icon: <Bell size={18} />,
  },
  {
    name: "Activity Logs",
    path: "/admin/activity",
    icon: <Activity size={18} />,
  },

  // SETTINGS
  { name: "Settings", path: "/admin/settings", icon: <Settings size={18} /> },

  // OPTIONAL (HOME PAGE BUILDER)
  {
    name: "Homepage Builder",
    path: "/admin/homepagecustomization",
    icon: <HomeIcon size={18} />,
  },
];

export default function AdminSidebar({ onClose }) {
  const { theme } = useContext(ThemeContext);

  const bgSidebar =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] text-white"
      : "bg-[color:var(--brand-primary)] text-white";

  return (
    <aside className={`w-64 h-full ${bgSidebar} flex flex-col shadow-2xl`}>
      {/* HEADER */}
      <div className="relative py-4 px-5 border-b border-white/10">
        <div className="flex items-center justify-center">
          <Brand size="h-14 w-14" showText />
        </div>

        <button
          onClick={() => window.innerWidth < 1024 && onClose?.()}
          className="lg:hidden absolute top-3 right-4 p-2 rounded hover:bg-white/10"
        >
          <X size={20} />
        </button>
      </div>

      {/* NAV */}
      <nav className="flex-1 p-3 space-y-2 overflow-y-auto">
        {links.map((link) => (
          <SidebarNavLink
            key={link.name}
            to={link.path}
            end={link.end}
            icon={link.icon}
            onClick={onClose}
          >
            {link.name}
          </SidebarNavLink>
        ))}
      </nav>

      {/* FOOTER */}
      <div className="p-4 mt-auto border-t border-white/10">
        <LogoutButton variant="warning" />
      </div>
    </aside>
  );
}
