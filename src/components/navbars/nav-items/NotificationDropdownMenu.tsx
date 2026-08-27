import { Card, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router';
import Scrollbar from 'components/base/Scrollbar';
import Button from 'components/base/Button';
import { notifications as notificationData } from 'data/notifications';
import NotificationItem from 'components/common/NotificationItem';
import classNames from 'classnames';
import { useMemo } from 'react';

const NotificationDropdownMenu = ({ className }: { className?: string }) => {
  const notifications = useMemo(() => {
    return notificationData.slice(0, 6);
  }, [notificationData]);
  return (
    <Dropdown.Menu
      align="end"
      className={classNames(
        className,
        'navbar-dropdown-caret py-0 notification-dropdown-menu shadow border'
      )}
    >
      <Card className="relative border-0">
        <Card.Header className="p-2">
          <div className="flex justify-between items-center">
            <h5 className="text-emphasis mb-0">Notifications</h5>
            <Button variant="link" className="p-0 text-md font-normal">
              Mark all as read
            </Button>
          </div>
        </Card.Header>
        <Card.Body className="p-0" style={{ height: '27rem' }}>
          <Scrollbar style={{maxHeight: '27rem'}}>
            {notifications.map((notification, index) => (
              <NotificationItem
                notification={notification}
                type="dropdownItem"
                className={classNames({
                  'border-b border-light':
                    index !== notifications.length - 1
                })}
                key={notification.id}
              />
            ))}
          </Scrollbar>
        </Card.Body>
        <Card.Footer className="p-0 border-t">
          <div className="my-2 text-center font-bold text-sm text-subtle text-opactity-85">
            <Link to="/pages/notifications" className="font-black">
              Notification history
            </Link>
          </div>
        </Card.Footer>
      </Card>
    </Dropdown.Menu>
  );
};

export default NotificationDropdownMenu;
