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
import LogoutButton from "../../../components/ui//LogoutButton";
import SidebarNavLink from "../../../components/ui/SidebarNavLink";
import { useContext } from "react";
import ThemeContext from "../../../core/store/ThemeContext";
import Brand from "../../../components/ui/Brand";

const links = [
  {
    name: "Overview",
    path: "/secretary/dashboard",
    icon: <LayoutDashboard size={18} />,
    end: true,
  },
  {
    name: "Home Page",
    path: "/secretary/homepagecustomization",
    icon: <HomeIcon size={18} />,
  },
  { name: "Cases", path: "/secretary/cases", icon: <Briefcase size={18} /> },
  { name: "Clients", path: "/secretary/clients", icon: <Users size={18} /> },
  { name: "Staff", path: "/secretary/staff", icon: <UserCog size={18} /> },
  {
    name: "Calendar",
    path: "/secretary/calendar",
    icon: <Calendar size={18} />,
  },
  {
    name: "Documents",
    path: "/secretary/documents",
    icon: <FileText size={18} />,
  },
  {
    name: "Billing",
    path: "/secretary/billing",
    icon: <CreditCard size={18} />,
  },
  { name: "Reports", path: "/secretary/reports", icon: <BarChart size={18} /> },
  {
    name: "Communication",
    path: "/secretary/communication",
    icon: <MessageSquare size={18} />,
  },
  {
    name: "Compliance",
    path: "/secretary/compliance",
    icon: <ShieldCheck size={18} />,
  },
  {
    name: "Settings",
    path: "/secretary/settings",
    icon: <Settings size={18} />,
  },
];

export default function SecretarySidebar({ onClose }) {
  const { theme } = useContext(ThemeContext);

  const bgSidebar =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] text-white"
      : "bg-[color:var(--brand-primary)] text-white";

  return (
    <aside className={`w-64 h-full ${bgSidebar} flex flex-col shadow-2xl`}>
      {/* HEADER */}
      <div className="relative py-3 px-5 border-b border-white/10">
        <div className="flex items-center justify-center">
          <Brand size="h-16 w-16" showText={false} />
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
      <div className="p-4 mt-auto">
        <LogoutButton variant="warning" />
      </div>
    </aside>
  );
}
