import FligthListHead from './FligthListHead';
import qatarAirline from 'assets/img/brand/qatar-airline.png';
import emiratesAirline from 'assets/img/brand/emirates-airline.png';
import japanAirline from 'assets/img/brand/japan-airline.png';
import longArrow from 'assets/img/icons/long-arrow.svg';
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

/** `searchedFlights` demo set in mixins/travel-agency/flight/homepage/FlightListing.pug */
const searchedFlights: FlightInfo[] = [
  {
    airline: {
      name: 'Qatar Airways',
      logo: qatarAirline
    },
    schedules: [
      {
        duration: '25m',
        departure: { from: 'DAC', date: '25 Jan', time: '7:45' },
        arrival: { to: 'CGP', date: '25 Jan', time: '8:10' }
      },
      {
        duration: '25m',
        departure: { from: 'CGP', date: '27 Jan', time: '8:15' },
        arrival: { to: 'DAC', date: '27 Jan', time: '8:45' }
      }
    ],
    price: { regular: 150, discounted: 124 }
  },
  {
    airline: {
      name: 'Emirates',
      logo: emiratesAirline
    },
    schedules: [
      {
        duration: '25m',
        departure: { from: 'DAC', date: '25 Jan', time: '7:55' },
        arrival: { to: 'ZYL', date: '25 Jan', time: '8:20' }
      }
    ],
    price: { regular: 139, discounted: 120 }
  },
  {
    airline: {
      name: 'Japan Airlines',
      logo: japanAirline
    },
    schedules: [
      {
        duration: '25m',
        departure: { from: 'DAC', date: '25 Jan', time: '8:45' },
        arrival: { to: 'ZYL', date: '25 Jan', time: '9:10' }
      }
    ],
    price: { regular: 144, discounted: 128 }
  },
  {
    airline: {
      name: 'Qatar Airways',
      logo: qatarAirline
    },
    schedules: [
      {
        duration: '25m',
        departure: { from: 'DAC', date: '25 Jan', time: '8:55' },
        arrival: { to: 'ZYL', date: '25 Jan', time: '9:15' }
      }
    ],
    price: { regular: 150, discounted: 124 }
  }
];

const FlightScheduleInfo = ({ schedule }: { schedule: FlightSchedule }) => {
  return (
    <div className="flex gap-6 justify-center">
      <div>
        <p className="mb-2 text-md text-subtle">{schedule.departure.date}</p>
        <h4 className="mb-2 text-default">{schedule.departure.from}</h4>
        <h2 className="mb-0">{schedule.departure.time}</h2>
      </div>
      <div className="text-center">
        <p className="mb-2 text-md text-subtle">{schedule.duration}</p>
        <p className="mb-2 text-md text-subtle">Non-stop</p>
        <img className="relative rtl__flip" src={longArrow} alt="" />
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
    <div className="py-12 border-t">
      <div className="row g-0 gap-10 items-center">
        <div className="lg:col">
          <div className="flex flex-col md:gap-4 gap-10">
            {schedules.map((schedule, idx) => (
              <div
                key={idx}
                className="row md:gy-0 gy-6 sm:justify-between lg:justify-start"
              >
                <div className="sm:col-auto md:col-5">
                  <div className="flex items-center justify-center sm:justify-start! gap-6">
                    <img
                      src={airline.logo}
                      alt=""
                      className="flight-list-item-logo rounded-lg"
                    />
                    <h5 className="hidden md:block text-nowrap text-highlight">
                      {airline.name}
                    </h5>
                  </div>
                </div>
                <div className="sm:col-auto">
                  <FlightScheduleInfo schedule={schedule} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-auto">
          <div className="flex gap-4 flex-col sm:flex-row lg:flex-col xl:flex-row flex-end-center">
            <h3 className="mb-0 text-2xl sm:text-xl flex gap-2 flex-col sm:flex-row items-center">
              <span className="text-md text-soft font-normal line-through">
                {currencyFormat(price.regular, { minimumFractionDigits: 2 })}
              </span>
              {currencyFormat(price.discounted, { minimumFractionDigits: 2 })}
            </h3>

            <Button variant="primary" className="px-16" asChild>
              <Link to="/apps/travel-agency/flight/booking">Select</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

/** `+FlightListing` in mixins/travel-agency/flight/homepage/FlightListing.pug */
const FlightListing = () => {
  return (
    <>
      <FligthListHead />
      {searchedFlights.map((flight, idx) => (
        <FlightItem key={idx} {...flight} />
      ))}
      <div className="mt-6 relative text-center">
        <hr className="m-0 absolute top-1/2 -translate-y-1/2 w-full border-subtle" />
        <Button
          type="button"
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
