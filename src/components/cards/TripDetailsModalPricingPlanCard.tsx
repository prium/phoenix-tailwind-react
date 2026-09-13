import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '@hummingbirdui/react';
import { TripDetailsModalPricingPlan } from 'data/travel-agency/customer/trip';
import { currencyFormat } from 'helpers/utils';

/** plan options in phoenix-tailwind mixins/travel-agency/trip/TripAvailabilityModal.pug */
const TripDetailsModalPricingPlanCard = ({
  pricingPlan
}: {
  pricingPlan: TripDetailsModalPricingPlan;
}) => {
  const inputId = pricingPlan.name.split(' ').join('-');
  return (
    <>
      <input
        type="radio"
        name="availableOption"
        id={inputId}
        className="card-form-check-input hidden"
        defaultChecked={pricingPlan.checked}
      />
      <div className="relative">
        <label htmlFor={inputId} className="stretched-link" />
        <Card>
          <Card.Body>
            <h4 className="mb-6">
              <span className="radio-circle me-2" />
              {pricingPlan.name}
            </h4>
            <ul className="list-none mb-0 p-0">
              {pricingPlan.facilities.map(item => (
                <li key={item.id} className="flex mb-1">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className="text-secondary-light me-4 size-1.5"
                    transform="down-10"
                  />
                  {item.facility}
                </li>
              ))}
            </ul>
            <hr className="my-6" />
            <h5 className="font-normal mb-6">
              1 adult x{' '}
              {currencyFormat(pricingPlan.total, { minimumFractionDigits: 2 })}
            </h5>
            <div className="p-4 rounded-md bg-subtle">
              <h4>
                Total{' '}
                {currencyFormat(pricingPlan.total, {
                  minimumFractionDigits: 2
                })}
              </h4>
              {pricingPlan.additionalCharge === 0 && (
                <p className="text-md mb-0">
                  ( No additional taxes or booking fees )
                </p>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default TripDetailsModalPricingPlanCard;
