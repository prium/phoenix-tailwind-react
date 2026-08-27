import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Avatar from 'components/base/Avatar';
import RevealDropdown from 'components/base/RevealDropdown';
import { Notification } from 'data/notifications';
import { Dropdown } from 'react-bootstrap';

export interface NotificationItemProps {
  notification: Notification;
  className?: string;
  type: 'dropdownItem' | 'pageItem';
}

const NotificationItem = ({
  notification,
  className,
  type
}: NotificationItemProps) => {
  return (
    <div
      className={classNames(
        className,
        'py-6 notification-card relative',
        {
          unread: !notification.read,
          'px-10 lg:px-10': type === 'pageItem',
          'px-2 sm:px-4': type === 'dropdownItem'
        }
      )}
    >
      <div className="flex items-center justify-between relative">
        <div className="flex">
          <Avatar
            src={notification.avatar}
            placeholder={!notification.avatar}
            size={type === 'pageItem' ? 'xl' : 'm'}
            className="me-4 status-online"
          />
          <div
            className={classNames('flex-1', {
              'sm:me-4': type === 'dropdownItem',
              'mt-2 me-2': type === 'pageItem'
            })}
          >
            <h4 className="text-md text-emphasis">{notification.name}</h4>
            <p className="text-md text-highlight mb-2 sm:mb-4 font-normal">
              <span className="me-1 font-bold text-sm">
                {notification.interactionIcon}
              </span>
              <span>{notification.interaction}</span>
              {type === 'pageItem' && (
                <span className="font-bold">{notification.detail}</span>
              )}

              <span className="ms-2 text-soft text-opactity-75 font-bold text-sm">
                {notification.ago}
              </span>
            </p>
            <p className="text-muted text-md mb-0">
              <FontAwesomeIcon icon={faClock} className="me-1" />
              <span className="font-bold">{notification.time}</span>
              {notification.date}
            </p>
          </div>
        </div>
        <RevealDropdown
          btnClassName="notification-dropdown-toggle"
          dropdownMenuClassName={classNames(
            'mt-2',
            notification.notificationPosition
          )}
        >
          <Dropdown.Item>
            Mark as {notification.read ? 'unread' : 'read'}
          </Dropdown.Item>
        </RevealDropdown>
      </div>
    </div>
  );
};

export default NotificationItem;
