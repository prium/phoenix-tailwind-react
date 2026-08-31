import React from 'react';
import FligthListHead from './FligthListHead';
import qutarAirline from 'assets/img/brand/qatar-airline.png';
import emiratesAirline from 'assets/img/brand/emirates-airline.png';
import japanAirline from 'assets/img/brand/japan-airline.png';
import longArrow from 'assets/img/icons/long-arrow.svg';
import { Col, Row } from 'react-bootstrap';
import Button from 'components/base/Button';
import { Link } from 'react-router';
import { currencyFormat } from 'helpers/utils';

interface FlightSchedule {
  departure: {
    from: string;
    date: string;
    time: string;
  };
  arrival: {
    to: string;
    date: string;
    time: string;
  };
  duration: string;
}
interface FlightScheduleProps {
  schedule: FlightSchedule;
}

interface FlightInfo {
  airline: {
    name: string;
    logo: string;
  };
  schedules: FlightSchedule[];
  price: {
    regular: number;
    discounted: number;
  };
}

const FlightsInfo: FlightInfo[] = [
  {
    airline: {
      name: 'Qatar Airways',
      logo: qutarAirline
    },
    schedules: [
      {
        duration: '25m',
        departure: {
          from: 'DAC',
          date: '25 Jan',
          time: '7:45'
        },
        arrival: {
          to: 'CGP',
          date: '25 Jan',
          time: '8:10'
        }
      },
      {
        duration: '25m',
        departure: {
          from: 'CGP',
          date: '27 Jan',
          time: '8:15'
        },
        arrival: {
          to: 'DAC',
          date: '27 Jan',
          time: '8:45'
        }
      }
    ],
    price: {
      regular: 150,
      discounted: 124
    }
  },
  {
    airline: {
      name: 'Emirates',
      logo: emiratesAirline
    },
    schedules: [
      {
        duration: '25m',
        departure: {
          from: 'DAC',
          date: '25 Jan',
          time: '7:55'
        },
        arrival: {
          to: 'ZYL',
          date: '25 Jan',
          time: '8:20'
        }
      }
    ],
    price: {
      regular: 139,
      discounted: 120
    }
  },
  {
    airline: {
      name: 'Japan Airlines',
      logo: japanAirline
    },
    schedules: [
      {
        duration: '25m',
        departure: {
          from: 'DAC',
          date: '25 Jan',
          time: '8:45'
        },
        arrival: {
          to: 'ZYL',
          date: '25 Jan',
          time: '9:10'
        }
      }
    ],
    price: {
      regular: 144,
      discounted: 128
    }
  },
  {
    airline: {
      name: 'Qatar Airways',
      logo: qutarAirline
    },
    schedules: [
      {
        duration: '25m',
        departure: {
          from: 'DAC',
          date: '25 Jan',
          time: '8:55'
        },
        arrival: {
          to: 'ZYL',
          date: '25 Jan',
          time: '9:15'
        }
      }
    ],
    price: {
      regular: 150,
      discounted: 124
    }
  }
];

const FlightSchedule = ({ schedule }: FlightScheduleProps) => {
  return (
    <div className="flex gap-6 justify-center">
      <div>
        <p className="mb-2 text-md text-subtle">
          {schedule.departure.date}
        </p>
        <h4 className="mb-2 text-default">{schedule.departure.from}</h4>
        <h2 className="mb-0">{schedule.departure.time}</h2>
      </div>
      <div className="text-center">
        <p className="mb-2 text-md text-subtle">{schedule.duration}</p>
        <p className="mb-2 text-md text-subtle">Non-stop</p>
        <img src={longArrow} alt="" className="relative rtl__flip" />
      </div>
      <div className="text-end">
        <p className="mb-2 text-md text-subtle">{schedule.arrival.date}</p>
        <h4 className="mb-2 text-default">{schedule.arrival.to}</h4>
        <h2 className="mb-0">{schedule.arrival.time}</h2>
      </div>
    </div>
  );
};

const FlightItem = ({ airline, schedules, price }: FlightInfo) => {
  return (
    <Row className="g-0 gap-10 items-center py-12 border-t">
      <Col lg>
        <div className="flex flex-col md:gap-4 gap-10">
          {schedules.map((schedule, idx) => (
            <Row
              key={idx}
              className="md:gy-0 gy-6 sm:justify-between lg:justify-start"
            >
              <Col sm="auto" md={5}>
                <div className="flex flex-center sm:justify-start gap-6">
                  <img
                    src={airline.logo}
                    alt=""
                    className="flight-list-item-logo img-fluid rounded-lg"
                  />
                  <h5 className="hidden md:block whitespace-nowrap text-highlight">
                    {airline.name}
                  </h5>
                </div>
              </Col>
              <Col sm="auto">
                <FlightSchedule schedule={schedule} />
              </Col>
            </Row>
          ))}
        </div>
      </Col>
      <Col lg="auto">
        <div className="flex gap-4 flex-col sm:flex-row lg:flex-col xl:flex-row flex-end-center">
          <h3 className="mb-0 text-2xl sm:text-xl flex gap-2 flex-col sm:flex-row items-center">
            <span className="text-md text-soft font-normal line-through">
              {currencyFormat(price.regular, { minimumFractionDigits: 2 })}
            </span>
            {currencyFormat(price.discounted, { minimumFractionDigits: 2 })}
          </h3>

          <Link to="/apps/travel-agency/flight/booking">
            <Button variant="primary" className="px-16">
              Select
            </Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

const FlightListing = () => {
  return (
    <>
      <FligthListHead />
      {FlightsInfo.map((flight, idx) => (
        <FlightItem key={idx} {...flight} />
      ))}
      <div className="mt-6 relative text-center">
        <hr className="m-0 absolute top-1/2 top-1/2 -translate-y-1/2 w-full" />
        <Button
          variant="phoenix-secondary"
          className="rounded-full relative"
        >
          Show more
        </Button>
      </div>
    </>
  );
};

export default FlightListing;
