import { Dialog } from '@hummingbirdui/react';
import DialogHeading from 'components/base/DialogHeading';
import Button from 'components/base/Button';

import { faMagnifyingGlass, faRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  FilterFormFlightAirlines,
  FilterFormFlightCabin,
  FilterFormFlightDuration,
  FilterFormFlightPriceCalculator,
  FilterFormFlightStops
} from 'components/modules/travel-agency/flight/homepage/FlightFilterFormContent';
import FilterFormFlightAircraft from 'components/modules/travel-agency/flight/homepage/FilterFormFlightAircraft';
import FilterFormFlightAirports from 'components/modules/travel-agency/flight/homepage/FilterFormFlightAirports';
import FilterFormFlightBaggage from 'components/modules/travel-agency/flight/homepage/FilterFormFlightBaggage';
import FilterFormFlightSchedule from 'components/modules/travel-agency/flight/homepage/FilterFormFlightSchedule';

interface FlightFilterModalProps {
  show: boolean;
  handleModalClose: () => void;
}

/** `+FlightFilterModal` (#flightFilterModal) in mixins/travel-agency/flight/homepage/FlightFilterModal.pug */
const FlightFilterModal = ({
  show,
  handleModalClose
}: FlightFilterModalProps) => {
  return (
    <Dialog open={show} onOpenChange={open => !open && handleModalClose()}>
      <Dialog.Content
        centered
        scrollable
        fullscreen="md-down"
        dialogClassName="max-w-213.25"
        aria-describedby={undefined}
        asChild
      >
        <form>
          <div className="modal-header p-6 pb-4 items-start border-0">
            <div>
              <DialogHeading
                as="h4"
                className="mb-2 text-highlight"
                id="flightFilterModalLabel"
              >
                Filter
              </DialogHeading>
              <p className="mb-0">
                Search for flights according to your preferences
              </p>
            </div>
            <button
              type="button"
              aria-label="Close"
              className="btn btn-close text-sm"
              onClick={handleModalClose}
            />
          </div>
          <div className="modal-body scrollbar px-6 py-4">
            <div className="row g-8">
              <div className="md:col-6">
                <div className="row g-0">
                  <div className="col-12">
                    <FilterFormFlightStops className="mb-10" />
                  </div>
                  <div className="col-12">
                    <FilterFormFlightSchedule className="mb-10" />
                  </div>
                  <div className="col-12">
                    <FilterFormFlightAirlines className="mb-10" />
                  </div>
                  <div className="col-12">
                    <FilterFormFlightDuration />
                  </div>
                </div>
              </div>
              <div className="md:col-6">
                <div className="row g-0">
                  <div className="col-12">
                    <FilterFormFlightPriceCalculator className="mb-10" />
                  </div>
                  <div className="col-12">
                    <FilterFormFlightAirports className="mb-10" />
                  </div>
                  <div className="col-12">
                    <FilterFormFlightBaggage className="mb-10" />
                  </div>
                  <div className="col-12">
                    <FilterFormFlightCabin className="mb-10" />
                  </div>
                  <div className="col-12">
                    <FilterFormFlightAircraft />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer border-0 p-6 pt-0">
            <div className="w-full flex flex-wrap gap-4 border-t border-subtle pt-6">
              <Button
                type="button"
                variant="phoenix-primary"
                size="lg"
                className="m-0 text-nowrap"
              >
                <FontAwesomeIcon icon={faRotate} className="sm:me-2" />
                <span className="hidden sm:inline-block">Reset filter</span>
              </Button>
              <Button
                type="button"
                variant="primary"
                size="lg"
                className="m-0 text-nowrap flex-1"
                onClick={handleModalClose}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} className="me-2" />
                Update results
              </Button>
            </div>
          </div>
        </form>
      </Dialog.Content>
    </Dialog>
  );
};

export default FlightFilterModal;
