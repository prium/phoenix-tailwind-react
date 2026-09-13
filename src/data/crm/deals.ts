import { BadgeBg } from 'components/base/Badge';

export interface Deal {
  id: number;
  title: string;
  /** gold literal string incl. the `$33,00.00` typo in the Completed column */
  revenue: string;
  category: string;
  date: string;
  time: string;
  closingDate: string;
  closingTime: string;
  company: string;
  agent: string;
  openDetails?: boolean;
  status: {
    label: string;
    variant: BadgeBg;
  };
  priority: {
    label: string;
    variant: BadgeBg;
  };
  probability: {
    value: number;
    /** literal progress-bar class from the gold pug (`bg-300` is intentionally unstyled) */
    barClass: string;
  };
}

export interface DealColumn {
  id: number;
  title: string;
  revenue: string;
  deals: Deal[];
}

export const dealAgents = [
  'Ally Aagaard',
  'Lonnie Kub',
  'Aida Moen',
  'Niko Koss',
  'Alec Haag',
  'Ola Smith',
  'Leif Walsh',
  'Brain Cole',
  'Reese Mann'
];

export const dealColumnsData: DealColumn[] = [
  {
    id: 1,
    title: 'New',
    revenue: '$37,000.00',
    deals: [
      {
        id: 101,
        title: 'Jo_Td01',
        revenue: '$14,000.00',
        category: 'Financial',
        date: 'Dec 30, 2022',
        time: '2:15 PM',
        closingDate: '27-12-2022',
        closingTime: '11:19 PM',
        company: 'Knitkake.inc',
        agent: 'Ally Aagaard',
        status: {
          label: 'new',
          variant: 'info'
        },
        priority: {
          label: 'Urgent',
          variant: 'danger'
        },
        probability: {
          value: 20,
          barClass: 'bg-info'
        }
      },
      {
        id: 102,
        title: 'Dimensions for Printing',
        revenue: '$23,000.00',
        category: 'Marketplace',
        date: 'Dec 29, 2022',
        time: '12:15 PM',
        closingDate: '25-12-2022',
        closingTime: '2:00 PM',
        company: 'Kibikaba Clothings',
        agent: 'Lonnie Kub',
        status: {
          label: 'New',
          variant: 'info'
        },
        priority: {
          label: 'Medium',
          variant: 'success'
        },
        probability: {
          value: 20,
          barClass: 'bg-info'
        }
      }
    ]
  },
  {
    id: 2,
    title: 'In Progress',
    revenue: '$101,300.00',
    deals: [
      {
        id: 201,
        title: 'True and True Attorneys',
        revenue: '$33,000.00',
        category: 'Financial',
        date: 'Dec 30, 2022',
        time: '06:15 PM',
        closingDate: '27-12-2022',
        closingTime: '11:19 PM',
        company: 'PBR Holdings',
        agent: 'Aida Moen',
        status: {
          label: 'In Progress',
          variant: 'primary'
        },
        priority: {
          label: 'High',
          variant: 'warning'
        },
        probability: {
          value: 40,
          barClass: 'bg-primary'
        }
      },
      {
        id: 202,
        title: 'The Morlong Corporation',
        revenue: '$45,300.00',
        category: 'Marketplace',
        date: 'Dec 30, 2022',
        time: '08:20 PM',
        closingDate: '26-12-2022',
        closingTime: '12:10 PM',
        company: 'Giraffes Studio',
        agent: 'Niko Koss',
        status: {
          label: 'In Progress',
          variant: 'primary'
        },
        priority: {
          label: 'Low',
          variant: 'info'
        },
        probability: {
          value: 40,
          barClass: 'bg-primary'
        }
      },
      {
        id: 203,
        title: 'Product List',
        revenue: '$23,000.00',
        category: 'Marketplace',
        date: 'Dec 30, 2022',
        time: '3:25 PM',
        closingDate: '27-12-2022',
        closingTime: '11:19 PM',
        company: 'Birds eye',
        agent: 'Alec Haag',
        status: {
          label: 'In Progress',
          variant: 'primary'
        },
        priority: {
          label: 'Urgent',
          variant: 'danger'
        },
        probability: {
          value: 40,
          barClass: 'bg-primary'
        }
      }
    ]
  },
  {
    id: 3,
    title: 'Pending',
    revenue: '$23,400.00',
    deals: [
      {
        id: 301,
        title: 'Printing Services by Feltz',
        revenue: '$23,400.00',
        category: 'Marketplace',
        date: 'Dec 30, 2022',
        time: '3:15 PM',
        closingDate: '27-12-2022',
        closingTime: '11:19 PM',
        company: 'Ant Family',
        agent: 'Ally Aagaard',
        status: {
          label: 'Pending',
          variant: 'warning'
        },
        priority: {
          label: 'High',
          variant: 'warning'
        },
        probability: {
          value: 60,
          barClass: 'bg-warning'
        }
      }
    ]
  },
  {
    id: 4,
    title: 'Canceled',
    revenue: '$260.00',
    deals: [
      {
        id: 401,
        title: 'SP Flat Plate',
        revenue: '$14,000.00',
        category: 'Financial',
        date: 'Dec 31, 2022',
        time: '01:30 PM',
        closingDate: '29-12-2022',
        closingTime: '01:30 PM',
        company: 'Ant Family',
        agent: 'Ola Smith',
        status: {
          label: 'Canceled',
          variant: 'secondary'
        },
        priority: {
          label: 'Medium',
          variant: 'success'
        },
        probability: {
          value: 80,
          barClass: 'bg-300'
        }
      },
      {
        id: 402,
        title: 'Ventilated Pipe',
        revenue: '$14,000.00',
        category: 'Marketplace',
        date: 'Dec 31, 2022',
        time: '2:15 PM',
        closingDate: '29-12-2022',
        closingTime: '02:15 PM',
        company: 'Giraffes Studio',
        agent: 'Leif Walsh',
        status: {
          label: 'Canceled',
          variant: 'secondary'
        },
        priority: {
          label: 'Low',
          variant: 'info'
        },
        probability: {
          value: 80,
          barClass: 'bg-300'
        }
      }
    ]
  },
  {
    id: 5,
    title: 'Completed',
    revenue: '$1,650.00',
    deals: [
      {
        id: 501,
        title: 'Product Shipping',
        revenue: '$15,000.00',
        category: 'Financial',
        date: 'Dec 29, 2022',
        time: '03:12 PM',
        closingDate: '27-12-2022',
        closingTime: '11:19 PM',
        company: 'Birds eye',
        agent: 'Brain Cole',
        status: {
          label: 'Completed',
          variant: 'success'
        },
        priority: {
          label: 'Urgent',
          variant: 'danger'
        },
        probability: {
          value: 100,
          barClass: 'bg-success'
        }
      },
      {
        id: 502,
        title: 'Product List',
        revenue: '$33,00.00',
        category: 'Financial',
        date: 'Dec 29, 2022',
        time: '06:15 PM',
        closingDate: '28-12-2022',
        closingTime: '12:20 PM',
        company: 'Ink Incorporated',
        agent: 'Reese Mann',
        status: {
          label: 'Completed',
          variant: 'success'
        },
        priority: {
          label: 'Low',
          variant: 'info'
        },
        probability: {
          value: 100,
          barClass: 'bg-success'
        }
      },
      {
        id: 503,
        title: 'Dimensions for Printing',
        revenue: '$23,400.00',
        category: 'Marketplace',
        date: 'Dec 29, 2022',
        time: '2:15 PM',
        closingDate: '28-12-2022',
        closingTime: '02:19 PM',
        company: 'Slim Apes',
        agent: 'Ally Aagaard',
        status: {
          label: 'Completed',
          variant: 'success'
        },
        priority: {
          label: 'Urgent',
          variant: 'danger'
        },
        probability: {
          value: 100,
          barClass: 'bg-success'
        }
      }
    ]
  }
];
