import { BadgeBg } from 'components/base/Badge';
import team32 from 'assets/img/team/32.webp';
import team35 from 'assets/img/team/35.webp';
import team59 from 'assets/img/team/59.webp';
import team18 from 'assets/img/team/18.webp';
import teamAvatar from 'assets/img/team/avatar.webp';

export interface SellerReport {
  reportStage: string;
  totalCount: string;
  status: {
    label: string;
    type: BadgeBg;
  };
}

export interface DealsReport {
  dealName: string;
  dealOwner: {
    avatar: string;
    name: string;
    /** gold marks the generic silhouette with `.avatar-placeholder` */
    placeholder?: boolean;
  };
  accountName: string;
  stage: {
    label: string;
    /** literal stroke colour from the gold pug (per stage) */
    color: string;
    /** --phoenix-circle-progress-bar value */
    value: number;
  };
  amount: {
    label: string;
    icon: 'trending-up' | 'trending-down';
    /** literal colour class from the gold pug */
    iconClass: string;
  };
}

/** `ChartReportsTable` demo rows in mixins/crm/ReportsDetails.pug */
export const sellersReportData: SellerReport[] = [
  {
    reportStage: 'Analysis',
    totalCount: '03',
    status: {
      label: '+15.21%',
      type: 'info'
    }
  },
  {
    reportStage: 'Statement',
    totalCount: '01',
    status: {
      label: '+05.21%',
      type: 'warning'
    }
  },
  {
    reportStage: 'Action',
    totalCount: '02',
    status: {
      label: '+22.12%',
      type: 'primary'
    }
  },
  {
    reportStage: 'Offering',
    totalCount: '02',
    status: {
      label: '-14.21%',
      type: 'danger'
    }
  },
  {
    reportStage: 'Interlocution',
    totalCount: '02',
    status: {
      label: '-14.21%',
      type: 'danger'
    }
  }
];

