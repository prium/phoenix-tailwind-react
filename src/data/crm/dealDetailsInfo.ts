export interface DealDetailsInfoType {
  id: number;
  title: string;
  value: string;
  icon: string;
  /** literal classes from the gold pug (Tailwind can't see template classes) */
  bgClass: string;
  textClass: string;
  href?: string;
}

/** `+DealsDetailsInfo` in mixins/crm/DealDetails.pug */
export const dealDetailsInfoData: DealDetailsInfoType[][] = [
  [
    {
      id: 1,
      title: 'Probability (%)',
      value: '12.5',
      icon: 'bar-chart-2',
      bgClass: 'bg-success-subtle',
      textClass: 'text-success-dark'
    },
    {
      id: 2,
      title: 'Revenue',
      value: '$1,500.00',
      icon: 'trending-up',
      bgClass: 'bg-info-subtle',
      textClass: 'text-info-dark'
    }
  ],
  [
    {
      id: 3,
      title: 'Phone',
      value: '+11 123 456 789',
      icon: 'phone',
      bgClass: 'bg-primary-subtle',
      textClass: 'text-primary-dark',
      href: 'tel:+11123456789'
    },
    {
      id: 4,
      title: 'Email',
      value: 'jacksonpol@email.com',
      icon: 'mail',
      bgClass: 'bg-warning-subtle',
      textClass: 'text-warning-dark',
      href: 'mailto:jacksonpol@email.com'
    }
  ],
  [
    {
      id: 5,
      title: 'Contact Name',
      value: 'Jackson Pollock',
      icon: 'users',
      bgClass: 'bg-success-subtle',
      textClass: 'text-success-dark'
    },
    {
      id: 6,
      title: 'Modified By',
      value: 'Ansolo Lazinatov',
      icon: 'edit',
      bgClass: 'bg-info-subtle',
      textClass: 'text-info-dark'
    }
  ],
  [
    {
      id: 7,
      title: 'Create Date',
      value: 'Nov 30, 2022',
      icon: 'clock',
      bgClass: 'bg-info-subtle',
      textClass: 'text-info-dark'
    },
    {
      id: 8,
      title: 'Closing Date',
      value: 'Dec 15, 2022',
      icon: 'clock',
      bgClass: 'bg-warning-subtle',
      textClass: 'text-warning-dark'
    }
  ]
];

export interface Stat {
  id: number;
  title: string;
  value: string;
  icon: string;
  bgClass: string;
  textClass: string;
}

/** `+PrintingDimensions` in mixins/crm/DealDetails.pug */
export const stats: Stat[] = [
  {
    id: 1,
    title: 'Deal Amount',
    value: '$12,000.00',
    icon: 'dollar-sign',
    bgClass: 'bg-success-subtle',
    textClass: 'text-success-dark'
  },
  {
    id: 2,
    title: 'Deal Code',
    value: 'PHO1234',
    icon: 'code',
    bgClass: 'bg-info-subtle',
    textClass: 'text-info-dark'
  },
  {
    id: 3,
    title: 'Deal Type',
    value: 'New Business',
    icon: 'layout',
    bgClass: 'bg-primary-subtle',
    textClass: 'text-primary-dark'
  }
];
