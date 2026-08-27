import { Card, Col, Dropdown, Row } from 'react-bootstrap';
import coverImage from 'assets/img/generic/cover-photo.png';
import CoverUpload from 'components/common/CoverUpload';
import profileImage from 'assets/img/team/9.webp';
import AvatarUpload from 'components/common/AvatarUpload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router';
import Button from 'components/base/Button';
import { dropdownData } from 'data/social/dropdownData';
import classNames from 'classnames';
import {
  faChevronDown,
  faLocationDot,
  faMessage,
  faUserCheck,
  faUserGroup,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';

const SocialCoverCard = () => {
  return (
    <Card className="mb-8">
      <Card.Header
        className="flex justify-center items-end relative mb-12 2xl:mb-0"
        style={{ minHeight: '214px' }}
      >
        <CoverUpload src={coverImage} />
        <AvatarUpload
          size="5xl"
          src={profileImage}
          thumbnail={true}
          className="feed-profile"
          imageClassName="border-0"
        />
      </Card.Header>
      <Card.Body>
        <Row className="xl:justify-between">
          <Col xs="auto">
            <div className="flex flex-wrap mb-4 items-center">
              <h2 className="me-2">Erza Bridgest</h2>
              <span className="font-semibold text-lg text-emphasis">
                u/hansolo
              </span>
            </div>
            <div className="mb-8">
              <div className="md:flex items-center">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    className="text-md text-subtle me-2 lg:me-1 xl:me-2"
                  />
                  <Link to="#!" className="text-emphasis">
                    <span className="text-lg font-bold text-subtle text-opacity-85 text-body-emphasis-hover">
                      1297
                      <span className="font-semibold ms-2 me-6">Followers</span>
                    </span>
                  </Link>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    className="text-md text-subtle me-2 lg:me-1 xl:me-2"
                  />
                  <Link to="#!" className="text-emphasis">
                    <span className="text-lg font-bold text-subtle text-opacity-85 text-body-emphasis-hover">
                      3971
                      <span className="font-semibold ms-2 me-6">Following</span>
                    </span>
                  </Link>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-md text-subtle me-2 lg:me-1 xl:me-2"
                  />
                  <Link to="#!" className="text-emphasis">
                    <span className="text-lg font-semibold text-subtle text-opacity-85 text-body-emphasis-hover">
                      Vancouver, Lothal
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <p className="text-xl text-muted">
              “Whenever you find yourself on the side of the majority, it is
              time to pause and reflect.”
            </p>
          </Col>
          <Col xs="auto">
            <Row className="g-2">
              <Col xs="auto" className="2xl:order-2">
                <Button
                  variant="primary"
                  className="leading-none"
                  startIcon={
                    <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                  }
                >
                  Follow Request
                </Button>
              </Col>
              <Col xs="auto" className="2xl:order-1">
                <Button
                  variant="phoenix-primary"
                  className="leading-none"
                  startIcon={
                    <FontAwesomeIcon icon={faMessage} className="me-2" />
                  }
                >
                  Send Message
                </Button>
              </Col>
              <Col xs="auto">
                <div className="static">
                  <Dropdown align="end">
                    <Dropdown.Toggle
                      className="dropdown-caret-none flex items-center leading-none"
                      variant="phoenix-secondary"
                    >
                      <FontAwesomeIcon icon={faChevronDown} className="me-2" />
                      More
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="py-2">
                      {dropdownData.map((item, index) => (
                        <Dropdown.Item
                          key={item.label}
                          className={classNames({ 'xl:hidden': index < 6 })}
                        >
                          <FontAwesomeIcon
                            icon={item.icon}
                            className="text-muted me-2"
                          />
                          {item.label}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SocialCoverCard;
