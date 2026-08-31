import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCouch } from '@fortawesome/free-solid-svg-icons';
import { Card } from '@hummingbirdui/react';
import longArrowDown from 'assets/img/icons/long-arrow-down.svg';
import qatarAirlineLogo from 'assets/img/brand/qatar-airline.png';

interface FlightPointProps {
  time: string;
  date: string;
  airport: string;
  airportFull: string;
}

const FlightPoint = ({
  time,
  date,
  airport,
  airportFull
}: FlightPointProps) => (
  <div className="row items-center">
    <div className="md:col-3 md:text-end mb-2 md:mb-0">
      <h2>{time}</h2>
      <p className="mb-0 text-base text-nowrap">{date}</p>
    </div>
    <div className="md:col-auto hidden md:block text-center">
      <FontAwesomeIcon icon={faCircle} className="text-soft text-xs" />
    </div>
    <div className="md:col-auto">
      <h5>
        {airport}{' '}
        <span className="text-subtle font-normal">({airportFull})</span>
      </h5>
    </div>
  </div>
);

/** `+FlightInfo` in mixins/travel-agency/flight/booking/FlightInfo.pug */
const FlightInfo = ({ className }: { className?: string }) => {
  return (
    <Card className={`bg-subtle ${className ?? ''}`}>
      <Card.Body className="p-6 lg:p-10">
        <div className="row g-0 justify-between">
          <div className="lg:col-8 mb-8 lg:mb-0">
            <div className="row gy-6">
              <div className="col-12">
                <FlightPoint
                  time="13:45"
                  date="23 January, 2023"
                  airport="DAC - Dhaka"
                  airportFull="Hazrat Shahjalal Intl. Airport"
                />
              </div>

              <div className="col-12">
                <div className="row items-center">
                  <div className="col-auto md:col-3 md:text-end">
                    <p className="mb-0 text-base text-soft">0h 45m</p>
                  </div>
                  <div className="col-auto md:text-center">
                    <img src={longArrowDown} alt="" />
                  </div>
                  <div className="col-auto">
                    <p className="mb-0 text-base text-soft">Qatar Airways</p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <FlightPoint
                  time="14:15"
                  date="23 January, 2023"
                  airport="CXB - Cox’s Bazar"
                  airportFull="Cox’s Bazar Intl. Airport"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-4">
            <div className="lg:ps-10 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-s border-subtle">
              <div className="row lg:g-4 md:g-0 g-4 flex-between-center">
                <div className="md:col-auto lg:col-12">
                  <div className="text-nowrap">
                    <img
                      src={qatarAirlineLogo}
                      alt=""
                      width={32}
                      className="rounded-md"
                    />
                    <h5 className="text-nowrap font-normal inline-block ms-2 mb-0">
                      Qatar Airways
                    </h5>
                  </div>
                </div>
                <div className="col-auto lg:col-12">
                  <h5 className="text-nowrap">Flight number</h5>
                  <p className="mb-0 text-base">VQ 935</p>
                </div>
                <div className="col-auto lg:col-12">
                  <h5 className="text-nowrap">Flight model</h5>
                  <p className="mb-0 text-base">ATR735</p>
                </div>
                <div className="col-auto lg:col-12">
                  <h5 className="mb-0 text-nowrap">
                    <FontAwesomeIcon icon={faCouch} className="me-2" />
                    Economy
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FlightInfo;
