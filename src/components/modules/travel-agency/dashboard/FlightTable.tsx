import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row, cn } from '@hummingbirdui/react';

interface FlightSpec {
  label: string;
  value: string;
  /** gold: the Airline value is `text-primary` instead of `text-subtle` */
  valueClass?: string;
}

const flightSpecs: FlightSpec[][] = [
  [
    { label: 'Flight no.', value: 'FF-SCA001' },
    { label: 'Model', value: 'Appa 707-RTX' },
    { label: 'Velocity', value: '450 km/h' }
  ],
  [
    { label: 'Airline', value: 'YIP YIP', valueClass: 'text-primary' },
    { label: 'Callsign', value: 'Skybison1' },
    { label: 'ETA', value: '12 hrs 57 mins' }
  ]
];

const SpecTable = ({ specs }: { specs: FlightSpec[] }) => (
  <table className="text-md">
    <tbody>
      <tr>
        <th className="w-17.75"></th>
        <th></th>
        <th></th>
      </tr>
      {specs.map(spec => (
        <tr key={spec.label}>
          <td className="p-px">
            <h6 className="mb-0 text-subtle leading-4.75">{spec.label}</h6>
          </td>
          <td className="text-subtle pe-2"> : </td>
          <td className="p-px">
            <h6
              className={cn(
                'mb-0 text-nowrap font-semibold',
                spec.valueClass ?? 'text-subtle'
              )}
            >
              {spec.value}
            </h6>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

/** The floating flight description card over the flight map (gold DOM:
 * `.flight-desc-card` positioning + dotted `.progress` come from
 * assets/css/components/travel-agency.css). */
const FlightTable = () => {
  return (
    <div className="flight-desc-card p-4 pt-4.5 bg-soft rounded-lg">
      <Row className="gx-8 justify-between">
        {flightSpecs.map((specs, index) => (
          <Col xs="auto" key={index}>
            <SpecTable specs={specs} />
          </Col>
        ))}
      </Row>
      <div className="flex items-center gap-2 mt-4">
        <h6 className="mb-0 text-subtle">GRU</h6>
        <div
          className="progress flex-1"
          role="progressbar"
          aria-label="flight-destination-progress"
          aria-valuenow={50}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="progress-bar bg-info overflow-visible w-1/2">
            <FontAwesomeIcon
              icon={faPlane}
              className="text-info absolute end-0"
            />
          </div>
        </div>
        <h6 className="mb-0 text-subtle">SJC</h6>
      </div>
    </div>
  );
};

export default FlightTable;
