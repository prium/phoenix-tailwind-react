import Img10 from 'assets/img/stock/news/10.png';
import Img1 from 'assets/img/stock/news/1.png';
import Img2 from 'assets/img/stock/news/2.png';
import Img3 from 'assets/img/stock/news/3.png';
import Img4 from 'assets/img/stock/news/4.png';
import Img5 from 'assets/img/stock/news/5.png';
import Img6 from 'assets/img/stock/news/6.png';
import Img7 from 'assets/img/stock/news/7.png';
import Img8 from 'assets/img/stock/news/8.png';

import Avatar1 from 'assets/img/team/1.webp';
import Avatar2 from 'assets/img/team/2.webp';
import Avatar3 from 'assets/img/team/3.webp';

import AppleLogo from 'assets/img/brand3/dark_apple_logo.png';
import DarkAppleLogo from 'assets/img/brand3/light_apple_logo.png';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { BadgeBg } from 'components/base/Badge';
import {
  faBriefcase,
  faBuilding,
  faCalendarCheck,
  faCalendarWeek,
  faChartColumn,
  faChartLine,
  faChartPie,
  faCity,
  faCode,
  faCodeCompare,
  faEarthAmericas,
  faFlag,
  faGlobe,
  faHandHoldingDollar,
  faHashtag,
  faIdCard,
  faLocation,
  faMoneyBillTrendUp,
  faPhone,
  faRepeat,
  faRightLeft,
  faTicket,
  faUser,
  faUsers
} from '@fortawesome/free-solid-svg-icons';

type NewsState = 'featured' | 'highlight' | 'regular';

export interface NewsItem {
  id: number;
  image: string;
  title: string;
  description: string;
  postTime: string;
  type: string;
  tags?: {
    id: number;
    label: string;
    link: string;
  }[];
  newsState: NewsState;
  className?: string;
}

type UpcomingEventUserStatus = 'featured' | 'interested';
export interface UpcomingEventsItem {
  id: number;
  title: string;
  status: UpcomingEventUserStatus;
  scheduled: {
    startDate: string;
    endDate?: string;
    startTime: string;
    endTime: string;
    displayTimeZone: string;
  };
  location: string;
  description: string;
  interestedToGoing: {
    id: number;
    image: string;
  }[];
  totalUserCount: number;
  interested: number;
}
export interface EventsLaterThisWeek {
  id: number;
  title: string;
  schedule: {
    startDate: string;
    endDate?: string;
    startTime: string;
    endTime: string;
    displayTimeZone: string;
  };
  location: string;
  interestedToGoing: {
    id: number;
    image: string;
  }[];
  totalUserCount: number;
  interested: number;
}

export interface PreviousEvent {
  id: number;
  title: string;
  schedule: {
    startDate: string;
    endDate?: string;
    startTime: string;
    endTime: string;
    displayTimeZone: string;
  };
  location: string;
  interestedToGoing: number;
  className?: string;
}

export interface EventLists {
  upcomingEvents: UpcomingEventsItem[];
  eventsLaterThisWeek: EventsLaterThisWeek[];
  previousEvents: PreviousEvent[];
}

export interface CompanyProfileTotalItem {
  id: number;
  title: string;
  icon: {
    name: IconDefinition;
    iconClassName?: string;
    iconColor?: string;
  };
  growth: string;
  badge: {
    title: string;
    badgeBg: BadgeBg;
  };
  tooltipContent: string;
  className?: string;
}

export interface CompanyProfileDescriptionItem {
  id: number;
  title: string;
  icon: IconDefinition;
  image?: string;
  darkImage?: string;
  content: string;
  link?: string;
  className?: string;
}

export interface EmployeeRecordTableRowItem {
  id: number;
  date: string;
  employees: number;
  change: number;
  growth: {
    value: number;
    className?: string;
  };
}

export interface CompanyProfileItems {
  companyProfileTotalItems: CompanyProfileTotalItem[];
  companyDetailsItems: CompanyProfileDescriptionItem[];
  stockDetailsItems: CompanyProfileDescriptionItem[];
  employeeRecordTableRows: EmployeeRecordTableRowItem[];
}

/* Sidebar swiper + option-chain table demo data — hardcoded in
   mixins/stock/stock-details/StockDetailsSideBar(Table).pug (view-specific,
   distinct from the dashboard's option chain data). */
