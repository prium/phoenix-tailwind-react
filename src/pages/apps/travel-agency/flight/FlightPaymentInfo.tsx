import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlane,
  faEdit,
  faUser,
  faSuitcaseRolling,
  faCircle,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import qatarAirlineLogo from 'assets/img/brand/qatar-airline.png';

const SectionHead = ({
  icon,
  title
}: {
  icon: IconDefinition;
  title: string;
}) => (
  <div className="flex justify-between mb-6">
    <div>
      <FontAwesomeIcon icon={icon} className="text-primary me-2" />{' '}
      <h4 className="mb-0 inline-block text-highlight">{title}</h4>
    </div>
    <button type="button" className="btn btn-link p-0 text-primary">
      <FontAwesomeIcon icon={faEdit} className="me-2" />
      Edit
    </button>
  </div>
);

const FlightInfo = () => {
  return (
    <div>
      <SectionHead icon={faPlane} title="Flight info" />
      <div className="mb-6">
        <img src={qatarAirlineLogo} alt="" className="h-14 rounded-lg" />{' '}
        <h5 className="text-nowrap font-normal inline-block ms-2 mb-0">
          Qatar Airways
        </h5>
      </div>

      <p className="text-emphasis">
        Travelling from <strong>Dhaka </strong>to <strong>Cox’s Bazar</strong>
      </p>

      <div className="flex gap-2 flex-wrap">
        <p className="mb-0 text-emphasis text-nowrap">
          Tuesday, 29 January
          <FontAwesomeIcon
            icon={faCircle}
            className="text-subtle text-xs mx-2"
            transform="shrink-6"
          />
          5:00 pm
        </p>
        <p className="mb-0 text-emphasis text-nowrap">
          <span className="text-subtle me-2">-</span>
          Tuesday, 29 January
          <FontAwesomeIcon
            icon={faCircle}
            className="text-subtle text-xs mx-2"
            transform="shrink-6"
          />
          5:30 pm
        </p>
      </div>
    </div>
  );
};

const Passenger = ({ number }: { number: number }) => (
  <>
    <h5 className="mb-4">Passenger {number}</h5>
    <p className="mb-2">John James Johansen</p>
    <p className="mb-0">
      Adult{' '}
      <FontAwesomeIcon
        icon={faCircle}
        className="text-subtle text-xs mx-2"
        transform="shrink-5"
      />
      Male
    </p>
  </>
);

const PersonalInfo = () => {
  return (
    <div>
      <SectionHead icon={faUser} title="Personal info" />
      <div className="bg-subtle rounded-md p-6">
        <div className="row g-0 gy-8 flex-col sm:flex-row">
          <div className="col pe-6">
            <Passenger number={1} />
          </div>
          <div className="col sm:border-s sm:border-t-0 border-t border-subtle sm:ps-6 pt-6 sm:pt-0">
            <Passenger number={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

const baggageItems = [
  {
    title: '1 personal item',
    description: 'Must go under the seat in front of you'
  },
  { title: '1 carry-on bag', description: 'Max weight 8 kg' },
  { title: '1 checked bag', description: 'Max weight 25 kg' }
];

const BaggageInfo = () => {
  return (
    <div>
      <SectionHead icon={faSuitcaseRolling} title="Included baggage" />
      {baggageItems.map((item, index) => (
        <div
          key={item.title}
          className={`flex gap-4 ${index < baggageItems.length - 1 ? 'mb-6' : ''}`}
        >
          <FontAwesomeIcon
            icon={faCircle}
            className="text-soft text-xs mx-2"
            transform="down-8"
          />
          <div>
            <h5 className="mb-2">{item.title}</h5>
            <p className="mb-0 text-subtle">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

/** `+FlightPaymentInfo` in mixins/travel-agency/flight/payment/FlightPaymentInfo.pug */
const FlightPaymentInfo = () => {
  return (
    <>
      <FlightInfo />
      <hr className="my-8 border-subtle" />
      <PersonalInfo />
      <hr className="my-8 border-subtle" />
      <BaggageInfo />
    </>
  );
};

export default FlightPaymentInfo;
