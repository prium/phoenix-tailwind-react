import {
  Icon,
  UilBooks,
  UilInvoice,
  UilRefresh,
  UilUsersAlt
} from '@iconscout/react-unicons';

export interface ProjectManagementStat {
  title: string;
  count: string;
  icon: Icon;
  /** literal colour class (Tailwind can't see `text-${color}`) */
  iconClass: string;
  subtitle: string;
}

/** `stats` in mixins/dashboard/project-management/Stats.pug */
export const stats: ProjectManagementStat[] = [
  {
    title: 'Projects',
    count: '32',
    icon: UilBooks,
    iconClass: 'text-primary-dark',
    subtitle: 'Awating processing'
  },
  {
    title: 'Members',
    icon: UilUsersAlt,
    iconClass: 'text-success-dark',
    count: '94',
    subtitle: 'Working hard'
  },
  {
    title: 'Invoices',
    icon: UilInvoice,
    iconClass: 'text-warning-dark',
    count: '23',
    subtitle: 'Soon to be cleared'
  },
  {
    title: 'Refunds',
    icon: UilRefresh,
    iconClass: 'text-danger-dark',
    count: '3',
    subtitle: 'Fresh start'
  }
];
