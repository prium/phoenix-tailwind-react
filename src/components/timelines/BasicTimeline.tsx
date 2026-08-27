import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Timeline from 'components/base/Timeline';
import { TimelineItem } from 'data/timelineData';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const BasicTimeline = ({ data }: { data: TimelineItem[] }) => {
  return (
    <Timeline variant="basic" className="mb-9">
      {data.map((item, index) => (
        <Timeline.Item key={item.id}>
          <Row className="g-3">
            <Col xs="auto">
              <Timeline.Separator className="relative">
                <Timeline.Dot className="icon-item-md border border-light bg-default">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`text-md text-${item.iconColor}`}
                  />
                </Timeline.Dot>
                {index !== data.length - 1 && (
                  <Timeline.Bar className="h-100 border-dashed" />
                )}
              </Timeline.Separator>
            </Col>
            <Col>
              <Timeline.Content>
                <div className="flex justify-content-between">
                  <div className="flex mb-2">
                    <h6
                      className="lh-sm mb-0 me-2 text-muted timeline-item-title"
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
                  <div className="text-soft text-md text-nowrap timeline-time">
                    <FontAwesomeIcon icon={faClock} className="me-1" />
                    {item.time}
                  </div>
                </div>
                <h6
                  className={classNames('text-sm font-normal', {
                    'mb-3': index !== data.length - 1
                  })}
                >
                  by{' '}
                  <Link to="#!" className="font-semibold">
                    {item.tasker}
                  </Link>
                </h6>
                <p
                  className={classNames(
                    'text-md text-muted w-sm-60 mb-0',
                    {
                      'mb-5': index !== data.length - 1
                    }
                  )}
                >
                  {item.content}
                </p>
              </Timeline.Content>
            </Col>
          </Row>
        </Timeline.Item>
      ))}
    </Timeline>
  );
};

export default BasicTimeline;
