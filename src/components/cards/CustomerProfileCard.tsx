import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AvatarUpload from 'components/common/AvatarUpload';
import { Card, Col, Row } from '@hummingbirdui/react';
import team15 from 'assets/img/team/15.webp';
import {
  faFacebook,
  faLinkedinIn,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router';

const CustomerProfileCard = () => {
  return (
    <Card className="h-full">
      <Card.Body className="flex flex-col justify-between pb-4">
        <Row className="items-center g-8 mb-4 text-center sm:text-start">
          <Col xs={12} sm="auto" className="sm:mb-2">
            <AvatarUpload size="5xl" src={team15} />
          </Col>
          <Col xs={12} sm="auto" className="flex-1">
            <h3>Ansolo Lazinatov</h3>
            <p className="text-muted">Joined 3 months ago</p>
            <div className="inline-flex gap-2">
              <Link to="#!">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-soft/75 hover:text-primary"
                />
              </Link>
              <Link to="#!">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-soft/75 hover:text-primary"
                />
              </Link>
              <Link to="#!">
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-soft/75 hover:text-primary"
                />
              </Link>
            </div>
          </Col>
        </Row>

        <div className="flex flex-between-center border-t border-dashed pt-6">
          <div>
            <h6>Following</h6>
            <p className="text-lg text-muted mb-0">297</p>
          </div>
          <div className="">
            <h6>Projects</h6>
            <p className="text-lg text-muted mb-0">56</p>
          </div>
          <div className="">
            <h6>Completion</h6>
            <p className="text-lg text-muted mb-0">97</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomerProfileCard;
