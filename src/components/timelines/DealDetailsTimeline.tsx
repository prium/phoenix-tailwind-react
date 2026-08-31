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
          className={classNames('border-b border-subtle py-10', {
            'pb-0 border-b-0': index === activities.length - 1
          })}
        >
          <div className="flex">
            <div
              className={`flex bg-${activity.variant}-subtle rounded-full flex-center me-4`}
              style={{ width: '25px', height: '25px' }}
            >
              <FontAwesomeIcon
                icon={activity.icon}
                className={`text-${activity.variant}-dark text-md`}
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between flex-col xl:flex-row mb-2 sm:mb-0">
                <div className="flex-1 me-2">
                  <h5 className="text-highlight leading-sm">
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
