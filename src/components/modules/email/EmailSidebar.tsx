import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UilTimes } from '@iconscout/react-unicons';
import { cn } from '@hummingbirdui/react';
import Button from 'components/base/Button';
import Unicon from 'components/base/Unicon';
import {
  SidebarItem,
  filteredItems,
  labelItems,
  mailboxItems
} from 'data/email';
import { Link } from 'react-router';

/**
 * Gold `mixin EmailSidebar` (../phoenix-tailwind/src/pug/mixins/email/Common.pug).
 * The `filtered` group keeps the gold's `border-subtletext-start` typo
 * (missing space between `border-subtle` and `text-start`).
 */
const EmailSidebarItem = ({
  item,
  filtered
}: {
  item: SidebarItem;
  filtered?: boolean;
}) => {
  return (
    <li className="nav-item">
      <Link
        className={cn(
          filtered
            ? 'nav-link py-2 ps-0 pe-4 border-e border-b border-subtletext-start outline-none'
            : 'nav-link py-2 ps-0 pe-4 border-e border-b border-subtle text-start outline-none',
          { active: item.active }
        )}
        aria-current="page"
        to={item.link ? item.link : '#!'}
      >
        <div className="flex items-center">
          {item.icon}
          <span className="flex-1">{item.label}</span>
          {item.count && <span className="nav-item-count">{item.count}</span>}
        </div>
      </Link>
    </li>
  );
};

const EmailSidebar = ({ hideSidebar }: { hideSidebar?: () => void }) => {
  return (
    <div className="email-content scrollbar-overlay">
      <div className="flex justify-between items-center">
        <p className="uppercase text-sm text-subtle/85 mb-2 font-bold">
          mailbox
        </p>
        <Button className="lg:hidden p-0 mb-2" onClick={() => hideSidebar?.()}>
          <Unicon icon={UilTimes} lineBox fill="currentColor" size={16} />
        </Button>
      </div>

      <ul className="nav flex-col border-t border-subtle text-md vertical-nav mb-6">
        {mailboxItems.map(item => (
          <EmailSidebarItem item={item} key={item.label} />
        ))}
      </ul>

      <div className="flex justify-between">
        <p className="uppercase text-sm text-subtle/85 mb-2 font-bold">
          Filtered
        </p>
        <a href="#!" className="text-sm font-bold">
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Add Folder
        </a>
      </div>
      <ul className="nav flex-col border-t border-subtle text-md vertical-nav mb-6">
        {filteredItems.map(item => (
          <EmailSidebarItem item={item} filtered key={item.label} />
        ))}
      </ul>

      <div className="flex justify-between">
        <p className="uppercase text-sm text-subtle/85 mb-2 font-bold">
          Labels
        </p>
        <a href="#!" className="text-sm font-bold">
          <FontAwesomeIcon icon={faPlus} className="me-2" />
          Add Label
        </a>
      </div>
      <ul className="nav flex-col border-t border-subtle text-md vertical-nav">
        {labelItems.map(item => (
          <EmailSidebarItem item={item} key={item.label} />
        ))}
      </ul>
    </div>
  );
};

export default EmailSidebar;
