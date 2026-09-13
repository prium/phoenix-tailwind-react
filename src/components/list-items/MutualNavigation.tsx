import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Row } from '@hummingbirdui/react';
import { mutualData } from 'data/social/dropdownData';
import { Link } from 'react-router';

/** `+ProfileNavigationTwo` in mixins/social/Profile.pug */
const MutualNavigation = () => {
  return (
    <>
      <div className="flex pb-6 items-end border-b border-subtle border-dashed">
        <h3 className="flex-1 mb-0">You and Erza</h3>
        <Link to="#!" className="font-bold text-md">
          See details
        </Link>
      </div>
      <Row className="g-0 mb-8 lg:mb-0">
        {mutualData.map(item => (
          <Col xs={12} key={item.label} className="border-b border-subtle py-2">
            <a
              href="#!"
              className="btn btn-link justify-start px-0 text-base text-muted text-primary-hover font-semibold"
            >
              <FontAwesomeIcon icon={item.icon} className="me-2" />
              {item.label}
            </a>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MutualNavigation;
