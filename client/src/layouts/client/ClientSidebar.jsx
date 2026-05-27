import { useContext } from 'react';
import { X, LayoutDashboard, Users, FileText } from 'lucide-react';
import ThemeContext from '../../core/store/ThemeContext';
import LogoutButton from '../../components/ui/LogoutButton';
import SidebarNavLink from '../../components/ui/SidebarNavLink';
import Brand from '../../components/ui/Brand';

const links = [
  {
    name: 'Dashboard',
    path: '/client/dashboard',
    icon: <LayoutDashboard size={18} />,
    end: true,
  },
  {
    name: 'Documents',
    path: '/client/documents',
    icon: <FileText size={18} />,
  },
  {
    name: 'Profile',
    path: '/client/profile',
    icon: <Users size={18} />,
  },
];

export default function ClientSidebar({ onClose }) {
  const { theme } = useContext(ThemeContext);

  const isDark = theme === 'dark';

  const bgSidebar = isDark
    ? 'bg-[color:var(--surface-dark)] text-white'
    : 'bg-[color:var(--brand-primary)] text-white';

  const handleClose = () => {
    if (window.innerWidth < 1024) {
      onClose?.();
    }
  };

  return (
    <aside className={`w-64 h-full flex flex-col shadow-2xl ${bgSidebar}`}>
      {/* HEADER */}
      <div className='relative py-3 px-5 border-b border-white/10'>
        <div className='flex items-center justify-center'>
          <Brand size='h-16 w-16' showText={false} />
        </div>

        <button
          onClick={handleClose}
          className='lg:hidden absolute top-3 right-4 p-2 rounded hover:bg-white/10'
        >
          <X size={20} />
        </button>
      </div>

      {/* NAVIGATION */}
      <nav className='flex-1 p-3 space-y-2 overflow-y-auto'>
        {links.map((link) => (
          <SidebarNavLink
            key={link.name}
            to={link.path}
            end={link.end}
            icon={link.icon}
            onClick={handleClose}
          >
            {link.name}
          </SidebarNavLink>
        ))}
      </nav>

      {/* FOOTER */}
      <div className='p-4 mt-auto border-t border-white/10'>
        <LogoutButton variant='warning' />
      </div>
    </aside>
  );
}
