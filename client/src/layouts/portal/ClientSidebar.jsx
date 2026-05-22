// src/layouts/portal/ClientSidebar.jsx

import {
  X,
  LayoutDashboard,
  Calendar,
  FileText,
  MessageSquare,
  Bell,
  User,
  ClipboardList,
  Upload,
  LifeBuoy,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

import { useContext } from "react";

import LogoutButton from "../../components/ui/LogoutButton";
import SidebarNavLink from "../../components/ui/SidebarNavLink";
import ThemeContext from "../../core/store/ThemeContext";
import Brand from "../../components/ui/Brand";

/* =========================================================
   PORTAL CLIENT NAVIGATION
========================================================= */

const links = [
  {
    section: "Main",
    items: [
      {
        name: "Dashboard",
        path: "/portal/dashboard",
        icon: <LayoutDashboard size={18} />,
        end: true,
      },
      {
        name: "Consultations",
        path: "/portal/consultations",
        icon: <Calendar size={18} />,
      },
      {
        name: "Legal Requests",
        path: "/portal/intake",
        icon: <ClipboardList size={18} />,
      },
    ],
  },

  {
    section: "Documents",
    items: [
      {
        name: "My Documents",
        path: "/portal/documents",
        icon: <FileText size={18} />,
      },
      {
        name: "Upload Documents",
        path: "/portal/documents/upload",
      },
    ],
  },

  {
    section: "Communication",
    items: [
      {
        name: "Messages",
        path: "/portal/messages",
        icon: <MessageSquare size={18} />,
      },
      {
        name: "Notifications",
        path: "/portal/notifications",
        icon: <Bell size={18} />,
      },
      {
        name: "Support",
        path: "/portal/support",
        icon: <LifeBuoy size={18} />,
      },
    ],
  },

  {
    section: "Onboarding",
    items: [
      {
        name: "Become a Client",
        path: "/portal/become-client",
        icon: <Briefcase size={18} />,
      },
      {
        name: "Membership Status",
        path: "/portal/membership-status",
        icon: <ShieldCheck size={18} />,
      },
    ],
  },

  {
    section: "Account",
    items: [
      {
        name: "Profile",
        path: "/portal/profile",
        icon: <User size={18} />,
      },
    ],
  },
];

export default function ClientSidebar({ onClose }) {
  const { theme } = useContext(ThemeContext);

  const bgSidebar =
    theme === "dark"
      ? "bg-[color:var(--surface-dark)] text-white"
      : "bg-[color:var(--brand-primary)] text-white";

  return (
    <aside className={`w-64 h-full ${bgSidebar} flex flex-col shadow-2xl`}>
      {/* =========================================================
          HEADER
      ========================================================= */}
      <div className="relative py-3 px-5 border-b border-white/10">
        <div className="flex items-center justify-center">
          <Brand size="h-16 w-16" showText={false} />
        </div>

        {/* MOBILE CLOSE */}
        <button
          onClick={() => window.innerWidth < 1024 && onClose?.()}
          className="lg:hidden absolute top-3 right-4 p-2 rounded hover:bg-white/10"
        >
          <X size={20} />
        </button>
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <nav className="flex-1 p-3 overflow-y-auto">
        <div className="space-y-6">
          {links.map((group) => (
            <div key={group.section}>
              {/* SECTION TITLE */}
              <p className="px-3 mb-2 text-xs uppercase tracking-widest text-white/50 font-semibold">
                {group.section}
              </p>

              {/* SECTION LINKS */}
              <div className="space-y-1">
                {group.items.map((link) => (
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
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <div className="p-4 mt-auto border-t border-white/10">
        <LogoutButton variant="warning" />
      </div>
    </aside>
  );
}