export interface SidebarOptionChainDate {
  id: number;
  date: string;
  className?: string;
}

export interface SidebarOptionChainTable {
  calls: { bid: string; ask: string }[];
  strikePrices: string[];
  puts: { bid: string; ask: string }[];
}

export const sidebarOptionChainDates: SidebarOptionChainDate[] = [
  { id: 1, date: 'May 20, 24', className: 'active' },
  { id: 2, date: 'Jun 01, 24' },
  { id: 3, date: 'Jun 15, 24' },
  { id: 4, date: 'Jun 29, 24' },
  { id: 5, date: 'Jul 11, 24' },
  { id: 6, date: 'Jul 28, 24' }
];

export const sidebarOptionChainTable: SidebarOptionChainTable = {
  calls: [
    { bid: '25.15', ask: '25.30' },
    { bid: '20.80', ask: '20.90' },
    { bid: '18.90', ask: '19.00' }
  ],
  strikePrices: ['1,656.00', '1,657.00', '1,590.00'],
  puts: [
    { bid: '1.25', ask: '1.27' },
    { bid: '1.87', ask: '1.89' },
    { bid: '2.19', ask: '2.26' }
  ]
};

export const newsItems: NewsItem[] = [
  {
    id: 1,
    image: Img10,
    title: `Apple (AAPL) Requires a 'Glowtime' Event to Ignite a Company-Wide Catalyst`,
    description: `The headline "Apple (AAPL) Needs 'Glowtime' Event to Spark Company Catalyst" 
    suggests that Apple Inc. (stock ticker AAPL) requires a significant and impactful....`,
    postTime: '2 hours ago',
    type: 'The Business Standard',
    tags: [
      {
        id: 33,
        label: 'orcl',
        link: '#!'
      },
      {
        id: 34,
        label: 'AAPL',
        link: '#!'
      }
    ],
    newsState: 'featured',
    className: ''
  },
  {
    id: 2,
    image: Img1,
    title: `Here's How Investing $100 a Month Plus Your Tax refers`,
    description: `Here's How Investing $100 a Month Plus Your Tax refers to a financial strategy that involves regularly investing $100 per month along with any tax refunds or deductions to maximize long-term growth through compound interest and market returns.`,
    postTime: '2 hours ago',
    type: 'The Economic Time',
    tags: [
      {
        id: 35,
        label: 'orcl',
        link: '#!'
      }
    ],
    newsState: 'highlight',
    className: ''
  },
  {
    id: 3,
    image: Img2,
    title: `According to FT, Arm's semiconductor technology refers`,
    description: `According to FT, Arm's Semiconductor Technology refers to a report or analysis by the Financial Times (FT) regarding Arm's advancements, market impact, and strategic developments in the semiconductor industry.`,
    postTime: '3 hours ago',
    type: 'The Business Standard',
    tags: [
      {
        id: 36,
        label: `arm's`,
        link: '#!'
      }
    ],
    newsState: 'highlight',
    className: ''
  },
  {
    id: 4,
    image: Img3,
    title: `Apple: Buy, Sell, or Hold?`,
    description: `Investors are prompted to assess whether they should buy more shares of Apple (indicating confidence in future growth) or hold their current positions based on market trends, financial performance, and long-term potential.`,
    postTime: '8 hours ago',
    type: 'Mint',
    tags: [
      {
        id: 37,
        label: 'AAPL',
        link: '#!'
      },
      {
        id: 38,
        label: 'buy',
        link: '#!'
      },
      {
        id: 39,
        label: 'sell',
        link: '#!'
      }
    ],
    newsState: 'regular',
    className: 'col-12 sm:col-6 2xl:col-4'
  },
  {
    id: 5,
    image: Img4,
    title: `Guru Fundamental Report for AAPL`,
    description: `This type of report typically evaluates key financial metrics such as earnings, revenue growth, profit margins, and market trends to provide insights into a company's overall performance and future outlook.`,
    postTime: '9 hours ago',
    type: 'The Financial Express',
    tags: [{ id: 40, label: 'orcl', link: '#!' }],
    newsState: 'regular',
    className: 'col-12 sm:col-6 2xl:col-4'
  },
  {
    id: 6,
    image: Img5,
    title: `Berkshire Hathaway Holds Bank of America, American Express`,
    description: `Berkshire Hathaway, the multinational conglomerate led by Warren Buffett, continues to maintain significant investments in various industries, demonstrating a long-term value-driven approach to wealth accumulation.`,
    postTime: '11 hours ago',
    type: 'Business Line',
    tags: [],
    newsState: 'regular',
    className: 'col-12 sm:col-6 2xl:col-4'
  },
  {
    id: 7,
    image: Img6,
    title: `Is Apple Stock a Buy Now?`,
    description: `It suggests an analysis of Apple's recent performance, market conditions, and potential future growth to determine whether investing in the company remains a profitable opportunity for investors.`,
    postTime: '14 hours ago',
    type: 'The Business Standard',
    tags: [],
    newsState: 'regular',
    className: 'col-12 sm:col-6 2xl:col-4'
  },
  {
    id: 8,
    image: Img7,
    title: `40.5% of Warren Buffett's $312 Billion Berkshire Hathaway`,
    description: `The headline "This percentage represents a substantial fraction of Berkshire Hathaway's overall worth, which is reported to be influenced by its key investments and long-term financial strategies.`,
    postTime: '18 hours ago',
    type: `Investor's Business Daily`,
    tags: [{ id: 41, label: 'orcl', link: '#!' }],
    newsState: 'regular',
    className: 'col-12 sm:col-6 2xl:col-4'
  },
  {
    id: 9,
    image: Img8,
    title: `This AI Stock Is Set to Surpass Nvidia by the End of the Year`,
    description: `This AI Stock Will Outperform Nvidia by Year-End" suggests that a specific company within the artificial intelligence sector is expected to surpass Nvidia in market performance, driven by innovation, revenue growth, or strategic advancements.`,
    postTime: '24 hours ago',
    type: 'The Business Standard',
    tags: [
      { id: 42, label: 'AAPL', link: '#!' },
      { id: 43, label: 'ai', link: '#!' }
    ],
    newsState: 'regular',
    className: 'col-12 sm:col-6 2xl:col-4'
  }
];

