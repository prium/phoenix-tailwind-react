import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dropdown, cn } from '@hummingbirdui/react';
import Avatar from 'components/base/Avatar';
import RevealDropdown from 'components/base/RevealDropdown';
import { Notification } from 'data/notifications';

export interface NotificationItemProps {
  notification: Notification;
  className?: string;
  type: 'dropdownItem' | 'pageItem';
}

/** `+NotificationItems` in phoenix-tailwind NotificationDropdown.pug */
const NotificationItem = ({
  notification,
  className,
  type
}: NotificationItemProps) => {
  return (
    <div
      className={cn(className, 'py-4 notification-card relative', {
        unread: !notification.read,
        read: notification.read,
        'px-6 lg:px-10': type === 'pageItem',
        'px-2 sm:px-4': type === 'dropdownItem'
      })}
    >
      <div className="flex items-center justify-between relative">
        <div className="flex">
          <Avatar
            src={notification.avatar}
            placeholder={!notification.avatar}
            size={type === 'pageItem' ? 'xl' : 'm'}
            status="online"
            className="me-4"
          />
          <div
            className={cn('flex-1', {
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

              <span className="ms-2 text-soft/75 font-bold text-sm">
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
          className="notification-dropdown"
          btnClassName="notification-dropdown-toggle"
          dropdownMenuClassName={cn(
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
