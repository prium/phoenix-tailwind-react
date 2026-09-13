import { PageBreadcrumbItem } from 'components/common/PageBreadcrumb';
import team30 from 'assets/img/team/40x40/30.webp';
import team57 from 'assets/img/team/40x40/57.webp';
import team59 from 'assets/img/team/40x40/59.webp';
import team58 from 'assets/img/team/40x40/58.webp';
import team60 from 'assets/img/team/40x40/60.webp';
import team34 from 'assets/img/team/40x40/34.webp';
import teamLg30 from 'assets/img/team/30.webp';
import teamLg34 from 'assets/img/team/34.webp';
import teamLg57 from 'assets/img/team/57.webp';
import teamLg58 from 'assets/img/team/58.webp';
import teamLg59 from 'assets/img/team/59.webp';
import teamLg60 from 'assets/img/team/60.webp';
import teamLgAvatar from 'assets/img/team/avatar.webp';
export const notificationsBreadcrumbItems: PageBreadcrumbItem[] = [
  {
    label: 'Pages',
    url: '#!'
  },
  {
    label: 'Notifications',
    active: true
  }
];

export interface Notification {
  id: number | string;
  avatar?: string;
  name: string;
  detail?: string;
  interaction: string;
  interactionIcon: string;
  ago: string;
  icon: string;
  time: string;
  date: string;
  read: boolean;
  notificationPosition?: string;
  avatarPlaceholder?: boolean;
}

export const notifications: Notification[] = [
  {
    id: '1',
    avatar: team30,
    name: 'Jessie Samson',
    interactionIcon: '💬',
    interaction: 'Mentioned you in a comment.',
    detail: ' "Well done! Proud of you ❤️ " ',
    ago: '10m',
    icon: 'clock',
    time: '10:41 AM ',
    date: 'August 7,2021',
    read: true
  },
  {
    id: '2',
    avatar: team58,
    name: 'Jane Foster',
    interactionIcon: '📅',
    interaction: 'Created an event.',
    detail: 'Rome holidays',
    ago: '20m',
    icon: 'clock',
    time: '10:20 AM ',
    date: 'August 7,2021',
    read: false
  },
  {
    id: '3',
    name: 'Jessie Samson',
    interactionIcon: '👍',
    interaction: 'Liked your comment.',
    detail: '"Amazing Works️"',
    ago: '1h',
    icon: 'clock',
    time: '9:30 AM ',
    date: 'August 7,2021',
    read: false
  },
  {
    id: '4',
    avatar: team57,
    name: 'Kiera Anderson',
    interactionIcon: '💬',
    interaction: 'Mentioned you in a comment.',
    detail: '"This is too good to be true!"',
    ago: '',
    icon: 'fas fa-clock',
    time: '9:11 AM ',
    date: 'August 7,2021',
    read: false
  },
  {
    id: '5',
    avatar: team59,
    name: 'Herman Carter',
    interactionIcon: '👤',
    interaction: 'Tagged you in a comment',
    detail: 'post',
    ago: '',
    icon: 'fas fa-clock',
    time: '10:58 PM ',
    date: 'August 7,2021',
    read: false
  },
  {
    id: '6',
    avatar: team58,
    name: 'Benjamin Button',
    interactionIcon: '👍',
    interaction: 'Liked your comment.',
    detail: 'Welcome to the team️',
    ago: '',
    icon: 'fas fa-clock',
    time: '10:18 AM ',
    date: 'August 7,2021',
    read: true,
    notificationPosition: 'top-0 end-100'
  },
  {
    id: '7',
    avatar: team60,
    name: 'Aron Paul',
    interactionIcon: '📷',
    interaction: 'Tagged you in a photo',
    detail: 'photo',
    ago: '',
    icon: 'fas fa-clock',
    time: '9:53 AM ',
    date: 'August 7,2021',
    read: true
  },
  {
    id: 8,
    avatar: team34,
    name: 'Rick Sanchez',
    interactionIcon: '💬',
    interaction: 'Mentioned you in a comment',
    detail: '"You need to see these amazing photos️"',
    ago: '',
    icon: 'fas fa-clock',
    time: '9:45 AM ',
    date: 'August 7,2021',
    read: true
  }
];

/**
 * The notifications page hardcodes its own demo set in the gold
 * (`src/pug/pages/notifications.pug`) — different avatars and copy from the
 * navbar dropdown set above, so it is exported separately.
 */
export const notificationsPageToday: Notification[] = [
  {
    id: 'today-1',
    avatar: teamLg30,
    name: 'Jessie Samson',
    interactionIcon: '\u{1F4AC}',
    interaction: 'Mentioned you in a comment',
    detail: ' "Well done! Proud of you \u2764\uFE0F " ',
    ago: '10m',
    icon: 'clock',
    time: '10:41 AM ',
    date: 'August 7,2021',
    read: true
  },
  {
    id: 'today-2',
    name: 'Jane Foster',
    interactionIcon: '\u{1F4C5}',
    interaction: 'Created an event',
    detail: ' Rome holidays',
    ago: '20m',
    icon: 'clock',
    time: '10:20 AM ',
    date: 'August 7,2021',
    read: false
  },
  {
    id: 'today-3',
    avatar: teamLgAvatar,
    avatarPlaceholder: true,
    name: 'Jessie Samson',
    interactionIcon: '\u{1F44D}',
    interaction: 'Liked your comment',
    detail: ' "Amazing Works\uFE0F"',
    ago: '1h',
    icon: 'clock',
    time: '9:30 AM ',
    date: 'August 7,2021',
    read: false
  }
];

export const notificationsPageYesterday: Notification[] = [
  {
    id: 'yesterday-1',
    avatar: teamLg57,
    name: 'Kiera Anderson',
    interactionIcon: '\u{1F4AC}',
    interaction: 'Mentioned you in a comment',
    detail: ' "This is too good to be true!"',
    ago: '',
    icon: 'clock',
    time: '9:11 AM ',
    date: 'August 7,2021',
    read: false
  },
  {
    id: 'yesterday-2',
    avatar: teamLg59,
    name: 'Herman Carter',
    interactionIcon: '\u{1F464}',
    interaction: 'Tagged you in a',
    detail: ' post',
    ago: '',
    icon: 'clock',
    time: '10:58 PM ',
    date: 'August 7,2021',
    read: false
  },
  {
    id: 'yesterday-3',
    avatar: teamLg58,
    name: 'Benjamin Button',
    interactionIcon: '\u{1F44D}',
    interaction: 'Liked your comment',
    detail: ' "Welcome to the team\uFE0F"',
    ago: '',
    icon: 'clock',
    time: '10:18 AM ',
    date: 'August 7,2021',
    read: true
  },
  {
    id: 'yesterday-4',
    avatar: teamLg60,
    name: 'Aron Paul',
    interactionIcon: '\u{1F4F7}',
    interaction: 'Tagged you in a',
    detail: ' photo',
    ago: '',
    icon: 'clock',
    time: '9:53 AM ',
    date: 'August 7,2021',
    read: true
  },
  {
    id: 'yesterday-5',
    avatar: teamLg34,
    name: 'Rick Sanchez',
    interactionIcon: '\u{1F4AC}',
    interaction: 'Mentioned you in a comment',
    detail: ' "You need to see these amazing photos\uFE0F"',
    ago: '',
    icon: 'clock',
    time: '9:45 AM ',
    date: 'August 7,2021',
    read: true
  }
];
