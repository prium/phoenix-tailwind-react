import { Card, Dropdown, cn } from '@hummingbirdui/react';
import { Link } from 'react-router';
import Button from 'components/base/Button';
import { notifications as notificationData } from 'data/notifications';
import NotificationItem from 'components/common/NotificationItem';
import { useMemo } from 'react';

/** `+NotificationDropdown` in phoenix-tailwind NotificationDropdown.pug */
const NotificationDropdownMenu = ({ className }: { className?: string }) => {
  const notifications = useMemo(() => notificationData.slice(0, 6), []);
  return (
    <Dropdown.Content
      align="end"
      sideOffset={8}
      className={cn(
        className,
        'navbar-dropdown-caret py-0 notification-dropdown-menu shadow border'
      )}
    >
      <Card className="relative border-0">
        <Card.Header className="p-2">
          <div className="flex justify-between">
            <h5 className="text-emphasis mb-0">Notifications</h5>
            <Button variant="link" className="p-0 text-md font-normal">
              Mark all as read
            </Button>
          </div>
        </Card.Header>
        <Card.Body className="p-0">
          <div className="scrollbar-overlay h-108">
            {notifications.map((notification, index) => (
              <NotificationItem
                notification={notification}
                type="dropdownItem"
                className={cn({
                  'border-b border-light': index !== notifications.length - 1
                })}
                key={notification.id}
              />
            ))}
          </div>
        </Card.Body>
        <Card.Footer className="p-0 border-t border-light border-0">
          <div className="my-2 text-center font-bold text-sm text-subtle/85">
            <Link to="/pages/notifications" className="font-black">
              Notification history
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </Dropdown.Content>
  );
};

export default NotificationDropdownMenu;
