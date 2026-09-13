import { cn } from '@hummingbirdui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSuitcaseRolling,
  faBriefcase,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';

interface BaggageRowProps {
  icon: IconDefinition;
  label: string;
  weight: string;
}

const BaggageRow = ({ icon, label, weight }: BaggageRowProps) => (
  <tr>
    <td className="text-nowrap py-1">
      <p className="mb-0 text-subtle text-nowrap">
        <FontAwesomeIcon icon={icon} className="text-emphasis me-2" />
        {label}
      </p>
    </td>
    <td className="w-max py-1 pe-1">
      <p className="mb-0 text-subtle">:</p>
    </td>
    <td className="py-1 align-middle">
      <h5 className="mb-0">{weight}</h5>
    </td>
  </tr>
);

/** `+FlightDetails` in mixins/travel-agency/flight/booking/FlightDetails.pug */
const FlightDetails = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <h3 className="mb-6">Flight Details</h3>
      <div className="row g-0 justify-between mb-6">
        <div className="lg:col-3 lg:border-e mb-8 lg:mb-0">
          <h5 className="mb-6">Baggage weight limit</h5>
          <table className="table table-borderless mb-0 max-w-37.5">
            <tbody>
              <tr>
                <th className="p-0" />
                <th className="p-0" />
                <th className="p-0" />
              </tr>
              <BaggageRow
                icon={faSuitcaseRolling}
                label="Cargo"
                weight="20 kgs"
              />
              <BaggageRow icon={faBriefcase} label="Carry" weight="7 kgs" />
            </tbody>
          </table>
        </div>

        <div className="col-auto lg:col-8">
          <h5 className="mb-6">Policy</h5>
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <div>
              <p className="mb-2 text-info">Cancellation</p>
              <p className="mb-0">
                Refund Amount = Paid Amount - Airline’s Cancellation Fee
              </p>
            </div>
            <div>
              <p className="mb-2 text-info">Re-issue</p>
              <p className="mb-0">
                Re-issue Fee = Airline’s Fee + Fare Difference
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="mb-0 text-info">
        *The airline’s fee is indicative and per person. Convenience fee is
        nom-refundable
      </p>
    </div>
  );
};

export default FlightDetails;
