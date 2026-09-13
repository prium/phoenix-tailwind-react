import { JSX } from 'react';
import {
  UilUsdCircle,
  UilDollarSign,
  UilDollarAlt,
  UilBill,
  UilInvoice,
  UilProcess,
  UilChartLine
} from '@iconscout/react-unicons';
import { BadgeBg } from 'components/base/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';

interface DividendCardItem {
  id: number;
  icon: JSX.Element;
  title: string;
  content: string;
  iconClassName?: string;
  className?: string;
}

export interface DividendChartData {
  year: number;
  value: number;
}

export interface DividendRecordDataTableRowItem {
  id: number;
  exDividendDate: string;
  cashAmount: number;
  paymentStatus: {
    title: string;
    badgeBg: BadgeBg;
  };
  recordDate: string;
  paymentDate: string;
}

export interface DividendContent {
  dividendCardItems: DividendCardItem[];
  dividendChartData: DividendChartData[];
  dividendGrowthChartData: DividendChartData[];
  dividendRecordDataTableRow: DividendRecordDataTableRowItem[];
}

/* Class strings below are copied verbatim from
   ../phoenix-tailwind/src/pug/mixins/stock/stock-details/DividendsTabContent.pug */
export const dividendContent: DividendContent = {
  dividendCardItems: [
    {
      id: 1,
      icon: (
        <UilUsdCircle
          fill="currentColor"
          style={{ width: 16, height: 23.828 }}
          className="text-success-darker"
        />
      ),
      title: 'Dividend Yield',
      content: '2.80%',
      iconClassName: 'border-success-light bg-success-subtle',
      className: 'pe-8 pb-6 border-b border-e'
    },
    {
      id: 2,
      icon: (
        <UilDollarSign
          fill="currentColor"
          style={{ width: 16, height: 23.828 }}
          className="text-warning-darker"
        />
      ),
      title: 'Annual Dividend',
      content: '$1.00',
      iconClassName: 'border-warning-light bg-warning-subtle',
      className: 'pb-6 ps-8 2xl:px-8 border-b 2xl:border-e'
    },
    {
      id: 3,
      icon: (
        <UilDollarAlt
          fill="currentColor"
          style={{ width: 16, height: 23.828 }}
          className="text-danger-darker"
        />
      ),
      title: 'Ex-Dividend Date',
      content: 'Aug 12, 2024',
      iconClassName: 'border-danger-light bg-danger-subtle',
      className: 'py-6 2xl:pt-0 2xl:px-8 pe-8 border-b border-e'
    },
    {
      id: 4,
      icon: (
        <UilBill
          fill="currentColor"
          style={{ width: 16, height: 23.828 }}
          className="text-primary-darker"
        />
      ),
      title: 'Payout Frequency',
      content: 'Quarterly',
      iconClassName: 'border-primary-light bg-primary-subtle',
      className: 'py-6 2xl:pt-0 ps-8  border-b'
    },
    {
      id: 5,
      icon: (
        <UilInvoice
          fill="currentColor"
          style={{ width: 16, height: 23.828 }}
          className="text-info-darker"
        />
      ),
      title: 'Payout Ratio',
      content: '15.23%',
      iconClassName: 'border-info-light bg-info-subtle',
      className:
        'py-6 2xl:pb-0 2xl:pe-8 md:pe-0 lg:pe-8 border-b border-e 2xl:border-e 2xl:border-b-0'
    },
    {
      id: 6,
      icon: (
        // this package version has no UilArrowGrowth (gold `uil-arrow-growth`)
        <FontAwesomeIcon
          icon={faArrowTrendUp}
          className="text-success-darker"
          style={{ height: 16 }}
        />
      ),
      title: 'Dividend Growth',
      content: '4.26%',
      iconClassName: 'border-success-light bg-success-subtle',
      className:
        'py-6 ps-8 2xl:pe-8 2xl:pb-0 border-b 2xl:border-b-0 2xl:border-e'
    },
    {
      id: 7,
      icon: (
        <UilProcess
          fill="currentColor"
          style={{ width: 16, height: 23.828 }}
          className="text-primary-darker"
        />
      ),
      title: 'Buyback Yield',
      content: '2.57%',
      iconClassName: 'border-primary-light bg-primary-subtle',
      className: 'pt-6 pe-8 2xl:px-8 border-e'
    },
    {
      id: 8,
      icon: (
        <UilChartLine
          fill="currentColor"
          style={{ width: 16, height: 23.828 }}
          className="text-warning-darker"
        />
      ),
      title: 'Shareholder Yield',
      content: '3.00%',
      iconClassName: 'border-warning-light bg-warning-subtle',
      className: 'pt-6 ps-8'
    }
  ],
  dividendChartData: [
    {
      year: 2016,
      value: 48
    },
    {
      year: 2017,
      value: 38
    },
    {
      year: 2018,
      value: 30
    },
    {
      year: 2019,
      value: 38
    },
    {
      year: 2020,
      value: 32
    },
    {
      year: 2021,
      value: 15
    },
    {
      year: 2022,
      value: 20
    },
    {
      year: 2023,
      value: 32
    },
    {
      year: 2024,
      value: 42
    }
  ],
  dividendGrowthChartData: [
    {
      year: 2018,
      value: 40
    },
    {
      year: 2019,
      value: 37
    },
    {
      year: 2020,
      value: 28
    },
    {
      year: 2021,
      value: 45
    },
    {
      year: 2022,
      value: 26
    },
    {
      year: 2023,
      value: 29
    },
    {
      year: 2024,
      value: 23
    }
  ],
  dividendRecordDataTableRow: [
    {
      id: 1,
      exDividendDate: 'Sep 6, 2024',
      cashAmount: 0.12,
      paymentStatus: {
        title: 'pending',
        badgeBg: 'warning'
      },
      recordDate: 'Sep 19, 2024',
      paymentDate: 'N/A'
    },
    {
      id: 2,
      exDividendDate: 'Jun 7, 2024',
      cashAmount: 0.2,
      paymentStatus: {
        title: 'pending',
        badgeBg: 'warning'
      },
      recordDate: 'Jun 20, 2024',
      paymentDate: 'N/A'
    },
    {
      id: 3,
      exDividendDate: 'Nov 30, 2023',
      cashAmount: 1.78,
      paymentStatus: {
        title: 'done',
        badgeBg: 'success'
      },
      recordDate: 'Mar 14, 2024',
      paymentDate: 'Mar 14, 2024'
    },
    {
      id: 4,
      exDividendDate: 'Jun 1, 2023',
      cashAmount: 0.76,
      paymentStatus: {
        title: 'done',
        badgeBg: 'success'
      },
      recordDate: 'Dec 14, 2023',
      paymentDate: 'Dec 14, 2023'
    },
    {
      id: 5,
      exDividendDate: 'Dec 1, 2022',
      cashAmount: 1.9,
      paymentStatus: {
        title: 'done',
        badgeBg: 'success'
      },
      recordDate: 'Sep 14, 2023',
      paymentDate: 'Sep 14, 2023'
    },
    {
      id: 6,
      exDividendDate: 'Mar 5, 2020',
      cashAmount: 2.87,
      paymentStatus: {
        title: 'done',
        badgeBg: 'success'
      },
      recordDate: 'Jun 15, 2023',
      paymentDate: 'Jun 15, 2023'
    },
    {
      id: 7,
      exDividendDate: 'Sep 5, 2019',
      cashAmount: 5.87,
      paymentStatus: {
        title: 'done',
        badgeBg: 'success'
      },
      recordDate: 'Mar 16, 2023',
      paymentDate: 'Mar 16, 2023'
    },
    {
      id: 8,
      exDividendDate: 'Jun 6, 2019',
      cashAmount: 12.98,
      paymentStatus: {
        title: 'done',
        badgeBg: 'success'
      },
      recordDate: 'Dec 15, 2022',
      paymentDate: 'Dec 15, 2022'
    },
    {
      id: 9,
      exDividendDate: 'Mar 7, 2019',
      cashAmount: 2.1,
      paymentStatus: {
        title: 'done',
        badgeBg: 'success'
      },
      recordDate: 'Sep 15, 2022',
      paymentDate: 'Sep 15, 2022'
    },
    {
      id: 11,
      exDividendDate: 'Dec 6, 2018',
      cashAmount: 10.54,
      paymentStatus: {
        title: 'canceled',
        badgeBg: 'danger'
      },
      recordDate: 'Jun 14, 2020',
      paymentDate: 'N/A'
    },
    {
      id: 12,
      exDividendDate: 'Jun 13, 2018',
      cashAmount: 23.54,
      paymentStatus: {
        title: 'done',
        badgeBg: 'success'
      },
      recordDate: 'Dec 14, 2020',
      paymentDate: 'Dec 14, 2020'
    }
  ]
};