export const eventList: EventLists = {
  upcomingEvents: [
    {
      id: 1,
      title: 'Stock Market Essentials: Company Fundamentals',
      status: 'featured',
      scheduled: {
        startDate: '24/03/2024',
        startTime: '12.30 PM',
        endTime: '10 PM',
        displayTimeZone: 'EDT'
      },
      location: 'Tavern on the Greend, New York',
      description:
        'Picking stocks requires diligence beyond diversified investing with mutual funds or ETFs. Learn characteristics essential to finding and comparing stocks, such as profitability, growth, value, and more.',
      interestedToGoing: [
        {
          id: 101,
          image: Avatar1
        },
        {
          id: 102,
          image: Avatar2
        },
        {
          id: 103,
          image: Avatar3
        }
      ],
      totalUserCount: 607,
      interested: 1000
    },
    {
      id: 2,
      title: 'Managing Your Mind: The Forgotten Indicator',
      status: 'interested',
      scheduled: {
        startDate: '26/03/2024',
        startTime: '12.30 PM',
        endTime: '10 PM',
        displayTimeZone: 'EDT'
      },
      location: 'Tavern on the Greend, New York',
      description: `While traditional metrics such as financial indicators, performance data, 
      or technical analysis are commonly used to assess progress or
       predict outcomes, this concept suggests that managing one's 
       psychological state is equally important.`,
      interestedToGoing: [
        {
          id: 101,
          image: Avatar1
        },
        {
          id: 102,
          image: Avatar2
        },
        {
          id: 103,
          image: Avatar3
        }
      ],
      totalUserCount: 607,
      interested: 1000
    }
  ],
  eventsLaterThisWeek: [
    {
      id: 3,
      title: 'Setting Up Your Options Trade',
      schedule: {
        startDate: '28/03/2024',
        endDate: '30/03/2024',
        startTime: '12.30 PM',
        endTime: '10 PM',
        displayTimeZone: 'EDT'
      },
      location: 'Tavern on the Greend, New York',
      interestedToGoing: [
        {
          id: 104,
          image: Avatar1
        },
        {
          id: 105,
          image: Avatar2
        },
        {
          id: 106,
          image: Avatar3
        }
      ],
      totalUserCount: 607,
      interested: 1000
    },
    {
      id: 4,
      title: 'Stock Market Essentials',
      schedule: {
        startDate: '03/04/2024',
        startTime: '12.30 PM',
        endTime: '10 PM',
        displayTimeZone: 'EDT'
      },
      location: 'Tavern on the Greend, New York',
      interestedToGoing: [
        {
          id: 107,
          image: Avatar1
        },
        {
          id: 108,
          image: Avatar2
        },
        {
          id: 109,
          image: Avatar3
        }
      ],
      totalUserCount: 607,
      interested: 1000
    },
    {
      id: 5,
      title: 'Stock Research',
      schedule: {
        startDate: '07/04/2024',
        startTime: '12.30 PM',
        endTime: '10 PM',
        displayTimeZone: 'EDT'
      },
      location: 'Tavern on the Greend, New York',
      interestedToGoing: [
        {
          id: 110,
          image: Avatar1
        },
        {
          id: 111,
          image: Avatar2
        },
        {
          id: 112,
          image: Avatar3
        }
      ],
      totalUserCount: 607,
      interested: 1000
    },
    {
      id: 6,
      title: 'Introduction to Candlestick Charts',
      schedule: {
        startDate: '17/04/2024',
        startTime: '12.30 PM',
        endTime: '10 PM',
        displayTimeZone: 'EDT'
      },
      location: 'Tavern on the Greend, New York',
      interestedToGoing: [
        {
          id: 113,
          image: Avatar1
        },
        {
          id: 114,
          image: Avatar2
        },
        {
          id: 115,
          image: Avatar3
        }
      ],
      totalUserCount: 607,
      interested: 1000
    }
  ],
  previousEvents: [
    {
      id: 7,
      title: 'Managing Your Mind: The Forgotten Indicator',
      schedule: {
        startDate: '09/02/2021',
        endDate: '01/03/2021',
        startTime: '12.30 PM',
        endTime: '10 PM',
        displayTimeZone: 'EDT'
      },
      location: 'Tavern on the Greend, New York',
      interestedToGoing: 64,
      className: 'border-t border-b'
    },
    {
      id: 8,
      title: 'Setting Up Your Options Trade in Power',
      schedule: {
        startDate: '09/02/2021',
        endDate: '01/03/2021',
        startTime: '12.30 PM',
        endTime: '10 PM',
        displayTimeZone: 'EDT'
      },
      location: 'Tavern on the Greend, New York',
      interestedToGoing: 64,
      className: 'border-b sm:border-t'
    },
    {
      id: 9,
      title: 'Stock Market Essentials: Using Stock Charts',
      schedule: {
        startDate: '09/02/2021',
        endDate: '01/03/2021',
        startTime: '12.30 PM',
        endTime: '10 PM',
        displayTimeZone: 'EDT'
      },
      location: 'Tavern on the Greend, New York',
      interestedToGoing: 64,
      className: 'border-b'
    },
    {
      id: 10,
      title: 'Stock Research',
      schedule: {
        startDate: '09/02/2021',
        endDate: '01/03/2021',
        startTime: '12.30 PM',
        endTime: '10 PM',
        displayTimeZone: 'EDT'
      },
      location: 'Tavern on the Greend, New York',
      interestedToGoing: 64,
      className: 'border-b'
    },
    {
      id: 11,
      title: 'Introduction to Candlestick Charts',
      schedule: {
        startDate: '09/02/2021',
        endDate: '01/03/2021',
        startTime: '12.30 PM',
        endTime: '10 PM',
        displayTimeZone: 'EDT'
      },
      location: 'Tavern on the Greend, New York',
      interestedToGoing: 64,
      className: 'border-b'
    },
    {
      id: 12,
      title: 'Fibonacci Tools & Analysis',
      schedule: {
        startDate: '09/02/2021',
        endDate: '01/03/2021',
        startTime: '12.30 PM',
        endTime: '10 PM',
        displayTimeZone: 'EDT'
      },
      location: 'Tavern on the Greend, New York',
      interestedToGoing: 64,
      className: 'border-b'
    },
    {
      id: 13,
      title: 'Talking Futures Markets with Special Guest Jim Iuorio',
      schedule: {
        startDate: '09/02/2021',
        endDate: '01/03/2021',
        startTime: '12.30 PM',
        endTime: '10 PM',
        displayTimeZone: 'EDT'
      },
      location: 'Tavern on the Greend, New York',
      interestedToGoing: 64,
      className: 'border-b'
    },
    {
      id: 14,
      title: 'Bearish Trading Strategies',
      schedule: {
        startDate: '09/02/2021',
        endDate: '01/03/2021',
        startTime: '12.30 PM',
        endTime: '10 PM',
        displayTimeZone: 'EDT'
      },
      location: 'Tavern on the Greend, New York',
      interestedToGoing: 64,
      className: 'border-b'
    }
  ]
};

