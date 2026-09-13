import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Activity } from 'data/crm/dealDetailsData';

/** `+Activity(data, isLast)` in mixins/crm/DealDetails.pug */
const DealDetailsTimeline = ({ activities }: { activities: Activity[] }) => {
  return (
    <>
      {activities.map((activity, index) => (
        <div
          key={activity.id}
          className={
            index === activities.length - 1
              ? 'pt-6'
              : 'border-b border-subtle py-6'
          }
        >
          <div className="flex">
            <div
              className={`flex rounded-full flex-center me-4 size-6.25 ${activity.iconBg}`}
            >
              <FontAwesomeIcon
                icon={activity.icon}
                className={`${activity.iconColor} text-md`}
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between flex-col xl:flex-row mb-2 sm:mb-0">
                <div className="flex-1 me-2">
                  <h5 className="text-highlight leading-sm">
                    {activity.title}
                  </h5>
                  <p className="text-md mb-0">
                    by
                    <a href="#!" className="ms-1">
                      {activity.name}
                    </a>
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
