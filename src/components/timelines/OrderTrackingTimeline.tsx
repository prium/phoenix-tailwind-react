import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Timeline from 'components/base/Timeline';
import { TimelineData } from 'data/timelineData';

const OrderTrackingTimeline = ({ data }: { data: TimelineData[] }) => {
  return (
    <Timeline variant="vertical">
      {data.map((item, index) => (
        <Timeline.Item key={item.content.title}>
          <div
            className={classNames('row md:g-4 items-center', {
              'mb-28 lg:mb-18': index !== data.length - 1
            })}
          >
            <div className="col-12 md:col-auto flex">
              <Timeline.OppositeContent>
                <p className="text-sm font-semibold text-subtle mb-0 text-end">
                  {item.oppositeContent.date}
                  <br className="hidden md:block" />{' '}
                  {item.oppositeContent.time}
                </p>
              </Timeline.OppositeContent>
              <Timeline.Separator className="relative">
                <Timeline.Dot className={item.separator.dotClass}>
                  <FontAwesomeIcon
                    icon={item.separator.icon}
                    className="text-white text-sm"
                  />
                </Timeline.Dot>
                {item.separator.barClass && (
                  <Timeline.Bar
                    style={{ height: 100 }}
                    className={item.separator.barClass}
                  />
                )}
              </Timeline.Separator>
            </div>
            <div className="col">
              <Timeline.Content>
                <h4>{item.content.title}</h4>
                <p className="text-md text-muted mb-0">
                  {item.content.subtitle}
                </p>
              </Timeline.Content>
            </div>
          </div>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default OrderTrackingTimeline;
