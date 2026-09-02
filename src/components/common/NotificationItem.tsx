import { faClock, faEllipsis } from '@fortawesome/free-solid-svg-icons';
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
  /**
   * The notifications page markup (`pages/notifications.pug` +NotificationItem)
   * differs from the navbar dropdown one: bigger avatar, no status dot, a plain
   * `.dropdown` toggle and its own border/spacing — so it is rendered verbatim
   * here instead of being approximated with the dropdown branch below.
   */
  if (type === 'pageItem') {
    return (
      <div
        className={cn(
          className,
          notification.read ? 'read' : 'unread',
          'flex items-center justify-between py-4 lg:px-10 px-6 notification-card border-t'
        )}
      >
        <div className="flex">
          {notification.avatar ? (
            <Avatar
              src={notification.avatar}
              placeholder={notification.avatarPlaceholder}
              size="xl"
              className="me-4"
            />
          ) : (
            <Avatar size="xl" variant="name" className="me-4">
              {notification.name.charAt(0).toUpperCase()}
            </Avatar>
          )}
          <div className="me-4 flex-1 mt-2">
            <h4 className="text-md text-emphasis">{notification.name}</h4>
            <p className="text-md text-highlight">
              <span className="me-1">{notification.interactionIcon}</span>
              {notification.interaction}
              <span className="font-bold">{notification.detail}</span>
              <span className="ms-2 text-subtle/85 text-sm font-bold">
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
        <div className="dropdown">
          <Dropdown>
            <Dropdown.Trigger asChild>
              <button
                type="button"
                className="btn text-sm btn-sm transition-none notification-dropdown-toggle"
              >
                <FontAwesomeIcon
                  icon={faEllipsis}
                  className="text-sm text-default"
                />
              </button>
            </Dropdown.Trigger>
            <Dropdown.Content align="end" className="py-2">
              <Dropdown.Item asChild>
                <a href="#!">Mark as unread</a>
              </Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(className, 'py-4 notification-card relative px-2 sm:px-4', {
        unread: !notification.read,
        read: notification.read
      })}
    >
      <div className="flex items-center justify-between relative">
        <div className="flex">
          <Avatar
            src={notification.avatar}
            placeholder={!notification.avatar}
            size="m"
            status="online"
            className="me-4"
          />
          <div className="flex-1 sm:me-4">
            <h4 className="text-md text-emphasis">{notification.name}</h4>
            <p className="text-md text-highlight mb-2 sm:mb-4 font-normal">
              <span className="me-1 font-bold text-sm">
                {notification.interactionIcon}
              </span>
              <span>{notification.interaction}</span>
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
          dropdownMenuClassName={cn('mt-2', notification.notificationPosition)}
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
