import { JSX } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  UilArchive,
  UilExclamationCircle,
  UilInbox,
  UilLocationArrow,
  UilPen,
  UilStar,
  UilTrash
} from '@iconscout/react-unicons';
import {
  faCircle,
  faFilePdf,
  faFileZipper,
  faMusic
} from '@fortawesome/free-solid-svg-icons';
import Unicon from 'components/base/Unicon';
import team60 from 'assets/img/team/60.webp';
import team58 from 'assets/img/team/58.webp';
import team57 from 'assets/img/team/57.webp';
import team59 from 'assets/img/team/59.webp';
import team30 from 'assets/img/team/30.webp';
import teamAvatar from 'assets/img/team/avatar.webp';

export interface SidebarItem {
  icon: JSX.Element;
  label: string;
  count?: number;
  link?: string;
  active?: boolean;
}

export interface EmailAttachment {
  id: number;
  icon: IconDefinition;
  /** literal icon class string from the gold pug demo data */
  iconClass: string;
  fileName: string;
}

/** Demo email, mirroring the gold pug `emails` variable (mixins/email/Common.pug) */
export interface Email {
  id: number;
  user: string;
  avatar?: string;
  avatarPlaceholder?: boolean;
  /** letter for the letter avatar — the gold shows 'R' for Max Williamson */
  avatarName?: string;
  title: string;
  description: string;
  time: string;
  star: boolean;
  read: boolean;
  attachments?: EmailAttachment[];
}

/*
 * Sidebar icons render the gold markup:
 * mailbox/filtered: span.me-2.nav-icons.uil.uil-* (12.8px = the nav-link's
 * --text-md glyph size); labels: FA svg with data-fa-transform='shrink-10'.
 */
export const mailboxItems: SidebarItem[] = [
  {
    icon: (
      <Unicon
        icon={UilInbox}
        lineBox
        wrapperClassName="me-2 nav-icons"
        fill="currentColor"
        size={12.8}
      />
    ),
    label: 'Inbox',
    count: 5,
    link: '/apps/email/inbox'
  },
  {
    icon: (
      <Unicon
        icon={UilLocationArrow}
        lineBox
        wrapperClassName="me-2 nav-icons"
        fill="currentColor"
        size={12.8}
      />
    ),
    label: 'Sent',
    count: 23,
    active: true
  },
  {
    icon: (
      <Unicon
        icon={UilPen}
        lineBox
        wrapperClassName="me-2 nav-icons"
        fill="currentColor"
        size={12.8}
      />
    ),
    label: 'Draft'
  },
  {
    icon: (
      <Unicon
        icon={UilExclamationCircle}
        lineBox
        wrapperClassName="me-2 nav-icons"
        fill="currentColor"
        size={12.8}
      />
    ),
    label: 'Spam'
  },
  {
    icon: (
      <Unicon
        icon={UilTrash}
        lineBox
        wrapperClassName="me-2 nav-icons"
        fill="currentColor"
        size={12.8}
      />
    ),
    label: 'Trash'
  }
];

export const filteredItems: SidebarItem[] = [
  {
    icon: (
      <Unicon
        icon={UilStar}
        lineBox
        wrapperClassName="me-2 nav-icons"
        fill="currentColor"
        size={12.8}
      />
    ),
    label: 'Starred'
  },
  {
    icon: (
      <Unicon
        icon={UilArchive}
        lineBox
        wrapperClassName="me-2 nav-icons"
        fill="currentColor"
        size={12.8}
      />
    ),
    label: 'Archive'
  }
];

export const labelItems: SidebarItem[] = [
  {
    icon: (
      <FontAwesomeIcon
        icon={faCircle}
        className="-ms-1 me-1 text-primary"
        transform="shrink-10"
      />
    ),
    label: 'Personal'
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faCircle}
        className="-ms-1 me-1 text-primary-dark"
        transform="shrink-10"
      />
    ),
    label: 'Work'
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faCircle}
        className="-ms-1 me-1 text-success"
        transform="shrink-10"
      />
    ),
    label: 'Payments'
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faCircle}
        className="-ms-1 me-1 text-warning"
        transform="shrink-10"
      />
    ),
    label: 'Invoices'
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faCircle}
        className="-ms-1 me-1 text-danger"
        transform="shrink-10"
      />
    ),
    label: 'Accounts'
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faCircle}
        className="-ms-1 me-1 text-info"
        transform="shrink-10"
      />
    ),
    label: 'Forums'
  }
];

export const emails: Email[] = [
  {
    id: 1,
    user: 'Jessica Ball',
    avatar: team60,
    title: 'Query about purchased soccer socks',
    description:
      'Greetings. I have purchased some socks under the bundle offer you availed this week. According to the offer I was thrilled to get a 25% off of any product I bought. Regardless, I had to pay the exact full price for them...',
    time: '1 M',
    star: true,
    read: false
  },
  {
    id: 2,
    user: 'Danny Reid',
    avatar: team58,
    title: 'How to take the headache out of Order',
    description: `Hello! As I've mentioned before, we have this huge order deals to ship within this month. Also, the financial report is attached to this email. Hopefully, you'll find it useful for the company.`,
    time: '3 M',
    star: false,
    read: false,
    attachments: [
      {
        id: 1,
        icon: faFilePdf,
        iconClass: 'text-warning text-md',
        fileName: 'Financial_Reports.pdf'
      },
      {
        id: 2,
        icon: faFileZipper,
        iconClass: 'text-warning text-md',
        fileName: 'Frame20.zip'
      }
    ]
  },
  {
    id: 3,
    user: 'Harley Brown',
    avatar: team57,
    title: 'The Arnold Schwarzenegger of Order',
    description:
      'I’ve come across your posts and found some favorable deals on your page. I’ve added a load of products to the cart and I don’t know the payment options you avail. Also, can you enlighten me about any discount or...',
    time: '5 M',
    star: true,
    read: true
  },
  {
    id: 4,
    user: 'Hollie Stephens',
    avatar: team59,
    title: 'My order is not being taken',
    description:
      'Hello. I’m knocking to let you know that I am trying to place some orders on your site. But my orders are not being taken, maybe it’s technical issues. Can you help me with it as I really need the products I am trying to...',
    time: '8 M',
    star: false,
    read: false
  },
  {
    id: 5,
    user: 'Natasha West',
    avatar: teamAvatar,
    avatarPlaceholder: true,
    title: 'Shipment is missing',
    description:
      'Greetings! I’ve got an email saying I was to get the products yesterday. But got a call instead saying the shipment was misplaced. Can you put some light on it? Really need the products.',
    time: '20 M',
    star: true,
    read: true
  },
  {
    id: 6,
    user: 'Max Williamson',
    avatarName: 'R',
    title: 'How can I order something urgently?',
    description:
      'I saw your promotion on 25% sales. Do you avail emergency orders and urgent shipments? If you do, I need to place some orders. Please reply, thanks.',
    time: '30 M',
    star: true,
    read: true,
    attachments: [
      {
        id: 1,
        icon: faMusic,
        iconClass: 'text-primary text-md',
        fileName: 'syllabus'
      }
    ]
  },
  {
    id: 7,
    user: 'Ethan Hawkins',
    avatar: team30,
    title: 'How the delicacy of the products will be handled??',
    description:
      'Hello! I need to purchase some delicate products. Can you tell me how you handle the delicacy of the products to be shipped? I don’t want to get my hands on broken things, so. Thank you!  ',
    time: '32 M',
    star: false,
    read: true
  }
];
