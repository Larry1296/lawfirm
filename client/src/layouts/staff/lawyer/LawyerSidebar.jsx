import { X } from 'lucide-react';
import { useContext } from 'react';

import ThemeContext from '../../../core/store/ThemeContext';
import LogoutButton from '../../../components/ui/LogoutButton';
import SidebarNavLink from '../../../components/ui/SidebarNavLink';
import Brand from '../../../components/ui/Brand';

import {
  LayoutDashboard,
  Briefcase,
  Users,
  Calendar,
  FileText,
  CreditCard,
  BarChart,
  MessageSquare,
  Settings,
} from 'lucide-react';

/* ================= LAWYER NAVIGATION ================= */
const links = [
  {
    name: 'Dashboard',
    path: '/lawyer/dashboard',
    icon: LayoutDashboard,
    end: true,
  },

  { name: 'Cases', path: '/lawyer/cases', icon: Briefcase },
  { name: 'Clients', path: '/lawyer/clients', icon: Users },
  { name: 'Calendar', path: '/lawyer/calendar', icon: Calendar },

  { name: 'Documents', path: '/lawyer/documents', icon: FileText },
  { name: 'Billing', path: '/lawyer/billing', icon: CreditCard },
  { name: 'Reports', path: '/lawyer/reports', icon: BarChart },

  { name: 'Communication', path: '/lawyer/communication', icon: MessageSquare },

  { name: 'Settings', path: '/lawyer/settings', icon: Settings },
];

export default function LawyerSidebar({ onClose }) {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === 'dark';

  const bgSidebar = isDark
    ? 'bg-[color:var(--surface-dark)] text-white'
    : 'bg-[color:var(--brand-primary)] text-white';

  return (
    <aside className={`w-64 h-full ${bgSidebar} flex flex-col shadow-2xl`}>
      {/* HEADER */}
      <div className='relative py-4 px-5 border-b border-white/10'>
        <div className='flex items-center justify-center'>
          <Brand size='h-14 w-14' showText />
        </div>

        <button
          onClick={() => window.innerWidth < 1024 && onClose?.()}
          className='lg:hidden absolute top-3 right-4 p-2 rounded hover:bg-white/10'
        >
          <X size={20} />
        </button>
      </div>

      {/* NAV */}
      <nav className='flex-1 p-3 space-y-2 overflow-y-auto'>
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <SidebarNavLink
              key={link.name}
              to={link.path}
              end={link.end}
              icon={<Icon size={18} />}
              onClick={onClose}
            >
              {link.name}
            </SidebarNavLink>
          );
        })}
      </nav>

      {/* FOOTER */}
      <div className='p-4 mt-auto border-t border-white/10'>
        <LogoutButton variant='warning' />
      </div>
    </aside>
  );
}
