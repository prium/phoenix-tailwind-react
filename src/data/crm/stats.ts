import {
  Icon,
  UilEnvelope,
  UilEnvelopeBlock,
  UilEnvelopeCheck,
  UilEnvelopeOpen,
  UilEnvelopeUpload,
  UilEnvelopes
} from '@iconscout/react-unicons';

export interface StatType {
  id: number;
  icon: Icon;
  iconColor: string;
  /** literal `text-*` class (Tailwind cannot see interpolation) */
  iconColorClass: string;
  emailCount: string;
  title: string;
  /** border/padding classes from the gold pug (mixins/crm/Analytics.pug) */
  className: string;
}
export const stats: StatType[] = [
  {
    id: 1,
    icon: UilEnvelope,
    iconColor: 'primary',
    iconColorClass: 'text-primary',
    emailCount: '2,800',
    title: 'Total Emails',
    className:
      'border-subtle 2xl:border-s 2xl:border-e-0 2xl:border-b-0 border-e border-b pb-6 2xl:pb-0'
  },
  {
    id: 2,
    icon: UilEnvelopeUpload,
    iconColor: 'info',
    iconColorClass: 'text-info',
    emailCount: '1,866',
    title: 'Emails Sent',
    className:
      'border-subtle 2xl:border-s 2xl:border-e-0 2xl:border-b-0 md:border-e border-b pb-6 2xl:pb-0'
  },
  {
    id: 3,
    icon: UilEnvelopes,
    iconColor: 'primary',
    iconColorClass: 'text-primary',
    emailCount: '1,366',
    title: 'Emails Delivered',
    className:
      'border-subtle 2xl:border-s 2xl:border-b-0 border-b border-e md:border-e-0 pb-6 2xl:pb-0 pt-6 md:pt-0'
  },
  {
    id: 4,
    icon: UilEnvelopeOpen,
    iconColor: 'info',
    iconColorClass: 'text-info',
    emailCount: '1,200',
    title: 'Emails Opened',
    className:
      'border-subtle 2xl:border-s md:border-e 2xl:border-e-0 border-b md:border-b-0 pb-6 2xl:pb-0 pt-6 2xl:pt-0'
  },
  {
    id: 5,
    icon: UilEnvelopeCheck,
    iconColor: 'success',
    iconColorClass: 'text-success',
    emailCount: '900',
    title: 'Emails Clicked',
    className:
      'border-subtle 2xl:border-s border-e 2xl:border-e-0 md:pb-6 2xl:pb-0 pt-6 2xl:pt-0'
  },
  {
    id: 6,
    icon: UilEnvelopeBlock,
    iconColor: 'danger',
    iconColorClass: 'text-danger',
    emailCount: '500',
    title: 'Emails Bounce',
    className:
      'border-subtle 2xl:border-s 2xl:border-e md:pb-6 2xl:pb-0 pt-6 2xl:pt-0'
  }
];
