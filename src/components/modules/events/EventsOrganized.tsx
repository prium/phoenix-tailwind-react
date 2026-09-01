import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';
import brandImg from 'assets/img/brand2/b.png';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const EventsOrganized = () => {
  return (
    <>
      <h3 className="mb-8 xl:mb-6">Organized by</h3>
      <Row className="g-2 mb-10 items-center">
        <Col xs="auto">
          <img
            src={brandImg}
            alt=""
            className="rounded-md img-fluid"
            width="40"
            height="40"
          />
        </Col>
        <Col sm="auto" className="flex-1">
          <Link to="#!" className="mb-0 text-primary font-semibold leading-sm">
            Bass Events, Inc.
          </Link>
        </Col>
        <Col sm="auto" xl={12} xxl="auto">
          <Button variant="link" className="text-default p-0 me-2">
            10k Followers
          </Button>
          <Button
            variant="phoenix-primary"
            className="px-4"
            startIcon={<FontAwesomeIcon icon={faUserPlus} className="me-2" />}
          >
            Follow
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default EventsOrganized;
