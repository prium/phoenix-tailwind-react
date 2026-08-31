import { useMemo } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';
import { PreviousEvent } from 'data/stock/stockDetails';
import { Dropdown } from 'react-bootstrap';
import { RevealDropdownTrigger } from 'components/base/RevealDropdown';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

dayjs.extend(customParseFormat);

const PreviousEventItem = ({
  previousEvent
}: {
  previousEvent: PreviousEvent;
}) => {
  const startDate = useMemo(() => {
    return dayjs(previousEvent.schedule.startDate, 'DD/MM/YYYY');
  }, [previousEvent]);

  const endDate = useMemo(() => {
    return (
      previousEvent.schedule.endDate &&
      dayjs(previousEvent.schedule.endDate, 'DD/MM/YYYY')
    );
  }, [previousEvent]);

  return (
    <div className={classNames('border-dashed py-10', previousEvent.className)}>
      <h6 className="text-soft text-sm">
        {startDate.format('DD')}, {startDate.format('MMM')}{' '}
        {startDate.format('YY')} - {endDate && endDate.format('DD')},{' '}
        {endDate && endDate.format('MMM')} {endDate && endDate.format('YY')}
      </h6>
      <div className="flex flex-between-center gap-4 mb-2">
        <h5 className="mb-0 line-clamp-1">{previousEvent.title}</h5>
        <RevealDropdownTrigger>
          <Dropdown>
            <Dropdown.Toggle variant="" size="sm" className="p-0">
              <FontAwesomeIcon icon={faEllipsisH} />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end" className="py-2">
              <Dropdown.Item eventKey="1">Edit</Dropdown.Item>
              <Dropdown.Item eventKey="2" className="text-danger">
                Delete
              </Dropdown.Item>
              <Dropdown.Item eventKey="2">Download</Dropdown.Item>
              <Dropdown.Item eventKey="2">Report abuse</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </RevealDropdownTrigger>
      </div>
      <p className="text-sm text-soft mb-4">
        {previousEvent.interestedToGoing} people going
      </p>
      <div className="2xl:flex mb-4 items-center">
        <h6 className="text-subtle font-semibold mb-2 2xl:mb-0 2xl:border-e border-end-solid-xxl 2xl:pe-4 2xl:me-4 whitespace-nowrap">
          <FeatherIcon
            icon="clock"
            className="me-2"
            style={{ width: 16, height: 16 }}
          />
          <span>
            {previousEvent.schedule.startTime} -{' '}
            {previousEvent.schedule.endTime}{' '}
            {previousEvent.schedule.displayTimeZone}
          </span>
        </h6>
        <h6 className="text-subtle font-semibold mb-0 line-clamp-1">
          <FeatherIcon
            icon="map-pin"
            className="me-2"
            style={{ width: 16, height: 16 }}
          />
          <span>{previousEvent.location}</span>
        </h6>
      </div>
    </div>
  );
};

export default PreviousEventItem;
