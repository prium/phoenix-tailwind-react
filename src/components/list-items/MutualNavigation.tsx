import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { mutualData } from 'data/social/dropdownData';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const MutualNavigation = () => {
  return (
    <>
      <div className="flex pb-4 align-items-end border-bottom border-subtle border-dashed">
        <h3 className="flex-1 mb-0">You and Erza</h3>
        <Link to="#!" className="font-bold text-md">
          See details
        </Link>
      </div>
      <Row className="g-0 mb-5 mb-lg-0">
        {mutualData.map(item => (
          <Col
            xs={12}
            key={item.label}
            className="border-bottom border-subtle py-2"
          >
            <Button
              variant="link"
              className="ps-0 text-base text-muted hover-primary font-semibold"
              startIcon={<FontAwesomeIcon icon={item.icon} className="me-2" />}
            >
              {item.label}
            </Button>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MutualNavigation;
