import { Col, Row } from '@hummingbirdui/react';
import illustration30 from 'assets/img/spot-illustrations/light_30.png';
import illustration30Dark from 'assets/img/spot-illustrations/dark_30.png';
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const EcomBecomeMember = () => {
  return (
    <Row className="flex-center mb-30 mt-20 gy-10">
      <Col xs="auto">
        <img src={illustration30} alt="" className="dark:hidden" width={305} />
        <img
          src={illustration30Dark}
          alt=""
          className="hidden dark:block"
          width={305}
        />
      </Col>
      <Col xs="auto">
        <div className="text-center lg:text-start">
          <h3 className="text-highlight mb-2">
            <span className="font-semibold">Want to have the</span> ultimate <br className="md:hidden" />
            customer experience?
          </h3>
          <h1 className="display-3 font-semibold mb-6">
            Become a <span className="text-primary font-extrabold">member</span>{' '}
            today!
          </h1>
          <Link
            to="/pages/authentication/simple/sign-up"
            className="btn btn-lg btn-primary px-12"
          >
            Sign up
            <FontAwesomeIcon icon={faChevronRight} className="ms-2 text-md" />
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default EcomBecomeMember;
