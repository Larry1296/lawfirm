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
  HomeIcon,
  UserCog,
  Scale,
} from 'lucide-react';

export const adminSidebarLinks = [
  {
    name: 'Overview',
    path: '/admin/dashboard',
    icon: LayoutDashboard,
    end: true,
  },

  { name: 'Cases', path: '/admin/cases', icon: Briefcase },
  { name: 'Hearings', path: '/admin/hearings', icon: Scale },
  { name: 'Clients', path: '/admin/clients', icon: Users },
  { name: 'Staff', path: '/admin/staff', icon: UserCog },
  { name: 'Calendar', path: '/admin/calendar', icon: Calendar },

  { name: 'Documents', path: '/admin/documents', icon: FileText },
  { name: 'Billing', path: '/admin/billing', icon: CreditCard },
  { name: 'Reports', path: '/admin/reports', icon: BarChart },

  { name: 'Communication', path: '/admin/communication', icon: MessageSquare },
  { name: 'Compliance', path: '/admin/compliance', icon: ShieldCheck },

  { name: 'Settings', path: '/admin/settings', icon: Settings },
];
