import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Activity } from 'data/crm/dealDetailsData';
import { Link } from 'react-router';

const DealDetailsTimeline = ({ activities }: { activities: Activity[] }) => {
  return (
    <>
      {activities.map((activity, index) => (
        <div
          key={activity.id}
          className={classNames('border-bottom border-light py-4', {
            'pb-0 border-bottom-0': index === activities.length - 1
          })}
        >
          <div className="flex">
            <div
              className={`flex bg-${activity.variant}-subtle rounded-circle flex-center me-3`}
              style={{ width: '25px', height: '25px' }}
            >
              <FontAwesomeIcon
                icon={activity.icon}
                className={`text-${activity.variant}-dark text-md`}
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-content-between flex-column flex-xl-row mb-2 mb-sm-0">
                <div className="flex-1 me-2">
                  <h5 className="text-highlight lh-sm">
                    {activity.title}
                  </h5>
                  <p className="text-md mb-0">
                    by <Link to="#!">{activity.name}</Link>
                  </p>
                </div>
                <div className="text-md">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="text-primary me-2"
                  />
                  <span className="font-semibold">{activity.date}</span>
                </div>
              </div>
              {activity.description && (
                <p className="text-md mb-0">{activity.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DealDetailsTimeline;
