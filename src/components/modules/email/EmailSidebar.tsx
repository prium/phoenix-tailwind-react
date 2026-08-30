import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UilTimes } from '@iconscout/react-unicons';
import classNames from 'classnames';
import Button from 'components/base/Button';
import {
  SidebarItem,
  filteredItems,
  labelItems,
  mailboxItems
} from 'data/email';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router';

const EmailSidebarItem = ({ item }: { item: SidebarItem }) => {
  return (
    <Nav.Item>
      <Nav.Link
        as={Link}
        className={classNames(
          'py-2 ps-0 pe-3 border-end border-bottom border-subtle text-start outline-none',
          {
            active: item.active
          }
        )}
        to={item.link ? item.link : '#!'}
      >
        <div className="flex gap-2 align-items-center">
          {item.icon}
          <span className="flex-1">{item.label}</span>
          {item.count && <span className="nav-item-count">{item.count}</span>}
        </div>
      </Nav.Link>
    </Nav.Item>
  );
};

const EmailSidebar = ({ hideSidebar }: { hideSidebar?: () => void }) => {
  return (
    <div>
      <div className="email-content scrollbar">
        <div className="flex flex-between-center mb-2">
          <p className="text-uppercase text-sm text-subtle text-opacity-85 mb-0 font-bold">
            Mailbox
          </p>
          {hideSidebar && (
            <Button
              className="d-lg-none p-0 mb-1"
              onClick={() => hideSidebar()}
            >
              <UilTimes fill='currentColor' size={16} />
            </Button>
          )}
        </div>

        <Nav className="flex-column border-top border-subtle text-md vertical-nav mb-4">
          {mailboxItems.map(item => (
            <EmailSidebarItem item={item} key={item.label} />
          ))}
        </Nav>

        <div className="flex flex-between-center mb-2">
          <p className="text-uppercase text-sm text-subtle text-opacity-85 mb-0 font-bold">
            Filtered
          </p>
          <Button
            variant="link"
            className="text-sm font-bold p-0"
            startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
          >
            Add Folder
          </Button>
        </div>

        <Nav className="flex-column border-top border-subtle text-md vertical-nav mb-4">
          {filteredItems.map(item => (
            <EmailSidebarItem item={item} key={item.label} />
          ))}
        </Nav>

        <div className="flex flex-between-center mb-2">
          <p className="text-uppercase text-sm text-subtle text-opacity-85 mb-0 font-bold">
            Labels
          </p>
          <Button
            variant="link"
            className="text-sm font-bold p-0"
            startIcon={<FontAwesomeIcon icon={faPlus} className="me-2" />}
          >
            Add Label
          </Button>
        </div>

        <Nav className="flex-column border-top border-subtle text-md vertical-nav">
          {labelItems.map(item => (
            <EmailSidebarItem item={item} key={item.label} />
          ))}
        </Nav>
      </div>
    </div>
  );
};

export default EmailSidebar;
