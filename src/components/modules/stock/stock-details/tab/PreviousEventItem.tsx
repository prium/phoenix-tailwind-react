import { useMemo } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';
import { PreviousEvent } from 'data/stock/stockDetails';
import { Dropdown } from '@hummingbirdui/react';
import { RevealDropdownTrigger } from 'components/base/RevealDropdown';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

dayjs.extend(customParseFormat);

/** Gold: `previousEvents` items in mixins/stock/stock-details/EventsTabContent.pug */
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
    <div className={classNames('border-dashed py-6', previousEvent.className)}>
      <h6 className="text-soft text-sm mb-1">
        {startDate.format('DD')}, {startDate.format('MMM')}{' '}
        {startDate.format('YY')} - {endDate && endDate.format('DD')},{' '}
        {endDate && endDate.format('MMM')} {endDate && endDate.format('YY')}
      </h6>
      <div className="flex flex-between-center gap-4 mb-2">
        <h5 className="mb-0 line-clamp-1">{previousEvent.title}</h5>
        <RevealDropdownTrigger>
          <Dropdown>
            <Dropdown.Trigger asChild>
              <button type="button" className="btn p-0">
                <FontAwesomeIcon icon={faEllipsisH} />
              </button>
            </Dropdown.Trigger>
            <Dropdown.Content align="end" className="py-2">
              <Dropdown.Item>Edit</Dropdown.Item>
              <Dropdown.Item className="text-danger">Delete</Dropdown.Item>
              <Dropdown.Item>Download</Dropdown.Item>
              <Dropdown.Item>Report abuse</Dropdown.Item>
            </Dropdown.Content>
          </Dropdown>
        </RevealDropdownTrigger>
      </div>
      <p className="text-sm text-soft mb-4">
        {previousEvent.interestedToGoing} people going
      </p>
      <div className="row g-2">
        <div className="2xl:flex mb-4 items-center">
          <h6 className="text-subtle font-semibold mb-2 2xl:mb-0 2xl:border-e border-end-solid-xxl 2xl:pe-4 2xl:me-4 text-nowrap">
            <FeatherIcon icon="clock" size={16} className="me-2 size-4" />
            <span>
              {previousEvent.schedule.startTime} -{' '}
              {previousEvent.schedule.endTime}{' '}
              {previousEvent.schedule.displayTimeZone}
            </span>
          </h6>
          <h6 className="text-subtle font-semibold mb-0 line-clamp-1">
            <FeatherIcon icon="map-pin" size={16} className="me-2 size-4" />
            <span>{previousEvent.location}</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default PreviousEventItem;