export const companyProfileItems: CompanyProfileItems = {
  companyProfileTotalItems: [
    {
      id: 1,
      title: 'Total Employees',
      icon: {
        name: faUser,
        iconClassName: 'bg-info/15  border-info-light',
        iconColor: 'text-info-dark'
      },
      growth: '1.61K',
      badge: {
        title: '-1.83',
        badgeBg: 'danger'
      },
      tooltipContent: '1.64k',
      className:
        'pb-4 border-b border-e lg:border-e-0 2xl:border-e pe-4 lg:pe-0 2xl:pe-8'
    },
    {
      id: 2,
      title: 'Total Revenue',
      icon: {
        name: faHandHoldingDollar,
        iconClassName: 'bg-primary/15 border-primary-light',
        iconColor: 'text-primary-dark'
      },
      growth: '$2.40M',
      badge: {
        title: '+4.71',
        badgeBg: 'success'
      },
      tooltipContent: '5.4k',
      className: 'pb-4  lg:pt-4 2xl:pt-0 ps-4 lg:ps-0 2xl:ps-8 border-b'
    },
    {
      id: 3,
      title: 'Total Change (1Y)',
      icon: {
        name: faRepeat,
        iconClassName: 'bg-warning/15 border-warning-light',
        iconColor: 'text-warning-dark'
      },
      growth: '-3,000',
      badge: {
        title: '+1.71',
        badgeBg: 'success'
      },
      tooltipContent: '2.64k',
      className:
        'py-4 border-b border-e lg:border-e-0 2xl:border-e pe-4 lg:pe-0 2xl:pe-8'
    },
    {
      id: 4,
      title: 'Total Profits',
      icon: {
        name: faMoneyBillTrendUp,
        iconClassName: 'bg-info/15  border-info-light',
        iconColor: 'text-info-dark'
      },
      growth: '$6.34M',
      badge: {
        title: '+3.71',
        badgeBg: 'success'
      },
      tooltipContent: '3.64k',
      className: 'py-4 ps-4 lg:ps-0 2xl:ps-8 border-b'
    },
    {
      id: 5,
      title: 'Total Growth (1Y)',
      icon: {
        name: faChartLine,
        iconClassName: 'bg-primary/15 border-primary-light',
        iconColor: 'text-primary-dark'
      },
      growth: '-1.83%',
      badge: {
        title: '-2.32',
        badgeBg: 'danger'
      },
      tooltipContent: '1.4k',
      className:
        'py-4 md:pb-0 lg:pb-4 2xl:pb-0 border-e lg:border-e-0 2xl:border-e pe-4 lg:pe-0 2xl:pe-8 lg:border-b 2xl:border-b-0'
    },
    {
      id: 6,
      title: 'Total Market Cap',
      icon: {
        name: faChartColumn,
        iconClassName: 'bg-warning/15 border-warning-light',
        iconColor: 'text-warning-dark'
      },
      growth: '$3.46T',
      badge: {
        title: '+3.71',
        badgeBg: 'success'
      },
      tooltipContent: '3.64k',
      className: 'pt-4 ps-4 lg:ps-0 2xl:ps-8'
    }
  ],
  companyDetailsItems: [
    {
      id: 100,
      title: 'Company Name',
      icon: faBuilding,
      image: AppleLogo,
      darkImage: DarkAppleLogo,
      content: 'Apple Inc',
      className: 'mb-4'
    },
    {
      id: 101,
      title: 'CTO',
      icon: faBriefcase,
      content: 'Timothy Cook',
      className: 'mb-4'
    },
    {
      id: 102,
      title: 'Country',
      icon: faEarthAmericas,
      content: 'United States',
      className: 'mb-4'
    },
    {
      id: 104,
      title: 'Founded',
      icon: faFlag,
      content: '1997',
      className: 'mb-4'
    },
    {
      id: 105,
      title: 'IOP Date',
      icon: faCalendarCheck,
      content: 'Dec 12, 1980',
      className: 'mb-4'
    },
    {
      id: 106,
      title: 'Industry',
      icon: faCity,
      content: 'Consumer Electronics',
      className: 'mb-4'
    },
    {
      id: 107,
      title: 'Sector',
      icon: faChartPie,
      content: 'Technology',
      className: 'mb-4'
    },
    {
      id: 108,
      title: 'Employees',
      icon: faUsers,
      content: '1,61,000',
      className: 'mb-4'
    },
    {
      id: 109,
      title: 'Website',
      icon: faGlobe,
      content: 'apple.com',
      link: 'https://apple.com',
      className: 'mb-4'
    },
    {
      id: 110,
      title: 'Phone Number',
      icon: faPhone,
      content: '+1234567890',
      className: 'mb-4'
    },
    {
      id: 111,
      title: 'Address',
      icon: faLocation,
      content: 'One Apple Park Way, Cupertino, CA 95014'
    }
  ],
  stockDetailsItems: [
    {
      id: 112,
      title: 'Ticker Symbol',
      icon: faTicket,
      content: 'AAPL',
      className: 'mb-4'
    },
    {
      id: 113,
      title: 'Exchange',
      icon: faRightLeft,
      content: 'NASDAQ',
      className: 'mb-4'
    },
    {
      id: 114,
      title: 'Fiscal Year',
      icon: faCalendarWeek,
      content: 'October - September',
      className: 'mb-4'
    },
    {
      id: 115,
      title: 'Reporting Cur.',
      icon: faChartLine,
      content: 'USD',
      className: 'mb-4'
    },
    {
      id: 116,
      title: 'CIK Code',
      icon: faCodeCompare,
      content: '0000320193',
      className: 'mb-4'
    },
    {
      id: 117,
      title: 'CUSIP Number',
      icon: faHashtag,
      content: '037833100',
      className: 'mb-4'
    },
    {
      id: 118,
      title: 'ISIN Number',
      icon: faHashtag,
      content: 'US0378331005',
      className: 'mb-4'
    },
    {
      id: 119,
      title: 'Employer ID',
      icon: faIdCard,
      content: '94-2404110',
      className: 'mb-4'
    },
    {
      id: 120,
      title: 'SIC Code',
      icon: faCode,
      content: '3571'
    }
  ],
  employeeRecordTableRows: [
    {
      id: 1,
      date: 'Sep 30, 2023',
      employees: 161000,
      change: 10000,
      growth: {
        value: -1.83,
        className: 'text-danger'
      }
    },
    {
      id: 2,
      date: 'Sep 24, 2022',
      employees: 164000,
      change: -3000,
      growth: {
        value: 6.49,
        className: 'text-success'
      }
    },
    {
      id: 3,
      date: 'Sep 25, 2021',
      employees: 154000,
      change: 7000,
      growth: {
        value: 4.76,
        className: 'text-success'
      }
    },
    {
      id: 4,
      date: 'Sep 26, 2020',
      employees: 147000,
      change: 10000,
      growth: {
        value: 7.3,
        className: 'text-success'
      }
    },
    {
      id: 5,
      date: 'Sep 28, 2019',
      employees: 137000,
      change: 5000,
      growth: {
        value: 3.79,
        className: 'text-success'
      }
    },
    {
      id: 6,
      date: 'Sep 29, 2018',
      employees: 132000,
      change: 9000,
      growth: {
        value: 7.32,
        className: 'text-success'
      }
    },
    {
      id: 7,
      date: 'Sep 30, 2017',
      employees: 123000,
      change: 7000,
      growth: {
        value: 6.03,
        className: 'text-success'
      }
    },
    {
      id: 8,
      date: 'Sep 26, 2016',
      employees: 112000,
      change: 9000,
      growth: {
        value: 4.3,
        className: 'text-success'
      }
    },
    {
      id: 9,
      date: 'Sep 24, 2015',
      employees: 109000,
      change: 8000,
      growth: {
        value: 5.79,
        className: 'text-success'
      }
    },
    {
      id: 10,
      date: 'Sep 18, 2014',
      employees: 107000,
      change: 8000,
      growth: {
        value: 5.77,
        className: 'text-success'
      }
    },
    {
      id: 11,
      date: 'Sep 30, 2013',
      employees: 100000,
      change: 10000,
      growth: {
        value: 6.03,
        className: 'text-success'
      }
    }
  ]
};
