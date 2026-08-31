import member9 from 'assets/img/team/9.webp';
import member11 from 'assets/img/team/11.webp';
import member12 from 'assets/img/team/12.webp';
import member13 from 'assets/img/team/13.webp';
import member22 from 'assets/img/team/22.webp';
import member24 from 'assets/img/team/24.webp';
import member25 from 'assets/img/team/25.webp';
import member26 from 'assets/img/team/26.webp';
import member28 from 'assets/img/team/28.webp';
import member30 from 'assets/img/team/30.webp';
import member32 from 'assets/img/team/32.webp';
import member33 from 'assets/img/team/33.webp';
import member34 from 'assets/img/team/34.webp';
import member35 from 'assets/img/team/35.webp';
import member62 from 'assets/img/team/62.webp';
import { Status } from 'components/base/Avatar';
import { ToDoItem } from 'data/project-management/todoListData';
import {
  faClipboard,
  faEnvelope,
  faPaperclip,
  faPhoneAlt,
  faSquareCheck,
  faVideo
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Activity {
  id: number;
  title: string;
  name: string;
  date: string;
  /** literal classes from the gold `activityData` (icon/iconBg strings) */
  iconBg: string;
  iconColor: string;
  icon: IconProp;
  description?: string;
}

/** `activityData` in apps/crm/deal-details.pug */
export const dealActivities: Activity[] = [
  {
    id: 1,
    title: 'Assigned  as a director for Project  The Chewing Gum Attack',
    name: 'Jackson Pollock',
    date: '22 September, 2022, 4:33 PM',
    description:
      'Utilizing best practices to better leverage our assets, we must engage in black sky leadership thinking, not the usual band-aid solution. ',
    iconBg: 'bg-primary-subtle',
    iconColor: 'text-primary-dark',
    icon: faClipboard
  },
  {
    id: 2,
    title: 'Onboarding Meeting',
    name: 'Jackson Pollock',
    date: '20 September, 2022, 5:31pm',
    iconBg: 'bg-info-subtle',
    iconColor: 'text-cyan-600',
    icon: faVideo
  },
  {
    id: 3,
    title: 'Designing the dungeon',
    name: 'Jackson Pollock',
    date: '19 September, 2022, 4:39pm ',
    description:
      'To get off the runway and paradigm shift, we should take  brass tacks with above-the-board actionable analytics, ramp up with viral partnering, not the usual goat rodeo putting socks on an octopus.  ',
    iconBg: 'bg-success-subtle',
    iconColor: 'text-success-dark',
    icon: faSquareCheck
  },
  {
    id: 4,
    title: 'Purchasing-Related Vendors',
    name: 'Ansolo Lazinatov',
    date: '22 September, 2022, 4:30pm',
    iconBg: 'bg-warning-subtle',
    iconColor: 'text-warning-dark',
    icon: faPhoneAlt
  },
  {
    id: 5,
    title: 'Quary about purchased soccer socks',
    name: 'Ansolo Lazinatov',
    date: '15 September, 2022, 3:33pm',
    description:
      'I’ve come across your posts and found some favorable deals on your page. I’ve added a load of products to the cart and I don’t know the payment options you avail. Also, can you enlighten me about any discount.',
    iconBg: 'bg-danger-subtle',
    iconColor: 'text-danger-dark',
    icon: faEnvelope
  },
  {
    id: 6,
    title: 'Added image',
    name: 'Ansolo Lazinatov',
    date: '11 September, 2022, 12:15am ',
    iconBg: 'bg-primary-subtle',
    iconColor: 'text-primary-dark',
    icon: faPaperclip
  }
];

export interface Note {
  id: number;
  name: string;
  date: string;
  description: string;
}

/** `notesData` in apps/crm/deal-details.pug */
export const dealNotes: Note[] = [
  {
    id: 1,
    name: 'Ansolo Lazinatov',
    date: 'clock 12 Nov, 2018',
    description: 'Gave us a nice feedback'
  },
  {
    id: 2,
    name: 'Ansolo Lazinatov',
    date: ' 30 Jan, 2019',
    description:
      'I also want to let you know that I am available to you as your real estate insider from now on. If you have any questions about the market, even if they sound silly, call or text anytime. '
  },
  {
    id: 3,
    name: 'Jackson Pollock',
    date: '19 September, 2022, 4:39pm ',
    description:
      'To get off the runway and paradigm shift, we should take  brass tacks with above-the-board actionable analytics, ramp up with viral partnering, not the usual goat rodeo putting socks on an octopus.  '
  },
  {
    id: 4,
    name: 'Ansolo Lazinatov',
    date: '22 September, 2022, 4:30pm',
    description:
      'Utilizing best practices to better leverage our assets, we must engage in black sky leadership thinking, not the usual band-aid solution. '
  }
];

export interface Meeting {
  id: number;
  title: string;
  date: {
    from: string;
    to: string;
    duration: string;
  };
  badge: {
    /** literal badge class from the gold `meetingData` */
    className: string;
    text: string;
  };
  /** literal `fa-circle` colour class from the gold `meetingData` */
  priority: {
    label: string;
    iconClass: string;
  };
  assignees: string[];
  more?: string;
  name?: string;
}

/** `meetingData` in apps/crm/deal-details.pug */
export const meetingData: Meeting[] = [
  {
    id: 1,
    title: 'Onboarding Meeting',
    date: {
      from: '5:30 pm',
      to: '7:00pm',
      duration: ' - 1h 30min'
    },
    badge: {
      className: 'badge-phoenix-primary',
      text: 'today'
    },
    assignees: [member9, member25, member32, member35],
    more: '+1',
    priority: {
      label: 'Urgent',
      iconClass: 'text-danger'
    }
  },
  {
    id: 2,
    title: 'Agile Mindset Meetup',
    date: {
      from: '4:30 pm',
      to: '6:00pm',
      duration: ' - 1h 30min'
    },
    badge: {
      className: 'badge-phoenix-warning',
      text: 'tomorrow'
    },
    assignees: [member11, member26, member33, member30],
    more: '+1',
    priority: {
      label: 'Medium',
      iconClass: 'text-success'
    }
  },
  {
    id: 3,
    title: 'Meeting Fundamentals',
    date: {
      from: '6:00 pm',
      to: '7:20pm',
      duration: ' - 1h 20min'
    },
    badge: {
      className: 'badge-phoenix-warning',
      text: 'tomorrow'
    },
    name: 'R',
    assignees: [member12, member28, member22],
    more: '+2',
    priority: {
      label: 'High',
      iconClass: 'text-warning'
    }
  },
  {
    id: 4,
    title: 'Design System Meeting',
    date: {
      from: '7:30 pm',
      to: '8:45pm',
      duration: ' - 1h 45min'
    },
    badge: {
      className: 'badge-phoenix-warning',
      text: 'tomorrow'
    },
    assignees: [member13, member24, member62, member34],
    more: '+4',
    priority: {
      label: 'Low',
      iconClass: 'text-info'
    }
  }
];

/** `taskList` in mixins/crm/LeadDetails.pug (`+TasksList`) */
export const taskList: ToDoItem[] = [
  {
    task: 'Platforms for data administration',
    date: '19 Nov, 2022',
    time: '11:56 PM'
  },
  {
    task: 'Make wiser business choices.',
    date: '05 Nov, 2022',
    time: '09:30 PM'
  },
  {
    task: 'Market and consumer insights',
    date: '02 Nov, 2022',
    time: '05:25 AM'
  },
  {
    task: 'Dashboards for business insights',
    date: '29 Oct, 2022',
    time: '08:21 PM'
  },
  {
    task: 'Analytics and consultancy for data',
    date: '21 Oct, 2022',
    time: '03:45 PM',
    completed: true
  },
  {
    task: 'Planning your locations Customer data platform',
    date: '14 Oct, 2022',
    time: '10:00 PM',
    completed: true
  },
  {
    task: 'Promotion of technology',
    date: '12 Oct, 2022',
    time: '02:00 AM',
    completed: true
  }
];

export interface CallTableDataType {
  user: {
    avatar: string;
    name: string;
    status: Status;
  };
  description: string;
  date: string;
  creatBy: string;
  activity: string;
}

/** `callTableData` in mixins/crm/DealDetails.pug */
export const callTableData: CallTableDataType[] = [
  {
    user: {
      avatar: member35,
      name: 'Ansolo Lazinatov',
      status: 'online'
    },
    description: 'Purchasing-Related Vendors',
    date: 'Dec 29, 2021',
    creatBy: 'Ansolo Lazinarov',
    activity: 'Active'
  },
  {
    user: {
      avatar: member9,
      name: 'Jackson Pollock',
      status: 'offline'
    },
    description: 'Based on emails sent rate, the top 10 users',
    date: 'Mar 27, 2021',
    creatBy: 'Jackson Pollock',
    activity: '6 hours ago'
  },
  {
    user: {
      avatar: member35,
      name: 'Ansolo Lazinatov',
      status: 'online'
    },
    description: 'Based on the percentage of recipients',
    date: 'Jun 24, 2021',
    creatBy: 'Ansolo Lazinarov',
    activity: 'Active'
  },
  {
    user: {
      avatar: member9,
      name: 'Jackson Pollock',
      status: 'offline'
    },
    description: 'Obtaining leads today',
    date: 'May 19, 2024',
    creatBy: 'Jackson Pollock',
    activity: '6 hours ago'
  },
  {
    user: {
      avatar: member35,
      name: 'Ansolo Lazinatov',
      status: 'online'
    },
    description: 'Sums up the many phases of new and existing businesses.',
    date: 'Aug 19, 2024',
    creatBy: 'Ansolo Lazinarov',
    activity: 'Active'
  },
  {
    user: {
      avatar: member35,
      name: 'Ansolo Lazinatov',
      status: 'online'
    },
    description: 'Purchasing-Related Vendors',
    date: 'Aug 19, 2024',
    creatBy: 'Ansolo Lazinarov',
    activity: 'Active'
  }
];
