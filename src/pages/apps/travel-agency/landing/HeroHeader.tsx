import travelImg from 'assets/video/travel.png';
import travelVideo from 'assets/video/travel.mp4';
import { Dropdown, Input } from '@hummingbirdui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import { ReactTyped } from 'react-typed';

const HeroHeader = () => {
  return (
    <div className="booking-hero-header flex items-center">
      <div
        className="bg-holder overlay before:bg-(--color-black)/50!"
        style={{ backgroundImage: `url(${travelImg})` }}
      >
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src={travelVideo} type="video/mp4" />
        </video>
      </div>
      <div className="container-medium relative z-5">
        <h2 className="text-gray-200 text-2xl md:text-4xl font-normal mb-4">
          Where is your
        </h2>
        <h1 className="text-3xl md:text-6xl text-white font-normal mb-10 overflow-hidden">
          NEXT{' '}
          <ReactTyped
            className="typed-text text-primary"
            strings={[
              '<span class=text-primary>TRIP!</span>',
              '<span class=text-warning>TOUR?</span>',
              '<span class=text-info>SOJOURN?</span>',
              '<span class=text-success>VACAY?</span>'
            ]}
            typeSpeed={70}
            backSpeed={70}
            loop
            backDelay={1000}
          />
        </h1>
        <div className="input-group rounded-md py-1 ps-2 lg:w-1/2 border border-gray-100">
          <div className="relative flex-1 flex items-center">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-danger-light absolute start-4 md:mb-1.5"
            />
            <Input
              type="text"
              placeholder="Search Destination"
              className="form-icon-input bg-transparent border-0 outline-none text-base md:text-lg text-gray-300 ps-9"
            />
          </div>
          <Dropdown>
            <div className="dropdown flex items-center">
              <Dropdown.Trigger asChild>
                <button
                  type="button"
                  className="btn dropdown-caret-none py-0 bg-transparent text-gray-300 text-base md:text-lg font-semibold border-0 border-s border-gray-100 rounded-none"
                >
                  Flight
                  <FontAwesomeIcon
                    className="ms-2"
                    icon={faChevronDown}
                    transform="down-1 shrink-4"
                  />
                </button>
              </Dropdown.Trigger>
              <Dropdown.Content align="end" data-hb-theme="dark">
                <Dropdown.Item>Flight</Dropdown.Item>
                <Dropdown.Item>Trip</Dropdown.Item>
                <Dropdown.Item>Hotel</Dropdown.Item>
              </Dropdown.Content>
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
