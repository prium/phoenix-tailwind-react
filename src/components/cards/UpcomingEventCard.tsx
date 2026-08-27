import { useMemo, useState } from 'react';
import Badge from 'components/base/Badge';
import { UpcomingEventsItem } from 'data/stock/stockDetails';
import { Card, Col, Row } from 'react-bootstrap';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import FeatherIcon from 'feather-icons-react';
import Avatar from 'components/base/Avatar';
import { Link } from 'react-router';
import { numberFormat } from 'helpers/utils';
import Button from 'components/base/Button';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import EventOffcanvas from 'components/modules/stock/stock-details/tab/EventOffcanvas';

dayjs.extend(customParseFormat);

const UpcomingEventCard = ({
  upcomingEventItem
}: {
  upcomingEventItem: UpcomingEventsItem;
}) => {
  const [open, setOpen] = useState(false);
  const startDate = useMemo(() => {
    return dayjs(upcomingEventItem.scheduled.startDate, 'DD/MM/YYYY');
  }, [upcomingEventItem]);
  const endDate = useMemo(() => {
    return (
      upcomingEventItem.scheduled.endDate &&
      dayjs(upcomingEventItem.scheduled.endDate, 'DD/MM/YYYY')
    );
  }, [upcomingEventItem]);

  return (
    <>
      <Card className="mb-6">
        <Card.Body>
          <Row className="g-0">
            <Col xs={12} sm={3} className="sm:me-6 custom-calendar-container">
              <div className="relative custom-calender border rounded-md flex flex-col flex-center mb-6 sm:mb-0 px-0">
                <h5 className="font-black leading-sm text-subtle">
                  {startDate.format('D')}{' '}
                  {endDate && `- ${endDate.format('D')}`}
                </h5>
                <p className="mb-0 text-sm text-subtle font-semibold">
                  {startDate.format('MMM')}, {startDate.format('YYYY')}
                </p>
              </div>
            </Col>
            <Col xs={12} sm={9} className="flex-1">
              <Row className="g-6">
                <Col xs={12} xxl={9}>
                  <div className="2xl:flex items-center gap-2 mb-2">
                    <h5
                      className="mb-2 2xl:mb-0 cursor-pointer"
                      onClick={() => setOpen(true)}
                    >
                      {upcomingEventItem.title}
                    </h5>
                    <Badge
                      variant="phoenix"
                      bg={
                        upcomingEventItem.status === 'interested'
                          ? 'info'
                          : 'warning'
                      }
                      className="text-sm"
                    >
                      {upcomingEventItem.status}
                    </Badge>
                  </div>
                  <div className="sm:flex mb-4 items-center">
                    <h6 className="text-subtle font-semibold mb-2 sm:mb-0 sm:border-e sm:pe-4 sm:me-4 whitespace-nowrap">
                      <FeatherIcon
                        icon="clock"
                        className="me-2"
                        style={{ width: 16, height: 16 }}
                      />
                      <span>
                        {upcomingEventItem.scheduled.startTime} -{' '}
                        {upcomingEventItem.scheduled.endTime}{' '}
                        {upcomingEventItem.scheduled.displayTimeZone}
                      </span>
                    </h6>
                    <h6 className="text-subtle font-semibold mb-0 line-clamp-1">
                      <FeatherIcon
                        icon="map-pin"
                        className="me-2"
                        style={{ width: 16, height: 16 }}
                      />
                      <span>{upcomingEventItem.location}</span>
                    </h6>
                  </div>
                  <p className="text-md text-subtle">
                    {upcomingEventItem.description}
                  </p>
                  <div className="flex items-center gap-1">
                    <Avatar.Group size="s" className="items-center">
                      {upcomingEventItem.interestedToGoing.map(people => (
                        <Avatar src={people.image} key={people.id} size="s" />
                      ))}
                      <Link
                        to="#!"
                        className="text-sm ms-1 font-semibold text-soft"
                      >
                        +
                        {upcomingEventItem.totalUserCount -
                          upcomingEventItem.interestedToGoing.length}{' '}
                        people going
                      </Link>
                    </Avatar.Group>
                    <ul className="ps-4 mb-0 text-soft text-sm">
                      <li>
                        {numberFormat(upcomingEventItem.interested, 'compact', {
                          compactDisplay: 'short'
                        }).toLowerCase()}{' '}
                        people interested
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col xxl={3}>
                  <Button
                    className={classNames('me-2 2xl:me-0 2xl:mb-2 2xl:w-full', {
                      'btn-primary': upcomingEventItem.status === 'interested',
                      'btn-phoenix-primary':
                        upcomingEventItem.status === 'featured'
                    })}
                  >
                    <FontAwesomeIcon
                      icon={
                        upcomingEventItem.status === 'interested'
                          ? faCircleCheck
                          : faBookmark
                      }
                      className="me-2"
                    />
                    Interested
                  </Button>
                  <Button variant="phoenix-primary" className="2xl:w-full">
                    <FontAwesomeIcon icon={faCircleCheck} className="me-2" />
                    Going
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <EventOffcanvas open={open} setOpen={setOpen} />
    </>
  );
};

export default UpcomingEventCard;