/** `PurchasersSellersTable` demo rows in mixins/crm/ReportsDetails.pug */
export const dealsReportData: DealsReport[] = [
  {
    dealName: 'Jo_Td01',
    dealOwner: { avatar: teamAvatar, name: 'Ally Aagaard', placeholder: true },
    accountName: 'Themewagon',
    stage: { label: 'Analysis', color: '#3874FF', value: 20 },
    amount: { label: '$140', icon: 'trending-down', iconClass: 'text-danger' }
  },
  {
    dealName: 'Printing Dimensions',
    dealOwner: { avatar: team35, name: 'Alex Abadi' },
    accountName: 'Black Box',
    stage: { label: 'Statement', color: '#0097EB', value: 40 },
    amount: { label: '$214', icon: 'trending-up', iconClass: 'text-success' }
  },
  {
    dealName: 'MM_TD_120',
    dealOwner: { avatar: team32, name: 'Kylia Abbott' },
    accountName: 'Hunter Leader',
    stage: { label: 'Action', color: '#E5780B', value: 50 },
    amount: { label: '$412', icon: 'trending-up', iconClass: 'text-success' }
  },
  {
    dealName: 'Truhlar And Truhlar Attys',
    dealOwner: { avatar: team32, name: 'Kylia Abbott' },
    accountName: 'Eagle Eye',
    stage: { label: 'Offering', color: '#6E7891', value: 60 },
    amount: { label: '$110', icon: 'trending-up', iconClass: 'text-success' }
  },
  {
    dealName: 'Morlong Associates',
    dealOwner: { avatar: team59, name: 'Lyla Nicole' },
    accountName: 'Black Box',
    stage: { label: 'Negotiation', color: '#25B003', value: 100 },
    amount: { label: '$325', icon: 'trending-down', iconClass: 'text-danger' }
  },
  {
    dealName: 'Product Order',
    dealOwner: { avatar: team18, name: 'Hunter Leader' },
    accountName: 'Themewagon',
    stage: { label: 'Negotiation', color: '#25B003', value: 100 },
    amount: { label: '$198', icon: 'trending-down', iconClass: 'text-warning' }
  },
  {
    dealName: 'Feltz Printing Service',
    dealOwner: { avatar: teamAvatar, name: 'Ally Aagaard', placeholder: true },
    accountName: 'Themewagon',
    stage: { label: 'Offering', color: '#6E7891', value: 80 },
    amount: { label: '$142', icon: 'trending-up', iconClass: 'text-success' }
  },
  {
    dealName: 'Flat Plate SP',
    dealOwner: { avatar: teamAvatar, name: 'Ally Aagaard', placeholder: true },
    accountName: 'Eagle Eye',
    stage: { label: 'Offering', color: '#6E7891', value: 80 },
    amount: { label: '$457', icon: 'trending-up', iconClass: 'text-success' }
  },
  {
    dealName: 'Evacuated Tube',
    dealOwner: { avatar: teamAvatar, name: 'Ally Aagaard' },
    accountName: 'Hunter Leader',
    stage: { label: 'Action', color: '#E5780B', value: 100 },
    amount: { label: '$120', icon: 'trending-down', iconClass: 'text-warning' }
  },
  {
    dealName: 'Product Delivery',
    dealOwner: { avatar: team35, name: 'Alex Abadi' },
    accountName: 'Themewagon',
    stage: { label: 'Analysis', color: '#3874FF', value: 100 },
    amount: { label: '$150', icon: 'trending-down', iconClass: 'text-danger' }
  },
  {
    dealName: 'Product Order',
    dealOwner: { avatar: team18, name: 'Hunter Leader' },
    accountName: 'Themewagon',
    stage: { label: 'Negotiation', color: '#25B003', value: 100 },
    amount: { label: '$140', icon: 'trending-down', iconClass: 'text-warning' }
  },
  {
    dealName: 'Feltz Printing Service',
    dealOwner: { avatar: teamAvatar, name: 'Ally Aagaard', placeholder: true },
    accountName: 'Themewagon',
    stage: { label: 'Offering', color: '#6E7891', value: 80 },
    amount: { label: '$122', icon: 'trending-up', iconClass: 'text-success' }
  },
  {
    dealName: 'Flat Plate SP',
    dealOwner: { avatar: teamAvatar, name: 'Ally Aagaard', placeholder: true },
    accountName: 'Eagle Eye',
    stage: { label: 'Offering', color: '#6E7891', value: 80 },
    amount: { label: '$321', icon: 'trending-up', iconClass: 'text-success' }
  },
  {
    dealName: 'Evacuated Tube',
    dealOwner: { avatar: teamAvatar, name: 'Ally Aagaard' },
    accountName: 'Hunter Leader',
    stage: { label: 'Action', color: '#E5780B', value: 100 },
    amount: { label: '$104', icon: 'trending-down', iconClass: 'text-warning' }
  },
  {
    dealName: 'Product Delivery',
    dealOwner: { avatar: team35, name: 'Alex Abadi' },
    accountName: 'Themewagon',
    stage: { label: 'Analysis', color: '#3874FF', value: 100 },
    amount: { label: '$124', icon: 'trending-down', iconClass: 'text-danger' }
  }
];

export interface Report {
  id: number;
  title: string;
  subTitle: string;
  priority: {
    label: string;
    /** literal colour class from the gold pug */
    iconClass: string;
  };
  reportsby: string;
  category: string;
  date: string;
}

