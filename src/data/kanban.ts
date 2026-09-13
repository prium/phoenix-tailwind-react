import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Member, members } from './users';
import {
  faArrowsUpToLine,
  faBoxArchive,
  faBug,
  faCheckDouble,
  faClone,
  faDownload,
  faFileExport,
  faPaperclip,
  faPlus,
  faRandom,
  faShareNodes,
  faSpinner,
  faSquarePlus,
  faTrashCan,
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';
import kanban1 from 'assets/img/kanban/1.jpg';
import glass from 'assets/img/kanban/glass.jpg';
import home from 'assets/img/kanban/home.jpg';
import wall from 'assets/img/kanban/wall.jpg';
import board2 from 'assets/img/kanban/board-2.png';
import board3 from 'assets/img/kanban/board-3.png';
import board4 from 'assets/img/kanban/board-4.png';
import board5 from 'assets/img/kanban/board-5.png';
import board6 from 'assets/img/kanban/board-6.png';
import board8 from 'assets/img/kanban/board-8.png';
import board9 from 'assets/img/kanban/board-9.png';

import team1 from 'assets/img/team/1.webp';
import team2 from 'assets/img/team/2.webp';
import team3 from 'assets/img/team/3.webp';
import team4 from 'assets/img/team/4.webp';
import team5 from 'assets/img/team/5.webp';
import team6 from 'assets/img/team/6.webp';
import team7 from 'assets/img/team/7.webp';
import team8 from 'assets/img/team/8.webp';
import team9 from 'assets/img/team/9.webp';
import team10 from 'assets/img/team/10.webp';
import team11 from 'assets/img/team/11.webp';
import team12 from 'assets/img/team/12.webp';
import team13 from 'assets/img/team/13.webp';
import team14 from 'assets/img/team/14.webp';
import team15 from 'assets/img/team/15.webp';
import team16 from 'assets/img/team/16.webp';
import team17 from 'assets/img/team/17.webp';
import team18 from 'assets/img/team/18.webp';
import team19 from 'assets/img/team/19.webp';
import team20 from 'assets/img/team/20.webp';
import team21 from 'assets/img/team/21.webp';
import team22 from 'assets/img/team/22.webp';
import team23 from 'assets/img/team/23.webp';
import team24 from 'assets/img/team/24.webp';
import team25 from 'assets/img/team/25.webp';
import team30 from 'assets/img/team/30.webp';
import team31 from 'assets/img/team/31.webp';
import team32 from 'assets/img/team/32.webp';
import team33 from 'assets/img/team/33.webp';
import team34 from 'assets/img/team/34.webp';
import team57 from 'assets/img/team/57.webp';
import team60 from 'assets/img/team/60.webp';
import team68 from 'assets/img/team/68.webp';
import team69 from 'assets/img/team/69.webp';
import avatarPlaceholder from 'assets/img/team/avatar-placeholder.webp';

import attachment1 from 'assets/img/kanban/a1.jpg';
import { FileAttachment } from 'components/common/AttachmentPreview';

/** avatar entry of a kanban card: an image or a "more" initial (gold `+Avatar`) */
export interface KanbanTaskUser {
  img?: string;
  more?: string;
  /** literal classes for the `.avatar-name` box, e.g. 'text-warning bg-warning-subtle' */
  contentClass?: string;
}

export interface KanbanTaskStatus {
  label: string;
  icon: IconProp;
  /** literal class for the status circle (gold `text-${color}`) */
  circleClass: string;
  /** literal class for the badge (gold `badge-phoenix-${color}`) */
  badgeClass: string;
}

export interface KanbanBoardTask {
  id: number;
  status: KanbanTaskStatus;
  title: string;
  desctiption?: string;
  priority: 'High' | 'Low' | 'Medium';
  coverImage?: string;
  /** gold `footerDate` — fixed 'Jan 25' text */
  footerDate?: string;
  /** gold `footerChecked` — fixed '5/34' text */
  footerChecked?: string;
  attachments?: number;
  users?: KanbanTaskUser[];
}

export interface KanbanBoard {
  id: number;
  title: string;
  category: string;
  coverImage?: string;
  /** literal background class when there is no cover image (gold `boardClass`) */
  bgClass?: string;
  totalTasks: number;
  comments: number;
  deadlines: number;
  users: string[];
}

export interface KanbanBoardItem {
  id: number;
  title: string;
  /** literal class for the column header underline (gold `border-${borderColor}`) */
  borderClass: string;
  /** literal classes for the task-details modal COLUMN underline */
  underlineClass: string;
  isCollapsed?: boolean;
  tasks: KanbanBoardTask[];
}

const statuses: Record<
  'feature' | 'bug' | 'issue' | 'undefined',
  KanbanTaskStatus
> = {
  feature: {
    label: 'Feature',
    icon: faCheckDouble,
    circleClass: 'text-primary',
    badgeClass: 'badge-phoenix-primary'
  },
  bug: {
    label: 'Bug',
    icon: faBug,
    circleClass: 'text-danger',
    badgeClass: 'badge-phoenix-danger'
  },
  issue: {
    label: 'Issue',
    icon: faTriangleExclamation,
    circleClass: 'text-warning',
    badgeClass: 'badge-phoenix-warning'
  },
  undefined: {
    label: 'Undefined',
    icon: faSpinner,
    circleClass: 'text-secondary',
    badgeClass: 'badge-phoenix-secondary'
  }
};

export const kanbanStatuses = statuses;

/* gold KanbanHeader.pug `kanbanUsers` */
export const kanbanHeaderUsers: Member[] = [
  {
    id: 101,
    name: 'Stanly Drinkwater',
    avatar: team30,
    username: 'tyrion222',
    connections: 224,
    mutual: 23
  },
  {
    id: 102,
    name: 'Emma Watson',
    avatar: team60,
    username: 'tyrion222',
    connections: 224,
    mutual: 23
  },
  {
    id: 103,
    name: 'Igor Borvibson',
    avatar: team25,
    username: 'tyrion222',
    connections: 224,
    mutual: 23
  },
  {
    id: 104,
    name: 'Luis Bunuel',
    avatar: team5,
    username: 'tyrion222',
    connections: 224,
    mutual: 23
  }
];

/* gold KanbanOffcanvas.pug — members are users.ts ids 1–5 (team 33/30/31/60/65) */
export const kanbanBoardMembers = {
  admin: {
    id: 100,
    name: 'Sasha Blaus',
    avatar: team14,
    username: 'potatogirl',
    connections: 224,
    mutual: 23
  } as Member,
  members: members.slice(0, 5),
  guests: [
    {
      id: 111,
      name: 'Tyrion Lannister',
      avatar: team2,
      username: 'tyrion222',
      connections: 224,
      mutual: 23
    },
    {
      id: 112,
      name: 'Milind Mikuja',
      avatar: team3,
      username: 'milind12',
      connections: 224,
      mutual: 23
    },
    {
      id: 113,
      name: 'Stanly Drinkwater',
      avatar: team4,
      username: 'drinkwater8',
      connections: 224,
      mutual: 23
    },
    {
      id: 114,
      name: 'Josef Stravinsky',
      avatar: team5,
      username: 'josef60',
      connections: 224,
      mutual: 23
    }
  ] as Member[]
};

/* gold apps/kanban/kanban.pug `kanbanItems` — titles/typos copied verbatim */
export const kanbanItems: KanbanBoardItem[] = [
  {
    id: 1,
    title: 'Unassaigned',
    borderClass: 'border-warning',
    underlineClass: 'after:bg-(--color-warning)',
    isCollapsed: true,
    tasks: [
      {
        id: 101,
        status: statuses.feature,
        title: 'Develop a new feature for the phoenix mobile app',
        priority: 'High'
      },
      {
        id: 102,
        status: statuses.bug,
        title:
          'Conduct user research to gather feedback on the latest product iteration',
        priority: 'Medium'
      },
      {
        id: 103,
        status: statuses.issue,
        title:
          'Review and approve marketing materials for the upcoming product launch',
        priority: 'Low'
      }
    ]
  },
  {
    id: 2,
    title: 'To do',
    borderClass: 'border-base',
    underlineClass: 'after:bg-(--color-secondary)',
    tasks: [
      {
        id: 201,
        status: statuses.bug,
        title:
          'Test and debug code for the e-commerce website checkout process',
        coverImage: kanban1,
        attachments: 15,
        users: [{ img: team30 }, { img: team57 }, { img: team25 }],
        priority: 'Medium'
      },
      {
        id: 202,
        status: statuses.issue,
        title: 'Write a blog post on industry trends and best practices',
        footerDate: 'Jan 25',
        users: [{ img: team30 }, { img: team57 }, { img: team25 }],
        priority: 'High'
      }
    ]
  },
  {
    id: 3,
    title: 'Doing',
    borderClass: 'border-primary',
    underlineClass: 'after:bg-(--color-primary)',
    tasks: [
      {
        id: 301,
        status: statuses.bug,
        title: 'Create wireframes for a new phoenix landing page design',
        footerDate: 'Jan 25',
        users: [
          { img: team57 },
          { more: 'R', contentClass: 'text-warning bg-warning-subtle' }
        ],
        priority: 'Medium'
      },
      {
        id: 302,
        status: statuses.undefined,
        title:
          'Set up and configure a new software tool for the marketing team',
        footerChecked: '5/34',
        users: [{ img: team25 }],
        priority: 'Low'
      },
      {
        id: 303,
        status: statuses.feature,
        title: 'Draft and send a press release to announce a new partnership',
        footerDate: 'Jan 25',
        attachments: 15,
        priority: 'Medium'
      },
      {
        id: 304,
        status: statuses.issue,
        title: 'Conduct a security audit of the phoenix web applications',
        footerDate: 'Jan 25',
        attachments: 15,
        coverImage: glass,
        priority: 'High'
      }
    ]
  },
  {
    id: 4,
    title: 'Review',
    borderClass: 'border-info',
    underlineClass: 'after:bg-(--color-info)',
    tasks: [
      {
        id: 401,
        status: statuses.issue,
        title: 'Design and develop a new logo for the phoenix',
        attachments: 15,
        users: [{ img: team57 }, { img: team25 }, { img: team30 }],
        priority: 'Medium'
      },
      {
        id: 402,
        status: statuses.issue,
        title:
          'Create a fresh visual identity for Phoenix with a new logo design',
        footerChecked: '5/34',
        users: [{ img: team25 }, { img: team57 }, { img: team30 }],
        priority: 'Low'
      },
      {
        id: 403,
        status: statuses.undefined,
        title:
          'Identify best software vendors for company-wide system through comprehensive research and evaluation',
        attachments: 15,
        priority: 'High'
      },
      {
        id: 404,
        status: statuses.feature,
        title: 'Write and edit copy for a new email marketing campaign',
        attachments: 15,
        coverImage: wall,
        priority: 'Medium'
      }
    ]
  },
  {
    id: 5,
    title: 'Release',
    borderClass: 'border-success',
    underlineClass: 'after:bg-(--color-success)',
    tasks: [
      {
        id: 501,
        status: statuses.feature,
        title: 'Improve Phoenix website usability through user testing',
        attachments: 15,
        users: [{ img: team57 }],
        priority: 'High'
      },
      {
        id: 502,
        status: statuses.bug,
        title: 'Develop and deliver a training program for new employees',
        attachments: 15,
        coverImage: home,
        users: [{ img: team57 }, { img: team25 }, { img: team30 }],
        priority: 'Low'
      },
      {
        id: 503,
        status: statuses.undefined,
        title:
          'Organize and lead a brainstorming session to generate new product ideas',
        attachments: 15,
        users: [{ img: team57 }, { img: team25 }],
        priority: 'Medium'
      }
    ]
  }
];

/* gold KanbanModal.pug — '21st Decemver' typo is the gold's */
export const kanbanAttachments: FileAttachment[] = [
  {
    name: 'Silly_sight_1.png',
    size: '123.34 KB',
    format: 'jpg',
    preview: attachment1,
    date: '21st Decemver, 12:56 PM'
  },
  {
    name: 'All_images.zip',
    size: '123.34 KB',
    format: 'zip',
    date: '21st December, 12:56 PM'
  }
];

export const kanbanActions = [
  {
    icon: faFileExport,
    label: 'Move'
  },
  {
    icon: faClone,
    label: 'Duplicate'
  },
  {
    icon: faShareNodes,
    label: 'Share'
  },
  {
    icon: faSquarePlus,
    label: 'Create template'
  },
  {
    icon: faArrowsUpToLine,
    label: 'Jump to top'
  },
  {
    icon: faBoxArchive,
    label: 'Move to Archive'
  },
  {
    icon: faTrashCan,
    label: 'Move to Trash'
  },
  {
    icon: faDownload,
    label: 'Print/Download'
  }
];

/* gold KanbanModal.pug activities — 'Aughst' typo is the gold's */
export const kanbanActivities = [
  {
    id: '1',
    task: '<span class="font-bold"> Alfen Loebe </span> Moved the task <a href="#!">"the standard chunk" </a>from <span class="font-bold">Doing</span> to <span class="font-bold">To Do</span>',
    time: '10:41 AM',
    date: 'Aughst 7,2022',
    icon: faRandom,
    iconColorClass: 'text-warning'
  },
  {
    id: '2',
    task: '<span class="font-bold"> Jessie Samson </span> Attached image3.png to the task <a href="#!">"the standard chunk" </a>',
    time: '10:41 AM',
    date: 'Aughst 7,2022',
    icon: faPaperclip,
    iconColorClass: 'text-info'
  },
  {
    id: '3',
    task: '<span class="font-bold"> Alfen Loebe </span> Moved the task <a href="#!">"the standard chunk" </a>from <span class="font-bold">Doing</span> to <span class="font-bold">To Do</span>',
    time: '10:41 AM',
    date: 'Aughst 7,2022',
    icon: faPlus,
    iconColorClass: 'text-info'
  },
  {
    id: '4',
    task: '<span class="font-bold"> Alfen Loebe </span> Moved the task <a href="#!">"the standard chunk" </a>from <span class="font-bold">Doing</span> to <span class="font-bold">To Do</span>',
    time: '10:41 AM',
    date: 'Aughst 7,2022',
    icon: faRandom,
    iconColorClass: 'text-primary'
  }
];

/* gold apps/kanban/boards.pug demo sets — images/order copied verbatim */
export const recentBoards: KanbanBoard[] = [
  {
    id: 1,
    title: 'Issue Tickets',
    category: 'Daily task',
    bgClass: 'bg-info-darker',
    totalTasks: 44,
    comments: 12,
    deadlines: 3,
    users: [team1, team2, team3, team4, avatarPlaceholder]
  },
  {
    id: 2,
    title: 'Falcon React',
    category: 'Production line',
    coverImage: board2,
    totalTasks: 11,
    comments: 29,
    deadlines: 9,
    users: [team5, team6, team7, team8, team9]
  },
  {
    id: 3,
    title: 'Rebuilding',
    category: 'Production line',
    coverImage: board3,
    totalTasks: 13,
    comments: 11,
    deadlines: 15,
    users: [team10, team11, team12, team13, avatarPlaceholder]
  },
  {
    id: 4,
    title: 'ThemePro Devs',
    category: 'Project Management',
    coverImage: board4,
    totalTasks: 103,
    comments: 2,
    deadlines: 20,
    users: [team14, team15, team16]
  }
];

export const yourBoards: KanbanBoard[] = [
  {
    id: 5,
    title: 'Post Tracking',
    category: 'Deals Tracking',
    coverImage: board5,
    totalTasks: 142,
    comments: 21,
    deadlines: 100,
    users: [team14, team19, team68, team69, avatarPlaceholder]
  },
  {
    id: 6,
    title: 'Automation Team',
    category: 'Remote team',
    coverImage: board6,
    totalTasks: 6,
    comments: 761,
    deadlines: 2,
    users: [team17, team18, team19, team20]
  },
  {
    id: 7,
    title: 'Phoenix Kanban',
    category: 'Project Management',
    bgClass: 'bg-muted',
    totalTasks: 43,
    comments: 22,
    deadlines: 17,
    users: [team21, team19, team22, team23, avatarPlaceholder]
  },
  {
    id: 8,
    title: 'Reconciling Backlogs',
    category: 'Meeting Agenda',
    coverImage: board8,
    totalTasks: 23,
    comments: 111,
    deadlines: 23,
    users: [team24, team19, avatarPlaceholder, team68, team69]
  }
];

export const privateBoards: KanbanBoard[] = [
  {
    id: 9,
    title: 'Inventory update',
    category: 'Shipping Process',
    coverImage: board9,
    totalTasks: 68,
    comments: 31,
    deadlines: 14,
    users: [team30, team31, team32, team33, team34]
  }
];
