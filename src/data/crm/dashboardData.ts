export type ForecastTableData = {
  contact: {
    name: string;
    profileLink: string;
  };
  appointment: number;
  qualified: number;
  closed_won: number;
  contact_sent: number;
};

/* literal `text-*`/border class strings from mixins/dashboard/CRM/Crm.pug
   (Tailwind cannot see interpolated class names) */
export const contactSourceData = [
  {
    name: 'Organic',
    value: 80,
    iconClass: 'text-primary',
    borderClass: 'border-b border-e border-subtle'
  },
  {
    name: 'Paid Search',
    value: 65,
    iconClass: 'text-success',
    borderClass: 'border-b border-subtle'
  },
  {
    name: 'Direct',
    value: 40,
    iconClass: 'text-info',
    borderClass: 'border-e xl:border-s xl:border-e-0 border-b border-subtle'
  },
  {
    name: 'Social',
    value: 220,
    iconClass: 'text-info-light',
    borderClass: 'border-b xl:border-b-0 xl:border-e border-subtle'
  },
  {
    name: 'Referrals',
    value: 120,
    iconClass: 'text-danger-lighter',
    borderClass: 'border-e xl:border-e-0 border-subtle'
  },
  {
    name: 'Others',
    value: 35,
    iconClass: 'text-warning-light',
    borderClass: 'xl:border-s border-subtle'
  }
];

export const dealForecastTableData: ForecastTableData[] = [
  {
    contact: {
      name: 'Carrie Anne',
      profileLink: '#!'
    },
    appointment: 1000,
    qualified: 1256,
    closed_won: 1200,
    contact_sent: 1200
  },
  {
    contact: {
      name: 'Milind Mikuja',
      profileLink: '#!'
    },
    appointment: 558,
    qualified: 2531,
    closed_won: 2200,
    contact_sent: 2200
  },
  {
    contact: {
      name: 'Stanley Drinkwater',
      profileLink: '#!'
    },
    appointment: 1100,
    qualified: 100,
    closed_won: 100,
    contact_sent: 100
  },
  {
    contact: {
      name: 'Josef Stravinsky',
      profileLink: '#!'
    },
    appointment: 856,
    qualified: 326,
    closed_won: 265,
    contact_sent: 265
  },
  {
    contact: {
      name: 'Roy Anderson',
      profileLink: '#!'
    },
    appointment: 1200,
    qualified: 1452,
    closed_won: 865,
    contact_sent: 865
  },
  {
    contact: {
      name: 'Oscar Wilde',
      profileLink: '#!'
    },
    appointment: 1020,
    qualified: 950,
    closed_won: 1000,
    contact_sent: 800
  }
];