/** `reportsDataList` in apps/crm/reports.pug */
export const reports: Report[] = [
  {
    id: 1,
    title: 'Purchasers and sellers',
    subTitle: 'Purchasing-Related Vendors',
    priority: {
      label: 'Urgent',
      iconClass: 'text-danger'
    },
    reportsby: 'Reports by email',
    category: 'Sales Reports',
    date: 'Dec 30, 2022'
  },
  {
    id: 2,
    title: 'Useful Solutions',
    subTitle: 'Obtaining leads today',
    priority: {
      label: 'Urgent',
      iconClass: 'text-danger'
    },
    reportsby: 'Reports by email',
    category: 'HR Reports',
    date: 'Dec 20, 2022'
  },
  {
    id: 3,
    title: 'Category Products',
    subTitle: 'Based on the percentage of recipients',
    priority: {
      label: 'Medium',
      iconClass: 'text-success'
    },
    reportsby: 'Reports on Sales Orders',
    category: 'Marketing Reports',
    date: 'Dec 28, 2022'
  },
  {
    id: 4,
    title: 'Current Deals',
    subTitle: 'Sales for Today',
    priority: {
      label: 'Medium',
      iconClass: 'text-success'
    },
    reportsby: 'Reviews of Products',
    category: 'Sales Reports',
    date: 'Dec 28, 2022'
  },
  {
    id: 5,
    title: 'Useful Solutions',
    subTitle: 'Obtaining leads today',
    priority: {
      label: 'Low',
      iconClass: 'text-info'
    },
    reportsby: 'Reports by email',
    category: 'HR Reports',
    date: 'Dec 27, 2022'
  },
  {
    id: 6,
    title: 'Current Deals',
    subTitle: 'Sums up the many existing businesses.',
    priority: {
      label: 'Low',
      iconClass: 'text-info'
    },
    reportsby: 'Reports by email',
    category: 'Service Reports',
    date: 'Dec 26, 2022'
  },
  {
    id: 7,
    title: 'Lost of Deals',
    subTitle: 'Emails sent by users to all records,',
    priority: {
      label: 'High',
      iconClass: 'text-warning'
    },
    reportsby: 'Reports on Deals',
    category: 'Sales Reports',
    date: 'Dec 25, 2022'
  },
  {
    id: 8,
    title: 'Important Accounts',
    subTitle: 'Contracts closed by a salesman',
    priority: {
      label: 'Low',
      iconClass: 'text-info'
    },
    reportsby: 'Reports on Deals',
    category: 'Marketing Reports',
    date: 'Dec 25, 2022'
  },
  {
    id: 9,
    title: 'Analytics for Email',
    subTitle: 'Based on Status Sales Orders',
    priority: {
      label: 'Medium',
      iconClass: 'text-success'
    },
    reportsby: 'Reviews of Products',
    category: 'Sales Reports',
    date: 'Dec 24, 2022'
  },
  {
    id: 10,
    title: 'Types of Deals',
    subTitle: 'Products support will stop this month',
    priority: {
      label: 'Medium',
      iconClass: 'text-success'
    },
    reportsby: 'Reports by email',
    category: 'Marketing Reports',
    date: 'Dec 23, 2022'
  },
  {
    id: 11,
    title: 'Category Products',
    subTitle: 'Based on the percentage of recipients',
    priority: {
      label: 'High',
      iconClass: 'text-warning'
    },
    reportsby: 'Reports on Sales Orders',
    category: 'Marketing Reports',
    date: 'Dec 22, 2022'
  },
  {
    id: 12,
    title: 'Current Sales',
    subTitle: 'Sales for Today',
    priority: {
      label: 'Urgent',
      iconClass: 'text-danger'
    },
    reportsby: 'Reviews of Products',
    category: 'Sales Reports',
    date: 'Dec 22, 2022'
  },
  {
    id: 13,
    title: 'Important Accounts',
    subTitle: 'Contracts closed by a salesman',
    priority: {
      label: 'Urgent',
      iconClass: 'text-danger'
    },
    reportsby: 'Reports on Deals',
    category: 'Marketing Reports',
    date: 'Dec 21, 2022'
  },
  {
    id: 14,
    title: 'Useful Solutions',
    subTitle: 'Obtaining leads today',
    priority: {
      label: 'Urgent',
      iconClass: 'text-danger'
    },
    reportsby: 'Reports by email',
    category: 'HR Reports',
    date: 'Dec 20, 2022'
  }
];
