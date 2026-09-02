import PageBreadcrumb from 'components/common/PageBreadcrumb';
import { notificationsBreadcrumbItems } from 'data/notifications';
import React from 'react';
import NotificationItem from 'components/common/NotificationItem';
import { notifications } from 'data/notifications';
import classNames from 'classnames';

const Notification = () => {
  return (
    <div>
      <PageBreadcrumb items={notificationsBreadcrumbItems} />
      <h2 className="mb-8">Notifications</h2>
      <h5 className="text-emphasis mb-4 ">Today</h5>
      <div className="-mx-6 lg:-mx-10 mb-8 border-t">
        {notifications.slice(0, 3).map((notification, index) => (
          <NotificationItem
            notification={notification}
            type="pageItem"
            className={classNames({
              'border-b': index !== notifications.length - 1
            })}
            key={notification.id}
          />
        ))}
      </div>
      <h5 className="text-emphasis mb-4 ">Yesterday</h5>
      <div className="-mx-6 lg:-mx-10 mb-16 border-t">
        {notifications.slice(3, 7).map((notification, index) => (
          <NotificationItem
            notification={notification}
            type="pageItem"
            className={classNames({
              'border-b': index !== notifications.length - 1
            })}
            key={notification.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Notification;
