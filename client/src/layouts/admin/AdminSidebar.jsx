import { X } from 'lucide-react';
import { useContext } from 'react';

import ThemeContext from '../../core/store/ThemeContext';
import LogoutButton from '../../components/ui/LogoutButton';
import SidebarNavLink from '../../components/ui/SidebarNavLink';
import Brand from '../../components/ui/Brand';

import { adminSidebarLinks } from '../../modules/admin/config/adminSidebarLink';

export default function AdminSidebar({ onClose }) {
  const { theme } = useContext(ThemeContext);

  const bgSidebar =
    theme === 'dark'
      ? 'bg-[color:var(--surface-dark)] text-white'
      : 'bg-[color:var(--brand-primary)] text-white';

  const handleClose = () => {
    if (window.innerWidth < 1024) onClose?.();
  };

  return (
    <aside className={`w-64 h-full ${bgSidebar} flex flex-col shadow-2xl`}>
      {/* HEADER */}
      <div className='relative py-4 px-5 border-b border-white/10'>
        <div className='flex items-center justify-center'>
          <Brand size='h-14 w-14' showText />
        </div>

        <button
          onClick={handleClose}
          className='lg:hidden absolute top-3 right-4 p-2 rounded hover:bg-white/10'
        >
          <X size={20} />
        </button>
      </div>

      {/* NAV */}
      <nav className='flex-1 p-3 space-y-2 overflow-y-auto'>
        {adminSidebarLinks.map(({ name, path, icon: Icon, end }) => {
          const IconComponent = Icon;

          return (
            <SidebarNavLink
              key={name}
              to={path}
              end={end}
              icon={<IconComponent size={18} />}
              onClick={handleClose}
            >
              {name}
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
