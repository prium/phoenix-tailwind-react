import PageBreadcrumb from 'components/common/PageBreadcrumb';
import NotificationItem from 'components/common/NotificationItem';
import {
  notificationsBreadcrumbItems,
  notificationsPageToday,
  notificationsPageYesterday
} from 'data/notifications';

const Notification = () => {
  return (
    <div>
      <PageBreadcrumb items={notificationsBreadcrumbItems} />
      <h2 className="mb-8">Notifications</h2>
      <h5 className="text-emphasis mb-4">Today</h5>
      <div className="-mx-6 lg:-mx-10 mb-8 border-b">
        {notificationsPageToday.map(notification => (
          <NotificationItem
            notification={notification}
            type="pageItem"
            key={notification.id}
          />
        ))}
      </div>
      <h5 className="text-semibold text-emphasis mb-4">Yesterday</h5>
      <div className="-mx-6 lg:-mx-10 mb-16 border-b">
        {notificationsPageYesterday.map(notification => (
          <NotificationItem
            notification={notification}
            type="pageItem"
            key={notification.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Notification;
