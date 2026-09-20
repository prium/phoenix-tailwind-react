import verticalSidenav from 'assets/img/sections/vertical-sidenav.webp';
import sidenavDark from 'assets/img/sections/sidenav-dark.webp';
import topnavSlimCombo from 'assets/img/sections/topnav-slim-combo.webp';
import topnavOnly from 'assets/img/sections/topnav-only.webp';
import horizontalSlim from 'assets/img/sections/horizontal-slim.webp';
import comboNav from 'assets/img/sections/combo-nav.webp';
import demo9Thumb from 'assets/img/sections/demo-9-thumb.webp';
import darkMode from 'assets/img/sections/demo.webp';
import demo1 from 'assets/img/sections/demo-1.webp';
import demo4 from 'assets/img/sections/demo-4.webp';
import demo5 from 'assets/img/sections/demo-5.webp';
import demo6 from 'assets/img/sections/demo-6.webp';
import demo7 from 'assets/img/sections/demo-7.webp';
import demo8 from 'assets/img/sections/demo-8.webp';
import demo9 from 'assets/img/sections/demo-9.webp';
import section64 from 'assets/img/sections/64.webp';
import section65 from 'assets/img/sections/65.webp';
import section66 from 'assets/img/sections/66.webp';
import section21 from 'assets/img/sections/21.webp';
import section22 from 'assets/img/sections/22.webp';
import section23 from 'assets/img/sections/23.webp';
import section24 from 'assets/img/sections/24.webp';
import section25 from 'assets/img/sections/25.webp';
import section26 from 'assets/img/sections/26.webp';
import section28 from 'assets/img/sections/gantt-chart.webp';
import section29 from 'assets/img/sections/file-manager.webp';
import kanban from 'assets/img/sections/kanban.webp';
import { BadgeBg } from 'components/base/Badge';

interface ImportantApplications {
  title: string;
  link: string;
  thumb: string;
  details: string;
  btnLabel: string;
  disable?: boolean;
  badge?: {
    label: string;
    bg: BadgeBg;
  };
}

export const demos = [
  {
    sideThumb: verticalSidenav,
    mainThumb: demo1,
    variantName: 'Vertical Sidenav (Default)',
    link: '/pages/demo/vertical-sidenav'
  },
  {
    sideThumb: darkMode,
    mainThumb: darkMode,
    variantName: 'Dark Mode',
    link: '/pages/demo/dark-mode'
  },
  {
    sideThumb: sidenavDark,
    mainThumb: demo5,
    variantName: 'Darknav',
    link: '/pages/demo/darknav'
  },
  {
    sideThumb: topnavSlimCombo,
    mainThumb: demo6,
    variantName: 'Topnav Slim',
    link: '/pages/demo/topnav-slim'
  },
  {
    sideThumb: topnavOnly,
    mainThumb: demo4,
    variantName: 'Navbar Horizontal',
    link: '/pages/demo/navbar-top'
  },
  {
    sideThumb: horizontalSlim,
    mainThumb: demo7,
    variantName: 'Horizontal Slim',
    link: '/pages/demo/navbar-top-slim'
  },
  {
    sideThumb: comboNav,
    mainThumb: demo8,
    variantName: 'Combo Nav',
    link: '/pages/demo/combo-nav'
  },
  {
    sideThumb: demo9Thumb,
    mainThumb: demo9,
    variantName: 'Dual Nav',
    link: '/pages/demo/dual-nav'
  }
];

export const importantApplications: ImportantApplications[] = [
  {
    title: 'Gantt Chart',
    link: '/apps/gantt-chart',
    thumb: section28,
    details: `Our Gantt chart app visualizes tasks, schedules, and dependencies in a timeline format. It’s great for planning, tracking progress, and managing resources efficiently.`,
    btnLabel: 'View gantt chart',
    badge: {
      label: 'New',
      bg: 'warning'
    }
  },
  {
    title: 'File Manager',
    link: '/apps/file-manager/grid-view',
    thumb: section29,
    details: `Our File Manager application allows you to manage and organize files flawlessly with grid and list views. It ensures a smooth and effortless user experience.`,
    btnLabel: 'View file manager',
    badge: {
      label: 'New',
      bg: 'warning'
    }
  },
  {
    title: 'Email',
    link: '/apps/email/inbox',
    thumb: section64,
    details:
      'You’ll get a pre-built email app with this template so that your customer-client communication remains smooth and steady. Enjoy thorough communication with us!',
    btnLabel: 'View email'
  },
  {
    title: 'Chat',
    link: '/apps/chat',
    thumb: section66,
    details:
      'Our pre-built web app will help you have steady communication with your customers and grow your business rigorously. Hopefully, you’ll enjoy using this web app in Phoenix!',
    btnLabel: 'View chat'
  },
  {
    title: 'Calender',
    link: '/apps/calendar',
    thumb: section65,
    details:
      'Our calendar app will help you painlessly track all your trades. You can add, edit and revise the previous reminders and stay updated according to your schedule.',
    btnLabel: 'View calender'
  },
  {
    title: 'Kanban',
    link: '/apps/kanban/kanban',
    thumb: kanban,
    details:
      'Our pre-built web app will help you have steady communication with your customers and grow your business rigorously. Hopefully, you’ll enjoy using this web app in Phoenix!',
    btnLabel: 'View kanban'
  }
];

export const necessaryPages = [
  {
    thumb: section21,
    pageName: 'Profile',
    pageLink: '/apps/social/profile'
  },
  {
    thumb: section22,
    pageName: 'Pricing',
    pageLink: '/pages/pricing/pricing-column'
  },
  {
    thumb: section23,
    pageName: 'FAQ',
    pageLink: '/pages/faq/faq-accordion'
  },
  {
    thumb: section24,
    pageName: 'Notifications',
    pageLink: '/pages/notifications'
  },
  {
    thumb: section25,
    pageName: 'Authentication',
    pageLink: '/pages/authentication/split/sign-in'
  },
  {
    thumb: section26,
    pageName: 'Event',
    pageLink: '/apps/events/event-detail'
  }
];

export const showcaseFaqs = [
  {
    id: 1,
    question: `Is this template built on Vite or Create React App scaffolding?`,
    answer: 'This template is built using Vite.'
  },
  {
    id: 2,
    question: ` Is this template built using TypeScript?`,
    answer: 'Yes, this template is built using TypeScript.'
  },
  {
    id: 3,
    question: `Is there any Trial version of ${
      import.meta.env.VITE_TITLE
    } React?`,
    answer: `We are sorry to inform you that there is no free or trial version of  ${
      import.meta.env.VITE_TITLE
    } React, but you would get a full refund within 10 days if the template does not match your requirement.`
  },
  {
    id: 4,
    question: `Which React component library are you using?`,
    answer: `We are using Hummingbird React (@hummingbirdui/react) with Tailwind CSS v4 for ${
      import.meta.env.VITE_TITLE
    } React`
  },
  {
    id: 5,
    question: 'Where will I get the Figma Files?',
    answer: `You will find the Figma link in the README.md file on your downloaded copy of  ${
      import.meta.env.VITE_TITLE
    } React.`
  }
];
