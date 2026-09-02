import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, cn } from '@hummingbirdui/react';
import Timeline from 'components/base/Timeline';
import { TimelineItem } from 'data/timelineData';
import { Link } from 'react-router';

/**
 * `+Timeline` in phoenix-tailwind pages/timeline.pug. The bar column and the
 * content column are written out here rather than through
 * `Timeline.Separator`/`Timeline.Content`, whose vertical-timeline margins
 * (`me-4 md:me-0`, `timeline-item-content ps-10 md:ps-4`) this basic variant
 * does not have.
 */
const BasicTimeline = ({ data }: { data: TimelineItem[] }) => {
  return (
    <Timeline variant="basic" className="mb-16">
      {data.map((item, index) => {
        const isLast = index === data.length - 1;
        return (
          <Timeline.Item key={item.id}>
            <Row className="g-4">
              <Col xs="auto">
                <div className="timeline-item-bar relative">
                  <div className="icon-item icon-item-md rounded-7 border border-subtle">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={cn(item.iconColor, 'text-md')}
                    />
                  </div>
                  {!isLast && <Timeline.Bar className="border-dashed" />}
                </div>
              </Col>
              <Col>
                <div className="flex justify-between">
                  <div className="flex mb-2">
                    <h6
                      className="leading-sm mb-0 me-2 text-muted timeline-item-title"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                    {item.file && (
                      <h6 className="mb-0 text-md">
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          className="me-1 text-subtle"
                        />
                        <Link to="#!">{item.file}</Link>
                      </h6>
                    )}
                  </div>
                  <p className="text-soft text-md mb-0 text-nowrap timeline-time">
                    <FontAwesomeIcon icon={faClock} className="me-1" />
                    {item.time}
                  </p>
                </div>
                <h6 className={cn('text-sm font-normal', { 'mb-4': !isLast })}>
                  by{' '}
                  <Link to="#!" className="font-semibold">
                    {item.tasker}
                  </Link>
                </h6>
                <p
                  className={cn(
                    isLast ? 'mb-0' : 'mb-8',
                    'text-md text-muted sm:w-6/10'
                  )}
                >
                  {item.content}
                </p>
              </Col>
            </Row>
          </Timeline.Item>
        );
      })}
    </Timeline>
  );
};

export default BasicTimeline;
