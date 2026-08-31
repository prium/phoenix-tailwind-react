import travelImg from 'assets/video/travel.png';
import travelVideo from 'assets/video/travel.mp4';
import { Dropdown, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';
import { ReactTyped } from 'react-typed';

const HeroHeader = () => {
  return (
    <div className="booking-hero-header flex items-center">
      <div
        className="bg-holder overlay bg-opacity-50"
        style={{
          backgroundImage: `url(${travelImg})`,
          backgroundPosition: 'left bottom',
          backgroundSize: 'auto'
        }}
      >
        <video className="bg-video" autoPlay loop muted src={travelVideo} />
      </div>
      <div className="container-medium relative z-5">
        <h2 className="text-secondary-lighter text-2xl md:text-4xl font-normal mb-4">
          Where is your
        </h2>
        <h1 className="text-3xl md:text-6xl text-white font-normal mb-10 overflow-hidden">
          NEXT{' '}
          <ReactTyped
            strings={[
              '<span class=text-primary>TRIP!</span>',
              '<span class=text-warning>TOUR!</span>',
              '<span class=text-info>SOJOURN!</span>',
              '<span class=text-success>VACAY!</span>'
            ]}
            typeSpeed={70}
            backSpeed={70}
            loop
            backDelay={1000}
          />
        </h1>
        <InputGroup className="rounded-md py-1 ps-2 lg:w-1/2 border border-subtle">
          <div className="form-icon-container flex-1 flex items-center">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="form-icon text-danger-light"
            />
            <Form.Control
              type="text"
              placeholder="Search Destination"
              className="form-icon-input bg-transparent border-0 outline-none text-base md:text-lg text-secondary-light"
            />
          </div>
          {/* dropdwon class not added */}
          <Dropdown align="end">
            <div className="flex items-center">
              <Dropdown.Toggle
                as="button"
                id="dropdown-basic"
                className="btn dropdown-caret-none py-0 bg-transparent text-secondary-light text-base md:text-lg font-semibold border-0 border-s border-subtle rounded-none"
              >
                Flight
                <FontAwesomeIcon
                  className="ms-2"
                  icon={faChevronDown}
                  transform="down-1 shrink-4"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu data-bs-theme="dark" className="dropdown-menu-end">
                <Dropdown.Item to="#!" as={Link}>
                  Flight
                </Dropdown.Item>
                <Dropdown.Item to="#!" as={Link}>
                  Trip
                </Dropdown.Item>
                <Dropdown.Item to="#!" as={Link}>
                  Hotel
                </Dropdown.Item>
              </Dropdown.Menu>
            </div>
          </Dropdown>
        </InputGroup>
      </div>
    </div>
  );
};

export default HeroHeader;
