import { JSX, useState } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '@hummingbirdui/react';
import DealDetailsActivity from './DealDetailsActivity';
import {
  dealActivities,
  dealNotes,
  meetingData,
  taskList
} from 'data/crm/dealDetailsData';
import DealDetailsNotes from './DealDetailsNotes';
import DealDetailsMeeting from './DealDetailsMeeting';
import DealDetailsTask from './DealDetailsTask';
import DealDetailsCall from './DealDetailsCall';
import DealDetailsAttachments from './DealDetailsAttachments';
import { attachments } from 'data/project-management/todoListData';
import LeadEmails from '../LeadEmails';
import {
  faChartLine,
  faClipboard,
  faEnvelope,
  faPaperclip,
  faPhone,
  faSquareCheck,
  faVideo
} from '@fortawesome/free-solid-svg-icons';

interface TabItem {
  name: string;
  icon: IconProp;
  content: JSX.Element;
}

const tabitems: TabItem[] = [
  {
    name: 'Activity',
    icon: faChartLine,
    content: <DealDetailsActivity activities={dealActivities} />
  },
  {
    name: 'Notes',
    icon: faClipboard,
    content: <DealDetailsNotes notes={dealNotes} />
  },
  {
    name: 'Meeting',
    icon: faVideo,
    content: <DealDetailsMeeting meetings={meetingData} />
  },
  {
    name: 'Task',
    icon: faSquareCheck,
    content: <DealDetailsTask tasks={taskList} />
  },
  {
    name: 'Call',
    icon: faPhone,
    content: <DealDetailsCall />
  },
  {
    name: 'Emails',
    icon: faEnvelope,
    content: <LeadEmails />
  },
  {
    name: 'Attachments',
    icon: faPaperclip,
    content: <DealDetailsAttachments attachments={attachments} />
  }
];

/** `#myTab` nav-underline tabs in apps/crm/deal-details.pug — plain markup so
 *  the `.deal-details .nav-link` skin in crm.css keeps applying. */
const DealDetailsTab = () => {
  const [activeTab, setActiveTab] = useState('Activity');
  return (
    <>
      <ul
        className="nav nav-underline text-md deal-details scrollbar flex-nowrap w-full pb-1 mb-10 overflow-y-hidden"
        role="tablist"
        id="myTab"
      >
        {tabitems.map(item => (
          <li
            key={item.name}
            className="nav-item text-nowrap me-2"
            role="presentation"
          >
            <a
              className={cn('nav-link', { active: activeTab === item.name })}
              href={`#tab-${item.name.toLowerCase()}`}
              role="tab"
              aria-controls={`tab-${item.name.toLowerCase()}`}
              aria-selected={activeTab === item.name}
              onClick={e => {
                e.preventDefault();
                setActiveTab(item.name);
              }}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="me-2 tab-icon-color"
              />
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="tab-content" id="myTabContent">
        {tabitems.map(item => (
          <div
            key={item.name}
            className={cn('tab-pane fade', {
              'active show': activeTab === item.name
            })}
            id={`tab-${item.name.toLowerCase()}`}
            role="tabpanel"
          >
            {item.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default DealDetailsTab;
