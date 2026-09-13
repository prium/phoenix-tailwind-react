import { ChangeEvent, useState } from 'react';
import {
  faCamera,
  faChevronDown,
  faLocationDot,
  faMessage,
  faUserCheck,
  faUserGroup,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Dropdown, Row, cn } from '@hummingbirdui/react';
import coverPhoto from 'assets/img/generic/cover-photo.png';
import profileImage from 'assets/img/team/9.webp';
import { dropdownData } from 'data/social/dropdownData';
import { Link } from 'react-router';

const usePreview = (initial: string) => {
  const [src, setSrc] = useState(initial);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setSrc(URL.createObjectURL(e.target.files[0]));
  };
  return { src, onChange };
};

/** `+ProfileCard` in mixins/social/Profile.pug */
const SocialCoverCard = () => {
  const cover = usePreview(coverPhoto);
  const profile = usePreview(profileImage);

  return (
    <Card className="mb-8">
      <Card.Header className="flex justify-center items-end relative mb-12 2xl:mb-0 min-h-53.5">
        <div className="hover-actions-trigger static!">
          <div
            className="bg-holder rounded-t-md"
            style={{ backgroundImage: `url(${cover.src})` }}
          />
          <input
            className="hidden"
            id="upload-cover-image"
            type="file"
            accept="image/*"
            onChange={cover.onChange}
          />
          <label
            className="cover-image-file-input"
            htmlFor="upload-cover-image"
          />
          <div className="hover-actions end-0 bottom-0 pe-1 pb-2 text-white">
            <FontAwesomeIcon icon={faCamera} className="me-2 overlay-icon" />
          </div>
        </div>
        <input
          className="hidden"
          id="upload-profile-picture"
          type="file"
          accept="image/*"
          onChange={profile.onChange}
        />
        <div className="hoverbox feed-profile size-37.5">
          <div className="hoverbox-content rounded-full flex flex-center z-1">
            <FontAwesomeIcon
              icon={faCamera}
              className="text-4xl text-secondary-light"
            />
          </div>
          <div className="relative bg-emphasis rounded-full cursor-pointer flex flex-center 2xl:mb-12">
            <div className="avatar avatar-4xl">
              <img
                className="img-thumbnail shadow-sm border-0 rounded-full"
                src={profile.src}
                alt=""
              />
            </div>
            <label
              className="w-full h-full absolute z-1"
              htmlFor="upload-profile-picture"
            />
          </div>
        </div>
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
                    <span className="text-lg font-bold text-subtle/85 hover:text-emphasis">
                      1297{' '}
                      <span className="font-semibold ms-1 me-6">Followers</span>
                    </span>
                  </Link>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faUserCheck}
                    className="text-md text-subtle me-2 lg:me-1 xl:me-2"
                  />
                  <Link to="#!" className="text-emphasis">
                    <span className="text-lg font-bold text-subtle/85 hover:text-emphasis">
                      3971{' '}
                      <span className="font-semibold ms-1 me-6">Following</span>
                    </span>
                  </Link>
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-md text-subtle me-2 lg:me-1 xl:me-2"
                  />
                  <Link to="#!" className="text-emphasis">
                    <span className="text-lg font-semibold text-subtle/85 hover:text-emphasis">
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
                <button type="button" className="btn btn-primary leading-none">
                  <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                  Follow Request
                </button>
              </Col>
              <Col xs="auto" className="2xl:order-1">
                <button
                  type="button"
                  className="btn btn-phoenix-primary leading-none"
                >
                  <FontAwesomeIcon icon={faMessage} className="me-2" />
                  Send Message
                </button>
              </Col>
              <Col xs="auto">
                <div className="static">
                  <Dropdown>
                    <Dropdown.Trigger asChild>
                      <button
                        type="button"
                        className="btn btn-phoenix-secondary leading-none"
                      >
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="me-2"
                        />
                        {/* gold emits "</span> More" — keep the leading space */}
                        {' More'}
                      </button>
                    </Dropdown.Trigger>
                    <Dropdown.Content align="end" className="py-2">
                      {dropdownData.map((item, index) => (
                        <Dropdown.Item
                          key={item.label}
                          className={cn('text-start', {
                            'xl:hidden': index < 6
                          })}
                        >
                          <FontAwesomeIcon
                            icon={item.icon}
                            className="text-muted me-2"
                          />
                          <span>{item.label}</span>
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Content>
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
