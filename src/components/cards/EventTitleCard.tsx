import { Card, Col, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import Button from 'components/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarPlus } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faShareNodes } from '@fortawesome/free-solid-svg-icons';

const EventTitleCard = ({ className }: { className?: string }) => {
  return (
    <Card className={className}>
      <Card.Body>
        <h1 className="leading-sm text-xl 2xl:text-3xl mb-2">
          Brandmyth presents- Shironamhin 25 years celebration with symphony
          orchestra
        </h1>
        <p className="fs-0 mb-6 text-subtle">
          Tavern on the Greend, New York
        </p>
        <Card className="mb-8 2xl:mb-12">
          <Card.Body>
            <Row className="gy-8">
              <Col md={6} className="flex justify-between">
                <div>
                  <div className="mb-4">
                    <div className="flex items-center">
                      <div className="px-2 py-1 bg-info-subtle rounded-md">
                        <FeatherIcon
                          icon="map-pin"
                          className="text-info"
                          size={16}
                        />
                      </div>
                      <h5 className="ms-2 text-emphasis mb-0">Location</h5>
                    </div>
                  </div>
                  <p className="leading-sm mb-0 text-subtle">
                    36/4A, James Tiberius Auditorium, <br />
                    Vancouver, British Columbia, Canada
                  </p>
                </div>
                <div className="my-6 mx-4 border-s border-light hidden md:block" />
              </Col>
              <Col md={6}>
                <div className="mb-4">
                  <div className="flex items-center">
                    <div className="px-2 py-1 bg-primary-subtle rounded-md">
                      <FeatherIcon
                        icon="clock"
                        className="text-primary"
                        size={16}
                      />
                    </div>
                    <h5 className="ms-2 mb-0">Date &amp; Time</h5>
                  </div>
                </div>
                <p className="leading-sm mb-0 text-subtle">
                  28th June - 2nd July 2022, <br />
                  10 am - 4 pm Eastern Daylight Time
                </p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Row className="g-2">
          <Col xs={12} md="auto" className="md:grow">
            <Button variant="primary" className="w-full">
              Get Tickets
            </Button>
          </Col>
          <Col xs={12} sm="auto" className="sm:grow md:grow-0">
            <Button
              variant="phoenix-primary"
              className="w-full"
              startIcon={
                <FontAwesomeIcon icon={faCalendarPlus} className="me-2" />
              }
            >
              Add to Calendar
            </Button>
          </Col>
          <Col xs={6} sm="auto">
            <Button
              variant="phoenix-primary"
              className="w-full"
              startIcon={<FontAwesomeIcon icon={faHeart} className="me-2" />}
            >
              3677
            </Button>
          </Col>
          <Col xs={6} sm="auto">
            <Button
              variant="phoenix-primary"
              className="w-full"
              startIcon={
                <FontAwesomeIcon icon={faShareNodes} className="me-2" />
              }
            >
              4467
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EventTitleCard;
