import {
  X,
  LayoutDashboard,
  Briefcase,
  Users,
  Calendar,
  FileText,
  HomeIcon,
  CreditCard,
  BarChart,
  MessageSquare,
  ShieldCheck,
  Settings,
  UserCog,
} from "lucide-react";
import LogoutButton from "../../components/ui/LogoutButton";
import SidebarNavLink from "../../components/ui/SidebarNavLink";
import { useContext } from "react";
import ThemeContext from "../../core/store/ThemeContext";

const links = [
  {
    name: "Overview",
    path: "/admin/dashboard",
    icon: <LayoutDashboard size={18} />,
    end: true,
  },
  {
    name: "Home Page",
    path: "/admin/homepagecustomization",
    icon: <HomeIcon size={18} />,
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
  const { theme } = useContext(ThemeContext);

  const bgSidebar =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] text-white"
      : "bg-[color:var(--brand-primary)] text-white";

  return (
    <aside className={`w-64 h-full ${bgSidebar} flex flex-col shadow-2xl`}>
      {/* HEADER */}
      <div className="p-5 border-b border-white/10 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">LawFirm</h1>
          <p className="text-xs text-white/60">Admin Panel</p>
        </div>
        <button
          onClick={() => window.innerWidth < 1024 && onClose?.()}
          className="lg:hidden p-2 rounded hover:bg-white/10"
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
      <div className="p-4 mt-auto">
        <LogoutButton variant="warning" />
      </div>
    </aside>
  );
}
