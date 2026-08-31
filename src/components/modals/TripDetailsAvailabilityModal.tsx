import { Col, Dialog, Row } from '@hummingbirdui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faChevronRight,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'components/base/DatePicker';
import InputGroupCounter from 'components/common/InputGroupCounter';
import { tripDetailsModalPricingPlan } from 'data/travel-agency/customer/trip';
import TripDetailsModalPricingPlanCard from 'components/cards/TripDetailsModalPricingPlanCard';
import { Link } from 'react-router';

interface TripDetailsAvailabilityModalProps {
  show: boolean;
  onHide: () => void;
}

/** `+TripAvailabilityModal` in phoenix-tailwind mixins/travel-agency/trip/TripAvailabilityModal.pug */
const TripDetailsAvailabilityModal = ({
  show,
  onHide
}: TripDetailsAvailabilityModalProps) => {
  return (
    <Dialog open={show} onOpenChange={open => !open && onHide()}>
      <Dialog.Content size="md" centered aria-describedby={undefined}>
        <Dialog.Header className="justify-between items-start gap-8 px-6 pt-6 pb-4 border-0">
          <Dialog.Title asChild>
            <h2 className="mb-0">Walk where the king walked once in Wakanda</h2>
          </Dialog.Title>
          <button
            type="button"
            className="btn p-0 text-soft text-xl"
            aria-label="Close"
            onClick={onHide}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </Dialog.Header>
        <Dialog.Body className="p-6">
          <Row className="g-8 mb-6">
            <Col md={5}>
              <label
                htmlFor="tripDate"
                className="font-bold mb-2 text-lg text-emphasis"
              >
                Choose your preferred date
              </label>
              <DatePicker
                wrapperClassName="input-group-icon"
                hideIcon
                icon={
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="text-default text-md form-control-icon-start"
                  />
                }
                id="tripDate"
                placeholder="22 May, 2024"
                options={{ disableMobile: true }}
              />
            </Col>
            <Col md={7}>
              <Row className="g-4">
                <Col xs="auto" sm={6}>
                  <label
                    htmlFor="adult"
                    className="font-bold mb-2 text-lg text-emphasis"
                  >
                    Adults
                  </label>
                  <InputGroupCounter
                    id="adult"
                    inputGap="gap-2"
                    buttonClasses="rounded-md px-4"
                    iconClasses="px-0"
                  />
                </Col>
                <Col xs="auto" sm={6}>
                  <label
                    htmlFor="children"
                    className="font-bold mb-2 text-lg text-emphasis"
                  >
                    Children
                  </label>
                  <InputGroupCounter
                    id="children"
                    inputGap="gap-2"
                    buttonClasses="rounded-md px-4"
                    iconClasses="px-0"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          {tripDetailsModalPricingPlan.map(pricingPlan => (
            <TripDetailsModalPricingPlanCard
              key={pricingPlan.id}
              pricingPlan={pricingPlan}
            />
          ))}
          <label
            htmlFor="selectTime"
            className="font-bold mb-2 mt-8 text-lg text-emphasis"
          >
            Select time
          </label>
          <select className="form-select sm:w-1/2" id="selectTime">
            <option value="">8:00 AM</option>
            <option value="">12:00 PM</option>
            <option value="">3:00 PM</option>
          </select>
          <Link
            to="/apps/travel-agency/trip/checkout"
            className="btn btn-primary btn-lg text-center w-full mt-10"
          >
            Proceed to booking
            <FontAwesomeIcon icon={faChevronRight} className="text-md ms-2" />
          </Link>
        </Dialog.Body>
      </Dialog.Content>
    </Dialog>
  );
};

export default TripDetailsAvailabilityModal;
