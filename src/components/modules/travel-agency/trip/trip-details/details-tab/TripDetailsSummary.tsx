import { useState } from 'react';
import { TourSummary } from 'data/travel-agency/customer/trip';
import { Col, Row, cn } from '@hummingbirdui/react';
import Bg from 'assets/img/bg/bg-41.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faClock,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

interface TripDetailsSummaryProps {
  tourSummary: TourSummary[];
}

interface SummaryContentProps {
  item: TourSummary;
  lineClassName?: string;
}

const SummaryContent = ({ item, lineClassName }: SummaryContentProps) => {
  return (
    <div className="p-2 rounded-md bg-subtle flex items-center gap-2 mb-4 relative">
      <div
        className={cn(
          'tour-direction-line border-s border-dashed',
          lineClassName
        )}
      />
      <span className="min-w-5.75 h-5.75 bg-secondary rounded-full flex flex-center text-white text-md">
        {item.serial}
      </span>
      <h6 className="mb-0 text-highlight">{item.label}</h6>
    </div>
  );
};

/** tour route column in phoenix-tailwind mixins/travel-agency/trip/TripDetails.pug */
const TripDetailsSummary = ({ tourSummary }: TripDetailsSummaryProps) => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <h6 className="my-4 py-4 px-2 rounded-md bg-muted text-center">Day 1</h6>
      <Row className="gx-8 gy-0 relative">
        <div
          className="bg-holder tour-direction-bg hidden sm:block"
          style={{ backgroundImage: `url(${Bg})` }}
        />
        <Col sm={6} className="relative">
          <div className="p-2 rounded-md bg-subtle mb-4 relative">
            <div className="tour-direction-line border-s border-dashed" />
            <a
              className="btn p-0 flex justify-between collapse-indicator"
              role="button"
              aria-controls="collapsePicupPoint"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <div className="flex">
                <span className="inline-flex flex-center rounded-full border me-2 min-w-5.75 h-5.75">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-md" />
                </span>
                <div>
                  <h6 className="mb-2 text-start">Pickup point</h6>
                  <h6 className="text-start font-normal text-subtle">
                    Birnin Zana bus terminal
                  </h6>
                </div>
              </div>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="toggle-icon size-2.5"
              />
            </a>
            <div
              className={cn('collapse', { show: open })}
              id="collapsePicupPoint"
            >
              <h6 className="font-normal text-subtle pt-4 ps-1">
                <FontAwesomeIcon icon={faClock} className="text-soft me-2" />
                10:00 am local time
              </h6>
            </div>
          </div>
          {tourSummary.slice(0, 3).map((item, index) => (
            <SummaryContent
              key={item.id}
              item={item}
              lineClassName={index === 2 ? 'sm:hidden' : undefined}
            />
          ))}
        </Col>
        <Col sm={6} className="relative">
          {tourSummary.slice(3).map(item => (
            <SummaryContent key={item.id} item={item} />
          ))}
          <div className="p-2 rounded-md bg-subtle flex items-center gap-2 mb-4">
            <span className="inline-flex flex-center rounded-full border me-2 min-w-5.75 h-5.75">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-md" />
            </span>
            <h6 className="mb-0 text-highlight">Drop-off point</h6>
          </div>
        </Col>
      </Row>
      <h6 className="mb-0 py-4 px-2 rounded-md bg-muted text-center">
        Tour ends
      </h6>
    </>
  );
};

export default TripDetailsSummary;
